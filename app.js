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

const IDENTIFIER_TYPES = [
  { value: "car", label: "Car Number" },
  { value: "mobile", label: "Mobile Number" },
  { value: "aadhar", label: "Aadhar Number" },
  { value: "ssn", label: "Social Security Number" },
  { value: "custom", label: "Custom Identifier" }
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

const NAKSHATRA_PADA_BY_SIGN = {
  11: [[104, 95, 86], [77, 107, 98], [89, 80, 102]], // Pisces
  0: [[7, 16, 25], [34, 6, 15], [24, 33, 1]], // Aries
  1: [[10, 19, 28], [2, 11, 20], [29, 9, 18]], // Taurus
  2: [[27, 36, 4], [13, 22, 31], [3, 12, 21]], // Gemini
  3: [[30, 8, 17], [26, 35, 5], [14, 23, 32]], // Cancer
  4: [[43, 52, 61], [70, 42, 51], [60, 69, 37]], // Leo
  5: [[46, 55, 64], [38, 47, 56], [54, 45, 65]], // Virgo
  6: [[57, 48, 39], [67, 58, 49], [40, 72, 63]], // Libra
  7: [[68, 59, 50], [41, 71, 62], [53, 44, 66]], // Scorpio
  8: [[73, 105, 96], [87, 78, 106], [97, 88, 79]], // Sagittarius
  9: [[90, 81, 101], [92, 83, 74], [100, 91, 82]], // Capricorn
  10: [[93, 84, 75], [103, 94, 85], [76, 99, 108]] // Aquarius
};

const DUSTHANA_HOUSES = new Set([6, 8, 12]);

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

const BAD_NUMBERS = new Set([
  7, 9, 11, 13, 15, 17, 18, 25, 26, 29, 31, 34, 35, 36,
  38, 40, 43, 44, 46, 47, 48, 49, 52, 53, 58, 61, 62,
  63, 65, 67, 70, 71, 76, 81, 87, 94, 98, 102, 104, 106, 107
]);

const DEFAULT_HINT = "Enter full name and date of birth to generate your Tanktrik numerology report.";
const LAGNA_METHOD_DEFAULT = "month_name";
const LAGNA_METHOD_LABELS = {
  month_name: "1-January-2025",
  numeric: "1-1-2025"
};

const PADA_SIGN_MAP = buildPadaSignMap();
let identifierHelperSeq = 0;

const el = {
  form: document.getElementById("calcForm"),
  name: document.getElementById("nameInput"),
  dob: document.getElementById("dobInput"),
  endDate: document.getElementById("endDateInput"),
  lagnaMethod: document.getElementById("lagnaMethodInput"),
  identifierBlock: document.getElementById("identifierBlock"),
  identifierAccordionToggle: document.getElementById("identifierAccordionToggle"),
  identifierAccordionPanel: document.getElementById("identifierAccordionPanel"),
  identifierCountBadge: document.getElementById("identifierCountBadge"),
  addIdentifierBtn: document.getElementById("addIdentifierBtn"),
  exportPdfBtn: document.getElementById("exportPdfBtn"),
  identifierRows: document.getElementById("identifierRows"),
  hint: document.getElementById("formHint"),
  reset: document.getElementById("resetBtn"),
  dashboard: document.getElementById("dashboard"),
  printReportHead: document.getElementById("printReportHead"),
  printReportMeta: document.getElementById("printReportMeta"),
  summaryGrid: document.getElementById("summaryGrid"),
  insightSection: document.getElementById("insightSection"),
  insightGrid: document.getElementById("insightGrid"),
  optionalReportSection: document.getElementById("optionalReportSection"),
  optionalReportTableBody: document.querySelector("#optionalReportTable tbody"),
  nakshatraSection: document.getElementById("nakshatraSection"),
  nakshatraGrid: document.getElementById("nakshatraGrid"),
  lagnaInfo: document.getElementById("lagnaInfo"),
  nakshatraUnmapped: document.getElementById("nakshatraUnmapped"),
  nakshatraHouseTableBody: document.querySelector("#nakshatraHouseTable tbody"),
  coreBreakdown: document.getElementById("coreBreakdown"),
  pyramidChart: document.getElementById("pyramidChart"),
  nameChartGrid: document.getElementById("nameChartGrid"),
  loShuGrid: document.getElementById("loShuGrid"),
  loShuMeta: document.getElementById("loShuMeta"),
  shivaMayaGrid: document.getElementById("shivaMayaGrid"),
  yearTimeline: document.getElementById("yearTimeline"),
  yearTableBody: document.querySelector("#yearTable tbody"),
  attributeTableBody: document.querySelector("#attributeTable tbody"),
  nameValues: document.getElementById("nameValues"),
  nameTrace: document.getElementById("nameTrace"),
  destinyValues: document.getElementById("destinyValues"),
  chaldeanDestinyValues: document.getElementById("chaldeanDestinyValues"),
  lagnaDestinyValues: document.getElementById("lagnaDestinyValues"),
  coreAuditTrail: document.getElementById("coreAuditTrail"),
  identifierTrace: document.getElementById("identifierTrace"),
  auditPyramid: document.getElementById("auditPyramid")
};

init();

function init() {
  removeLegacyAttributeCards();
  setupIdentifierRows();
  setupIdentifierAccordion();
  setExportPdfEnabled(false);
  el.endDate.value = formatIsoDate(new Date());
  if (el.lagnaMethod) {
    el.lagnaMethod.value = LAGNA_METHOD_DEFAULT;
  }
  el.form.addEventListener("submit", handleSubmit);
  el.reset.addEventListener("click", handleReset);
  if (el.exportPdfBtn) {
    el.exportPdfBtn.addEventListener("click", handleExportPdf);
  }
  el.name.addEventListener("input", () => setHint(DEFAULT_HINT));
  el.dob.addEventListener("input", () => setHint(DEFAULT_HINT));
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
  const selectedLagnaMethod = getLagnaMethodSelection();
  const destiny = destinyNumber(dob, true);
  const ruling = rulingNumber(dob, true);
  const rulingSingle = reduceToDigit(dob.getDate(), false);
  const chMonth = chaldeanMonthNumber(dob.getMonth() + 1, true);
  const chDestinyData = destinyNumberChaldeanDetail(dob, true);
  const chDestiny = chDestinyData.value;
  const lagnaDestinyData = destinyNumberChaldeanLagnaDetail(dob, selectedLagnaMethod, true);
  const chart = nameChartTrace(rawName);
  const signLetters = buildNameChartSignContents(chart.trace);
  const yearMap = buildNameYearMapping(rawName, dob, endDate);
  const loShuCounts = loshuCountsFromDob(dob);
  const loShuGrid = loshuGridFromCounts(loShuCounts);
  const loShuMissing = loshuMissingNumbers(loShuCounts);
  const shivaMaya = shivaMayaChakra3x3(rulingSingle);
  const identifierReports = buildIdentifierReports(collectOptionalIdentifiers());
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

  const analysisReports = renderAnalysisTable({
    nameData,
    nameTotals,
    pyramid,
    identifierReports
  });
  const nakshatraSummary = renderNakshatraHouseSection(lagnaDestinyData, analysisReports);
  renderAttributeTable(attributeRows);
  renderInsightCards({
    analysisReports,
    attributeRows,
    nakshatraSummary
  });

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
  renderTrace({
    nameData,
    trace: chart.trace,
    nameTotals,
    destiny,
    ruling,
    chMonth,
    chDestiny,
    chDestinyData,
    lagnaDestinyData,
    analysisReports,
    identifierReports,
    pyramid,
    nakshatraSummary
  });

  el.dashboard.hidden = false;
  updatePrintReportMeta(nameData.clean, dob, endDate, selectedLagnaMethod);
  setExportPdfEnabled(true);
  setHint(`Report generated for ${nameData.clean}.`, false, true);
}

function handleReset() {
  el.form.reset();
  el.endDate.value = formatIsoDate(new Date());
  if (el.lagnaMethod) {
    el.lagnaMethod.value = LAGNA_METHOD_DEFAULT;
  }
  el.dashboard.hidden = true;
  el.summaryGrid.innerHTML = "";
  if (el.insightSection) {
    el.insightSection.hidden = true;
  }
  if (el.insightGrid) {
    el.insightGrid.innerHTML = "";
  }
  el.optionalReportSection.hidden = true;
  el.optionalReportTableBody.innerHTML = "";
  if (el.nakshatraSection) {
    el.nakshatraSection.hidden = true;
  }
  if (el.nakshatraGrid) {
    el.nakshatraGrid.innerHTML = "";
  }
  if (el.lagnaInfo) {
    el.lagnaInfo.textContent = "";
  }
  if (el.nakshatraUnmapped) {
    el.nakshatraUnmapped.hidden = true;
    el.nakshatraUnmapped.textContent = "";
  }
  if (el.nakshatraHouseTableBody) {
    el.nakshatraHouseTableBody.innerHTML = "";
  }
  el.coreBreakdown.innerHTML = "";
  el.pyramidChart.innerHTML = "";
  el.nameChartGrid.innerHTML = "";
  el.loShuGrid.innerHTML = "";
  el.loShuMeta.innerHTML = "";
  el.shivaMayaGrid.innerHTML = "";
  el.yearTimeline.innerHTML = "";
  el.yearTableBody.innerHTML = "";
  el.attributeTableBody.innerHTML = "";
  el.nameValues.textContent = "";
  el.nameTrace.innerHTML = "";
  if (el.destinyValues) {
    el.destinyValues.textContent = "";
  }
  if (el.chaldeanDestinyValues) {
    el.chaldeanDestinyValues.textContent = "";
  }
  if (el.lagnaDestinyValues) {
    el.lagnaDestinyValues.textContent = "";
  }
  if (el.coreAuditTrail) {
    el.coreAuditTrail.innerHTML = "";
  }
  if (el.identifierTrace) {
    el.identifierTrace.innerHTML = "";
  }
  if (el.auditPyramid) {
    el.auditPyramid.innerHTML = "";
  }
  if (el.printReportHead) {
    el.printReportHead.hidden = true;
  }
  if (el.printReportMeta) {
    el.printReportMeta.textContent = "";
  }
  setExportPdfEnabled(false);
  el.identifierRows.innerHTML = "";
  appendIdentifierRow("mobile");
  setIdentifierAccordionState(false, true);
  updateIdentifierCountBadge();
  setHint(DEFAULT_HINT);
}

function setHint(message, isError = false, isSuccess = false) {
  el.hint.textContent = message;
  el.hint.classList.toggle("is-error", isError);
  el.hint.classList.toggle("is-success", !isError && isSuccess);
}

function setExportPdfEnabled(enabled) {
  if (!el.exportPdfBtn) {
    return;
  }
  el.exportPdfBtn.disabled = !enabled;
  el.exportPdfBtn.setAttribute("aria-disabled", String(!enabled));
}

function updatePrintReportMeta(name, dob, endDate, lagnaMethod) {
  if (!el.printReportHead || !el.printReportMeta) {
    return;
  }
  const generated = formatDisplayDate(new Date());
  const dobText = formatDisplayDate(dob);
  const endDateText = formatDisplayDate(endDate);
  const methodText = lagnaMethodLabel(lagnaMethod);
  el.printReportMeta.textContent = `Name: ${name} | Date of Birth: ${dobText} | Analysis End Date: ${endDateText} | Lagna Method: ${methodText} | Generated On: ${generated}`;
  el.printReportHead.hidden = false;
}

function handleExportPdf() {
  if (el.dashboard.hidden) {
    setHint("Generate the report before exporting PDF.", true);
    return;
  }
  setHint("Opening print dialog. Choose 'Save as PDF' and paper size A4.", false, true);
  window.print();
}

function getLagnaMethodSelection() {
  if (!el.lagnaMethod) {
    return LAGNA_METHOD_DEFAULT;
  }
  const selected = el.lagnaMethod.value;
  return LAGNA_METHOD_LABELS[selected] ? selected : LAGNA_METHOD_DEFAULT;
}

function removeLegacyAttributeCards() {
  document.querySelectorAll(".attribute-grid").forEach((node) => node.remove());
  document.querySelectorAll(".attribute-card").forEach((node) => node.remove());
}

function setupIdentifierRows() {
  appendIdentifierRow("mobile");
  updateIdentifierCountBadge();

  el.addIdentifierBtn.addEventListener("click", () => {
    appendIdentifierRow("custom");
    updateIdentifierCountBadge();
  });

  el.identifierRows.addEventListener("input", (event) => {
    const target = event.target;
    if (!target.classList.contains("identifier-value")) {
      return;
    }
    const row = target.closest(".identifier-row");
    const raw = target.value;
    const clean = sanitizeIdentifierToken(target.value);
    if (clean !== target.value) {
      target.value = clean;
    }

    if (row) {
      if (raw !== clean) {
        setIdentifierRowHint(
          row,
          "Unsupported characters removed. Use letters and digits only.",
          true
        );
      } else {
        setIdentifierRowHint(row, "Letters A-Z and digits 0-9 only.", false);
      }
    }

    updateIdentifierCountBadge();
  });

  el.identifierRows.addEventListener("focusin", (event) => {
    const target = event.target;
    if (!target.classList.contains("identifier-value")) {
      return;
    }
    const row = target.closest(".identifier-row");
    if (!row) {
      return;
    }
    row.classList.add("is-focused");
    if (!row.classList.contains("is-invalid")) {
      setIdentifierRowHint(row, "Letters A-Z and digits 0-9 only.", false);
    }
  });

  el.identifierRows.addEventListener("focusout", (event) => {
    const target = event.target;
    if (!target.classList.contains("identifier-value")) {
      return;
    }
    const row = target.closest(".identifier-row");
    if (!row) {
      return;
    }
    if (event.relatedTarget && row.contains(event.relatedTarget)) {
      return;
    }
    row.classList.remove("is-focused");
  });

  el.identifierRows.addEventListener("click", (event) => {
    const removeBtn = event.target.closest(".identifier-remove");
    if (!removeBtn) {
      return;
    }
    const row = removeBtn.closest(".identifier-row");
    if (row) {
      row.remove();
    }
    if (!el.identifierRows.querySelector(".identifier-row")) {
      appendIdentifierRow("mobile");
    }
    updateIdentifierCountBadge();
  });

  el.identifierRows.addEventListener("change", () => {
    updateIdentifierCountBadge();
  });
}

function appendIdentifierRow(type = "custom", initialValue = "") {
  const row = document.createElement("div");
  row.className = "identifier-row";
  const helperId = `identifierHelper${identifierHelperSeq += 1}`;

  const options = IDENTIFIER_TYPES.map((item) => {
    const selected = item.value === type ? " selected" : "";
    return `<option value="${item.value}"${selected}>${item.label}</option>`;
  }).join("");

  row.innerHTML = `
    <label class="form-field identifier-type-field">
      <span>Type</span>
      <select class="identifier-type" aria-label="Identifier type">${options}</select>
    </label>
    <label class="form-field identifier-value-field">
      <span>Value</span>
      <input
        class="identifier-value"
        type="text"
        value="${sanitizeIdentifierToken(initialValue)}"
        placeholder="Letters and numbers only"
        aria-describedby="${helperId}"
        autocomplete="off"
        inputmode="text"
      />
      <p id="${helperId}" class="identifier-inline-helper" aria-live="polite">Letters A-Z and digits 0-9 only.</p>
    </label>
    <button type="button" class="identifier-remove identifier-remove-icon" aria-label="Remove identifier">
      <span aria-hidden="true">&times;</span>
    </button>
  `;

  el.identifierRows.appendChild(row);
  updateIdentifierCountBadge();
}

function setIdentifierRowHint(row, message, isInvalid) {
  const helper = row.querySelector(".identifier-inline-helper");
  if (helper) {
    helper.textContent = message;
  }
  row.classList.toggle("is-invalid", Boolean(isInvalid));
}

function updateIdentifierCountBadge() {
  if (!el.identifierCountBadge || !el.identifierRows) {
    return;
  }
  const count = [...el.identifierRows.querySelectorAll(".identifier-value")]
    .map((input) => sanitizeIdentifierToken(input.value).trim())
    .filter(Boolean)
    .length;

  el.identifierCountBadge.textContent = String(count);
  el.identifierCountBadge.classList.toggle("has-value", count > 0);
}

function setupIdentifierAccordion() {
  if (!el.identifierBlock || !el.identifierAccordionToggle || !el.identifierAccordionPanel) {
    return;
  }

  el.identifierAccordionToggle.addEventListener("click", () => {
    const shouldOpen = !el.identifierBlock.classList.contains("is-open");
    setIdentifierAccordionState(shouldOpen);
  });

  setIdentifierAccordionState(false, true);
}

function setIdentifierAccordionState(isOpen, immediate = false) {
  if (!el.identifierBlock || !el.identifierAccordionToggle || !el.identifierAccordionPanel) {
    return;
  }

  el.identifierAccordionToggle.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    el.identifierAccordionPanel.hidden = false;
    if (immediate) {
      el.identifierBlock.classList.add("is-open");
      return;
    }
    requestAnimationFrame(() => {
      el.identifierBlock.classList.add("is-open");
    });
    return;
  }

  el.identifierBlock.classList.remove("is-open");
  if (immediate) {
    el.identifierAccordionPanel.hidden = true;
    return;
  }

  let done = false;
  const finalize = () => {
    if (done) {
      return;
    }
    done = true;
    if (!el.identifierBlock.classList.contains("is-open")) {
      el.identifierAccordionPanel.hidden = true;
    }
    el.identifierAccordionPanel.removeEventListener("transitionend", onTransitionEnd);
  };

  const onTransitionEnd = (event) => {
    if (event.target !== el.identifierAccordionPanel) {
      return;
    }
    finalize();
  };

  el.identifierAccordionPanel.addEventListener("transitionend", onTransitionEnd);
  window.setTimeout(finalize, 320);
}

