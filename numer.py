import re
from datetime import date

# Chaldean mapping (A-Z)
CHALDEAN = {
    **dict.fromkeys(list("AIJQY"), 1),
    **dict.fromkeys(list("BKR"), 2),
    **dict.fromkeys(list("CGLS"), 3),
    **dict.fromkeys(list("DMT"), 4),
    **dict.fromkeys(list("EHNX"), 5),
    **dict.fromkeys(list("UVW"), 6),
    **dict.fromkeys(list("OZ"), 7),
    **dict.fromkeys(list("FP"), 8),
}

# Pythagorean mapping (A-Z) for Name Chart (1..9)
PYTHAGOREAN = {
    **dict.fromkeys(list("AJS"), 1),
    **dict.fromkeys(list("BKT"), 2),
    **dict.fromkeys(list("CLU"), 3),
    **dict.fromkeys(list("DMV"), 4),
    **dict.fromkeys(list("ENW"), 5),
    **dict.fromkeys(list("FOX"), 6),
    **dict.fromkeys(list("GPY"), 7),
    **dict.fromkeys(list("HQZ"), 8),
    **dict.fromkeys(list("IR"), 9),
}

ZODIAC_SIGNS = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
]

ZODIAC_ABBR = [
    "Ar", "Ta", "Ge", "Cn", "Le", "Vi",
    "Li", "Sc", "Sg", "Cp", "Aq", "Pi",
]

# South Indian chart fixed-sign layout as a 4x4 grid of sign indices (0..11),
# with the center 2x2 kept empty (None).
# Layout is rotated so the first row is: Pisces, Aries, Taurus, Gemini.
SOUTH_INDIAN_LAYOUT = [
    [11, 0, 1, 2],        # Pisces, Aries, Taurus, Gemini
    [10, None, None, 3],  # Aquarius, -, -, Cancer
    [9, None, None, 4],   # Capricorn, -, -, Leo
    [8, 7, 6, 5],         # Sagittarius, Scorpio, Libra, Virgo
]

def pyth_value(ch: str) -> int:
    ch = ch.upper()
    if ch not in PYTHAGOREAN:
        raise ValueError(f"Unsupported character for name chart: {ch}")
    return PYTHAGOREAN[ch]

def name_chart_trace(name: str):
    """Return a trace of (letter, value, sign_index) using the user's rule.

    Rule inferred from examples:
    - Start from Aries (index 0)
    - For the first letter: position = Aries shifted by (value-1)
    - For each next letter: position = previous position shifted by (value-1)
    - Place the letter in that sign

    This matches: Amma -> A in Aries, M in Cancer, M in Libra, A in Libra;
                 Mama -> M in Cancer, A in Cancer, M in Libra, A in Libra.
    """
    clean = clean_name(name)
    if not clean:
        return clean, []

    trace = []
    pos = 0  # Aries
    for i, ch in enumerate(clean):
        v = pyth_value(ch)
        if i == 0:
            pos = (0 + (v - 1)) % 12
        else:
            pos = (pos + (v - 1)) % 12
        trace.append((ch, v, pos))
    return clean, trace

def build_name_chart_sign_contents(trace):
    """Aggregate placed letters into per-sign strings."""
    per_sign = {i: [] for i in range(12)}
    for ch, v, pos in trace:
        per_sign[pos].append(ch)
    return {i: "".join(per_sign[i]) for i in range(12)}



# --- NAME YEAR MAPPING (PYTHAGOREAN) ---

def safe_anniversary(year: int, month: int, day: int) -> date:
    """Return the anniversary date in a given year; if invalid (e.g., Feb 29), fall back to Feb 28."""
    try:
        return date(year, month, day)
    except ValueError:
        # Common edge case: Feb 29 on non-leap years
        if month == 2 and day == 29:
            return date(year, 2, 28)
        raise


def build_name_year_mapping(name: str, dob: date, end_date: date):
    """
    Build date mapping for a name based on DOB, repeating the name cyclically
    until `end_date` (inclusive).

    Rule:
    - First letter is assigned the DOB date.
    - Each subsequent letter date occurs on the DOB anniversary in (previous_year + Pythagorean value(letter)).
    - Letters repeat in a cycle (name wraps around).

    Returns list of dict rows: {step, letter, value, year, date}.
    """
    clean = clean_name(name)
    rows = []
    if not clean:
        return clean, rows

    if end_date < dob:
        end_date = dob

    # First row: exact DOB
    year = dob.year
    ch = clean[0]
    v = pyth_value(ch)
    rows.append({
        "step": 1,
        "letter": ch,
        "value": v,
        "year": year,
        "date": dob.strftime("%d/%m/%Y"),
    })

    i = 1
    current_year = year

    # Next rows: DOB anniversary in computed years
    while True:
        ch = clean[i % len(clean)]
        v = pyth_value(ch)
        next_year = current_year + v
        next_dt = safe_anniversary(next_year, dob.month, dob.day)
        if next_dt > end_date:
            break
        current_year = next_year
        rows.append({
            "step": len(rows) + 1,
            "letter": ch,
            "value": v,
            "year": next_year,
            "date": next_dt.strftime("%d/%m/%Y"),
        })
        i += 1

    return clean, rows


