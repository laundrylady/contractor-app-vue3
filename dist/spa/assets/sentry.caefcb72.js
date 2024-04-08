import { b as boot } from "./index.e01fb56c.js";
const objectToString = Object.prototype.toString;
function isError(wat) {
  switch (objectToString.call(wat)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return true;
    default:
      return isInstanceOf(wat, Error);
  }
}
function isBuiltin(wat, className) {
  return objectToString.call(wat) === `[object ${className}]`;
}
function isErrorEvent$1(wat) {
  return isBuiltin(wat, "ErrorEvent");
}
function isDOMError(wat) {
  return isBuiltin(wat, "DOMError");
}
function isDOMException(wat) {
  return isBuiltin(wat, "DOMException");
}
function isString(wat) {
  return isBuiltin(wat, "String");
}
function isPrimitive(wat) {
  return wat === null || typeof wat !== "object" && typeof wat !== "function";
}
function isPlainObject(wat) {
  return isBuiltin(wat, "Object");
}
function isEvent(wat) {
  return typeof Event !== "undefined" && isInstanceOf(wat, Event);
}
function isElement(wat) {
  return typeof Element !== "undefined" && isInstanceOf(wat, Element);
}
function isRegExp(wat) {
  return isBuiltin(wat, "RegExp");
}
function isThenable(wat) {
  return Boolean(wat && wat.then && typeof wat.then === "function");
}
function isSyntheticEvent(wat) {
  return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
}
function isNaN$1(wat) {
  return typeof wat === "number" && wat !== wat;
}
function isInstanceOf(wat, base) {
  try {
    return wat instanceof base;
  } catch (_e) {
    return false;
  }
}
function isGlobalObj(obj) {
  return obj && obj.Math == Math ? obj : void 0;
}
const GLOBAL_OBJ = typeof globalThis == "object" && isGlobalObj(globalThis) || typeof window == "object" && isGlobalObj(window) || typeof self == "object" && isGlobalObj(self) || typeof global == "object" && isGlobalObj(global) || function() {
  return this;
}() || {};
function getGlobalObject() {
  return GLOBAL_OBJ;
}
function getGlobalSingleton(name, creator, obj) {
  const gbl = obj || GLOBAL_OBJ;
  const __SENTRY__ = gbl.__SENTRY__ = gbl.__SENTRY__ || {};
  const singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
  return singleton;
}
const WINDOW$5 = getGlobalObject();
const DEFAULT_MAX_STRING_LENGTH = 80;
function htmlTreeAsString(elem, options = {}) {
  try {
    let currentElem = elem;
    const MAX_TRAVERSE_HEIGHT = 5;
    const out = [];
    let height = 0;
    let len = 0;
    const separator = " > ";
    const sepLength = separator.length;
    let nextStr;
    const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
    const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
    while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
      nextStr = _htmlElementAsString(currentElem, keyAttrs);
      if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) {
        break;
      }
      out.push(nextStr);
      len += nextStr.length;
      currentElem = currentElem.parentNode;
    }
    return out.reverse().join(separator);
  } catch (_oO) {
    return "<unknown>";
  }
}
function _htmlElementAsString(el, keyAttrs) {
  const elem = el;
  const out = [];
  let className;
  let classes;
  let key;
  let attr;
  let i;
  if (!elem || !elem.tagName) {
    return "";
  }
  out.push(elem.tagName.toLowerCase());
  const keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter((keyAttr) => elem.getAttribute(keyAttr)).map((keyAttr) => [keyAttr, elem.getAttribute(keyAttr)]) : null;
  if (keyAttrPairs && keyAttrPairs.length) {
    keyAttrPairs.forEach((keyAttrPair) => {
      out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
    });
  } else {
    if (elem.id) {
      out.push(`#${elem.id}`);
    }
    className = elem.className;
    if (className && isString(className)) {
      classes = className.split(/\s+/);
      for (i = 0; i < classes.length; i++) {
        out.push(`.${classes[i]}`);
      }
    }
  }
  const allowedAttrs = ["aria-label", "type", "name", "title", "alt"];
  for (i = 0; i < allowedAttrs.length; i++) {
    key = allowedAttrs[i];
    attr = elem.getAttribute(key);
    if (attr) {
      out.push(`[${key}="${attr}"]`);
    }
  }
  return out.join("");
}
function getLocationHref() {
  try {
    return WINDOW$5.document.location.href;
  } catch (oO) {
    return "";
  }
}
function getDomElement(selector) {
  if (WINDOW$5.document && WINDOW$5.document.querySelector) {
    return WINDOW$5.document.querySelector(selector);
  }
  return null;
}
class SentryError extends Error {
  constructor(message, logLevel = "warn") {
    super(message);
    this.message = message;
    this.name = new.target.prototype.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
    this.logLevel = logLevel;
  }
}
const DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
  return protocol === "http" || protocol === "https";
}
function dsnToString(dsn, withPassword = false) {
  const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
  return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
}
function dsnFromString(str) {
  const match = DSN_REGEX.exec(str);
  if (!match) {
    throw new SentryError(`Invalid Sentry Dsn: ${str}`);
  }
  const [protocol, publicKey, pass = "", host, port = "", lastPath] = match.slice(1);
  let path = "";
  let projectId = lastPath;
  const split = projectId.split("/");
  if (split.length > 1) {
    path = split.slice(0, -1).join("/");
    projectId = split.pop();
  }
  if (projectId) {
    const projectMatch = projectId.match(/^\d+/);
    if (projectMatch) {
      projectId = projectMatch[0];
    }
  }
  return dsnFromComponents({ host, pass, path, projectId, port, protocol, publicKey });
}
function dsnFromComponents(components) {
  return {
    protocol: components.protocol,
    publicKey: components.publicKey || "",
    pass: components.pass || "",
    host: components.host,
    port: components.port || "",
    path: components.path || "",
    projectId: components.projectId
  };
}
function validateDsn(dsn) {
  if (!(typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__)) {
    return;
  }
  const { port, projectId, protocol } = dsn;
  const requiredComponents = ["protocol", "publicKey", "host", "projectId"];
  requiredComponents.forEach((component) => {
    if (!dsn[component]) {
      throw new SentryError(`Invalid Sentry Dsn: ${component} missing`);
    }
  });
  if (!projectId.match(/^\d+$/)) {
    throw new SentryError(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
  }
  if (!isValidProtocol(protocol)) {
    throw new SentryError(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
  }
  if (port && isNaN(parseInt(port, 10))) {
    throw new SentryError(`Invalid Sentry Dsn: Invalid port ${port}`);
  }
  return true;
}
function makeDsn(from) {
  const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
  validateDsn(components);
  return components;
}
const PREFIX = "Sentry Logger ";
const CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"];
function consoleSandbox(callback) {
  if (!("console" in GLOBAL_OBJ)) {
    return callback();
  }
  const originalConsole = GLOBAL_OBJ.console;
  const wrappedLevels = {};
  CONSOLE_LEVELS.forEach((level) => {
    const originalWrappedFunc = originalConsole[level] && originalConsole[level].__sentry_original__;
    if (level in originalConsole && originalWrappedFunc) {
      wrappedLevels[level] = originalConsole[level];
      originalConsole[level] = originalWrappedFunc;
    }
  });
  try {
    return callback();
  } finally {
    Object.keys(wrappedLevels).forEach((level) => {
      originalConsole[level] = wrappedLevels[level];
    });
  }
}
function makeLogger() {
  let enabled = false;
  const logger2 = {
    enable: () => {
      enabled = true;
    },
    disable: () => {
      enabled = false;
    }
  };
  if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
    CONSOLE_LEVELS.forEach((name) => {
      logger2[name] = (...args) => {
        if (enabled) {
          consoleSandbox(() => {
            GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
          });
        }
      };
    });
  } else {
    CONSOLE_LEVELS.forEach((name) => {
      logger2[name] = () => void 0;
    });
  }
  return logger2;
}
let logger;
if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
  logger = getGlobalSingleton("logger", makeLogger);
} else {
  logger = makeLogger();
}
function truncate(str, max = 0) {
  if (typeof str !== "string" || max === 0) {
    return str;
  }
  return str.length <= max ? str : `${str.slice(0, max)}...`;
}
function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return "";
  }
  const output = [];
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    try {
      output.push(String(value));
    } catch (e) {
      output.push("[value cannot be serialized]");
    }
  }
  return output.join(delimiter);
}
function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
  if (!isString(value)) {
    return false;
  }
  if (isRegExp(pattern)) {
    return pattern.test(value);
  }
  if (isString(pattern)) {
    return requireExactStringMatch ? value === pattern : value.includes(pattern);
  }
  return false;
}
function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
  return patterns.some((pattern) => isMatchingPattern(testString, pattern, requireExactStringMatch));
}
function fill(source, name, replacementFactory) {
  if (!(name in source)) {
    return;
  }
  const original = source[name];
  const wrapped = replacementFactory(original);
  if (typeof wrapped === "function") {
    try {
      markFunctionWrapped(wrapped, original);
    } catch (_Oo) {
    }
  }
  source[name] = wrapped;
}
function addNonEnumerableProperty(obj, name, value) {
  Object.defineProperty(obj, name, {
    value,
    writable: true,
    configurable: true
  });
}
function markFunctionWrapped(wrapped, original) {
  const proto = original.prototype || {};
  wrapped.prototype = original.prototype = proto;
  addNonEnumerableProperty(wrapped, "__sentry_original__", original);
}
function getOriginalFunction(func) {
  return func.__sentry_original__;
}
function urlEncode(object) {
  return Object.keys(object).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`).join("&");
}
function convertToPlainObject(value) {
  if (isError(value)) {
    return {
      message: value.message,
      name: value.name,
      stack: value.stack,
      ...getOwnProperties(value)
    };
  } else if (isEvent(value)) {
    const newObj = {
      type: value.type,
      target: serializeEventTarget(value.target),
      currentTarget: serializeEventTarget(value.currentTarget),
      ...getOwnProperties(value)
    };
    if (typeof CustomEvent !== "undefined" && isInstanceOf(value, CustomEvent)) {
      newObj.detail = value.detail;
    }
    return newObj;
  } else {
    return value;
  }
}
function serializeEventTarget(target) {
  try {
    return isElement(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
  } catch (_oO) {
    return "<unknown>";
  }
}
function getOwnProperties(obj) {
  if (typeof obj === "object" && obj !== null) {
    const extractedProps = {};
    for (const property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        extractedProps[property] = obj[property];
      }
    }
    return extractedProps;
  } else {
    return {};
  }
}
function extractExceptionKeysForMessage(exception, maxLength = 40) {
  const keys = Object.keys(convertToPlainObject(exception));
  keys.sort();
  if (!keys.length) {
    return "[object has no keys]";
  }
  if (keys[0].length >= maxLength) {
    return truncate(keys[0], maxLength);
  }
  for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
    const serialized = keys.slice(0, includedKeys).join(", ");
    if (serialized.length > maxLength) {
      continue;
    }
    if (includedKeys === keys.length) {
      return serialized;
    }
    return truncate(serialized, maxLength);
  }
  return "";
}
function dropUndefinedKeys(inputValue) {
  const memoizationMap = /* @__PURE__ */ new Map();
  return _dropUndefinedKeys(inputValue, memoizationMap);
}
function _dropUndefinedKeys(inputValue, memoizationMap) {
  if (isPlainObject(inputValue)) {
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== void 0) {
      return memoVal;
    }
    const returnValue = {};
    memoizationMap.set(inputValue, returnValue);
    for (const key of Object.keys(inputValue)) {
      if (typeof inputValue[key] !== "undefined") {
        returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
      }
    }
    return returnValue;
  }
  if (Array.isArray(inputValue)) {
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== void 0) {
      return memoVal;
    }
    const returnValue = [];
    memoizationMap.set(inputValue, returnValue);
    inputValue.forEach((item) => {
      returnValue.push(_dropUndefinedKeys(item, memoizationMap));
    });
    return returnValue;
  }
  return inputValue;
}
const STACKTRACE_FRAME_LIMIT = 50;
const WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
function createStackParser(...parsers) {
  const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map((p) => p[1]);
  return (stack, skipFirst = 0) => {
    const frames = [];
    const lines = stack.split("\n");
    for (let i = skipFirst; i < lines.length; i++) {
      const line = lines[i];
      if (line.length > 1024) {
        continue;
      }
      const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
      for (const parser of sortedParsers) {
        const frame = parser(cleanedLine);
        if (frame) {
          frames.push(frame);
          break;
        }
      }
      if (frames.length >= STACKTRACE_FRAME_LIMIT) {
        break;
      }
    }
    return stripSentryFramesAndReverse(frames);
  };
}
function stackParserFromStackParserOptions(stackParser) {
  if (Array.isArray(stackParser)) {
    return createStackParser(...stackParser);
  }
  return stackParser;
}
function stripSentryFramesAndReverse(stack) {
  if (!stack.length) {
    return [];
  }
  const localStack = stack.slice(0, STACKTRACE_FRAME_LIMIT);
  const lastFrameFunction = localStack[localStack.length - 1].function;
  if (lastFrameFunction && /sentryWrapped/.test(lastFrameFunction)) {
    localStack.pop();
  }
  localStack.reverse();
  const firstFrameFunction = localStack[localStack.length - 1].function;
  if (firstFrameFunction && /captureMessage|captureException/.test(firstFrameFunction)) {
    localStack.pop();
  }
  return localStack.map((frame) => ({
    ...frame,
    filename: frame.filename || localStack[localStack.length - 1].filename,
    function: frame.function || "?"
  }));
}
const defaultFunctionName = "<anonymous>";
function getFunctionName(fn) {
  try {
    if (!fn || typeof fn !== "function") {
      return defaultFunctionName;
    }
    return fn.name || defaultFunctionName;
  } catch (e) {
    return defaultFunctionName;
  }
}
const WINDOW$4 = getGlobalObject();
function supportsFetch() {
  if (!("fetch" in WINDOW$4)) {
    return false;
  }
  try {
    new Headers();
    new Request("http://www.example.com");
    new Response();
    return true;
  } catch (e) {
    return false;
  }
}
function isNativeFetch(func) {
  return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
function supportsNativeFetch() {
  if (!supportsFetch()) {
    return false;
  }
  if (isNativeFetch(WINDOW$4.fetch)) {
    return true;
  }
  let result = false;
  const doc = WINDOW$4.document;
  if (doc && typeof doc.createElement === "function") {
    try {
      const sandbox = doc.createElement("iframe");
      sandbox.hidden = true;
      doc.head.appendChild(sandbox);
      if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
        result = isNativeFetch(sandbox.contentWindow.fetch);
      }
      doc.head.removeChild(sandbox);
    } catch (err) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
    }
  }
  return result;
}
function supportsHistory() {
  const chrome2 = WINDOW$4.chrome;
  const isChromePackagedApp = chrome2 && chrome2.app && chrome2.app.runtime;
  const hasHistoryApi = "history" in WINDOW$4 && !!WINDOW$4.history.pushState && !!WINDOW$4.history.replaceState;
  return !isChromePackagedApp && hasHistoryApi;
}
const WINDOW$3 = getGlobalObject();
const handlers = {};
const instrumented = {};
function instrument(type) {
  if (instrumented[type]) {
    return;
  }
  instrumented[type] = true;
  switch (type) {
    case "console":
      instrumentConsole();
      break;
    case "dom":
      instrumentDOM();
      break;
    case "xhr":
      instrumentXHR();
      break;
    case "fetch":
      instrumentFetch();
      break;
    case "history":
      instrumentHistory();
      break;
    case "error":
      instrumentError();
      break;
    case "unhandledrejection":
      instrumentUnhandledRejection();
      break;
    default:
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("unknown instrumentation type:", type);
      return;
  }
}
function addInstrumentationHandler(type, callback) {
  handlers[type] = handlers[type] || [];
  handlers[type].push(callback);
  instrument(type);
}
function triggerHandlers(type, data) {
  if (!type || !handlers[type]) {
    return;
  }
  for (const handler of handlers[type] || []) {
    try {
      handler(data);
    } catch (e) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(
        `Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`,
        e
      );
    }
  }
}
function instrumentConsole() {
  if (!("console" in WINDOW$3)) {
    return;
  }
  CONSOLE_LEVELS.forEach(function(level) {
    if (!(level in WINDOW$3.console)) {
      return;
    }
    fill(WINDOW$3.console, level, function(originalConsoleMethod) {
      return function(...args) {
        triggerHandlers("console", { args, level });
        if (originalConsoleMethod) {
          originalConsoleMethod.apply(WINDOW$3.console, args);
        }
      };
    });
  });
}
function instrumentFetch() {
  if (!supportsNativeFetch()) {
    return;
  }
  fill(WINDOW$3, "fetch", function(originalFetch) {
    return function(...args) {
      const handlerData = {
        args,
        fetchData: {
          method: getFetchMethod(args),
          url: getFetchUrl(args)
        },
        startTimestamp: Date.now()
      };
      triggerHandlers("fetch", {
        ...handlerData
      });
      return originalFetch.apply(WINDOW$3, args).then(
        (response) => {
          triggerHandlers("fetch", {
            ...handlerData,
            endTimestamp: Date.now(),
            response
          });
          return response;
        },
        (error) => {
          triggerHandlers("fetch", {
            ...handlerData,
            endTimestamp: Date.now(),
            error
          });
          throw error;
        }
      );
    };
  });
}
function getFetchMethod(fetchArgs = []) {
  if ("Request" in WINDOW$3 && isInstanceOf(fetchArgs[0], Request) && fetchArgs[0].method) {
    return String(fetchArgs[0].method).toUpperCase();
  }
  if (fetchArgs[1] && fetchArgs[1].method) {
    return String(fetchArgs[1].method).toUpperCase();
  }
  return "GET";
}
function getFetchUrl(fetchArgs = []) {
  if (typeof fetchArgs[0] === "string") {
    return fetchArgs[0];
  }
  if ("Request" in WINDOW$3 && isInstanceOf(fetchArgs[0], Request)) {
    return fetchArgs[0].url;
  }
  return String(fetchArgs[0]);
}
function instrumentXHR() {
  if (!("XMLHttpRequest" in WINDOW$3)) {
    return;
  }
  const xhrproto = XMLHttpRequest.prototype;
  fill(xhrproto, "open", function(originalOpen) {
    return function(...args) {
      const url = args[1];
      const xhrInfo = this.__sentry_xhr__ = {
        method: isString(args[0]) ? args[0].toUpperCase() : args[0],
        url: args[1]
      };
      if (isString(url) && xhrInfo.method === "POST" && url.match(/sentry_key/)) {
        this.__sentry_own_request__ = true;
      }
      const onreadystatechangeHandler = () => {
        const xhrInfo2 = this.__sentry_xhr__;
        if (!xhrInfo2) {
          return;
        }
        if (this.readyState === 4) {
          try {
            xhrInfo2.status_code = this.status;
          } catch (e) {
          }
          triggerHandlers("xhr", {
            args,
            endTimestamp: Date.now(),
            startTimestamp: Date.now(),
            xhr: this
          });
        }
      };
      if ("onreadystatechange" in this && typeof this.onreadystatechange === "function") {
        fill(this, "onreadystatechange", function(original) {
          return function(...readyStateArgs) {
            onreadystatechangeHandler();
            return original.apply(this, readyStateArgs);
          };
        });
      } else {
        this.addEventListener("readystatechange", onreadystatechangeHandler);
      }
      return originalOpen.apply(this, args);
    };
  });
  fill(xhrproto, "send", function(originalSend) {
    return function(...args) {
      if (this.__sentry_xhr__ && args[0] !== void 0) {
        this.__sentry_xhr__.body = args[0];
      }
      triggerHandlers("xhr", {
        args,
        startTimestamp: Date.now(),
        xhr: this
      });
      return originalSend.apply(this, args);
    };
  });
}
let lastHref;
function instrumentHistory() {
  if (!supportsHistory()) {
    return;
  }
  const oldOnPopState = WINDOW$3.onpopstate;
  WINDOW$3.onpopstate = function(...args) {
    const to = WINDOW$3.location.href;
    const from = lastHref;
    lastHref = to;
    triggerHandlers("history", {
      from,
      to
    });
    if (oldOnPopState) {
      try {
        return oldOnPopState.apply(this, args);
      } catch (_oO) {
      }
    }
  };
  function historyReplacementFunction(originalHistoryFunction) {
    return function(...args) {
      const url = args.length > 2 ? args[2] : void 0;
      if (url) {
        const from = lastHref;
        const to = String(url);
        lastHref = to;
        triggerHandlers("history", {
          from,
          to
        });
      }
      return originalHistoryFunction.apply(this, args);
    };
  }
  fill(WINDOW$3.history, "pushState", historyReplacementFunction);
  fill(WINDOW$3.history, "replaceState", historyReplacementFunction);
}
const debounceDuration = 1e3;
let debounceTimerID;
let lastCapturedEvent;
function shouldShortcircuitPreviousDebounce(previous, current) {
  if (!previous) {
    return true;
  }
  if (previous.type !== current.type) {
    return true;
  }
  try {
    if (previous.target !== current.target) {
      return true;
    }
  } catch (e) {
  }
  return false;
}
function shouldSkipDOMEvent(event) {
  if (event.type !== "keypress") {
    return false;
  }
  try {
    const target = event.target;
    if (!target || !target.tagName) {
      return true;
    }
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
      return false;
    }
  } catch (e) {
  }
  return true;
}
function makeDOMEventHandler(handler, globalListener = false) {
  return (event) => {
    if (!event || lastCapturedEvent === event) {
      return;
    }
    if (shouldSkipDOMEvent(event)) {
      return;
    }
    const name = event.type === "keypress" ? "input" : event.type;
    if (debounceTimerID === void 0) {
      handler({
        event,
        name,
        global: globalListener
      });
      lastCapturedEvent = event;
    } else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
      handler({
        event,
        name,
        global: globalListener
      });
      lastCapturedEvent = event;
    }
    clearTimeout(debounceTimerID);
    debounceTimerID = WINDOW$3.setTimeout(() => {
      debounceTimerID = void 0;
    }, debounceDuration);
  };
}
function instrumentDOM() {
  if (!("document" in WINDOW$3)) {
    return;
  }
  const triggerDOMHandler = triggerHandlers.bind(null, "dom");
  const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
  WINDOW$3.document.addEventListener("click", globalDOMEventHandler, false);
  WINDOW$3.document.addEventListener("keypress", globalDOMEventHandler, false);
  ["EventTarget", "Node"].forEach((target) => {
    const proto = WINDOW$3[target] && WINDOW$3[target].prototype;
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) {
      return;
    }
    fill(proto, "addEventListener", function(originalAddEventListener) {
      return function(type, listener, options) {
        if (type === "click" || type == "keypress") {
          try {
            const el = this;
            const handlers2 = el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {};
            const handlerForType = handlers2[type] = handlers2[type] || { refCount: 0 };
            if (!handlerForType.handler) {
              const handler = makeDOMEventHandler(triggerDOMHandler);
              handlerForType.handler = handler;
              originalAddEventListener.call(this, type, handler, options);
            }
            handlerForType.refCount++;
          } catch (e) {
          }
        }
        return originalAddEventListener.call(this, type, listener, options);
      };
    });
    fill(
      proto,
      "removeEventListener",
      function(originalRemoveEventListener) {
        return function(type, listener, options) {
          if (type === "click" || type == "keypress") {
            try {
              const el = this;
              const handlers2 = el.__sentry_instrumentation_handlers__ || {};
              const handlerForType = handlers2[type];
              if (handlerForType) {
                handlerForType.refCount--;
                if (handlerForType.refCount <= 0) {
                  originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                  handlerForType.handler = void 0;
                  delete handlers2[type];
                }
                if (Object.keys(handlers2).length === 0) {
                  delete el.__sentry_instrumentation_handlers__;
                }
              }
            } catch (e) {
            }
          }
          return originalRemoveEventListener.call(this, type, listener, options);
        };
      }
    );
  });
}
let _oldOnErrorHandler = null;
function instrumentError() {
  _oldOnErrorHandler = WINDOW$3.onerror;
  WINDOW$3.onerror = function(msg, url, line, column, error) {
    triggerHandlers("error", {
      column,
      error,
      line,
      msg,
      url
    });
    if (_oldOnErrorHandler) {
      return _oldOnErrorHandler.apply(this, arguments);
    }
    return false;
  };
}
let _oldOnUnhandledRejectionHandler = null;
function instrumentUnhandledRejection() {
  _oldOnUnhandledRejectionHandler = WINDOW$3.onunhandledrejection;
  WINDOW$3.onunhandledrejection = function(e) {
    triggerHandlers("unhandledrejection", e);
    if (_oldOnUnhandledRejectionHandler) {
      return _oldOnUnhandledRejectionHandler.apply(this, arguments);
    }
    return true;
  };
}
function memoBuilder() {
  const hasWeakSet = typeof WeakSet === "function";
  const inner = hasWeakSet ? /* @__PURE__ */ new WeakSet() : [];
  function memoize(obj) {
    if (hasWeakSet) {
      if (inner.has(obj)) {
        return true;
      }
      inner.add(obj);
      return false;
    }
    for (let i = 0; i < inner.length; i++) {
      const value = inner[i];
      if (value === obj) {
        return true;
      }
    }
    inner.push(obj);
    return false;
  }
  function unmemoize(obj) {
    if (hasWeakSet) {
      inner.delete(obj);
    } else {
      for (let i = 0; i < inner.length; i++) {
        if (inner[i] === obj) {
          inner.splice(i, 1);
          break;
        }
      }
    }
  }
  return [memoize, unmemoize];
}
function uuid4() {
  const gbl = GLOBAL_OBJ;
  const crypto = gbl.crypto || gbl.msCrypto;
  if (crypto && crypto.randomUUID) {
    return crypto.randomUUID().replace(/-/g, "");
  }
  const getRandomByte = crypto && crypto.getRandomValues ? () => crypto.getRandomValues(new Uint8Array(1))[0] : () => Math.random() * 16;
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(
    /[018]/g,
    (c) => (c ^ (getRandomByte() & 15) >> c / 4).toString(16)
  );
}
function getFirstException(event) {
  return event.exception && event.exception.values ? event.exception.values[0] : void 0;
}
function getEventDescription(event) {
  const { message, event_id: eventId } = event;
  if (message) {
    return message;
  }
  const firstException = getFirstException(event);
  if (firstException) {
    if (firstException.type && firstException.value) {
      return `${firstException.type}: ${firstException.value}`;
    }
    return firstException.type || firstException.value || eventId || "<unknown>";
  }
  return eventId || "<unknown>";
}
function addExceptionTypeValue(event, value, type) {
  const exception = event.exception = event.exception || {};
  const values = exception.values = exception.values || [];
  const firstException = values[0] = values[0] || {};
  if (!firstException.value) {
    firstException.value = value || "";
  }
  if (!firstException.type) {
    firstException.type = type || "Error";
  }
}
function addExceptionMechanism(event, newMechanism) {
  const firstException = getFirstException(event);
  if (!firstException) {
    return;
  }
  const defaultMechanism = { type: "generic", handled: true };
  const currentMechanism = firstException.mechanism;
  firstException.mechanism = { ...defaultMechanism, ...currentMechanism, ...newMechanism };
  if (newMechanism && "data" in newMechanism) {
    const mergedData = { ...currentMechanism && currentMechanism.data, ...newMechanism.data };
    firstException.mechanism.data = mergedData;
  }
}
function checkOrSetAlreadyCaught(exception) {
  if (exception && exception.__sentry_captured__) {
    return true;
  }
  try {
    addNonEnumerableProperty(exception, "__sentry_captured__", true);
  } catch (err) {
  }
  return false;
}
function arrayify(maybeArray) {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}
function isBrowserBundle() {
  return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function getSDKSource() {
  return "npm";
}
function isNodeEnv() {
  return !isBrowserBundle() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
}
function dynamicRequire(mod, request) {
  return mod.require(request);
}
function normalize(input, depth = Infinity, maxProperties = Infinity) {
  try {
    return visit("", input, depth, maxProperties);
  } catch (err) {
    return { ERROR: `**non-serializable** (${err})` };
  }
}
function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
  const normalized = normalize(object, depth);
  if (jsonSize(normalized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize);
  }
  return normalized;
}
function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
  const [memoize, unmemoize] = memo;
  if (value === null || ["number", "boolean", "string"].includes(typeof value) && !isNaN$1(value)) {
    return value;
  }
  const stringified = stringifyValue(key, value);
  if (!stringified.startsWith("[object ")) {
    return stringified;
  }
  if (value["__sentry_skip_normalization__"]) {
    return value;
  }
  let overriddenDepth = depth;
  if (typeof value["__sentry_override_normalization_depth__"] === "number") {
    overriddenDepth = value["__sentry_override_normalization_depth__"];
  }
  if (overriddenDepth === 0) {
    return stringified.replace("object ", "");
  }
  if (memoize(value)) {
    return "[Circular ~]";
  }
  const valueWithToJSON = value;
  if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
    try {
      const jsonValue = valueWithToJSON.toJSON();
      return visit("", jsonValue, overriddenDepth - 1, maxProperties, memo);
    } catch (err) {
    }
  }
  const normalized = Array.isArray(value) ? [] : {};
  let numAdded = 0;
  const visitable = convertToPlainObject(value);
  for (const visitKey in visitable) {
    if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
      continue;
    }
    if (numAdded >= maxProperties) {
      normalized[visitKey] = "[MaxProperties ~]";
      break;
    }
    const visitValue = visitable[visitKey];
    normalized[visitKey] = visit(visitKey, visitValue, overriddenDepth - 1, maxProperties, memo);
    numAdded++;
  }
  unmemoize(value);
  return normalized;
}
function stringifyValue(key, value) {
  try {
    if (key === "domain" && value && typeof value === "object" && value._events) {
      return "[Domain]";
    }
    if (key === "domainEmitter") {
      return "[DomainEmitter]";
    }
    if (typeof global !== "undefined" && value === global) {
      return "[Global]";
    }
    if (typeof window !== "undefined" && value === window) {
      return "[Window]";
    }
    if (typeof document !== "undefined" && value === document) {
      return "[Document]";
    }
    if (isSyntheticEvent(value)) {
      return "[SyntheticEvent]";
    }
    if (typeof value === "number" && value !== value) {
      return "[NaN]";
    }
    if (value === void 0) {
      return "[undefined]";
    }
    if (typeof value === "function") {
      return `[Function: ${getFunctionName(value)}]`;
    }
    if (typeof value === "symbol") {
      return `[${String(value)}]`;
    }
    if (typeof value === "bigint") {
      return `[BigInt: ${String(value)}]`;
    }
    return `[object ${getConstructorName(value)}]`;
  } catch (err) {
    return `**non-serializable** (${err})`;
  }
}
function getConstructorName(value) {
  const prototype = Object.getPrototypeOf(value);
  return prototype ? prototype.constructor.name : "null prototype";
}
function utf8Length(value) {
  return ~-encodeURI(value).split(/%..|./).length;
}
function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}
var States;
(function(States2) {
  const PENDING = 0;
  States2[States2["PENDING"] = PENDING] = "PENDING";
  const RESOLVED = 1;
  States2[States2["RESOLVED"] = RESOLVED] = "RESOLVED";
  const REJECTED = 2;
  States2[States2["REJECTED"] = REJECTED] = "REJECTED";
})(States || (States = {}));
function resolvedSyncPromise(value) {
  return new SyncPromise((resolve) => {
    resolve(value);
  });
}
function rejectedSyncPromise(reason) {
  return new SyncPromise((_, reject) => {
    reject(reason);
  });
}
class SyncPromise {
  __init() {
    this._state = States.PENDING;
  }
  __init2() {
    this._handlers = [];
  }
  constructor(executor) {
    SyncPromise.prototype.__init.call(this);
    SyncPromise.prototype.__init2.call(this);
    SyncPromise.prototype.__init3.call(this);
    SyncPromise.prototype.__init4.call(this);
    SyncPromise.prototype.__init5.call(this);
    SyncPromise.prototype.__init6.call(this);
    try {
      executor(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }
  then(onfulfilled, onrejected) {
    return new SyncPromise((resolve, reject) => {
      this._handlers.push([
        false,
        (result) => {
          if (!onfulfilled) {
            resolve(result);
          } else {
            try {
              resolve(onfulfilled(result));
            } catch (e) {
              reject(e);
            }
          }
        },
        (reason) => {
          if (!onrejected) {
            reject(reason);
          } else {
            try {
              resolve(onrejected(reason));
            } catch (e) {
              reject(e);
            }
          }
        }
      ]);
      this._executeHandlers();
    });
  }
  catch(onrejected) {
    return this.then((val) => val, onrejected);
  }
  finally(onfinally) {
    return new SyncPromise((resolve, reject) => {
      let val;
      let isRejected;
      return this.then(
        (value) => {
          isRejected = false;
          val = value;
          if (onfinally) {
            onfinally();
          }
        },
        (reason) => {
          isRejected = true;
          val = reason;
          if (onfinally) {
            onfinally();
          }
        }
      ).then(() => {
        if (isRejected) {
          reject(val);
          return;
        }
        resolve(val);
      });
    });
  }
  __init3() {
    this._resolve = (value) => {
      this._setResult(States.RESOLVED, value);
    };
  }
  __init4() {
    this._reject = (reason) => {
      this._setResult(States.REJECTED, reason);
    };
  }
  __init5() {
    this._setResult = (state, value) => {
      if (this._state !== States.PENDING) {
        return;
      }
      if (isThenable(value)) {
        void value.then(this._resolve, this._reject);
        return;
      }
      this._state = state;
      this._value = value;
      this._executeHandlers();
    };
  }
  __init6() {
    this._executeHandlers = () => {
      if (this._state === States.PENDING) {
        return;
      }
      const cachedHandlers = this._handlers.slice();
      this._handlers = [];
      cachedHandlers.forEach((handler) => {
        if (handler[0]) {
          return;
        }
        if (this._state === States.RESOLVED) {
          handler[1](this._value);
        }
        if (this._state === States.REJECTED) {
          handler[2](this._value);
        }
        handler[0] = true;
      });
    };
  }
}
function makePromiseBuffer(limit) {
  const buffer = [];
  function isReady() {
    return limit === void 0 || buffer.length < limit;
  }
  function remove(task) {
    return buffer.splice(buffer.indexOf(task), 1)[0];
  }
  function add(taskProducer) {
    if (!isReady()) {
      return rejectedSyncPromise(new SentryError("Not adding Promise because buffer limit was reached."));
    }
    const task = taskProducer();
    if (buffer.indexOf(task) === -1) {
      buffer.push(task);
    }
    void task.then(() => remove(task)).then(
      null,
      () => remove(task).then(null, () => {
      })
    );
    return task;
  }
  function drain(timeout) {
    return new SyncPromise((resolve, reject) => {
      let counter = buffer.length;
      if (!counter) {
        return resolve(true);
      }
      const capturedSetTimeout = setTimeout(() => {
        if (timeout && timeout > 0) {
          resolve(false);
        }
      }, timeout);
      buffer.forEach((item) => {
        void resolvedSyncPromise(item).then(() => {
          if (!--counter) {
            clearTimeout(capturedSetTimeout);
            resolve(true);
          }
        }, reject);
      });
    });
  }
  return {
    $: buffer,
    add,
    drain
  };
}
function parseUrl(url) {
  if (!url) {
    return {};
  }
  const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!match) {
    return {};
  }
  const query = match[6] || "";
  const fragment = match[8] || "";
  return {
    host: match[4],
    path: match[5],
    protocol: match[2],
    relative: match[5] + query + fragment
  };
}
const validSeverityLevels = ["fatal", "error", "warning", "log", "info", "debug"];
function severityLevelFromString(level) {
  return level === "warn" ? "warning" : validSeverityLevels.includes(level) ? level : "log";
}
const WINDOW$2 = getGlobalObject();
const dateTimestampSource = {
  nowSeconds: () => Date.now() / 1e3
};
function getBrowserPerformance() {
  const { performance: performance2 } = WINDOW$2;
  if (!performance2 || !performance2.now) {
    return void 0;
  }
  const timeOrigin = Date.now() - performance2.now();
  return {
    now: () => performance2.now(),
    timeOrigin
  };
}
function getNodePerformance() {
  try {
    const perfHooks = dynamicRequire(module, "perf_hooks");
    return perfHooks.performance;
  } catch (_) {
    return void 0;
  }
}
const platformPerformance = isNodeEnv() ? getNodePerformance() : getBrowserPerformance();
const timestampSource = platformPerformance === void 0 ? dateTimestampSource : {
  nowSeconds: () => (platformPerformance.timeOrigin + platformPerformance.now()) / 1e3
};
const dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
const timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
const timestampWithMs = timestampInSeconds;
const browserPerformanceTimeOrigin = (() => {
  const { performance: performance2 } = WINDOW$2;
  if (!performance2 || !performance2.now) {
    return void 0;
  }
  const threshold = 3600 * 1e3;
  const performanceNow = performance2.now();
  const dateNow = Date.now();
  const timeOriginDelta = performance2.timeOrigin ? Math.abs(performance2.timeOrigin + performanceNow - dateNow) : threshold;
  const timeOriginIsReliable = timeOriginDelta < threshold;
  const navigationStart = performance2.timing && performance2.timing.navigationStart;
  const hasNavigationStart = typeof navigationStart === "number";
  const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
  const navigationStartIsReliable = navigationStartDelta < threshold;
  if (timeOriginIsReliable || navigationStartIsReliable) {
    if (timeOriginDelta <= navigationStartDelta) {
      return performance2.timeOrigin;
    } else {
      return navigationStart;
    }
  }
  return dateNow;
})();
const TRACEPARENT_REGEXP = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
);
function extractTraceparentData(traceparent) {
  const matches = traceparent.match(TRACEPARENT_REGEXP);
  if (!traceparent || !matches) {
    return void 0;
  }
  let parentSampled;
  if (matches[3] === "1") {
    parentSampled = true;
  } else if (matches[3] === "0") {
    parentSampled = false;
  }
  return {
    traceId: matches[1],
    parentSampled,
    parentSpanId: matches[2]
  };
}
function createEnvelope(headers, items = []) {
  return [headers, items];
}
function addItemToEnvelope(envelope, newItem) {
  const [headers, items] = envelope;
  return [headers, [...items, newItem]];
}
function forEachEnvelopeItem(envelope, callback) {
  const envelopeItems = envelope[1];
  for (const envelopeItem of envelopeItems) {
    const envelopeItemType = envelopeItem[0].type;
    const result = callback(envelopeItem, envelopeItemType);
    if (result) {
      return true;
    }
  }
  return false;
}
function encodeUTF8(input, textEncoder) {
  const utf8 = textEncoder || new TextEncoder();
  return utf8.encode(input);
}
function serializeEnvelope(envelope, textEncoder) {
  const [envHeaders, items] = envelope;
  let parts = JSON.stringify(envHeaders);
  function append(next) {
    if (typeof parts === "string") {
      parts = typeof next === "string" ? parts + next : [encodeUTF8(parts, textEncoder), next];
    } else {
      parts.push(typeof next === "string" ? encodeUTF8(next, textEncoder) : next);
    }
  }
  for (const item of items) {
    const [itemHeaders, payload] = item;
    append(`
${JSON.stringify(itemHeaders)}
`);
    if (typeof payload === "string" || payload instanceof Uint8Array) {
      append(payload);
    } else {
      let stringifiedPayload;
      try {
        stringifiedPayload = JSON.stringify(payload);
      } catch (e) {
        stringifiedPayload = JSON.stringify(normalize(payload));
      }
      append(stringifiedPayload);
    }
  }
  return typeof parts === "string" ? parts : concatBuffers(parts);
}
function concatBuffers(buffers) {
  const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
  const merged = new Uint8Array(totalLength);
  let offset = 0;
  for (const buffer of buffers) {
    merged.set(buffer, offset);
    offset += buffer.length;
  }
  return merged;
}
function createAttachmentEnvelopeItem(attachment, textEncoder) {
  const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data, textEncoder) : attachment.data;
  return [
    dropUndefinedKeys({
      type: "attachment",
      length: buffer.length,
      filename: attachment.filename,
      content_type: attachment.contentType,
      attachment_type: attachment.attachmentType
    }),
    buffer
  ];
}
const ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  replay_event: "replay",
  replay_recording: "replay"
};
function envelopeItemTypeToDataCategory(type) {
  return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
}
function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
  if (!metadataOrEvent || !metadataOrEvent.sdk) {
    return;
  }
  const { name, version } = metadataOrEvent.sdk;
  return { name, version };
}
function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
  const dynamicSamplingContext = event.sdkProcessingMetadata && event.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: event.event_id,
    sent_at: new Date().toISOString(),
    ...sdkInfo && { sdk: sdkInfo },
    ...!!tunnel && { dsn: dsnToString(dsn) },
    ...event.type === "transaction" && dynamicSamplingContext && {
      trace: dropUndefinedKeys({ ...dynamicSamplingContext })
    }
  };
}
function createClientReportEnvelope(discarded_events, dsn, timestamp) {
  const clientReportItem = [
    { type: "client_report" },
    {
      timestamp: timestamp || dateTimestampInSeconds(),
      discarded_events
    }
  ];
  return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
}
const DEFAULT_RETRY_AFTER = 60 * 1e3;
function parseRetryAfterHeader(header, now = Date.now()) {
  const headerDelay = parseInt(`${header}`, 10);
  if (!isNaN(headerDelay)) {
    return headerDelay * 1e3;
  }
  const headerDate = Date.parse(`${header}`);
  if (!isNaN(headerDate)) {
    return headerDate - now;
  }
  return DEFAULT_RETRY_AFTER;
}
function disabledUntil(limits, category) {
  return limits[category] || limits.all || 0;
}
function isRateLimited(limits, category, now = Date.now()) {
  return disabledUntil(limits, category) > now;
}
function updateRateLimits(limits, { statusCode, headers }, now = Date.now()) {
  const updatedRateLimits = {
    ...limits
  };
  const rateLimitHeader = headers && headers["x-sentry-rate-limits"];
  const retryAfterHeader = headers && headers["retry-after"];
  if (rateLimitHeader) {
    for (const limit of rateLimitHeader.trim().split(",")) {
      const [retryAfter, categories] = limit.split(":", 2);
      const headerDelay = parseInt(retryAfter, 10);
      const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1e3;
      if (!categories) {
        updatedRateLimits.all = now + delay;
      } else {
        for (const category of categories.split(";")) {
          updatedRateLimits[category] = now + delay;
        }
      }
    }
  } else if (retryAfterHeader) {
    updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
  } else if (statusCode === 429) {
    updatedRateLimits.all = now + 60 * 1e3;
  }
  return updatedRateLimits;
}
const BAGGAGE_HEADER_NAME = "baggage";
const SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;
const MAX_BAGGAGE_STRING_LENGTH = 8192;
function baggageHeaderToDynamicSamplingContext(baggageHeader) {
  if (!isString(baggageHeader) && !Array.isArray(baggageHeader)) {
    return void 0;
  }
  let baggageObject = {};
  if (Array.isArray(baggageHeader)) {
    baggageObject = baggageHeader.reduce((acc, curr) => {
      const currBaggageObject = baggageHeaderToObject(curr);
      return {
        ...acc,
        ...currBaggageObject
      };
    }, {});
  } else {
    if (!baggageHeader) {
      return void 0;
    }
    baggageObject = baggageHeaderToObject(baggageHeader);
  }
  const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value]) => {
    if (key.match(SENTRY_BAGGAGE_KEY_PREFIX_REGEX)) {
      const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
      acc[nonPrefixedKey] = value;
    }
    return acc;
  }, {});
  if (Object.keys(dynamicSamplingContext).length > 0) {
    return dynamicSamplingContext;
  } else {
    return void 0;
  }
}
function dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext) {
  const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce(
    (acc, [dscKey, dscValue]) => {
      if (dscValue) {
        acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
      }
      return acc;
    },
    {}
  );
  return objectToBaggageHeader(sentryPrefixedDSC);
}
function baggageHeaderToObject(baggageHeader) {
  return baggageHeader.split(",").map((baggageEntry) => baggageEntry.split("=").map((keyOrValue) => decodeURIComponent(keyOrValue.trim()))).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}
function objectToBaggageHeader(object) {
  if (Object.keys(object).length === 0) {
    return void 0;
  }
  return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex) => {
    const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
    const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
    if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`
      );
      return baggageHeader;
    } else {
      return newBaggageHeader;
    }
  }, "");
}
const DEFAULT_ENVIRONMENT = "production";
function makeSession(context) {
  const startingTime = timestampInSeconds();
  const session = {
    sid: uuid4(),
    init: true,
    timestamp: startingTime,
    started: startingTime,
    duration: 0,
    status: "ok",
    errors: 0,
    ignoreDuration: false,
    toJSON: () => sessionToJSON(session)
  };
  if (context) {
    updateSession(session, context);
  }
  return session;
}
function updateSession(session, context = {}) {
  if (context.user) {
    if (!session.ipAddress && context.user.ip_address) {
      session.ipAddress = context.user.ip_address;
    }
    if (!session.did && !context.did) {
      session.did = context.user.id || context.user.email || context.user.username;
    }
  }
  session.timestamp = context.timestamp || timestampInSeconds();
  if (context.ignoreDuration) {
    session.ignoreDuration = context.ignoreDuration;
  }
  if (context.sid) {
    session.sid = context.sid.length === 32 ? context.sid : uuid4();
  }
  if (context.init !== void 0) {
    session.init = context.init;
  }
  if (!session.did && context.did) {
    session.did = `${context.did}`;
  }
  if (typeof context.started === "number") {
    session.started = context.started;
  }
  if (session.ignoreDuration) {
    session.duration = void 0;
  } else if (typeof context.duration === "number") {
    session.duration = context.duration;
  } else {
    const duration = session.timestamp - session.started;
    session.duration = duration >= 0 ? duration : 0;
  }
  if (context.release) {
    session.release = context.release;
  }
  if (context.environment) {
    session.environment = context.environment;
  }
  if (!session.ipAddress && context.ipAddress) {
    session.ipAddress = context.ipAddress;
  }
  if (!session.userAgent && context.userAgent) {
    session.userAgent = context.userAgent;
  }
  if (typeof context.errors === "number") {
    session.errors = context.errors;
  }
  if (context.status) {
    session.status = context.status;
  }
}
function closeSession(session, status) {
  let context = {};
  if (status) {
    context = { status };
  } else if (session.status === "ok") {
    context = { status: "exited" };
  }
  updateSession(session, context);
}
function sessionToJSON(session) {
  return dropUndefinedKeys({
    sid: `${session.sid}`,
    init: session.init,
    started: new Date(session.started * 1e3).toISOString(),
    timestamp: new Date(session.timestamp * 1e3).toISOString(),
    status: session.status,
    errors: session.errors,
    did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
    duration: session.duration,
    attrs: {
      release: session.release,
      environment: session.environment,
      ip_address: session.ipAddress,
      user_agent: session.userAgent
    }
  });
}
const DEFAULT_MAX_BREADCRUMBS = 100;
class Scope {
  constructor() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._attachments = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._contexts = {};
    this._sdkProcessingMetadata = {};
  }
  static clone(scope) {
    const newScope = new Scope();
    if (scope) {
      newScope._breadcrumbs = [...scope._breadcrumbs];
      newScope._tags = { ...scope._tags };
      newScope._extra = { ...scope._extra };
      newScope._contexts = { ...scope._contexts };
      newScope._user = scope._user;
      newScope._level = scope._level;
      newScope._span = scope._span;
      newScope._session = scope._session;
      newScope._transactionName = scope._transactionName;
      newScope._fingerprint = scope._fingerprint;
      newScope._eventProcessors = [...scope._eventProcessors];
      newScope._requestSession = scope._requestSession;
      newScope._attachments = [...scope._attachments];
      newScope._sdkProcessingMetadata = { ...scope._sdkProcessingMetadata };
    }
    return newScope;
  }
  addScopeListener(callback) {
    this._scopeListeners.push(callback);
  }
  addEventProcessor(callback) {
    this._eventProcessors.push(callback);
    return this;
  }
  setUser(user) {
    this._user = user || {};
    if (this._session) {
      updateSession(this._session, { user });
    }
    this._notifyScopeListeners();
    return this;
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(requestSession) {
    this._requestSession = requestSession;
    return this;
  }
  setTags(tags) {
    this._tags = {
      ...this._tags,
      ...tags
    };
    this._notifyScopeListeners();
    return this;
  }
  setTag(key, value) {
    this._tags = { ...this._tags, [key]: value };
    this._notifyScopeListeners();
    return this;
  }
  setExtras(extras) {
    this._extra = {
      ...this._extra,
      ...extras
    };
    this._notifyScopeListeners();
    return this;
  }
  setExtra(key, extra) {
    this._extra = { ...this._extra, [key]: extra };
    this._notifyScopeListeners();
    return this;
  }
  setFingerprint(fingerprint) {
    this._fingerprint = fingerprint;
    this._notifyScopeListeners();
    return this;
  }
  setLevel(level) {
    this._level = level;
    this._notifyScopeListeners();
    return this;
  }
  setTransactionName(name) {
    this._transactionName = name;
    this._notifyScopeListeners();
    return this;
  }
  setContext(key, context) {
    if (context === null) {
      delete this._contexts[key];
    } else {
      this._contexts[key] = context;
    }
    this._notifyScopeListeners();
    return this;
  }
  setSpan(span) {
    this._span = span;
    this._notifyScopeListeners();
    return this;
  }
  getSpan() {
    return this._span;
  }
  getTransaction() {
    const span = this.getSpan();
    return span && span.transaction;
  }
  setSession(session) {
    if (!session) {
      delete this._session;
    } else {
      this._session = session;
    }
    this._notifyScopeListeners();
    return this;
  }
  getSession() {
    return this._session;
  }
  update(captureContext) {
    if (!captureContext) {
      return this;
    }
    if (typeof captureContext === "function") {
      const updatedScope = captureContext(this);
      return updatedScope instanceof Scope ? updatedScope : this;
    }
    if (captureContext instanceof Scope) {
      this._tags = { ...this._tags, ...captureContext._tags };
      this._extra = { ...this._extra, ...captureContext._extra };
      this._contexts = { ...this._contexts, ...captureContext._contexts };
      if (captureContext._user && Object.keys(captureContext._user).length) {
        this._user = captureContext._user;
      }
      if (captureContext._level) {
        this._level = captureContext._level;
      }
      if (captureContext._fingerprint) {
        this._fingerprint = captureContext._fingerprint;
      }
      if (captureContext._requestSession) {
        this._requestSession = captureContext._requestSession;
      }
    } else if (isPlainObject(captureContext)) {
      captureContext = captureContext;
      this._tags = { ...this._tags, ...captureContext.tags };
      this._extra = { ...this._extra, ...captureContext.extra };
      this._contexts = { ...this._contexts, ...captureContext.contexts };
      if (captureContext.user) {
        this._user = captureContext.user;
      }
      if (captureContext.level) {
        this._level = captureContext.level;
      }
      if (captureContext.fingerprint) {
        this._fingerprint = captureContext.fingerprint;
      }
      if (captureContext.requestSession) {
        this._requestSession = captureContext.requestSession;
      }
    }
    return this;
  }
  clear() {
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._contexts = {};
    this._level = void 0;
    this._transactionName = void 0;
    this._fingerprint = void 0;
    this._requestSession = void 0;
    this._span = void 0;
    this._session = void 0;
    this._notifyScopeListeners();
    this._attachments = [];
    return this;
  }
  addBreadcrumb(breadcrumb, maxBreadcrumbs) {
    const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
    if (maxCrumbs <= 0) {
      return this;
    }
    const mergedBreadcrumb = {
      timestamp: dateTimestampInSeconds(),
      ...breadcrumb
    };
    this._breadcrumbs = [...this._breadcrumbs, mergedBreadcrumb].slice(-maxCrumbs);
    this._notifyScopeListeners();
    return this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  }
  addAttachment(attachment) {
    this._attachments.push(attachment);
    return this;
  }
  getAttachments() {
    return this._attachments;
  }
  clearAttachments() {
    this._attachments = [];
    return this;
  }
  applyToEvent(event, hint = {}) {
    if (this._extra && Object.keys(this._extra).length) {
      event.extra = { ...this._extra, ...event.extra };
    }
    if (this._tags && Object.keys(this._tags).length) {
      event.tags = { ...this._tags, ...event.tags };
    }
    if (this._user && Object.keys(this._user).length) {
      event.user = { ...this._user, ...event.user };
    }
    if (this._contexts && Object.keys(this._contexts).length) {
      event.contexts = { ...this._contexts, ...event.contexts };
    }
    if (this._level) {
      event.level = this._level;
    }
    if (this._transactionName) {
      event.transaction = this._transactionName;
    }
    if (this._span) {
      event.contexts = { trace: this._span.getTraceContext(), ...event.contexts };
      const transactionName = this._span.transaction && this._span.transaction.name;
      if (transactionName) {
        event.tags = { transaction: transactionName, ...event.tags };
      }
    }
    this._applyFingerprint(event);
    event.breadcrumbs = [...event.breadcrumbs || [], ...this._breadcrumbs];
    event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : void 0;
    event.sdkProcessingMetadata = { ...event.sdkProcessingMetadata, ...this._sdkProcessingMetadata };
    return this._notifyEventProcessors([...getGlobalEventProcessors(), ...this._eventProcessors], event, hint);
  }
  setSDKProcessingMetadata(newData) {
    this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...newData };
    return this;
  }
  _notifyEventProcessors(processors, event, hint, index = 0) {
    return new SyncPromise((resolve, reject) => {
      const processor = processors[index];
      if (event === null || typeof processor !== "function") {
        resolve(event);
      } else {
        const result = processor({ ...event }, hint);
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && processor.id && result === null && logger.log(`Event processor "${processor.id}" dropped event`);
        if (isThenable(result)) {
          void result.then((final) => this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve)).then(null, reject);
        } else {
          void this._notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
        }
      }
    });
  }
  _notifyScopeListeners() {
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      this._scopeListeners.forEach((callback) => {
        callback(this);
      });
      this._notifyingListeners = false;
    }
  }
  _applyFingerprint(event) {
    event.fingerprint = event.fingerprint ? arrayify(event.fingerprint) : [];
    if (this._fingerprint) {
      event.fingerprint = event.fingerprint.concat(this._fingerprint);
    }
    if (event.fingerprint && !event.fingerprint.length) {
      delete event.fingerprint;
    }
  }
}
function getGlobalEventProcessors() {
  return getGlobalSingleton("globalEventProcessors", () => []);
}
function addGlobalEventProcessor(callback) {
  getGlobalEventProcessors().push(callback);
}
const API_VERSION = 4;
const DEFAULT_BREADCRUMBS = 100;
class Hub {
  __init() {
    this._stack = [{}];
  }
  constructor(client, scope = new Scope(), _version = API_VERSION) {
    this._version = _version;
    Hub.prototype.__init.call(this);
    this.getStackTop().scope = scope;
    if (client) {
      this.bindClient(client);
    }
  }
  isOlderThan(version) {
    return this._version < version;
  }
  bindClient(client) {
    const top = this.getStackTop();
    top.client = client;
    if (client && client.setupIntegrations) {
      client.setupIntegrations();
    }
  }
  pushScope() {
    const scope = Scope.clone(this.getScope());
    this.getStack().push({
      client: this.getClient(),
      scope
    });
    return scope;
  }
  popScope() {
    if (this.getStack().length <= 1)
      return false;
    return !!this.getStack().pop();
  }
  withScope(callback) {
    const scope = this.pushScope();
    try {
      callback(scope);
    } finally {
      this.popScope();
    }
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getStack() {
    return this._stack;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  captureException(exception, hint) {
    const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
    const syntheticException = new Error("Sentry syntheticException");
    this._withClient((client, scope) => {
      client.captureException(
        exception,
        {
          originalException: exception,
          syntheticException,
          ...hint,
          event_id: eventId
        },
        scope
      );
    });
    return eventId;
  }
  captureMessage(message, level, hint) {
    const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
    const syntheticException = new Error(message);
    this._withClient((client, scope) => {
      client.captureMessage(
        message,
        level,
        {
          originalException: message,
          syntheticException,
          ...hint,
          event_id: eventId
        },
        scope
      );
    });
    return eventId;
  }
  captureEvent(event, hint) {
    const eventId = hint && hint.event_id ? hint.event_id : uuid4();
    if (!event.type) {
      this._lastEventId = eventId;
    }
    this._withClient((client, scope) => {
      client.captureEvent(event, { ...hint, event_id: eventId }, scope);
    });
    return eventId;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addBreadcrumb(breadcrumb, hint) {
    const { scope, client } = this.getStackTop();
    if (!scope || !client)
      return;
    const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions && client.getOptions() || {};
    if (maxBreadcrumbs <= 0)
      return;
    const timestamp = dateTimestampInSeconds();
    const mergedBreadcrumb = { timestamp, ...breadcrumb };
    const finalBreadcrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
    if (finalBreadcrumb === null)
      return;
    if (client.emit) {
      client.emit("beforeAddBreadcrumb", finalBreadcrumb, hint);
    }
    scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
  }
  setUser(user) {
    const scope = this.getScope();
    if (scope)
      scope.setUser(user);
  }
  setTags(tags) {
    const scope = this.getScope();
    if (scope)
      scope.setTags(tags);
  }
  setExtras(extras) {
    const scope = this.getScope();
    if (scope)
      scope.setExtras(extras);
  }
  setTag(key, value) {
    const scope = this.getScope();
    if (scope)
      scope.setTag(key, value);
  }
  setExtra(key, extra) {
    const scope = this.getScope();
    if (scope)
      scope.setExtra(key, extra);
  }
  setContext(name, context) {
    const scope = this.getScope();
    if (scope)
      scope.setContext(name, context);
  }
  configureScope(callback) {
    const { scope, client } = this.getStackTop();
    if (scope && client) {
      callback(scope);
    }
  }
  run(callback) {
    const oldHub = makeMain(this);
    try {
      callback(this);
    } finally {
      makeMain(oldHub);
    }
  }
  getIntegration(integration) {
    const client = this.getClient();
    if (!client)
      return null;
    try {
      return client.getIntegration(integration);
    } catch (_oO) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
      return null;
    }
  }
  startTransaction(context, customSamplingContext) {
    return this._callExtensionMethod("startTransaction", context, customSamplingContext);
  }
  traceHeaders() {
    return this._callExtensionMethod("traceHeaders");
  }
  captureSession(endSession = false) {
    if (endSession) {
      return this.endSession();
    }
    this._sendSessionUpdate();
  }
  endSession() {
    const layer = this.getStackTop();
    const scope = layer && layer.scope;
    const session = scope && scope.getSession();
    if (session) {
      closeSession(session);
    }
    this._sendSessionUpdate();
    if (scope) {
      scope.setSession();
    }
  }
  startSession(context) {
    const { scope, client } = this.getStackTop();
    const { release, environment = DEFAULT_ENVIRONMENT } = client && client.getOptions() || {};
    const { userAgent } = GLOBAL_OBJ.navigator || {};
    const session = makeSession({
      release,
      environment,
      ...scope && { user: scope.getUser() },
      ...userAgent && { userAgent },
      ...context
    });
    if (scope) {
      const currentSession = scope.getSession && scope.getSession();
      if (currentSession && currentSession.status === "ok") {
        updateSession(currentSession, { status: "exited" });
      }
      this.endSession();
      scope.setSession(session);
    }
    return session;
  }
  shouldSendDefaultPii() {
    const client = this.getClient();
    const options = client && client.getOptions();
    return Boolean(options && options.sendDefaultPii);
  }
  _sendSessionUpdate() {
    const { scope, client } = this.getStackTop();
    if (!scope)
      return;
    const session = scope.getSession();
    if (session) {
      if (client && client.captureSession) {
        client.captureSession(session);
      }
    }
  }
  _withClient(callback) {
    const { scope, client } = this.getStackTop();
    if (client) {
      callback(client, scope);
    }
  }
  _callExtensionMethod(method, ...args) {
    const carrier = getMainCarrier();
    const sentry2 = carrier.__SENTRY__;
    if (sentry2 && sentry2.extensions && typeof sentry2.extensions[method] === "function") {
      return sentry2.extensions[method].apply(this, args);
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Extension method ${method} couldn't be found, doing nothing.`);
  }
}
function getMainCarrier() {
  GLOBAL_OBJ.__SENTRY__ = GLOBAL_OBJ.__SENTRY__ || {
    extensions: {},
    hub: void 0
  };
  return GLOBAL_OBJ;
}
function makeMain(hub) {
  const registry = getMainCarrier();
  const oldHub = getHubFromCarrier(registry);
  setHubOnCarrier(registry, hub);
  return oldHub;
}
function getCurrentHub() {
  const registry = getMainCarrier();
  if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
    setHubOnCarrier(registry, new Hub());
  }
  if (isNodeEnv()) {
    return getHubFromActiveDomain(registry);
  }
  return getHubFromCarrier(registry);
}
function getHubFromActiveDomain(registry) {
  try {
    const sentry2 = getMainCarrier().__SENTRY__;
    const activeDomain = sentry2 && sentry2.extensions && sentry2.extensions.domain && sentry2.extensions.domain.active;
    if (!activeDomain) {
      return getHubFromCarrier(registry);
    }
    if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
      const registryHubTopStack = getHubFromCarrier(registry).getStackTop();
      setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, Scope.clone(registryHubTopStack.scope)));
    }
    return getHubFromCarrier(activeDomain);
  } catch (_Oo) {
    return getHubFromCarrier(registry);
  }
}
function hasHubOnCarrier(carrier) {
  return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}