function sanitizeIdentifierToken(value) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function collectOptionalIdentifiers() {
  const rows = [...el.identifierRows.querySelectorAll(".identifier-row")];
  return rows
    .map((row) => {
      const select = row.querySelector(".identifier-type");
      const input = row.querySelector(".identifier-value");
      const clean = sanitizeIdentifierToken(input.value);
      input.value = clean;
      if (!clean) {
        return null;
      }
      return {
        type: select.value,
        label: select.options[select.selectedIndex].textContent,
        clean
      };
    })
    .filter(Boolean);
}

function chaldeanValuesFromIdentifier(cleanToken) {
  const token = sanitizeIdentifierToken(cleanToken);
  const values = [];
  let i = 0;

  while (i < token.length) {
    const ch = token[i];

    if (ch >= "0" && ch <= "9") {
      if (ch === "0") {
        let j = i;
        while (j < token.length && token[j] === "0") {
          j += 1;
        }
        const zeroRun = j - i;
        values.push(zeroRun >= 2 ? 9 : 0);
        i = j;
        continue;
      }
      values.push(Number(ch));
      i += 1;
      continue;
    }

    const mapped = CHALDEAN[ch];
    if (mapped !== undefined) {
      values.push(mapped);
    }
    i += 1;
  }

  return values;
}

