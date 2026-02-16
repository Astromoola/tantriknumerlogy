const CHALDEAN = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8
};

const PYTHAGOREAN = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9
};

const ZODIAC_SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const ZODIAC_ABBR = [
  "Ar", "Ta", "Ge", "Cn", "Le", "Vi",
  "Li", "Sc", "Sg", "Cp", "Aq", "Pi"
];

const SOUTH_INDIAN_LAYOUT = [
  [11, 0, 1, 2],
  [10, null, null, 3],
  [9, null, null, 4],
  [8, 7, 6, 5]
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const LOSHU_LAYOUT = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6]
];

const SHIVA_MAYA_BASE_3X3 = [
  [6, 7, 2],
  [1, 5, 9],
  [8, 3, 4]
];

const SHIVA_MAYA_START_BY_RULING = {
  1: 1,
  2: 2,
  3: 5,
  4: 8,
  5: 4,
  6: 6,
  7: 9,
  8: 7,
  9: 3
};

const NUMBER_ATTRIBUTES = {
  1: {
    excellent: [1, 4],
    good: [5, 9, 3],
    bad: [7, 8],
    neutral: [2, 6],
    gem: "Ruby",
    gemAlternative: "Suryakanthika (Star Ruby)",
    colors: "Orange, White"
  },
  2: {
    excellent: [7, 5],
    good: [2, 6, 4],
    bad: [9, 8],
    neutral: [1, 3],
    gem: "Pearl",
    gemAlternative: "Chandrakanthika (Moon Stone)",
    colors: "White, Grey"
  },
  3: {
    excellent: [1, 9],
    good: [3, 5],
    bad: [6, 8],
    neutral: [2, 4, 7],
    gem: "Yellow Sapphire",
    gemAlternative: "Amethyst",
    colors: "Yellow, Turquoise, Light Blue"
  },
  4: {
    excellent: [1],
    good: [5, 6],
    bad: [4, 7, 8],
    neutral: [2, 3, 9],
    gem: "Gomedhikam (Hessonite)",
    gemAlternative: "Opal",
    colors: "Mixed Colours"
  },
  5: {
    excellent: [4, 5],
    good: [1, 2, 3, 6, 7, 8, 9],
    bad: [],
    neutral: [],
    gem: "Emerald",
    gemAlternative: "",
    colors: "Light Green, Avoid all dark colours"
  },
  6: {
    excellent: [5],
    good: [6, 9],
    bad: [1, 7, 8],
    neutral: [2, 3, 4],
    gem: "Diamond",
    gemAlternative: "American Diamond",
    colors: "Pink"
  },
  7: {
    excellent: [2],
    good: [5],
    bad: [8, 9],
    neutral: [1, 3, 4, 6, 7],
    gem: "Cats Eye",
    gemAlternative: "",
    colors: "All Colours"
  },
  8: {
    excellent: [5],
    good: [1],
    bad: [8, 4, 7],
    neutral: [2, 3, 6, 9],
    gem: "Blue Sapphire",
    gemAlternative: "",
    colors: "Dark Blue, Royal Blue, Light Black"
  },
  9: {
    excellent: [1, 3],
    good: [5, 6, 9],
    bad: [2, 8, 7],
    neutral: [4],
    gem: "Coral",
    gemAlternative: "",
    colors: "Brown, Red"
  }
};

const PLANET_BY_NUMBER = {
  1: "Sun",
  2: "Moon",
  3: "Jupiter",
  4: "Rahu",
  5: "Mercury",
  6: "Venus",
  7: "Ketu",
  8: "Saturn",
  9: "Mars"
};