def format_name_year_table(rows) -> str:
    """Format rows into a simple aligned text table."""
    if not rows:
        return "(no rows)"

    # Column widths
    w_step = 6
    w_letter = 6
    w_val = 6
    w_date = 12

    header = f"{'Step':<{w_step}} {'Letter':<{w_letter}} {'Val':<{w_val}} {'Date':<{w_date}}"
    sep = "-" * len(header)

    lines = [header, sep]
    for r in rows:
        lines.append(f"{r['step']:<{w_step}} {r['letter']:<{w_letter}} {r['value']:<{w_val}} {r['date']:<{w_date}}")
    return "\n".join(lines)

def format_south_indian_name_chart(per_sign: dict[int, str]) -> str:
    """Render a South Indian fixed-sign 4x4 chart with sign abbr + placed letters."""
    # Build 4x4 cells like "Ar\nAM" but render as 2-line cells.
    grid = []
    for row in SOUTH_INDIAN_LAYOUT:
        grid_row = []
        for idx in row:
            if idx is None:
                grid_row.append(["", ""])  # empty center
            else:
                letters = per_sign.get(idx, "")
                grid_row.append([ZODIAC_ABBR[idx], letters])
        grid.append(grid_row)

    # Box-draw with 2 lines per cell
    col_w = 8
    top = "┌" + "┬".join(["─" * col_w] * 4) + "┐"
    mid = "├" + "┼".join(["─" * col_w] * 4) + "┤"
    bot = "└" + "┴".join(["─" * col_w] * 4) + "┘"

    lines = [top]
    for r_i, row in enumerate(grid):
        # line 1: sign abbr
        l1 = "│" + "│".join(f"{cell[0]:^{col_w}}" for cell in row) + "│"
        # line 2: letters
        l2 = "│" + "│".join(f"{cell[1]:^{col_w}}" for cell in row) + "│"
        lines.append(l1)
        lines.append(l2)
        if r_i < 3:
            lines.append(mid)
    lines.append(bot)
    return "\n".join(lines)

def clean_name(s: str) -> str:
    return re.sub(r"[^A-Za-z]", "", s).upper()

def reduce_to_digit(n: int, keep_masters: bool = True) -> int:
    while n >= 10:
        if keep_masters and n in (11, 22):
            return n
        n = sum(int(d) for d in str(n))
    return n

def name_numbers(name: str):
    name = clean_name(name)
    nums = [CHALDEAN[ch] for ch in name]
    return name, nums

def pyramid_rows(nums, keep_masters: bool = False):
    # Pyramid typically uses single-digit reduction at each step (no masters)
    rows = [nums[:]]
    while len(rows[-1]) > 1:
        prev = rows[-1]
        nxt = [reduce_to_digit(prev[i] + prev[i+1], keep_masters=keep_masters) for i in range(len(prev)-1)]
        rows.append(nxt)
    return rows

def print_pyramid(rows):
    for r in rows:
        print("".join(str(x) for x in r))


def hr(char: str = "─", width: int = 56) -> str:
    return char * width


def section(title: str, width: int = 56) -> None:
    print("\n" + hr("═", width))
    print(f"{title}".center(width))
    print(hr("═", width))


def kv(label: str, value, label_w: int = 26) -> None:
    print(f"{label:<{label_w}} : {value}")


def format_number_list(nums: list[int]) -> str:
    return " ".join(str(n) for n in nums)


def print_pyramid_pretty(rows, indent: int = 4) -> None:
    """Print pyramid with indentation so the triangle shape is visually obvious."""
    pad = " " * indent
    for i, r in enumerate(rows):
        # Add extra left padding each row for a tapered look
        extra = " " * (i)
        print(pad + extra + "".join(str(x) for x in r))


def parse_dob(dob_str: str) -> date:
    """
    Accepts DOB as YYYY-MM-DD or DD-MM-YYYY or DD/MM/YYYY.
    Returns a datetime.date.
    """
    s = dob_str.strip()
    s2 = s.replace("/", "-")
    parts = s2.split("-")
    if len(parts) != 3:
        raise ValueError("Invalid date format. Use YYYY-MM-DD or DD-MM-YYYY or DD/MM/YYYY")

    a, b, c = parts
    # If first part has 4 digits, assume year-first (YYYY-MM-DD)
    if len(a) == 4:
        y, m, d = int(a), int(b), int(c)
    else:
        # Assume day-first (DD-MM-YYYY)
        d, m, y = int(a), int(b), int(c)

    return date(y, m, d)