function buildIdentifierReports(entries) {
  return entries.map((entry) => {
    const values = chaldeanValuesFromIdentifier(entry.clean);
    const total = values.reduce((sum, value) => sum + value, 0);
    const reduced = reduceToDigit(total, true);
    const pyramid = pyramidRows(values, false);
    const apex = pyramid.length ? pyramid[pyramid.length - 1][0] : "-";
    const pyramidRowsCompact = pyramid.map((row) => row.join("")).join(" / ");
    const pyramidTwoDigit = pyramid.length >= 2 && pyramid[pyramid.length - 2].length >= 2
      ? Number(`${pyramid[pyramid.length - 2][0]}${pyramid[pyramid.length - 2][1]}`)
      : null;
    const pyramidSingleDigit = pyramid.length ? pyramid[pyramid.length - 1][0] : null;
    return {
      label: entry.label,
      clean: entry.clean,
      values,
      total,
      reduced,
      apex,
      pyramidRows: pyramid,
      pyramidRowsCompact,
      pyramidTwoDigit,
      pyramidSingleDigit
    };
  });
}

function buildPrimaryNameAnalysis(nameData, nameTotals, pyramid) {
  const apex = pyramid.length ? pyramid[pyramid.length - 1][0] : "-";
  const pyramidRowsCompact = pyramid.map((row) => row.join("")).join(" / ");
  const pyramidTwoDigit = pyramid.length >= 2 && pyramid[pyramid.length - 2].length >= 2
    ? Number(`${pyramid[pyramid.length - 2][0]}${pyramid[pyramid.length - 2][1]}`)
    : null;
  const pyramidSingleDigit = pyramid.length ? pyramid[pyramid.length - 1][0] : null;
  return {
    label: "Name (Primary)",
    clean: nameData.clean,
    values: nameData.nums,
    total: nameTotals.total,
    reduced: nameTotals.reduced,
    apex,
    pyramidRows: pyramid,
    pyramidRowsCompact,
    pyramidTwoDigit,
    pyramidSingleDigit
  };
}