const el = {
  form: document.getElementById("calcForm"),
  name: document.getElementById("nameInput"),
  dob: document.getElementById("dobInput"),
  endDate: document.getElementById("endDateInput"),
  hint: document.getElementById("formHint"),
  reset: document.getElementById("resetBtn"),
  dashboard: document.getElementById("dashboard"),
  summaryGrid: document.getElementById("summaryGrid"),
  coreBreakdown: document.getElementById("coreBreakdown"),
  pyramidChart: document.getElementById("pyramidChart"),
  nameChartGrid: document.getElementById("nameChartGrid"),
  loShuGrid: document.getElementById("loShuGrid"),
  loShuMeta: document.getElementById("loShuMeta"),
  shivaMayaGrid: document.getElementById("shivaMayaGrid"),
  yearTimeline: document.getElementById("yearTimeline"),
  yearTableBody: document.querySelector("#yearTable tbody"),
  attributeCards: document.getElementById("attributeCards"),
  attributeTableBody: document.querySelector("#attributeTable tbody"),
  nameValues: document.getElementById("nameValues"),
  nameTrace: document.getElementById("nameTrace")
};

init();

function init() {
  el.endDate.value = formatIsoDate(new Date());
  el.form.addEventListener("submit", handleSubmit);
  el.reset.addEventListener("click", handleReset);
  el.name.addEventListener("input", () => setHint("Enter your name and date of birth to generate a complete Tanktrik numerology report."));
  el.dob.addEventListener("input", () => setHint("Enter your name and date of birth to generate a complete Tanktrik numerology report."));
}

function handleSubmit(event) {
  event.preventDefault();

  const rawName = el.name.value.trim();
  const dob = parseIsoDate(el.dob.value);
  const endDate = el.endDate.value ? parseIsoDate(el.endDate.value) : new Date();

  if (!rawName || !dob) {
    setHint("Please provide both full name and date of birth.", true);
    return;
  }

  const nameData = nameNumbers(rawName);
  if (!nameData.clean) {
    setHint("Name must include at least one alphabetic character.", true);
    return;
  }

  if (!endDate) {
    setHint("Please enter a valid analysis end date.", true);
    return;
  }

  const nameTotals = nameNumber(nameData.nums, true);
  const pyramid = pyramidRows(nameData.nums, false);
  const pyramidNumber = pyramid.length ? pyramid[pyramid.length - 1][0] : 0;
  const destiny = destinyNumber(dob, true);
  const ruling = rulingNumber(dob, true);
  const rulingSingle = reduceToDigit(dob.getDate(), false);
  const chMonth = chaldeanMonthNumber(dob.getMonth() + 1, true);
  const chDestiny = destinyNumberChaldean(dob, true);
  const chart = nameChartTrace(rawName);
  const signLetters = buildNameChartSignContents(chart.trace);
  const yearMap = buildNameYearMapping(rawName, dob, endDate);
  const loShuCounts = loshuCountsFromDob(dob);
  const loShuGrid = loshuGridFromCounts(loShuCounts);
  const loShuMissing = loshuMissingNumbers(loShuCounts);
  const shivaMaya = shivaMayaChakra3x3(rulingSingle);
  const attributeRows = buildAttributeRows({
    nameNumber: nameTotals.reduced,
    pyramidNumber,
    destinyNumber: destiny.value,
    rulingNumber: ruling
  });

  renderSummaryCards({
    nameReduced: nameTotals.reduced,
    nameTotal: nameTotals.total,
    pyramidNumber,
    destiny: destiny.value,
    ruling,
    chDestiny,
    timelineCount: yearMap.rows.length
  });

  renderAttributeCards(attributeRows);
  renderAttributeTable(attributeRows);

  renderCoreBreakdown({
    nameData,
    nameTotals,
    pyramidNumber,
    destiny,
    ruling,
    chMonth,
    chDestiny,
    loShuMissing,
    yearRows: yearMap.rows
  });

  renderPyramid(pyramid);
  renderSouthIndianChart(signLetters);
  renderMatrix(el.loShuGrid, loShuGrid, (value) => value || ".");
  renderLoShuMeta(loShuCounts, loShuMissing);
  renderMatrix(el.shivaMayaGrid, shivaMaya, (value) => String(value));
  renderTimeline(yearMap.rows);
  renderYearTable(yearMap.rows);
  renderTrace(nameData, chart.trace);

  el.dashboard.hidden = false;
  setHint(`Report generated for ${nameData.clean}.`);
}