def destiny_number(dob: date, keep_masters: bool = True) -> int:
    """Destiny / Life Path number: sum all DOB digits and reduce."""
    digits = [int(ch) for ch in dob.strftime("%Y%m%d")]
    total = sum(digits)
    return reduce_to_digit(total, keep_masters=keep_masters)


def ruling_number(dob: date, keep_masters: bool = True) -> int:
    """Ruling number: reduce the day-of-month only (e.g., 29 -> 2+9 -> 11/2 depending on keep_masters)."""
    return reduce_to_digit(dob.day, keep_masters=keep_masters)


def name_number(nums, keep_masters: bool = True):
    """Name number: total of name values + reduced."""
    total = sum(nums)
    reduced = reduce_to_digit(total, keep_masters=keep_masters)
    return total, reduced


# --- Chaldean month and alternate destiny calculation ---

MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
]

# --- Lo Shu Grid (Chinese Numerology) ---
# Standard Lo Shu arrangement:
# 4 9 2
# 3 5 7
# 8 1 6
LOSHU_LAYOUT = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
]

# --- Shiva Maya Chakra (9x9) ---
# Base 3x3 (for ruling number 1 / start shift 0)
SHIVA_MAYA_BASE_3X3 = [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
]

# Starting number mapping by ruling number of day-of-birth
# 1->1, 2->2, 3->5, 4->8, 5->4, 6->6, 7->9, 8->7, 9->3
SHIVA_MAYA_START_BY_RULING = {
    1: 1,
    2: 2,
    3: 5,
    4: 8,
    5: 4,
    6: 6,
    7: 9,
    8: 7,
    9: 3,
}


def shiva_maya_start_number(ruling: int) -> int:
    if ruling not in SHIVA_MAYA_START_BY_RULING:
        raise ValueError("Ruling number must be 1..9")
    return SHIVA_MAYA_START_BY_RULING[ruling]


def shiva_maya_chakra_3x3(ruling: int):
    """Shiva Maya Chakra 3x3 for a ruling number (base shifted by start-1)."""
    start = shiva_maya_start_number(ruling)
    shift = start - 1
    return [[v + shift for v in row] for row in SHIVA_MAYA_BASE_3X3]


def loshu_counts_from_dob(dob: date) -> dict[int, int]:
    """Return counts of digits 1..9 from DOB (DD/MM/YYYY), ignoring zeros."""
    digits = [int(ch) for ch in dob.strftime("%d%m%Y")]
    counts: dict[int, int] = {i: 0 for i in range(1, 10)}
    for d in digits:
        if d == 0:
            continue
        counts[d] += 1
    return counts


def loshu_grid_from_counts(counts: dict[int, int]):
    """Build a 3x3 Lo Shu grid where each cell contains the digit repeated by its count (blank if 0)."""
    grid = []
    for row in LOSHU_LAYOUT:
        grid_row = []
        for n in row:
            c = counts.get(n, 0)
            grid_row.append(str(n) * c if c > 0 else "")
        grid.append(grid_row)
    return grid


def loshu_grid(dob: date):
    """Convenience: build Lo Shu grid directly from DOB."""
    return loshu_grid_from_counts(loshu_counts_from_dob(dob))


def loshu_missing_numbers(counts: dict[int, int]) -> list[int]:
    """Numbers 1..9 that are absent from the Lo Shu grid."""
    return [n for n in range(1, 10) if counts.get(n, 0) == 0]



def format_box_grid(grid, col_w: int = 5, empty_char: str = ".") -> str:
    """Box-draw any 2D grid. If a cell is empty string, uses `empty_char`."""
    def cell(x) -> str:
        s = str(x)
        return s if s != "" else empty_char

    cols = len(grid[0]) if grid else 0
    top = "┌" + "┬".join(["─" * col_w] * cols) + "┐"
    mid = "├" + "┼".join(["─" * col_w] * cols) + "┤"
    bot = "└" + "┴".join(["─" * col_w] * cols) + "┘"

    lines = [top]
    for r_i, row in enumerate(grid):
        line = "│" + "│".join(f"{cell(x):^{col_w}}" for x in row) + "│"
        lines.append(line)
        if r_i < len(grid) - 1:
            lines.append(mid)
    lines.append(bot)
    return "\n".join(lines)


def format_loshu_grid(grid) -> str:
    """Pretty format a Lo Shu grid as a boxed 3x3 table; uses '.' for empty cells."""
    return format_box_grid(grid, col_w=5, empty_char=".")