function renderAnalysisTable({ nameData, nameTotals, pyramid, identifierReports }) {
  el.optionalReportTableBody.innerHTML = "";
  const primaryRow = buildPrimaryNameAnalysis(nameData, nameTotals, pyramid);
  const rows = [primaryRow, ...identifierReports];

  rows.forEach((report) => {
    const tr = document.createElement("tr");
    const chaldeanBad = BAD_NUMBERS.has(report.total);
    const pyramidTwoDigitBad = report.pyramidTwoDigit !== null && BAD_NUMBERS.has(report.pyramidTwoDigit);
    const pyramidSingleBad = report.pyramidSingleDigit !== null && BAD_NUMBERS.has(report.pyramidSingleDigit);
    const hasRisk = chaldeanBad || pyramidTwoDigitBad || pyramidSingleBad;
    if (hasRisk) {
      tr.classList.add("analysis-risk-row");
    }
    const badge = (isBad) => (isBad ? `<span class="flag-bad">Yes</span>` : `<span class="flag-good">No</span>`);
    tr.innerHTML = `
      <td>${report.label}</td>
      <td>${report.clean}</td>
      <td class="mono-cell values-cell">${report.values.join(", ")}</td>
      <td>${report.total}</td>
      <td>${report.reduced}</td>
      <td class="bad-check-cell">
        <div class="bad-check-row"><span class="bad-check-label">Chaldean (${report.total})</span>${badge(chaldeanBad)}</div>
        <div class="bad-check-row"><span class="bad-check-label">Pyramid 2D (${report.pyramidTwoDigit ?? "-"})</span>${badge(pyramidTwoDigitBad)}</div>
        <div class="bad-check-row"><span class="bad-check-label">Pyramid 1D (${report.pyramidSingleDigit ?? "-"})</span>${badge(pyramidSingleBad)}</div>
      </td>
      <td>${report.apex}</td>
      <td class="mono-cell pyramid-sequence">${formatPyramidSequence(report.pyramidRowsCompact)}</td>
    `;
    el.optionalReportTableBody.appendChild(tr);
  });

  el.optionalReportSection.hidden = false;
  return rows;
}

function formatPyramidSequence(sequence) {
  if (!sequence) {
    return "-";
  }
  return sequence
    .split(" / ")
    .map((part) => `<span>${part}</span>`)
    .join('<span class="sequence-separator">&rarr;</span>');
}

function digitSum(number) {
  return String(Math.abs(Math.trunc(number)))
    .split("")
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);
}