function handleReset() {
  el.form.reset();
  el.endDate.value = formatIsoDate(new Date());
  el.dashboard.hidden = true;
  el.summaryGrid.innerHTML = "";
  el.coreBreakdown.innerHTML = "";
  el.pyramidChart.innerHTML = "";
  el.nameChartGrid.innerHTML = "";
  el.loShuGrid.innerHTML = "";
  el.loShuMeta.innerHTML = "";
  el.shivaMayaGrid.innerHTML = "";
  el.yearTimeline.innerHTML = "";
  el.yearTableBody.innerHTML = "";
  el.attributeCards.innerHTML = "";
  el.attributeTableBody.innerHTML = "";
  el.nameValues.textContent = "";
  el.nameTrace.innerHTML = "";
  setHint("Enter your name and date of birth to generate a complete Tanktrik numerology report.");
}

function setHint(message, isError = false) {
  el.hint.textContent = message;
  el.hint.classList.toggle("is-error", isError);
}

function cleanName(value) {
  return value.replace(/[^a-z]/gi, "").toUpperCase();
}

function reduceToDigit(number, keepMasters = true) {
  let value = Math.abs(Number(number));
  while (value >= 10) {
    if (keepMasters && (value === 11 || value === 22)) {
      return value;
    }
    value = String(value)
      .split("")
      .map(Number)
      .reduce((sum, digit) => sum + digit, 0);
  }
  return value;
}

function nameNumbers(name) {
  const clean = cleanName(name);
  return {
    clean,
    nums: [...clean].map((ch) => CHALDEAN[ch])
  };
}

function nameNumber(nums, keepMasters = true) {
  const total = nums.reduce((sum, value) => sum + value, 0);
  return {
    total,
    reduced: reduceToDigit(total, keepMasters)
  };
}

function pyramidRows(nums, keepMasters = false) {
  if (!nums.length) {
    return [];
  }
  const rows = [nums.slice()];
  while (rows[rows.length - 1].length > 1) {
    const prev = rows[rows.length - 1];
    const next = [];
    for (let i = 0; i < prev.length - 1; i += 1) {
      next.push(reduceToDigit(prev[i] + prev[i + 1], keepMasters));
    }
    rows.push(next);
  }
  return rows;
}

function destinyNumber(dob, keepMasters = true) {
  const digits = formatIsoDate(dob).replaceAll("-", "").split("").map(Number);
  const total = digits.reduce((sum, digit) => sum + digit, 0);
  return {
    digits,
    total,
    value: reduceToDigit(total, keepMasters)
  };
}

function rulingNumber(dob, keepMasters = true) {
  return reduceToDigit(dob.getDate(), keepMasters);
}

function chaldeanWordNumber(word, keepMasters = true) {
  const clean = cleanName(word);
  const total = [...clean]
    .map((ch) => CHALDEAN[ch])
    .reduce((sum, value) => sum + value, 0);
  return reduceToDigit(total, keepMasters);
}

function chaldeanMonthNumber(month, keepMasters = true) {
  return chaldeanWordNumber(MONTH_NAMES[month - 1], keepMasters);
}

function destinyNumberChaldean(dob, keepMasters = true) {
  const daySum = String(dob.getDate()).padStart(2, "0").split("").map(Number).reduce((a, b) => a + b, 0);
  const yearSum = String(dob.getFullYear()).split("").map(Number).reduce((a, b) => a + b, 0);
  const monthValue = chaldeanMonthNumber(dob.getMonth() + 1, keepMasters);
  const total = daySum + monthValue + yearSum;
  return reduceToDigit(total, keepMasters);
}

function pythValue(letter) {
  if (!PYTHAGOREAN[letter]) {
    throw new Error(`Unsupported character for name chart: ${letter}`);
  }
  return PYTHAGOREAN[letter];
}

function nameChartTrace(name) {
  const clean = cleanName(name);
  const trace = [];
  let position = 0;

  [...clean].forEach((letter, index) => {
    const value = pythValue(letter);
    if (index === 0) {
      position = (0 + (value - 1)) % 12;
    } else {
      position = (position + (value - 1)) % 12;
    }
    trace.push({
      letter,
      value,
      signIndex: position,
      sign: ZODIAC_SIGNS[position]
    });
  });

  return { clean, trace };
}