function getHubFromCarrier(carrier) {
  return getGlobalSingleton("hub", () => new Hub(), carrier);
}
function setHubOnCarrier(carrier, hub) {
  if (!carrier)
    return false;
  const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
  __SENTRY__.hub = hub;
  return true;
}
function hasTracingEnabled(maybeOptions) {
  if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) {
    return false;
  }
  const client = getCurrentHub().getClient();
  const options = maybeOptions || client && client.getOptions();
  return !!options && (options.enableTracing || "tracesSampleRate" in options || "tracesSampler" in options);
}
function getActiveTransaction$1(maybeHub) {
  const hub = maybeHub || getCurrentHub();
  const scope = hub.getScope();
  return scope && scope.getTransaction();
}
let errorsInstrumented = false;
function registerErrorInstrumentation() {
  if (errorsInstrumented) {
    return;
  }
  errorsInstrumented = true;
  addInstrumentationHandler("error", errorCallback);
  addInstrumentationHandler("unhandledrejection", errorCallback);
}
function errorCallback() {
  const activeTransaction = getActiveTransaction$1();
  if (activeTransaction) {
    const status = "internal_error";
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Transaction: ${status} -> Global error occured`);
    activeTransaction.setStatus(status);
  }
}
class SpanRecorder {
  __init() {
    this.spans = [];
  }
  constructor(maxlen = 1e3) {
    SpanRecorder.prototype.__init.call(this);
    this._maxlen = maxlen;
  }
  add(span) {
    if (this.spans.length > this._maxlen) {
      span.spanRecorder = void 0;
    } else {
      this.spans.push(span);
    }
  }
}
class Span {
  __init2() {
    this.traceId = uuid4();
  }
  __init3() {
    this.spanId = uuid4().substring(16);
  }
  __init4() {
    this.startTimestamp = timestampWithMs();
  }
  __init5() {
    this.tags = {};
  }
  __init6() {
    this.data = {};
  }
  __init7() {
    this.instrumenter = "sentry";
  }
  constructor(spanContext) {
    Span.prototype.__init2.call(this);
    Span.prototype.__init3.call(this);
    Span.prototype.__init4.call(this);
    Span.prototype.__init5.call(this);
    Span.prototype.__init6.call(this);
    Span.prototype.__init7.call(this);
    if (!spanContext) {
      return this;
    }
    if (spanContext.traceId) {
      this.traceId = spanContext.traceId;
    }
    if (spanContext.spanId) {
      this.spanId = spanContext.spanId;
    }
    if (spanContext.parentSpanId) {
      this.parentSpanId = spanContext.parentSpanId;
    }
    if ("sampled" in spanContext) {
      this.sampled = spanContext.sampled;
    }
    if (spanContext.op) {
      this.op = spanContext.op;
    }
    if (spanContext.description) {
      this.description = spanContext.description;
    }
    if (spanContext.data) {
      this.data = spanContext.data;
    }
    if (spanContext.tags) {
      this.tags = spanContext.tags;
    }
    if (spanContext.status) {
      this.status = spanContext.status;
    }
    if (spanContext.startTimestamp) {
      this.startTimestamp = spanContext.startTimestamp;
    }
    if (spanContext.endTimestamp) {
      this.endTimestamp = spanContext.endTimestamp;
    }
    if (spanContext.instrumenter) {
      this.instrumenter = spanContext.instrumenter;
    }
  }
  startChild(spanContext) {
    const childSpan = new Span({
      ...spanContext,
      parentSpanId: this.spanId,
      sampled: this.sampled,
      traceId: this.traceId
    });
    childSpan.spanRecorder = this.spanRecorder;
    if (childSpan.spanRecorder) {
      childSpan.spanRecorder.add(childSpan);
    }
    childSpan.transaction = this.transaction;
    if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && childSpan.transaction) {
      const opStr = spanContext && spanContext.op || "< unknown op >";
      const nameStr = childSpan.transaction.name || "< unknown name >";
      const idStr = childSpan.transaction.spanId;
      const logMessage = `[Tracing] Starting '${opStr}' span on transaction '${nameStr}' (${idStr}).`;
      childSpan.transaction.metadata.spanMetadata[childSpan.spanId] = { logMessage };
      logger.log(logMessage);
    }
    return childSpan;
  }
  setTag(key, value) {
    this.tags = { ...this.tags, [key]: value };
    return this;
  }
  setData(key, value) {
    this.data = { ...this.data, [key]: value };
    return this;
  }
  setStatus(value) {
    this.status = value;
    return this;
  }
  setHttpStatus(httpStatus) {
    this.setTag("http.status_code", String(httpStatus));
    const spanStatus = spanStatusfromHttpCode(httpStatus);
    if (spanStatus !== "unknown_error") {
      this.setStatus(spanStatus);
    }
    return this;
  }
  isSuccess() {
    return this.status === "ok";
  }
  finish(endTimestamp) {
    if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && this.transaction && this.transaction.spanId !== this.spanId) {
      const { logMessage } = this.transaction.metadata.spanMetadata[this.spanId];
      if (logMessage) {
        logger.log(logMessage.replace("Starting", "Finishing"));
      }
    }
    this.endTimestamp = typeof endTimestamp === "number" ? endTimestamp : timestampWithMs();
  }
  toTraceparent() {
    let sampledString = "";
    if (this.sampled !== void 0) {
      sampledString = this.sampled ? "-1" : "-0";
    }
    return `${this.traceId}-${this.spanId}${sampledString}`;
  }
  toContext() {
    return dropUndefinedKeys({
      data: this.data,
      description: this.description,
      endTimestamp: this.endTimestamp,
      op: this.op,
      parentSpanId: this.parentSpanId,
      sampled: this.sampled,
      spanId: this.spanId,
      startTimestamp: this.startTimestamp,
      status: this.status,
      tags: this.tags,
      traceId: this.traceId
    });
  }
  updateWithContext(spanContext) {
    this.data = spanContext.data || {};
    this.description = spanContext.description;
    this.endTimestamp = spanContext.endTimestamp;
    this.op = spanContext.op;
    this.parentSpanId = spanContext.parentSpanId;
    this.sampled = spanContext.sampled;
    this.spanId = spanContext.spanId || this.spanId;
    this.startTimestamp = spanContext.startTimestamp || this.startTimestamp;
    this.status = spanContext.status;
    this.tags = spanContext.tags || {};
    this.traceId = spanContext.traceId || this.traceId;
    return this;
  }
  getTraceContext() {
    return dropUndefinedKeys({
      data: Object.keys(this.data).length > 0 ? this.data : void 0,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      trace_id: this.traceId
    });
  }
  toJSON() {
    return dropUndefinedKeys({
      data: Object.keys(this.data).length > 0 ? this.data : void 0,
      description: this.description,
      op: this.op,
      parent_span_id: this.parentSpanId,
      span_id: this.spanId,
      start_timestamp: this.startTimestamp,
      status: this.status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      timestamp: this.endTimestamp,
      trace_id: this.traceId
    });
  }
}
function spanStatusfromHttpCode(httpStatus) {
  if (httpStatus < 400 && httpStatus >= 100) {
    return "ok";
  }
  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return "unauthenticated";
      case 403:
        return "permission_denied";
      case 404:
        return "not_found";
      case 409:
        return "already_exists";
      case 413:
        return "failed_precondition";
      case 429:
        return "resource_exhausted";
      default:
        return "invalid_argument";
    }
  }
  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return "unimplemented";
      case 503:
        return "unavailable";
      case 504:
        return "deadline_exceeded";
      default:
        return "internal_error";
    }
  }
  return "unknown_error";
}
class Transaction extends Span {
  __init() {
    this._measurements = {};
  }
  __init2() {
    this._contexts = {};
  }
  __init3() {
    this._frozenDynamicSamplingContext = void 0;
  }
  constructor(transactionContext, hub) {
    super(transactionContext);
    Transaction.prototype.__init.call(this);
    Transaction.prototype.__init2.call(this);
    Transaction.prototype.__init3.call(this);
    this._hub = hub || getCurrentHub();
    this._name = transactionContext.name || "";
    this.metadata = {
      source: "custom",
      ...transactionContext.metadata,
      spanMetadata: {}
    };
    this._trimEnd = transactionContext.trimEnd;
    this.transaction = this;
    const incomingDynamicSamplingContext = this.metadata.dynamicSamplingContext;
    if (incomingDynamicSamplingContext) {
      this._frozenDynamicSamplingContext = { ...incomingDynamicSamplingContext };
    }
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this.setName(newName);
  }
  setName(name, source = "custom") {
    this._name = name;
    this.metadata.source = source;
  }
  initSpanRecorder(maxlen = 1e3) {
    if (!this.spanRecorder) {
      this.spanRecorder = new SpanRecorder(maxlen);
    }
    this.spanRecorder.add(this);
  }
  setContext(key, context) {
    if (context === null) {
      delete this._contexts[key];
    } else {
      this._contexts[key] = context;
    }
  }
  setMeasurement(name, value, unit = "") {
    this._measurements[name] = { value, unit };
  }
  setMetadata(newMetadata) {
    this.metadata = { ...this.metadata, ...newMetadata };
  }
  finish(endTimestamp) {
    if (this.endTimestamp !== void 0) {
      return void 0;
    }
    if (!this.name) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
      this.name = "<unlabeled transaction>";
    }
    super.finish(endTimestamp);
    const client = this._hub.getClient();
    if (client && client.emit) {
      client.emit("finishTransaction", this);
    }
    if (this.sampled !== true) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
      if (client) {
        client.recordDroppedEvent("sample_rate", "transaction");
      }
      return void 0;
    }
    const finishedSpans = this.spanRecorder ? this.spanRecorder.spans.filter((s) => s !== this && s.endTimestamp) : [];
    if (this._trimEnd && finishedSpans.length > 0) {
      this.endTimestamp = finishedSpans.reduce((prev, current) => {
        if (prev.endTimestamp && current.endTimestamp) {
          return prev.endTimestamp > current.endTimestamp ? prev : current;
        }
        return prev;
      }).endTimestamp;
    }
    const metadata = this.metadata;
    const transaction = {
      contexts: {
        ...this._contexts,
        trace: this.getTraceContext()
      },
      spans: finishedSpans,
      start_timestamp: this.startTimestamp,
      tags: this.tags,
      timestamp: this.endTimestamp,
      transaction: this.name,
      type: "transaction",
      sdkProcessingMetadata: {
        ...metadata,
        dynamicSamplingContext: this.getDynamicSamplingContext()
      },
      ...metadata.source && {
        transaction_info: {
          source: metadata.source
        }
      }
    };
    const hasMeasurements = Object.keys(this._measurements).length > 0;
    if (hasMeasurements) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
        "[Measurements] Adding measurements to transaction",
        JSON.stringify(this._measurements, void 0, 2)
      );
      transaction.measurements = this._measurements;
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`);
    return this._hub.captureEvent(transaction);
  }
  toContext() {
    const spanContext = super.toContext();
    return dropUndefinedKeys({
      ...spanContext,
      name: this.name,
      trimEnd: this._trimEnd
    });
  }
  updateWithContext(transactionContext) {
    super.updateWithContext(transactionContext);
    this.name = transactionContext.name || "";
    this._trimEnd = transactionContext.trimEnd;
    return this;
  }
  getDynamicSamplingContext() {
    if (this._frozenDynamicSamplingContext) {
      return this._frozenDynamicSamplingContext;
    }
    const hub = this._hub || getCurrentHub();
    const client = hub && hub.getClient();
    if (!client)
      return {};
    const { environment, release } = client.getOptions() || {};
    const { publicKey: public_key } = client.getDsn() || {};
    const maybeSampleRate = this.metadata.sampleRate;
    const sample_rate = maybeSampleRate !== void 0 ? maybeSampleRate.toString() : void 0;
    const scope = hub.getScope();
    const { segment: user_segment } = scope && scope.getUser() || {};
    const source = this.metadata.source;
    const transaction = source && source !== "url" ? this.name : void 0;
    const dsc = dropUndefinedKeys({
      environment: environment || DEFAULT_ENVIRONMENT,
      release,
      transaction,
      user_segment,
      public_key,
      trace_id: this.traceId,
      sample_rate
    });
    return dsc;
  }
}
const TRACING_DEFAULTS = {
  idleTimeout: 1e3,
  finalTimeout: 3e4,
  heartbeatInterval: 5e3
};
const FINISH_REASON_TAG = "finishReason";
const IDLE_TRANSACTION_FINISH_REASONS = [
  "heartbeatFailed",
  "idleTimeout",
  "documentHidden",
  "finalTimeout",
  "externalFinish",
  "cancelled"
];
class IdleTransactionSpanRecorder extends SpanRecorder {
  constructor(_pushActivity, _popActivity, transactionSpanId, maxlen) {
    super(maxlen);
    this._pushActivity = _pushActivity;
    this._popActivity = _popActivity;
    this.transactionSpanId = transactionSpanId;
  }
  add(span) {
    if (span.spanId !== this.transactionSpanId) {
      span.finish = (endTimestamp) => {
        span.endTimestamp = typeof endTimestamp === "number" ? endTimestamp : timestampWithMs();
        this._popActivity(span.spanId);
      };
      if (span.endTimestamp === void 0) {
        this._pushActivity(span.spanId);
      }
    }
    super.add(span);
  }
}
class IdleTransaction extends Transaction {
  __init() {
    this.activities = {};
  }
  __init2() {
    this._heartbeatCounter = 0;
  }
  __init3() {
    this._finished = false;
  }
  __init4() {
    this._idleTimeoutCanceledPermanently = false;
  }
  __init5() {
    this._beforeFinishCallbacks = [];
  }
  __init6() {
    this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[4];
  }
  constructor(transactionContext, _idleHub, _idleTimeout = TRACING_DEFAULTS.idleTimeout, _finalTimeout = TRACING_DEFAULTS.finalTimeout, _heartbeatInterval = TRACING_DEFAULTS.heartbeatInterval, _onScope = false) {
    super(transactionContext, _idleHub);
    this._idleHub = _idleHub;
    this._idleTimeout = _idleTimeout;
    this._finalTimeout = _finalTimeout;
    this._heartbeatInterval = _heartbeatInterval;
    this._onScope = _onScope;
    IdleTransaction.prototype.__init.call(this);
    IdleTransaction.prototype.__init2.call(this);
    IdleTransaction.prototype.__init3.call(this);
    IdleTransaction.prototype.__init4.call(this);
    IdleTransaction.prototype.__init5.call(this);
    IdleTransaction.prototype.__init6.call(this);
    if (_onScope) {
      clearActiveTransaction(_idleHub);
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`);
      _idleHub.configureScope((scope) => scope.setSpan(this));
    }
    this._restartIdleTimeout();
    setTimeout(() => {
      if (!this._finished) {
        this.setStatus("deadline_exceeded");
        this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[3];
        this.finish();
      }
    }, this._finalTimeout);
  }
  finish(endTimestamp = timestampWithMs()) {
    this._finished = true;
    this.activities = {};
    if (this.op === "ui.action.click") {
      this.setTag(FINISH_REASON_TAG, this._finishReason);
    }
    if (this.spanRecorder) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] finishing IdleTransaction", new Date(endTimestamp * 1e3).toISOString(), this.op);
      for (const callback of this._beforeFinishCallbacks) {
        callback(this, endTimestamp);
      }
      this.spanRecorder.spans = this.spanRecorder.spans.filter((span) => {
        if (span.spanId === this.spanId) {
          return true;
        }
        if (!span.endTimestamp) {
          span.endTimestamp = endTimestamp;
          span.setStatus("cancelled");
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(span, void 0, 2));
        }
        const keepSpan = span.startTimestamp < endTimestamp;
        if (!keepSpan) {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
            "[Tracing] discarding Span since it happened after Transaction was finished",
            JSON.stringify(span, void 0, 2)
          );
        }
        return keepSpan;
      });
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] flushing IdleTransaction");
    } else {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] No active IdleTransaction");
    }
    if (this._onScope) {
      clearActiveTransaction(this._idleHub);
    }
    return super.finish(endTimestamp);
  }
  registerBeforeFinishCallback(callback) {
    this._beforeFinishCallbacks.push(callback);
  }
  initSpanRecorder(maxlen) {
    if (!this.spanRecorder) {
      const pushActivity = (id) => {
        if (this._finished) {
          return;
        }
        this._pushActivity(id);
      };
      const popActivity = (id) => {
        if (this._finished) {
          return;
        }
        this._popActivity(id);
      };
      this.spanRecorder = new IdleTransactionSpanRecorder(pushActivity, popActivity, this.spanId, maxlen);
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("Starting heartbeat");
      this._pingHeartbeat();
    }
    this.spanRecorder.add(this);
  }
  cancelIdleTimeout(endTimestamp, {
    restartOnChildSpanChange
  } = {
    restartOnChildSpanChange: true
  }) {
    this._idleTimeoutCanceledPermanently = restartOnChildSpanChange === false;
    if (this._idleTimeoutID) {
      clearTimeout(this._idleTimeoutID);
      this._idleTimeoutID = void 0;
      if (Object.keys(this.activities).length === 0 && this._idleTimeoutCanceledPermanently) {
        this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[5];
        this.finish(endTimestamp);
      }
    }
  }
  _restartIdleTimeout(endTimestamp) {
    this.cancelIdleTimeout();
    this._idleTimeoutID = setTimeout(() => {
      if (!this._finished && Object.keys(this.activities).length === 0) {
        this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[1];
        this.finish(endTimestamp);
      }
    }, this._idleTimeout);
  }
  _pushActivity(spanId) {
    this.cancelIdleTimeout(void 0, { restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently });
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] pushActivity: ${spanId}`);
    this.activities[spanId] = true;
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
  }
  _popActivity(spanId) {
    if (this.activities[spanId]) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] popActivity ${spanId}`);
      delete this.activities[spanId];
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] new activities count", Object.keys(this.activities).length);
    }
    if (Object.keys(this.activities).length === 0) {
      const endTimestamp = timestampWithMs();
      if (this._idleTimeoutCanceledPermanently) {
        this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[5];
        this.finish(endTimestamp);
      } else {
        this._restartIdleTimeout(endTimestamp + this._idleTimeout / 1e3);
      }
    }
  }
  _beat() {
    if (this._finished) {
      return;
    }
    const heartbeatString = Object.keys(this.activities).join("");
    if (heartbeatString === this._prevHeartbeatString) {
      this._heartbeatCounter++;
    } else {
      this._heartbeatCounter = 1;
    }
    this._prevHeartbeatString = heartbeatString;
    if (this._heartbeatCounter >= 3) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] Transaction finished because of no change for 3 heart beats");
      this.setStatus("deadline_exceeded");
      this._finishReason = IDLE_TRANSACTION_FINISH_REASONS[0];
      this.finish();
    } else {
      this._pingHeartbeat();
    }
  }
  _pingHeartbeat() {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`);
    setTimeout(() => {
      this._beat();
    }, this._heartbeatInterval);
  }
}
function clearActiveTransaction(hub) {
  const scope = hub.getScope();
  if (scope) {
    const transaction = scope.getTransaction();
    if (transaction) {
      scope.setSpan(void 0);
    }
  }
}
function traceHeaders() {
  const scope = this.getScope();
  if (scope) {
    const span = scope.getSpan();
    if (span) {
      return {
        "sentry-trace": span.toTraceparent()
      };
    }
  }
  return {};
}
function sample(transaction, options, samplingContext) {
  if (!hasTracingEnabled(options)) {
    transaction.sampled = false;
    return transaction;
  }
  if (transaction.sampled !== void 0) {
    transaction.setMetadata({
      sampleRate: Number(transaction.sampled)
    });
    return transaction;
  }
  let sampleRate;
  if (typeof options.tracesSampler === "function") {
    sampleRate = options.tracesSampler(samplingContext);
    transaction.setMetadata({
      sampleRate: Number(sampleRate)
    });
  } else if (samplingContext.parentSampled !== void 0) {
    sampleRate = samplingContext.parentSampled;
  } else if (typeof options.tracesSampleRate !== "undefined") {
    sampleRate = options.tracesSampleRate;
    transaction.setMetadata({
      sampleRate: Number(sampleRate)
    });
  } else {
    sampleRate = 1;
    transaction.setMetadata({
      sampleRate
    });
  }
  if (!isValidSampleRate(sampleRate)) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("[Tracing] Discarding transaction because of invalid sample rate.");
    transaction.sampled = false;
    return transaction;
  }
  if (!sampleRate) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
      `[Tracing] Discarding transaction because ${typeof options.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`
    );
    transaction.sampled = false;
    return transaction;
  }
  transaction.sampled = Math.random() < sampleRate;
  if (!transaction.sampled) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
      `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
        sampleRate
      )})`
    );
    return transaction;
  }
  (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] starting ${transaction.op} transaction - ${transaction.name}`);
  return transaction;
}
function isValidSampleRate(rate) {
  if (isNaN$1(rate) || !(typeof rate === "number" || typeof rate === "boolean")) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
      `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
        rate
      )} of type ${JSON.stringify(typeof rate)}.`
    );
    return false;
  }
  if (rate < 0 || rate > 1) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${rate}.`);
    return false;
  }
  return true;
}
function _startTransaction(transactionContext, customSamplingContext) {
  const client = this.getClient();
  const options = client && client.getOptions() || {};
  const configInstrumenter = options.instrumenter || "sentry";
  const transactionInstrumenter = transactionContext.instrumenter || "sentry";
  if (configInstrumenter !== transactionInstrumenter) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(
      `A transaction was started with instrumenter=\`${transactionInstrumenter}\`, but the SDK is configured with the \`${configInstrumenter}\` instrumenter.
The transaction will not be sampled. Please use the ${configInstrumenter} instrumentation to start transactions.`
    );
    transactionContext.sampled = false;
  }
  let transaction = new Transaction(transactionContext, this);
  transaction = sample(transaction, options, {
    parentSampled: transactionContext.parentSampled,
    transactionContext,
    ...customSamplingContext
  });
  if (transaction.sampled) {
    transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
  }
  if (client && client.emit) {
    client.emit("startTransaction", transaction);
  }
  return transaction;
}
function startIdleTransaction(hub, transactionContext, idleTimeout, finalTimeout, onScope, customSamplingContext, heartbeatInterval) {
  const client = hub.getClient();
  const options = client && client.getOptions() || {};
  let transaction = new IdleTransaction(transactionContext, hub, idleTimeout, finalTimeout, heartbeatInterval, onScope);
  transaction = sample(transaction, options, {
    parentSampled: transactionContext.parentSampled,
    transactionContext,
    ...customSamplingContext
  });
  if (transaction.sampled) {
    transaction.initSpanRecorder(options._experiments && options._experiments.maxSpans);
  }
  if (client && client.emit) {
    client.emit("startTransaction", transaction);
  }
  return transaction;
}
function addTracingExtensions() {
  const carrier = getMainCarrier();
  if (!carrier.__SENTRY__) {
    return;
  }
  carrier.__SENTRY__.extensions = carrier.__SENTRY__.extensions || {};
  if (!carrier.__SENTRY__.extensions.startTransaction) {
    carrier.__SENTRY__.extensions.startTransaction = _startTransaction;
  }
  if (!carrier.__SENTRY__.extensions.traceHeaders) {
    carrier.__SENTRY__.extensions.traceHeaders = traceHeaders;
  }
  registerErrorInstrumentation();
}
function captureException(exception, captureContext) {
  return getCurrentHub().captureException(exception, { captureContext });
}
function withScope(callback) {
  getCurrentHub().withScope(callback);
}
const SENTRY_API_VERSION = "7";
function getBaseApiEndpoint(dsn) {
  const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
  const port = dsn.port ? `:${dsn.port}` : "";
  return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
}
function _getIngestEndpoint(dsn) {
  return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
}
function _encodedAuth(dsn, sdkInfo) {
  return urlEncode({
    sentry_key: dsn.publicKey,
    sentry_version: SENTRY_API_VERSION,
    ...sdkInfo && { sentry_client: `${sdkInfo.name}/${sdkInfo.version}` }
  });
}
function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnelOrOptions = {}) {
  const tunnel = typeof tunnelOrOptions === "string" ? tunnelOrOptions : tunnelOrOptions.tunnel;
  const sdkInfo = typeof tunnelOrOptions === "string" || !tunnelOrOptions._metadata ? void 0 : tunnelOrOptions._metadata.sdk;
  return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
}
function enhanceEventWithSdkInfo(event, sdkInfo) {
  if (!sdkInfo) {
    return event;
  }
  event.sdk = event.sdk || {};
  event.sdk.name = event.sdk.name || sdkInfo.name;
  event.sdk.version = event.sdk.version || sdkInfo.version;
  event.sdk.integrations = [...event.sdk.integrations || [], ...sdkInfo.integrations || []];
  event.sdk.packages = [...event.sdk.packages || [], ...sdkInfo.packages || []];
  return event;
}
function createSessionEnvelope(session, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const envelopeHeaders = {
    sent_at: new Date().toISOString(),
    ...sdkInfo && { sdk: sdkInfo },
    ...!!tunnel && { dsn: dsnToString(dsn) }
  };
  const envelopeItem = "aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session];
  return createEnvelope(envelopeHeaders, [envelopeItem]);
}
function createEventEnvelope(event, dsn, metadata, tunnel) {
  const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
  const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
  enhanceEventWithSdkInfo(event, metadata && metadata.sdk);
  const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
  delete event.sdkProcessingMetadata;
  const eventItem = [{ type: eventType }, event];
  return createEnvelope(envelopeHeaders, [eventItem]);
}
const installedIntegrations = [];
function filterDuplicates(integrations) {
  const integrationsByName = {};
  integrations.forEach((currentInstance) => {
    const { name } = currentInstance;
    const existingInstance = integrationsByName[name];
    if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
      return;
    }
    integrationsByName[name] = currentInstance;
  });
  return Object.keys(integrationsByName).map((k) => integrationsByName[k]);
}
function getIntegrationsToSetup(options) {
  const defaultIntegrations2 = options.defaultIntegrations || [];
  const userIntegrations = options.integrations;
  defaultIntegrations2.forEach((integration) => {
    integration.isDefaultInstance = true;
  });
  let integrations;
  if (Array.isArray(userIntegrations)) {
    integrations = [...defaultIntegrations2, ...userIntegrations];
  } else if (typeof userIntegrations === "function") {
    integrations = arrayify(userIntegrations(defaultIntegrations2));
  } else {
    integrations = defaultIntegrations2;
  }
  const finalIntegrations = filterDuplicates(integrations);
  const debugIndex = findIndex(finalIntegrations, (integration) => integration.name === "Debug");
  if (debugIndex !== -1) {
    const [debugInstance] = finalIntegrations.splice(debugIndex, 1);
    finalIntegrations.push(debugInstance);
  }
  return finalIntegrations;
}
function setupIntegrations(integrations) {
  const integrationIndex = {};
  integrations.forEach((integration) => {
    if (integration) {
      setupIntegration(integration, integrationIndex);
    }
  });
  return integrationIndex;
}
function setupIntegration(integration, integrationIndex) {
  integrationIndex[integration.name] = integration;
  if (installedIntegrations.indexOf(integration.name) === -1) {
    integration.setupOnce(addGlobalEventProcessor, getCurrentHub);
    installedIntegrations.push(integration.name);
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Integration installed: ${integration.name}`);
  }
}
function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      return i;
    }
  }
  return -1;
}
function prepareEvent(options, event, hint, scope) {
  const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
  const prepared = {
    ...event,
    event_id: event.event_id || hint.event_id || uuid4(),
    timestamp: event.timestamp || dateTimestampInSeconds()
  };
  const integrations = hint.integrations || options.integrations.map((i) => i.name);
  applyClientOptions(prepared, options);
  applyIntegrationsMetadata(prepared, integrations);
  applyDebugMetadata(prepared, options.stackParser);
  let finalScope = scope;
  if (hint.captureContext) {
    finalScope = Scope.clone(finalScope).update(hint.captureContext);
  }
  let result = resolvedSyncPromise(prepared);
  if (finalScope) {
    if (finalScope.getAttachments) {
      const attachments = [...hint.attachments || [], ...finalScope.getAttachments()];
      if (attachments.length) {
        hint.attachments = attachments;
      }
    }
    result = finalScope.applyToEvent(prepared, hint);
  }
  return result.then((evt) => {
    if (typeof normalizeDepth === "number" && normalizeDepth > 0) {
      return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
    }
    return evt;
  });
}
function applyClientOptions(event, options) {
  const { environment, release, dist, maxValueLength = 250 } = options;
  if (!("environment" in event)) {
    event.environment = "environment" in options ? environment : DEFAULT_ENVIRONMENT;
  }
  if (event.release === void 0 && release !== void 0) {
    event.release = release;
  }
  if (event.dist === void 0 && dist !== void 0) {
    event.dist = dist;
  }
  if (event.message) {
    event.message = truncate(event.message, maxValueLength);
  }
  const exception = event.exception && event.exception.values && event.exception.values[0];
  if (exception && exception.value) {
    exception.value = truncate(exception.value, maxValueLength);
  }
  const request = event.request;
  if (request && request.url) {
    request.url = truncate(request.url, maxValueLength);
  }
}
function applyDebugMetadata(event, stackParser) {
  const debugIdMap = GLOBAL_OBJ._sentryDebugIds;
  if (!debugIdMap) {
    return;
  }
  const absPathDebugIdMap = Object.keys(debugIdMap).reduce((acc, debugIdStackTrace) => {
    const parsedStack = stackParser(debugIdStackTrace);
    for (const stackFrame of parsedStack) {
      if (stackFrame.abs_path) {
        acc[stackFrame.abs_path] = debugIdMap[debugIdStackTrace];
        break;
      }
    }
    return acc;
  }, {});
  const errorAbsPaths = /* @__PURE__ */ new Set();
  try {
    event.exception.values.forEach((exception) => {
      exception.stacktrace.frames.forEach((frame) => {
        if (frame.abs_path) {
          errorAbsPaths.add(frame.abs_path);
        }
      });
    });
  } catch (e) {
  }
  event.debug_meta = event.debug_meta || {};
  event.debug_meta.images = event.debug_meta.images || [];
  const images = event.debug_meta.images;
  errorAbsPaths.forEach((absPath) => {
    if (absPathDebugIdMap[absPath]) {
      images.push({
        type: "sourcemap",
        code_file: absPath,
        debug_id: absPathDebugIdMap[absPath]
      });
    }
  });
}
function applyIntegrationsMetadata(event, integrationNames) {
  if (integrationNames.length > 0) {
    event.sdk = event.sdk || {};
    event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
  }
}
function normalizeEvent(event, depth, maxBreadth) {
  if (!event) {
    return null;
  }
  const normalized = {
    ...event,
    ...event.breadcrumbs && {
      breadcrumbs: event.breadcrumbs.map((b) => ({
        ...b,
        ...b.data && {
          data: normalize(b.data, depth, maxBreadth)
        }
      }))
    },
    ...event.user && {
      user: normalize(event.user, depth, maxBreadth)
    },
    ...event.contexts && {
      contexts: normalize(event.contexts, depth, maxBreadth)
    },
    ...event.extra && {
      extra: normalize(event.extra, depth, maxBreadth)
    }
  };
  if (event.contexts && event.contexts.trace && normalized.contexts) {
    normalized.contexts.trace = event.contexts.trace;
    if (event.contexts.trace.data) {
      normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
    }
  }
  if (event.spans) {
    normalized.spans = event.spans.map((span) => {
      if (span.data) {
        span.data = normalize(span.data, depth, maxBreadth);
      }
      return span;
    });
  }
  return normalized;
}
const ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
class BaseClient {
  __init() {
    this._integrations = {};
  }
  __init2() {
    this._integrationsInitialized = false;
  }
  __init3() {
    this._numProcessing = 0;
  }
  __init4() {
    this._outcomes = {};
  }
  __init5() {
    this._hooks = {};
  }
  constructor(options) {
    BaseClient.prototype.__init.call(this);
    BaseClient.prototype.__init2.call(this);
    BaseClient.prototype.__init3.call(this);
    BaseClient.prototype.__init4.call(this);
    BaseClient.prototype.__init5.call(this);
    this._options = options;
    if (options.dsn) {
      this._dsn = makeDsn(options.dsn);
      const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, options);
      this._transport = options.transport({
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...options.transportOptions,
        url
      });
    } else {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("No DSN provided, client will not do anything.");
    }
  }
  captureException(exception, hint, scope) {
    if (checkOrSetAlreadyCaught(exception)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(ALREADY_SEEN_ERROR);
      return;
    }
    let eventId = hint && hint.event_id;
    this._process(
      this.eventFromException(exception, hint).then((event) => this._captureEvent(event, hint, scope)).then((result) => {
        eventId = result;
      })
    );
    return eventId;
  }
  captureMessage(message, level, hint, scope) {
    let eventId = hint && hint.event_id;
    const promisedEvent = isPrimitive(message) ? this.eventFromMessage(String(message), level, hint) : this.eventFromException(message, hint);
    this._process(
      promisedEvent.then((event) => this._captureEvent(event, hint, scope)).then((result) => {
        eventId = result;
      })
    );
    return eventId;
  }
  captureEvent(event, hint, scope) {
    if (hint && hint.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(ALREADY_SEEN_ERROR);
      return;
    }
    let eventId = hint && hint.event_id;
    this._process(
      this._captureEvent(event, hint, scope).then((result) => {
        eventId = result;
      })
    );
    return eventId;
  }
  captureSession(session) {
    if (!this._isEnabled()) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("SDK not enabled, will not capture session.");
      return;
    }
    if (!(typeof session.release === "string")) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Discarded session because of missing or non-string release");
    } else {
      this.sendSession(session);
      updateSession(session, { init: false });
    }
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(timeout) {
    const transport = this._transport;
    if (transport) {
      return this._isClientDoneProcessing(timeout).then((clientFinished) => {
        return transport.flush(timeout).then((transportFlushed) => clientFinished && transportFlushed);
      });
    } else {
      return resolvedSyncPromise(true);
    }
  }
  close(timeout) {
    return this.flush(timeout).then((result) => {
      this.getOptions().enabled = false;
      return result;
    });
  }
  setupIntegrations() {
    if (this._isEnabled() && !this._integrationsInitialized) {
      this._integrations = setupIntegrations(this._options.integrations);
      this._integrationsInitialized = true;
    }
  }
  getIntegrationById(integrationId) {
    return this._integrations[integrationId];
  }
  getIntegration(integration) {
    try {
      return this._integrations[integration.id] || null;
    } catch (_oO) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Client`);
      return null;
    }
  }
  addIntegration(integration) {
    setupIntegration(integration, this._integrations);
  }
  sendEvent(event, hint = {}) {
    if (this._dsn) {
      let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
      for (const attachment of hint.attachments || []) {
        env = addItemToEnvelope(
          env,
          createAttachmentEnvelopeItem(
            attachment,
            this._options.transportOptions && this._options.transportOptions.textEncoder
          )
        );
      }
      const promise = this._sendEnvelope(env);
      if (promise) {
        promise.then((sendResponse) => this.emit("afterSendEvent", event, sendResponse), null);
      }
    }
  }
  sendSession(session) {
    if (this._dsn) {
      const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
      void this._sendEnvelope(env);
    }
  }
  recordDroppedEvent(reason, category, _event) {
    if (this._options.sendClientReports) {
      const key = `${reason}:${category}`;
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Adding outcome: "${key}"`);
      this._outcomes[key] = this._outcomes[key] + 1 || 1;
    }
  }
  on(hook, callback) {
    if (!this._hooks[hook]) {
      this._hooks[hook] = [];
    }
    this._hooks[hook].push(callback);
  }
  emit(hook, ...rest) {
    if (this._hooks[hook]) {
      this._hooks[hook].forEach((callback) => callback(...rest));
    }
  }
  _updateSessionFromEvent(session, event) {
    let crashed = false;
    let errored = false;
    const exceptions = event.exception && event.exception.values;
    if (exceptions) {
      errored = true;
      for (const ex of exceptions) {
        const mechanism = ex.mechanism;
        if (mechanism && mechanism.handled === false) {
          crashed = true;
          break;
        }
      }
    }
    const sessionNonTerminal = session.status === "ok";
    const shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
    if (shouldUpdateAndSend) {
      updateSession(session, {
        ...crashed && { status: "crashed" },
        errors: session.errors || Number(errored || crashed)
      });
      this.captureSession(session);
    }
  }
  _isClientDoneProcessing(timeout) {
    return new SyncPromise((resolve) => {
      let ticked = 0;
      const tick = 1;
      const interval = setInterval(() => {
        if (this._numProcessing == 0) {
          clearInterval(interval);
          resolve(true);
        } else {
          ticked += tick;
          if (timeout && ticked >= timeout) {
            clearInterval(interval);
            resolve(false);
          }
        }
      }, tick);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== false && this._dsn !== void 0;
  }
  _prepareEvent(event, hint, scope) {
    const options = this.getOptions();
    const integrations = Object.keys(this._integrations);
    if (!hint.integrations && integrations.length > 0) {
      hint.integrations = integrations;
    }
    return prepareEvent(options, event, hint, scope);
  }
  _captureEvent(event, hint = {}, scope) {
    return this._processEvent(event, hint, scope).then(
      (finalEvent) => {
        return finalEvent.event_id;
      },
      (reason) => {
        if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
          const sentryError = reason;
          if (sentryError.logLevel === "log") {
            logger.log(sentryError.message);
          } else {
            logger.warn(sentryError);
          }
        }
        return void 0;
      }
    );
  }
  _processEvent(event, hint, scope) {
    const options = this.getOptions();
    const { sampleRate } = options;
    if (!this._isEnabled()) {
      return rejectedSyncPromise(new SentryError("SDK not enabled, will not capture event.", "log"));
    }
    const isTransaction = isTransactionEvent(event);
    const isError2 = isErrorEvent(event);
    const eventType = event.type || "error";
    const beforeSendLabel = `before send for type \`${eventType}\``;
    if (isError2 && typeof sampleRate === "number" && Math.random() > sampleRate) {
      this.recordDroppedEvent("sample_rate", "error", event);
      return rejectedSyncPromise(
        new SentryError(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`,
          "log"
        )
      );
    }
    const dataCategory = eventType === "replay_event" ? "replay" : eventType;
    return this._prepareEvent(event, hint, scope).then((prepared) => {
      if (prepared === null) {
        this.recordDroppedEvent("event_processor", dataCategory, event);
        throw new SentryError("An event processor returned `null`, will not send event.", "log");
      }
      const isInternalException = hint.data && hint.data.__sentry__ === true;
      if (isInternalException) {
        return prepared;
      }
      const result = processBeforeSend(options, prepared, hint);
      return _validateBeforeSendResult(result, beforeSendLabel);
    }).then((processedEvent) => {
      if (processedEvent === null) {
        this.recordDroppedEvent("before_send", dataCategory, event);
        throw new SentryError(`${beforeSendLabel} returned \`null\`, will not send event.`, "log");
      }
      const session = scope && scope.getSession();
      if (!isTransaction && session) {
        this._updateSessionFromEvent(session, processedEvent);
      }
      const transactionInfo = processedEvent.transaction_info;
      if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
        const source = "custom";
        processedEvent.transaction_info = {
          ...transactionInfo,
          source
        };
      }
      this.sendEvent(processedEvent, hint);
      return processedEvent;
    }).then(null, (reason) => {
      if (reason instanceof SentryError) {
        throw reason;
      }
      this.captureException(reason, {
        data: {
          __sentry__: true
        },
        originalException: reason
      });
      throw new SentryError(
        `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${reason}`
      );
    });
  }
  _process(promise) {
    this._numProcessing++;
    void promise.then(
      (value) => {
        this._numProcessing--;
        return value;
      },
      (reason) => {
        this._numProcessing--;
        return reason;
      }
    );
  }
  _sendEnvelope(envelope) {
    if (this._transport && this._dsn) {
      this.emit("beforeEnvelope", envelope);
      return this._transport.send(envelope).then(null, (reason) => {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Error while sending event:", reason);
      });
    } else {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Transport disabled");
    }
  }
  _clearOutcomes() {
    const outcomes = this._outcomes;
    this._outcomes = {};
    return Object.keys(outcomes).map((key) => {
      const [reason, category] = key.split(":");
      return {
        reason,
        category,
        quantity: outcomes[key]
      };
    });
  }
}
function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
  const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
  if (isThenable(beforeSendResult)) {
    return beforeSendResult.then(
      (event) => {
        if (!isPlainObject(event) && event !== null) {
          throw new SentryError(invalidValueError);
        }
        return event;
      },
      (e) => {
        throw new SentryError(`${beforeSendLabel} rejected with ${e}`);
      }
    );
  } else if (!isPlainObject(beforeSendResult) && beforeSendResult !== null) {
    throw new SentryError(invalidValueError);
  }
  return beforeSendResult;
}
function processBeforeSend(options, event, hint) {
  const { beforeSend, beforeSendTransaction } = options;
  if (isErrorEvent(event) && beforeSend) {
    return beforeSend(event, hint);
  }
  if (isTransactionEvent(event) && beforeSendTransaction) {
    return beforeSendTransaction(event, hint);
  }
  return event;
}
function isErrorEvent(event) {
  return event.type === void 0;
}
function isTransactionEvent(event) {
  return event.type === "transaction";
}
function initAndBind(clientClass, options) {
  if (options.debug === true) {
    if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
      logger.enable();
    } else {
      console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
    }
  }
  const hub = getCurrentHub();
  const scope = hub.getScope();
  if (scope) {
    scope.update(options.initialScope);
  }
  const client = new clientClass(options);
  hub.bindClient(client);
}
const DEFAULT_TRANSPORT_BUFFER_SIZE = 30;
function createTransport(options, makeRequest, buffer = makePromiseBuffer(
  options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE
)) {
  let rateLimits = {};
  const flush = (timeout) => buffer.drain(timeout);
  function send(envelope) {
    const filteredEnvelopeItems = [];
    forEachEnvelopeItem(envelope, (item, type) => {
      const envelopeItemDataCategory = envelopeItemTypeToDataCategory(type);
      if (isRateLimited(rateLimits, envelopeItemDataCategory)) {
        const event = getEventForEnvelopeItem(item, type);
        options.recordDroppedEvent("ratelimit_backoff", envelopeItemDataCategory, event);
      } else {
        filteredEnvelopeItems.push(item);
      }
    });
    if (filteredEnvelopeItems.length === 0) {
      return resolvedSyncPromise();
    }
    const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
    const recordEnvelopeLoss = (reason) => {
      forEachEnvelopeItem(filteredEnvelope, (item, type) => {
        const event = getEventForEnvelopeItem(item, type);
        options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type), event);
      });
    };
    const requestTask = () => makeRequest({ body: serializeEnvelope(filteredEnvelope, options.textEncoder) }).then(
      (response) => {
        if (response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
        }
        rateLimits = updateRateLimits(rateLimits, response);
        return response;
      },
      (error) => {
        recordEnvelopeLoss("network_error");
        throw error;
      }
    );
    return buffer.add(requestTask).then(
      (result) => result,
      (error) => {
        if (error instanceof SentryError) {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Skipped sending event because buffer is full.");
          recordEnvelopeLoss("queue_overflow");
          return resolvedSyncPromise();
        } else {
          throw error;
        }
      }
    );
  }
  send.__sentry__baseTransport__ = true;
  return {
    send,
    flush
  };
}
function getEventForEnvelopeItem(item, type) {
  if (type !== "event" && type !== "transaction") {
    return void 0;
  }
  return Array.isArray(item) ? item[1] : void 0;
}
const SDK_VERSION = "7.44.2";
let originalFunctionToString;
class FunctionToString {
  constructor() {
    FunctionToString.prototype.__init.call(this);
  }
  static __initStatic() {
    this.id = "FunctionToString";
  }
  __init() {
    this.name = FunctionToString.id;
  }
  setupOnce() {
    originalFunctionToString = Function.prototype.toString;
    Function.prototype.toString = function(...args) {
      const context = getOriginalFunction(this) || this;
      return originalFunctionToString.apply(context, args);
    };
  }
}
FunctionToString.__initStatic();
const DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
class InboundFilters {
  static __initStatic() {
    this.id = "InboundFilters";
  }
  __init() {
    this.name = InboundFilters.id;
  }
  constructor(_options = {}) {
    this._options = _options;
    InboundFilters.prototype.__init.call(this);
  }
  setupOnce(addGlobalEventProcessor2, getCurrentHub2) {
    const eventProcess = (event) => {
      const hub = getCurrentHub2();
      if (hub) {
        const self2 = hub.getIntegration(InboundFilters);
        if (self2) {
          const client = hub.getClient();
          const clientOptions = client ? client.getOptions() : {};
          const options = _mergeOptions(self2._options, clientOptions);
          return _shouldDropEvent$1(event, options) ? null : event;
        }
      }
      return event;
    };
    eventProcess.id = this.name;
    addGlobalEventProcessor2(eventProcess);
  }
}
InboundFilters.__initStatic();
function _mergeOptions(internalOptions = {}, clientOptions = {}) {
  return {
    allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
    denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
    ignoreErrors: [
      ...internalOptions.ignoreErrors || [],
      ...clientOptions.ignoreErrors || [],
      ...DEFAULT_IGNORE_ERRORS
    ],
    ignoreInternal: internalOptions.ignoreInternal !== void 0 ? internalOptions.ignoreInternal : true
  };
}
function _shouldDropEvent$1(event, options) {
  if (options.ignoreInternal && _isSentryError(event)) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${getEventDescription(event)}`);
    return true;
  }
  if (_isIgnoredError(event, options.ignoreErrors)) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
      `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${getEventDescription(event)}`
    );
    return true;
  }
  if (_isDeniedUrl(event, options.denyUrls)) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
      `Event dropped due to being matched by \`denyUrls\` option.
Event: ${getEventDescription(
        event
      )}.
Url: ${_getEventFilterUrl(event)}`
    );
    return true;
  }
  if (!_isAllowedUrl(event, options.allowUrls)) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
      `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${getEventDescription(
        event
      )}.
Url: ${_getEventFilterUrl(event)}`
    );
    return true;
  }
  return false;
}
function _isIgnoredError(event, ignoreErrors) {
  if (!ignoreErrors || !ignoreErrors.length) {
    return false;
  }
  return _getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
}
function _isDeniedUrl(event, denyUrls) {
  if (!denyUrls || !denyUrls.length) {
    return false;
  }
  const url = _getEventFilterUrl(event);
  return !url ? false : stringMatchesSomePattern(url, denyUrls);
}
function _isAllowedUrl(event, allowUrls) {
  if (!allowUrls || !allowUrls.length) {
    return true;
  }
  const url = _getEventFilterUrl(event);
  return !url ? true : stringMatchesSomePattern(url, allowUrls);
}
function _getPossibleEventMessages(event) {
  if (event.message) {
    return [event.message];
  }
  if (event.exception) {
    try {
      const { type = "", value = "" } = event.exception.values && event.exception.values[0] || {};
      return [`${value}`, `${type}: ${value}`];
    } catch (oO) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(`Cannot extract message for event ${getEventDescription(event)}`);
      return [];
    }
  }
  return [];
}
function _isSentryError(event) {
  try {
    return event.exception.values[0].type === "SentryError";
  } catch (e) {
  }
  return false;
}
function _getLastValidUrl(frames = []) {
  for (let i = frames.length - 1; i >= 0; i--) {
    const frame = frames[i];
    if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") {
      return frame.filename || null;
    }
  }
  return null;
}
function _getEventFilterUrl(event) {
  try {
    let frames;
    try {
      frames = event.exception.values[0].stacktrace.frames;
    } catch (e) {
    }
    return frames ? _getLastValidUrl(frames) : null;
  } catch (oO) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(`Cannot extract url for event ${getEventDescription(event)}`);
    return null;
  }
}
const WINDOW$1 = GLOBAL_OBJ;
let ignoreOnError = 0;
function shouldIgnoreOnError() {
  return ignoreOnError > 0;
}
function ignoreNextOnError() {
  ignoreOnError++;
  setTimeout(() => {
    ignoreOnError--;
  });
}
function wrap(fn, options = {}, before) {
  if (typeof fn !== "function") {
    return fn;
  }
  try {
    const wrapper = fn.__sentry_wrapped__;
    if (wrapper) {
      return wrapper;
    }
    if (getOriginalFunction(fn)) {
      return fn;
    }
  } catch (e) {
    return fn;
  }
  const sentryWrapped = function() {
    const args = Array.prototype.slice.call(arguments);
    try {
      if (before && typeof before === "function") {
        before.apply(this, arguments);
      }
      const wrappedArguments = args.map((arg) => wrap(arg, options));
      return fn.apply(this, wrappedArguments);
    } catch (ex) {
      ignoreNextOnError();
      withScope((scope) => {
        scope.addEventProcessor((event) => {
          if (options.mechanism) {
            addExceptionTypeValue(event, void 0, void 0);
            addExceptionMechanism(event, options.mechanism);
          }
          event.extra = {
            ...event.extra,
            arguments: args
          };
          return event;
        });
        captureException(ex);
      });
      throw ex;
    }
  };
  try {
    for (const property in fn) {
      if (Object.prototype.hasOwnProperty.call(fn, property)) {
        sentryWrapped[property] = fn[property];
      }
    }
  } catch (_oO) {
  }
  markFunctionWrapped(sentryWrapped, fn);
  addNonEnumerableProperty(fn, "__sentry_wrapped__", sentryWrapped);
  try {
    const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
    if (descriptor.configurable) {
      Object.defineProperty(sentryWrapped, "name", {
        get() {
          return fn.name;
        }
      });
    }
  } catch (_oO) {
  }
  return sentryWrapped;
}
function exceptionFromError(stackParser, ex) {
  const frames = parseStackFrames(stackParser, ex);
  const exception = {
    type: ex && ex.name,
    value: extractMessage(ex)
  };
  if (frames.length) {
    exception.stacktrace = { frames };
  }
  if (exception.type === void 0 && exception.value === "") {
    exception.value = "Unrecoverable error caught";
  }
  return exception;
}
function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
  const hub = getCurrentHub();
  const client = hub.getClient();
  const normalizeDepth = client && client.getOptions().normalizeDepth;
  const event = {
    exception: {
      values: [
        {
          type: isEvent(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
          value: `Non-Error ${isUnhandledRejection ? "promise rejection" : "exception"} captured with keys: ${extractExceptionKeysForMessage(exception)}`
        }
      ]
    },
    extra: {
      __serialized__: normalizeToSize(exception, normalizeDepth)
    }
  };
  if (syntheticException) {
    const frames = parseStackFrames(stackParser, syntheticException);
    if (frames.length) {
      event.exception.values[0].stacktrace = { frames };
    }
  }
  return event;
}
function eventFromError(stackParser, ex) {
  return {
    exception: {
      values: [exceptionFromError(stackParser, ex)]
    }
  };
}
function parseStackFrames(stackParser, ex) {
  const stacktrace = ex.stacktrace || ex.stack || "";
  const popSize = getPopSize(ex);
  try {
    return stackParser(stacktrace, popSize);
  } catch (e) {
  }
  return [];
}
const reactMinifiedRegexp = /Minified React error #\d+;/i;
function getPopSize(ex) {
  if (ex) {
    if (typeof ex.framesToPop === "number") {
      return ex.framesToPop;
    }
    if (reactMinifiedRegexp.test(ex.message)) {
      return 1;
    }
  }
  return 0;
}
function extractMessage(ex) {
  const message = ex && ex.message;
  if (!message) {
    return "No error message";
  }
  if (message.error && typeof message.error.message === "string") {
    return message.error.message;
  }
  return message;
}
function eventFromException(stackParser, exception, hint, attachStacktrace) {
  const syntheticException = hint && hint.syntheticException || void 0;
  const event = eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace);
  addExceptionMechanism(event);
  event.level = "error";
  if (hint && hint.event_id) {
    event.event_id = hint.event_id;
  }
  return resolvedSyncPromise(event);
}
function eventFromMessage(stackParser, message, level = "info", hint, attachStacktrace) {
  const syntheticException = hint && hint.syntheticException || void 0;
  const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
  event.level = level;
  if (hint && hint.event_id) {
    event.event_id = hint.event_id;
  }
  return resolvedSyncPromise(event);
}
function eventFromUnknownInput(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
  let event;
  if (isErrorEvent$1(exception) && exception.error) {
    const errorEvent = exception;
    return eventFromError(stackParser, errorEvent.error);
  }
  if (isDOMError(exception) || isDOMException(exception)) {
    const domException = exception;
    if ("stack" in exception) {
      event = eventFromError(stackParser, exception);
    } else {
      const name = domException.name || (isDOMError(domException) ? "DOMError" : "DOMException");
      const message = domException.message ? `${name}: ${domException.message}` : name;
      event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
      addExceptionTypeValue(event, message);
    }
    if ("code" in domException) {
      event.tags = { ...event.tags, "DOMException.code": `${domException.code}` };
    }
    return event;
  }
  if (isError(exception)) {
    return eventFromError(stackParser, exception);
  }
  if (isPlainObject(exception) || isEvent(exception)) {
    const objectException = exception;
    event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
    addExceptionMechanism(event, {
      synthetic: true
    });
    return event;
  }
  event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
  addExceptionTypeValue(event, `${exception}`, void 0);
  addExceptionMechanism(event, {
    synthetic: true
  });
  return event;
}
function eventFromString(stackParser, input, syntheticException, attachStacktrace) {
  const event = {
    message: input
  };
  if (attachStacktrace && syntheticException) {
    const frames = parseStackFrames(stackParser, syntheticException);
    if (frames.length) {
      event.exception = {
        values: [{ value: input, stacktrace: { frames } }]
      };
    }
  }
  return event;
}
const MAX_ALLOWED_STRING_LENGTH = 1024;
const BREADCRUMB_INTEGRATION_ID = "Breadcrumbs";
class Breadcrumbs {
  static __initStatic() {
    this.id = BREADCRUMB_INTEGRATION_ID;
  }
  __init() {
    this.name = Breadcrumbs.id;
  }
  constructor(options) {
    Breadcrumbs.prototype.__init.call(this);
    this.options = {
      console: true,
      dom: true,
      fetch: true,
      history: true,
      sentry: true,
      xhr: true,
      ...options
    };
  }
  setupOnce() {
    if (this.options.console) {
      addInstrumentationHandler("console", _consoleBreadcrumb);
    }
    if (this.options.dom) {
      addInstrumentationHandler("dom", _domBreadcrumb(this.options.dom));
    }
    if (this.options.xhr) {
      addInstrumentationHandler("xhr", _xhrBreadcrumb);
    }
    if (this.options.fetch) {
      addInstrumentationHandler("fetch", _fetchBreadcrumb);
    }
    if (this.options.history) {
      addInstrumentationHandler("history", _historyBreadcrumb);
    }
  }
  addSentryBreadcrumb(event) {
    if (this.options.sentry) {
      getCurrentHub().addBreadcrumb(
        {
          category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
          event_id: event.event_id,
          level: event.level,
          message: getEventDescription(event)
        },
        {
          event
        }
      );
    }
  }
}
Breadcrumbs.__initStatic();
function _domBreadcrumb(dom) {
  function _innerDomBreadcrumb(handlerData) {
    let target;
    let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : void 0;
    let maxStringLength = typeof dom === "object" && typeof dom.maxStringLength === "number" ? dom.maxStringLength : void 0;
    if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`
      );
      maxStringLength = MAX_ALLOWED_STRING_LENGTH;
    }
    if (typeof keyAttrs === "string") {
      keyAttrs = [keyAttrs];
    }
    try {
      const event = handlerData.event;
      target = _isEvent(event) ? htmlTreeAsString(event.target, { keyAttrs, maxStringLength }) : htmlTreeAsString(event, { keyAttrs, maxStringLength });
    } catch (e) {
      target = "<unknown>";
    }
    if (target.length === 0) {
      return;
    }
    getCurrentHub().addBreadcrumb(
      {
        category: `ui.${handlerData.name}`,
        message: target
      },
      {
        event: handlerData.event,
        name: handlerData.name,
        global: handlerData.global
      }
    );
  }
  return _innerDomBreadcrumb;
}
function _consoleBreadcrumb(handlerData) {
  for (let i = 0; i < handlerData.args.length; i++) {
    if (handlerData.args[i] === "ref=Ref<") {
      handlerData.args[i + 1] = "viewRef";
      break;
    }
  }
  const breadcrumb = {
    category: "console",
    data: {
      arguments: handlerData.args,
      logger: "console"
    },
    level: severityLevelFromString(handlerData.level),
    message: safeJoin(handlerData.args, " ")
  };
  if (handlerData.level === "assert") {
    if (handlerData.args[0] === false) {
      breadcrumb.message = `Assertion failed: ${safeJoin(handlerData.args.slice(1), " ") || "console.assert"}`;
      breadcrumb.data.arguments = handlerData.args.slice(1);
    } else {
      return;
    }
  }
  getCurrentHub().addBreadcrumb(breadcrumb, {
    input: handlerData.args,
    level: handlerData.level
  });
}
function _xhrBreadcrumb(handlerData) {
  const { startTimestamp, endTimestamp } = handlerData;
  if (!startTimestamp || !endTimestamp || !handlerData.xhr.__sentry_xhr__) {
    return;
  }
  const { method, url, status_code, body } = handlerData.xhr.__sentry_xhr__;
  const data = {
    method,
    url,
    status_code
  };
  const hint = {
    xhr: handlerData.xhr,
    input: body,
    startTimestamp,
    endTimestamp
  };
  getCurrentHub().addBreadcrumb(
    {
      category: "xhr",
      data,
      type: "http"
    },
    hint
  );
}
function _fetchBreadcrumb(handlerData) {
  const { startTimestamp, endTimestamp } = handlerData;
  if (!endTimestamp) {
    return;
  }
  if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") {
    return;
  }
  if (handlerData.error) {
    const data = handlerData.fetchData;
    const hint = {
      data: handlerData.error,
      input: handlerData.args,
      startTimestamp,
      endTimestamp
    };
    getCurrentHub().addBreadcrumb(
      {
        category: "fetch",
        data,
        level: "error",
        type: "http"
      },
      hint
    );
  } else {
    const data = {
      ...handlerData.fetchData,
      status_code: handlerData.response && handlerData.response.status
    };
    const hint = {
      input: handlerData.args,
      response: handlerData.response,
      startTimestamp,
      endTimestamp
    };
    getCurrentHub().addBreadcrumb(
      {
        category: "fetch",
        data,
        type: "http"
      },
      hint
    );
  }
}
function _historyBreadcrumb(handlerData) {
  let from = handlerData.from;
  let to = handlerData.to;
  const parsedLoc = parseUrl(WINDOW$1.location.href);
  let parsedFrom = parseUrl(from);
  const parsedTo = parseUrl(to);
  if (!parsedFrom.path) {
    parsedFrom = parsedLoc;
  }
  if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
    to = parsedTo.relative;
  }
  if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
    from = parsedFrom.relative;
  }
  getCurrentHub().addBreadcrumb({
    category: "navigation",
    data: {
      from,
      to
    }
  });
}
function _isEvent(event) {
  return event && !!event.target;
}
class BrowserClient extends BaseClient {
  constructor(options) {
    const sdkSource = WINDOW$1.SENTRY_SDK_SOURCE || getSDKSource();
    options._metadata = options._metadata || {};
    options._metadata.sdk = options._metadata.sdk || {
      name: "sentry.javascript.browser",
      packages: [
        {
          name: `${sdkSource}:@sentry/browser`,
          version: SDK_VERSION
        }
      ],
      version: SDK_VERSION
    };
    super(options);
    if (options.sendClientReports && WINDOW$1.document) {
      WINDOW$1.document.addEventListener("visibilitychange", () => {
        if (WINDOW$1.document.visibilityState === "hidden") {
          this._flushOutcomes();
        }
      });
    }
  }
  eventFromException(exception, hint) {
    return eventFromException(this._options.stackParser, exception, hint, this._options.attachStacktrace);
  }
  eventFromMessage(message, level = "info", hint) {
    return eventFromMessage(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
  }
  sendEvent(event, hint) {
    const breadcrumbIntegration = this.getIntegrationById(BREADCRUMB_INTEGRATION_ID);
    if (breadcrumbIntegration && breadcrumbIntegration.addSentryBreadcrumb) {
      breadcrumbIntegration.addSentryBreadcrumb(event);
    }
    super.sendEvent(event, hint);
  }
  _prepareEvent(event, hint, scope) {
    event.platform = event.platform || "javascript";
    return super._prepareEvent(event, hint, scope);
  }
  _flushOutcomes() {
    const outcomes = this._clearOutcomes();
    if (outcomes.length === 0) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("No dsn provided, will not send outcomes");
      return;
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("Sending outcomes:", outcomes);
    const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, this._options);
    const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));
    try {
      const isRealNavigator = Object.prototype.toString.call(WINDOW$1 && WINDOW$1.navigator) === "[object Navigator]";
      const hasSendBeacon = isRealNavigator && typeof WINDOW$1.navigator.sendBeacon === "function";
      if (hasSendBeacon && !this._options.transportOptions) {
        const sendBeacon = WINDOW$1.navigator.sendBeacon.bind(WINDOW$1.navigator);
        sendBeacon(url, serializeEnvelope(envelope));
      } else {
        void this._sendEnvelope(envelope);
      }
    } catch (e) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(e);
    }
  }
}
let cachedFetchImpl = void 0;
function getNativeFetchImplementation() {
  if (cachedFetchImpl) {
    return cachedFetchImpl;
  }
  if (isNativeFetch(WINDOW$1.fetch)) {
    return cachedFetchImpl = WINDOW$1.fetch.bind(WINDOW$1);
  }
  const document2 = WINDOW$1.document;
  let fetchImpl = WINDOW$1.fetch;
  if (document2 && typeof document2.createElement === "function") {
    try {
      const sandbox = document2.createElement("iframe");
      sandbox.hidden = true;
      document2.head.appendChild(sandbox);
      const contentWindow = sandbox.contentWindow;
      if (contentWindow && contentWindow.fetch) {
        fetchImpl = contentWindow.fetch;
      }
      document2.head.removeChild(sandbox);
    } catch (e) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
    }
  }
  return cachedFetchImpl = fetchImpl.bind(WINDOW$1);
}
function clearCachedFetchImplementation() {
  cachedFetchImpl = void 0;
}
function makeFetchTransport(options, nativeFetch = getNativeFetchImplementation()) {
  function makeRequest(request) {
    const requestOptions = {
      body: request.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: options.headers,
      keepalive: request.body.length <= 65536,
      ...options.fetchOptions
    };
    try {
      return nativeFetch(options.url, requestOptions).then((response) => ({
        statusCode: response.status,
        headers: {
          "x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
          "retry-after": response.headers.get("Retry-After")
        }
      }));
    } catch (e) {
      clearCachedFetchImplementation();
      return rejectedSyncPromise(e);
    }
  }
  return createTransport(options, makeRequest);
}
const XHR_READYSTATE_DONE = 4;
function makeXHRTransport(options) {
  function makeRequest(request) {
    return new SyncPromise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onerror = reject;
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XHR_READYSTATE_DONE) {
          resolve({
            statusCode: xhr.status,
            headers: {
              "x-sentry-rate-limits": xhr.getResponseHeader("X-Sentry-Rate-Limits"),
              "retry-after": xhr.getResponseHeader("Retry-After")
            }
          });
        }
      };
      xhr.open("POST", options.url);
      for (const header in options.headers) {
        if (Object.prototype.hasOwnProperty.call(options.headers, header)) {
          xhr.setRequestHeader(header, options.headers[header]);
        }
      }
      xhr.send(request.body);
    });
  }
  return createTransport(options, makeRequest);
}
const UNKNOWN_FUNCTION = "?";
const CHROME_PRIORITY = 30;
const WINJS_PRIORITY = 40;
const GECKO_PRIORITY = 50;
function createFrame(filename, func, lineno, colno) {
  const frame = {
    filename,
    abs_path: filename,
    function: func,
    in_app: true
  };
  if (lineno !== void 0) {
    frame.lineno = lineno;
  }
  if (colno !== void 0) {
    frame.colno = colno;
  }
  return frame;
}
const chromeRegex = /^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?(?:async )?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const chrome = (line) => {
  const parts = chromeRegex.exec(line);
  if (parts) {
    const isEval = parts[2] && parts[2].indexOf("eval") === 0;
    if (isEval) {
      const subMatch = chromeEvalRegex.exec(parts[2]);
      if (subMatch) {
        parts[2] = subMatch[1];
        parts[3] = subMatch[2];
        parts[4] = subMatch[3];
      }
    }
    const [func, filename] = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]);
    return createFrame(filename, func, parts[3] ? +parts[3] : void 0, parts[4] ? +parts[4] : void 0);
  }
  return;
};
const chromeStackLineParser = [CHROME_PRIORITY, chrome];
const geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
const gecko = (line) => {
  const parts = geckoREgex.exec(line);
  if (parts) {
    const isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
    if (isEval) {
      const subMatch = geckoEvalRegex.exec(parts[3]);
      if (subMatch) {
        parts[1] = parts[1] || "eval";
        parts[3] = subMatch[1];
        parts[4] = subMatch[2];
        parts[5] = "";
      }
    }
    let filename = parts[3];
    let func = parts[1] || UNKNOWN_FUNCTION;
    [func, filename] = extractSafariExtensionDetails(func, filename);
    return createFrame(filename, func, parts[4] ? +parts[4] : void 0, parts[5] ? +parts[5] : void 0);
  }
  return;
};
const geckoStackLineParser = [GECKO_PRIORITY, gecko];
const winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
const winjs = (line) => {
  const parts = winjsRegex.exec(line);
  return parts ? createFrame(parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : void 0) : void 0;
};
const winjsStackLineParser = [WINJS_PRIORITY, winjs];
const defaultStackLineParsers = [chromeStackLineParser, geckoStackLineParser, winjsStackLineParser];
const defaultStackParser = createStackParser(...defaultStackLineParsers);
const extractSafariExtensionDetails = (func, filename) => {
  const isSafariExtension = func.indexOf("safari-extension") !== -1;
  const isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
  return isSafariExtension || isSafariWebExtension ? [
    func.indexOf("@") !== -1 ? func.split("@")[0] : UNKNOWN_FUNCTION,
    isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`
  ] : [func, filename];
};
class GlobalHandlers {
  static __initStatic() {
    this.id = "GlobalHandlers";
  }
  __init() {
    this.name = GlobalHandlers.id;
  }
  __init2() {
    this._installFunc = {
      onerror: _installGlobalOnErrorHandler,
      onunhandledrejection: _installGlobalOnUnhandledRejectionHandler
    };
  }
  constructor(options) {
    GlobalHandlers.prototype.__init.call(this);
    GlobalHandlers.prototype.__init2.call(this);
    this._options = {
      onerror: true,
      onunhandledrejection: true,
      ...options
    };
  }
  setupOnce() {
    Error.stackTraceLimit = 50;
    const options = this._options;
    for (const key in options) {
      const installFunc = this._installFunc[key];
      if (installFunc && options[key]) {
        globalHandlerLog(key);
        installFunc();
        this._installFunc[key] = void 0;
      }
    }
  }
}
GlobalHandlers.__initStatic();
function _installGlobalOnErrorHandler() {
  addInstrumentationHandler(
    "error",
    (data) => {
      const [hub, stackParser, attachStacktrace] = getHubAndOptions();
      if (!hub.getIntegration(GlobalHandlers)) {
        return;
      }
      const { msg, url, line, column, error } = data;
      if (shouldIgnoreOnError() || error && error.__sentry_own_request__) {
        return;
      }
      const event = error === void 0 && isString(msg) ? _eventFromIncompleteOnError(msg, url, line, column) : _enhanceEventWithInitialFrame(
        eventFromUnknownInput(stackParser, error || msg, void 0, attachStacktrace, false),
        url,
        line,
        column
      );
      event.level = "error";
      addMechanismAndCapture(hub, error, event, "onerror");
    }
  );
}
function _installGlobalOnUnhandledRejectionHandler() {
  addInstrumentationHandler(
    "unhandledrejection",
    (e) => {
      const [hub, stackParser, attachStacktrace] = getHubAndOptions();
      if (!hub.getIntegration(GlobalHandlers)) {
        return;
      }
      let error = e;
      try {
        if ("reason" in e) {
          error = e.reason;
        } else if ("detail" in e && "reason" in e.detail) {
          error = e.detail.reason;
        }
      } catch (_oO) {
      }
      if (shouldIgnoreOnError() || error && error.__sentry_own_request__) {
        return true;
      }
      const event = isPrimitive(error) ? _eventFromRejectionWithPrimitive(error) : eventFromUnknownInput(stackParser, error, void 0, attachStacktrace, true);
      event.level = "error";
      addMechanismAndCapture(hub, error, event, "onunhandledrejection");
      return;
    }
  );
}
function _eventFromRejectionWithPrimitive(reason) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(reason)}`
        }
      ]
    }
  };
}
function _eventFromIncompleteOnError(msg, url, line, column) {
  const ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
  let message = isErrorEvent$1(msg) ? msg.message : msg;
  let name = "Error";
  const groups = message.match(ERROR_TYPES_RE);
  if (groups) {
    name = groups[1];
    message = groups[2];
  }
  const event = {
    exception: {
      values: [
        {
          type: name,
          value: message
        }
      ]
    }
  };
  return _enhanceEventWithInitialFrame(event, url, line, column);
}
function _enhanceEventWithInitialFrame(event, url, line, column) {
  const e = event.exception = event.exception || {};
  const ev = e.values = e.values || [];
  const ev0 = ev[0] = ev[0] || {};
  const ev0s = ev0.stacktrace = ev0.stacktrace || {};
  const ev0sf = ev0s.frames = ev0s.frames || [];
  const colno = isNaN(parseInt(column, 10)) ? void 0 : column;
  const lineno = isNaN(parseInt(line, 10)) ? void 0 : line;
  const filename = isString(url) && url.length > 0 ? url : getLocationHref();
  if (ev0sf.length === 0) {
    ev0sf.push({
      colno,
      filename,
      function: "?",
      in_app: true,
      lineno
    });
  }
  return event;
}
function globalHandlerLog(type) {
  (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Global Handler attached: ${type}`);
}
function addMechanismAndCapture(hub, error, event, type) {
  addExceptionMechanism(event, {
    handled: false,
    type
  });
  hub.captureEvent(event, {
    originalException: error
  });
}
function getHubAndOptions() {
  const hub = getCurrentHub();
  const client = hub.getClient();
  const options = client && client.getOptions() || {
    stackParser: () => [],
    attachStacktrace: false
  };
  return [hub, options.stackParser, options.attachStacktrace];
}
const DEFAULT_EVENT_TARGET = [
  "EventTarget",
  "Window",
  "Node",
  "ApplicationCache",
  "AudioTrackList",
  "ChannelMergerNode",
  "CryptoOperation",
  "EventSource",
  "FileReader",
  "HTMLUnknownElement",
  "IDBDatabase",
  "IDBRequest",
  "IDBTransaction",
  "KeyOperation",
  "MediaController",
  "MessagePort",
  "ModalWindow",
  "Notification",
  "SVGElementInstance",
  "Screen",
  "TextTrack",
  "TextTrackCue",
  "TextTrackList",
  "WebSocket",
  "WebSocketWorker",
  "Worker",
  "XMLHttpRequest",
  "XMLHttpRequestEventTarget",
  "XMLHttpRequestUpload"
];
class TryCatch {
  static __initStatic() {
    this.id = "TryCatch";
  }
  __init() {
    this.name = TryCatch.id;
  }
  constructor(options) {
    TryCatch.prototype.__init.call(this);
    this._options = {
      XMLHttpRequest: true,
      eventTarget: true,
      requestAnimationFrame: true,
      setInterval: true,
      setTimeout: true,
      ...options
    };
  }
  setupOnce() {
    if (this._options.setTimeout) {
      fill(WINDOW$1, "setTimeout", _wrapTimeFunction);
    }
    if (this._options.setInterval) {
      fill(WINDOW$1, "setInterval", _wrapTimeFunction);
    }
    if (this._options.requestAnimationFrame) {
      fill(WINDOW$1, "requestAnimationFrame", _wrapRAF);
    }
    if (this._options.XMLHttpRequest && "XMLHttpRequest" in WINDOW$1) {
      fill(XMLHttpRequest.prototype, "send", _wrapXHR);
    }
    const eventTargetOption = this._options.eventTarget;
    if (eventTargetOption) {
      const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
      eventTarget.forEach(_wrapEventTarget);
    }
  }
}
TryCatch.__initStatic();
function _wrapTimeFunction(original) {
  return function(...args) {
    const originalCallback = args[0];
    args[0] = wrap(originalCallback, {
      mechanism: {
        data: { function: getFunctionName(original) },
        handled: true,
        type: "instrument"
      }
    });
    return original.apply(this, args);
  };
}
function _wrapRAF(original) {
  return function(callback) {
    return original.apply(this, [
      wrap(callback, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: getFunctionName(original)
          },
          handled: true,
          type: "instrument"
        }
      })
    ]);
  };
}
function _wrapXHR(originalSend) {
  return function(...args) {
    const xhr = this;
    const xmlHttpRequestProps = ["onload", "onerror", "onprogress", "onreadystatechange"];
    xmlHttpRequestProps.forEach((prop) => {
      if (prop in xhr && typeof xhr[prop] === "function") {
        fill(xhr, prop, function(original) {
          const wrapOptions = {
            mechanism: {
              data: {
                function: prop,
                handler: getFunctionName(original)
              },
              handled: true,
              type: "instrument"
            }
          };
          const originalFunction = getOriginalFunction(original);
          if (originalFunction) {
            wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
          }
          return wrap(original, wrapOptions);
        });
      }
    });
    return originalSend.apply(this, args);
  };
}
function _wrapEventTarget(target) {
  const globalObject = WINDOW$1;
  const proto = globalObject[target] && globalObject[target].prototype;
  if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) {
    return;
  }
  fill(proto, "addEventListener", function(original) {
    return function(eventName, fn, options) {
      try {
        if (typeof fn.handleEvent === "function") {
          fn.handleEvent = wrap(fn.handleEvent, {
            mechanism: {
              data: {
                function: "handleEvent",
                handler: getFunctionName(fn),
                target
              },
              handled: true,
              type: "instrument"
            }
          });
        }
      } catch (err) {
      }
      return original.apply(this, [
        eventName,
        wrap(fn, {
          mechanism: {
            data: {
              function: "addEventListener",
              handler: getFunctionName(fn),
              target
            },
            handled: true,
            type: "instrument"
          }
        }),
        options
      ]);
    };
  });
  fill(
    proto,
    "removeEventListener",
    function(originalRemoveEventListener) {
      return function(eventName, fn, options) {
        const wrappedEventHandler = fn;
        try {
          const originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
          if (originalEventHandler) {
            originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
          }
        } catch (e) {
        }
        return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
      };
    }
  );
}
const DEFAULT_KEY = "cause";
const DEFAULT_LIMIT = 5;
class LinkedErrors {
  static __initStatic() {
    this.id = "LinkedErrors";
  }
  __init() {
    this.name = LinkedErrors.id;
  }
  constructor(options = {}) {
    LinkedErrors.prototype.__init.call(this);
    this._key = options.key || DEFAULT_KEY;
    this._limit = options.limit || DEFAULT_LIMIT;
  }
  setupOnce() {
    const client = getCurrentHub().getClient();
    if (!client) {
      return;
    }
    addGlobalEventProcessor((event, hint) => {
      const self2 = getCurrentHub().getIntegration(LinkedErrors);
      return self2 ? _handler(client.getOptions().stackParser, self2._key, self2._limit, event, hint) : event;
    });
  }
}
LinkedErrors.__initStatic();
function _handler(parser, key, limit, event, hint) {
  if (!event.exception || !event.exception.values || !hint || !isInstanceOf(hint.originalException, Error)) {
    return event;
  }
  const linkedErrors = _walkErrorTree(parser, limit, hint.originalException, key);
  event.exception.values = [...linkedErrors, ...event.exception.values];
  return event;
}
function _walkErrorTree(parser, limit, error, key, stack = []) {
  if (!isInstanceOf(error[key], Error) || stack.length + 1 >= limit) {
    return stack;
  }
  const exception = exceptionFromError(parser, error[key]);
  return _walkErrorTree(parser, limit, error[key], key, [exception, ...stack]);
}
class HttpContext {
  constructor() {
    HttpContext.prototype.__init.call(this);
  }
  static __initStatic() {
    this.id = "HttpContext";
  }
  __init() {
    this.name = HttpContext.id;
  }
  setupOnce() {
    addGlobalEventProcessor((event) => {
      if (getCurrentHub().getIntegration(HttpContext)) {
        if (!WINDOW$1.navigator && !WINDOW$1.location && !WINDOW$1.document) {
          return event;
        }
        const url = event.request && event.request.url || WINDOW$1.location && WINDOW$1.location.href;
        const { referrer } = WINDOW$1.document || {};
        const { userAgent } = WINDOW$1.navigator || {};
        const headers = {
          ...event.request && event.request.headers,
          ...referrer && { Referer: referrer },
          ...userAgent && { "User-Agent": userAgent }
        };
        const request = { ...event.request, ...url && { url }, headers };
        return { ...event, request };
      }
      return event;
    });
  }
}
HttpContext.__initStatic();
class Dedupe {
  constructor() {
    Dedupe.prototype.__init.call(this);
  }
  static __initStatic() {
    this.id = "Dedupe";
  }
  __init() {
    this.name = Dedupe.id;
  }
  setupOnce(addGlobalEventProcessor2, getCurrentHub2) {
    const eventProcessor = (currentEvent) => {
      if (currentEvent.type) {
        return currentEvent;
      }
      const self2 = getCurrentHub2().getIntegration(Dedupe);
      if (self2) {
        try {
          if (_shouldDropEvent(currentEvent, self2._previousEvent)) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Event dropped due to being a duplicate of previously captured event.");
            return null;
          }
        } catch (_oO) {
          return self2._previousEvent = currentEvent;
        }
        return self2._previousEvent = currentEvent;
      }
      return currentEvent;
    };
    eventProcessor.id = this.name;
    addGlobalEventProcessor2(eventProcessor);
  }
}
Dedupe.__initStatic();
function _shouldDropEvent(currentEvent, previousEvent) {
  if (!previousEvent) {
    return false;
  }
  if (_isSameMessageEvent(currentEvent, previousEvent)) {
    return true;
  }
  if (_isSameExceptionEvent(currentEvent, previousEvent)) {
    return true;
  }
  return false;
}
function _isSameMessageEvent(currentEvent, previousEvent) {
  const currentMessage = currentEvent.message;
  const previousMessage = previousEvent.message;
  if (!currentMessage && !previousMessage) {
    return false;
  }
  if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
    return false;
  }
  if (currentMessage !== previousMessage) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}