function normalizeKundliRange(value) {
  const numeric = Math.trunc(Number(value));
  if (!Number.isFinite(numeric) || numeric <= 0) {
    return null;
  }

  let normalized = Math.abs(numeric);
  while (normalized > 108) {
    normalized = digitSum(normalized);
  }
  while (normalized < 10) {
    normalized += 9;
  }
  return normalized;
}

function buildPadaSignMap() {
  const map = new Map();
  Object.entries(NAKSHATRA_PADA_BY_SIGN).forEach(([signIndex, rows]) => {
    rows.flat().forEach((value) => {
      map.set(Number(value), Number(signIndex));
    });
  });
  return map;
}

function normalizePadaNumber(value) {
  const normalized = normalizeKundliRange(value);
  return normalized !== null && PADA_SIGN_MAP.has(normalized) ? normalized : null;
}

function houseFromLagna(lagnaSignIndex, targetSignIndex) {
  return ((targetSignIndex - lagnaSignIndex + 12) % 12) + 1;
}

function buildHousePlacements(reports, lagnaSignIndex) {
  const placements = [];
  const unmapped = [];
  const components = [
    { key: "total", label: "Chaldean" },
    { key: "pyramidTwoDigit", label: "Pyramid 2D" },
    { key: "pyramidSingleDigit", label: "Pyramid 1D" }
  ];

  reports.forEach((report, reportIndex) => {
    components.forEach((component, componentIndex) => {
      const raw = report[component.key];
      if (raw === null || raw === undefined || raw === "") {
        unmapped.push({
          category: report.label,
          component: component.label,
          value: raw,
          reason: "Not available"
        });
        return;
      }

      const normalized = normalizePadaNumber(raw);
      if (normalized === null) {
        unmapped.push({
          category: report.label,
          component: component.label,
          value: raw,
          reason: "Outside 1-108 map"
        });
        return;
      }

      const rawValue = Math.trunc(Number(raw));
      const signIndex = PADA_SIGN_MAP.get(normalized);
      const house = houseFromLagna(lagnaSignIndex, signIndex);
      placements.push({
        sortIndex: reportIndex * 3 + componentIndex,
        category: report.label,
        component: component.label,
        rawValue,
        value: normalized,
        wasAdjusted: rawValue !== normalized,
        signIndex,
        sign: ZODIAC_SIGNS[signIndex],
        house,
        isDusthana: DUSTHANA_HOUSES.has(house)
      });
    });
  });

  return { placements, unmapped };
}

function renderNakshatraHouseSection(lagnaDestiny, reports) {
  if (!el.nakshatraSection || !el.nakshatraGrid || !el.lagnaInfo || !el.nakshatraHouseTableBody) {
    return null;
  }

  const lagnaTotalRaw = lagnaDestiny ? lagnaDestiny.total : null;
  const lagnaMethod = lagnaDestiny ? lagnaDestiny.methodLabel : lagnaMethodLabel(LAGNA_METHOD_DEFAULT);
  const lagnaToken = lagnaDestiny ? lagnaDestiny.token : "-";

  const lagnaValue = normalizePadaNumber(lagnaTotalRaw);
  const lagnaRawNumber = lagnaTotalRaw !== null && lagnaTotalRaw !== undefined
    ? Math.trunc(Number(lagnaTotalRaw))
    : null;
  const lagnaAdjusted = lagnaRawNumber !== null && lagnaRawNumber !== lagnaValue;
  const lagnaTotalText = lagnaAdjusted ? `${lagnaRawNumber} -> ${lagnaValue}` : `${lagnaRawNumber ?? "-"}`;
  if (lagnaValue === null) {
    el.nakshatraSection.hidden = false;
    el.lagnaInfo.textContent = `Selected lagna method ${lagnaMethod} generated total ${lagnaRawNumber ?? "-"} (token: ${lagnaToken}), which could not be normalized to the 10-108 kundli range.`;
    el.nakshatraGrid.innerHTML = "";
    el.nakshatraHouseTableBody.innerHTML = `<tr><td colspan="6">No house placements available.</td></tr>`;
    if (el.nakshatraUnmapped) {
      el.nakshatraUnmapped.hidden = true;
      el.nakshatraUnmapped.textContent = "";
    }
    return {
      method: lagnaDestiny ? lagnaDestiny.method : LAGNA_METHOD_DEFAULT,
      methodLabel: lagnaMethod,
      token: lagnaToken,
      lagnaRawTotal: lagnaRawNumber,
      lagnaAdjusted: false,
      lagnaValue: null,
      lagnaSignIndex: null,
      placements: [],
      unmapped: []
    };
  }

  const lagnaSignIndex = PADA_SIGN_MAP.get(lagnaValue);
  const { placements, unmapped } = buildHousePlacements(reports, lagnaSignIndex);

  renderNakshatraGrid(lagnaSignIndex, placements);
  renderNakshatraHouseTable(placements);

  el.lagnaInfo.textContent = `Lagna: ${ZODIAC_SIGNS[lagnaSignIndex]} (method ${lagnaMethod}, token ${lagnaToken}, total ${lagnaTotalText}). Kundli range normalization uses 10-108; values above 108 are reduced. Houses 6, 8, and 12 are highlighted in red.`;

  if (el.nakshatraUnmapped) {
    if (unmapped.length) {
      const details = unmapped
        .map((item) => `${item.category} ${item.component} (${item.value ?? "-"})`)
        .join("; ");
      el.nakshatraUnmapped.hidden = false;
      el.nakshatraUnmapped.textContent = `Unmapped values: ${details}.`;
    } else {
      el.nakshatraUnmapped.hidden = true;
      el.nakshatraUnmapped.textContent = "";
    }
  }

  el.nakshatraSection.hidden = false;
  return {
    method: lagnaDestiny ? lagnaDestiny.method : LAGNA_METHOD_DEFAULT,
    methodLabel: lagnaMethod,
    token: lagnaToken,
    lagnaRawTotal: lagnaRawNumber,
    lagnaAdjusted,
    lagnaValue,
    lagnaSignIndex,
    placements,
    unmapped
  };
}