function buildNameChartSignContents(trace) {
  const perSign = Array.from({ length: 12 }, () => []);
  trace.forEach((step) => {
    perSign[step.signIndex].push(step.letter);
  });
  return perSign.map((letters) => letters.join(""));
}

function safeAnniversary(year, month, day) {
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  ) {
    return date;
  }
  if (month === 2 && day === 29) {
    return new Date(year, 1, 28);
  }
  throw new Error("Invalid anniversary date");
}

function buildNameYearMapping(name, dob, endDate) {
  const clean = cleanName(name);
  const rows = [];

  if (!clean) {
    return { clean, rows };
  }

  let limitDate = endDate;
  if (endDate < dob) {
    limitDate = dob;
  }

  let currentYear = dob.getFullYear();
  const firstLetter = clean[0];
  rows.push({
    step: 1,
    letter: firstLetter,
    value: pythValue(firstLetter),
    year: currentYear,
    date: formatDisplayDate(dob)
  });

  let index = 1;
  while (true) {
    const letter = clean[index % clean.length];
    const value = pythValue(letter);
    const nextYear = currentYear + value;
    const nextDate = safeAnniversary(nextYear, dob.getMonth() + 1, dob.getDate());
    if (nextDate > limitDate) {
      break;
    }
    currentYear = nextYear;
    rows.push({
      step: rows.length + 1,
      letter,
      value,
      year: nextYear,
      date: formatDisplayDate(nextDate)
    });
    index += 1;
  }

  return { clean, rows };
}

function loshuCountsFromDob(dob) {
  const digits = formatDisplayDate(dob).replaceAll("/", "").split("").map(Number);
  const counts = {};
  for (let i = 1; i <= 9; i += 1) {
    counts[i] = 0;
  }
  digits.forEach((digit) => {
    if (digit !== 0) {
      counts[digit] += 1;
    }
  });
  return counts;
}

function loshuGridFromCounts(counts) {
  return LOSHU_LAYOUT.map((row) =>
    row.map((value) => (counts[value] > 0 ? String(value).repeat(counts[value]) : ""))
  );
}

function loshuMissingNumbers(counts) {
  const missing = [];
  for (let i = 1; i <= 9; i += 1) {
    if (!counts[i]) {
      missing.push(i);
    }
  }
  return missing;
}

function shivaMayaStartNumber(ruling) {
  return SHIVA_MAYA_START_BY_RULING[ruling];
}

function shivaMayaChakra3x3(ruling) {
  const start = shivaMayaStartNumber(ruling);
  const shift = start - 1;
  return SHIVA_MAYA_BASE_3X3.map((row) => row.map((value) => value + shift));
}

function renderSummaryCards(data) {
  const cards = [
    { label: "Name Signature", value: data.nameReduced, note: `Total ${data.nameTotal}` },
    { label: "Pyramid Apex", value: data.pyramidNumber, note: "Final reduction point" },
    { label: "Destiny Number", value: data.destiny, note: "Life path from full DOB" },
    { label: "Ruling Number", value: data.ruling, note: "Day-of-birth influence" },
    { label: "Chaldean Destiny", value: data.chDestiny, note: "Month-name method" },
    { label: "Timeline Events", value: data.timelineCount, note: "Within selected horizon" }
  ];

  el.summaryGrid.innerHTML = "";
  cards.forEach((card, index) => {
    const article = document.createElement("article");
    article.className = "stat-card";
    article.style.animationDelay = `${index * 40}ms`;
    article.innerHTML = `
      <p class="stat-label">${card.label}</p>
      <p class="stat-value">${card.value}</p>
      <p class="stat-note">${card.note}</p>
    `;
    el.summaryGrid.appendChild(article);
  });
}

