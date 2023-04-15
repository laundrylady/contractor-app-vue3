import { A as defineComponent, r as ref, w as watch, o as onMounted, E as onBeforeUnmount, h, z as createApp } from "./index.e647c85a.js";
const chartsScriptUrl = "https://www.gstatic.com/charts/loader.js";
let chartsLoaderPromise = null;
const loadedPackages = /* @__PURE__ */ new Map();
function getChartsLoader() {
  if (window.google !== void 0) {
    return Promise.resolve(window.google.charts);
  }
  if (chartsLoaderPromise === null) {
    chartsLoaderPromise = new Promise((resolve) => {
      const foundScript = document.querySelector('script[src="'.concat(chartsScriptUrl, '"]'));
      const script = foundScript || document.createElement("script");
      if (!foundScript) {
        script.src = chartsScriptUrl;
        script.type = "text/javascript";
        document.head.append(script);
      }
      script.onload = () => {
        if (window.google !== void 0) {
          resolve(window.google.charts);
        }
      };
    });
  }
  return chartsLoaderPromise;
}
async function loadGoogleCharts() {
  let version = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "current", { packages = [
    "corechart",
    "controls"
  ], language = "en", mapsApiKey } = arguments.length > 1 ? arguments[1] : void 0;
  const loader = await getChartsLoader();
  const settingsKey = "".concat(version, "_").concat(packages.join("_"), "_").concat(language);
  if (loadedPackages.has(settingsKey))
    return loadedPackages.get(settingsKey);
  const loaderPromise = new Promise((resolve) => {
    loader.load(version, {
      packages,
      language,
      mapsApiKey
    });
    loader.setOnLoadCallback(
      () => resolve(window.google)
    );
  });
  loadedPackages.set(settingsKey, loaderPromise);
  return loaderPromise;
}
function getValidChartData(chartsLib2, data, isFirstRowLabels) {
  if (chartsLib2 !== null && data instanceof chartsLib2.visualization.DataTable) {
    return data;
  }
  if (chartsLib2 !== null && data instanceof chartsLib2.visualization.DataView) {
    return data;
  }
  if (chartsLib2 !== null && Array.isArray(data)) {
    return chartsLib2.visualization.arrayToDataTable(data, isFirstRowLabels);
  }
  if (chartsLib2 !== null && data !== null && typeof data === "object") {
    return new chartsLib2.visualization.DataTable(data);
  }
  return null;
}
function createChartObject(chartsLib2, chartObject, chartEl, chartType, chartEvents, createChartFunction) {
  const createChart = (el, google, type) => {
    if (type === void 0) {
      throw new Error("please, provide chart type property");
    }
    return new google.visualization[type](el);
  };
  if (chartsLib2 === null) {
    throw new Error("please, provide charts lib property");
  }
  if (chartEl === null) {
    throw new Error("please, provide chart element property");
  }
  const fn = createChartFunction || createChart;
  chartObject = fn(chartEl, chartsLib2, chartType);
  attachListeners(chartsLib2, chartObject, chartEvents);
  return chartObject;
}
function attachListeners(chartsLib2, chartObject, chartEvents) {
  if (chartEvents === null) {
    return;
  }
  for (const [event, listener] of Object.entries(chartEvents)) {
    if (chartsLib2 !== null && chartObject !== null) {
      chartsLib2.visualization.events.addListener(chartObject, event, listener);
    }
  }
}
function debounce(func) {
  let waitMilliseconds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50;
  let timeoutId;
  function nextInvokeTimeout() {
    return waitMilliseconds;
  }
  const debouncedFunction = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const context = this;
    const invokeFunction = function() {
      timeoutId = void 0;
      func.apply(context, args);
    };
    if (timeoutId !== void 0) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(invokeFunction, nextInvokeTimeout());
  };
  return debouncedFunction;
}
let chartsLib = null;
const GChart = defineComponent({
  name: "GChart",
  props: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: [
        Array,
        Object,
        null
      ],
      default: () => []
    },
    isFirstRowLabels: {
      type: Boolean,
      default: false
    },
    options: {
      type: Object,
      default: () => ({})
    },
    version: {
      type: String,
      default: "current"
    },
    settings: {
      type: Object,
      default: () => ({
        packages: [
          "corechart",
          "table"
        ]
      })
    },
    events: {
      type: Object,
      default: null
    },
    createChart: {
      type: Function,
      default: void 0
    },
    resizeDebounce: {
      type: Number,
      default: 200
    }
  },
  setup(props, param) {
    let { emit } = param;
    const chartObject = ref(null);
    const chartEl = ref(null);
    function drawChart() {
      if (chartsLib === null || chartObject.value === null) {
        return;
      }
      const data = getValidChartData(chartsLib, props.data, props.isFirstRowLabels);
      if (data !== null) {
        var ref1;
        (ref1 = chartObject.value) === null || ref1 === void 0 ? void 0 : ref1.draw(data, props.options);
      }
    }
    watch(
      () => props.data,
      () => drawChart(),
      {
        deep: true
      }
    );
    watch(
      () => props.options,
      () => drawChart(),
      {
        deep: true
      }
    );
    watch(
      () => props.type,
      () => {
        chartObject.value = createChartObject(chartsLib, chartObject.value, chartEl.value, props.type, props.events, props.createChart);
        drawChart();
      }
    );
    onMounted(() => {
      loadGoogleCharts(props.version, props.settings).then((api) => {
        if (api !== void 0) {
          chartsLib = api;
          chartObject.value = createChartObject(chartsLib, chartObject.value, chartEl.value, props.type, props.events, props.createChart);
          emit("ready", chartObject.value, api);
          drawChart();
        }
      });
      if (props.resizeDebounce > 0) {
        window.addEventListener("resize", debounce(drawChart, props.resizeDebounce));
      }
    });
    onBeforeUnmount(() => {
      if (chartObject.value !== null && typeof chartObject.value.clearChart === "function") {
        chartObject.value.clearChart();
      }
      if (props.resizeDebounce > 0) {
        window.removeEventListener("resize", debounce(drawChart, props.resizeDebounce));
      }
    });
    return () => h("div", {
      ref: chartEl
    }, []);
  }
});
const app = createApp({});
function install() {
  app.component("GChart", GChart);
}
const plugin = {
  version: "1.1.0",
  install
};
let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
}
if (GlobalVue !== null && GlobalVue !== void 0) {
  app.use(plugin);
}
export { GChart as G };