function formatPadaNumber(value) {
  const numeric = Math.trunc(Number(value));
  if (!Number.isFinite(numeric)) {
    return String(value);
  }
  if (numeric >= 100) {
    return String(numeric);
  }
  return String(numeric).padStart(2, "0");
}

function renderNakshatraGrid(lagnaSignIndex, placements) {
  const placementsBySign = Array.from({ length: 12 }, () => []);
  placements.forEach((placement) => {
    placementsBySign[placement.signIndex].push(placement);
  });

  el.nakshatraGrid.innerHTML = "";
  SOUTH_INDIAN_LAYOUT.flat().forEach((signIndex) => {
    if (signIndex === null) {
      const gap = document.createElement("div");
      gap.className = "nakshatra-gap";
      gap.setAttribute("aria-hidden", "true");
      el.nakshatraGrid.appendChild(gap);
      return;
    }

    const house = houseFromLagna(lagnaSignIndex, signIndex);
    const signPlacements = placementsBySign[signIndex];
    const hitValues = new Set(signPlacements.map((item) => item.value));
    const isLagna = signIndex === lagnaSignIndex;
    const isDusthana = DUSTHANA_HOUSES.has(house);

    const cell = document.createElement("article");
    cell.className = "nakshatra-cell";
    if (isLagna) {
      cell.classList.add("is-lagna");
    }
    if (isDusthana) {
      cell.classList.add("is-dusthana");
    }

    const padaNumbers = (NAKSHATRA_PADA_BY_SIGN[signIndex] || [])
      .flat()
      .map((number) => {
        const hit = hitValues.has(number);
        const classes = [
          "nakshatra-pada",
          hit ? "is-hit" : "",
          hit && isDusthana ? "is-dusthana" : ""
        ].filter(Boolean).join(" ");
        return `<span class="${classes}">${formatPadaNumber(number)}</span>`;
      }).join("");

    const hits = signPlacements
      .sort((a, b) => a.sortIndex - b.sortIndex)
      .map((placement) => {
        const hitClass = placement.isDusthana ? "nakshatra-hit is-dusthana" : "nakshatra-hit";
        const valueText = placement.wasAdjusted
          ? `${placement.rawValue} -> ${placement.value}`
          : `${placement.value}`;
        return `<li class="${hitClass}">${placement.category} | ${placement.component}: ${valueText}</li>`;
      }).join("");

    cell.innerHTML = `
      <div class="nakshatra-cell-head">
        <span class="nakshatra-sign">${ZODIAC_SIGNS[signIndex]}</span>
        <span class="nakshatra-house">House ${house}${isLagna ? " • Lagna" : ""}</span>
      </div>
      <div class="nakshatra-pada-grid">${padaNumbers}</div>
      ${hits ? `<ul class="nakshatra-hits">${hits}</ul>` : `<p class="nakshatra-empty">No mapped components</p>`}
    `;

    el.nakshatraGrid.appendChild(cell);
  });
}