function renderCoreBreakdown(data) {
  const letterMath = data.nameData.clean
    .split("")
    .map((letter, index) => `${letter}(${data.nameData.nums[index]})`)
    .join(" + ");

  const destinyMath = `${data.destiny.digits.join(" + ")} = ${data.destiny.total}`;

  const cards = [
    {
      title: "Chaldean Name Computation",
      body: `${letterMath} = ${data.nameTotals.total} -> ${data.nameTotals.reduced}`
    },
    {
      title: "Destiny Number Computation",
      body: `${destinyMath} -> ${data.destiny.value}`
    },
    {
      title: "Ruling and Month Influence",
      body: `Ruling Number: ${data.ruling} | Month Number: ${data.chMonth}`
    },
    {
      title: "Pyramid Apex",
      body: `Apex value: ${data.pyramidNumber}`
    },
    {
      title: "Chaldean Destiny Value",
      body: `Reduced output: ${data.chDestiny}`
    },
    {
      title: "Lo Shu Gaps",
      body: data.loShuMissing.length ? data.loShuMissing.join(", ") : "None"
    },
    {
      title: "Timeline Coverage",
      body: `${data.yearRows.length} event(s) generated`
    }
  ];

  el.coreBreakdown.innerHTML = "";
  cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "detail-card";
    article.innerHTML = `
      <h3>${card.title}</h3>
      <p>${card.body}</p>
    `;
    el.coreBreakdown.appendChild(article);
  });
}

function buildAttributeRows(values) {
  return [
    { type: "Name Signature Number", value: values.nameNumber },
    { type: "Pyramid Apex Number", value: values.pyramidNumber },
    { type: "Destiny Number", value: values.destinyNumber },
    { type: "Ruling Number", value: values.rulingNumber }
  ].map((entry) => {
    const lookup = normalizeAttributeNumber(entry.value);
    const attr = NUMBER_ATTRIBUTES[lookup] || {
      excellent: [],
      good: [],
      neutral: [],
      bad: [],
      gem: "-",
      gemAlternative: "-",
      colors: "-"
    };
    return {
      ...entry,
      lookup,
      excellent: attr.excellent,
      good: attr.good,
      neutral: attr.neutral,
      bad: attr.bad,
      gem: attr.gem || "-",
      gemAlternative: attr.gemAlternative || "-",
      colors: attr.colors || "-",
      planet: PLANET_BY_NUMBER[lookup] || "-"
    };
  });
}

function normalizeAttributeNumber(value) {
  if (value >= 1 && value <= 9) {
    return value;
  }
  return reduceToDigit(value, false);
}

function formatNumberList(values) {
  return values.length ? values.join(", ") : "-";
}

function renderAttributeCards(rows) {
  el.attributeCards.innerHTML = "";
  rows.forEach((row) => {
    const card = document.createElement("article");
    card.className = "attribute-card";
    const lookupNote = row.lookup !== row.value ? ` (lookup ${row.lookup})` : "";
    card.innerHTML = `
      <h3>${row.type}</h3>
      <p class="attribute-number">${row.value}${lookupNote}</p>
      <p><strong>Excellent Matches:</strong> ${formatNumberList(row.excellent)}</p>
      <p><strong>Supportive Matches:</strong> ${formatNumberList(row.good)}</p>
      <p><strong>Neutral Matches:</strong> ${formatNumberList(row.neutral)}</p>
      <p><strong>Challenging Matches:</strong> ${formatNumberList(row.bad)}</p>
      <p><strong>Primary Gemstone:</strong> ${row.gem}</p>
      <p><strong>Alternative Gemstone:</strong> ${row.gemAlternative}</p>
      <p><strong>Favorable Colors:</strong> ${row.colors}</p>
      <p><strong>Ruling Planet:</strong> ${row.planet}</p>
    `;
    el.attributeCards.appendChild(card);
  });
}

function renderAttributeTable(rows) {
  el.attributeTableBody.innerHTML = "";
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    const numberCell = row.lookup !== row.value ? `${row.value} (${row.lookup})` : String(row.value);
    tr.innerHTML = `
      <td>${row.type}</td>
      <td>${numberCell}</td>
      <td>${formatNumberList(row.excellent)}</td>
      <td>${formatNumberList(row.good)}</td>
      <td>${formatNumberList(row.neutral)}</td>
      <td>${formatNumberList(row.bad)}</td>
      <td>${row.gem}</td>
      <td>${row.gemAlternative}</td>
      <td>${row.colors}</td>
      <td>${row.planet}</td>
    `;
    el.attributeTableBody.appendChild(tr);
  });
}