def chaldean_word_number(word: str, keep_masters: bool = True) -> int:
    """Chaldean reduction for a word (map letters -> sum -> reduce)."""
    _, nums = name_numbers(word)
    total = sum(nums)
    return reduce_to_digit(total, keep_masters=keep_masters)


def chaldean_month_number(month: int, keep_masters: bool = True) -> int:
    """Chaldean number for month name (e.g., January -> reduced Chaldean)."""
    if not 1 <= month <= 12:
        raise ValueError("Month must be 1..12")
    return chaldean_word_number(MONTH_NAMES[month - 1], keep_masters=keep_masters)


def destiny_number_chaldean(dob: date, keep_masters: bool = True) -> int:
    """
    Chaldean Destiny / Life Path variant:
    - Day: sum of day digits (e.g., 17 -> 1+7)
    - Month: Chaldean-reduced value of month *name* (January, February, ...)
    - Year: sum of year digits (e.g., 1993 -> 1+9+9+3)
    Then reduce the grand total.
    """
    day_sum = sum(int(d) for d in f"{dob.day:02d}")
    year_sum = sum(int(d) for d in f"{dob.year:04d}")
    month_ch = chaldean_month_number(dob.month, keep_masters=keep_masters)

    total = day_sum + month_ch + year_sum
    return reduce_to_digit(total, keep_masters=keep_masters)

if __name__ == "__main__":
    name_input = input("Enter name: ")
    dob_input = input("Enter DOB (YYYY-MM-DD or DD-MM-YYYY or DD/MM/YYYY) [optional]: ").strip()

    clean, nums = name_numbers(name_input)
    n_total, n_reduced = name_number(nums, keep_masters=True)

    section("CHALDEAN NAME", 56)
    kv("Name (clean)", clean)
    kv("Letter numbers", format_number_list(nums))
    kv("Name total", n_total)
    kv("Name number (reduced)", n_reduced)

    # --- NAME CHART (PYTHAGOREAN) ---
    section("NAME CHART (PYTHAGOREAN)", 56)
    nclean, trace = name_chart_trace(name_input)
    if not trace:
        print("(No letters to chart)")
    else:
        # Step trace for easy verification
        print("Step trace: letter(value) -> sign")
        for ch, v, pos in trace:
            print(f"  {ch}({v}) -> {ZODIAC_SIGNS[pos]}")

        per_sign = build_name_chart_sign_contents(trace)
        print("\nSouth Indian chart (fixed signs):")
        print(format_south_indian_name_chart(per_sign))

    section("PYRAMID", 56)
    rows = pyramid_rows(nums, keep_masters=False)
    print_pyramid_pretty(rows, indent=6)

    if dob_input:
        try:
            dob = parse_dob(dob_input)

            section("DOB NUMBERS", 56)
            kv("DOB parsed", dob.isoformat())

            d_num = destiny_number(dob, keep_masters=True)
            r_num = ruling_number(dob, keep_masters=True)
            ch_month = chaldean_month_number(dob.month, keep_masters=True)
            ch_destiny = destiny_number_chaldean(dob, keep_masters=True)

            kv("Destiny (Life Path)", d_num)
            kv("Ruling (day only)", r_num)

            section("SHIVA MAYA CHAKRA", 56)

            # Chakra uses ruling number (day only) reduced to 1..9 (masters not used here)
            ruling_single = reduce_to_digit(dob.day, keep_masters=False)
            kv("Ruling (single)", ruling_single)

            start_num = shiva_maya_start_number(ruling_single)
            kv("Start number", start_num)

            print("\nShiva Maya 3x3 for your ruling number:")
            print(format_box_grid(shiva_maya_chakra_3x3(ruling_single), col_w=4, empty_char=""))

            kv(f"Chaldean month ({MONTH_NAMES[dob.month - 1]})", ch_month)
            kv("Chaldean destiny", ch_destiny)

            counts = loshu_counts_from_dob(dob)
            grid = loshu_grid_from_counts(counts)
            missing = loshu_missing_numbers(counts)

            section("LO SHU GRID", 56)
            print("Digits taken from DOB (DDMMYYYY); 0 is ignored.")
            print(format_loshu_grid(grid))

            # Compact counts line: only show digits that exist
            present = {k: v for k, v in counts.items() if v > 0}
            kv("Present counts", present)
            kv("Missing numbers", missing)

            section("NAME YEAR MAPPING (PYTHAGOREAN)", 56)
            end_date = date.today()
            nclean2, year_rows = build_name_year_mapping(name_input, dob, end_date)
            kv("Birth date", dob.strftime("%d/%m/%Y"))
            kv("End date", end_date.strftime("%d/%m/%Y"))
            kv("Name (clean)", nclean2)
            print("\n" + format_name_year_table(year_rows))

        except ValueError as e:
            section("DOB ERROR", 56)
            print(str(e))