function renderNakshatraHouseTable(placements) {
  el.nakshatraHouseTableBody.innerHTML = "";

  if (!placements.length) {
    el.nakshatraHouseTableBody.innerHTML = `<tr><td colspan="6">No house placements available.</td></tr>`;
    return;
  }

  placements
    .slice()
    .sort((a, b) => a.sortIndex - b.sortIndex)
    .forEach((placement) => {
      const tr = document.createElement("tr");
      if (placement.isDusthana) {
        tr.classList.add("house-row-dusthana");
      }
      tr.innerHTML = `
        <td>${placement.category}</td>
        <td>${placement.component}</td>
        <td>${placement.wasAdjusted ? `${placement.rawValue} -> ${placement.value}` : `${placement.value}`}</td>
        <td>${placement.sign}</td>
        <td>${placement.house}</td>
        <td>${placement.isDusthana ? '<span class="house-flag bad">6/8/12</span>' : '<span class="house-flag good">Clear</span>'}</td>
      `;
      el.nakshatraHouseTableBody.appendChild(tr);
    });
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

function lagnaMethodLabel(method) {
  return LAGNA_METHOD_LABELS[method] || LAGNA_METHOD_LABELS[LAGNA_METHOD_DEFAULT];
}

function buildLagnaDateToken(dob, method = LAGNA_METHOD_DEFAULT) {
  const day = String(dob.getDate());
  const monthNumber = String(dob.getMonth() + 1);
  const monthName = MONTH_NAMES[dob.getMonth()];
  const year = String(dob.getFullYear());
  return method === "numeric"
    ? `${day}-${monthNumber}-${year}`
    : `${day}-${monthName}-${year}`;
}

function chaldeanValuesFromDateToken(token) {
  const values = [];
  [...token.toUpperCase()].forEach((ch) => {
    if (ch >= "0" && ch <= "9") {
      values.push(Number(ch));
      return;
    }
    if (CHALDEAN[ch] !== undefined) {
      values.push(CHALDEAN[ch]);
    }
  });
  return values;
}

function destinyNumberChaldeanLagnaDetail(dob, method = LAGNA_METHOD_DEFAULT, keepMasters = true) {
  const normalizedMethod = LAGNA_METHOD_LABELS[method] ? method : LAGNA_METHOD_DEFAULT;
  const token = buildLagnaDateToken(dob, normalizedMethod);
  const values = chaldeanValuesFromDateToken(token);
  const total = values.reduce((sum, value) => sum + value, 0);
  return {
    method: normalizedMethod,
    methodLabel: lagnaMethodLabel(normalizedMethod),
    token,
    values,
    total,
    value: reduceToDigit(total, keepMasters)
  };
}

function destinyNumberChaldeanDetail(dob, keepMasters = true) {
  const dayDigits = String(dob.getDate()).split("").map(Number);
  const daySum = dayDigits.reduce((a, b) => a + b, 0);
  const yearDigits = String(dob.getFullYear()).split("").map(Number);
  const yearSum = yearDigits.reduce((a, b) => a + b, 0);
  const monthName = MONTH_NAMES[dob.getMonth()];
  const monthValue = chaldeanMonthNumber(dob.getMonth() + 1, keepMasters);
  const total = daySum + monthValue + yearSum;

  return {
    dayDigits,
    daySum,
    monthName,
    monthValue,
    yearDigits,
    yearSum,
    total,
    value: reduceToDigit(total, keepMasters)
  };
}

function destinyNumberChaldean(dob, keepMasters = true) {
  return destinyNumberChaldeanDetail(dob, keepMasters).value;
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

function renderInsightCards({ analysisReports, attributeRows, nakshatraSummary }) {
  if (!el.insightSection || !el.insightGrid) {
    return;
  }

  const totalChecks = analysisReports.length * 3;
  let badChecks = 0;
  const riskyCategories = new Set();

  analysisReports.forEach((report) => {
    const chaldeanBad = BAD_NUMBERS.has(report.total);
    const pyramidTwoDigitBad = report.pyramidTwoDigit !== null && BAD_NUMBERS.has(report.pyramidTwoDigit);
    const pyramidSingleBad = report.pyramidSingleDigit !== null && BAD_NUMBERS.has(report.pyramidSingleDigit);
    const rowBadCount = Number(chaldeanBad) + Number(pyramidTwoDigitBad) + Number(pyramidSingleBad);

    badChecks += rowBadCount;
    if (rowBadCount > 0) {
      riskyCategories.add(report.label);
    }
  });

  const lagnaSignIndex = nakshatraSummary && nakshatraSummary.lagnaSignIndex !== null
    ? nakshatraSummary.lagnaSignIndex
    : null;
  const lagnaName = lagnaSignIndex !== null ? ZODIAC_SIGNS[lagnaSignIndex] : "Unavailable";
  const lagnaValue = nakshatraSummary && nakshatraSummary.lagnaValue !== null
    ? nakshatraSummary.lagnaValue
    : "-";
  const lagnaRawTotal = nakshatraSummary && nakshatraSummary.lagnaRawTotal !== null
    ? nakshatraSummary.lagnaRawTotal
    : "-";
  const lagnaAdjusted = Boolean(nakshatraSummary && nakshatraSummary.lagnaAdjusted);
  const lagnaMethod = nakshatraSummary && nakshatraSummary.methodLabel
    ? nakshatraSummary.methodLabel
    : lagnaMethodLabel(LAGNA_METHOD_DEFAULT);
  const lagnaToken = nakshatraSummary && nakshatraSummary.token
    ? nakshatraSummary.token
    : "-";
  const dusthanaCount = nakshatraSummary
    ? nakshatraSummary.placements.filter((placement) => placement.isDusthana).length
    : 0;

  let overallValue = "Stable";
  let overallTone = "stable";
  if (badChecks > 0 || dusthanaCount > 0) {
    overallValue = "Watch";
    overallTone = "watch";
  }
  if (badChecks >= 3 || dusthanaCount >= 3) {
    overallValue = "Attention";
    overallTone = "critical";
  }

  const primaryRemedy = attributeRows.find((row) => row.type === "Name Signature Number");
  const categories = [...riskyCategories];

  const cards = [
    {
      label: "Overall Signal",
      value: overallValue,
      note: `${badChecks} flagged checks out of ${totalChecks}; ${dusthanaCount} placement(s) in houses 6/8/12.`,
      tone: overallTone
    },
    {
      label: "Immediate Attention",
      value: categories.length ? `${categories.length} item(s)` : "None",
      note: categories.length ? categories.join(", ") : "No bad-number triggers detected across analyzed entries.",
      tone: categories.length ? "critical" : "stable"
    },
    {
      label: "Lagna Context",
      value: lagnaName,
      note: `Derived from ${lagnaMethod} token ${lagnaToken} (total ${lagnaAdjusted ? `${lagnaRawTotal} -> ${lagnaValue}` : lagnaValue}).`,
      tone: dusthanaCount > 0 ? "watch" : "neutral"
    },
    {
      label: "Primary Remedy Focus",
      value: primaryRemedy ? primaryRemedy.gem : "-",
      note: primaryRemedy
        ? `${primaryRemedy.planet} influence | Colors: ${primaryRemedy.colors}`
        : "No remedy data available.",
      tone: "neutral"
    }
  ];

  el.insightGrid.innerHTML = "";
  cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = `insight-card tone-${card.tone}`;
    article.innerHTML = `
      <p class="insight-label">${card.label}</p>
      <p class="insight-value">${card.value}</p>
      <p class="insight-note">${card.note}</p>
    `;
    el.insightGrid.appendChild(article);
  });

  el.insightSection.hidden = false;
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

function renderAttributeTable(rows) {
  el.attributeTableBody.innerHTML = "";
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    const numberCell = row.lookup !== row.value ? `${row.value} (${row.lookup})` : String(row.value);
    const remedyBits = [
      `<span><strong>Gem:</strong> ${row.gem}</span>`,
      row.gemAlternative !== "-" ? `<span><strong>Alt:</strong> ${row.gemAlternative}</span>` : "",
      `<span><strong>Colors:</strong> ${row.colors}</span>`,
      `<span><strong>Planet:</strong> ${row.planet}</span>`
    ].filter(Boolean).join("");
    tr.innerHTML = `
      <td>${row.type}</td>
      <td>${numberCell}</td>
      <td class="attribute-match-cell">
        <span><strong>E:</strong> ${formatNumberList(row.excellent)}</span>
        <span><strong>G:</strong> ${formatNumberList(row.good)}</span>
        <span><strong>N:</strong> ${formatNumberList(row.neutral)}</span>
        <span><strong>C:</strong> ${formatNumberList(row.bad)}</span>
      </td>
      <td class="attribute-remedy-cell">${remedyBits}</td>
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

function renderTrace(data) {
  const {
    nameData,
    trace,
    nameTotals,
    destiny,
    ruling,
    chMonth,
    chDestiny,
    chDestinyData,
    lagnaDestinyData,
    analysisReports,
    identifierReports,
    pyramid,
    nakshatraSummary
  } = data;

  const equation = nameData.clean
    .split("")
    .map((letter, index) => `${letter}(${nameData.nums[index]})`)
    .join(" + ");
  const total = nameData.nums.reduce((sum, value) => sum + value, 0);
  el.nameValues.textContent = `${equation} = ${total}`;

  el.nameTrace.innerHTML = "";
  if (!trace.length) {
    el.nameTrace.innerHTML = "<li>No trace data available.</li>";
  } else {
    trace.forEach((step) => {
      const item = document.createElement("li");
      item.textContent = `${step.letter}(${step.value}) -> ${step.sign}`;
      el.nameTrace.appendChild(item);
    });
  }

  if (el.destinyValues && destiny) {
    el.destinyValues.textContent = `Pythagorean destiny: ${destiny.digits.join(" + ")} = ${destiny.total} -> ${destiny.value}`;
  }

  if (el.chaldeanDestinyValues && chDestinyData) {
    const dayMath = chDestinyData.dayDigits.join(" + ");
    const yearMath = chDestinyData.yearDigits.join(" + ");
    el.chaldeanDestinyValues.textContent = `Chaldean destiny (no leading zero rule): Day ${dayMath} = ${chDestinyData.daySum}, Month ${chDestinyData.monthName} = ${chDestinyData.monthValue}, Year ${yearMath} = ${chDestinyData.yearSum}; Total ${chDestinyData.total} -> ${chDestinyData.value}`;
  }

  if (el.lagnaDestinyValues && lagnaDestinyData) {
    const lagnaDisplay = nakshatraSummary && nakshatraSummary.lagnaValue !== null
      ? (nakshatraSummary.lagnaAdjusted ? `${lagnaDestinyData.total} -> ${nakshatraSummary.lagnaValue}` : `${nakshatraSummary.lagnaValue}`)
      : `${lagnaDestinyData.total}`;
    const lagnaMath = lagnaDestinyData.values.length ? lagnaDestinyData.values.join(" + ") : "-";
    el.lagnaDestinyValues.textContent = `Selected lagna method ${lagnaDestinyData.methodLabel} (${lagnaDestinyData.token}): ${lagnaMath} = ${lagnaDisplay}`;
  }

  if (el.coreAuditTrail) {
    const pyramidApex = pyramid && pyramid.length ? pyramid[pyramid.length - 1][0] : "-";
    const nameMath = nameData.nums.length ? nameData.nums.join(" + ") : "-";
    const rulingDay = chDestinyData && chDestinyData.dayDigits
      ? chDestinyData.dayDigits.join("")
      : "-";
    const lines = [
      `Name total/reduced: ${nameMath} = ${nameTotals.total} -> ${nameTotals.reduced}`,
      `Pyramid apex: ${pyramidApex}`,
      `Ruling number: Day ${rulingDay} -> ${ruling}`,
      `Chaldean month value: ${chDestinyData && chDestinyData.monthName ? chDestinyData.monthName : "-"} -> ${chMonth}`,
      `Chaldean destiny final: ${chDestinyData ? chDestinyData.total : "-"} -> ${chDestiny}`
    ];
    el.coreAuditTrail.innerHTML = "";
    lines.forEach((line) => {
      const item = document.createElement("li");
      item.textContent = line;
      el.coreAuditTrail.appendChild(item);
    });
  }

  if (el.identifierTrace) {
    el.identifierTrace.innerHTML = "";
    if (!identifierReports.length) {
      el.identifierTrace.innerHTML = "<li>No optional identifiers provided.</li>";
    } else {
      identifierReports.forEach((report) => {
        const item = document.createElement("li");
        item.textContent = `${report.label}: ${report.values.join(" + ")} = ${report.total} -> ${report.reduced} | Pyramid 2D ${report.pyramidTwoDigit ?? "-"} | Pyramid 1D ${report.pyramidSingleDigit ?? "-"}`;
        el.identifierTrace.appendChild(item);
      });
    }
  }

  renderAuditPyramid(analysisReports);
}

function renderAuditPyramid(reports) {
  if (!el.auditPyramid) {
    return;
  }

  el.auditPyramid.innerHTML = "";
  if (!reports || !reports.length) {
    el.auditPyramid.textContent = "No pyramid values available.";
    return;
  }

  reports.forEach((report) => {
    const rows = report.pyramidRows && report.pyramidRows.length
      ? report.pyramidRows
      : pyramidRows(report.values || [], false);

    const card = document.createElement("article");
    card.className = "audit-pyramid-card";
    card.innerHTML = `
      <h4 class="audit-pyramid-title">${report.label}</h4>
      <p class="audit-pyramid-meta">Input: ${report.clean} | Chaldean: ${report.total} -> ${report.reduced}</p>
      <p class="audit-top-values"><strong>Top Values:</strong> ${(report.values && report.values.length) ? report.values.join(", ") : "-"}</p>
    `;

    const rowsWrap = document.createElement("div");
    rowsWrap.className = "audit-pyramid";

    rows.forEach((row, rowIndex) => {
      const rowEl = document.createElement("div");
      rowEl.className = "audit-pyramid-row";

      const label = document.createElement("span");
      label.className = "audit-row-label";
      if (rows.length === 1) {
        label.textContent = "Top / Apex";
      } else if (rowIndex === 0) {
        label.textContent = "Top";
      } else if (rowIndex === rows.length - 1) {
        label.textContent = "Apex";
      } else {
        label.textContent = `Row ${rowIndex + 1}`;
      }

      const values = document.createElement("div");
      values.className = "audit-row-values";

      row.forEach((value) => {
        const bubble = document.createElement("span");
        bubble.className = "pyramid-bubble audit-bubble";
        bubble.textContent = String(value);
        values.appendChild(bubble);
      });

      rowEl.appendChild(label);
      rowEl.appendChild(values);
      rowsWrap.appendChild(rowEl);
    });

    card.appendChild(rowsWrap);
    el.auditPyramid.appendChild(card);
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