function renderPyramid(rows) {
  el.pyramidChart.innerHTML = "";
  if (!rows.length) {
    el.pyramidChart.textContent = "No pyramid values available.";
    return;
  }

  rows.forEach((row, rowIndex) => {
    const rowEl = document.createElement("div");
    rowEl.className = "pyramid-row";
    rowEl.style.setProperty("--offset", `${rowIndex * 12}px`);

    row.forEach((value) => {
      const cell = document.createElement("span");
      cell.className = "pyramid-bubble";
      cell.textContent = String(value);
      rowEl.appendChild(cell);
    });

    el.pyramidChart.appendChild(rowEl);
  });
}

function renderSouthIndianChart(signLetters) {
  el.nameChartGrid.innerHTML = "";

  SOUTH_INDIAN_LAYOUT.flat().forEach((signIndex) => {
    if (signIndex === null) {
      const gap = document.createElement("div");
      gap.className = "south-gap";
      gap.setAttribute("aria-hidden", "true");
      el.nameChartGrid.appendChild(gap);
      return;
    }

    const cell = document.createElement("div");
    cell.className = "south-cell";
    cell.innerHTML = `
      <span class="south-sign">${ZODIAC_ABBR[signIndex]}</span>
      <span class="south-letters">${signLetters[signIndex] || "."}</span>
    `;
    el.nameChartGrid.appendChild(cell);
  });
}

function renderMatrix(container, grid, formatter) {
  container.innerHTML = "";
  grid.flat().forEach((value) => {
    const cell = document.createElement("div");
    cell.className = "matrix-cell";
    cell.textContent = formatter(value);
    container.appendChild(cell);
  });
}

function renderLoShuMeta(counts, missing) {
  const present = Object.entries(counts)
    .filter(([, count]) => count > 0)
    .map(([digit, count]) => `${digit}x${count}`);

  el.loShuMeta.innerHTML = `
    <p><strong>Present Digits:</strong> ${present.length ? present.join(", ") : "None"}</p>
    <p><strong>Missing Digits:</strong> ${missing.length ? missing.join(", ") : "None"}</p>
  `;
}

function renderTimeline(rows) {
  el.yearTimeline.innerHTML = "";
  if (!rows.length) {
    el.yearTimeline.textContent = "No timeline entries available for the selected date range.";
    return;
  }

  const minYear = rows[0].year;
  const maxYear = rows[rows.length - 1].year;
  const span = Math.max(1, maxYear - minYear);

  rows.forEach((row) => {
    const fill = 20 + Math.round(((row.year - minYear) / span) * 80);
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <span class="timeline-label">#${row.step} ${row.letter}(${row.value})</span>
      <div class="timeline-track">
        <span class="timeline-fill" style="width:${fill}%"></span>
      </div>
      <span class="timeline-year">${row.year}</span>
    `;
    el.yearTimeline.appendChild(item);
  });
}

function renderYearTable(rows) {
  el.yearTableBody.innerHTML = "";
  if (!rows.length) {
    el.yearTableBody.innerHTML = `<tr><td colspan="5">No timeline entries generated.</td></tr>`;
    return;
  }

  rows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.step}</td>
      <td>${row.letter}</td>
      <td>${row.value}</td>
      <td>${row.year}</td>
      <td>${row.date}</td>
    `;
    el.yearTableBody.appendChild(tr);
  });
}

function renderTrace(nameData, trace) {
  const equation = nameData.clean
    .split("")
    .map((letter, index) => `${letter}(${nameData.nums[index]})`)
    .join(" + ");
  const total = nameData.nums.reduce((sum, value) => sum + value, 0);
  el.nameValues.textContent = `${equation} = ${total}`;

  el.nameTrace.innerHTML = "";
  if (!trace.length) {
    el.nameTrace.innerHTML = "<li>No trace data available.</li>";
    return;
  }

  trace.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = `${step.letter}(${step.value}) -> ${step.sign}`;
    el.nameTrace.appendChild(item);
  });
}

function parseIsoDate(value) {
  if (!value) {
    return null;
  }
  const parts = value.split("-").map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) {
    return null;
  }

  const [year, month, day] = parts;
  const date = new Date(year, month - 1, day);
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

function formatIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