function _isSameExceptionEvent(currentEvent, previousEvent) {
  const previousException = _getExceptionFromEvent(previousEvent);
  const currentException = _getExceptionFromEvent(currentEvent);
  if (!previousException || !currentException) {
    return false;
  }
  if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
    return false;
  }
  if (!_isSameFingerprint(currentEvent, previousEvent)) {
    return false;
  }
  if (!_isSameStacktrace(currentEvent, previousEvent)) {
    return false;
  }
  return true;
}
function _isSameStacktrace(currentEvent, previousEvent) {
  let currentFrames = _getFramesFromEvent(currentEvent);
  let previousFrames = _getFramesFromEvent(previousEvent);
  if (!currentFrames && !previousFrames) {
    return true;
  }
  if (currentFrames && !previousFrames || !currentFrames && previousFrames) {
    return false;
  }
  currentFrames = currentFrames;
  previousFrames = previousFrames;
  if (previousFrames.length !== currentFrames.length) {
    return false;
  }
  for (let i = 0; i < previousFrames.length; i++) {
    const frameA = previousFrames[i];
    const frameB = currentFrames[i];
    if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
      return false;
    }
  }
  return true;
}
function _isSameFingerprint(currentEvent, previousEvent) {
  let currentFingerprint = currentEvent.fingerprint;
  let previousFingerprint = previousEvent.fingerprint;
  if (!currentFingerprint && !previousFingerprint) {
    return true;
  }
  if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) {
    return false;
  }
  currentFingerprint = currentFingerprint;
  previousFingerprint = previousFingerprint;
  try {
    return !!(currentFingerprint.join("") === previousFingerprint.join(""));
  } catch (_oO) {
    return false;
  }
}
function _getExceptionFromEvent(event) {
  return event.exception && event.exception.values && event.exception.values[0];
}
function _getFramesFromEvent(event) {
  const exception = event.exception;
  if (exception) {
    try {
      return exception.values[0].stacktrace.frames;
    } catch (_oO) {
      return void 0;
    }
  }
  return void 0;
}
const defaultIntegrations = [
  new InboundFilters(),
  new FunctionToString(),
  new TryCatch(),
  new Breadcrumbs(),
  new GlobalHandlers(),
  new LinkedErrors(),
  new Dedupe(),
  new HttpContext()
];
function init$1(options = {}) {
  if (options.defaultIntegrations === void 0) {
    options.defaultIntegrations = defaultIntegrations;
  }
  if (options.release === void 0) {
    if (typeof __SENTRY_RELEASE__ === "string") {
      options.release = __SENTRY_RELEASE__;
    }
    if (WINDOW$1.SENTRY_RELEASE && WINDOW$1.SENTRY_RELEASE.id) {
      options.release = WINDOW$1.SENTRY_RELEASE.id;
    }
  }
  if (options.autoSessionTracking === void 0) {
    options.autoSessionTracking = true;
  }
  if (options.sendClientReports === void 0) {
    options.sendClientReports = true;
  }
  const clientOptions = {
    ...options,
    stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
    integrations: getIntegrationsToSetup(options),
    transport: options.transport || (supportsFetch() ? makeFetchTransport : makeXHRTransport)
  };
  initAndBind(BrowserClient, clientOptions);
  if (options.autoSessionTracking) {
    startSessionTracking();
  }
}
function startSessionOnHub(hub) {
  hub.startSession({ ignoreDuration: true });
  hub.captureSession();
}
function startSessionTracking() {
  if (typeof WINDOW$1.document === "undefined") {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
    return;
  }
  const hub = getCurrentHub();
  if (!hub.captureSession) {
    return;
  }
  startSessionOnHub(hub);
  addInstrumentationHandler("history", ({ from, to }) => {
    if (!(from === void 0 || from === to)) {
      startSessionOnHub(getCurrentHub());
    }
  });
}
const WINDOW = GLOBAL_OBJ;
function registerBackgroundTabDetection() {
  if (WINDOW && WINDOW.document) {
    WINDOW.document.addEventListener("visibilitychange", () => {
      const activeTransaction = getActiveTransaction$1();
      if (WINDOW.document.hidden && activeTransaction) {
        const statusType = "cancelled";
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(
          `[Tracing] Transaction: ${statusType} -> since tab moved to the background, op: ${activeTransaction.op}`
        );
        if (!activeTransaction.status) {
          activeTransaction.setStatus(statusType);
        }
        activeTransaction.setTag("visibilitychange", "document.hidden");
        activeTransaction.finish();
      }
    });
  } else {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
}
const bindReporter = (callback, metric, reportAllChanges) => {
  let prevValue;
  let delta;
  return (forceReport) => {
    if (metric.value >= 0) {
      if (forceReport || reportAllChanges) {
        delta = metric.value - (prevValue || 0);
        if (delta || prevValue === void 0) {
          prevValue = metric.value;
          metric.delta = delta;
          callback(metric);
        }
      }
    }
  };
};
const generateUniqueID = () => {
  return `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`;
};
const getNavigationEntryFromPerformanceTiming = () => {
  const timing = WINDOW.performance.timing;
  const type = WINDOW.performance.navigation.type;
  const navigationEntry = {
    entryType: "navigation",
    startTime: 0,
    type: type == 2 ? "back_forward" : type === 1 ? "reload" : "navigate"
  };
  for (const key in timing) {
    if (key !== "navigationStart" && key !== "toJSON") {
      navigationEntry[key] = Math.max(timing[key] - timing.navigationStart, 0);
    }
  }
  return navigationEntry;
};
const getNavigationEntry = () => {
  if (WINDOW.__WEB_VITALS_POLYFILL__) {
    return WINDOW.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || getNavigationEntryFromPerformanceTiming());
  } else {
    return WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
  }
};
const getActivationStart = () => {
  const navEntry = getNavigationEntry();
  return navEntry && navEntry.activationStart || 0;
};
const initMetric = (name, value) => {
  const navEntry = getNavigationEntry();
  let navigationType = "navigate";
  if (navEntry) {
    if (WINDOW.document.prerendering || getActivationStart() > 0) {
      navigationType = "prerender";
    } else {
      navigationType = navEntry.type.replace(/_/g, "-");
    }
  }
  return {
    name,
    value: typeof value === "undefined" ? -1 : value,
    rating: "good",
    delta: 0,
    entries: [],
    id: generateUniqueID(),
    navigationType
  };
};
const observe = (type, callback, opts) => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(type)) {
      const po = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      po.observe(
        Object.assign(
          {
            type,
            buffered: true
          },
          opts || {}
        )
      );
      return po;
    }
  } catch (e) {
  }
  return;
};
const onHidden = (cb, once) => {
  const onHiddenOrPageHide = (event) => {
    if (event.type === "pagehide" || WINDOW.document.visibilityState === "hidden") {
      cb(event);
      if (once) {
        removeEventListener("visibilitychange", onHiddenOrPageHide, true);
        removeEventListener("pagehide", onHiddenOrPageHide, true);
      }
    }
  };
  addEventListener("visibilitychange", onHiddenOrPageHide, true);
  addEventListener("pagehide", onHiddenOrPageHide, true);
};
const onCLS = (onReport) => {
  const metric = initMetric("CLS", 0);
  let report;
  let sessionValue = 0;
  let sessionEntries = [];
  const handleEntries = (entries) => {
    entries.forEach((entry) => {
      if (!entry.hadRecentInput) {
        const firstSessionEntry = sessionEntries[0];
        const lastSessionEntry = sessionEntries[sessionEntries.length - 1];
        if (sessionValue && sessionEntries.length !== 0 && entry.startTime - lastSessionEntry.startTime < 1e3 && entry.startTime - firstSessionEntry.startTime < 5e3) {
          sessionValue += entry.value;
          sessionEntries.push(entry);
        } else {
          sessionValue = entry.value;
          sessionEntries = [entry];
        }
        if (sessionValue > metric.value) {
          metric.value = sessionValue;
          metric.entries = sessionEntries;
          if (report) {
            report();
          }
        }
      }
    });
  };
  const po = observe("layout-shift", handleEntries);
  if (po) {
    report = bindReporter(onReport, metric);
    const stopListening = () => {
      handleEntries(po.takeRecords());
      report(true);
    };
    onHidden(stopListening);
    return stopListening;
  }
  return;
};
let firstHiddenTime = -1;
const initHiddenTime = () => {
  return WINDOW.document.visibilityState === "hidden" && !WINDOW.document.prerendering ? 0 : Infinity;
};
const trackChanges = () => {
  onHidden(({ timeStamp }) => {
    firstHiddenTime = timeStamp;
  }, true);
};
const getVisibilityWatcher = () => {
  if (firstHiddenTime < 0) {
    firstHiddenTime = initHiddenTime();
    trackChanges();
  }
  return {
    get firstHiddenTime() {
      return firstHiddenTime;
    }
  };
};
const onFID = (onReport) => {
  const visibilityWatcher = getVisibilityWatcher();
  const metric = initMetric("FID");
  let report;
  const handleEntry = (entry) => {
    if (entry.startTime < visibilityWatcher.firstHiddenTime) {
      metric.value = entry.processingStart - entry.startTime;
      metric.entries.push(entry);
      report(true);
    }
  };
  const handleEntries = (entries) => {
    entries.forEach(handleEntry);
  };
  const po = observe("first-input", handleEntries);
  report = bindReporter(onReport, metric);
  if (po) {
    onHidden(() => {
      handleEntries(po.takeRecords());
      po.disconnect();
    }, true);
  }
};
const reportedMetricIDs = {};
const onLCP = (onReport) => {
  const visibilityWatcher = getVisibilityWatcher();
  const metric = initMetric("LCP");
  let report;
  const handleEntries = (entries) => {
    const lastEntry = entries[entries.length - 1];
    if (lastEntry) {
      const value = Math.max(lastEntry.startTime - getActivationStart(), 0);
      if (value < visibilityWatcher.firstHiddenTime) {
        metric.value = value;
        metric.entries = [lastEntry];
        report();
      }
    }
  };
  const po = observe("largest-contentful-paint", handleEntries);
  if (po) {
    report = bindReporter(onReport, metric);
    const stopListening = () => {
      if (!reportedMetricIDs[metric.id]) {
        handleEntries(po.takeRecords());
        po.disconnect();
        reportedMetricIDs[metric.id] = true;
        report(true);
      }
    };
    ["keydown", "click"].forEach((type) => {
      addEventListener(type, stopListening, { once: true, capture: true });
    });
    onHidden(stopListening, true);
    return stopListening;
  }
  return;
};
function isMeasurementValue(value) {
  return typeof value === "number" && isFinite(value);
}
function _startChild(transaction, { startTimestamp, ...ctx }) {
  if (startTimestamp && transaction.startTimestamp > startTimestamp) {
    transaction.startTimestamp = startTimestamp;
  }
  return transaction.startChild({
    startTimestamp,
    ...ctx
  });
}
function msToSec(time) {
  return time / 1e3;
}
function getBrowserPerformanceAPI() {
  return WINDOW && WINDOW.addEventListener && WINDOW.performance;
}
let _performanceCursor = 0;
let _measurements = {};
let _lcpEntry;
let _clsEntry;
function startTrackingWebVitals() {
  const performance2 = getBrowserPerformanceAPI();
  if (performance2 && browserPerformanceTimeOrigin) {
    if (performance2.mark) {
      WINDOW.performance.mark("sentry-tracing-init");
    }
    _trackFID();
    const clsCallback = _trackCLS();
    const lcpCallback = _trackLCP();
    return () => {
      if (clsCallback) {
        clsCallback();
      }
      if (lcpCallback) {
        lcpCallback();
      }
    };
  }
  return () => void 0;
}
function startTrackingLongTasks() {
  const entryHandler = (entries) => {
    for (const entry of entries) {
      const transaction = getActiveTransaction$1();
      if (!transaction) {
        return;
      }
      const startTime = msToSec(browserPerformanceTimeOrigin + entry.startTime);
      const duration = msToSec(entry.duration);
      transaction.startChild({
        description: "Main UI thread blocked",
        op: "ui.long-task",
        startTimestamp: startTime,
        endTimestamp: startTime + duration
      });
    }
  };
  observe("longtask", entryHandler);
}
function startTrackingInteractions() {
  const entryHandler = (entries) => {
    for (const entry of entries) {
      const transaction = getActiveTransaction$1();
      if (!transaction) {
        return;
      }
      if (entry.name === "click") {
        const startTime = msToSec(browserPerformanceTimeOrigin + entry.startTime);
        const duration = msToSec(entry.duration);
        transaction.startChild({
          description: htmlTreeAsString(entry.target),
          op: `ui.interaction.${entry.name}`,
          startTimestamp: startTime,
          endTimestamp: startTime + duration
        });
      }
    }
  };
  observe("event", entryHandler, { durationThreshold: 0 });
}
function _trackCLS() {
  return onCLS((metric) => {
    const entry = metric.entries.pop();
    if (!entry) {
      return;
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding CLS");
    _measurements["cls"] = { value: metric.value, unit: "" };
    _clsEntry = entry;
  });
}
function _trackLCP() {
  return onLCP((metric) => {
    const entry = metric.entries.pop();
    if (!entry) {
      return;
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding LCP");
    _measurements["lcp"] = { value: metric.value, unit: "millisecond" };
    _lcpEntry = entry;
  });
}
function _trackFID() {
  onFID((metric) => {
    const entry = metric.entries.pop();
    if (!entry) {
      return;
    }
    const timeOrigin = msToSec(browserPerformanceTimeOrigin);
    const startTime = msToSec(entry.startTime);
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding FID");
    _measurements["fid"] = { value: metric.value, unit: "millisecond" };
    _measurements["mark.fid"] = { value: timeOrigin + startTime, unit: "second" };
  });
}
function addPerformanceEntries(transaction) {
  const performance2 = getBrowserPerformanceAPI();
  if (!performance2 || !WINDOW.performance.getEntries || !browserPerformanceTimeOrigin) {
    return;
  }
  (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Tracing] Adding & adjusting spans using Performance API");
  const timeOrigin = msToSec(browserPerformanceTimeOrigin);
  const performanceEntries = performance2.getEntries();
  let responseStartTimestamp;
  let requestStartTimestamp;
  performanceEntries.slice(_performanceCursor).forEach((entry) => {
    const startTime = msToSec(entry.startTime);
    const duration = msToSec(entry.duration);
    if (transaction.op === "navigation" && timeOrigin + startTime < transaction.startTimestamp) {
      return;
    }
    switch (entry.entryType) {
      case "navigation": {
        _addNavigationSpans(transaction, entry, timeOrigin);
        responseStartTimestamp = timeOrigin + msToSec(entry.responseStart);
        requestStartTimestamp = timeOrigin + msToSec(entry.requestStart);
        break;
      }
      case "mark":
      case "paint":
      case "measure": {
        _addMeasureSpans(transaction, entry, startTime, duration, timeOrigin);
        const firstHidden = getVisibilityWatcher();
        const shouldRecord = entry.startTime < firstHidden.firstHiddenTime;
        if (entry.name === "first-paint" && shouldRecord) {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding FP");
          _measurements["fp"] = { value: entry.startTime, unit: "millisecond" };
        }
        if (entry.name === "first-contentful-paint" && shouldRecord) {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding FCP");
          _measurements["fcp"] = { value: entry.startTime, unit: "millisecond" };
        }
        break;
      }
      case "resource": {
        const resourceName = entry.name.replace(WINDOW.location.origin, "");
        _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin);
        break;
      }
    }
  });
  _performanceCursor = Math.max(performanceEntries.length - 1, 0);
  _trackNavigator(transaction);
  if (transaction.op === "pageload") {
    if (typeof responseStartTimestamp === "number") {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding TTFB");
      _measurements["ttfb"] = {
        value: (responseStartTimestamp - transaction.startTimestamp) * 1e3,
        unit: "millisecond"
      };
      if (typeof requestStartTimestamp === "number" && requestStartTimestamp <= responseStartTimestamp) {
        _measurements["ttfb.requestTime"] = {
          value: (responseStartTimestamp - requestStartTimestamp) * 1e3,
          unit: "millisecond"
        };
      }
    }
    ["fcp", "fp", "lcp"].forEach((name) => {
      if (!_measurements[name] || timeOrigin >= transaction.startTimestamp) {
        return;
      }
      const oldValue = _measurements[name].value;
      const measurementTimestamp = timeOrigin + msToSec(oldValue);
      const normalizedValue = Math.abs((measurementTimestamp - transaction.startTimestamp) * 1e3);
      const delta = normalizedValue - oldValue;
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Measurements] Normalized ${name} from ${oldValue} to ${normalizedValue} (${delta})`);
      _measurements[name].value = normalizedValue;
    });
    const fidMark = _measurements["mark.fid"];
    if (fidMark && _measurements["fid"]) {
      _startChild(transaction, {
        description: "first input delay",
        endTimestamp: fidMark.value + msToSec(_measurements["fid"].value),
        op: "ui.action",
        startTimestamp: fidMark.value
      });
      delete _measurements["mark.fid"];
    }
    if (!("fcp" in _measurements)) {
      delete _measurements.cls;
    }
    Object.keys(_measurements).forEach((measurementName) => {
      transaction.setMeasurement(
        measurementName,
        _measurements[measurementName].value,
        _measurements[measurementName].unit
      );
    });
    _tagMetricInfo(transaction);
  }
  _lcpEntry = void 0;
  _clsEntry = void 0;
  _measurements = {};
}
function _addMeasureSpans(transaction, entry, startTime, duration, timeOrigin) {
  const measureStartTimestamp = timeOrigin + startTime;
  const measureEndTimestamp = measureStartTimestamp + duration;
  _startChild(transaction, {
    description: entry.name,
    endTimestamp: measureEndTimestamp,
    op: entry.entryType,
    startTimestamp: measureStartTimestamp
  });
  return measureStartTimestamp;
}
function _addNavigationSpans(transaction, entry, timeOrigin) {
  ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((event) => {
    _addPerformanceNavigationTiming(transaction, entry, event, timeOrigin);
  });
  _addPerformanceNavigationTiming(transaction, entry, "secureConnection", timeOrigin, "TLS/SSL", "connectEnd");
  _addPerformanceNavigationTiming(transaction, entry, "fetch", timeOrigin, "cache", "domainLookupStart");
  _addPerformanceNavigationTiming(transaction, entry, "domainLookup", timeOrigin, "DNS");
  _addRequest(transaction, entry, timeOrigin);
}
function _addPerformanceNavigationTiming(transaction, entry, event, timeOrigin, description, eventEnd) {
  const end = eventEnd ? entry[eventEnd] : entry[`${event}End`];
  const start = entry[`${event}Start`];
  if (!start || !end) {
    return;
  }
  _startChild(transaction, {
    op: "browser",
    description: description || event,
    startTimestamp: timeOrigin + msToSec(start),
    endTimestamp: timeOrigin + msToSec(end)
  });
}
function _addRequest(transaction, entry, timeOrigin) {
  _startChild(transaction, {
    op: "browser",
    description: "request",
    startTimestamp: timeOrigin + msToSec(entry.requestStart),
    endTimestamp: timeOrigin + msToSec(entry.responseEnd)
  });
  _startChild(transaction, {
    op: "browser",
    description: "response",
    startTimestamp: timeOrigin + msToSec(entry.responseStart),
    endTimestamp: timeOrigin + msToSec(entry.responseEnd)
  });
}
function _addResourceSpans(transaction, entry, resourceName, startTime, duration, timeOrigin) {
  if (entry.initiatorType === "xmlhttprequest" || entry.initiatorType === "fetch") {
    return;
  }
  const data = {};
  if ("transferSize" in entry) {
    data["Transfer Size"] = entry.transferSize;
  }
  if ("encodedBodySize" in entry) {
    data["Encoded Body Size"] = entry.encodedBodySize;
  }
  if ("decodedBodySize" in entry) {
    data["Decoded Body Size"] = entry.decodedBodySize;
  }
  if ("renderBlockingStatus" in entry) {
    data["resource.render_blocking_status"] = entry.renderBlockingStatus;
  }
  const startTimestamp = timeOrigin + startTime;
  const endTimestamp = startTimestamp + duration;
  _startChild(transaction, {
    description: resourceName,
    endTimestamp,
    op: entry.initiatorType ? `resource.${entry.initiatorType}` : "resource.other",
    startTimestamp,
    data
  });
}
function _trackNavigator(transaction) {
  const navigator = WINDOW.navigator;
  if (!navigator) {
    return;
  }
  const connection = navigator.connection;
  if (connection) {
    if (connection.effectiveType) {
      transaction.setTag("effectiveConnectionType", connection.effectiveType);
    }
    if (connection.type) {
      transaction.setTag("connectionType", connection.type);
    }
    if (isMeasurementValue(connection.rtt)) {
      _measurements["connection.rtt"] = { value: connection.rtt, unit: "millisecond" };
    }
  }
  if (isMeasurementValue(navigator.deviceMemory)) {
    transaction.setTag("deviceMemory", `${navigator.deviceMemory} GB`);
  }
  if (isMeasurementValue(navigator.hardwareConcurrency)) {
    transaction.setTag("hardwareConcurrency", String(navigator.hardwareConcurrency));
  }
}
function _tagMetricInfo(transaction) {
  if (_lcpEntry) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding LCP Data");
    if (_lcpEntry.element) {
      transaction.setTag("lcp.element", htmlTreeAsString(_lcpEntry.element));
    }
    if (_lcpEntry.id) {
      transaction.setTag("lcp.id", _lcpEntry.id);
    }
    if (_lcpEntry.url) {
      transaction.setTag("lcp.url", _lcpEntry.url.trim().slice(0, 200));
    }
    transaction.setTag("lcp.size", _lcpEntry.size);
  }
  if (_clsEntry && _clsEntry.sources) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("[Measurements] Adding CLS Data");
    _clsEntry.sources.forEach(
      (source, index) => transaction.setTag(`cls.source.${index + 1}`, htmlTreeAsString(source.node))
    );
  }
}
const DEFAULT_TRACE_PROPAGATION_TARGETS = ["localhost", /^\//];
const defaultRequestInstrumentationOptions = {
  traceFetch: true,
  traceXHR: true,
  tracingOrigins: DEFAULT_TRACE_PROPAGATION_TARGETS,
  tracePropagationTargets: DEFAULT_TRACE_PROPAGATION_TARGETS
};
function instrumentOutgoingRequests(_options) {
  const { traceFetch, traceXHR, tracePropagationTargets, tracingOrigins, shouldCreateSpanForRequest } = {
    traceFetch: defaultRequestInstrumentationOptions.traceFetch,
    traceXHR: defaultRequestInstrumentationOptions.traceXHR,
    ..._options
  };
  const shouldCreateSpan = typeof shouldCreateSpanForRequest === "function" ? shouldCreateSpanForRequest : (_) => true;
  const shouldAttachHeadersWithTargets = (url) => shouldAttachHeaders(url, tracePropagationTargets || tracingOrigins);
  const spans = {};
  if (traceFetch) {
    addInstrumentationHandler("fetch", (handlerData) => {
      fetchCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
    });
  }
  if (traceXHR) {
    addInstrumentationHandler("xhr", (handlerData) => {
      xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeadersWithTargets, spans);
    });
  }
}
function shouldAttachHeaders(url, tracePropagationTargets) {
  return stringMatchesSomePattern(url, tracePropagationTargets || DEFAULT_TRACE_PROPAGATION_TARGETS);
}
function fetchCallback(handlerData, shouldCreateSpan, shouldAttachHeaders2, spans) {
  if (!hasTracingEnabled() || !(handlerData.fetchData && shouldCreateSpan(handlerData.fetchData.url))) {
    return;
  }
  if (handlerData.endTimestamp) {
    const spanId = handlerData.fetchData.__span;
    if (!spanId)
      return;
    const span = spans[spanId];
    if (span) {
      if (handlerData.response) {
        span.setHttpStatus(handlerData.response.status);
      } else if (handlerData.error) {
        span.setStatus("internal_error");
      }
      span.finish();
      delete spans[spanId];
    }
    return;
  }
  const currentScope = getCurrentHub().getScope();
  const currentSpan = currentScope && currentScope.getSpan();
  const activeTransaction = currentSpan && currentSpan.transaction;
  if (currentSpan && activeTransaction) {
    const span = currentSpan.startChild({
      data: {
        ...handlerData.fetchData,
        type: "fetch"
      },
      description: `${handlerData.fetchData.method} ${handlerData.fetchData.url}`,
      op: "http.client"
    });
    handlerData.fetchData.__span = span.spanId;
    spans[span.spanId] = span;
    const request = handlerData.args[0];
    handlerData.args[1] = handlerData.args[1] || {};
    const options = handlerData.args[1];
    if (shouldAttachHeaders2(handlerData.fetchData.url)) {
      options.headers = addTracingHeadersToFetchRequest(
        request,
        activeTransaction.getDynamicSamplingContext(),
        span,
        options
      );
    }
  }
}
function addTracingHeadersToFetchRequest(request, dynamicSamplingContext, span, options) {
  const sentryBaggageHeader = dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext);
  const sentryTraceHeader = span.toTraceparent();
  const headers = typeof Request !== "undefined" && isInstanceOf(request, Request) ? request.headers : options.headers;
  if (!headers) {
    return { "sentry-trace": sentryTraceHeader, baggage: sentryBaggageHeader };
  } else if (typeof Headers !== "undefined" && isInstanceOf(headers, Headers)) {
    const newHeaders = new Headers(headers);
    newHeaders.append("sentry-trace", sentryTraceHeader);
    if (sentryBaggageHeader) {
      newHeaders.append(BAGGAGE_HEADER_NAME, sentryBaggageHeader);
    }
    return newHeaders;
  } else if (Array.isArray(headers)) {
    const newHeaders = [...headers, ["sentry-trace", sentryTraceHeader]];
    if (sentryBaggageHeader) {
      newHeaders.push([BAGGAGE_HEADER_NAME, sentryBaggageHeader]);
    }
    return newHeaders;
  } else {
    const existingBaggageHeader = "baggage" in headers ? headers.baggage : void 0;
    const newBaggageHeaders = [];
    if (Array.isArray(existingBaggageHeader)) {
      newBaggageHeaders.push(...existingBaggageHeader);
    } else if (existingBaggageHeader) {
      newBaggageHeaders.push(existingBaggageHeader);
    }
    if (sentryBaggageHeader) {
      newBaggageHeaders.push(sentryBaggageHeader);
    }
    return {
      ...headers,
      "sentry-trace": sentryTraceHeader,
      baggage: newBaggageHeaders.length > 0 ? newBaggageHeaders.join(",") : void 0
    };
  }
}
function xhrCallback(handlerData, shouldCreateSpan, shouldAttachHeaders2, spans) {
  if (!hasTracingEnabled() || handlerData.xhr && handlerData.xhr.__sentry_own_request__ || !(handlerData.xhr && handlerData.xhr.__sentry_xhr__ && shouldCreateSpan(handlerData.xhr.__sentry_xhr__.url))) {
    return;
  }
  const xhr = handlerData.xhr.__sentry_xhr__;
  if (handlerData.endTimestamp) {
    const spanId = handlerData.xhr.__sentry_xhr_span_id__;
    if (!spanId)
      return;
    const span = spans[spanId];
    if (span) {
      span.setHttpStatus(xhr.status_code);
      span.finish();
      delete spans[spanId];
    }
    return;
  }
  const currentScope = getCurrentHub().getScope();
  const currentSpan = currentScope && currentScope.getSpan();
  const activeTransaction = currentSpan && currentSpan.transaction;
  if (currentSpan && activeTransaction) {
    const span = currentSpan.startChild({
      data: {
        ...xhr.data,
        type: "xhr",
        method: xhr.method,
        url: xhr.url
      },
      description: `${xhr.method} ${xhr.url}`,
      op: "http.client"
    });
    handlerData.xhr.__sentry_xhr_span_id__ = span.spanId;
    spans[handlerData.xhr.__sentry_xhr_span_id__] = span;
    if (handlerData.xhr.setRequestHeader && shouldAttachHeaders2(handlerData.xhr.__sentry_xhr__.url)) {
      try {
        handlerData.xhr.setRequestHeader("sentry-trace", span.toTraceparent());
        const dynamicSamplingContext = activeTransaction.getDynamicSamplingContext();
        const sentryBaggageHeader = dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext);
        if (sentryBaggageHeader) {
          handlerData.xhr.setRequestHeader(BAGGAGE_HEADER_NAME, sentryBaggageHeader);
        }
      } catch (_) {
      }
    }
  }
}
function instrumentRoutingWithDefaults(customStartTransaction, startTransactionOnPageLoad = true, startTransactionOnLocationChange = true) {
  if (!WINDOW || !WINDOW.location) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not initialize routing instrumentation due to invalid location");
    return;
  }
  let startingUrl = WINDOW.location.href;
  let activeTransaction;
  if (startTransactionOnPageLoad) {
    activeTransaction = customStartTransaction({
      name: WINDOW.location.pathname,
      op: "pageload",
      metadata: { source: "url" }
    });
  }
  if (startTransactionOnLocationChange) {
    addInstrumentationHandler("history", ({ to, from }) => {
      if (from === void 0 && startingUrl && startingUrl.indexOf(to) !== -1) {
        startingUrl = void 0;
        return;
      }
      if (from !== to) {
        startingUrl = void 0;
        if (activeTransaction) {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Finishing current transaction with op: ${activeTransaction.op}`);
          activeTransaction.finish();
        }
        activeTransaction = customStartTransaction({
          name: WINDOW.location.pathname,
          op: "navigation",
          metadata: { source: "url" }
        });
      }
    });
  }
}
const BROWSER_TRACING_INTEGRATION_ID = "BrowserTracing";
const DEFAULT_BROWSER_TRACING_OPTIONS = {
  ...TRACING_DEFAULTS,
  markBackgroundTransactions: true,
  routingInstrumentation: instrumentRoutingWithDefaults,
  startTransactionOnLocationChange: true,
  startTransactionOnPageLoad: true,
  enableLongTask: true,
  _experiments: {},
  ...defaultRequestInstrumentationOptions
};
class BrowserTracing {
  __init() {
    this.name = BROWSER_TRACING_INTEGRATION_ID;
  }
  constructor(_options) {
    BrowserTracing.prototype.__init.call(this);
    addTracingExtensions();
    this.options = {
      ...DEFAULT_BROWSER_TRACING_OPTIONS,
      ..._options
    };
    if (this.options._experiments.enableLongTask !== void 0) {
      this.options.enableLongTask = this.options._experiments.enableLongTask;
    }
    if (_options && !_options.tracePropagationTargets && _options.tracingOrigins) {
      this.options.tracePropagationTargets = _options.tracingOrigins;
    }
    this._collectWebVitals = startTrackingWebVitals();
    if (this.options.enableLongTask) {
      startTrackingLongTasks();
    }
    if (this.options._experiments.enableInteractions) {
      startTrackingInteractions();
    }
  }
  setupOnce(_, getCurrentHub2) {
    this._getCurrentHub = getCurrentHub2;
    const {
      routingInstrumentation: instrumentRouting,
      startTransactionOnLocationChange,
      startTransactionOnPageLoad,
      markBackgroundTransactions,
      traceFetch,
      traceXHR,
      tracePropagationTargets,
      shouldCreateSpanForRequest,
      _experiments
    } = this.options;
    instrumentRouting(
      (context) => {
        const transaction = this._createRouteTransaction(context);
        this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(transaction, context, getCurrentHub2);
        return transaction;
      },
      startTransactionOnPageLoad,
      startTransactionOnLocationChange
    );
    if (markBackgroundTransactions) {
      registerBackgroundTabDetection();
    }
    if (_experiments.enableInteractions) {
      this._registerInteractionListener();
    }
    instrumentOutgoingRequests({
      traceFetch,
      traceXHR,
      tracePropagationTargets,
      shouldCreateSpanForRequest
    });
  }
  _createRouteTransaction(context) {
    if (!this._getCurrentHub) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Did not create ${context.op} transaction because _getCurrentHub is invalid.`);
      return void 0;
    }
    const { beforeNavigate, idleTimeout, finalTimeout, heartbeatInterval } = this.options;
    const isPageloadTransaction = context.op === "pageload";
    const sentryTraceMetaTagValue = isPageloadTransaction ? getMetaContent("sentry-trace") : null;
    const baggageMetaTagValue = isPageloadTransaction ? getMetaContent("baggage") : null;
    const traceParentData = sentryTraceMetaTagValue ? extractTraceparentData(sentryTraceMetaTagValue) : void 0;
    const dynamicSamplingContext = baggageMetaTagValue ? baggageHeaderToDynamicSamplingContext(baggageMetaTagValue) : void 0;
    const expandedContext = {
      ...context,
      ...traceParentData,
      metadata: {
        ...context.metadata,
        dynamicSamplingContext: traceParentData && !dynamicSamplingContext ? {} : dynamicSamplingContext
      },
      trimEnd: true
    };
    const modifiedContext = typeof beforeNavigate === "function" ? beforeNavigate(expandedContext) : expandedContext;
    const finalContext = modifiedContext === void 0 ? { ...expandedContext, sampled: false } : modifiedContext;
    finalContext.metadata = finalContext.name !== expandedContext.name ? { ...finalContext.metadata, source: "custom" } : finalContext.metadata;
    this._latestRouteName = finalContext.name;
    this._latestRouteSource = finalContext.metadata && finalContext.metadata.source;
    if (finalContext.sampled === false) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Will not send ${finalContext.op} transaction because of beforeNavigate.`);
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`[Tracing] Starting ${finalContext.op} transaction on scope`);
    const hub = this._getCurrentHub();
    const { location } = WINDOW;
    const idleTransaction = startIdleTransaction(
      hub,
      finalContext,
      idleTimeout,
      finalTimeout,
      true,
      { location },
      heartbeatInterval
    );
    idleTransaction.registerBeforeFinishCallback((transaction) => {
      this._collectWebVitals();
      addPerformanceEntries(transaction);
    });
    return idleTransaction;
  }
  _registerInteractionListener() {
    let inflightInteractionTransaction;
    const registerInteractionTransaction = () => {
      const { idleTimeout, finalTimeout, heartbeatInterval } = this.options;
      const op = "ui.action.click";
      if (inflightInteractionTransaction) {
        inflightInteractionTransaction.finish();
        inflightInteractionTransaction = void 0;
      }
      if (!this._getCurrentHub) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Did not create ${op} transaction because _getCurrentHub is invalid.`);
        return void 0;
      }
      if (!this._latestRouteName) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`[Tracing] Did not create ${op} transaction because _latestRouteName is missing.`);
        return void 0;
      }
      const hub = this._getCurrentHub();
      const { location } = WINDOW;
      const context = {
        name: this._latestRouteName,
        op,
        trimEnd: true,
        metadata: {
          source: this._latestRouteSource || "url"
        }
      };
      inflightInteractionTransaction = startIdleTransaction(
        hub,
        context,
        idleTimeout,
        finalTimeout,
        true,
        { location },
        heartbeatInterval
      );
    };
    ["click"].forEach((type) => {
      addEventListener(type, registerInteractionTransaction, { once: false, capture: true });
    });
  }
}
function getMetaContent(metaName) {
  const metaTag = getDomElement(`meta[name=${metaName}]`);
  return metaTag ? metaTag.getAttribute("content") : null;
}
const DEFAULT_HOOKS = ["activate", "mount", "update"];
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
const ROOT_COMPONENT_NAME = "<Root>";
const ANONYMOUS_COMPONENT_NAME = "<Anonymous>";
const repeat = (str, n) => {
  return str.repeat ? str.repeat(n) : str;
};
const formatComponentName = (vm, includeFile) => {
  if (!vm) {
    return ANONYMOUS_COMPONENT_NAME;
  }
  if (vm.$root === vm) {
    return ROOT_COMPONENT_NAME;
  }
  if (!vm.$options) {
    return ANONYMOUS_COMPONENT_NAME;
  }
  const options = vm.$options;
  let name = options.name || options._componentTag;
  const file = options.__file;
  if (!name && file) {
    const match = file.match(/([^/\\]+)\.vue$/);
    if (match) {
      name = match[1];
    }
  }
  return (name ? `<${classify(name)}>` : ANONYMOUS_COMPONENT_NAME) + (file && includeFile !== false ? ` at ${file}` : "");
};
const generateComponentTrace = (vm) => {
  if (vm && (vm._isVue || vm.__isVue) && vm.$parent) {
    const tree = [];
    let currentRecursiveSequence = 0;
    while (vm) {
      if (tree.length > 0) {
        const last = tree[tree.length - 1];
        if (last.constructor === vm.constructor) {
          currentRecursiveSequence++;
          vm = vm.$parent;
          continue;
        } else if (currentRecursiveSequence > 0) {
          tree[tree.length - 1] = [last, currentRecursiveSequence];
          currentRecursiveSequence = 0;
        }
      }
      tree.push(vm);
      vm = vm.$parent;
    }
    const formattedTree = tree.map(
      (vm2, i) => `${(i === 0 ? "---> " : repeat(" ", 5 + i * 2)) + (Array.isArray(vm2) ? `${formatComponentName(vm2[0])}... (${vm2[1]} recursive calls)` : formatComponentName(vm2))}`
    ).join("\n");
    return `

found in

${formattedTree}`;
  }
  return `

(found in ${formatComponentName(vm)})`;
};
const attachErrorHandler = (app, options) => {
  const { errorHandler, warnHandler, silent } = app.config;
  app.config.errorHandler = (error, vm, lifecycleHook) => {
    const componentName = formatComponentName(vm, false);
    const trace = vm ? generateComponentTrace(vm) : "";
    const metadata = {
      componentName,
      lifecycleHook,
      trace
    };
    if (options.attachProps && vm) {
      if (vm.$options && vm.$options.propsData) {
        metadata.propsData = vm.$options.propsData;
      } else if (vm.$props) {
        metadata.propsData = vm.$props;
      }
    }
    setTimeout(() => {
      getCurrentHub().withScope((scope) => {
        scope.setContext("vue", metadata);
        getCurrentHub().captureException(error);
      });
    });
    if (typeof errorHandler === "function") {
      errorHandler.call(app, error, vm, lifecycleHook);
    }
    if (options.logErrors) {
      const hasConsole = typeof console !== "undefined";
      const message = `Error in ${lifecycleHook}: "${error && error.toString()}"`;
      if (warnHandler) {
        warnHandler.call(null, message, vm, trace);
      } else if (hasConsole && !silent) {
        console.error(`[Vue warn]: ${message}${trace}`);
      }
    }
  };
};
const VUE_OP = "ui.vue";
const HOOKS = {
  activate: ["activated", "deactivated"],
  create: ["beforeCreate", "created"],
  destroy: ["beforeDestroy", "destroyed"],
  mount: ["beforeMount", "mounted"],
  update: ["beforeUpdate", "updated"]
};
function getActiveTransaction() {
  const scope = getCurrentHub().getScope();
  return scope && scope.getTransaction();
}
function finishRootSpan(vm, timestamp, timeout) {
  if (vm.$_sentryRootSpanTimer) {
    clearTimeout(vm.$_sentryRootSpanTimer);
  }
  vm.$_sentryRootSpanTimer = setTimeout(() => {
    if (vm.$root && vm.$root.$_sentryRootSpan) {
      vm.$root.$_sentryRootSpan.finish(timestamp);
      vm.$root.$_sentryRootSpan = void 0;
    }
  }, timeout);
}
const createTracingMixins = (options) => {
  const hooks = (options.hooks || []).concat(DEFAULT_HOOKS).filter((value, index, self2) => self2.indexOf(value) === index);
  const mixins = {};
  for (const operation of hooks) {
    const internalHooks = HOOKS[operation];
    if (!internalHooks) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Unknown hook: ${operation}`);
      continue;
    }
    for (const internalHook of internalHooks) {
      mixins[internalHook] = function() {
        const isRoot = this.$root === this;
        if (isRoot) {
          const activeTransaction = getActiveTransaction();
          if (activeTransaction) {
            this.$_sentryRootSpan = this.$_sentryRootSpan || activeTransaction.startChild({
              description: "Application Render",
              op: `${VUE_OP}.render`
            });
          }
        }
        const name = formatComponentName(this, false);
        const shouldTrack = Array.isArray(options.trackComponents) ? options.trackComponents.indexOf(name) > -1 : options.trackComponents;
        if (!isRoot && !shouldTrack) {
          return;
        }
        this.$_sentrySpans = this.$_sentrySpans || {};
        if (internalHook == internalHooks[0]) {
          const activeTransaction = this.$root && this.$root.$_sentryRootSpan || getActiveTransaction();
          if (activeTransaction) {
            const oldSpan = this.$_sentrySpans[operation];
            if (oldSpan && !oldSpan.endTimestamp) {
              oldSpan.finish();
            }
            this.$_sentrySpans[operation] = activeTransaction.startChild({
              description: `Vue <${name}>`,
              op: `${VUE_OP}.${operation}`
            });
          }
        } else {
          const span = this.$_sentrySpans[operation];
          if (!span)
            return;
          span.finish();
          finishRootSpan(this, timestampInSeconds(), options.timeout);
        }
      };
    }
  }
  return mixins;
};
const globalWithVue = GLOBAL_OBJ;
const DEFAULT_CONFIG = {
  Vue: globalWithVue.Vue,
  attachProps: true,
  logErrors: true,
  hooks: DEFAULT_HOOKS,
  timeout: 2e3,
  trackComponents: false,
  _metadata: {
    sdk: {
      name: "sentry.javascript.vue",
      packages: [
        {
          name: "npm:@sentry/vue",
          version: SDK_VERSION
        }
      ],
      version: SDK_VERSION
    }
  }
};
function init(config = {}) {
  const options = {
    ...DEFAULT_CONFIG,
    ...config
  };
  init$1(options);
  if (!options.Vue && !options.app) {
    console.warn(
      `[@sentry/vue]: Misconfigured SDK. Vue specific errors will not be captured.
Update your \`Sentry.init\` call with an appropriate config option:
\`app\` (Application Instance - Vue 3) or \`Vue\` (Vue Constructor - Vue 2).`
    );
    return;
  }
  if (options.app) {
    const apps = arrayify(options.app);
    apps.forEach((app) => vueInit(app, options));
  } else if (options.Vue) {
    vueInit(options.Vue, options);
  }
}
const vueInit = (app, options) => {
  const appWithInstance = app;
  const isMounted = appWithInstance._instance && appWithInstance._instance.isMounted;
  if (isMounted === true) {
    console.warn(
      "[@sentry/vue]: Misconfigured SDK. Vue app is already mounted. Make sure to call `app.mount()` after `Sentry.init()`."
    );
  }
  attachErrorHandler(app, options);
  if (hasTracingEnabled(options)) {
    app.mixin(
      createTracingMixins({
        ...options,
        ...options.tracingOptions
      })
    );
  }
};
function vueRouterInstrumentation(router, options = {}) {
  return (startTransaction, startTransactionOnPageLoad = true, startTransactionOnLocationChange = true) => {
    const tags = {
      "routing.instrumentation": "vue-router"
    };
    if (startTransactionOnPageLoad && WINDOW$1 && WINDOW$1.location) {
      startTransaction({
        name: WINDOW$1.location.pathname,
        op: "pageload",
        tags,
        metadata: {
          source: "url"
        }
      });
    }
    router.onError((error) => captureException(error));
    router.beforeEach((to, from, next) => {
      const isPageLoadNavigation = from.name == null && from.matched.length === 0;
      const data = {
        params: to.params,
        query: to.query
      };
      let transactionName = to.path;
      let transactionSource = "url";
      if (to.name && options.routeLabel !== "path") {
        transactionName = to.name.toString();
        transactionSource = "custom";
      } else if (to.matched[0] && to.matched[0].path) {
        transactionName = to.matched[0].path;
        transactionSource = "route";
      }
      if (startTransactionOnPageLoad && isPageLoadNavigation) {
        const pageloadTransaction = getActiveTransaction();
        if (pageloadTransaction) {
          if (pageloadTransaction.metadata.source !== "custom") {
            pageloadTransaction.setName(transactionName, transactionSource);
          }
          pageloadTransaction.setData("params", data.params);
          pageloadTransaction.setData("query", data.query);
        }
      }
      if (startTransactionOnLocationChange && !isPageLoadNavigation) {
        startTransaction({
          name: transactionName,
          op: "navigation",
          tags,
          data,
          metadata: {
            source: transactionSource
          }
        });
      }
      next();
    });
  };
}
var sentry = boot(({ app, router }) => {
  {
    init({
      app,
      dsn: "https://db124b9ff66641e7acbeec05fc3c720f@o78498.ingest.sentry.io/4505541940936704",
      integrations: [
        new BrowserTracing({
          routingInstrumentation: vueRouterInstrumentation(router),
          tracePropagationTargets: ["localhost", "sandbox.thelaundrylady.au", "app.thelaundrylady.au", "app.thelaundrylady.nz", /^\//]
        })
      ],
      tracesSampleRate: 0,
      ignoreErrors: ["Failed to fetch dynamically imported module", "error loading dynamically imported module"]
    });
  }
});
export { sentry as default };
