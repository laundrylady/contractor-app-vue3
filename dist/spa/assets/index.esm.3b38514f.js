import { C as defineComponent, r as ref, D as reactive, w as watch, g as computed, j as getCurrentInstance, E as onBeforeUpdate, o as onMounted, B as nextTick, G as onBeforeUnmount, H as withDirectives, h, I as Transition } from "./index.f0bcd142.js";
/*!
 * @quasar/quasar-ui-qcalendar v4.0.0-beta.16
 * (c) 2023 Jeff Galbraith <jeff@quasar.dev>
 * Released under the MIT License.
 */
const PARSE_REGEX = /^(\d{4})-(\d{1,2})(-(\d{1,2}))?([^\d]+(\d{1,2}))?(:(\d{1,2}))?(:(\d{1,2}))?(.(\d{1,3}))?$/;
const PARSE_DATE = /^(\d{4})-(\d{1,2})(-(\d{1,2}))/;
const PARSE_TIME = /(\d\d?)(:(\d\d?)|)(:(\d\d?)|)/;
const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_MIN = 28;
const DAYS_IN_MONTH_MAX = 31;
const MONTH_MAX = 12;
const MONTH_MIN = 1;
const DAY_MIN = 1;
const DAYS_IN_WEEK = 7;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const FIRST_HOUR = 0;
const MILLISECONDS_IN_MINUTE = 6e4;
const MILLISECONDS_IN_HOUR = 36e5;
const MILLISECONDS_IN_DAY = 864e5;
const MILLISECONDS_IN_WEEK = 6048e5;
const Timestamp = {
  date: "",
  time: "",
  year: 0,
  month: 0,
  day: 0,
  weekday: 0,
  hour: 0,
  minute: 0,
  doy: 0,
  workweek: 0,
  hasDay: false,
  hasTime: false,
  past: false,
  current: false,
  future: false,
  disabled: false,
  currentWeekday: false
};
const TimeObject = {
  hour: 0,
  minute: 0
};
function today() {
  const d = new Date(), month = "" + (d.getMonth() + 1), day = "" + d.getDate(), year = d.getFullYear();
  return [year, padNumber(month, 2), padNumber(day, 2)].join("-");
}
function getStartOfWeek(timestamp, weekdays, today2) {
  let start = copyTimestamp(timestamp);
  if (start.day === 1 || start.weekday === 0) {
    while (!weekdays.includes(start.weekday)) {
      start = nextDay(start);
    }
  }
  start = findWeekday(start, weekdays[0], prevDay);
  start = updateFormatted(start);
  if (today2) {
    start = updateRelative(start, today2, start.hasTime);
  }
  return start;
}
function getEndOfWeek(timestamp, weekdays, today2) {
  let end = copyTimestamp(timestamp);
  const lastDay = daysInMonth(end.year, end.month);
  if (lastDay === end.day || end.weekday === 6) {
    while (!weekdays.includes(end.weekday)) {
      end = prevDay(end);
    }
  }
  end = findWeekday(end, weekdays[weekdays.length - 1], nextDay);
  end = updateFormatted(end);
  if (today2) {
    end = updateRelative(end, today2, end.hasTime);
  }
  return end;
}
function getStartOfMonth(timestamp) {
  const start = copyTimestamp(timestamp);
  start.day = DAY_MIN;
  updateFormatted(start);
  return start;
}
function getEndOfMonth(timestamp) {
  const end = copyTimestamp(timestamp);
  end.day = daysInMonth(end.year, end.month);
  updateFormatted(end);
  return end;
}
function parseTime(input) {
  const type = Object.prototype.toString.call(input);
  switch (type) {
    case "[object Number]":
      return input;
    case "[object String]": {
      const parts = PARSE_TIME.exec(input);
      if (!parts) {
        return false;
      }
      return parseInt(parts[1], 10) * 60 + parseInt(parts[3] || 0, 10);
    }
    case "[object Object]":
      if (typeof input.hour !== "number" || typeof input.minute !== "number") {
        return false;
      }
      return input.hour * 60 + input.minute;
  }
  return false;
}
function validateTimestamp(input) {
  return !!PARSE_REGEX.exec(input);
}
function compareTimestamps(ts1, ts2) {
  return JSON.stringify(ts1) === JSON.stringify(ts2);
}
function compareDate(ts1, ts2) {
  return getDate(ts1) === getDate(ts2);
}
function compareTime(ts1, ts2) {
  return getTime(ts1) === getTime(ts2);
}
function compareDateTime(ts1, ts2) {
  return getDateTime(ts1) === getDateTime(ts2);
}
function parsed(input) {
  const parts = PARSE_REGEX.exec(input);
  if (!parts)
    return null;
  return {
    date: input,
    time: padNumber(parseInt(parts[6], 10) || 0, 2) + ":" + padNumber(parseInt(parts[8], 10) || 0, 2),
    year: parseInt(parts[1], 10),
    month: parseInt(parts[2], 10),
    day: parseInt(parts[4], 10) || 1,
    hour: !isNaN(parseInt(parts[6], 10)) ? parseInt(parts[6], 10) : 0,
    minute: !isNaN(parseInt(parts[8], 10)) ? parseInt(parts[8], 10) : 0,
    weekday: 0,
    doy: 0,
    workweek: 0,
    hasDay: !!parts[4],
    hasTime: true,
    past: false,
    current: false,
    future: false,
    disabled: false
  };
}
function parseTimestamp(input, now) {
  let timestamp = parsed(input);
  if (timestamp === null)
    return null;
  timestamp = updateFormatted(timestamp);
  if (now) {
    updateRelative(timestamp, now, timestamp.hasTime);
  }
  return timestamp;
}
function parseDate(date, utc = false) {
  const UTC = !!utc ? "UTC" : "";
  return updateFormatted({
    date: padNumber(date[`get${UTC}FullYear`](), 4) + "-" + padNumber(date[`get${UTC}Month`]() + 1, 2) + "-" + padNumber(date[`get${UTC}Date`](), 2),
    time: padNumber(date[`get${UTC}Hours`]() || 0, 2) + ":" + padNumber(date[`get${UTC}Minutes`]() || 0, 2),
    year: date[`get${UTC}FullYear`](),
    month: date[`get${UTC}Month`]() + 1,
    day: date[`get${UTC}Date`](),
    hour: date[`get${UTC}Hours`](),
    minute: date[`get${UTC}Minutes`](),
    weekday: 0,
    doy: 0,
    workweek: 0,
    hasDay: true,
    hasTime: true,
    past: false,
    current: false,
    future: false,
    disabled: false
  });
}
function getDayIdentifier(timestamp) {
  return timestamp.year * 1e8 + timestamp.month * 1e6 + timestamp.day * 1e4;
}
function getTimeIdentifier(timestamp) {
  return timestamp.hour * 100 + timestamp.minute;
}
function getDayTimeIdentifier(timestamp) {
  return getDayIdentifier(timestamp) + getTimeIdentifier(timestamp);
}
function diffTimestamp(ts1, ts2, strict) {
  const utc1 = Date.UTC(ts1.year, ts1.month - 1, ts1.day, ts1.hour, ts1.minute);
  const utc2 = Date.UTC(ts2.year, ts2.month - 1, ts2.day, ts2.hour, ts2.minute);
  if (strict === true && utc2 < utc1) {
    return 0;
  }
  return utc2 - utc1;
}
function updateRelative(timestamp, now, time = false) {
  let a = getDayIdentifier(now);
  let b = getDayIdentifier(timestamp);
  let current = a === b;
  if (timestamp.hasTime && time && current) {
    a = getTimeIdentifier(now);
    b = getTimeIdentifier(timestamp);
    current = a === b;
  }
  timestamp.past = b < a;
  timestamp.current = current;
  timestamp.future = b > a;
  timestamp.currentWeekday = timestamp.weekday === now.weekday;
  return timestamp;
}
function updateMinutes(timestamp, minutes2, now) {
  timestamp.hasTime = true;
  timestamp.hour = Math.floor(minutes2 / MINUTES_IN_HOUR);
  timestamp.minute = minutes2 % MINUTES_IN_HOUR;
  timestamp.time = getTime(timestamp);
  if (now) {
    updateRelative(timestamp, now, true);
  }
  return timestamp;
}
function updateWeekday(timestamp) {
  timestamp.weekday = getWeekday(timestamp);
  return timestamp;
}
function updateDayOfYear(timestamp) {
  timestamp.doy = getDayOfYear(timestamp);
  return timestamp;
}
function updateWorkWeek(timestamp) {
  timestamp.workweek = getWorkWeek(timestamp);
  return timestamp;
}
function updateDisabled(timestamp, disabledBefore, disabledAfter, disabledWeekdays, disabledDays) {
  const t = getDayIdentifier(timestamp);
  if (disabledBefore !== void 0) {
    const before = getDayIdentifier(parsed(disabledBefore));
    if (t <= before) {
      timestamp.disabled = true;
    }
  }
  if (timestamp.disabled !== true && disabledAfter !== void 0) {
    const after = getDayIdentifier(parsed(disabledAfter));
    if (t >= after) {
      timestamp.disabled = true;
    }
  }
  if (timestamp.disabled !== true && Array.isArray(disabledWeekdays) && disabledWeekdays.length > 0) {
    for (const weekday in disabledWeekdays) {
      if (disabledWeekdays[weekday] === timestamp.weekday) {
        timestamp.disabled = true;
        break;
      }
    }
  }
  if (timestamp.disabled !== true && Array.isArray(disabledDays) && disabledDays.length > 0) {
    for (const day in disabledDays) {
      if (Array.isArray(disabledDays[day]) && disabledDays[day].length === 2) {
        const start = parsed(disabledDays[day][0]);
        const end = parsed(disabledDays[day][1]);
        if (isBetweenDates(timestamp, start, end)) {
          timestamp.disabled = true;
          break;
        }
      } else {
        const d = getDayIdentifier(parseTimestamp(disabledDays[day] + " 00:00"));
        if (d === t) {
          timestamp.disabled = true;
          break;
        }
      }
    }
  }
  return timestamp;
}
function updateFormatted(timestamp) {
  timestamp.hasTime = true;
  timestamp.time = getTime(timestamp);
  timestamp.date = getDate(timestamp);
  timestamp.weekday = getWeekday(timestamp);
  timestamp.doy = getDayOfYear(timestamp);
  timestamp.workweek = getWorkWeek(timestamp);
  return timestamp;
}
function getDayOfYear(timestamp) {
  if (timestamp.year === 0)
    return;
  return (Date.UTC(timestamp.year, timestamp.month - 1, timestamp.day) - Date.UTC(timestamp.year, 0, 0)) / 24 / 60 / 60 / 1e3;
}
function getWorkWeek(timestamp) {
  if (timestamp.year === 0) {
    timestamp = parseTimestamp(today());
  }
  const date = makeDate(timestamp);
  if (isNaN(date))
    return 0;
  const weekday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  weekday.setDate(weekday.getDate() - (weekday.getDay() + 6) % 7 + 3);
  const firstThursday = new Date(weekday.getFullYear(), 0, 4);
  firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
  const ds = weekday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  weekday.setHours(weekday.getHours() - ds);
  const weekDiff = (weekday - firstThursday) / MILLISECONDS_IN_WEEK;
  return 1 + Math.floor(weekDiff);
}
function getWeekday(timestamp) {
  let weekday = timestamp.weekday;
  if (timestamp.hasDay) {
    const floor = Math.floor;
    const day = timestamp.day;
    const month = (timestamp.month + 9) % MONTH_MAX + 1;
    const century = floor(timestamp.year / 100);
    const year = timestamp.year % 100 - (timestamp.month <= 2 ? 1 : 0);
    weekday = ((day + floor(2.6 * month - 0.2) - 2 * century + year + floor(year / 4) + floor(century / 4)) % 7 + 7) % 7;
  }
  return weekday;
}
function isLeapYear(year) {
  return (year % 4 === 0 ^ year % 100 === 0 ^ year % 400 === 0) === 1;
}
function daysInMonth(year, month) {
  return isLeapYear(year) ? DAYS_IN_MONTH_LEAP[month] : DAYS_IN_MONTH[month];
}
function copyTimestamp(timestamp) {
  return { ...timestamp };
}
function padNumber(x, length) {
  let padded = String(x);
  while (padded.length < length) {
    padded = "0" + padded;
  }
  return padded;
}
function getDate(timestamp) {
  let str = `${padNumber(timestamp.year, 4)}-${padNumber(timestamp.month, 2)}`;
  if (timestamp.hasDay)
    str += `-${padNumber(timestamp.day, 2)}`;
  return str;
}
function getTime(timestamp) {
  if (!timestamp.hasTime) {
    return "";
  }
  return `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
}
function getDateTime(timestamp) {
  return getDate(timestamp) + " " + (timestamp.hasTime ? getTime(timestamp) : "00:00");
}
function nextDay(timestamp) {
  ++timestamp.day;
  timestamp.weekday = (timestamp.weekday + 1) % DAYS_IN_WEEK;
  if (timestamp.day > DAYS_IN_MONTH_MIN && timestamp.day > daysInMonth(timestamp.year, timestamp.month)) {
    timestamp.day = DAY_MIN;
    ++timestamp.month;
    if (timestamp.month > MONTH_MAX) {
      timestamp.month = MONTH_MIN;
      ++timestamp.year;
    }
  }
  return timestamp;
}
function prevDay(timestamp) {
  timestamp.day--;
  timestamp.weekday = (timestamp.weekday + 6) % DAYS_IN_WEEK;
  if (timestamp.day < DAY_MIN) {
    timestamp.month--;
    if (timestamp.month < MONTH_MIN) {
      timestamp.year--;
      timestamp.month = MONTH_MAX;
    }
    timestamp.day = daysInMonth(timestamp.year, timestamp.month);
  }
  return timestamp;
}
function moveRelativeDays(timestamp, mover = nextDay, days = 1, allowedWeekdays = [0, 1, 2, 3, 4, 5, 6]) {
  return relativeDays(timestamp, mover, days, allowedWeekdays);
}
function relativeDays(timestamp, mover = nextDay, days = 1, allowedWeekdays = [0, 1, 2, 3, 4, 5, 6]) {
  if (!allowedWeekdays.includes(timestamp.weekday) && timestamp.weekday === 0 && mover === nextDay) {
    ++days;
  }
  while (--days >= 0) {
    timestamp = mover(timestamp);
    if (allowedWeekdays.length < 7 && !allowedWeekdays.includes(timestamp.weekday)) {
      ++days;
    }
  }
  return timestamp;
}
function findWeekday(timestamp, weekday, mover = nextDay, maxDays = 6) {
  while (timestamp.weekday !== weekday && --maxDays >= 0)
    timestamp = mover(timestamp);
  return timestamp;
}
function getWeekdaySkips(weekdays) {
  const skips = [1, 1, 1, 1, 1, 1, 1];
  const filled = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < weekdays.length; ++i) {
    filled[weekdays[i]] = 1;
  }
  for (let k = 0; k < DAYS_IN_WEEK; ++k) {
    let skip = 1;
    for (let j = 1; j < DAYS_IN_WEEK; ++j) {
      const next = (k + j) % DAYS_IN_WEEK;
      if (filled[next]) {
        break;
      }
      ++skip;
    }
    skips[k] = filled[k] * skip;
  }
  return skips;
}
function createDayList(start, end, now, weekdaySkips, disabledBefore, disabledAfter, disabledWeekdays = [], disabledDays = [], max = 42, min = 0) {
  const stop = getDayIdentifier(end);
  const days = [];
  let current = copyTimestamp(start);
  let currentIdentifier = 0;
  let stopped = currentIdentifier === stop;
  if (stop < getDayIdentifier(start)) {
    return days;
  }
  while ((!stopped || days.length < min) && days.length < max) {
    currentIdentifier = getDayIdentifier(current);
    stopped = stopped || currentIdentifier > stop && days.length >= min;
    if (stopped) {
      break;
    }
    if (weekdaySkips[current.weekday] === 0) {
      current = relativeDays(current, nextDay);
      continue;
    }
    const day = copyTimestamp(current);
    updateFormatted(day);
    updateRelative(day, now);
    updateDisabled(day, disabledBefore, disabledAfter, disabledWeekdays, disabledDays);
    days.push(day);
    current = relativeDays(current, nextDay);
  }
  return days;
}
function createIntervalList(timestamp, first, minutes2, count, now) {
  const intervals = [];
  for (let i = 0; i < count; ++i) {
    const mins = (first + i) * minutes2;
    const ts = copyTimestamp(timestamp);
    intervals.push(updateMinutes(ts, mins, now));
  }
  return intervals;
}
function createNativeLocaleFormatter(locale, cb) {
  const emptyFormatter = (_t, _s) => "";
  if (typeof Intl === "undefined" || typeof Intl.DateTimeFormat === "undefined") {
    return emptyFormatter;
  }
  return (timestamp, short) => {
    try {
      const intlFormatter = new Intl.DateTimeFormat(locale || void 0, cb(timestamp, short));
      return intlFormatter.format(makeDateTime(timestamp));
    } catch (e) {
      console.error(`Intl.DateTimeFormat: ${e.message} -> ${getDateTime(timestamp)}`);
      return emptyFormatter;
    }
  };
}
function makeDate(timestamp, utc = true) {
  if (utc)
    return new Date(Date.UTC(timestamp.year, timestamp.month - 1, timestamp.day, 0, 0));
  return new Date(timestamp.year, timestamp.month - 1, timestamp.day, 0, 0);
}
function makeDateTime(timestamp, utc = true) {
  if (utc)
    return new Date(Date.UTC(timestamp.year, timestamp.month - 1, timestamp.day, timestamp.hour, timestamp.minute));
  return new Date(timestamp.year, timestamp.month - 1, timestamp.day, timestamp.hour, timestamp.minute);
}
function validateNumber(input) {
  return isFinite(parseInt(input, 10));
}
function maxTimestamp(timestamps, useTime = false) {
  const func = useTime === true ? getDayTimeIdentifier : getDayIdentifier;
  return timestamps.reduce((prev, cur) => {
    return Math.max(func(prev), func(cur)) === func(prev) ? prev : cur;
  });
}
function minTimestamp(timestamps, useTime = false) {
  const func = useTime === true ? getDayTimeIdentifier : getDayIdentifier;
  return timestamps.reduce((prev, cur) => {
    return Math.min(func(prev), func(cur)) === func(prev) ? prev : cur;
  });
}
function isBetweenDates(timestamp, startTimestamp, endTimestamp, useTime) {
  const cd = getDayIdentifier(timestamp) + (useTime === true ? getTimeIdentifier(timestamp) : 0);
  const sd = getDayIdentifier(startTimestamp) + (useTime === true ? getTimeIdentifier(startTimestamp) : 0);
  const ed = getDayIdentifier(endTimestamp) + (useTime === true ? getTimeIdentifier(endTimestamp) : 0);
  return cd >= sd && cd <= ed;
}
function isOverlappingDates(startTimestamp, endTimestamp, firstTimestamp, lastTimestamp) {
  const start = getDayIdentifier(startTimestamp);
  const end = getDayIdentifier(endTimestamp);
  const first = getDayIdentifier(firstTimestamp);
  const last = getDayIdentifier(lastTimestamp);
  return start >= first && start <= last || end >= first && end <= last || first >= start && end >= last;
}
function addToDate(timestamp, options) {
  const ts = copyTimestamp(timestamp);
  let minType;
  __forEachObject(options, (value, key) => {
    if (ts[key] !== void 0) {
      ts[key] += parseInt(value, 10);
      const indexType = NORMALIZE_TYPES.indexOf(key);
      if (indexType !== -1) {
        if (minType === void 0) {
          minType = indexType;
        } else {
          minType = Math.min(indexType, minType);
        }
      }
    }
  });
  if (minType !== void 0) {
    __normalize(ts, NORMALIZE_TYPES[minType]);
  }
  updateFormatted(ts);
  return ts;
}
const NORMALIZE_TYPES = ["minute", "hour", "day", "month"];
function __forEachObject(obj, cb) {
  Object.keys(obj).forEach((k) => cb(obj[k], k));
}
function __normalizeMinute(ts) {
  if (ts.minute >= MINUTES_IN_HOUR || ts.minute < 0) {
    const hours = Math.floor(ts.minute / MINUTES_IN_HOUR);
    ts.minute -= hours * MINUTES_IN_HOUR;
    ts.hour += hours;
    __normalizeHour(ts);
  }
  return ts;
}
function __normalizeHour(ts) {
  if (ts.hour >= HOURS_IN_DAY || ts.hour < 0) {
    const days = Math.floor(ts.hour / HOURS_IN_DAY);
    ts.hour -= days * HOURS_IN_DAY;
    ts.day += days;
    __normalizeDay(ts);
  }
  return ts;
}
function __normalizeDay(ts) {
  __normalizeMonth(ts);
  let dim = daysInMonth(ts.year, ts.month);
  if (ts.day > dim) {
    ++ts.month;
    if (ts.month > MONTH_MAX) {
      __normalizeMonth(ts);
    }
    let days = ts.day - dim;
    dim = daysInMonth(ts.year, ts.month);
    do {
      if (days > dim) {
        ++ts.month;
        if (ts.month > MONTH_MAX) {
          __normalizeMonth(ts);
        }
        days -= dim;
        dim = daysInMonth(ts.year, ts.month);
      }
    } while (days > dim);
    ts.day = days;
  } else if (ts.day <= 0) {
    let days = -1 * ts.day;
    --ts.month;
    if (ts.month <= 0) {
      __normalizeMonth(ts);
    }
    dim = daysInMonth(ts.year, ts.month);
    do {
      if (days > dim) {
        days -= dim;
        --ts.month;
        if (ts.month <= 0) {
          __normalizeMonth(ts);
        }
        dim = daysInMonth(ts.year, ts.month);
      }
    } while (days > dim);
    ts.day = dim - days;
  }
  return ts;
}
function __normalizeMonth(ts) {
  if (ts.month > MONTH_MAX) {
    const years = Math.floor(ts.month / MONTH_MAX);
    ts.month = ts.month % MONTH_MAX;
    ts.year += years;
  } else if (ts.month < MONTH_MIN) {
    ts.month += MONTH_MAX;
    --ts.year;
  }
  return ts;
}
function __normalize(ts, type) {
  switch (type) {
    case "minute":
      return __normalizeMinute(ts);
    case "hour":
      return __normalizeHour(ts);
    case "day":
      return __normalizeDay(ts);
    case "month":
      return __normalizeMonth(ts);
  }
}
function daysBetween(ts1, ts2) {
  const diff = diffTimestamp(ts1, ts2, true);
  return Math.floor(diff / MILLISECONDS_IN_DAY);
}
function weeksBetween(ts1, ts2) {
  let t1 = copyTimestamp(ts1);
  let t2 = copyTimestamp(ts2);
  t1 = findWeekday(t1, 0);
  t2 = findWeekday(t2, 6);
  return Math.ceil(daysBetween(t1, t2) / DAYS_IN_WEEK);
}
const weekdayDateMap = {
  Sun: new Date("2020-01-05T00:00:00.000Z"),
  Mon: new Date("2020-01-06T00:00:00.000Z"),
  Tue: new Date("2020-01-07T00:00:00.000Z"),
  Wed: new Date("2020-01-08T00:00:00.000Z"),
  Thu: new Date("2020-01-09T00:00:00.000Z"),
  Fri: new Date("2020-01-10T00:00:00.000Z"),
  Sat: new Date("2020-01-11T00:00:00.000Z")
};
function getWeekdayFormatter() {
  const emptyFormatter = (_d, _t) => "";
  const options = {
    long: { timeZone: "UTC", weekday: "long" },
    short: { timeZone: "UTC", weekday: "short" },
    narrow: { timeZone: "UTC", weekday: "narrow" }
  };
  if (typeof Intl === "undefined" || typeof Intl.DateTimeFormat === "undefined") {
    return emptyFormatter;
  }
  function weekdayFormatter(weekday, type, locale) {
    try {
      const intlFormatter = new Intl.DateTimeFormat(locale || void 0, options[type] || options["long"]);
      return intlFormatter.format(weekdayDateMap[weekday]);
    } catch (e) {
      console.error(`Intl.DateTimeFormat: ${e.message} -> day of week: ${weekday}`);
      return emptyFormatter;
    }
  }
  return weekdayFormatter;
}
function getWeekdayNames(type, locale) {
  const shortWeekdays = Object.keys(weekdayDateMap);
  const weekdayFormatter = getWeekdayFormatter();
  return shortWeekdays.map((weekday) => weekdayFormatter(weekday, type, locale));
}
function getMonthFormatter() {
  const emptyFormatter = (_m, _t) => "";
  const options = {
    long: { timeZone: "UTC", month: "long" },
    short: { timeZone: "UTC", month: "short" },
    narrow: { timeZone: "UTC", month: "narrow" }
  };
  if (typeof Intl === "undefined" || typeof Intl.DateTimeFormat === "undefined") {
    return emptyFormatter;
  }
  function monthFormatter(month, type, locale) {
    try {
      const intlFormatter = new Intl.DateTimeFormat(locale || void 0, options[type] || options["long"]);
      const date = new Date();
      date.setDate(1);
      date.setMonth(month);
      return intlFormatter.format(date);
    } catch (e) {
      console.error(`Intl.DateTimeFormat: ${e.message} -> month: ${month}`);
      return emptyFormatter;
    }
  }
  return monthFormatter;
}
function getMonthNames(type, locale) {
  const monthFormatter = getMonthFormatter();
  return [...Array(12).keys()].map((month) => monthFormatter(month, type, locale));
}
function convertToUnit(input, unit = "px") {
  if (input == null || input === "") {
    return void 0;
  } else if (isNaN(input)) {
    return String(input);
  } else if (input === "auto") {
    return input;
  } else {
    return `${Number(input)}${unit}`;
  }
}
function indexOf(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i) === true) {
      return i;
    }
  }
  return -1;
}
function minCharWidth(str, count) {
  if (count === 0)
    return str;
  return str.slice(0, count);
}
var ResizeObserver$1 = {
  name: "ResizeObserver",
  mounted(el, { modifiers, value }) {
    if (!value)
      return;
    const opts = {};
    opts.callback = value;
    opts.size = { width: 0, height: 0 };
    opts.observer = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      if (rect.width !== opts.size.width || rect.height !== opts.size.height) {
        opts.size.width = rect.width;
        opts.size.height = rect.height;
        opts.callback(opts.size);
      }
    });
    opts.observer.observe(el);
    el.__onResizeObserver = opts;
  },
  beforeUnmount(el) {
    if (!el.__onResizeObserver)
      return;
    const { observer } = el.__onResizeObserver;
    observer.unobserve(el);
    delete el.__onResizeObserver;
  }
};
function useCalendar(props, renderFunc, {
  scrollArea,
  pane
}) {
  if (!renderFunc) {
    const msg = "[error: renderCalendar] no renderFunc has been supplied to useCalendar";
    console.error(msg);
    throw new Error(msg);
  }
  const size = reactive({ width: 0, height: 0 }), rootRef = ref(null);
  function __onResize({ width, height }) {
    size.width = width;
    size.height = height;
  }
  const scrollWidth = computed(() => {
    return props.noScroll !== true ? scrollArea.value && pane.value && size.height ? scrollArea.value.offsetWidth - pane.value.offsetWidth : 0 : 0;
  });
  function __initCalendar() {
  }
  function __renderCalendar() {
    const data = {
      ref: rootRef,
      role: "complementary",
      lang: props.locale,
      class: {
        "q-calendar--dark": props.dark === true,
        "q-calendar": true,
        "q-calendar__bordered": props.bordered === true
      }
    };
    return withDirectives(
      h("div", data, [
        renderFunc()
      ]),
      [[
        ResizeObserver$1,
        __onResize
      ]]
    );
  }
  return {
    rootRef,
    scrollWidth,
    __initCalendar,
    __renderCalendar
  };
}
const useCommonProps = {
  modelValue: {
    type: String,
    default: today(),
    validator: (v) => v === "" || validateTimestamp(v)
  },
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  dateType: {
    type: String,
    default: "round",
    validator: (v) => ["round", "rounded", "square"].includes(v)
  },
  weekdayAlign: {
    type: String,
    default: "center",
    validator: (v) => ["left", "center", "right"].includes(v)
  },
  dateAlign: {
    type: String,
    default: "center",
    validator: (v) => ["left", "center", "right"].includes(v)
  },
  bordered: Boolean,
  dark: Boolean,
  noAria: Boolean,
  noActiveDate: Boolean,
  noHeader: Boolean,
  noScroll: Boolean,
  shortWeekdayLabel: Boolean,
  noDefaultHeaderText: Boolean,
  noDefaultHeaderBtn: Boolean,
  minWeekdayLabel: {
    type: [Number, String],
    default: 1
  },
  weekdayBreakpoints: {
    type: Array,
    default: () => [75, 35],
    validator: (v) => v.length === 2
  },
  locale: {
    type: String,
    default: "en-US"
  },
  animated: Boolean,
  transitionPrev: {
    type: String,
    default: "slide-right"
  },
  transitionNext: {
    type: String,
    default: "slide-left"
  },
  disabledDays: Array,
  disabledBefore: String,
  disabledAfter: String,
  disabledWeekdays: {
    type: Array,
    default: () => []
  },
  dragEnterFunc: {
    type: Function
  },
  dragOverFunc: {
    type: Function
  },
  dragLeaveFunc: {
    type: Function
  },
  dropFunc: {
    type: Function
  },
  selectedDates: {
    type: Array,
    default: () => []
  },
  selectedStartEndDates: {
    type: Array,
    default: () => []
  },
  hoverable: Boolean,
  focusable: Boolean,
  focusType: {
    type: Array,
    default: ["date"],
    validator: (v) => {
      let val = true;
      v.forEach((type) => {
        if (["day", "date", "weekday", "interval", "time", "resource", "task"].includes(type) !== true) {
          val = false;
        }
      });
      return val;
    }
  }
};
function useCommon(props, {
  startDate,
  endDate,
  times
}) {
  const weekdaySkips = computed(() => getWeekdaySkips(props.weekdays));
  const parsedStart = computed(() => parseTimestamp(startDate.value));
  const parsedEnd = computed(() => {
    if (endDate.value === "0000-00-00") {
      return endOfWeek(parsedStart.value);
    }
    return parseTimestamp(endDate.value);
  });
  const dayFormatter = computed(() => {
    const options = { timeZone: "UTC", day: "numeric" };
    return createNativeLocaleFormatter(
      props.locale,
      (_tms, _short) => options
    );
  });
  const weekdayFormatter = computed(() => {
    const longOptions = { timeZone: "UTC", weekday: "long" };
    const shortOptions = { timeZone: "UTC", weekday: "short" };
    return createNativeLocaleFormatter(
      props.locale,
      (_tms, short) => short ? shortOptions : longOptions
    );
  });
  const ariaDateFormatter = computed(() => {
    const longOptions = { timeZone: "UTC", dateStyle: "full" };
    return createNativeLocaleFormatter(
      props.locale,
      (_tms) => longOptions
    );
  });
  function arrayHasDate(arr, timestamp) {
    return arr && arr.length > 0 && arr.includes(timestamp.date);
  }
  function checkDays(arr, timestamp) {
    const days = {
      firstDay: false,
      betweenDays: false,
      lastDay: false
    };
    if (arr && arr.length === 2) {
      const current = getDayIdentifier(timestamp);
      const first = getDayIdentifier(parsed(arr[0]));
      const last = getDayIdentifier(parsed(arr[1]));
      days.firstDay = first === current;
      days.lastDay = last === current;
      days.betweenDays = first < current && last > current;
    }
    return days;
  }
  function getRelativeClasses(timestamp, outside = false, selectedDays = [], startEndDays = [], hover = false) {
    const isSelected = arrayHasDate(selectedDays, timestamp);
    const { firstDay, lastDay, betweenDays } = checkDays(startEndDays, timestamp);
    return {
      "q-past-day": firstDay !== true && betweenDays !== true && lastDay !== true && isSelected !== true && outside !== true && timestamp.past,
      "q-future-day": firstDay !== true && betweenDays !== true && lastDay !== true && isSelected !== true && outside !== true && timestamp.future,
      "q-outside": outside,
      "q-current-day": timestamp.current,
      "q-selected": isSelected,
      "q-range-first": firstDay === true,
      "q-range": betweenDays === true,
      "q-range-last": lastDay === true,
      "q-range-hover": hover === true && (firstDay === true || lastDay === true || betweenDays === true),
      "q-disabled-day disabled": timestamp.disabled === true
    };
  }
  function startOfWeek(timestamp) {
    return getStartOfWeek(timestamp, props.weekdays, times.today);
  }
  function endOfWeek(timestamp) {
    return getEndOfWeek(timestamp, props.weekdays, times.today);
  }
  function dayStyleDefault(timestamp) {
    return void 0;
  }
  return {
    weekdaySkips,
    parsedStart,
    parsedEnd,
    dayFormatter,
    weekdayFormatter,
    ariaDateFormatter,
    arrayHasDate,
    checkDays,
    getRelativeClasses,
    startOfWeek,
    endOfWeek,
    dayStyleDefault
  };
}
function scrollTo(scrollTarget, offset) {
  if (scrollTarget === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, offset);
    return;
  }
  scrollTarget.scrollTop = offset;
}
function scrollToHorizontal(scrollTarget, offset) {
  if (scrollTarget === window) {
    window.scrollTo(offset, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  scrollTarget.scrollLeft = offset;
}
function getVerticalScrollPosition(scrollTarget) {
  return scrollTarget === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : scrollTarget.scrollTop;
}
function getHorizontalScrollPosition(scrollTarget) {
  return scrollTarget === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : scrollTarget.scrollLeft;
}
function animVerticalScrollTo(el, to, duration = 0) {
  const prevTime = arguments[3] === void 0 ? performance.now() : arguments[3];
  const pos = getVerticalScrollPosition(el);
  if (duration <= 0) {
    if (pos !== to) {
      scrollTo(el, to);
    }
    return;
  }
  requestAnimationFrame((nowTime) => {
    const frameTime = nowTime - prevTime;
    const newPos = pos + (to - pos) / Math.max(frameTime, duration) * frameTime;
    scrollTo(el, newPos);
    if (newPos !== to) {
      animVerticalScrollTo(el, to, duration - frameTime, nowTime);
    }
  });
}
function animHorizontalScrollTo(el, to, duration = 0) {
  const prevTime = arguments[3] === void 0 ? performance.now() : arguments[3];
  const pos = getHorizontalScrollPosition(el);
  if (duration <= 0) {
    if (pos !== to) {
      scrollToHorizontal(el, to);
    }
    return;
  }
  requestAnimationFrame((nowTime) => {
    const frameTime = nowTime - prevTime;
    const newPos = pos + (to - pos) / Math.max(frameTime, duration) * frameTime;
    setHorizontalScroll(el, newPos);
    if (newPos !== to) {
      animHorizontalScrollTo(el, to, duration - frameTime, nowTime);
    }
  });
}
const useIntervalProps = {
  view: {
    type: String,
    validator: (v) => ["day", "week", "month", "month-interval"].includes(v),
    default: "day"
  },
  shortIntervalLabel: Boolean,
  intervalHeight: {
    type: [Number, String],
    default: 40,
    validator: validateNumber
  },
  intervalMinutes: {
    type: [Number, String],
    default: 60,
    validator: validateNumber
  },
  intervalStart: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  intervalCount: {
    type: [Number, String],
    default: 24,
    validator: validateNumber
  },
  intervalStyle: {
    type: Function,
    default: null
  },
  intervalClass: {
    type: Function,
    default: null
  },
  weekdayStyle: {
    type: Function,
    default: null
  },
  weekdayClass: {
    type: Function,
    default: null
  },
  showIntervalLabel: {
    type: Function,
    default: null
  },
  hour24Format: Boolean,
  timeClicksClamped: Boolean,
  dateHeader: {
    type: String,
    default: "stacked",
    validator: (v) => ["stacked", "inline", "inverted"].includes(v)
  }
};
const useSchedulerProps = {
  view: {
    type: String,
    validator: (v) => ["day", "week", "month", "month-interval"].includes(v),
    default: "day"
  },
  modelResources: {
    type: Array
  },
  resourceKey: {
    type: [String, Number],
    default: "id"
  },
  resourceLabel: {
    type: [String, Number],
    default: "label"
  },
  resourceHeight: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  resourceMinHeight: {
    type: [Number, String],
    default: 70,
    validator: validateNumber
  },
  resourceStyle: {
    type: Function,
    default: null
  },
  resourceClass: {
    type: Function,
    default: null
  },
  weekdayStyle: {
    type: Function,
    default: null
  },
  weekdayClass: {
    type: Function,
    default: null
  },
  dayStyle: {
    type: Function,
    default: null
  },
  dayClass: {
    type: Function,
    default: null
  },
  dateHeader: {
    type: String,
    default: "stacked",
    validator: (v) => ["stacked", "inline", "inverted"].includes(v)
  }
};
const useAgendaProps = {
  view: {
    type: String,
    validator: (v) => ["day", "week", "month", "month-interval"].includes(v),
    default: "day"
  },
  leftColumnOptions: {
    type: Array
  },
  rightColumnOptions: {
    type: Array
  },
  columnOptionsId: {
    type: String
  },
  columnOptionsLabel: {
    type: String
  },
  weekdayStyle: {
    type: Function,
    default: null
  },
  weekdayClass: {
    type: Function,
    default: null
  },
  dayStyle: {
    type: Function,
    default: null
  },
  dayClass: {
    type: Function,
    default: null
  },
  dateHeader: {
    type: String,
    default: "stacked",
    validator: (v) => ["stacked", "inline", "inverted"].includes(v)
  },
  dayHeight: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  dayMinHeight: {
    type: [Number, String],
    default: 40,
    validator: validateNumber
  }
};
const useResourceProps = {
  modelResources: {
    type: Array
  },
  resourceKey: {
    type: [String, Number],
    default: "id"
  },
  resourceLabel: {
    type: [String, Number],
    default: "label"
  },
  resourceHeight: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  resourceMinHeight: {
    type: [Number, String],
    default: 70,
    validator: validateNumber
  },
  resourceStyle: {
    type: Function,
    default: null
  },
  resourceClass: {
    type: Function,
    default: null
  },
  cellWidth: {
    type: [Number, String],
    default: 100
  },
  intervalHeaderHeight: {
    type: [Number, String],
    default: 20,
    validator: validateNumber
  },
  noSticky: Boolean
};
function useInterval(props, {
  weekdaySkips,
  times,
  scrollArea,
  parsedStart,
  parsedEnd,
  maxDays,
  size,
  headerColumnRef
}) {
  const parsedIntervalStart = computed(() => parseInt(props.intervalStart, 10));
  const parsedIntervalMinutes = computed(() => parseInt(props.intervalMinutes, 10));
  const parsedIntervalCount = computed(() => parseInt(props.intervalCount, 10));
  const parsedIntervalHeight = computed(() => parseFloat(props.intervalHeight));
  const parsedCellWidth = computed(() => {
    let width = 0;
    if (props.cellWidth) {
      width = props.cellWidth;
    } else if (size.width > 0 && headerColumnRef.value) {
      width = headerColumnRef.value.offsetWidth / (props.columnCount > 1 ? props.columnCount : maxDays.value);
    }
    return width;
  });
  const parsedStartMinute = computed(() => parsedIntervalStart.value * parsedIntervalMinutes.value);
  const bodyHeight = computed(() => parsedIntervalCount.value * parsedIntervalHeight.value);
  const bodyWidth = computed(() => parsedIntervalCount.value * parsedCellWidth.value);
  const parsedWeekStart = computed(() => startOfWeek(parsedStart.value));
  const parsedWeekEnd = computed(() => endOfWeek(parsedEnd.value));
  const days = computed(() => {
    return createDayList(
      parsedStart.value,
      parsedEnd.value,
      times.today,
      weekdaySkips.value,
      props.disabledBefore,
      props.disabledAfter,
      props.disabledWeekdays,
      props.disabledDays,
      maxDays.value
    );
  });
  const intervals = computed(() => {
    return days.value.map((day) => createIntervalList(
      day,
      parsedIntervalStart.value,
      parsedIntervalMinutes.value,
      parsedIntervalCount.value,
      times.now
    ));
  });
  function startOfWeek(timestamp) {
    return getStartOfWeek(timestamp, props.weekdays, times.today);
  }
  function endOfWeek(timestamp) {
    return getEndOfWeek(timestamp, props.weekdays, times.today);
  }
  function arrayHasDateTime(arr, timestamp) {
    return arr && arr.length > 0 && arr.includes(getDateTime(timestamp));
  }
  function checkIntervals(arr, timestamp) {
    const days2 = {
      firstDay: false,
      betweenDays: false,
      lastDay: false
    };
    if (arr && arr.length === 2) {
      const current = getDayTimeIdentifier(timestamp);
      const first = getDayTimeIdentifier(parsed(arr[0]));
      const last = getDayTimeIdentifier(parsed(arr[1]));
      days2.firstDay = first === current;
      days2.lastDay = last === current;
      days2.betweenDays = first < current && last > current;
    }
    return days2;
  }
  function getIntervalClasses(interval, selectedDays = [], startEndDays = []) {
    const isSelected = arrayHasDateTime(selectedDays, interval);
    const { firstDay, lastDay, betweenDays } = checkIntervals(startEndDays, interval);
    return {
      "q-selected": isSelected,
      "q-range-first": firstDay === true,
      "q-range": betweenDays === true,
      "q-range-last": lastDay === true,
      "q-disabled-interval disabled": interval.disabled === true
    };
  }
  function getResourceClasses(interval, selectedDays = [], startEndDays = []) {
    return [];
  }
  const intervalFormatter = computed(() => {
    const longOptions = { timeZone: "UTC", hour12: !props.hour24Format, hour: "2-digit", minute: "2-digit" };
    const shortOptions = { timeZone: "UTC", hour12: !props.hour24Format, hour: "numeric", minute: "2-digit" };
    const shortHourOptions = { timeZone: "UTC", hour12: !props.hour24Format, hour: "numeric" };
    return createNativeLocaleFormatter(
      props.locale,
      (tms, short) => short ? tms.minute === 0 ? shortHourOptions : shortOptions : longOptions
    );
  });
  const ariaDateTimeFormatter = computed(() => {
    const longOptions = { timeZone: "UTC", dateStyle: "full", timeStyle: "short" };
    return createNativeLocaleFormatter(
      props.locale,
      (_tms) => longOptions
    );
  });
  function showIntervalLabelDefault(interval) {
    const first = intervals.value[0][0];
    const isFirst = first.hour === interval.hour && first.minute === interval.minute;
    return !isFirst && interval.minute === 0;
  }
  function showResourceLabelDefault(resource) {
  }
  function styleDefault(interval) {
    return void 0;
  }
  function getTimestampAtEventInterval(e, day, clamp = false, now = void 0) {
    let timestamp = copyTimestamp(day);
    const bounds = e.currentTarget.getBoundingClientRect();
    const touchEvent = e;
    const mouseEvent = e;
    const touches = touchEvent.changedTouches || touchEvent.touches;
    const clientY = touches && touches[0] ? touches[0].clientY : mouseEvent.clientY;
    const addIntervals = (clientY - bounds.top) / parsedIntervalHeight.value;
    const addMinutes = Math.floor((clamp ? Math.floor(addIntervals) : addIntervals) * parsedIntervalMinutes.value);
    if (addMinutes !== 0) {
      timestamp = addToDate(timestamp, { minute: addMinutes });
    }
    if (now) {
      updateRelative(timestamp, now, true);
    }
    return timestamp;
  }
  function getTimestampAtEvent(e, day, clamp = false, now = void 0) {
    let timestamp = copyTimestamp(day);
    const bounds = e.currentTarget.getBoundingClientRect();
    const touchEvent = e;
    const mouseEvent = e;
    const touches = touchEvent.changedTouches || touchEvent.touches;
    const clientY = touches && touches[0] ? touches[0].clientY : mouseEvent.clientY;
    const addIntervals = (clientY - bounds.top) / parsedIntervalHeight.value;
    const addMinutes = Math.floor((clamp ? Math.floor(addIntervals) : addIntervals) * parsedIntervalMinutes.value);
    if (addMinutes !== 0) {
      timestamp = addToDate(timestamp, { minute: addMinutes });
    }
    if (now) {
      updateRelative(timestamp, now, true);
    }
    return timestamp;
  }
  function getTimestampAtEventX(e, day, clamp = false, now = void 0) {
    let timestamp = copyTimestamp(day);
    const bounds = e.currentTarget.getBoundingClientRect();
    const touchEvent = e;
    const mouseEvent = e;
    const touches = touchEvent.changedTouches || touchEvent.touches;
    const clientX = touches && touches[0] ? touches[0].clientX : mouseEvent.clientX;
    const addIntervals = (clientX - bounds.left) / parsedCellWidth.value;
    const addMinutes = Math.floor((clamp ? Math.floor(addIntervals) : addIntervals) * parsedIntervalMinutes.value);
    if (addMinutes !== 0) {
      timestamp = addToDate(timestamp, { minute: addMinutes });
    }
    if (now) {
      updateRelative(timestamp, now, true);
    }
    return timestamp;
  }
  function getScopeForSlot(timestamp, columnIndex) {
    const scope = { timestamp };
    scope.timeStartPos = timeStartPos;
    scope.timeDurationHeight = timeDurationHeight;
    if (columnIndex !== void 0) {
      scope.columnIndex = columnIndex;
    }
    return scope;
  }
  function getScopeForSlotX(timestamp, index) {
    const scope = { timestamp: copyTimestamp(timestamp) };
    scope.timeStartPosX = timeStartPosX;
    scope.timeDurationWidth = timeDurationWidth;
    if (index !== void 0) {
      scope.index = index;
    }
    return scope;
  }
  function scrollToTime(time, duration = 0) {
    const y = timeStartPos(time);
    if (y === false || !scrollArea.value) {
      return false;
    }
    animVerticalScrollTo(scrollArea.value, y, duration);
    return true;
  }
  function scrollToTimeX(time, duration = 0) {
    const x = timeStartPosX(time);
    if (x === false || !scrollArea.value) {
      return false;
    }
    animHorizontalScrollTo(scrollArea.value, x, duration);
    return true;
  }
  function timeDurationHeight(minutes2) {
    return minutes2 / parsedIntervalMinutes.value * parsedIntervalHeight.value;
  }
  function timeDurationWidth(minutes2) {
    return minutes2 / parsedIntervalMinutes.value * parsedCellWidth.value;
  }
  function heightToMinutes(height) {
    return parseInt(height, 10) * parsedIntervalMinutes.value / parsedIntervalHeight.value;
  }
  function widthToMinutes(width) {
    return parseInt(width, 10) * parsedIntervalMinutes.value / parsedCellWidth.value;
  }
  function timeStartPos(time, clamp = true) {
    const minutes2 = parseTime(time);
    if (minutes2 === false)
      return false;
    const min = parsedStartMinute.value;
    const gap = parsedIntervalCount.value * parsedIntervalMinutes.value;
    const delta = (minutes2 - min) / gap;
    let y = delta * bodyHeight.value;
    if (clamp) {
      if (y < 0) {
        y = 0;
      }
      if (y > bodyHeight.value) {
        y = bodyHeight.value;
      }
    }
    return y;
  }
  function timeStartPosX(time, clamp = true) {
    const minutes2 = parseTime(time);
    if (minutes2 === false)
      return false;
    const min = parsedStartMinute.value;
    const gap = parsedIntervalCount.value * parsedIntervalMinutes.value;
    const delta = (minutes2 - min) / gap;
    let x = delta * bodyWidth.value;
    if (clamp) {
      if (x < 0) {
        x = 0;
      }
      if (x > bodyWidth.value) {
        x = bodyWidth.value;
      }
    }
    return x;
  }
  return {
    parsedIntervalStart,
    parsedIntervalMinutes,
    parsedIntervalCount,
    parsedIntervalHeight,
    parsedCellWidth,
    parsedStartMinute,
    bodyHeight,
    bodyWidth,
    parsedWeekStart,
    parsedWeekEnd,
    days,
    intervals,
    intervalFormatter,
    ariaDateTimeFormatter,
    arrayHasDateTime,
    checkIntervals,
    getIntervalClasses,
    getResourceClasses,
    showIntervalLabelDefault,
    showResourceLabelDefault,
    styleDefault,
    getTimestampAtEventInterval,
    getTimestampAtEvent,
    getTimestampAtEventX,
    getScopeForSlot,
    getScopeForSlotX,
    scrollToTime,
    scrollToTimeX,
    timeDurationHeight,
    timeDurationWidth,
    heightToMinutes,
    widthToMinutes,
    timeStartPos,
    timeStartPosX
  };
}
const useColumnProps = {
  columnCount: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  columnIndexStart: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  }
};
const useMaxDaysProps = {
  maxDays: {
    type: Number,
    default: 1
  }
};
const useTimesProps = {
  now: {
    type: String,
    validator: (v) => v === "" || validateTimestamp(v),
    default: ""
  }
};
function useTimes(props) {
  const times = reactive({
    now: parseTimestamp("0000-00-00 00:00"),
    today: parseTimestamp("0000-00-00")
  });
  const parsedNow = computed(() => props.now ? parseTimestamp(props.now) : getNow());
  watch(() => parsedNow, (val) => updateCurrent());
  function setCurrent() {
    times.now.current = times.today.current = true;
    times.now.past = times.today.past = false;
    times.now.future = times.today.future = false;
  }
  function updateCurrent() {
    const now = parsedNow.value || getNow();
    updateDay(now, times.now);
    updateTime(now, times.now);
    updateDay(now, times.today);
  }
  function getNow() {
    return parseDate(new Date());
  }
  function updateDay(now, target) {
    if (now.date !== target.date) {
      target.year = now.year;
      target.month = now.month;
      target.day = now.day;
      target.weekday = now.weekday;
      target.date = now.date;
    }
  }
  function updateTime(now, target) {
    if (now.time !== target.time) {
      target.hour = now.hour;
      target.minute = now.minute;
      target.time = now.time;
    }
  }
  return {
    times,
    parsedNow,
    setCurrent,
    updateCurrent,
    getNow,
    updateDay,
    updateTime
  };
}
function useRenderValues(props, {
  parsedView,
  parsedValue,
  times
}) {
  const renderValues = computed(() => {
    const around = parsedValue.value;
    let maxDays = props.maxDays;
    let start = around;
    let end = around;
    switch (parsedView.value) {
      case "month":
        start = getStartOfMonth(around);
        end = getEndOfMonth(around);
        maxDays = daysInMonth(start.year, start.month);
        break;
      case "week":
      case "week-agenda":
      case "week-scheduler":
        start = getStartOfWeek(around, props.weekdays, times.today);
        end = getEndOfWeek(start, props.weekdays, times.today);
        maxDays = props.weekdays.length;
        break;
      case "day":
      case "scheduler":
      case "agenda":
        end = moveRelativeDays(copyTimestamp(end), nextDay, maxDays > 1 ? maxDays - 1 : maxDays, props.weekdays);
        updateFormatted(end);
        break;
      case "month-interval":
      case "month-scheduler":
      case "month-agenda":
        start = getStartOfMonth(around);
        end = getEndOfMonth(around);
        updateFormatted(end);
        maxDays = daysInMonth(start.year, start.month);
        break;
      case "resource":
        maxDays = 1;
        end = moveRelativeDays(copyTimestamp(end), nextDay, maxDays, props.weekdays);
        updateFormatted(end);
        break;
    }
    return { start, end, maxDays };
  });
  return {
    renderValues
  };
}
const toCamelCase = (str) => str.replace(/(-\w)/g, (m) => m[1].toUpperCase());
let $listeners, $emit;
function getMouseEventHandlers(events, getEvent) {
  const on = {};
  for (const eventName in events) {
    const eventOptions = events[eventName];
    const eventKey = toCamelCase("on-" + eventName);
    if ($listeners === void 0) {
      console.warn("$listeners has not been set up");
      return;
    }
    if ($listeners.value[eventKey] === void 0)
      continue;
    const key = "on" + eventOptions.event.charAt(0).toUpperCase() + eventOptions.event.slice(1);
    const handler = (event) => {
      const mouseEvent = event;
      if (eventOptions.button === void 0 || mouseEvent.buttons > 0 && mouseEvent.button === eventOptions.button) {
        if (eventOptions.prevent) {
          mouseEvent.preventDefault();
        }
        if (eventOptions.stop) {
          mouseEvent.stopPropagation();
        }
        $emit(eventName, getEvent(mouseEvent, eventName));
      }
      return eventOptions.result;
    };
    if (key in on) {
      if (Array.isArray(on[key])) {
        on[key].push(handler);
      } else {
        on[key] = [on[key], handler];
      }
    } else {
      on[key] = handler;
    }
  }
  return on;
}
function getDefaultMouseEventHandlers(suffix, getEvent) {
  return getMouseEventHandlers(getMouseEventName(suffix), getEvent);
}
function getMouseEventName(suffix) {
  return {
    ["click" + suffix]: { event: "click" },
    ["contextmenu" + suffix]: { event: "contextmenu", prevent: true, result: false },
    ["mousedown" + suffix]: { event: "mousedown" },
    ["mousemove" + suffix]: { event: "mousemove" },
    ["mouseup" + suffix]: { event: "mouseup" },
    ["mouseenter" + suffix]: { event: "mouseenter" },
    ["mouseleave" + suffix]: { event: "mouseleave" },
    ["touchstart" + suffix]: { event: "touchstart" },
    ["touchmove" + suffix]: { event: "touchmove" },
    ["touchend" + suffix]: { event: "touchend" }
  };
}
function getRawMouseEvents(suffix) {
  return Object.keys(getMouseEventName(suffix));
}
function useMouse(emit, listeners) {
  $emit = emit;
  $listeners = listeners;
  return {
    getMouseEventHandlers,
    getDefaultMouseEventHandlers,
    getMouseEventName,
    getRawMouseEvents
  };
}
const useMoveEmits = [
  "moved"
];
function useMove(props, {
  parsedView,
  parsedValue,
  weekdaySkips,
  direction,
  maxDays,
  times,
  emittedValue,
  emit
}) {
  function move(amount = 1) {
    if (amount === 0) {
      emittedValue.value = today();
      return;
    }
    let moved = copyTimestamp(parsedValue.value);
    const forward = amount > 0;
    const mover = forward ? nextDay : prevDay;
    const limit = forward ? DAYS_IN_MONTH_MAX : DAY_MIN;
    let count = forward ? amount : -amount;
    direction.value = forward ? "next" : "prev";
    const dayCount = weekdaySkips.value.filter((x) => x !== 0).length;
    while (--count >= 0) {
      switch (parsedView.value) {
        case "month":
          moved.day = limit;
          mover(moved);
          updateWeekday(moved);
          while (weekdaySkips.value[moved.weekday] === 0) {
            moved = addToDate(moved, { day: forward === true ? 1 : -1 });
          }
          break;
        case "week":
        case "week-agenda":
        case "week-scheduler":
          relativeDays(moved, mover, dayCount, props.weekdays);
          break;
        case "day":
        case "scheduler":
        case "agenda":
          relativeDays(moved, mover, maxDays.value, props.weekdays);
          break;
        case "month-interval":
        case "month-agenda":
        case "month-scheduler":
          moved.day = limit;
          mover(moved);
          break;
        case "resource":
          relativeDays(moved, mover, maxDays.value, props.weekdays);
          break;
      }
    }
    updateWeekday(moved);
    updateFormatted(moved);
    updateDayOfYear(moved);
    updateRelative(moved, times.now);
    emittedValue.value = moved.date;
    emit("moved", moved);
  }
  return {
    move
  };
}
const listenerRE = /^on[A-Z]/;
function useEmitListeners(vm = getCurrentInstance()) {
  return {
    emitListeners: computed(() => {
      const acc = {};
      if (vm.vnode !== void 0 && vm.vnode !== null && vm.vnode.props !== null) {
        Object.keys(vm.vnode.props).forEach((key) => {
          if (listenerRE.test(key) === true) {
            acc[key] = true;
          }
        });
      }
      return acc;
    })
  };
}
function useFocusHelper() {
  return [
    h("span", {
      ariaHidden: "true",
      class: "q-calendar__focus-helper"
    })
  ];
}
function useButton(props, data, slotData) {
  const isFocusable = props.focusable === true && props.focusType.includes("date") === true;
  data.tabindex = isFocusable === true ? 0 : -1;
  return h("button", data, [
    slotData,
    isFocusable === true && useFocusHelper()
  ]);
}
const useCellWidthProps = {
  cellWidth: [Number, String]
};
function useCellWidth(props) {
  const isSticky = computed(() => props.cellWidth !== void 0);
  return {
    isSticky
  };
}
const useCheckChangeEmits = [
  "change"
];
function useCheckChange(emit, {
  days,
  lastStart,
  lastEnd
}) {
  function checkChange() {
    if (days.value && days.value.length > 0) {
      const start = days.value[0].date;
      const end = days.value[days.value.length - 1].date;
      if (lastStart.value === null || lastEnd.value === null || start !== lastStart.value || end !== lastEnd.value) {
        lastStart.value = start;
        lastEnd.value = end;
        emit("change", { start, end, days: days.value });
        return true;
      }
    }
    return false;
  }
  return {
    checkChange
  };
}
function useEvents() {
  function createEvent(name, { bubbles = false, cancelable = false } = {}) {
    try {
      return new CustomEvent(name, { bubbles, cancelable });
    } catch (e) {
      const evt = document.createEvent("Event");
      evt.initEvent(name, bubbles, cancelable);
      return evt;
    }
  }
  function isKeyCode2(evt, keyCodes) {
    return [].concat(keyCodes).includes(evt.keyCode);
  }
  return {
    createEvent,
    isKeyCode: isKeyCode2
  };
}
const { isKeyCode } = useEvents();
const useNavigationProps = {
  useNavigation: Boolean
};
function useKeyboard(props, {
  rootRef,
  focusRef,
  focusValue,
  datesRef,
  days,
  parsedView,
  parsedValue,
  emittedValue,
  weekdaySkips,
  direction,
  times
}) {
  let initialized = false;
  onBeforeUnmount(() => {
    endNavigation();
  });
  watch(() => props.useNavigation, (val) => {
    if (val === true) {
      startNavigation();
    } else {
      endNavigation();
    }
  });
  if (props.useNavigation === true) {
    startNavigation();
  }
  function startNavigation() {
    if (initialized === true)
      return;
    if (document) {
      initialized = true;
      document.addEventListener("keyup", onKeyUp);
      document.addEventListener("keydown", onKeyDown);
    }
  }
  function endNavigation() {
    if (document) {
      document.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("keydown", onKeyDown);
      initialized = false;
    }
  }
  function canNavigate(e) {
    if (e === void 0) {
      return false;
    }
    if (document) {
      const el = document.activeElement;
      if (el !== document.body && rootRef.value.contains(el) === true) {
        return true;
      }
    }
    return false;
  }
  function tryFocus() {
    let count = 0;
    const interval = setInterval(() => {
      if (datesRef.value[focusRef.value]) {
        datesRef.value[focusRef.value].focus();
        if (++count === 50 || document.activeElement === datesRef.value[focusRef.value]) {
          clearInterval(interval);
        }
      } else {
        clearInterval(interval);
      }
    }, 250);
  }
  function onKeyDown(e) {
    if (canNavigate(e) && isKeyCode(e, [33, 34, 35, 36, 37, 38, 39, 40])) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  function onKeyUp(e) {
    if (canNavigate(e) && isKeyCode(e, [33, 34, 35, 36, 37, 38, 39, 40])) {
      switch (e.keyCode) {
        case 33:
          onPgUp();
          break;
        case 34:
          onPgDown();
          break;
        case 35:
          onEnd();
          break;
        case 36:
          onHome();
          break;
        case 37:
          onLeftArrow();
          break;
        case 38:
          onUpArrow();
          break;
        case 39:
          onRightArrow();
          break;
        case 40:
          onDownArrow();
          break;
      }
    }
  }
  function onUpArrow(e) {
    let tm = copyTimestamp(focusValue.value);
    if (parsedView.value === "month") {
      tm = addToDate(tm, { day: -7 });
      if (focusValue.value.month !== tm.month) {
        direction.value = "prev";
        emittedValue.value = tm.date;
        return;
      }
    } else if (parsedView.value === "day" || parsedView.value === "week" || parsedView.value === "month-interval") {
      tm = addToDate(tm, { minute: parseInt(props.intervalMinutes) });
    }
    direction.value = "prev";
    focusRef.value = tm.date;
  }
  function onDownArrow(e) {
    let tm = copyTimestamp(focusValue.value);
    if (parsedView.value === "month") {
      tm = addToDate(tm, { day: 7 });
      if (focusValue.value.month !== tm.month) {
        direction.value = "next";
        emittedValue.value = tm.date;
        return;
      }
    } else if (parsedView.value === "day" || parsedView.value === "week" || parsedView.value === "month-interval") {
      tm = addToDate(tm, { minute: parseInt(props.intervalMinutes) });
    }
    direction.value = "next";
    focusRef.value = tm.date;
  }
  function onLeftArrow(e) {
    let tm = copyTimestamp(focusValue.value);
    direction.value = "prev";
    do {
      tm = addToDate(tm, { day: -1 });
    } while (weekdaySkips.value[tm.weekday] === 0);
    if (parsedView.value === "month" || parsedView.value === "month-interval") {
      if (focusValue.value.month !== tm.month) {
        emittedValue.value = tm.date;
        return;
      }
    } else if (parsedView.value === "week") {
      if (tm.weekday > focusValue.value.weekday) {
        emittedValue.value = tm.date;
        return;
      }
    } else if (parsedView.value === "day") {
      emittedValue.value = tm.date;
      return;
    }
    focusRef.value = tm.date;
  }
  function onRightArrow(e) {
    let tm = copyTimestamp(focusValue.value);
    direction.value = "next";
    do {
      tm = addToDate(tm, { day: 1 });
    } while (weekdaySkips.value[tm.weekday] === 0);
    if (parsedView.value === "month" || parsedView.value === "month-interval") {
      if (focusValue.value.month !== tm.month) {
        emittedValue.value = tm.date;
        return;
      }
    } else if (parsedView.value === "week") {
      if (tm.weekday < focusValue.value.weekday) {
        emittedValue.value = tm.date;
        return;
      }
    } else if (parsedView.value === "day") {
      emittedValue.value = tm.date;
      return;
    }
    focusRef.value = tm.date;
  }
  function onPgUp(e) {
    let tm = copyTimestamp(focusValue.value);
    if (parsedView.value === "month" || parsedView.value === "month-interval") {
      tm = addToDate(tm, { month: -1 });
      const next = tm.day <= 15 ? 1 : -1;
      while (weekdaySkips.value[tm.weekday] === 0) {
        tm = addToDate(tm, { day: next });
      }
    } else if (parsedView.value === "day") {
      tm = addToDate(tm, { day: -1 });
    } else if (parsedView.value === "week") {
      tm = addToDate(tm, { day: -7 });
    }
    direction.value = "prev";
    focusRef.value = tm.date;
  }
  function onPgDown(e) {
    let tm = copyTimestamp(focusValue.value);
    if (parsedView.value === "month" || parsedView.value === "month-interval") {
      tm = addToDate(tm, { month: 1 });
      const next = tm.day <= 15 ? 1 : -1;
      while (weekdaySkips.value[tm.weekday] === 0) {
        tm = addToDate(tm, { day: next });
      }
    } else if (parsedView.value === "day") {
      tm = addToDate(tm, { day: 1 });
    } else if (parsedView.value === "week") {
      tm = addToDate(tm, { day: 7 });
    }
    direction.value = "next";
    focusRef.value = tm.date;
  }
  function onHome(e) {
    let tm = copyTimestamp(focusValue.value);
    if (parsedView.value === "month" || parsedView.value === "month-interval") {
      tm = getStartOfMonth(tm);
    } else if (parsedView.value === "week") {
      tm = getStartOfWeek(tm, props.weekdays, times.today);
    }
    while (weekdaySkips.value[tm.weekday] === 0) {
      tm = addToDate(tm, { day: -1 });
    }
    focusRef.value = tm.date;
  }
  function onEnd(e) {
    let tm = copyTimestamp(focusValue.value);
    if (parsedView.value === "month" || parsedView.value === "month-interval") {
      tm = getEndOfMonth(tm);
    } else if (parsedView.value === "week") {
      tm = getEndOfWeek(tm, props.weekdays, times.today);
    }
    while (weekdaySkips.value[tm.weekday] === 0) {
      tm = addToDate(tm, { day: -1 });
    }
    focusRef.value = tm.date;
  }
  return {
    startNavigation,
    endNavigation,
    tryFocus
  };
}
var QCalendarAgenda = defineComponent({
  name: "QCalendarAgenda",
  directives: [ResizeObserver$1],
  props: {
    ...useCommonProps,
    ...useAgendaProps,
    ...useColumnProps,
    ...useMaxDaysProps,
    ...useTimesProps,
    ...useCellWidthProps,
    ...useNavigationProps
  },
  emits: [
    "update:model-value",
    ...useCheckChangeEmits,
    ...useMoveEmits,
    ...getRawMouseEvents("-date"),
    ...getRawMouseEvents("-head-day"),
    ...getRawMouseEvents("-time")
  ],
  setup(props, { slots, emit, expose }) {
    const scrollArea = ref(null), pane = ref(null), headerColumnRef = ref(null), focusRef = ref(null), focusValue = ref(null), datesRef = ref({}), headDayEventsParentRef = ref({}), headDayEventsChildRef = ref({}), direction = ref("next"), startDate = ref(today()), endDate = ref("0000-00-00"), maxDaysRendered = ref(0), emittedValue = ref(props.modelValue), size = reactive({ width: 0, height: 0 }), dragOverHeadDayRef = ref(false), lastStart = ref(null), lastEnd = ref(null);
    watch(() => props.view, () => {
      maxDaysRendered.value = 0;
    });
    const parsedView = computed(() => {
      if (props.view === "month") {
        return "month-interval";
      }
      return props.view;
    });
    const vm = getCurrentInstance();
    if (vm === null) {
      throw new Error("current instance is null");
    }
    const { emitListeners } = useEmitListeners(vm);
    const {
      isSticky
    } = useCellWidth(props);
    watch(isSticky, (val) => {
    });
    const {
      times,
      setCurrent,
      updateCurrent
    } = useTimes(props);
    updateCurrent();
    setCurrent();
    const {
      weekdaySkips,
      parsedStart,
      parsedEnd,
      dayFormatter,
      weekdayFormatter,
      ariaDateFormatter,
      dayStyleDefault,
      getRelativeClasses
    } = useCommon(props, { startDate, endDate, times });
    const parsedValue = computed(() => {
      return parseTimestamp(props.modelValue, times.now) || parsedStart.value || times.today;
    });
    focusValue.value = parsedValue.value;
    focusRef.value = parsedValue.value.date;
    const { renderValues } = useRenderValues(props, {
      parsedView,
      parsedValue,
      times
    });
    const {
      rootRef,
      scrollWidth,
      __initCalendar,
      __renderCalendar
    } = useCalendar(props, __renderAgenda, {
      scrollArea,
      pane
    });
    const {
      days,
      parsedCellWidth,
      getScopeForSlot
    } = useInterval(props, {
      weekdaySkips,
      times,
      scrollArea,
      parsedStart,
      parsedEnd,
      maxDays: maxDaysRendered,
      size,
      headerColumnRef
    });
    const { move } = useMove(props, {
      parsedView,
      parsedValue,
      weekdaySkips,
      direction,
      maxDays: maxDaysRendered,
      times,
      emittedValue,
      emit
    });
    const {
      getDefaultMouseEventHandlers: getDefaultMouseEventHandlers2
    } = useMouse(emit, emitListeners);
    const {
      checkChange
    } = useCheckChange(emit, { days, lastStart, lastEnd });
    const {
      isKeyCode: isKeyCode2
    } = useEvents();
    const { tryFocus } = useKeyboard(props, {
      rootRef,
      focusRef,
      focusValue,
      datesRef,
      days,
      parsedView,
      parsedValue,
      emittedValue,
      weekdaySkips,
      direction,
      times
    });
    const parsedColumnCount = computed(() => {
      return days.value.length + (isLeftColumnOptionsValid.value === true ? props.leftColumnOptions.length : 0) + (isRightColumnOptionsValid.value === true ? props.rightColumnOptions.length : 0) + days.value.length === 1 && parseInt(props.columnCount, 10) > 0 ? parseInt(props.columnCount, 10) : 0;
    });
    const isLeftColumnOptionsValid = computed(() => {
      return props.leftColumnOptions !== void 0 && Array.isArray(props.leftColumnOptions);
    });
    const isRightColumnOptionsValid = computed(() => {
      return props.rightColumnOptions !== void 0 && Array.isArray(props.rightColumnOptions);
    });
    const computedWidth = computed(() => {
      if (rootRef.value) {
        const width = size.width || rootRef.value.getBoundingClientRect().width;
        if (width && parsedColumnCount.value) {
          return (width - scrollWidth.value) / parsedColumnCount.value + "px";
        }
      }
      return 100 / parsedColumnCount.value + "%";
    });
    watch([days], checkChange, { deep: true, immediate: true });
    watch(() => props.modelValue, (val, oldVal) => {
      if (emittedValue.value !== val) {
        if (props.animated === true) {
          const v1 = getDayIdentifier(parsed(val));
          const v2 = getDayIdentifier(parsed(oldVal));
          direction.value = v1 >= v2 ? "next" : "prev";
        }
        emittedValue.value = val;
      }
      focusRef.value = val;
    });
    watch(emittedValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) {
          const v1 = getDayIdentifier(parsed(val));
          const v2 = getDayIdentifier(parsed(oldVal));
          direction.value = v1 >= v2 ? "next" : "prev";
        }
        emit("update:model-value", val);
      }
    });
    watch(focusRef, (val) => {
      if (val) {
        focusValue.value = parseTimestamp(val);
      }
    });
    watch(focusValue, (val) => {
      if (datesRef.value[focusRef.value]) {
        datesRef.value[focusRef.value].focus();
      } else {
        tryFocus();
      }
    });
    watch(() => props.maxDays, (val) => {
      maxDaysRendered.value = val;
    });
    onBeforeUpdate(() => {
      datesRef.value = {};
    });
    onMounted(() => {
      __initCalendar();
    });
    function moveToToday() {
      emittedValue.value = today();
    }
    function next(amount = 1) {
      move(amount);
    }
    function prev(amount = 1) {
      move(-amount);
    }
    function __onResize({ width, height }) {
      size.width = width;
      size.height = height;
    }
    function __isActiveDate(day) {
      return day.date === emittedValue.value;
    }
    function __renderHeadColumn(column, index) {
      const slot = slots["head-column"];
      const scope = { column, index, days: days.value };
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const isFocusable = props.focusable === true && props.focusType.includes("weekday");
      const id = props.columnOptionsId !== void 0 ? column[props.columnOptionsId] : void 0;
      const style = {
        maxWidth: width,
        width
      };
      return h("div", {
        key: id,
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-agenda__head--day": true,
          "q-column-day": true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "head-column", scope) === true ? dragOverHeadDayRef.value = id : dragOverHeadDayRef.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "head-column", scope) === true ? dragOverHeadDayRef.value = id : dragOverHeadDayRef.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "head-column", scope) === true ? dragOverHeadDayRef.value = id : dragOverHeadDayRef.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "head-column", scope) === true ? dragOverHeadDayRef.value = id : dragOverHeadDayRef.value = "";
          }
        },
        ...getDefaultMouseEventHandlers2("-head-column", (event, eventName) => {
          return { scope: { column, index }, event };
        })
      }, [
        props.noDefaultHeaderText !== true && __renderHeadColumnLabel(column),
        slot && slot(scope),
        useFocusHelper()
      ]);
    }
    function __renderHeadColumnLabel(column) {
      const slot = slots["head-column-label"];
      const scope = { column };
      const label = props.columnOptionsLabel !== void 0 ? column[props.columnOptionsLabel] : column.label;
      const vNode = h("div", {
        class: {
          "q-calendar-agenda__head--weekday": true,
          ["q-calendar__" + props.weekdayAlign]: true,
          ellipsis: true
        },
        style: {
          alignSelf: "center"
        }
      }, [
        slot && slot({ scope }),
        !slot && h("span", {
          class: "ellipsis"
        }, label)
      ]);
      return props.dateHeader === "stacked" ? vNode : h("div", {
        class: "q-calendar__header--inline",
        style: {
          height: "100%"
        }
      }, [
        vNode
      ]);
    }
    function __renderHead() {
      return h("div", {
        roll: "presentation",
        class: {
          "q-calendar-agenda__head": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style: {
          marginRight: scrollWidth.value + "px"
        }
      }, [
        __renderHeadDaysColumn()
      ]);
    }
    function __renderHeadDaysColumn() {
      return h("div", {
        ref: headerColumnRef,
        class: {
          "q-calendar-agenda__head--days__column": true
        }
      }, [
        __renderHeadDaysRow(),
        __renderHeadDaysEventsRow()
      ]);
    }
    function __renderHeadDaysRow() {
      return h("div", {
        class: {
          "q-calendar-agenda__head--days__weekdays": true
        }
      }, [
        ...__renderHeadDays()
      ]);
    }
    function __renderHeadDaysEventsRow() {
      const slot = slots["head-days-events"];
      nextTick(() => {
        if (headDayEventsChildRef.value && props.columnCount === 0 && window) {
          try {
            const styles = window.getComputedStyle(headDayEventsChildRef.value);
            headDayEventsParentRef.value.parentElement.style.height = styles.height;
            headDayEventsParentRef.value.style.height = styles.height;
          } catch (e) {
          }
        }
      });
      return h("div", {
        class: {
          "q-calendar-agenda__head--days__event": true
        }
      }, [
        slot && h("div", {
          ref: headDayEventsParentRef,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            overflow: "hidden",
            zIndex: 1
          }
        }, [
          slot({ scope: { days: days.value, ref: headDayEventsChildRef } })
        ]),
        ...__renderHeadDaysEvents()
      ]);
    }
    function __renderHeadDays() {
      if (days.value.length === 1 && parseInt(props.columnCount, 10) > 0) {
        return [
          isLeftColumnOptionsValid.value === true && props.leftColumnOptions.map((column, index) => __renderHeadColumn(column, index)),
          Array.apply(null, new Array(parseInt(props.columnCount, 10))).map((_, i) => i + parseInt(props.columnIndexStart, 10)).map((columnIndex) => __renderHeadDay(days.value[0], columnIndex)),
          isRightColumnOptionsValid.value === true && props.rightColumnOptions.map((column, index) => __renderHeadColumn(column, index))
        ];
      } else {
        return [
          isLeftColumnOptionsValid.value === true && props.leftColumnOptions.map((column, index) => __renderHeadColumn(column, index)),
          days.value.map((day) => __renderHeadDay(day)),
          isRightColumnOptionsValid.value === true && props.rightColumnOptions.map((column, index) => __renderHeadColumn(column, index))
        ];
      }
    }
    function __renderHeadDaysEvents() {
      if (days.value.length === 1 && parseInt(props.columnCount, 10) > 0) {
        return [
          Array.apply(null, new Array(parseInt(props.columnCount, 10))).map((_, i) => i + parseInt(props.columnIndexStart, 10)).map((columnIndex) => __renderHeadDayEvent(days.value[0], columnIndex))
        ];
      } else {
        return days.value.map((day) => __renderHeadDayEvent(day));
      }
    }
    function __renderHeadDay(day, columnIndex) {
      const headDaySlot = slots["head-day"];
      const headDateSlot = slots["head-date"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = getScopeForSlot(day, columnIndex);
      scope.activeDate = activeDate;
      scope.droppable = dragOverHeadDayRef.value === day.date;
      scope.disabled = props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false;
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const styler = props.weekdayStyle || dayStyleDefault;
      const style = {
        width,
        maxWidth: width,
        ...styler({ scope })
      };
      if (isSticky.value === true) {
        style.minWidth = width;
      }
      const weekdayClass = typeof props.weekdayClass === "function" ? props.weekdayClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("weekday");
      const data = {
        key: day.date + (columnIndex !== void 0 ? "-" + columnIndex : ""),
        ref: (el) => {
          datesRef.value[day.date] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-agenda__head--day": true,
          ...weekdayClass,
          ...getRelativeClasses(day),
          "q-active-date": activeDate,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onFocus: (e) => {
          if (isFocusable === true) {
            focusRef.value = day.date;
          }
        },
        ...getDefaultMouseEventHandlers2("-head-day", (event) => {
          return { scope, event };
        })
      };
      return h("div", data, [
        headDaySlot !== void 0 && headDaySlot({ scope }),
        headDaySlot === void 0 && __renderDateHeader(day),
        headDaySlot === void 0 && headDateSlot && headDateSlot({ scope }),
        useFocusHelper()
      ]);
    }
    function __renderDateHeader(day) {
      if (props.dateHeader === "stacked") {
        return [
          props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
          props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
        ];
      } else if (props.dateHeader === "inline") {
        if (props.weekdayAlign === "left" && props.dateAlign === "right") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
          ]);
        } else if (props.weekdayAlign === "right" && props.dateAlign === "left") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
          ]);
        } else {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
          ]);
        }
      } else if (props.dateHeader === "inverted") {
        if (props.weekdayAlign === "left" && props.dateAlign === "right") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day),
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day)
          ]);
        } else if (props.weekdayAlign === "right" && props.dateAlign === "left") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day),
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day)
          ]);
        } else {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day),
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day)
          ]);
        }
      }
    }
    function __renderHeadDayEvent(day, columnIndex) {
      const headDayEventSlot = slots["head-day-event"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = getScopeForSlot(day, columnIndex);
      scope.activeDate = activeDate;
      scope.disabled = props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false;
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const style = {
        width,
        maxWidth: width
      };
      if (isSticky.value === true) {
        style.minWidth = width;
      }
      return h("div", {
        key: "event-" + day.date + (columnIndex !== void 0 ? "-" + columnIndex : ""),
        class: {
          "q-calendar-agenda__head--day__event": true,
          ...getRelativeClasses(day),
          "q-active-date": activeDate
        },
        style
      }, [
        headDayEventSlot && headDayEventSlot({ scope })
      ]);
    }
    function __renderHeadWeekday(day) {
      const slot = slots["head-weekday-label"];
      const scope = getScopeForSlot(day);
      scope.shortWeekdayLabel = props.shortWeekdayLabel;
      const data = {
        class: {
          "q-calendar-agenda__head--weekday": true,
          ["q-calendar__" + props.weekdayAlign]: true,
          "q-calendar__ellipsis": true
        }
      };
      return h("div", data, slot && slot({ scope }) || __renderHeadWeekdayLabel(day, props.shortWeekdayLabel));
    }
    function __renderHeadWeekdayLabel(day, shortWeekdayLabel) {
      const weekdayLabel = weekdayFormatter.value(day, shortWeekdayLabel || props.weekdayBreakpoints[0] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[0]);
      return h("span", {
        class: "q-calendar__ellipsis"
      }, props.weekdayBreakpoints[1] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[1] ? minCharWidth(weekdayLabel, props.minWeekdayLabel) : weekdayLabel);
    }
    function __renderHeadDayDate(day) {
      const data = {
        class: {
          "q-calendar-agenda__head--date": true,
          ["q-calendar__" + props.dateAlign]: true
        }
      };
      return h("div", data, __renderHeadDayBtn(day));
    }
    function __renderHeadDayBtn(day) {
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const dayLabel = dayFormatter.value(day, false);
      const headDayLabelSlot = slots["head-day-label"];
      const headDayButtonSlot = slots["head-day-button"];
      const scope = {
        dayLabel,
        timestamp: day,
        activeDate,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false
      };
      const data = {
        class: {
          "q-calendar-agenda__head--day__label": true,
          "q-calendar__button": true,
          "q-calendar__button--round": props.dateType === "round",
          "q-calendar__button--rounded": props.dateType === "rounded",
          "q-calendar__button--bordered": day.current === true,
          "q-calendar__focusable": true
        },
        disabled: day.disabled,
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            emittedValue.value = day.date;
            if (emitListeners.value.onClickDate !== void 0) {
              emit("click-date", { scope });
            }
          }
        },
        ...getDefaultMouseEventHandlers2("-date", (event, eventName) => {
          if (eventName === "click-date" || eventName === "contextmenu-date") {
            emittedValue.value = day.date;
            if (eventName === "click-date") {
              event.preventDefault();
            }
          }
          return { scope, event };
        })
      };
      if (props.noAria !== true) {
        data.ariaLabel = ariaDateFormatter.value(day);
      }
      return headDayButtonSlot ? headDayButtonSlot({ scope }) : useButton(props, data, headDayLabelSlot ? headDayLabelSlot({ scope }) : dayLabel);
    }
    function __renderBody() {
      return h("div", {
        class: "q-calendar-agenda__body"
      }, [
        __renderScrollArea()
      ]);
    }
    function __renderScrollArea() {
      if (isSticky.value === true) {
        return h("div", {
          ref: scrollArea,
          class: {
            "q-calendar-agenda__scroll-area": true,
            "q-calendar__scroll": true
          }
        }, [
          __renderDayContainer()
        ]);
      } else if (props.noScroll === true) {
        return __renderPane();
      } else {
        return h("div", {
          ref: scrollArea,
          class: {
            "q-calendar-agenda__scroll-area": true,
            "q-calendar__scroll": true
          }
        }, [
          __renderPane()
        ]);
      }
    }
    function __renderPane() {
      return h("div", {
        ref: pane,
        class: "q-calendar-agenda__pane"
      }, [
        __renderDayContainer()
      ]);
    }
    function __renderDayContainer() {
      const slot = slots["day-container"];
      return h("div", {
        class: "q-calendar-agenda__day-container"
      }, [
        isSticky.value === true && props.noHeader !== true && __renderHead(),
        h("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            height: "100%"
          }
        }, [
          ...__renderDays()
        ]),
        slot && slot({ scope: { days: days.value } })
      ]);
    }
    function __renderDays() {
      if (days.value.length === 1 && parseInt(props.columnCount, 10) > 0) {
        return [
          isLeftColumnOptionsValid.value === true && props.leftColumnOptions.map((column, index) => __renderColumn(column, index)),
          Array.apply(null, new Array(parseInt(props.columnCount, 10))).map((_, i) => i + parseInt(props.columnIndexStart, 10)).map((i) => __renderDay(days.value[0], 0, i)),
          isRightColumnOptionsValid.value === true && props.rightColumnOptions.map((column, index) => __renderColumn(column, index))
        ];
      } else {
        return [
          isLeftColumnOptionsValid.value === true && props.leftColumnOptions.map((column, index) => __renderColumn(column, index)),
          days.value.map((day, index) => __renderDay(day)),
          isRightColumnOptionsValid.value === true && props.rightColumnOptions.map((column, index) => __renderColumn(column, index))
        ];
      }
    }
    function __renderColumn(column, index) {
      const slot = slots.column;
      const scope = { column, days: days.value, index };
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const isFocusable = props.focusable === true && props.focusType.includes("day");
      const id = props.columnOptionsId !== void 0 ? column[props.columnOptionsId] : void 0;
      return h("div", {
        key: id,
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-agenda__day": true,
          "q-column-day": true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style: {
          maxWidth: width,
          width
        },
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "column", scope) === true ? dragOverHeadDayRef.value = id : dragOverHeadDayRef.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "column", scope) === true ? dragOverHeadDayRef.value = id : dragOverHeadDayRef.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "column", scope) === true ? dragOverHeadDayRef.value = id : dragOverHeadDayRef.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "column", scope) === true ? dragOverHeadDayRef.value = id : dragOverHeadDayRef.value = "";
          }
        },
        ...getDefaultMouseEventHandlers2("-column", (event, eventName) => {
          return { scope, event };
        })
      }, [
        slot && slot({ scope })
      ]);
    }
    function __renderDay(day, dayIndex, columnIndex) {
      const slot = slots.day;
      const scope = getScopeForSlot(day, columnIndex);
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const style = {
        width,
        maxWidth: width
      };
      if (isSticky.value === true) {
        style.minWidth = width;
      }
      style.height = parseInt(props.dayHeight, 10) > 0 ? convertToUnit(parseInt(props.dayHeight, 10)) : "auto";
      if (parseInt(props.dayMinHeight, 10) > 0) {
        style.minHeight = convertToUnit(parseInt(props.dayMinHeight, 10));
      }
      return h("div", {
        key: day.date + (columnIndex !== void 0 ? ":" + columnIndex : ""),
        class: {
          "q-calendar-agenda__day": true,
          ...getRelativeClasses(day)
        },
        style
      }, [
        slot && slot({ scope })
      ]);
    }
    function __renderAgenda() {
      const { start, end, maxDays } = renderValues.value;
      if (startDate.value !== start.date || endDate.value !== end.date || maxDaysRendered.value !== maxDays) {
        startDate.value = start.date;
        endDate.value = end.date;
        maxDaysRendered.value = maxDays;
      }
      const hasWidth = size.width > 0;
      const agenda = withDirectives(h("div", {
        class: "q-calendar-agenda",
        key: startDate.value
      }, [
        hasWidth === true && isSticky.value !== true && props.noHeader !== true && __renderHead(),
        hasWidth === true && __renderBody()
      ]), [[
        ResizeObserver$1,
        __onResize
      ]]);
      if (props.animated === true) {
        const transition = "q-calendar--" + (direction.value === "prev" ? props.transitionPrev : props.transitionNext);
        return h(Transition, {
          name: transition,
          appear: true
        }, () => agenda);
      }
      return agenda;
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent
    });
    return () => __renderCalendar();
  }
});
var QCalendarDay = defineComponent({
  name: "QCalendarDay",
  directives: [ResizeObserver$1],
  props: {
    ...useCommonProps,
    ...useIntervalProps,
    ...useColumnProps,
    ...useMaxDaysProps,
    ...useTimesProps,
    ...useCellWidthProps,
    ...useNavigationProps
  },
  emits: [
    "update:model-value",
    ...useCheckChangeEmits,
    ...useMoveEmits,
    ...getRawMouseEvents("-date"),
    ...getRawMouseEvents("-interval"),
    ...getRawMouseEvents("-head-intervals"),
    ...getRawMouseEvents("-head-day"),
    ...getRawMouseEvents("-time")
  ],
  setup(props, { slots, emit, expose }) {
    const scrollArea = ref(null), pane = ref(null), headerColumnRef = ref(null), focusRef = ref(null), focusValue = ref(null), datesRef = ref({}), headDayEventsParentRef = ref({}), headDayEventsChildRef = ref({}), direction = ref("next"), startDate = ref(props.modelValue || today()), endDate = ref("0000-00-00"), maxDaysRendered = ref(0), emittedValue = ref(props.modelValue), size = reactive({ width: 0, height: 0 }), dragOverHeadDayRef = ref(false), dragOverInterval = ref(false), lastStart = ref(null), lastEnd = ref(null);
    watch(() => props.view, () => {
      maxDaysRendered.value = 0;
    });
    const parsedView = computed(() => {
      if (props.view === "month") {
        return "month-interval";
      }
      return props.view;
    });
    const vm = getCurrentInstance();
    if (vm === null) {
      throw new Error("current instance is null");
    }
    const { emitListeners } = useEmitListeners(vm);
    const {
      isSticky
    } = useCellWidth(props);
    const {
      times,
      setCurrent,
      updateCurrent
    } = useTimes(props);
    updateCurrent();
    setCurrent();
    const {
      weekdaySkips,
      parsedStart,
      parsedEnd,
      dayFormatter,
      weekdayFormatter,
      ariaDateFormatter,
      dayStyleDefault,
      getRelativeClasses
    } = useCommon(props, { startDate, endDate, times });
    const parsedValue = computed(() => {
      return parseTimestamp(props.modelValue, times.now) || parsedStart.value || times.today;
    });
    focusValue.value = parsedValue.value;
    focusRef.value = parsedValue.value.date;
    const { renderValues } = useRenderValues(props, {
      parsedView,
      parsedValue,
      times
    });
    const {
      rootRef,
      scrollWidth,
      __initCalendar,
      __renderCalendar
    } = useCalendar(props, __renderDaily, {
      scrollArea,
      pane
    });
    const {
      days,
      intervals,
      intervalFormatter,
      ariaDateTimeFormatter,
      parsedCellWidth,
      getIntervalClasses,
      showIntervalLabelDefault,
      styleDefault,
      getTimestampAtEventInterval,
      getTimestampAtEvent,
      getScopeForSlot,
      scrollToTime,
      heightToMinutes,
      timeDurationHeight,
      timeStartPos
    } = useInterval(props, {
      weekdaySkips,
      times,
      scrollArea,
      parsedStart,
      parsedEnd,
      maxDays: maxDaysRendered,
      size,
      headerColumnRef
    });
    const { move } = useMove(props, {
      parsedView,
      parsedValue,
      weekdaySkips,
      direction,
      maxDays: maxDaysRendered,
      times,
      emittedValue,
      emit
    });
    const {
      getDefaultMouseEventHandlers: getDefaultMouseEventHandlers2
    } = useMouse(emit, emitListeners);
    const {
      checkChange
    } = useCheckChange(emit, { days, lastStart, lastEnd });
    const {
      isKeyCode: isKeyCode2
    } = useEvents();
    const { tryFocus } = useKeyboard(props, {
      rootRef,
      focusRef,
      focusValue,
      datesRef,
      days,
      parsedView,
      parsedValue,
      emittedValue,
      weekdaySkips,
      direction,
      times
    });
    const parsedColumnCount = computed(() => {
      if (parsedView.value === "day" && parseInt(props.columnCount, 10) > 1) {
        return parseInt(props.columnCount, 10);
      } else if (parsedView.value === "day" && props.maxDays && props.maxDays > 1) {
        return props.maxDays;
      }
      return days.value.length;
    });
    const intervalsWidth = computed(() => {
      if (rootRef.value) {
        return parseInt(getComputedStyle(rootRef.value).getPropertyValue("--calendar-intervals-width"), 10);
      }
      return 0;
    });
    const computedWidth = computed(() => {
      if (rootRef.value) {
        const width = size.width || rootRef.value.getBoundingClientRect().width;
        if (width && intervalsWidth.value && parsedColumnCount.value) {
          return (width - scrollWidth.value - intervalsWidth.value) / parsedColumnCount.value + "px";
        }
      }
      return 100 / parsedColumnCount.value + "%";
    });
    watch([days], checkChange, { deep: true, immediate: true });
    watch(() => props.modelValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) {
          const v1 = getDayIdentifier(parsed(val));
          const v2 = getDayIdentifier(parsed(oldVal));
          direction.value = v1 >= v2 ? "next" : "prev";
        }
        emittedValue.value = val;
      }
      focusRef.value = val;
    });
    watch(emittedValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) {
          const v1 = getDayIdentifier(parsed(val));
          const v2 = getDayIdentifier(parsed(oldVal));
          direction.value = v1 >= v2 ? "next" : "prev";
        }
        emit("update:model-value", val);
      }
    });
    watch(focusRef, (val) => {
      if (val) {
        focusValue.value = parseTimestamp(val);
      }
    });
    watch(focusValue, (val) => {
      if (datesRef.value[focusRef.value]) {
        datesRef.value[focusRef.value].focus();
      } else {
        tryFocus();
      }
    });
    watch(() => props.maxDays, (val) => {
      maxDaysRendered.value = val;
    });
    onBeforeUpdate(() => {
      datesRef.value = {};
      headDayEventsParentRef.value = {};
      headDayEventsChildRef.value = {};
    });
    onMounted(() => {
      __initCalendar();
    });
    function moveToToday() {
      emittedValue.value = today();
    }
    function next(amount = 1) {
      move(amount);
    }
    function prev(amount = 1) {
      move(-amount);
    }
    function __onResize({ width, height }) {
      size.width = width;
      size.height = height;
    }
    function __isActiveDate(day) {
      return day.date === emittedValue.value;
    }
    function __renderHead() {
      return h("div", {
        roll: "presentation",
        class: {
          "q-calendar-day__head": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style: {
          marginRight: scrollWidth.value + "px"
        }
      }, [
        __renderHeadIntervals(),
        __renderHeadDaysColumn()
      ]);
    }
    function __renderHeadIntervals() {
      const slot = slots["head-intervals"];
      const scope = {
        timestamps: days.value,
        days: days.value,
        date: props.modelValue
      };
      return h("div", {
        class: {
          "q-calendar-day__head--intervals": true,
          "q-calendar__sticky": isSticky.value === true
        },
        ...getDefaultMouseEventHandlers2("-head-intervals", (event) => {
          return { scope, event };
        })
      }, [
        slot && slot({ scope })
      ]);
    }
    function __renderHeadDaysColumn() {
      return h("div", {
        ref: headerColumnRef,
        class: {
          "q-calendar-day__head--days__column": true
        }
      }, [
        __renderHeadDaysRow(),
        __renderHeadDaysEventsRow()
      ]);
    }
    function __renderHeadDaysRow() {
      return h("div", {
        class: {
          "q-calendar-day__head--days__weekdays": true
        }
      }, [
        ...__renderHeadDays()
      ]);
    }
    function __renderHeadDaysEventsRow() {
      const slot = slots["head-days-events"];
      nextTick(() => {
        if (headDayEventsChildRef.value && parseInt(props.columnCount, 10) === 0 && window) {
          try {
            const styles = window.getComputedStyle(headDayEventsChildRef.value);
            headDayEventsParentRef.value.parentElement.style.height = styles.height;
            headDayEventsParentRef.value.style.height = styles.height;
          } catch (e) {
          }
        }
      });
      return h("div", {
        class: {
          "q-calendar-day__head--days__event": true
        }
      }, [
        slot && h("div", {
          ref: headDayEventsParentRef,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            overflow: "hidden",
            zIndex: 1
          }
        }, [
          slot({ scope: { days: days.value, ref: headDayEventsChildRef } })
        ]),
        ...__renderHeadDaysEvents()
      ]);
    }
    function __renderHeadDays() {
      if (days.value.length === 1 && parseInt(props.columnCount, 10) > 0) {
        return Array.apply(null, new Array(parseInt(props.columnCount, 10))).map((_, i) => i + parseInt(props.columnIndexStart, 10)).map((columnIndex) => __renderHeadDay(days.value[0], columnIndex));
      } else {
        return days.value.map((day) => __renderHeadDay(day));
      }
    }
    function __renderHeadDaysEvents() {
      if (days.value.length === 1 && parseInt(props.columnCount, 10) > 0) {
        return Array.apply(null, new Array(parseInt(props.columnCount, 10))).map((_, i) => i + parseInt(props.columnIndexStart, 10)).map((columnIndex) => __renderHeadDayEvent(days.value[0], columnIndex));
      } else {
        return days.value.map((day) => __renderHeadDayEvent(day));
      }
    }
    function __renderHeadDay(day, columnIndex) {
      const headDaySlot = slots["head-day"];
      const headDateSlot = slots["head-date"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = getScopeForSlot(day, columnIndex);
      scope.activeDate = activeDate;
      scope.droppable = dragOverHeadDayRef.value === day.date;
      scope.disabled = props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false;
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const styler = props.weekdayStyle || dayStyleDefault;
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...styler({ scope })
      };
      if (isSticky.value === true) {
        style.minWidth = width;
      }
      const weekdayClass = typeof props.weekdayClass === "function" ? props.weekdayClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("weekday");
      const key = day.date + (columnIndex !== void 0 ? "-" + columnIndex : "");
      const data = {
        key,
        ref: (el) => {
          datesRef.value[key] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-day__head--day": true,
          ...weekdayClass,
          ...getRelativeClasses(day),
          "q-active-date": activeDate,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        onFocus: (e) => {
          if (isFocusable === true) {
            focusRef.value = key;
          }
        },
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            emittedValue.value = day.date;
          }
        },
        ...getDefaultMouseEventHandlers2("-head-day", (event) => {
          return { scope, event };
        }),
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        }
      };
      return h("div", data, [
        headDaySlot !== void 0 && headDaySlot({ scope }),
        headDaySlot === void 0 && __renderColumnHeaderBefore(day, columnIndex),
        headDaySlot === void 0 && __renderDateHeader(day),
        headDaySlot === void 0 && headDateSlot && headDateSlot({ scope }),
        headDaySlot === void 0 && __renderColumnHeaderAfter(day, columnIndex),
        useFocusHelper()
      ]);
    }
    function __renderDateHeader(day) {
      if (props.dateHeader === "stacked") {
        return [
          props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
          props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
        ];
      } else if (props.dateHeader === "inline") {
        if (props.weekdayAlign === "left" && props.dateAlign === "right") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
          ]);
        } else if (props.weekdayAlign === "right" && props.dateAlign === "left") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
          ]);
        } else {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
          ]);
        }
      } else if (props.dateHeader === "inverted") {
        if (props.weekdayAlign === "left" && props.dateAlign === "right") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day),
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day)
          ]);
        } else if (props.weekdayAlign === "right" && props.dateAlign === "left") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day),
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day)
          ]);
        } else {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day),
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day)
          ]);
        }
      }
    }
    function __renderHeadDayEvent(day, columnIndex) {
      const headDayEventSlot = slots["head-day-event"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = getScopeForSlot(day, columnIndex);
      scope.activeDate = activeDate;
      scope.disabled = props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false;
      const width = isSticky.value === true ? convertToUnit(parsedCellWidth.value) : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        minWidth: width
      };
      if (isSticky.value === true) {
        style.minWidth = width;
      }
      return h("div", {
        key: "event-" + day.date + (columnIndex !== void 0 ? "-" + columnIndex : ""),
        class: {
          "q-calendar-day__head--day__event": true,
          ...getRelativeClasses(day),
          "q-active-date": activeDate
        },
        style
      }, [
        headDayEventSlot && headDayEventSlot({ scope })
      ]);
    }
    function __renderHeadWeekday(day) {
      const slot = slots["head-weekday-label"];
      const shortWeekdayLabel = props.shortWeekdayLabel === true;
      const scope = getScopeForSlot(day);
      scope.shortWeekdayLabel = props.shortWeekdayLabel;
      scope.disabled = props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false;
      const data = {
        class: {
          "q-calendar-day__head--weekday": true,
          ["q-calendar__" + props.weekdayAlign]: true,
          "q-calendar__ellipsis": true
        }
      };
      return h("div", data, slot && slot({ scope }) || __renderHeadWeekdayLabel(day, shortWeekdayLabel));
    }
    function __renderHeadWeekdayLabel(day, shortWeekdayLabel) {
      const weekdayLabel = weekdayFormatter.value(day, shortWeekdayLabel || props.weekdayBreakpoints[0] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[0]);
      return h("span", {
        class: "q-calendar-day__head--weekday-label q-calendar__ellipsis"
      }, props.weekdayBreakpoints[1] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[1] ? minCharWidth(weekdayLabel, props.minWeekdayLabel) : weekdayLabel);
    }
    function __renderHeadDayDate(day) {
      const data = {
        class: {
          "q-calendar-day__head--date": true,
          ["q-calendar__" + props.dateAlign]: true
        }
      };
      return h("div", data, __renderHeadDayBtn(day));
    }
    function __renderHeadDayBtn(day) {
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const dayLabel = dayFormatter.value(day, false);
      const headDayLabelSlot = slots["head-day-label"];
      const headDayButtonSlot = slots["head-day-button"];
      const scope = {
        dayLabel,
        timestamp: day,
        activeDate,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false
      };
      const data = {
        class: {
          "q-calendar-day__head--day__label": true,
          "q-calendar__button": true,
          "q-calendar__button--round": props.dateType === "round",
          "q-calendar__button--rounded": props.dateType === "rounded",
          "q-calendar__button--bordered": day.current === true,
          "q-calendar__focusable": true
        },
        disabled: day.disabled,
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            emittedValue.value = day.date;
            if (emitListeners.value.onClickDate !== void 0) {
              emit("click-date", { scope });
            }
          }
        },
        ...getDefaultMouseEventHandlers2("-date", (event, eventName) => {
          if (eventName === "click-date" || eventName === "contextmenu-date") {
            emittedValue.value = day.date;
            if (eventName === "click-date") {
              event.preventDefault();
            }
          }
          return { scope, event };
        })
      };
      if (props.noAria !== true) {
        data.ariaLabel = ariaDateFormatter.value(day);
      }
      return headDayButtonSlot ? headDayButtonSlot({ scope }) : useButton(props, data, headDayLabelSlot ? headDayLabelSlot({ scope }) : dayLabel);
    }
    function __renderColumnHeaderBefore(day, columnIndex) {
      const slot = slots["column-header-before"];
      if (slot) {
        const scope = { timestamp: day, columnIndex };
        return h("div", {
          class: "q-calendar-day__column-header--before"
        }, [
          slot({ scope })
        ]);
      }
    }
    function __renderColumnHeaderAfter(day, columnIndex) {
      const slot = slots["column-header-after"];
      if (slot) {
        const scope = { timestamp: day, columnIndex };
        return h("div", {
          class: "q-calendar-day__column-header--after"
        }, [
          slot({ scope })
        ]);
      }
    }
    function __renderBody() {
      return h("div", {
        class: "q-calendar-day__body"
      }, [
        __renderScrollArea()
      ]);
    }
    function __renderScrollArea() {
      if (isSticky.value === true) {
        return h("div", {
          ref: scrollArea,
          class: {
            "q-calendar-day__scroll-area": true,
            "q-calendar__scroll": true
          }
        }, [
          isSticky.value !== true && __renderBodyIntervals(),
          __renderDayContainer()
        ]);
      } else if (props.noScroll === true) {
        return __renderPane();
      } else {
        return h("div", {
          ref: scrollArea,
          class: {
            "q-calendar-day__scroll-area": true,
            "q-calendar__scroll": true
          }
        }, [
          __renderPane()
        ]);
      }
    }
    function __renderPane() {
      return h("div", {
        ref: pane,
        class: "q-calendar-day__pane"
      }, [
        __renderBodyIntervals(),
        __renderDayContainer()
      ]);
    }
    function __renderDayContainer() {
      const slot = slots["day-container"];
      return h("div", {
        class: "q-calendar-day__day-container"
      }, [
        isSticky.value === true && props.noHeader !== true && __renderHead(),
        h("div", {
          style: {
            display: "flex",
            flexDirection: "row"
          }
        }, [
          isSticky.value === true && __renderBodyIntervals(),
          ...__renderDays()
        ]),
        slot && slot({ scope: { days: days.value } })
      ]);
    }
    function __renderDays() {
      if (days.value.length === 1 && parseInt(props.columnCount, 10) > 0) {
        return Array.apply(null, new Array(parseInt(props.columnCount, 10))).map((_, i) => i + parseInt(props.columnIndexStart, 10)).map((i) => __renderDay(days.value[0], 0, i));
      } else {
        return days.value.map((day, index) => __renderDay(day, index));
      }
    }
    function __renderDay(day, dayIndex, columnIndex) {
      const slot = slots["day-body"];
      const scope = getScopeForSlot(day, columnIndex);
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        minWidth: width
      };
      if (isSticky.value === true) {
        style.minWidth = width;
      }
      return h("div", {
        key: day.date + (columnIndex !== void 0 ? ":" + columnIndex : ""),
        class: {
          "q-calendar-day__day": true,
          ...getRelativeClasses(day)
        },
        style
      }, [
        ...__renderDayIntervals(dayIndex, columnIndex),
        slot && slot({ scope })
      ]);
    }
    function __renderDayIntervals(index, columnIndex) {
      return intervals.value[index].map((interval) => __renderDayInterval(interval, columnIndex));
    }
    function __renderDayInterval(interval, columnIndex) {
      const height = convertToUnit(props.intervalHeight);
      const styler = props.intervalStyle || styleDefault;
      const slotDayInterval = slots["day-interval"];
      const scope = getScopeForSlot(interval, columnIndex);
      scope.droppable = dragOverInterval.value === getDayTimeIdentifier(interval);
      const intervalClass = typeof props.intervalClass === "function" ? props.intervalClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("interval");
      const dateTime = getDateTime(interval);
      const data = {
        key: dateTime,
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-day__day-interval": interval.minute === 0,
          "q-calendar-day__day-interval--section": interval.minute !== 0,
          ...intervalClass,
          ...getIntervalClasses(interval, props.selectedDates, props.selectedStartEndDates),
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style: {
          height,
          ...styler({ scope })
        },
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "interval", scope) === true ? dragOverInterval.value = getDayTimeIdentifier(interval) : dragOverInterval.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "interval", scope) === true ? dragOverInterval.value = getDayTimeIdentifier(interval) : dragOverInterval.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "interval", scope) === true ? dragOverInterval.value = getDayTimeIdentifier(interval) : dragOverInterval.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "interval", scope) === true ? dragOverInterval.value = getDayTimeIdentifier(interval) : dragOverInterval.value = "";
          }
        },
        onKeydown: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            event.stopPropagation();
            event.preventDefault();
          }
        },
        onKeyup: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            const scope2 = getScopeForSlot(interval, columnIndex);
            emittedValue.value = scope2.timestamp.date;
            if (emitListeners.value.onClickTime !== void 0) {
              emit("click-time", { scope: scope2, event });
            }
          }
        },
        ...getDefaultMouseEventHandlers2("-time", (event) => {
          const scope2 = getScopeForSlot(getTimestampAtEventInterval(event, interval, props.timeClicksClamped, times.now), columnIndex);
          return { scope: scope2, event };
        })
      };
      if (props.noAria !== true) {
        data.ariaLabel = ariaDateTimeFormatter.value(interval);
      }
      const children = slotDayInterval ? slotDayInterval({ scope }) : void 0;
      return h("div", data, [children, useFocusHelper()]);
    }
    function __renderBodyIntervals() {
      const data = {
        ariaHidden: "true",
        class: {
          "q-calendar-day__intervals-column": true,
          "q-calendar__ellipsis": true,
          "q-calendar__sticky": isSticky.value === true
        },
        ...getDefaultMouseEventHandlers2("-interval", (event) => {
          const timestamp = getTimestampAtEvent(event, parsedStart.value, props.timeClicksClamped, times.now);
          return { scope: { timestamp }, event };
        })
      };
      return h("div", data, __renderIntervalLabels());
    }
    function __renderIntervalLabels() {
      return intervals.value[0].map((interval) => __renderIntervalLabel(interval));
    }
    function __renderIntervalLabel(interval) {
      const slotIntervalLabel = slots["interval-label"];
      const height = convertToUnit(props.intervalHeight);
      const short = props.shortIntervalLabel;
      const shower = props.showIntervalLabel || showIntervalLabelDefault;
      const show = shower(interval);
      const label = show ? intervalFormatter.value(interval, short) : void 0;
      return h("div", {
        key: interval.time,
        class: {
          "q-calendar-day__interval": interval.minute === 0,
          "q-calendar-day__interval--section": interval.minute !== 0
        },
        style: {
          height
        }
      }, [
        h("div", {
          class: "q-calendar-day__interval--text q-calendar__overflow-wrap"
        }, [
          slotIntervalLabel ? slotIntervalLabel({ scope: { timestamp: interval, label } }) : label
        ])
      ]);
    }
    function __renderDaily() {
      const { start, end, maxDays } = renderValues.value;
      if (startDate.value !== start.date || endDate.value !== end.date || maxDaysRendered.value !== maxDays) {
        startDate.value = start.date;
        endDate.value = end.date;
        maxDaysRendered.value = maxDays;
      }
      const hasWidth = size.width > 0;
      const daily = withDirectives(h("div", {
        key: startDate.value,
        class: "q-calendar-day"
      }, [
        hasWidth === true && isSticky.value !== true && props.noHeader !== true && __renderHead(),
        hasWidth && __renderBody()
      ]), [[
        ResizeObserver$1,
        __onResize
      ]]);
      if (props.animated === true) {
        const transition = "q-calendar--" + (direction.value === "prev" ? props.transitionPrev : props.transitionNext);
        return h(Transition, {
          name: transition,
          appear: true
        }, () => daily);
      }
      return daily;
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent,
      timeStartPos,
      timeDurationHeight,
      heightToMinutes,
      scrollToTime
    });
    return () => __renderCalendar();
  }
});
const useMonthProps = {
  dayHeight: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  dayMinHeight: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  dayStyle: {
    type: Function,
    default: null
  },
  dayClass: {
    type: Function,
    default: null
  },
  weekdayStyle: {
    type: Function,
    default: null
  },
  weekdayClass: {
    type: Function,
    default: null
  },
  dayPadding: String,
  minWeeks: {
    type: [Number, String],
    validator: validateNumber,
    default: 1
  },
  shortMonthLabel: Boolean,
  showWorkWeeks: Boolean,
  showMonthLabel: {
    type: Boolean,
    default: true
  },
  showDayOfYearLabel: Boolean,
  enableOutsideDays: Boolean,
  noOutsideDays: Boolean,
  hover: Boolean,
  miniMode: {
    type: [Boolean, String],
    validator: (v) => [true, false, "auto"].includes(v)
  },
  breakpoint: {
    type: [Number, String],
    default: "md",
    validator: (v) => ["xs", "sm", "md", "lg", "xl"].includes(v) || validateNumber(v)
  },
  monthLabelSize: {
    type: String,
    default: "sm",
    validator: (v) => ["xxs", "xs", "sm", "md", "lg", "xl", "xxl"].includes(v) || !!v && v.length > 0
  }
};
function useMonth(props, emit, {
  weekdaySkips,
  times,
  parsedStart,
  parsedEnd,
  size,
  headerColumnRef
}) {
  const parsedMinWeeks = computed(() => parseInt(props.minWeeks, 10));
  const parsedMinDays = computed(() => parsedMinWeeks.value * props.weekdays.length);
  const parsedMonthStart = computed(() => __getStartOfWeek(__getStartOfMonth(parsedStart.value)));
  const parsedMonthEnd = computed(() => __getEndOfWeek(__getEndOfMonth(parsedEnd.value)));
  const parsedCellWidth = computed(() => {
    let width = 0;
    if (props.cellWidth) {
      width = props.cellWidth;
    } else if (size.width > 0 && headerColumnRef.value) {
      width = headerColumnRef.value.offsetWidth / props.weekdays.length;
    }
    return width;
  });
  const days = computed(() => {
    return createDayList(
      parsedMonthStart.value,
      parsedMonthEnd.value,
      times.today,
      weekdaySkips.value,
      props.disabledBefore,
      props.disabledAfter,
      props.disabledWeekdays,
      props.disabledDays,
      Number.MAX_SAFE_INTEGER,
      parsedMinDays.value
    );
  });
  const todayWeek = computed(() => {
    const day = times.today;
    const start = __getStartOfWeek(day);
    const end = __getEndOfWeek(day);
    return createDayList(
      start,
      end,
      day,
      weekdaySkips,
      props.disabledBefore,
      props.disabledAfter,
      props.disabledWeekdays,
      props.disabledDays,
      props.weekdays.length,
      props.weekdays.length
    );
  });
  const monthFormatter = computed(() => {
    const longOptions = { timeZone: "UTC", month: "long" };
    const shortOptions = { timeZone: "UTC", month: "short" };
    return createNativeLocaleFormatter(
      props.locale,
      (_tms, short) => short ? shortOptions : longOptions
    );
  });
  const parsedBreakpoint = computed(() => {
    switch (props.breakpoint) {
      case "xs":
        return 300;
      case "sm":
        return 350;
      case "md":
        return 400;
      case "lg":
        return 450;
      case "xl":
        return 500;
      default:
        return parseInt(props.breakpoint, 10);
    }
  });
  const parsedMonthLabelSize = computed(() => {
    switch (props.monthLabelSize) {
      case "xxs":
        return ".4em";
      case "xs":
        return ".6em";
      case "sm":
        return ".8em";
      case "md":
        return "1.0em";
      case "lg":
        return "1.2em";
      case "xl":
        return "1.4em";
      case "xxl":
        return "1.6em";
      default:
        return props.monthLabelSize;
    }
  });
  let firstTime = true;
  const isMiniMode2 = computed(() => {
    const val = props.miniMode === true || props.miniMode === "auto" && props.breakpoint !== void 0 && size.width < parsedBreakpoint.value;
    if (firstTime === true) {
      firstTime = false;
      emit("mini-mode", val);
    }
    return val;
  });
  watch(isMiniMode2, (val) => {
    emit("mini-mode", val);
  });
  function __getStartOfWeek(day) {
    return getStartOfWeek(day, props.weekdays, times.today);
  }
  function __getEndOfWeek(day) {
    return getEndOfWeek(day, props.weekdays, times.today);
  }
  function __getStartOfMonth(day) {
    return getStartOfMonth(day);
  }
  function __getEndOfMonth(day) {
    return getEndOfMonth(day);
  }
  function isOutside(day) {
    const dayIdentifier = getDayIdentifier(day);
    return dayIdentifier < getDayIdentifier(parsedStart.value) || dayIdentifier > getDayIdentifier(parsedEnd.value);
  }
  return {
    parsedCellWidth,
    parsedMinWeeks,
    parsedMinDays,
    parsedMonthStart,
    parsedMonthEnd,
    parsedBreakpoint,
    parsedMonthLabelSize,
    days,
    todayWeek,
    isMiniMode: isMiniMode2,
    monthFormatter,
    isOutside
  };
}
var QCalendarMonth = defineComponent({
  name: "QCalendarMonth",
  directives: [ResizeObserver$1],
  props: {
    ...useCommonProps,
    ...useMonthProps,
    ...useTimesProps,
    ...useCellWidthProps,
    ...useNavigationProps
  },
  emits: [
    "update:model-value",
    ...useCheckChangeEmits,
    ...useMoveEmits,
    "mini-mode",
    ...getRawMouseEvents("-date"),
    ...getRawMouseEvents("-day"),
    ...getRawMouseEvents("-head-workweek"),
    ...getRawMouseEvents("-head-day"),
    ...getRawMouseEvents("-workweek")
  ],
  setup(props, { slots, emit, expose }) {
    const scrollArea = ref(null), pane = ref(null), headerColumnRef = ref(null), focusRef = ref(null), focusValue = ref(null), datesRef = ref({}), weekEventRef = ref([]), weekRef = ref([]), direction = ref("next"), startDate = ref(props.modelValue || today()), endDate = ref("0000-00-00"), maxDaysRendered = ref(0), emittedValue = ref(props.modelValue), size = reactive({ width: 0, height: 0 }), dragOverHeadDayRef = ref(false), dragOverDayRef = ref(false), lastStart = ref(null), lastEnd = ref(null);
    const parsedView = computed(() => {
      return "month";
    });
    const vm = getCurrentInstance();
    if (vm === null) {
      throw new Error("current instance is null");
    }
    const { emitListeners } = useEmitListeners(vm);
    const {
      isSticky
    } = useCellWidth(props);
    watch(isSticky, (val) => {
    });
    const {
      times,
      setCurrent,
      updateCurrent
    } = useTimes(props);
    updateCurrent();
    setCurrent();
    const {
      weekdaySkips,
      parsedStart,
      parsedEnd,
      dayFormatter,
      weekdayFormatter,
      ariaDateFormatter,
      dayStyleDefault,
      getRelativeClasses
    } = useCommon(props, { startDate, endDate, times });
    const parsedValue = computed(() => {
      return parseTimestamp(props.modelValue, times.now) || parsedStart.value || times.today;
    });
    focusValue.value = parsedValue.value;
    focusRef.value = parsedValue.value.date;
    const computedStyles = computed(() => {
      const style = {};
      if (props.dayPadding !== void 0) {
        style.padding = props.dayPadding;
      }
      style.minWidth = computedWidth.value;
      style.maxWidth = computedWidth.value;
      style.width = computedWidth.value;
      return style;
    });
    const { renderValues } = useRenderValues(props, {
      parsedView,
      times,
      parsedValue
    });
    const {
      rootRef,
      __initCalendar,
      __renderCalendar
    } = useCalendar(props, __renderMonth, {
      scrollArea,
      pane
    });
    const {
      days,
      todayWeek,
      isMiniMode: isMiniMode2,
      parsedCellWidth,
      parsedMonthLabelSize,
      isOutside,
      monthFormatter
    } = useMonth(props, emit, {
      weekdaySkips,
      times,
      parsedStart,
      parsedEnd,
      size,
      headerColumnRef
    });
    const { move } = useMove(props, {
      parsedView,
      parsedValue,
      weekdaySkips,
      direction,
      maxDays: maxDaysRendered,
      times,
      emittedValue,
      emit
    });
    const {
      getDefaultMouseEventHandlers: getDefaultMouseEventHandlers2
    } = useMouse(emit, emitListeners);
    const {
      checkChange
    } = useCheckChange(emit, { days, lastStart, lastEnd });
    const {
      isKeyCode: isKeyCode2
    } = useEvents();
    const { tryFocus } = useKeyboard(props, {
      rootRef,
      focusRef,
      focusValue,
      datesRef,
      days,
      parsedView,
      parsedValue,
      emittedValue,
      weekdaySkips,
      direction,
      times
    });
    const workweekWidth = computed(() => {
      if (rootRef.value) {
        return props.showWorkWeeks === true ? parseInt(getComputedStyle(rootRef.value).getPropertyValue(isMiniMode2.value === true ? "--calendar-mini-work-week-width" : "--calendar-work-week-width"), 10) : 0;
      }
      return 0;
    });
    const parsedColumnCount = computed(() => {
      return props.weekdays.length;
    });
    const computedWidth = computed(() => {
      if (rootRef.value) {
        const width = size.width || rootRef.value.getBoundingClientRect().width;
        if (width && parsedColumnCount.value) {
          return (width - workweekWidth.value) / parsedColumnCount.value + "px";
        }
      }
      return 100 / parsedColumnCount.value + "%";
    });
    const isDayFocusable = computed(() => {
      return props.focusable === true && props.focusType.includes("day") && isMiniMode2.value !== true;
    });
    const isDateFocusable = computed(() => {
      return props.focusable === true && props.focusType.includes("date") && isDayFocusable.value !== true;
    });
    watch([days], checkChange, { deep: true, immediate: true });
    watch(() => props.modelValue, (val, oldVal) => {
      if (emittedValue.value !== val) {
        if (props.animated === true) {
          const v1 = getDayIdentifier(parsed(val));
          const v2 = getDayIdentifier(parsed(oldVal));
          direction.value = v1 >= v2 ? "next" : "prev";
        }
        emittedValue.value = val;
      }
      focusRef.value = val;
    });
    watch(emittedValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) {
          const v1 = getDayIdentifier(parsed(val));
          const v2 = getDayIdentifier(parsed(oldVal));
          direction.value = v1 >= v2 ? "next" : "prev";
        }
        emit("update:model-value", val);
      }
    });
    watch(focusRef, (val) => {
      if (val) {
        focusValue.value = parseTimestamp(val);
        if (emittedValue.value !== val) {
          emittedValue.value = val;
        }
      }
    });
    watch(focusValue, (val) => {
      if (datesRef.value[focusRef.value]) {
        datesRef.value[focusRef.value].focus();
      } else {
        tryFocus();
      }
    });
    onBeforeUpdate(() => {
      datesRef.value = {};
      weekEventRef.value = [];
      weekRef.value = [];
      nextTick(() => {
        __adjustForWeekEvents();
      });
    });
    onMounted(() => {
      __initCalendar();
      __adjustForWeekEvents();
    });
    function moveToToday() {
      emittedValue.value = today();
    }
    function next(amount = 1) {
      move(amount);
    }
    function prev(amount = 1) {
      move(-amount);
    }
    function __onResize({ width, height }) {
      size.width = width;
      size.height = height;
    }
    function __isActiveDate(day) {
      return day.date === emittedValue.value;
    }
    function isCurrentWeek(week) {
      for (let i = 0; i < week.length; ++i) {
        if (week[i].current === true) {
          return { timestamp: week[i] };
        }
      }
      return { timestamp: false };
    }
    function __adjustForWeekEvents() {
      if (isMiniMode2.value === true)
        return;
      if (props.dayHeight !== 0)
        return;
      const slotWeek = slots.week;
      if (slotWeek === void 0)
        return;
      if (window) {
        for (const row in weekEventRef.value) {
          const weekEvent = weekEventRef.value[row];
          if (weekEvent === void 0)
            continue;
          const wrapper = weekRef.value[row];
          if (wrapper === void 0)
            continue;
          const styles = window.getComputedStyle(weekEvent);
          const margin = parseFloat(styles.marginTop, 10) + parseFloat(styles.marginBottom, 10);
          if (weekEvent.clientHeight + margin > wrapper.clientHeight) {
            wrapper.style.height = weekEvent.clientHeight + margin + "px";
          }
        }
      }
    }
    function __renderBody() {
      return h("div", {
        class: "q-calendar-month__body"
      }, [
        ...__renderWeeks()
      ]);
    }
    function __renderHead() {
      return h("div", {
        role: "presentation",
        class: "q-calendar-month__head"
      }, [
        props.showWorkWeeks === true && __renderWorkWeekHead(),
        h("div", {
          class: "q-calendar-month__head--wrapper"
        }, [
          __renderHeadDaysRow()
        ])
      ]);
    }
    function __renderHeadDaysRow() {
      return h("div", {
        ref: headerColumnRef,
        class: {
          "q-calendar-month__head--weekdays": true
        }
      }, [
        ...__renderHeadDays()
      ]);
    }
    function __renderWorkWeekHead() {
      const slot = slots["head-workweek"];
      const scope = {
        start: parsedStart.value,
        end: parsedEnd.value,
        miniMode: isMiniMode2.value
      };
      return h("div", {
        class: "q-calendar-month__head--workweek",
        ...getDefaultMouseEventHandlers2("-head-workweek", (event) => {
          return { scope, event };
        })
      }, slot ? slot({ scope }) : "#");
    }
    function __renderHeadDays() {
      return todayWeek.value.map((day, index) => __renderHeadDay(day, index));
    }
    function __renderHeadDay(day, index) {
      const headDaySlot = slots["head-day"];
      const filteredDays = days.value.filter((day2) => day2.weekday === day.weekday);
      const weekday = filteredDays[0].weekday;
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = {
        activeDate,
        weekday,
        timestamp: day,
        days: filteredDays,
        index,
        miniMode: isMiniMode2.value,
        droppable: dragOverHeadDayRef.value === day.weekday,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false
      };
      const weekdayClass = typeof props.weekdayClass === "function" ? props.weekdayClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("weekday");
      const width = computedWidth.value;
      const styler = props.weekdayStyle || dayStyleDefault;
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...styler({ scope })
      };
      const data = {
        key: day.date + (index !== void 0 ? "-" + index : ""),
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-month__head--weekday": true,
          ...weekdayClass,
          "q-disabled-day disabled": scope.disabled === true,
          ["q-calendar__" + props.weekdayAlign]: true,
          "q-calendar__ellipsis": true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.weekday : dragOverHeadDayRef.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.weekday : dragOverHeadDayRef.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.weekday : dragOverHeadDayRef.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.weekday : dragOverHeadDayRef.value = "";
          }
        },
        onFocus: (e) => {
          if (isFocusable === true) {
            focusRef.value = day.date;
          }
        },
        ...getDefaultMouseEventHandlers2("-head-day", (event) => {
          return { scope, event };
        })
      };
      if (props.noAria !== true) {
        data.ariaLabel = weekdayFormatter.value(day, false);
      }
      return h("div", data, [
        headDaySlot === void 0 && __renderHeadWeekdayLabel(day, props.shortWeekdayLabel || isMiniMode2.value),
        headDaySlot !== void 0 && headDaySlot({ scope }),
        __renderHeadDayEvent(day, index),
        isFocusable === true && useFocusHelper()
      ]);
    }
    function __renderHeadDayEvent(day, index) {
      const headDayEventSlot = slots["head-day-event"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const filteredDays = days.value.filter((day2) => day2.weekday === day.weekday);
      const weekday = filteredDays[0].weekday;
      const scope = {
        weekday,
        timestamp: day,
        days: filteredDays,
        index,
        miniMode: isMiniMode2.value,
        activeDate,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false
      };
      const width = computedWidth.value;
      const styler = props.weekdayStyle || dayStyleDefault;
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...styler({ scope })
      };
      return h("div", {
        key: "event-" + day.date + (index !== void 0 ? "-" + index : ""),
        class: {
          "q-calendar-month__head--event": true
        },
        style
      }, [
        headDayEventSlot !== void 0 && headDayEventSlot({ scope })
      ]);
    }
    function __renderHeadWeekdayLabel(day, shortWeekdayLabel) {
      const weekdayLabel = weekdayFormatter.value(day, shortWeekdayLabel || props.weekdayBreakpoints[0] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[0]);
      return h("span", {
        class: "q-calendar__ellipsis"
      }, isMiniMode2.value === true && props.shortWeekdayLabel === true || props.weekdayBreakpoints[1] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[1] ? minCharWidth(weekdayLabel, props.minWeekdayLabel) : weekdayLabel);
    }
    function __renderWeeks() {
      const weekDays = props.weekdays.length;
      const weeks = [];
      for (let i = 0; i < days.value.length; i += weekDays) {
        weeks.push(__renderWeek(days.value.slice(i, i + weekDays), i / weekDays));
      }
      return weeks;
    }
    function __renderWeek(week, weekNum) {
      const slotWeek = slots.week;
      const weekdays = props.weekdays;
      const scope = { week, weekdays, miniMode: isMiniMode2.value };
      const style = {};
      style.height = props.dayHeight > 0 && isMiniMode2.value !== true ? convertToUnit(parseInt(props.dayHeight, 10)) : "auto";
      if (props.dayMinHeight > 0 && isMiniMode2.value !== true) {
        style.minHeight = convertToUnit(parseInt(props.dayMinHeight, 10));
      }
      const useAutoHeight = parseInt(props.dayHeight, 10) === 0 && parseInt(props.dayMinHeight, 10) === 0;
      return h("div", {
        key: week[0].date,
        ref: (el) => {
          weekRef.value[weekNum] = el;
        },
        class: {
          "q-calendar-month__week--wrapper": true,
          "q-calendar-month__week--auto-height": useAutoHeight
        },
        style
      }, [
        props.showWorkWeeks === true ? __renderWorkWeekGutter(week) : void 0,
        h("div", {
          class: "q-calendar-month__week"
        }, [
          h("div", {
            class: "q-calendar-month__week--days"
          }, week.map((day, index) => __renderDay(day))),
          isMiniMode2.value !== true && slotWeek !== void 0 ? h("div", {
            ref: (el) => {
              weekEventRef.value[weekNum] = el;
            },
            class: "q-calendar-month__week--events"
          }, slotWeek({ scope })) : void 0
        ])
      ]);
    }
    function __renderWorkWeekGutter(week) {
      const slot = slots.workweek;
      const day = week.length > 2 ? week[2] : week[0];
      const { timestamp } = isCurrentWeek(week);
      const workweekLabel = Number(day.workweek).toLocaleString(props.locale);
      const scope = { workweekLabel, week, miniMode: isMiniMode2.value };
      return h("div", {
        key: day.workweek,
        class: {
          "q-calendar-month__workweek": true,
          ...getRelativeClasses(timestamp !== false ? timestamp : day, false)
        },
        ...getDefaultMouseEventHandlers2("-workweek", (event) => {
          return { scope, event };
        })
      }, slot ? slot({ scope }) : workweekLabel);
    }
    function __renderDay(day) {
      const slot = slots.day;
      const styler = props.dayStyle || dayStyleDefault;
      const outside = isOutside(day);
      const activeDate = props.noActiveDate !== true && parsedValue.value.date === day.date;
      const hasMonth = outside === false && props.showMonthLabel === true && days.value.find((d) => d.month === day.month).day === day.day;
      const scope = {
        outside,
        timestamp: day,
        miniMode: isMiniMode2.value,
        activeDate,
        hasMonth,
        droppable: dragOverDayRef.value === day.date,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false
      };
      const style = Object.assign({ ...computedStyles.value }, styler({ scope }));
      const dayClass = typeof props.dayClass === "function" ? props.dayClass({ scope }) : {};
      const data = {
        key: day.date,
        ref: (el) => {
          if (isDayFocusable.value === true) {
            datesRef.value[day.date] = el;
          }
        },
        tabindex: isDayFocusable.value === true ? 0 : -1,
        class: {
          "q-calendar-month__day": true,
          ...dayClass,
          ...getRelativeClasses(day, outside, props.selectedDates, props.selectedStartEndDates, props.hover),
          "q-active-date": activeDate === true,
          disabled: props.enableOutsideDays !== true && outside === true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isDayFocusable.value === true
        },
        style,
        onFocus: (e) => {
          if (isDayFocusable.value === true) {
            focusRef.value = day.date;
          }
        },
        onKeydown: (e) => {
          if (outside !== true && day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (event) => {
          if (outside !== true && day.disabled !== true && isKeyCode2(event, [13, 32])) {
            event.stopPropagation();
            event.preventDefault();
            if (emitListeners.value.onClickDay !== void 0 && isMiniMode2.value !== true) {
              emit("click-day", { scope, event });
            }
          }
        },
        ...getDefaultMouseEventHandlers2("-day", (event) => {
          return { scope, event };
        })
      };
      const dragAndDrop = {
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "day", scope) === true ? dragOverDayRef.value = day.date : dragOverDayRef.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "day", scope) === true ? dragOverDayRef.value = day.date : dragOverDayRef.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "day", scope) === true ? dragOverDayRef.value = day.date : dragOverDayRef.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "day", scope) === true ? dragOverDayRef.value = day.date : dragOverDayRef.value = "";
          }
        }
      };
      if (outside !== true) {
        Object.assign(data, dragAndDrop);
      }
      if (props.noAria !== true) {
        data.ariaLabel = ariaDateFormatter.value(day);
      }
      return h("div", data, [
        __renderDayLabelContainer(day, outside, hasMonth),
        h("div", {
          class: {
            "q-calendar-month__day--content": true
          }
        }, slot ? slot({ scope }) : void 0),
        isDayFocusable.value === true && useFocusHelper()
      ]);
    }
    function __renderDayLabelContainer(day, outside, hasMonth) {
      let dayOfYearLabel, monthLabel;
      const children = [__renderDayLabel(day, outside)];
      if (isMiniMode2.value !== true && hasMonth === true && size.width > 340) {
        monthLabel = __renderDayMonth(day, outside);
      }
      if (isMiniMode2.value !== true && props.showDayOfYearLabel === true && monthLabel === void 0 && size.width > 300) {
        dayOfYearLabel = __renderDayOfYearLabel(day, outside);
      }
      if (props.dateAlign === "left") {
        dayOfYearLabel !== void 0 && children.push(dayOfYearLabel);
        monthLabel !== void 0 && children.push(monthLabel);
      } else if (props.dateAlign === "right") {
        dayOfYearLabel !== void 0 && children.unshift(dayOfYearLabel);
        monthLabel !== void 0 && children.unshift(monthLabel);
      } else {
        dayOfYearLabel = void 0;
        monthLabel = void 0;
      }
      const data = {
        class: {
          "q-calendar-month__day--label__wrapper": true,
          "q-calendar__ellipsis": true,
          ["q-calendar__" + props.dateAlign]: dayOfYearLabel === void 0 && monthLabel === void 0,
          "q-calendar__justify": dayOfYearLabel !== void 0 || monthLabel !== void 0
        }
      };
      return h("div", data, children);
    }
    function __renderDayLabel(day, outside) {
      if (outside === true && props.noOutsideDays === true) {
        return;
      }
      const dayLabel = dayFormatter.value(day, false);
      const dayLabelSlot = slots["head-day-label"];
      const dayBtnSlot = slots["head-day-button"];
      const selectedDate = props.selectedDates && props.selectedDates.length > 0 && props.selectedDates.includes(day.date);
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = {
        dayLabel,
        timestamp: day,
        outside,
        activeDate,
        selectedDate,
        miniMode: isMiniMode2.value,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false
      };
      const data = {
        key: day.date,
        ref: (el) => {
          if (isDateFocusable.value === true) {
            datesRef.value[day.date] = el;
          }
        },
        tabindex: isDateFocusable.value === true ? 0 : -1,
        class: {
          "q-calendar-month__day--label": true,
          "q-calendar__button": true,
          "q-calendar__button--round": props.dateType === "round",
          "q-calendar__button--rounded": props.dateType === "rounded",
          "q-calendar__button--bordered": day.current === true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isDateFocusable.value === true
        },
        disabled: day.disabled === true || props.enableOutsideDays !== true && outside === true,
        onFocus: (e) => {
          if (isDateFocusable.value === true) {
            focusRef.value = day.date;
          }
        },
        onKeydown: (e) => {
          if (outside !== true && day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (event) => {
          if (isDateFocusable.value === true && outside !== true && day.disabled !== true && isKeyCode2(event, [13, 32])) {
            event.stopPropagation();
            event.preventDefault();
            emittedValue.value = day.date;
            if (emitListeners.value.onClickDate !== void 0) {
              emit("click-date", { scope, event });
            }
          }
        },
        ...getDefaultMouseEventHandlers2("-date", (event, eventName) => {
          event.stopPropagation();
          if (eventName === "click-date" || eventName === "contextmenu-date") {
            emittedValue.value = day.date;
          }
          return { scope, event };
        })
      };
      if (props.noAria !== true) {
        data.ariaLabel = ariaDateFormatter.value(day);
      }
      return [
        dayBtnSlot ? dayBtnSlot({ scope }) : useButton(props, data, dayLabelSlot ? dayLabelSlot({ scope }) : dayLabel),
        isDateFocusable.value === true && useFocusHelper()
      ];
    }
    function __renderDayOfYearLabel(day, outside) {
      if (outside === true && props.noOutsideDays === true) {
        return;
      }
      const slot = slots["day-of-year"];
      const scope = { timestamp: day };
      return h("span", {
        class: {
          "q-calendar-month__day--day-of-year": true,
          "q-calendar__ellipsis": true
        }
      }, slot ? slot({ scope }) : day.doy);
    }
    function __renderDayMonth(day, outside) {
      if (outside === true && props.noOutsideDays === true) {
        return;
      }
      const slot = slots["month-label"];
      const monthLabel = monthFormatter.value(day, props.shortMonthLabel || size.width < 500);
      const scope = { monthLabel, timestamp: day, miniMode: isMiniMode2.value };
      const style = {};
      if (isMiniMode2.value !== true && parsedMonthLabelSize.value !== void 0) {
        style.fontSize = parsedMonthLabelSize.value;
      }
      return h("span", {
        class: "q-calendar-month__day--month q-calendar__ellipsis",
        style
      }, [
        slot ? slot({ scope }) : isMiniMode2.value !== true ? monthLabel : void 0
      ]);
    }
    function __renderMonth() {
      const { start, end } = renderValues.value;
      startDate.value = start.date;
      endDate.value = end.date;
      const hasWidth = size.width > 0;
      const weekly = withDirectives(h("div", {
        class: {
          "q-calendar-mini": isMiniMode2.value === true,
          "q-calendar-month": true
        },
        key: startDate.value
      }, [
        hasWidth === true && props.noHeader !== true && __renderHead(),
        hasWidth === true && __renderBody()
      ]), [[
        ResizeObserver$1,
        __onResize
      ]]);
      if (props.animated === true) {
        const transition = "q-calendar--" + (direction.value === "prev" ? props.transitionPrev : props.transitionNext);
        return h(Transition, {
          name: transition,
          appear: true
        }, () => weekly);
      }
      return weekly;
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent
    });
    return () => __renderCalendar();
  }
});
var QCalendarResource = defineComponent({
  name: "QCalendarResource",
  props: {
    ...useCommonProps,
    ...useResourceProps,
    ...useIntervalProps,
    ...useColumnProps,
    ...useMaxDaysProps,
    ...useTimesProps,
    ...useNavigationProps
  },
  emits: [
    "update:model-value",
    "update:model-resources",
    "resource-expanded",
    ...useCheckChangeEmits,
    ...useMoveEmits,
    ...getRawMouseEvents("-date"),
    ...getRawMouseEvents("-interval"),
    ...getRawMouseEvents("-head-day"),
    ...getRawMouseEvents("-time"),
    ...getRawMouseEvents("-head-resources"),
    ...getRawMouseEvents("-resource")
  ],
  setup(props, { slots, emit, expose }) {
    const scrollArea = ref(null), pane = ref(null), headerRef = ref(null), headerColumnRef = ref(null), focusRef = ref(null), focusValue = ref(null), datesRef = ref({}), resourcesRef = ref({}), direction = ref("next"), startDate = ref(today()), endDate = ref("0000-00-00"), maxDaysRendered = ref(0), emittedValue = ref(props.modelValue), size = reactive({ width: 0, height: 0 }), dragOverHeadDayRef = ref(false), dragOverResource2 = ref(false), dragOverResourceInterval = ref(false), lastStart = ref(null), lastEnd = ref(null);
    watch(() => props.view, () => {
      maxDaysRendered.value = 0;
    });
    const parsedView = computed(() => {
      if (props.view === "month") {
        return "month-interval";
      }
      return props.view;
    });
    const parsedCellWidth = computed(() => {
      return parseInt(props.cellWidth, 10);
    });
    const vm = getCurrentInstance();
    if (vm === null) {
      throw new Error("current instance is null");
    }
    const { emitListeners } = useEmitListeners(vm);
    const {
      times,
      setCurrent,
      updateCurrent
    } = useTimes(props);
    updateCurrent();
    setCurrent();
    const {
      weekdaySkips,
      parsedStart,
      parsedEnd,
      dayStyleDefault
    } = useCommon(props, { startDate, endDate, times });
    const parsedValue = computed(() => {
      return parseTimestamp(props.modelValue, times.now) || parsedStart.value || times.today;
    });
    focusValue.value = parsedValue.value;
    focusRef.value = parsedValue.value.date;
    const { renderValues } = useRenderValues(props, {
      parsedView,
      times,
      parsedValue
    });
    const {
      rootRef,
      __initCalendar,
      __renderCalendar
    } = useCalendar(props, __renderResource, {
      scrollArea,
      pane
    });
    const {
      days,
      intervals,
      intervalFormatter,
      styleDefault,
      scrollToTimeX,
      timeDurationWidth,
      timeStartPosX,
      widthToMinutes
    } = useInterval(props, {
      weekdaySkips,
      times,
      scrollArea,
      parsedStart,
      parsedEnd,
      maxDays: maxDaysRendered,
      size,
      headerColumnRef
    });
    const { move } = useMove(props, {
      parsedView,
      parsedValue,
      weekdaySkips,
      direction,
      maxDays: maxDaysRendered,
      times,
      emittedValue,
      emit
    });
    const {
      getDefaultMouseEventHandlers: getDefaultMouseEventHandlers2
    } = useMouse(emit, emitListeners);
    const {
      checkChange
    } = useCheckChange(emit, { days, lastStart, lastEnd });
    const {
      isKeyCode: isKeyCode2
    } = useEvents();
    const { tryFocus } = useKeyboard(props, {
      rootRef,
      focusRef,
      focusValue,
      datesRef,
      days,
      parsedView,
      parsedValue,
      emittedValue,
      weekdaySkips,
      direction,
      times
    });
    const parsedResourceHeight = computed(() => {
      const height = parseInt(props.resourceHeight, 10);
      if (height === 0) {
        return "auto";
      }
      return height;
    });
    const parsedResourceMinHeight = computed(() => {
      return parseInt(props.resourceMinHeight, 10);
    });
    const parsedIntervalHeaderHeight = computed(() => {
      return parseInt(props.intervalHeaderHeight, 10);
    });
    watch([days], checkChange, { deep: true, immediate: true });
    watch(() => props.modelValue, (val, oldVal) => {
      if (emittedValue.value !== val) {
        if (props.animated === true) {
          const v1 = getDayIdentifier(parsed(val));
          const v2 = getDayIdentifier(parsed(oldVal));
          direction.value = v1 >= v2 ? "next" : "prev";
        }
        emittedValue.value = val;
      }
      focusRef.value = val;
    });
    watch(emittedValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) {
          const v1 = getDayIdentifier(parsed(val));
          const v2 = getDayIdentifier(parsed(oldVal));
          direction.value = v1 >= v2 ? "next" : "prev";
        }
        emit("update:model-value", val);
      }
    });
    watch(focusRef, (val) => {
      if (val) {
        focusValue.value = parseTimestamp(val);
      }
    });
    watch(focusValue, (val) => {
      if (datesRef.value[focusRef.value]) {
        datesRef.value[focusRef.value].focus();
      } else {
        tryFocus();
      }
    });
    onBeforeUpdate(() => {
      datesRef.value = {};
      resourcesRef.value = {};
    });
    onMounted(() => {
      __initCalendar();
    });
    function moveToToday() {
      emittedValue.value = today();
    }
    function next(amount = 1) {
      move(amount);
    }
    function prev(amount = 1) {
      move(-amount);
    }
    function __onResize({ width, height }) {
      size.width = width;
      size.height = height;
    }
    function __isActiveDate(day) {
      return day.date === emittedValue.value;
    }
    function __renderHead() {
      const style = {
        height: convertToUnit(parsedIntervalHeaderHeight.value)
      };
      return h("div", {
        ref: headerRef,
        roll: "presentation",
        class: {
          "q-calendar-resource__head": true,
          "q-calendar__sticky": props.noSticky !== true
        },
        style
      }, [
        __renderHeadResource(),
        __renderHeadIntervals()
      ]);
    }
    function __renderHeadResource() {
      const slot = slots["head-resources"];
      const height = convertToUnit(parsedIntervalHeaderHeight.value);
      const scope = {
        timestamps: intervals,
        date: props.modelValue,
        resources: props.modelResources
      };
      return h("div", {
        class: {
          "q-calendar-resource__head--resources": true,
          "q-calendar__sticky": props.noSticky !== true
        },
        style: {
          height
        },
        ...getDefaultMouseEventHandlers2("-head-resources", (event) => {
          return { scope, event };
        })
      }, [
        slot && slot({ scope })
      ]);
    }
    function __renderHeadIntervals() {
      return h("div", {
        ref: headerColumnRef,
        class: {
          "q-calendar-resource__head--intervals": true
        }
      }, [
        intervals.value.map((intervals2) => intervals2.map((interval, index) => __renderHeadInterval(interval, index)))
      ]);
    }
    function __renderHeadInterval(interval, index) {
      const slot = slots["interval-label"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(interval);
      const width = convertToUnit(parsedCellWidth.value);
      const height = convertToUnit(parsedIntervalHeaderHeight.value);
      const short = props.shortIntervalLabel;
      const label = intervalFormatter.value(interval, short);
      const scope = {
        timestamp: interval,
        index,
        label
      };
      scope.droppable = dragOverHeadDayRef.value === label;
      const styler = props.intervalStyle || dayStyleDefault;
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        height,
        ...styler({ scope })
      };
      const intervalClass = typeof props.intervalClass === "function" ? props.intervalClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("interval");
      return h("div", {
        key: label,
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-resource__head--interval": true,
          ...intervalClass,
          "q-active-date": activeDate,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "interval", scope) === true ? dragOverHeadDayRef.value = label : dragOverHeadDayRef.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "interval", scope) === true ? dragOverHeadDayRef.value = label : dragOverHeadDayRef.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "interval", scope) === true ? dragOverHeadDayRef.value = label : dragOverHeadDayRef.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "interval", scope) === true ? dragOverHeadDayRef.value = label : dragOverHeadDayRef.value = "";
          }
        },
        onFocus: (e) => {
          if (isFocusable === true) {
            focusRef.value = label;
          }
        },
        ...getDefaultMouseEventHandlers2("-interval", (event) => {
          return { scope, event };
        })
      }, [
        slot ? slot({ scope }) : label,
        useFocusHelper()
      ]);
    }
    function __renderBody() {
      return h("div", {
        class: "q-calendar-resource__body"
      }, [
        __renderScrollArea()
      ]);
    }
    function __renderScrollArea() {
      return h("div", {
        ref: scrollArea,
        class: {
          "q-calendar-resource__scroll-area": true,
          "q-calendar__scroll": true
        }
      }, [
        __renderDayContainer()
      ]);
    }
    function __renderResourcesError() {
      return h("div", {}, "No resources have been defined");
    }
    function __renderDayContainer() {
      return h("div", {
        class: "q-calendar-resource__day--container"
      }, [
        __renderHead(),
        props.modelResources === void 0 && __renderResourcesError(),
        props.modelResources !== void 0 && __renderBodyResources()
      ]);
    }
    function __renderBodyResources() {
      const data = {
        class: "q-calendar-resource__resources--body"
      };
      return h("div", data, __renderResources());
    }
    function __renderResources(resources = void 0, indentLevel = 0, expanded = true) {
      if (resources === void 0) {
        resources = props.modelResources;
      }
      return resources.map((resource, resourceIndex) => {
        return __renderResourceRow(resource, resourceIndex, indentLevel, resource.children !== void 0 ? resource.expanded : expanded);
      });
    }
    function __renderResourceRow(resource, resourceIndex, indentLevel = 0, expanded = true) {
      const style = {};
      style.height = parsedResourceHeight.value === "auto" ? parsedResourceHeight.value : convertToUnit(parsedResourceHeight.value);
      if (parsedResourceMinHeight.value > 0) {
        style.minHeight = convertToUnit(parsedResourceMinHeight.value);
      }
      const resourceRow = h("div", {
        key: resource[props.resourceKey] + "-" + resourceIndex,
        class: {
          "q-calendar-resource__resource--row": true
        },
        style
      }, [
        __renderResourceLabel(resource, resourceIndex, indentLevel, expanded),
        __renderResourceIntervals(resource, resourceIndex)
      ]);
      if (resource.children !== void 0) {
        return [
          resourceRow,
          h("div", {
            class: {
              "q-calendar__child": true,
              "q-calendar__child--expanded": expanded === true,
              "q-calendar__child--collapsed": expanded !== true
            }
          }, [
            __renderResources(resource.children, indentLevel + 1, expanded === false ? expanded : resource.expanded)
          ])
        ];
      }
      return [resourceRow];
    }
    function __renderResourceLabel(resource, resourceIndex, indentLevel = 0, expanded = true) {
      const slotResourceLabel = slots["resource-label"];
      const style = {};
      style.height = resource.height !== void 0 ? convertToUnit(parseInt(resource.height, 10)) : parsedResourceHeight.value ? convertToUnit(parsedResourceHeight.value) : "auto";
      if (parsedResourceMinHeight.value > 0) {
        style.minHeight = convertToUnit(parsedResourceMinHeight.value);
      }
      const styler = props.resourceStyle || styleDefault;
      const label = resource[props.resourceLabel];
      const isFocusable = props.focusable === true && props.focusType.includes("resource") && expanded === true;
      const scope = {
        resource,
        timestamps: intervals,
        resourceIndex,
        indentLevel,
        label
      };
      const dragValue2 = resource[props.resourceKey];
      scope.droppable = dragOverResource2.value === dragValue2;
      const resourceClass = typeof props.resourceClass === "function" ? props.resourceClass({ scope }) : {};
      return h("div", {
        key: resource[props.resourceKey] + "-" + resourceIndex,
        ref: (el) => {
          resourcesRef.value[resource[props.resourceKey]] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-resource__resource": indentLevel === 0,
          "q-calendar-resource__resource--section": indentLevel !== 0,
          ...resourceClass,
          "q-calendar__sticky": props.noSticky !== true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style: {
          ...style,
          ...styler({ scope })
        },
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "resource", scope) === true ? dragOverResource2.value = dragValue2 : dragOverResource2.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "resource", scope) === true ? dragOverResource2.value = dragValue2 : dragOverResource2.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "resource", scope) === true ? dragOverResource2.value = dragValue2 : dragOverResource2.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "resource", scope) === true ? dragOverResource2.value = dragValue2 : dragOverResource2.value = "";
          }
        },
        onKeydown: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            event.stopPropagation();
            event.preventDefault();
          }
        },
        onKeyup: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            if (emitListeners.value.onClickResource !== void 0) {
              emit("click-resource", { scope, event });
            }
          }
        },
        ...getDefaultMouseEventHandlers2("-resource", (event) => {
          return { scope, event };
        })
      }, [
        [
          h("div", {
            class: {
              "q-calendar__parent": resource.children !== void 0,
              "q-calendar__parent--expanded": resource.children !== void 0 && resource.expanded === true,
              "q-calendar__parent--collapsed": resource.children !== void 0 && resource.expanded !== true
            },
            onClick: (e) => {
              e.stopPropagation();
              resource.expanded = !resource.expanded;
              emit("resource-expanded", { expanded: resource.expanded, scope });
            }
          }),
          h("div", {
            class: {
              "q-calendar-resource__resource--text": true,
              "q-calendar__ellipsis": true
            },
            style: {
              paddingLeft: 10 * indentLevel + 2 + "px"
            }
          }, [
            slotResourceLabel ? slotResourceLabel({ scope }) : label
          ]),
          useFocusHelper()
        ]
      ]);
    }
    function __renderResourceIntervals(resource, resourceIndex) {
      const slot = slots["resource-intervals"];
      const scope = {
        resource,
        timestamps: intervals,
        resourceIndex,
        timeStartPosX,
        timeDurationWidth
      };
      return h("div", {
        class: "q-calendar-resource__resource--intervals"
      }, [
        intervals.value.map((intervals2) => intervals2.map((interval) => __renderResourceInterval(resource, interval, resourceIndex))),
        slot && slot({ scope })
      ]);
    }
    function __renderResourceInterval(resource, interval, resourceIndex) {
      const slot = slots["resource-interval"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(interval);
      const scope = {
        activeDate,
        resource,
        timestamp: interval,
        resourceIndex
      };
      const resourceKey = resource[props.resourceKey];
      const dragValue2 = interval.time + "-" + resourceKey;
      scope.droppable = dragOverResourceInterval.value === dragValue2;
      const isFocusable = props.focusable === true && props.focusType.includes("time");
      const styler = props.intervalStyle || dayStyleDefault;
      const width = convertToUnit(parsedCellWidth.value);
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...styler({ scope })
      };
      style.height = resource.height !== void 0 ? convertToUnit(parseInt(resource.height, 10)) : parsedResourceHeight.value > 0 ? convertToUnit(parsedResourceHeight.value) : "auto";
      if (parsedResourceMinHeight.value > 0) {
        style.minHeight = convertToUnit(parsedResourceMinHeight.value);
      }
      return h("div", {
        key: dragValue2,
        ref: (el) => {
          datesRef.value[resource[props.resourceKey]] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-resource__resource--interval": true,
          "q-active-date": activeDate,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "time", scope) === true ? dragOverResourceInterval.value = dragValue2 : dragOverResourceInterval.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "time", scope) === true ? dragOverResourceInterval.value = dragValue2 : dragOverResourceInterval.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "time", scope) === true ? dragOverResourceInterval.value = dragValue2 : dragOverResourceInterval.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "time", scope) === true ? dragOverResourceInterval.value = dragValue2 : dragOverResourceInterval.value = "";
          }
        },
        onFocus: (e) => {
          if (isFocusable === true) {
            focusRef.value = dragValue2;
          }
        },
        ...getDefaultMouseEventHandlers2("-time", (event) => {
          return { scope, event };
        })
      }, [
        slot && slot({ scope }),
        useFocusHelper()
      ]);
    }
    function __renderResource() {
      const { start, end, maxDays } = renderValues.value;
      if (startDate.value !== start.date || endDate.value !== end.date || maxDaysRendered.value !== maxDays) {
        startDate.value = start.date;
        endDate.value = end.date;
        maxDaysRendered.value = maxDays;
      }
      const hasWidth = size.width > 0;
      const resource = withDirectives(h("div", {
        class: "q-calendar-resource",
        key: startDate.value
      }, [
        hasWidth === true && __renderBody()
      ]), [[
        ResizeObserver$1,
        __onResize
      ]]);
      if (props.animated === true) {
        const transition = "q-calendar--" + (direction.value === "prev" ? props.transitionPrev : props.transitionNext);
        return h(Transition, {
          name: transition,
          appear: true
        }, () => resource);
      }
      return resource;
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent,
      timeStartPosX,
      timeDurationWidth,
      widthToMinutes,
      scrollToTimeX
    });
    return () => __renderCalendar();
  }
});
var QCalendarScheduler = defineComponent({
  name: "QCalendarScheduler",
  directives: [ResizeObserver$1],
  props: {
    ...useCommonProps,
    ...useSchedulerProps,
    ...useColumnProps,
    ...useMaxDaysProps,
    ...useTimesProps,
    ...useCellWidthProps,
    ...useNavigationProps
  },
  emits: [
    "update:model-value",
    "update:model-resources",
    "resource-expanded",
    ...useCheckChangeEmits,
    ...useMoveEmits,
    ...getRawMouseEvents("-date"),
    ...getRawMouseEvents("-day-resource"),
    ...getRawMouseEvents("-head-resources"),
    ...getRawMouseEvents("-head-day"),
    ...getRawMouseEvents("-resource")
  ],
  setup(props, { slots, emit, expose }) {
    const scrollArea = ref(null), pane = ref(null), headerColumnRef = ref(null), focusRef = ref(null), focusValue = ref(null), datesRef = ref({}), resourcesRef = ref({}), headDayEventsParentRef = ref({}), headDayEventsChildRef = ref({}), direction = ref("next"), startDate = ref(props.modelValue || today()), endDate = ref("0000-00-00"), maxDaysRendered = ref(0), emittedValue = ref(props.modelValue), size = reactive({ width: 0, height: 0 }), dragOverHeadDayRef = ref(false), dragOverResource2 = ref(false), lastStart = ref(null), lastEnd = ref(null);
    watch(() => props.view, () => {
      maxDaysRendered.value = 0;
    });
    const parsedView = computed(() => {
      if (props.view === "month") {
        return "month-interval";
      }
      return props.view;
    });
    const vm = getCurrentInstance();
    if (vm === null) {
      throw new Error("current instance is null");
    }
    const { emitListeners } = useEmitListeners(vm);
    const {
      isSticky
    } = useCellWidth(props);
    const {
      times,
      setCurrent,
      updateCurrent
    } = useTimes(props);
    updateCurrent();
    setCurrent();
    const {
      weekdaySkips,
      parsedStart,
      parsedEnd,
      dayFormatter,
      weekdayFormatter,
      ariaDateFormatter,
      dayStyleDefault,
      getRelativeClasses
    } = useCommon(props, { startDate, endDate, times });
    const parsedValue = computed(() => {
      return parseTimestamp(props.modelValue, times.now) || parsedStart.value || times.today;
    });
    focusValue.value = parsedValue.value;
    focusRef.value = parsedValue.value.date;
    const { renderValues } = useRenderValues(props, {
      parsedView,
      parsedValue,
      times
    });
    const {
      rootRef,
      scrollWidth,
      __initCalendar,
      __renderCalendar
    } = useCalendar(props, __renderScheduler, {
      scrollArea,
      pane
    });
    const {
      days,
      parsedCellWidth,
      styleDefault
    } = useInterval(props, {
      weekdaySkips,
      times,
      scrollArea,
      parsedStart,
      parsedEnd,
      maxDays: maxDaysRendered,
      size,
      headerColumnRef
    });
    const { move } = useMove(props, {
      parsedView,
      parsedValue,
      weekdaySkips,
      direction,
      maxDays: maxDaysRendered,
      times,
      emittedValue,
      emit
    });
    const {
      getDefaultMouseEventHandlers: getDefaultMouseEventHandlers2
    } = useMouse(emit, emitListeners);
    const {
      checkChange
    } = useCheckChange(emit, { days, lastStart, lastEnd });
    const {
      isKeyCode: isKeyCode2
    } = useEvents();
    const { tryFocus } = useKeyboard(props, {
      rootRef,
      focusRef,
      focusValue,
      datesRef,
      days,
      parsedView,
      parsedValue,
      emittedValue,
      weekdaySkips,
      direction,
      times
    });
    const parsedColumnCount = computed(() => {
      if (parsedView.value === "day" && parseInt(props.columnCount, 10) > 1) {
        return parseInt(props.columnCount, 10);
      } else if (parsedView.value === "day" && props.maxDays && props.maxDays > 1) {
        return props.maxDays;
      }
      return days.value.length;
    });
    const resourcesWidth = computed(() => {
      if (rootRef.value) {
        return parseInt(getComputedStyle(rootRef.value).getPropertyValue("--calendar-resources-width"), 10);
      }
      return 0;
    });
    const parsedResourceHeight = computed(() => {
      const height = parseInt(props.resourceHeight, 10);
      if (height === 0) {
        return "auto";
      }
      return height;
    });
    const parsedResourceMinHeight = computed(() => {
      return parseInt(props.resourceMinHeight, 10);
    });
    const computedWidth = computed(() => {
      if (rootRef.value) {
        const width = size.width || rootRef.value.getBoundingClientRect().width;
        if (width && resourcesWidth.value && parsedColumnCount.value) {
          return (width - scrollWidth.value - resourcesWidth.value) / parsedColumnCount.value + "px";
        }
      }
      return 100 / parsedColumnCount.value + "%";
    });
    watch([days], checkChange, { deep: true, immediate: true });
    watch(() => props.modelValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) {
          const v1 = getDayIdentifier(parsed(val));
          const v2 = getDayIdentifier(parsed(oldVal));
          direction.value = v1 >= v2 ? "next" : "prev";
        }
        emittedValue.value = val;
      }
      focusRef.value = val;
    });
    watch(emittedValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) {
          const v1 = getDayIdentifier(parsed(val));
          const v2 = getDayIdentifier(parsed(oldVal));
          direction.value = v1 >= v2 ? "next" : "prev";
        }
        emit("update:model-value", val);
      }
    });
    watch(focusRef, (val) => {
      if (val) {
        focusValue.value = parseTimestamp(val);
      }
    });
    watch(focusValue, (val) => {
      if (datesRef.value[focusRef.value]) {
        datesRef.value[focusRef.value].focus();
      } else {
        tryFocus();
      }
    });
    watch(() => props.maxDays, (val) => {
      maxDaysRendered.value = val;
    });
    onBeforeUpdate(() => {
      datesRef.value = {};
      headDayEventsParentRef.value = {};
      headDayEventsChildRef.value = {};
      resourcesRef.value = {};
    });
    onMounted(() => {
      __initCalendar();
    });
    function moveToToday() {
      emittedValue.value = today();
    }
    function next(amount = 1) {
      move(amount);
    }
    function prev(amount = 1) {
      move(-amount);
    }
    function __onResize({ width, height }) {
      size.width = width;
      size.height = height;
    }
    function __isActiveDate(day) {
      return day.date === emittedValue.value;
    }
    function __renderHead() {
      return h("div", {
        roll: "presentation",
        class: {
          "q-calendar-scheduler__head": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style: {
          marginRight: scrollWidth.value + "px"
        }
      }, [
        __renderHeadResources(),
        __renderHeadDaysColumn()
      ]);
    }
    function __renderHeadResources() {
      const slot = slots["head-resources"];
      const scope = {
        days: days.value,
        timestamps: days.value,
        date: props.modelValue,
        resources: props.modelResources
      };
      return h("div", {
        class: {
          "q-calendar-scheduler__head--resources": true,
          "q-calendar__sticky": isSticky.value === true
        },
        ...getDefaultMouseEventHandlers2("-head-resources", (event) => {
          return { scope, event };
        })
      }, [
        slot && slot({ scope })
      ]);
    }
    function __renderHeadDaysColumn() {
      return h("div", {
        ref: headerColumnRef,
        class: {
          "q-calendar-scheduler__head--days__column": true
        }
      }, [
        __renderHeadDaysRow(),
        __renderHeadDaysEventsRow()
      ]);
    }
    function __renderHeadDaysRow() {
      return h("div", {
        class: {
          "q-calendar-scheduler__head--days__weekdays": true
        }
      }, [
        ...__renderHeadDays()
      ]);
    }
    function __renderHeadDaysEventsRow() {
      const slot = slots["head-days-events"];
      nextTick(() => {
        if (headDayEventsChildRef.value && parseInt(props.columnCount, 10) === 0 && window) {
          try {
            const styles = window.getComputedStyle(headDayEventsChildRef.value);
            headDayEventsParentRef.value.parentElement.style.height = styles.height;
            headDayEventsParentRef.value.style.height = styles.height;
          } catch (e) {
          }
        }
      });
      return h("div", {
        class: {
          "q-calendar-scheduler__head--days__event": true
        }
      }, [
        slot && h("div", {
          ref: headDayEventsParentRef,
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            overflow: "hidden",
            zIndex: 1
          }
        }, [
          slot({ scope: {
            timestamps: days.value,
            days: days.value,
            ref: headDayEventsChildRef
          } })
        ]),
        ...__renderHeadDaysEvents()
      ]);
    }
    function __renderHeadDays() {
      if (days.value.length === 1 && parseInt(props.columnCount, 10) > 0) {
        return Array.apply(null, new Array(parseInt(props.columnCount, 10))).map((_, i) => i + parseInt(props.columnIndexStart, 10)).map((columnIndex) => __renderHeadDay(days.value[0], columnIndex));
      } else {
        return days.value.map((day) => __renderHeadDay(day));
      }
    }
    function __renderHeadDaysEvents() {
      if (days.value.length === 1 && parseInt(props.columnCount, 10) > 0) {
        return Array.apply(null, new Array(parseInt(props.columnCount, 10))).map((_, i) => i + parseInt(props.columnIndexStart, 10)).map((columnIndex) => __renderHeadDayEvent(days.value[0], columnIndex));
      } else {
        return days.value.map((day) => __renderHeadDayEvent(day));
      }
    }
    function __renderHeadDay(day, columnIndex) {
      const headDaySlot = slots["head-day"];
      const headDateSlot = slots["head-date"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = {
        timestamp: day,
        activeDate,
        droppable: dragOverHeadDayRef.value === day.date,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false
      };
      if (columnIndex !== void 0) {
        scope.columnIndex = columnIndex;
      }
      const width = isSticky.value === true ? convertToUnit(parsedCellWidth.value) : computedWidth.value;
      const styler = props.weekdayStyle || dayStyleDefault;
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...styler({ scope })
      };
      if (isSticky.value === true) {
        style.minWidth = width;
      }
      const weekdayClass = typeof props.weekdayClass === "function" ? props.weekdayClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("weekday");
      const key = day.date + (columnIndex !== void 0 ? "-" + columnIndex : "");
      const data = {
        key,
        ref: (el) => {
          datesRef.value[key] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-scheduler__head--day": true,
          ...weekdayClass,
          ...getRelativeClasses(day),
          "q-active-date": activeDate,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        onFocus: (e) => {
          if (isFocusable === true) {
            focusRef.value = key;
          }
        },
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            emittedValue.value = day.date;
          }
        },
        ...getDefaultMouseEventHandlers2("-head-day", (event) => {
          return { scope, event };
        }),
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        }
      };
      return h("div", data, [
        headDaySlot !== void 0 && headDaySlot({ scope }),
        headDaySlot === void 0 && __renderColumnHeaderBefore(day, columnIndex),
        headDaySlot === void 0 && __renderDateHeader(day),
        headDaySlot === void 0 && headDateSlot && headDateSlot({ scope }),
        headDaySlot === void 0 && __renderColumnHeaderAfter(day, columnIndex),
        useFocusHelper()
      ]);
    }
    function __renderDateHeader(day) {
      if (props.dateHeader === "stacked") {
        return [
          props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
          props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
        ];
      } else if (props.dateHeader === "inline") {
        if (props.weekdayAlign === "left" && props.dateAlign === "right") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
          ]);
        } else if (props.weekdayAlign === "right" && props.dateAlign === "left") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
          ]);
        } else {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
          ]);
        }
      } else if (props.dateHeader === "inverted") {
        if (props.weekdayAlign === "left" && props.dateAlign === "right") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day),
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day)
          ]);
        } else if (props.weekdayAlign === "right" && props.dateAlign === "left") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day),
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day)
          ]);
        } else {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day),
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day)
          ]);
        }
      }
    }
    function __renderHeadDayEvent(day, columnIndex) {
      const headDayEventSlot = slots["head-day-event"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = {
        timestamp: day,
        activeDate,
        droppable: dragOverHeadDayRef.value === day.date,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false
      };
      if (columnIndex !== void 0) {
        scope.columnIndex = columnIndex;
      }
      const width = isSticky.value === true ? convertToUnit(parsedCellWidth.value) : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        minWidth: width
      };
      if (isSticky.value === true) {
        style.minWidth = width;
      }
      return h("div", {
        key: "event-" + day.date + (columnIndex !== void 0 ? "-" + columnIndex : ""),
        class: {
          "q-calendar-scheduler__head--day__event": true,
          ...getRelativeClasses(day),
          "q-active-date": activeDate
        },
        style
      }, [
        headDayEventSlot && headDayEventSlot({ scope })
      ]);
    }
    function __renderHeadWeekday(day) {
      const slot = slots["head-weekday-label"];
      const shortWeekdayLabel = props.shortWeekdayLabel === true;
      const scope = { timestamp: day, shortWeekdayLabel };
      const data = {
        class: {
          "q-calendar-scheduler__head--weekday": true,
          ["q-calendar__" + props.weekdayAlign]: true,
          "q-calendar__ellipsis": true
        }
      };
      return h("div", data, slot && slot({ scope }) || __renderHeadWeekdayLabel(day, shortWeekdayLabel));
    }
    function __renderHeadWeekdayLabel(day, shortWeekdayLabel) {
      const weekdayLabel = weekdayFormatter.value(day, shortWeekdayLabel || props.weekdayBreakpoints[0] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[0]);
      return h("span", {
        class: "q-calendar-scheduler__head--weekday-label q-calendar__ellipsis"
      }, props.weekdayBreakpoints[1] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[1] ? minCharWidth(weekdayLabel, props.minWeekdayLabel) : weekdayLabel);
    }
    function __renderHeadDayDate(day) {
      const data = {
        class: {
          "q-calendar-scheduler__head--date": true,
          ["q-calendar__" + props.dateAlign]: true
        }
      };
      return h("div", data, __renderHeadDayBtn(day));
    }
    function __renderHeadDayBtn(day) {
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const dayLabel = dayFormatter.value(day, false);
      const headDayLabelSlot = slots["head-day-label"];
      const headDayButtonSlot = slots["head-day-button"];
      const scope = {
        dayLabel,
        timestamp: day,
        activeDate
      };
      const data = {
        class: {
          "q-calendar-scheduler__head--day__label": true,
          "q-calendar__button": true,
          "q-calendar__button--round": props.dateType === "round",
          "q-calendar__button--rounded": props.dateType === "rounded",
          "q-calendar__button--bordered": day.current === true,
          "q-calendar__focusable": true
        },
        disabled: day.disabled,
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            emittedValue.value = day.date;
            if (emitListeners.value.onClickDate !== void 0) {
              emit("click-date", { scope });
            }
          }
        },
        ...getDefaultMouseEventHandlers2("-date", (event, eventName) => {
          if (eventName === "click-date" || eventName === "contextmenu-date") {
            emittedValue.value = day.date;
            if (eventName === "click-date") {
              event.preventDefault();
            }
          }
          return { scope, event };
        })
      };
      if (props.noAria !== true) {
        data.ariaLabel = ariaDateFormatter.value(day);
      }
      return headDayButtonSlot ? headDayButtonSlot({ scope }) : useButton(props, data, headDayLabelSlot ? headDayLabelSlot({ scope }) : dayLabel);
    }
    function __renderColumnHeaderBefore(day, columnIndex) {
      const slot = slots["column-header-before"];
      if (slot) {
        const scope = { timestamp: day, columnIndex };
        return h("div", {
          class: "q-calendar-scheduler__column-header--before"
        }, [
          slot({ scope })
        ]);
      }
    }
    function __renderColumnHeaderAfter(day, columnIndex) {
      const slot = slots["column-header-after"];
      if (slot) {
        const scope = { timestamp: day, columnIndex };
        return h("div", {
          class: "q-calendar-scheduler__column-header--after"
        }, [
          slot({ scope })
        ]);
      }
    }
    function __renderBody() {
      return h("div", {
        class: "q-calendar-scheduler__body"
      }, [
        __renderScrollArea()
      ]);
    }
    function __renderScrollArea() {
      if (isSticky.value === true) {
        return h("div", {
          ref: scrollArea,
          class: {
            "q-calendar-scheduler__scroll-area": true,
            "q-calendar__scroll": true
          }
        }, [
          isSticky.value !== true && __renderDayResources(),
          __renderDayContainer()
        ]);
      } else if (props.noScroll === true) {
        return __renderPane();
      } else {
        return h("div", {
          ref: scrollArea,
          class: {
            "q-calendar-scheduler__scroll-area": true,
            "q-calendar__scroll": true
          }
        }, [
          __renderPane()
        ]);
      }
    }
    function __renderPane() {
      return h("div", {
        ref: pane,
        class: "q-calendar-scheduler__pane"
      }, [
        __renderDayContainer()
      ]);
    }
    function __renderDayContainer() {
      return h("div", {
        class: "q-calendar-scheduler__day--container"
      }, [
        isSticky.value === true && props.noHeader !== true && __renderHead(),
        __renderResources()
      ]);
    }
    function __renderResources(resources = void 0, indentLevel = 0, expanded = true) {
      if (resources === void 0) {
        resources = props.modelResources;
      }
      return resources.map((resource, resourceIndex) => {
        return __renderResourceRow(resource, resourceIndex, indentLevel, resource.children !== void 0 ? resource.expanded : expanded);
      });
    }
    function __renderResourceRow(resource, resourceIndex, indentLevel = 0, expanded = true) {
      const style = {};
      style.height = resource.height !== void 0 ? convertToUnit(parseInt(resource.height, 10)) : parsedResourceHeight.value ? convertToUnit(parsedResourceHeight.value) : "auto";
      if (parsedResourceMinHeight.value > 0) {
        style.minHeight = convertToUnit(parsedResourceMinHeight.value);
      }
      const resourceRow = h("div", {
        key: resource[props.resourceKey] + "-" + resourceIndex,
        class: {
          "q-calendar-scheduler__resource--row": true
        },
        style
      }, [
        __renderResource(resource, resourceIndex, indentLevel, expanded),
        __renderDayResources(resource, resourceIndex, indentLevel, expanded)
      ]);
      if (resource.children !== void 0) {
        return [
          resourceRow,
          h("div", {
            class: {
              "q-calendar__child": true,
              "q-calendar__child--expanded": expanded === true,
              "q-calendar__child--collapsed": expanded !== true
            }
          }, [
            __renderResources(resource.children, indentLevel + 1, expanded === false ? expanded : resource.expanded)
          ])
        ];
      }
      return [resourceRow];
    }
    function __renderResource(resource, resourceIndex, indentLevel = 0, expanded = true) {
      const slotResourceLabel = slots["resource-label"];
      const style = {};
      style.height = resource.height !== void 0 ? convertToUnit(parseInt(resource.height, 10)) : parsedResourceHeight.value ? convertToUnit(parsedResourceHeight.value) : "auto";
      if (parseInt(props.resourceMinHeight, 10) > 0) {
        style.minHeight = convertToUnit(parseInt(props.resourceMinHeight, 10));
      }
      const styler = props.resourceStyle || styleDefault;
      const label = resource[props.resourceLabel];
      const isFocusable = props.focusable === true && props.focusType.includes("resource") && expanded === true;
      const scope = {
        resource,
        timestamps: days.value,
        days: days.value,
        resourceIndex,
        indentLevel,
        label
      };
      const dragValue2 = resource[props.resourceKey];
      scope.droppable = dragOverResource2.value === dragValue2;
      const resourceClass = typeof props.resourceClass === "function" ? props.resourceClass({ scope }) : {};
      return h("div", {
        key: resource[props.resourceKey] + "-" + resourceIndex,
        ref: (el) => {
          resourcesRef.value[resource[props.resourceKey]] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-scheduler__resource": indentLevel === 0,
          "q-calendar-scheduler__resource--section": indentLevel !== 0,
          ...resourceClass,
          "q-calendar__sticky": isSticky.value === true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style: {
          ...style,
          ...styler({ scope })
        },
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "resource", scope) === true ? dragOverResource2.value = dragValue2 : dragOverResource2.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "resource", scope) === true ? dragOverResource2.value = dragValue2 : dragOverResource2.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "resource", scope) === true ? dragOverResource2.value = dragValue2 : dragOverResource2.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "resource", scope) === true ? dragOverResource2.value = dragValue2 : dragOverResource2.value = "";
          }
        },
        onKeydown: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            event.stopPropagation();
            event.preventDefault();
          }
        },
        onKeyup: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            if (emitListeners.value.onClickResource !== void 0) {
              emit("click-resource", { scope, event });
            }
          }
        },
        ...getDefaultMouseEventHandlers2("-resource", (event) => {
          return { scope, event };
        })
      }, [
        [
          h("div", {
            class: {
              "q-calendar__parent": resource.children !== void 0,
              "q-calendar__parent--expanded": resource.children !== void 0 && resource.expanded === true,
              "q-calendar__parent--collapsed": resource.children !== void 0 && resource.expanded !== true
            },
            onClick: (e) => {
              e.stopPropagation();
              resource.expanded = !resource.expanded;
              emit("resource-expanded", { expanded: resource.expanded, scope });
            }
          }),
          h("div", {
            class: {
              "q-calendar-scheduler__resource--text": true,
              "q-calendar__ellipsis": true
            },
            style: {
              paddingLeft: 10 * indentLevel + 2 + "px"
            }
          }, [
            slotResourceLabel ? slotResourceLabel({ scope }) : label
          ]),
          useFocusHelper()
        ]
      ]);
    }
    function __renderDayResources(resource, resourceIndex, indentLevel = 0, expanded = true) {
      const slot = slots["resource-days"];
      const width = isSticky.value === true ? convertToUnit(parsedCellWidth.value) : computedWidth.value;
      const scope = {
        resource,
        resourceIndex,
        indentLevel,
        expanded,
        cellWidth: width,
        timestamps: days.value,
        days: days.value
      };
      const style = {};
      style.height = parseInt(props.resourceHeight, 10) > 0 ? convertToUnit(parseInt(props.resourceHeight, 10)) : "auto";
      if (parseInt(props.resourceMinHeight, 10) > 0) {
        style.minHeight = convertToUnit(parseInt(props.resourceMinHeight, 10));
      }
      const data = {
        class: "q-calendar-scheduler__resource--days",
        style
      };
      return h(
        "div",
        data,
        [
          ...__renderDays(resource, resourceIndex, indentLevel, expanded),
          slot && slot({ scope })
        ]
      );
    }
    function __renderDays(resource, resourceIndex, indentLevel = 0, expanded = true) {
      if (days.value.length === 1 && parseInt(props.columnCount, 10) > 0) {
        return Array.apply(null, new Array(parseInt(props.columnCount, 10))).map((_, i) => i + parseInt(props.columnIndexStart, 10)).map((columnIndex) => __renderDay(days.value[0], columnIndex, resource, resourceIndex, indentLevel, expanded));
      } else {
        return days.value.map((day) => __renderDay(day, void 0, resource, resourceIndex, indentLevel, expanded));
      }
    }
    function __renderDay(day, columnIndex, resource, resourceIndex, indentLevel = 0, expanded = true) {
      const slot = slots.day;
      const styler = props.dayStyle || dayStyleDefault;
      const activeDate = props.noActiveDate !== true && parsedValue.value.date === day.date;
      const dragValue2 = day.date + ":" + resource[props.resourceKey] + (columnIndex !== void 0 ? ":" + columnIndex : "");
      const droppable = dragOverResource2.value === dragValue2;
      const scope = { timestamp: day, columnIndex, resource, resourceIndex, indentLevel, activeDate, droppable };
      const width = isSticky.value === true ? convertToUnit(parsedCellWidth.value) : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        ...styler({ scope })
      };
      style.height = parseInt(props.resourceHeight, 10) > 0 ? convertToUnit(parseInt(props.resourceHeight, 10)) : "auto";
      if (parseInt(props.resourceMinHeight, 10) > 0) {
        style.minHeight = convertToUnit(parseInt(props.resourceMinHeight, 10));
      }
      const dayClass = typeof props.dayClass === "function" ? props.dayClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("day") && expanded === true;
      return h("div", {
        key: day.date + (columnIndex !== void 0 ? ":" + columnIndex : ""),
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-scheduler__day": indentLevel === 0,
          "q-calendar-scheduler__day--section": indentLevel !== 0,
          ...dayClass,
          ...getRelativeClasses(day),
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "day", scope) === true ? dragOverResource2.value = dragValue2 : dragOverResource2.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "day", scope) === true ? dragOverResource2.value = dragValue2 : dragOverResource2.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "day", scope) === true ? dragOverResource2.value = dragValue2 : dragOverResource2.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "day", scope) === true ? dragOverResource2.value = dragValue2 : dragOverResource2.value = "";
          }
        },
        onKeydown: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            event.stopPropagation();
            event.preventDefault();
          }
        },
        onKeyup: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            emittedValue.value = scope.timestamp.date;
            if (emitListeners.value.onClickResource !== void 0) {
              emit("click-resource", { scope, event });
            }
          }
        },
        ...getDefaultMouseEventHandlers2("-day-resource", (event) => {
          return { scope, event };
        })
      }, [
        slot && slot({ scope }),
        useFocusHelper()
      ]);
    }
    function __renderResourcesError() {
      return h("div", {}, "No resources have been defined");
    }
    function __renderScheduler() {
      const { start, end, maxDays } = renderValues.value;
      if (startDate.value !== start.date || endDate.value !== end.date || maxDaysRendered.value !== maxDays) {
        startDate.value = start.date;
        endDate.value = end.date;
        maxDaysRendered.value = maxDays;
      }
      const hasWidth = size.width > 0;
      const hasResources = props.modelResources && props.modelResources.length > 0;
      const scheduler = withDirectives(h("div", {
        key: startDate.value,
        class: "q-calendar-scheduler"
      }, [
        hasWidth === true && hasResources === true && isSticky.value !== true && props.noHeader !== true && __renderHead(),
        hasWidth === true && hasResources === true && __renderBody(),
        hasResources === false && __renderResourcesError()
      ]), [[
        ResizeObserver$1,
        __onResize
      ]]);
      if (props.animated === true) {
        const transition = "q-calendar--" + (direction.value === "prev" ? props.transitionPrev : props.transitionNext);
        return h(Transition, {
          name: transition,
          appear: true
        }, () => scheduler);
      }
      return scheduler;
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent
    });
    return () => __renderCalendar();
  }
});
const useTaskProps = {
  modelValue: {
    type: String,
    default: today(),
    validator: (v) => v === "" || validateTimestamp(v)
  },
  modelTasks: {
    type: Array,
    default: []
  },
  modelTitle: {
    type: Array,
    default: []
  },
  modelFooter: {
    type: Array,
    default: []
  },
  taskKey: {
    type: [String, Number],
    default: "id"
  },
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  dateType: {
    type: String,
    default: "round",
    validator: (v) => ["round", "rounded", "square"].includes(v)
  },
  dateHeader: {
    type: String,
    default: "stacked",
    validator: (v) => ["stacked", "inline", "inverted"].includes(v)
  },
  weekdayAlign: {
    type: String,
    default: "center",
    validator: (v) => ["left", "center", "right"].includes(v)
  },
  dateAlign: {
    type: String,
    default: "center",
    validator: (v) => ["left", "center", "right"].includes(v)
  },
  view: {
    type: String,
    validator: (v) => ["day", "week", "month"].includes(v)
  },
  viewCount: {
    type: Number,
    default: 1,
    validator: (v) => validateNumber(v) && v > 0
  },
  bordered: Boolean,
  dark: Boolean,
  noAria: Boolean,
  noActiveDate: Boolean,
  shortWeekdayLabel: Boolean,
  noHeader: Boolean,
  noDefaultHeaderText: Boolean,
  noDefaultHeaderBtn: Boolean,
  cellWidth: [Number, String],
  minWeekdayLabel: {
    type: [Number, String],
    default: 2
  },
  weekdayBreakpoints: {
    type: Array,
    default: () => [75, 35],
    validator: (v) => v.length === 2
  },
  locale: {
    type: String,
    default: "en-US"
  },
  animated: Boolean,
  transitionPrev: {
    type: String,
    default: "slide-right"
  },
  transitionNext: {
    type: String,
    default: "slide-left"
  },
  disabledDays: Array,
  disabledBefore: String,
  disabledAfter: String,
  disabledWeekdays: {
    type: Array,
    default: () => []
  },
  weekdayClass: Function,
  dayClass: Function,
  footerDayClass: Function,
  dragEnterFunc: {
    type: Function
  },
  dragOverFunc: {
    type: Function
  },
  dragLeaveFunc: {
    type: Function
  },
  dropFunc: {
    type: Function
  },
  hoverable: Boolean,
  focusable: Boolean,
  focusType: {
    type: Array,
    default: ["date"],
    validator: (v) => {
      let val = true;
      v.forEach((type) => {
        if (["day", "date", "weekday", "interval", "resource", "task"].includes(type) !== true) {
          val = false;
        }
      });
      return val;
    }
  },
  taskWidth: {
    type: Number,
    default: 200,
    validator: (v) => validateNumber(v) && v > 0
  }
};
function useTask(props, emit, {
  weekdaySkips,
  times
}) {
  const parsedStartDate = computed(() => {
    if (props.view === "day") {
      return parseTimestamp(props.modelValue);
    } else if (props.view === "week") {
      return getStartOfWeek(parseTimestamp(props.modelValue), props.weekdays, times.today);
    } else if (props.view === "month") {
      return getStartOfMonth(parseTimestamp(props.modelValue), props.weekdays, times.today);
    } else {
      throw new Error(`QCalendarTask: unknown 'view' type (${props.view})`);
    }
  });
  const parsedEndDate = computed(() => {
    if (props.view === "day") {
      if (props.viewCount === 1) {
        return parsedStartDate.value;
      }
      let end = copyTimestamp(parsedStartDate.value);
      end = addToDate(end, { day: props.viewCount - 1 });
      return end;
    } else if (props.view === "week") {
      if (props.viewCount === 1) {
        return getEndOfWeek(parseTimestamp(props.modelValue), props.weekdays, times.today);
      } else {
        let end = copyTimestamp(parsedStartDate.value);
        end = addToDate(end, { day: (props.viewCount - 1) * DAYS_IN_WEEK });
        return getEndOfWeek(end, props.weekdays, times.today);
      }
    } else if (props.view === "month") {
      if (props.viewCount === 1) {
        return getEndOfMonth(parseTimestamp(props.modelValue), props.weekdays, times.today);
      } else {
        let end = copyTimestamp(parsedStartDate.value);
        end = addToDate(end, { month: props.viewCount });
        return getEndOfMonth(end, props.weekdays, times.today);
      }
    } else {
      throw new Error(`QCalendarTask: unknown 'view' type (${props.view})`);
    }
  });
  const days = computed(() => {
    return createDayList(
      parsedStartDate.value,
      parsedEndDate.value,
      times.today,
      weekdaySkips.value,
      props.disabledBefore,
      props.disabledAfter,
      props.disabledWeekdays,
      props.disabledDays,
      Number.MAX_SAFE_INTEGER
    );
  });
  return {
    days,
    parsedStartDate,
    parsedEndDate
  };
}
var QCalendarTask = defineComponent({
  name: "QCalendarTask",
  directives: [ResizeObserver$1],
  props: {
    ...useTimesProps,
    ...useNavigationProps,
    ...useTaskProps
  },
  emits: [
    "update:model-value",
    "update:model-tasks",
    "update:model-title",
    "update:model-footer",
    "task-expanded",
    ...useCheckChangeEmits,
    ...useMoveEmits,
    ...getRawMouseEvents("-date"),
    ...getRawMouseEvents("-day"),
    ...getRawMouseEvents("-head-day")
  ],
  setup(props, { slots, emit, expose }) {
    const scrollArea = ref(null), pane = ref(null), direction = ref("next"), startDate = ref(props.modelValue || today()), endDate = ref("0000-00-00"), maxDaysRendered = ref(0), emittedValue = ref(props.modelValue), focusRef = ref(null), focusValue = ref(null), datesRef = ref({}), size = reactive({ width: 0, height: 0 }), dragOverHeadDayRef = ref(false), lastStart = ref(null), lastEnd = ref(null);
    watch(() => props.view, () => {
      maxDaysRendered.value = 0;
    });
    const parsedView = computed(() => {
      if (props.view === "month") {
        return "month-interval";
      }
      return props.view;
    });
    const vm = getCurrentInstance();
    if (vm === null) {
      throw new Error("current instance is null");
    }
    const { emitListeners } = useEmitListeners(vm);
    const {
      times,
      setCurrent,
      updateCurrent
    } = useTimes(props);
    updateCurrent();
    setCurrent();
    const {
      weekdaySkips,
      parsedStart,
      dayFormatter,
      weekdayFormatter,
      ariaDateFormatter,
      dayStyleDefault,
      getRelativeClasses
    } = useCommon(props, { startDate, endDate, times });
    const parsedValue = computed(() => {
      return parseTimestamp(props.modelValue, times.now) || parsedStart.value || times.today;
    });
    focusValue.value = parsedValue.value;
    focusRef.value = parsedValue.value.date;
    const { renderValues } = useRenderValues(props, {
      parsedView,
      times,
      parsedValue
    });
    const {
      rootRef,
      __initCalendar,
      __renderCalendar
    } = useCalendar(props, __renderTask, {
      scrollArea,
      pane
    });
    const {
      days,
      parsedStartDate,
      parsedEndDate
    } = useTask(props, emit, {
      weekdaySkips,
      times
    });
    const { move } = useMove(props, {
      parsedView,
      parsedValue,
      weekdaySkips,
      direction,
      maxDays: maxDaysRendered,
      times,
      emittedValue,
      emit
    });
    const {
      getDefaultMouseEventHandlers: getDefaultMouseEventHandlers2
    } = useMouse(emit, emitListeners);
    const {
      checkChange
    } = useCheckChange(emit, { days, lastStart, lastEnd });
    const {
      isKeyCode: isKeyCode2
    } = useEvents();
    const { tryFocus } = useKeyboard(props, {
      rootRef,
      focusRef,
      focusValue,
      datesRef,
      days,
      parsedView,
      parsedValue,
      emittedValue,
      weekdaySkips,
      direction,
      times
    });
    const isSticky = ref(true);
    const parsedCellWidth = computed(() => {
      if (props.cellWidth !== void 0) {
        return parseInt(props.cellWidth, 10);
      }
      return 150;
    });
    const isDayFocusable = computed(() => {
      return props.focusable === true && props.focusType.includes("day") && isMiniMode.value !== true;
    });
    const isDateFocusable = computed(() => {
      return props.focusable === true && props.focusType.includes("date") && isDayFocusable.value !== true;
    });
    const isWeekdayFocusable = computed(() => {
      return props.focusable === true && props.focusType.includes("weekday");
    });
    const parsedHeight = computed(() => {
      return parseInt(props.dayHeight, 10);
    });
    const parsedMinHeight = computed(() => {
      return parseInt(props.dayMinHeight, 10);
    });
    watch([days], checkChange, { deep: true, immediate: true });
    watch(() => props.modelValue, (val, oldVal) => {
      if (emittedValue.value !== val) {
        if (props.animated === true) {
          const v1 = getDayIdentifier(parsed(val));
          const v2 = getDayIdentifier(parsed(oldVal));
          direction.value = v1 >= v2 ? "next" : "prev";
        }
        emittedValue.value = val;
      }
      focusRef.value = val;
    });
    watch(emittedValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) {
          const v1 = getDayIdentifier(parsed(val));
          const v2 = getDayIdentifier(parsed(oldVal));
          direction.value = v1 >= v2 ? "next" : "prev";
        }
        emit("update:model-value", val);
      }
    });
    watch(focusRef, (val) => {
      if (val) {
        focusValue.value = parseTimestamp(val);
      }
    });
    watch(focusValue, (val) => {
      if (datesRef.value[focusRef.value]) {
        datesRef.value[focusRef.value].focus();
      } else {
        tryFocus();
      }
    });
    onBeforeUpdate(() => {
      datesRef.value = {};
    });
    onMounted(() => {
      __initCalendar();
    });
    function moveToToday() {
      emittedValue.value = today();
    }
    function next(amount = 1) {
      move(amount);
    }
    function prev(amount = 1) {
      move(-amount);
    }
    function __onResize({ width, height }) {
      size.width = width;
      size.height = height;
    }
    function __isActiveDate(day) {
      return day.date === emittedValue.value;
    }
    function __renderTaskDay(day, task, taskIndex) {
      const slot = slots.day;
      const styler = props.dayStyle || dayStyleDefault;
      const activeDate = props.noActiveDate !== true && parsedValue.value.date === day.date;
      const scope = {
        timestamp: day,
        task,
        taskIndex,
        activeDate
      };
      const width = convertToUnit(parsedCellWidth.value);
      const style = {
        width,
        minWidth: width,
        maxWidth: width,
        ...styler({ scope })
      };
      const dayClass = typeof props.dayClass === "function" ? props.dayClass({ scope }) : {};
      return h("div", {
        tabindex: isDayFocusable.value === true ? 0 : -1,
        class: {
          "q-calendar-task__task--day": true,
          ...dayClass,
          ...getRelativeClasses(day),
          "q-active-date": activeDate === true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isDayFocusable.value === true
        },
        style,
        onFocus: (e) => {
          if (isDayFocusable.value === true)
            ;
        },
        ...getDefaultMouseEventHandlers2("-day", (event) => {
          return { scope, event };
        }),
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "day", scope) === true ? dragOverResource.value = dragValue : dragOverResource.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "day", scope) === true ? dragOverResource.value = dragValue : dragOverResource.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "day", scope) === true ? dragOverResource.value = dragValue : dragOverResource.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "day", scope) === true ? dragOverResource.value = dragValue : dragOverResource.value = "";
          }
        }
      }, [
        slot && slot({ scope }),
        useFocusHelper()
      ]);
    }
    function __renderTaskDays(task, taskIndex) {
      return days.value.map((day) => __renderTaskDay(day, task, taskIndex));
    }
    function __renderTaskDaysRow(task, taskIndex) {
      const slot = slots.days;
      const scope = {
        timestamps: days.value,
        days: days.value,
        task,
        taskIndex,
        cellWidth: parsedCellWidth.value
      };
      return h("div", {
        class: "q-calendar-task__task--days-row"
      }, [
        __renderTaskDays(task, taskIndex),
        slot && slot({ scope })
      ]);
    }
    function __renderTaskItem(task, taskIndex, indentLevel = 0, expanded = true) {
      const slot = slots.task;
      const scope = {
        start: parsedStartDate.value,
        end: parsedEndDate.value,
        task,
        taskIndex,
        expanded
      };
      const width = convertToUnit(props.taskWidth);
      const style = {
        width,
        minWidth: width,
        maxWidth: width
      };
      const isFocusable = props.focusable === true && props.focusType.includes("task");
      return h("div", {
        class: {
          "q-calendar-task__task--item": true,
          "q-calendar__sticky": isSticky.value === true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style
      }, [
        h("div", {
          style: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 10 + 10 * indentLevel + "px"
          }
        }, [
          h("div", {
            class: {
              "q-calendar__parent": task.children !== void 0,
              "q-calendar__parent--expanded": task.children !== void 0 && task.expanded === true,
              "q-calendar__parent--collapsed": task.children !== void 0 && task.expanded !== true
            },
            onClick: (e) => {
              e.stopPropagation();
              task.expanded = !task.expanded;
              emit("task-expanded", { expanded: task.expanded, scope });
            }
          })
        ]),
        slot && slot({ scope }),
        useFocusHelper()
      ]);
    }
    function __renderTaskRow(task, taskIndex, indentLevel = 0, expanded = true) {
      const height = task.height !== void 0 ? convertToUnit(parseInt(task.height, 10)) : parsedHeight.value > 0 ? convertToUnit(parsedHeight.value) : "auto";
      const minHeight = parsedMinHeight.value > 0 ? convertToUnit(parsedMinHeight.value) : void 0;
      const style = {
        height
      };
      if (minHeight !== void 0) {
        style.minHeight = minHeight;
      }
      const taskRow = h("div", {
        key: task[props.taskKey] + "-" + taskIndex,
        class: {
          "q-calendar-task__task": indentLevel === 0,
          "q-calendar-task__task--section": indentLevel !== 0
        },
        style
      }, [
        __renderTaskItem(task, taskIndex, indentLevel, expanded),
        __renderTaskDaysRow(task, taskIndex)
      ]);
      if (task.children !== void 0) {
        return [
          taskRow,
          h("div", {
            class: {
              "q-calendar__child": true,
              "q-calendar__child--expanded": expanded === true,
              "q-calendar__child--collapsed": expanded !== true
            }
          }, [
            __renderTasks(task.children, indentLevel + 1, expanded === false ? expanded : task.expanded)
          ])
        ];
      }
      return [taskRow];
    }
    function __renderTasks(tasks = void 0, indentLevel = 0, expanded = true) {
      if (tasks === void 0) {
        tasks = props.modelTasks;
      }
      return tasks.map((task, taskIndex) => {
        return __renderTaskRow(task, taskIndex, indentLevel, task.children !== void 0 ? task.expanded : expanded);
      });
    }
    function __renderTasksContainer() {
      return h("div", {
        class: {
          "q-calendar-task__task--container": true,
          "q-calendar__sticky": isSticky.value === true
        }
      }, [
        __renderTasks()
      ]);
    }
    function __renderFooterTask(task, index) {
      const slot = slots["footer-task"];
      const scope = {
        start: parsedStartDate.value,
        end: parsedEndDate.value,
        footer: task,
        index
      };
      const width = convertToUnit(props.taskWidth);
      const style = {
        width,
        minWidth: width,
        maxWidth: width
      };
      return h("div", {
        class: {
          "q-calendar-task__footer--task": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style
      }, [
        slot && slot({ scope })
      ]);
    }
    function __renderFooterDay(day, task, index) {
      const slot = slots["footer-day"];
      const scope = {
        timestamp: day,
        footer: task,
        index
      };
      const width = convertToUnit(parsedCellWidth.value);
      const style = {
        width,
        minWidth: width,
        maxWidth: width
      };
      const footerDayClass = typeof props.footerDayClass === "function" ? props.footerDayClass({ scope }) : {};
      return h("div", {
        class: {
          "q-calendar-task__footer--day": true,
          ...footerDayClass,
          ...getRelativeClasses(day),
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isDayFocusable.value === true
        },
        style
      }, [
        slot && slot({ scope })
      ]);
    }
    function __renderFooterDays(task, index) {
      return h("div", {
        class: "q-calendar-task__footer--day-wrapper"
      }, [
        days.value.map((day) => __renderFooterDay(day, task, index))
      ]);
    }
    function __renderFooterRows() {
      const isFocusable = props.focusable === true && props.focusType.includes("task");
      return props.modelFooter.map((task, index) => {
        return h("div", {
          class: {
            "q-calendar-task__footer--wrapper": true,
            "q-calendar__hoverable": props.hoverable === true,
            "q-calendar__focusable": isFocusable === true
          }
        }, {
          default: () => [
            __renderFooterTask(task, index),
            __renderFooterDays(task, index)
          ]
        });
      });
    }
    function __renderFooter() {
      return h("div", {
        class: {
          "q-calendar-task__footer": true,
          "q-calendar__sticky": isSticky.value === true
        }
      }, __renderFooterRows());
    }
    function __renderContainer() {
      return h("div", {
        class: {
          "q-calendar-task__container": true
        }
      }, [
        props.noHeader !== true && __renderHead(),
        __renderTasksContainer(),
        __renderFooter()
      ]);
    }
    function __renderHeadTask() {
      const slot = slots["head-tasks"];
      const scope = {
        start: parsedStartDate.value,
        end: parsedEndDate.value
      };
      const width = convertToUnit(parseInt(props.taskWidth, 10));
      const style = {
        width,
        minWidth: width,
        maxWidth: width
      };
      return h("div", {
        class: {
          "q-calendar-task__head--tasks": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style
      }, [
        slot && slot({ scope })
      ]);
    }
    function __renderTitleTask(title, index) {
      const slot = slots["title-task"];
      const width = convertToUnit(parseInt(props.taskWidth, 10));
      const style = {
        width,
        minWidth: width,
        maxWidth: width
      };
      const scope = {
        start: parsedStartDate.value,
        end: parsedEndDate.value,
        cellWidth: width,
        title,
        index
      };
      return h("div", {
        class: {
          "q-calendar-task__title--task": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style
      }, [
        slot && slot({ scope })
      ]);
    }
    function __renderHeadWeekday(day) {
      const slot = slots["head-weekday-label"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = {
        activeDate,
        timestamp: day,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false
      };
      const data = {
        class: {
          "q-calendar-task__head--weekday": true,
          ["q-calendar__" + props.weekdayAlign]: true,
          "q-calendar__ellipsis": true
        }
      };
      return h("div", data, slot && slot({ scope }) || __renderHeadWeekdayLabel(day, props.shortWeekdayLabel));
    }
    function __renderHeadWeekdayLabel(day, shortWeekdayLabel) {
      const weekdayLabel = weekdayFormatter.value(day, shortWeekdayLabel || props.weekdayBreakpoints[0] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[0]);
      return h("span", {
        class: "q-calendar__ellipsis"
      }, props.weekdayBreakpoints[1] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[1] ? minCharWidth(weekdayLabel, props.minWeekdayLabel) : weekdayLabel);
    }
    function __renderHeadDayDate(day) {
      const data = {
        class: {
          "q-calendar-task__head--date": true,
          ["q-calendar__" + props.dateAlign]: true
        }
      };
      return h("div", data, __renderHeadDayBtn(day));
    }
    function __renderHeadDayBtn(day) {
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const dayLabel = dayFormatter.value(day, false);
      const headDayLabelSlot = slots["head-day-label"];
      const headDayButtonSlot = slots["head-day-button"];
      const scope = { dayLabel, timestamp: day, activeDate };
      const key = day.date;
      const data = {
        key,
        tabindex: isDateFocusable.value === true ? 0 : -1,
        class: {
          "q-calendar-task__head--day__label": true,
          "q-calendar__button": true,
          "q-calendar__button--round": props.dateType === "round",
          "q-calendar__button--rounded": props.dateType === "rounded",
          "q-calendar__button--bordered": day.current === true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isDateFocusable.value === true
        },
        disabled: day.disabled,
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            emittedValue.value = day.date;
            if (emitListeners.value.onClickDate !== void 0) {
              emit("click-date", { scope });
            }
          }
        },
        ...getDefaultMouseEventHandlers2("-date", (event, eventName) => {
          if (eventName === "click-date" || eventName === "contextmenu-date") {
            emittedValue.value = day.date;
            if (eventName === "click-date") {
              event.preventDefault();
            }
          }
          return { scope, event };
        })
      };
      if (props.noAria !== true) {
        data.ariaLabel = ariaDateFormatter.value(day);
      }
      return headDayButtonSlot ? headDayButtonSlot({ scope }) : useButton(props, data, headDayLabelSlot ? headDayLabelSlot({ scope }) : dayLabel);
    }
    function __renderDateHeader(day) {
      if (props.dateHeader === "stacked") {
        return [
          props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
          props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
        ];
      } else if (props.dateHeader === "inline") {
        if (props.weekdayAlign === "left" && props.dateAlign === "right") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
          ]);
        } else if (props.weekdayAlign === "right" && props.dateAlign === "left") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
          ]);
        } else {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day),
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)
          ]);
        }
      } else if (props.dateHeader === "inverted") {
        if (props.weekdayAlign === "left" && props.dateAlign === "right") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day),
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day)
          ]);
        } else if (props.weekdayAlign === "right" && props.dateAlign === "left") {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day),
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day)
          ]);
        } else {
          return h("div", {
            class: "q-calendar__header--inline"
          }, [
            props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day),
            props.noDefaultHeaderText !== true && __renderHeadWeekday(day)
          ]);
        }
      }
    }
    function __renderTitleDay(day, title, index) {
      const slot = slots["title-day"];
      const width = convertToUnit(parsedCellWidth.value);
      const style = {
        width,
        minWidth: width,
        maxWidth: width
      };
      const scope = {
        timestamp: day,
        title,
        index,
        cellWidth: parsedCellWidth.value
      };
      const dayClass = typeof props.dayClass === "function" ? props.dayClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("day");
      return h("div", {
        class: {
          "q-calendar-task__title--day": true,
          ...dayClass,
          ...getRelativeClasses(day),
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style
      }, [
        slot && slot({ scope }),
        useFocusHelper()
      ]);
    }
    function __renderHeadDay(day) {
      const headDaySlot = slots["head-day"];
      const headDateSlot = slots["head-date"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = {
        timestamp: day,
        activeDate,
        droppable: dragOverHeadDayRef.value = day.date,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(day.weekday) : false
      };
      const styler = props.weekdayStyle || dayStyleDefault;
      const weekdayClass = typeof props.weekdayClass === "function" ? props.weekdayClass({ scope }) : {};
      const width = convertToUnit(parsedCellWidth.value);
      const style = {
        width,
        minWidth: width,
        maxWidth: width,
        ...styler({ scope })
      };
      const key = day.date;
      const data = {
        key,
        ref: (el) => {
          datesRef.value[key] = el;
        },
        tabindex: isWeekdayFocusable.value === true ? 0 : -1,
        class: {
          "q-calendar-task__head--day": true,
          ...weekdayClass,
          ...getRelativeClasses(day),
          "q-active-date": activeDate,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isWeekdayFocusable.value === true
        },
        style,
        onFocus: (e) => {
          if (isWeekdayFocusable.value === true) {
            focusRef.value = key;
          }
        },
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            emittedValue.value = day.date;
          }
        },
        ...getDefaultMouseEventHandlers2("-head-day", (event) => {
          return { scope, event };
        }),
        onDragenter: (e) => {
          if (props.dragEnterFunc !== void 0 && typeof props.dragEnterFunc === "function") {
            props.dragEnterFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onDragover: (e) => {
          if (props.dragOverFunc !== void 0 && typeof props.dragOverFunc === "function") {
            props.dragOverFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onDragleave: (e) => {
          if (props.dragLeaveFunc !== void 0 && typeof props.dragLeaveFunc === "function") {
            props.dragLeaveFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        },
        onDrop: (e) => {
          if (props.dropFunc !== void 0 && typeof props.dropFunc === "function") {
            props.dropFunc(e, "head-day", scope) === true ? dragOverHeadDayRef.value = day.date : dragOverHeadDayRef.value = "";
          }
        }
      };
      return h("div", data, [
        headDaySlot !== void 0 && headDaySlot({ scope }),
        headDaySlot === void 0 && __renderDateHeader(day),
        headDaySlot === void 0 && headDateSlot && headDateSlot({ scope }),
        useFocusHelper()
      ]);
    }
    function __renderHeadDays() {
      return days.value.map((day) => __renderHeadDay(day));
    }
    function __renderTitleDays(title, index) {
      return days.value.map((day) => __renderTitleDay(day, title, index));
    }
    function __renderHeadDaysRow() {
      return h("div", {
        class: {
          "q-calendar-task__head--days": true
        }
      }, [
        ...__renderHeadDays()
      ]);
    }
    function __renderTitleDaysRow(title, index) {
      return h("div", {
        class: {
          "q-calendar-task__title--days": true
        }
      }, [
        ...__renderTitleDays(title, index)
      ]);
    }
    function __renderHead() {
      return h("div", {
        roll: "presentation",
        class: {
          "q-calendar-task__head": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style: {}
      }, [
        h("div", {
          style: {
            position: "relative",
            display: "flex"
          }
        }, [
          __renderHeadTask(),
          __renderHeadDaysRow()
        ]),
        props.modelTitle.map((title, index) => h("div", {
          class: "q-calendar-task__title",
          style: {
            position: "relative",
            display: "flex"
          }
        }, [
          __renderTitleTask(title, index),
          __renderTitleDaysRow(title, index)
        ]))
      ]);
    }
    function __renderBody() {
      return h("div", {
        class: "q-calendar-task__body"
      }, [
        __renderScrollArea()
      ]);
    }
    function __renderScrollArea() {
      return h("div", {
        ref: scrollArea,
        class: {
          "q-calendar-task__scroll-area": true,
          "q-calendar__scroll": true
        }
      }, [
        __renderContainer()
      ]);
    }
    function __renderTask() {
      const { start, end } = renderValues.value;
      startDate.value = start.date;
      endDate.value = end.date;
      const hasWidth = size.width > 0;
      const weekly = withDirectives(h("div", {
        key: startDate.value,
        class: "q-calendar-task"
      }, [
        hasWidth === true && __renderBody()
      ]), [[
        ResizeObserver$1,
        __onResize
      ]]);
      if (props.animated === true) {
        const transition = "q-calendar--" + (direction.value === "prev" ? props.transitionPrev : props.transitionNext);
        return h(Transition, {
          name: transition,
          appear: true
        }, () => weekly);
      }
      return weekly;
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent
    });
    return () => __renderCalendar();
  }
});
var QCalendar = defineComponent({
  name: "QCalendar",
  props: {
    mode: {
      type: String,
      validator: (v) => ["day", "month", "agenda", "resource", "scheduler", "task"].includes(v),
      default: "day"
    },
    ...useCommonProps,
    ...useMonthProps,
    ...useTimesProps,
    ...useCellWidthProps,
    ...useNavigationProps,
    ...useIntervalProps,
    ...useSchedulerProps,
    ...useResourceProps,
    ...useMaxDaysProps,
    ...useTaskProps
  },
  setup(props, { attrs, slots, expose }) {
    const calendar = ref(null);
    const component = computed(() => {
      switch (props.mode) {
        case "agenda":
          return QCalendarAgenda;
        case "resource":
          return QCalendarResource;
        case "scheduler":
          return QCalendarScheduler;
        case "month":
          return QCalendarMonth;
        case "day":
          return QCalendarDay;
        case "task":
          return QCalendarTask;
        case "day":
        default:
          return QCalendarDay;
      }
    });
    function moveToToday() {
      calendar.value.moveToToday();
    }
    function move(amount = -1) {
      calendar.value.move(amount);
    }
    function next(amount = 1) {
      calendar.value.next(amount);
    }
    function prev(amount = 1) {
      calendar.value.prev(amount);
    }
    function updateCurrent() {
      calendar.value.updateCurrent();
    }
    function timeStartPos(time, clamp = true) {
      return calendar.value.timeStartPos(time, clamp);
    }
    function timeStartPosX(time, clamp = true) {
      return calendar.value.timeStartPosX(time, clamp);
    }
    function timeDurationWidth(minutes2) {
      return calendar.value.timeDurationWidth(minutes2);
    }
    function timeDurationHeight(minutes2) {
      return calendar.value.timeDurationHeight(minutes2);
    }
    function heightToMinutes(height) {
      return calendar.value.heightToMinutes(height);
    }
    function widthToMinutes(width) {
      return calendar.value.widthToMinutes(minutes);
    }
    function scrollToTime(time) {
      return calendar.value.scrollToTime(time);
    }
    function scrollToTimeX(time) {
      return calendar.value.scrollToTimeX(time);
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent,
      timeStartPos,
      timeStartPosX,
      timeDurationWidth,
      timeDurationHeight,
      heightToMinutes,
      widthToMinutes,
      scrollToTime,
      scrollToTimeX
    });
    return () => h(component.value, { ref: calendar, ...props, ...attrs }, slots);
  }
});
const version = "4.0.0-beta.16";
var Plugin = {
  version,
  QCalendar,
  QCalendarAgenda,
  QCalendarDay,
  QCalendarMonth,
  QCalendarResource,
  QCalendarScheduler,
  QCalendarTask,
  PARSE_REGEX,
  PARSE_DATE,
  PARSE_TIME,
  DAYS_IN_MONTH,
  DAYS_IN_MONTH_LEAP,
  DAYS_IN_MONTH_MIN,
  DAYS_IN_MONTH_MAX,
  MONTH_MAX,
  MONTH_MIN,
  DAY_MIN,
  DAYS_IN_WEEK,
  MINUTES_IN_HOUR,
  HOURS_IN_DAY,
  FIRST_HOUR,
  MILLISECONDS_IN_MINUTE,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_DAY,
  MILLISECONDS_IN_WEEK,
  Timestamp,
  TimeObject,
  today,
  getStartOfWeek,
  getEndOfWeek,
  getStartOfMonth,
  getEndOfMonth,
  parseTime,
  validateTimestamp,
  parsed,
  parseTimestamp,
  parseDate,
  getDayIdentifier,
  getTimeIdentifier,
  getDayTimeIdentifier,
  diffTimestamp,
  updateRelative,
  updateMinutes,
  updateWeekday,
  updateDayOfYear,
  updateWorkWeek,
  updateDisabled,
  updateFormatted,
  getDayOfYear,
  getWorkWeek,
  getWeekday,
  isLeapYear,
  daysInMonth,
  copyTimestamp,
  padNumber,
  getDate,
  getTime,
  getDateTime,
  nextDay,
  prevDay,
  moveRelativeDays,
  relativeDays,
  findWeekday,
  getWeekdaySkips,
  createDayList,
  createIntervalList,
  createNativeLocaleFormatter,
  makeDate,
  makeDateTime,
  validateNumber,
  maxTimestamp,
  minTimestamp,
  isBetweenDates,
  isOverlappingDates,
  daysBetween,
  weeksBetween,
  addToDate,
  compareTimestamps,
  compareDate,
  compareTime,
  compareDateTime,
  getWeekdayFormatter,
  getWeekdayNames,
  getMonthFormatter,
  getMonthNames,
  convertToUnit,
  indexOf,
  install(app, options) {
    app.component(QCalendar.name, QCalendar);
    app.component(QCalendarAgenda.name, QCalendarAgenda);
    app.component(QCalendarDay.name, QCalendarDay);
    app.component(QCalendarMonth.name, QCalendarMonth);
    app.component(QCalendarResource.name, QCalendarResource);
    app.component(QCalendarScheduler.name, QCalendarScheduler);
    app.component(QCalendarTask.name, QCalendarTask);
  }
};
export { Plugin as P, QCalendarMonth as Q, today as t };
