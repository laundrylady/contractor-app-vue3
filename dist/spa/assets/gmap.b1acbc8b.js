import { _ as _export_sfc, m as openBlock, n as createElementBlock, p as renderSlot, q as createBaseVNode, s as normalizeStyle, t as normalizeClass, v as normalizeProps, x as mergeProps, y as toHandlers, z as createCommentVNode, A as createApp, b as boot } from "./index.f3419799.js";
var lazy = (fn) => {
  let called = false;
  let result;
  return () => {
    if (!called) {
      called = true;
      result = fn();
    }
    return result;
  };
};
class Env {
  static isServer() {
    return typeof document === "undefined";
  }
}
function createMapScript(options) {
  const googleMapScript = document.createElement("SCRIPT");
  if (typeof options !== "object") {
    throw new Error("options should  be an object");
  }
  if (Array.prototype.isPrototypeOf(options.libraries)) {
    options.libraries = options.libraries.join(",");
  }
  options["callback"] = "vueGoogleMapsInit";
  let baseUrl = "https://maps.googleapis.com/maps/api/js?";
  let url = baseUrl + Object.keys(options).map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(options[key])).join("&");
  googleMapScript.setAttribute("src", url);
  googleMapScript.setAttribute("async", "");
  googleMapScript.setAttribute("defer", "");
  return googleMapScript;
}
let isApiSetUp = false;
function loadGMapApi(options) {
  if (Env.isServer()) {
    return;
  }
  if (!isApiSetUp) {
    isApiSetUp = true;
    const googleMapScript = createMapScript(options);
    document.head.appendChild(googleMapScript);
  } else {
    throw new Error("You already started the loading of google maps");
  }
}
var bindEvents = (vueInst, googleMapsInst, events2) => {
  for (let eventName of events2) {
    const propName = `on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`.replace(
      /[-_]+(.)?/g,
      (_, c) => c ? c.toUpperCase() : ""
    );
    if (vueInst.$props[propName] || vueInst.$attrs[propName]) {
      googleMapsInst.addListener(eventName, (ev) => {
        vueInst.$emit(eventName, ev);
      });
    } else if (vueInst.$gmapOptions.autobindAllEvents || vueInst.$attrs[eventName]) {
      googleMapsInst.addListener(eventName, (ev) => {
        vueInst.$emit(eventName, ev);
      });
    }
  }
};
function WatchPrimitiveProperties(vueInst, propertiesToTrack, handler, immediate = false) {
  let isHandled = false;
  function requestHandle() {
    if (!isHandled) {
      isHandled = true;
      vueInst.$nextTick(() => {
        isHandled = false;
        handler();
      });
    }
  }
  for (let prop of propertiesToTrack) {
    vueInst.$watch(prop, requestHandle, { immediate });
  }
}
class Str {
  static capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
function getPropsValues(vueInst, props2) {
  return Object.keys(props2).reduce((acc, prop) => {
    if (vueInst[prop] !== void 0) {
      acc[prop] = vueInst[prop];
    }
    return acc;
  }, {});
}
function bindProps(vueInst, googleMapsInst, props2) {
  for (let attribute in props2) {
    let { twoWay, type, trackProperties, noBind } = props2[attribute];
    if (noBind)
      continue;
    const setMethodName = "set" + Str.capitalizeFirstLetter(attribute);
    const getMethodName = "get" + Str.capitalizeFirstLetter(attribute);
    const eventName = attribute.toLowerCase() + "_changed";
    const initialValue = vueInst[attribute];
    if (typeof googleMapsInst[setMethodName] === "undefined") {
      throw new Error(
        `${setMethodName} is not a method of (the Maps object corresponding to) ${vueInst.$options._componentTag}`
      );
    }
    if (type !== Object || !trackProperties) {
      vueInst.$watch(
        attribute,
        () => {
          const attributeValue = vueInst[attribute];
          googleMapsInst[setMethodName](attributeValue);
        },
        {
          immediate: typeof initialValue !== "undefined",
          deep: type === Object
        }
      );
    } else {
      WatchPrimitiveProperties(
        vueInst,
        trackProperties.map((prop) => `${attribute}.${prop}`),
        () => {
          googleMapsInst[setMethodName](vueInst[attribute]);
        },
        vueInst[attribute] !== void 0
      );
    }
    if (twoWay && (vueInst.$gmapOptions.autobindAllEvents || vueInst.$attrs[eventName])) {
      googleMapsInst.addListener(eventName, () => {
        vueInst.$emit(eventName, googleMapsInst[getMethodName]());
      });
    }
  }
}
var MapElementMixin = {
  inject: {
    $mapPromise: { default: "abcdef" }
  },
  provide() {
    this.$mapPromise.then((map) => {
      this.$map = map;
    });
    return {};
  }
};
function buildComponent(options) {
  const { mappedProps: mappedProps2, name, ctr, ctrArgs, events: events2, beforeCreate, afterCreate, props: props2, ...rest } = options;
  const promiseName = `$${name}Promise`;
  const instanceName = `$${name}Object`;
  assert(!(rest.props instanceof Array), "`props` should be an object, not Array");
  return {
    ...typeof GENERATE_DOC !== "undefined" ? { $vgmOptions: options } : {},
    mixins: [MapElementMixin],
    props: {
      ...props2,
      ...mappedPropsToVueProps(mappedProps2)
    },
    render() {
      return "";
    },
    provide() {
      const promise = this.$mapPromise.then((map) => {
        this.$map = map;
        const options2 = {
          ...this.options,
          map,
          ...getPropsValues(this, mappedProps2)
        };
        delete options2.options;
        if (beforeCreate) {
          const result = beforeCreate.bind(this)(options2);
          if (result instanceof Promise) {
            return result.then(() => ({ options: options2 }));
          }
        }
        return { options: options2 };
      }).then(({ options: options2 }) => {
        const ConstructorObject = ctr();
        this[instanceName] = ctrArgs ? new (Function.prototype.bind.call(
          ConstructorObject,
          null,
          ...ctrArgs(options2, getPropsValues(this, props2 || {}))
        ))() : new ConstructorObject(options2);
        bindProps(this, this[instanceName], mappedProps2);
        bindEvents(this, this[instanceName], events2);
        if (afterCreate) {
          afterCreate.bind(this)(this[instanceName]);
        }
        return this[instanceName];
      });
      this[promiseName] = promise;
      return { [promiseName]: promise };
    },
    unmounted() {
      if (this[instanceName] && this[instanceName].setMap) {
        this[instanceName].setMap(null);
      }
    },
    ...rest
  };
}
function assert(v, message) {
  if (!v)
    throw new Error(message);
}
function mappedPropsToVueProps(mappedProps2) {
  return Object.entries(mappedProps2).map(([key, prop]) => {
    const value = {};
    if ("type" in prop)
      value.type = prop.type;
    if ("default" in prop)
      value.default = prop.default;
    if ("required" in prop)
      value.required = prop.required;
    return [key, value];
  }).reduce((acc, [key, val]) => {
    acc[key] = val;
    return acc;
  }, {});
}
const props$9 = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    twoWay: false,
    type: Object
  },
  path: {
    type: Array,
    twoWay: true
  }
};
const events$8 = [
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "rightclick"
];
var Polyline = buildComponent({
  mappedProps: props$9,
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events$8,
  name: "polyline",
  ctr: () => google.maps.Polyline,
  emits: events$8,
  afterCreate(inst) {
    let clearEvents = () => {
    };
    events$8.forEach((event) => {
      inst.addListener(event, (payload) => {
        this.$emit(event, payload);
      });
    });
    this.$watch(
      "path",
      (path) => {
        if (path) {
          clearEvents();
          this.$polylineObject.setPath(path);
          const mvcPath = this.$polylineObject.getPath();
          const eventListeners = [];
          const updatePaths = () => {
            this.$emit("path_changed", this.$polylineObject.getPath());
          };
          eventListeners.push([mvcPath, mvcPath.addListener("insert_at", updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener("remove_at", updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener("set_at", updatePaths)]);
          clearEvents = () => {
            eventListeners.map(
              ([obj, listenerHandle]) => google.maps.event.removeListener(listenerHandle)
            );
          };
        }
      },
      {
        deep: this.deepWatch,
        immediate: true
      }
    );
  }
});
const props$8 = {
  draggable: {
    type: Boolean
  },
  editable: {
    type: Boolean
  },
  options: {
    type: Object
  },
  path: {
    type: Array,
    twoWay: true,
    noBind: true
  },
  paths: {
    type: Array,
    twoWay: true,
    noBind: true
  }
};
const events$7 = [
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "rightclick"
];
var Polygon = buildComponent({
  props: {
    deepWatch: {
      type: Boolean,
      default: false
    }
  },
  events: events$7,
  mappedProps: props$8,
  name: "polygon",
  ctr: () => google.maps.Polygon,
  emits: events$7,
  beforeCreate(options) {
    if (!options.path)
      delete options.path;
    if (!options.paths)
      delete options.paths;
  },
  afterCreate(inst) {
    let clearEvents = () => {
    };
    events$7.forEach((event) => {
      inst.addListener(event, (payload) => {
        this.$emit(event, payload);
      });
    });
    this.$watch(
      "paths",
      (paths) => {
        if (paths) {
          clearEvents();
          inst.setPaths(paths);
          const updatePaths = () => {
            this.$emit("paths_changed", inst.getPaths());
          };
          const eventListeners = [];
          const mvcArray = inst.getPaths();
          for (let i = 0; i < mvcArray.getLength(); i++) {
            let mvcPath = mvcArray.getAt(i);
            eventListeners.push([mvcPath, mvcPath.addListener("insert_at", updatePaths)]);
            eventListeners.push([mvcPath, mvcPath.addListener("remove_at", updatePaths)]);
            eventListeners.push([mvcPath, mvcPath.addListener("set_at", updatePaths)]);
          }
          eventListeners.push([mvcArray, mvcArray.addListener("insert_at", updatePaths)]);
          eventListeners.push([mvcArray, mvcArray.addListener("remove_at", updatePaths)]);
          eventListeners.push([mvcArray, mvcArray.addListener("set_at", updatePaths)]);
          clearEvents = () => {
            eventListeners.map(
              ([obj, listenerHandle]) => google.maps.event.removeListener(listenerHandle)
            );
          };
        }
      },
      {
        deep: this.deepWatch,
        immediate: true
      }
    );
    this.$watch(
      "path",
      (path) => {
        if (path) {
          clearEvents();
          inst.setPaths(path);
          const mvcPath = inst.getPath();
          const eventListeners = [];
          const updatePaths = () => {
            this.$emit("path_changed", inst.getPath());
          };
          eventListeners.push([mvcPath, mvcPath.addListener("insert_at", updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener("remove_at", updatePaths)]);
          eventListeners.push([mvcPath, mvcPath.addListener("set_at", updatePaths)]);
          clearEvents = () => {
            eventListeners.map(
              ([obj, listenerHandle]) => google.maps.event.removeListener(listenerHandle)
            );
          };
        }
      },
      {
        deep: this.deepWatch,
        immediate: true
      }
    );
  }
});
const props$7 = {
  center: {
    type: Object,
    twoWay: true,
    required: true
  },
  radius: {
    type: Number,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};
const events$6 = [
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "rightclick"
];
var Circle = buildComponent({
  mappedProps: props$7,
  name: "circle",
  ctr: () => google.maps.Circle,
  events: events$6
});
const props$6 = {
  bounds: {
    type: Object,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    twoWay: false
  }
};
const events$5 = [
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "rightclick"
];
var Rectangle = buildComponent({
  mappedProps: props$6,
  name: "rectangle",
  ctr: () => google.maps.Rectangle,
  events: events$5
});
const props$5 = {
  animation: {
    twoWay: true,
    type: Number
  },
  attribution: {
    type: Object
  },
  clickable: {
    type: Boolean,
    twoWay: true,
    default: true
  },
  cursor: {
    type: String,
    twoWay: true
  },
  draggable: {
    type: Boolean,
    twoWay: true,
    default: false
  },
  icon: {
    twoWay: true
  },
  label: {},
  opacity: {
    type: Number,
    default: 1
  },
  options: {
    type: Object
  },
  place: {
    type: Object
  },
  position: {
    type: Object,
    twoWay: true
  },
  shape: {
    type: Object,
    twoWay: true
  },
  title: {
    type: String,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  },
  visible: {
    twoWay: true,
    default: true
  }
};
const events$4 = [
  "click",
  "rightclick",
  "dblclick",
  "drag",
  "dragstart",
  "dragend",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout"
];
const _sfc_main$4 = buildComponent({
  mappedProps: props$5,
  events: events$4,
  name: "marker",
  ctr: () => google.maps.Marker,
  inject: {
    $clusterPromise: {
      default: null
    }
  },
  emits: events$4,
  unmounted() {
    if (!this.$markerObject) {
      return;
    }
    if (this.$clusterObject) {
      this.$clusterObject.removeMarker(this.$markerObject, true);
    } else {
      this.$markerObject.setMap(null);
    }
  },
  beforeCreate(options) {
    if (this.$clusterPromise) {
      options.map = null;
    }
    return this.$clusterPromise;
  },
  afterCreate(inst) {
    events$4.forEach((event) => {
      inst.addListener(event, (payload) => {
        this.$emit(event, payload);
      });
    });
    if (this.$clusterPromise) {
      this.$clusterPromise.then((co) => {
        this.$clusterObject = co;
        co.addMarker(inst);
      });
    }
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    onClick: _cache[0] || (_cache[0] = () => {
      _ctx.console.log("sdfsd");
    })
  }, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Marker = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var fastDeepEqual = function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!equal(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
function sortKD(ids, coords, nodeSize, left, right, depth) {
  if (right - left <= nodeSize)
    return;
  const m = left + right >> 1;
  select(ids, coords, m, left, right, depth % 2);
  sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
  sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
}
function select(ids, coords, k, left, right, inc) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      select(ids, coords, k, newLeft, newRight, inc);
    }
    const t = coords[2 * k + inc];
    let i = left;
    let j = right;
    swapItem(ids, coords, left, k);
    if (coords[2 * right + inc] > t)
      swapItem(ids, coords, left, right);
    while (i < j) {
      swapItem(ids, coords, i, j);
      i++;
      j--;
      while (coords[2 * i + inc] < t)
        i++;
      while (coords[2 * j + inc] > t)
        j--;
    }
    if (coords[2 * left + inc] === t)
      swapItem(ids, coords, left, j);
    else {
      j++;
      swapItem(ids, coords, j, right);
    }
    if (j <= k)
      left = j + 1;
    if (k <= j)
      right = j - 1;
  }
}
function swapItem(ids, coords, i, j) {
  swap(ids, i, j);
  swap(coords, 2 * i, 2 * j);
  swap(coords, 2 * i + 1, 2 * j + 1);
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
  const stack = [0, ids.length - 1, 0];
  const result = [];
  let x, y;
  while (stack.length) {
    const axis = stack.pop();
    const right = stack.pop();
    const left = stack.pop();
    if (right - left <= nodeSize) {
      for (let i = left; i <= right; i++) {
        x = coords[2 * i];
        y = coords[2 * i + 1];
        if (x >= minX && x <= maxX && y >= minY && y <= maxY)
          result.push(ids[i]);
      }
      continue;
    }
    const m = Math.floor((left + right) / 2);
    x = coords[2 * m];
    y = coords[2 * m + 1];
    if (x >= minX && x <= maxX && y >= minY && y <= maxY)
      result.push(ids[m]);
    const nextAxis = (axis + 1) % 2;
    if (axis === 0 ? minX <= x : minY <= y) {
      stack.push(left);
      stack.push(m - 1);
      stack.push(nextAxis);
    }
    if (axis === 0 ? maxX >= x : maxY >= y) {
      stack.push(m + 1);
      stack.push(right);
      stack.push(nextAxis);
    }
  }
  return result;
}
function within(ids, coords, qx, qy, r, nodeSize) {
  const stack = [0, ids.length - 1, 0];
  const result = [];
  const r2 = r * r;
  while (stack.length) {
    const axis = stack.pop();
    const right = stack.pop();
    const left = stack.pop();
    if (right - left <= nodeSize) {
      for (let i = left; i <= right; i++) {
        if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2)
          result.push(ids[i]);
      }
      continue;
    }
    const m = Math.floor((left + right) / 2);
    const x = coords[2 * m];
    const y = coords[2 * m + 1];
    if (sqDist(x, y, qx, qy) <= r2)
      result.push(ids[m]);
    const nextAxis = (axis + 1) % 2;
    if (axis === 0 ? qx - r <= x : qy - r <= y) {
      stack.push(left);
      stack.push(m - 1);
      stack.push(nextAxis);
    }
    if (axis === 0 ? qx + r >= x : qy + r >= y) {
      stack.push(m + 1);
      stack.push(right);
      stack.push(nextAxis);
    }
  }
  return result;
}
function sqDist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}
const defaultGetX = (p) => p[0];
const defaultGetY = (p) => p[1];
class KDBush {
  constructor(points, getX2 = defaultGetX, getY2 = defaultGetY, nodeSize = 64, ArrayType = Float64Array) {
    this.nodeSize = nodeSize;
    this.points = points;
    const IndexArrayType = points.length < 65536 ? Uint16Array : Uint32Array;
    const ids = this.ids = new IndexArrayType(points.length);
    const coords = this.coords = new ArrayType(points.length * 2);
    for (let i = 0; i < points.length; i++) {
      ids[i] = i;
      coords[2 * i] = getX2(points[i]);
      coords[2 * i + 1] = getY2(points[i]);
    }
    sortKD(ids, coords, nodeSize, 0, ids.length - 1, 0);
  }
  range(minX, minY, maxX, maxY) {
    return range(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
  }
  within(x, y, r) {
    return within(this.ids, this.coords, x, y, r, this.nodeSize);
  }
}
const defaultOptions = {
  minZoom: 0,
  maxZoom: 16,
  minPoints: 2,
  radius: 40,
  extent: 512,
  nodeSize: 64,
  log: false,
  generateId: false,
  reduce: null,
  map: (props2) => props2
};
const fround = Math.fround || ((tmp) => (x) => {
  tmp[0] = +x;
  return tmp[0];
})(new Float32Array(1));
class Supercluster {
  constructor(options) {
    this.options = extend$1(Object.create(defaultOptions), options);
    this.trees = new Array(this.options.maxZoom + 1);
  }
  load(points) {
    const { log, minZoom, maxZoom, nodeSize } = this.options;
    if (log)
      console.time("total time");
    const timerId = `prepare ${points.length} points`;
    if (log)
      console.time(timerId);
    this.points = points;
    let clusters = [];
    for (let i = 0; i < points.length; i++) {
      if (!points[i].geometry)
        continue;
      clusters.push(createPointCluster(points[i], i));
    }
    this.trees[maxZoom + 1] = new KDBush(clusters, getX, getY, nodeSize, Float32Array);
    if (log)
      console.timeEnd(timerId);
    for (let z = maxZoom; z >= minZoom; z--) {
      const now = +Date.now();
      clusters = this._cluster(clusters, z);
      this.trees[z] = new KDBush(clusters, getX, getY, nodeSize, Float32Array);
      if (log)
        console.log("z%d: %d clusters in %dms", z, clusters.length, +Date.now() - now);
    }
    if (log)
      console.timeEnd("total time");
    return this;
  }
  getClusters(bbox, zoom) {
    let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
    const minLat = Math.max(-90, Math.min(90, bbox[1]));
    let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
    const maxLat = Math.max(-90, Math.min(90, bbox[3]));
    if (bbox[2] - bbox[0] >= 360) {
      minLng = -180;
      maxLng = 180;
    } else if (minLng > maxLng) {
      const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
      const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
      return easternHem.concat(westernHem);
    }
    const tree = this.trees[this._limitZoom(zoom)];
    const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
    const clusters = [];
    for (const id of ids) {
      const c = tree.points[id];
      clusters.push(c.numPoints ? getClusterJSON(c) : this.points[c.index]);
    }
    return clusters;
  }
  getChildren(clusterId) {
    const originId = this._getOriginId(clusterId);
    const originZoom = this._getOriginZoom(clusterId);
    const errorMsg = "No cluster with the specified id.";
    const index = this.trees[originZoom];
    if (!index)
      throw new Error(errorMsg);
    const origin = index.points[originId];
    if (!origin)
      throw new Error(errorMsg);
    const r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
    const ids = index.within(origin.x, origin.y, r);
    const children = [];
    for (const id of ids) {
      const c = index.points[id];
      if (c.parentId === clusterId) {
        children.push(c.numPoints ? getClusterJSON(c) : this.points[c.index]);
      }
    }
    if (children.length === 0)
      throw new Error(errorMsg);
    return children;
  }
  getLeaves(clusterId, limit, offset) {
    limit = limit || 10;
    offset = offset || 0;
    const leaves = [];
    this._appendLeaves(leaves, clusterId, limit, offset, 0);
    return leaves;
  }
  getTile(z, x, y) {
    const tree = this.trees[this._limitZoom(z)];
    const z2 = Math.pow(2, z);
    const { extent, radius } = this.options;
    const p = radius / extent;
    const top = (y - p) / z2;
    const bottom = (y + 1 + p) / z2;
    const tile = {
      features: []
    };
    this._addTileFeatures(
      tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),
      tree.points,
      x,
      y,
      z2,
      tile
    );
    if (x === 0) {
      this._addTileFeatures(
        tree.range(1 - p / z2, top, 1, bottom),
        tree.points,
        z2,
        y,
        z2,
        tile
      );
    }
    if (x === z2 - 1) {
      this._addTileFeatures(
        tree.range(0, top, p / z2, bottom),
        tree.points,
        -1,
        y,
        z2,
        tile
      );
    }
    return tile.features.length ? tile : null;
  }
  getClusterExpansionZoom(clusterId) {
    let expansionZoom = this._getOriginZoom(clusterId) - 1;
    while (expansionZoom <= this.options.maxZoom) {
      const children = this.getChildren(clusterId);
      expansionZoom++;
      if (children.length !== 1)
        break;
      clusterId = children[0].properties.cluster_id;
    }
    return expansionZoom;
  }
  _appendLeaves(result, clusterId, limit, offset, skipped) {
    const children = this.getChildren(clusterId);
    for (const child of children) {
      const props2 = child.properties;
      if (props2 && props2.cluster) {
        if (skipped + props2.point_count <= offset) {
          skipped += props2.point_count;
        } else {
          skipped = this._appendLeaves(result, props2.cluster_id, limit, offset, skipped);
        }
      } else if (skipped < offset) {
        skipped++;
      } else {
        result.push(child);
      }
      if (result.length === limit)
        break;
    }
    return skipped;
  }
  _addTileFeatures(ids, points, x, y, z2, tile) {
    for (const i of ids) {
      const c = points[i];
      const isCluster = c.numPoints;
      let tags, px, py;
      if (isCluster) {
        tags = getClusterProperties(c);
        px = c.x;
        py = c.y;
      } else {
        const p = this.points[c.index];
        tags = p.properties;
        px = lngX(p.geometry.coordinates[0]);
        py = latY(p.geometry.coordinates[1]);
      }
      const f = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (px * z2 - x)),
          Math.round(this.options.extent * (py * z2 - y))
        ]],
        tags
      };
      let id;
      if (isCluster) {
        id = c.id;
      } else if (this.options.generateId) {
        id = c.index;
      } else if (this.points[c.index].id) {
        id = this.points[c.index].id;
      }
      if (id !== void 0)
        f.id = id;
      tile.features.push(f);
    }
  }
  _limitZoom(z) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+z), this.options.maxZoom + 1));
  }
  _cluster(points, zoom) {
    const clusters = [];
    const { radius, extent, reduce, minPoints } = this.options;
    const r = radius / (extent * Math.pow(2, zoom));
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (p.zoom <= zoom)
        continue;
      p.zoom = zoom;
      const tree = this.trees[zoom + 1];
      const neighborIds = tree.within(p.x, p.y, r);
      const numPointsOrigin = p.numPoints || 1;
      let numPoints = numPointsOrigin;
      for (const neighborId of neighborIds) {
        const b = tree.points[neighborId];
        if (b.zoom > zoom)
          numPoints += b.numPoints || 1;
      }
      if (numPoints > numPointsOrigin && numPoints >= minPoints) {
        let wx = p.x * numPointsOrigin;
        let wy = p.y * numPointsOrigin;
        let clusterProperties = reduce && numPointsOrigin > 1 ? this._map(p, true) : null;
        const id = (i << 5) + (zoom + 1) + this.points.length;
        for (const neighborId of neighborIds) {
          const b = tree.points[neighborId];
          if (b.zoom <= zoom)
            continue;
          b.zoom = zoom;
          const numPoints2 = b.numPoints || 1;
          wx += b.x * numPoints2;
          wy += b.y * numPoints2;
          b.parentId = id;
          if (reduce) {
            if (!clusterProperties)
              clusterProperties = this._map(p, true);
            reduce(clusterProperties, this._map(b));
          }
        }
        p.parentId = id;
        clusters.push(createCluster(wx / numPoints, wy / numPoints, id, numPoints, clusterProperties));
      } else {
        clusters.push(p);
        if (numPoints > 1) {
          for (const neighborId of neighborIds) {
            const b = tree.points[neighborId];
            if (b.zoom <= zoom)
              continue;
            b.zoom = zoom;
            clusters.push(b);
          }
        }
      }
    }
    return clusters;
  }
  _getOriginId(clusterId) {
    return clusterId - this.points.length >> 5;
  }
  _getOriginZoom(clusterId) {
    return (clusterId - this.points.length) % 32;
  }
  _map(point, clone) {
    if (point.numPoints) {
      return clone ? extend$1({}, point.properties) : point.properties;
    }
    const original = this.points[point.index].properties;
    const result = this.options.map(original);
    return clone && result === original ? extend$1({}, result) : result;
  }
}
function createCluster(x, y, id, numPoints, properties) {
  return {
    x: fround(x),
    y: fround(y),
    zoom: Infinity,
    id,
    parentId: -1,
    numPoints,
    properties
  };
}
function createPointCluster(p, id) {
  const [x, y] = p.geometry.coordinates;
  return {
    x: fround(lngX(x)),
    y: fround(latY(y)),
    zoom: Infinity,
    index: id,
    parentId: -1
  };
}
function getClusterJSON(cluster) {
  return {
    type: "Feature",
    id: cluster.id,
    properties: getClusterProperties(cluster),
    geometry: {
      type: "Point",
      coordinates: [xLng(cluster.x), yLat(cluster.y)]
    }
  };
}
function getClusterProperties(cluster) {
  const count = cluster.numPoints;
  const abbrev = count >= 1e4 ? `${Math.round(count / 1e3)}k` : count >= 1e3 ? `${Math.round(count / 100) / 10}k` : count;
  return extend$1(extend$1({}, cluster.properties), {
    cluster: true,
    cluster_id: cluster.id,
    point_count: count,
    point_count_abbreviated: abbrev
  });
}
function lngX(lng) {
  return lng / 360 + 0.5;
}
function latY(lat) {
  const sin = Math.sin(lat * Math.PI / 180);
  const y = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
  return y < 0 ? 0 : y > 1 ? 1 : y;
}
function xLng(x) {
  return (x - 0.5) * 360;
}
function yLat(y) {
  const y2 = (180 - y * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}
function extend$1(dest, src) {
  for (const id in src)
    dest[id] = src[id];
  return dest;
}
function getX(p) {
  return p.x;
}
function getY(p) {
  return p.y;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
class Cluster {
  constructor({ markers, position }) {
    this.markers = markers;
    if (position) {
      if (position instanceof google.maps.LatLng) {
        this._position = position;
      } else {
        this._position = new google.maps.LatLng(position);
      }
    }
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position) {
      return void 0;
    }
    return this.markers.reduce((bounds, marker) => {
      return bounds.extend(marker.getPosition());
    }, new google.maps.LatLngBounds(this._position, this._position));
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  get count() {
    return this.markers.filter((m) => m.getVisible()).length;
  }
  push(marker) {
    this.markers.push(marker);
  }
  delete() {
    if (this.marker) {
      this.marker.setMap(null);
      delete this.marker;
    }
    this.markers.length = 0;
  }
}
class AbstractAlgorithm {
  constructor({ maxZoom = 16 }) {
    this.maxZoom = maxZoom;
  }
  noop({ markers }) {
    return noop(markers);
  }
}
const noop = (markers) => {
  const clusters = markers.map((marker) => new Cluster({
    position: marker.getPosition(),
    markers: [marker]
  }));
  return clusters;
};
class SuperClusterAlgorithm extends AbstractAlgorithm {
  constructor(_a) {
    var { maxZoom, radius = 60 } = _a, options = __rest(_a, ["maxZoom", "radius"]);
    super({ maxZoom });
    this.superCluster = new Supercluster(Object.assign({ maxZoom: this.maxZoom, radius }, options));
    this.state = { zoom: null };
  }
  calculate(input) {
    let changed = false;
    if (!fastDeepEqual(input.markers, this.markers)) {
      changed = true;
      this.markers = [...input.markers];
      const points = this.markers.map((marker) => {
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              marker.getPosition().lng(),
              marker.getPosition().lat()
            ]
          },
          properties: { marker }
        };
      });
      this.superCluster.load(points);
    }
    const state = { zoom: input.map.getZoom() };
    if (!changed) {
      if (this.state.zoom > this.maxZoom && state.zoom > this.maxZoom)
        ;
      else {
        changed = changed || !fastDeepEqual(this.state, state);
      }
    }
    this.state = state;
    if (changed) {
      this.clusters = this.cluster(input);
    }
    return { clusters: this.clusters, changed };
  }
  cluster({ map }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(map.getZoom())).map(this.transformCluster.bind(this));
  }
  transformCluster({ geometry: { coordinates: [lng, lat] }, properties }) {
    if (properties.cluster) {
      return new Cluster({
        markers: this.superCluster.getLeaves(properties.cluster_id, Infinity).map((leaf) => leaf.properties.marker),
        position: new google.maps.LatLng({ lat, lng })
      });
    } else {
      const marker = properties.marker;
      return new Cluster({
        markers: [marker],
        position: marker.getPosition()
      });
    }
  }
}
class ClusterStats {
  constructor(markers, clusters) {
    this.markers = { sum: markers.length };
    const clusterMarkerCounts = clusters.map((a) => a.count);
    const clusterMarkerSum = clusterMarkerCounts.reduce((a, b) => a + b, 0);
    this.clusters = {
      count: clusters.length,
      markers: {
        mean: clusterMarkerSum / clusters.length,
        sum: clusterMarkerSum,
        min: Math.min(...clusterMarkerCounts),
        max: Math.max(...clusterMarkerCounts)
      }
    };
  }
}
class DefaultRenderer {
  render({ count, position }, stats) {
    const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
    const svg = window.btoa(`
  <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`);
    return new google.maps.Marker({
      position,
      icon: {
        url: `data:image/svg+xml;base64,${svg}`,
        scaledSize: new google.maps.Size(45, 45)
      },
      label: {
        text: String(count),
        color: "rgba(255,255,255,0.9)",
        fontSize: "12px"
      },
      title: `Cluster of ${count} markers`,
      zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count
    });
  }
}
function extend(type1, type2) {
  for (let property in type2.prototype) {
    type1.prototype[property] = type2.prototype[property];
  }
}
class OverlayViewSafe {
  constructor() {
    extend(OverlayViewSafe, google.maps.OverlayView);
  }
}
var MarkerClustererEvents;
(function(MarkerClustererEvents2) {
  MarkerClustererEvents2["CLUSTERING_BEGIN"] = "clusteringbegin";
  MarkerClustererEvents2["CLUSTERING_END"] = "clusteringend";
  MarkerClustererEvents2["CLUSTER_CLICK"] = "click";
})(MarkerClustererEvents || (MarkerClustererEvents = {}));
const defaultOnClusterClickHandler = (_, cluster, map) => {
  map.fitBounds(cluster.bounds);
};
class MarkerClusterer extends OverlayViewSafe {
  constructor({ map, markers = [], algorithm = new SuperClusterAlgorithm({}), renderer = new DefaultRenderer(), onClusterClick = defaultOnClusterClickHandler }) {
    super();
    this.markers = [...markers];
    this.clusters = [];
    this.algorithm = algorithm;
    this.renderer = renderer;
    this.onClusterClick = onClusterClick;
    if (map) {
      this.setMap(map);
    }
  }
  addMarker(marker, noDraw) {
    if (this.markers.includes(marker)) {
      return;
    }
    this.markers.push(marker);
    if (!noDraw) {
      this.render();
    }
  }
  addMarkers(markers, noDraw) {
    markers.forEach((marker) => {
      this.addMarker(marker, true);
    });
    if (!noDraw) {
      this.render();
    }
  }
  removeMarker(marker, noDraw) {
    const index = this.markers.indexOf(marker);
    if (index === -1) {
      return false;
    }
    marker.setMap(null);
    this.markers.splice(index, 1);
    if (!noDraw) {
      this.render();
    }
    return true;
  }
  removeMarkers(markers, noDraw) {
    let removed = false;
    markers.forEach((marker) => {
      removed = this.removeMarker(marker, true) || removed;
    });
    if (removed && !noDraw) {
      this.render();
    }
    return removed;
  }
  clearMarkers(noDraw) {
    this.markers.length = 0;
    if (!noDraw) {
      this.render();
    }
  }
  render() {
    const map = this.getMap();
    if (map instanceof google.maps.Map && this.getProjection()) {
      google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
      const { clusters, changed } = this.algorithm.calculate({
        markers: this.markers,
        map,
        mapCanvasProjection: this.getProjection()
      });
      if (changed || changed == void 0) {
        this.reset();
        this.clusters = clusters;
        this.renderClusters();
      }
      google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
    this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener);
    this.reset();
  }
  reset() {
    this.markers.forEach((marker) => marker.setMap(null));
    this.clusters.forEach((cluster) => cluster.delete());
    this.clusters = [];
  }
  renderClusters() {
    const stats = new ClusterStats(this.markers, this.clusters);
    const map = this.getMap();
    this.clusters.forEach((cluster) => {
      if (cluster.markers.length === 1) {
        cluster.marker = cluster.markers[0];
      } else {
        cluster.marker = this.renderer.render(cluster, stats);
        if (this.onClusterClick) {
          cluster.marker.addListener(
            "click",
            (event) => {
              google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
              this.onClusterClick(event, cluster, map);
            }
          );
        }
      }
      cluster.marker.setMap(map);
    });
  }
}
const props$4 = {
  algorithm: {
    type: Object,
    default: new SuperClusterAlgorithm({}),
    noBind: true
  },
  renderer: {
    type: Object,
    default: new DefaultRenderer(),
    noBind: true
  }
};
const events$3 = ["clusteringbegin", "clusteringend"];
const _sfc_main$3 = buildComponent({
  mappedProps: props$4,
  events: events$3,
  name: "cluster",
  ctr: () => {
    if (typeof MarkerClusterer === "undefined") {
      const errorMessage = "MarkerClusterer is not installed!";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    return MarkerClusterer;
  },
  ctrArgs: ({ map, ...otherOptions }) => [{ map, ...otherOptions }],
  afterCreate(inst) {
    const reinsertMarkers = () => {
      const oldMarkers = inst.getMarkers();
      inst.clearMarkers();
      inst.addMarkers(oldMarkers);
    };
    for (let prop in props$4) {
      if (props$4[prop].twoWay) {
        this.$on(prop.toLowerCase() + "_changed", reinsertMarkers);
      }
    }
  },
  updated() {
    if (this.$clusterObject) {
      this.$clusterObject.render();
    }
  },
  beforeUnmount() {
    if (this.$children && this.$children.length) {
      this.$children.forEach((marker) => {
        if (marker.$clusterObject === this.$clusterObject) {
          marker.$clusterObject = null;
        }
      });
    }
    if (this.$clusterObject) {
      this.$clusterObject.clearMarkers();
    }
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var GMapCluster = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const props$3 = {
  options: {
    type: Object,
    required: false,
    default() {
      return {};
    }
  },
  position: {
    type: Object,
    twoWay: true
  },
  zIndex: {
    type: Number,
    twoWay: true
  }
};
const events$2 = ["domready", "click", "closeclick", "content_changed"];
const _sfc_main$2 = buildComponent({
  mappedProps: props$3,
  events: events$2,
  name: "infoWindow",
  ctr: () => google.maps.InfoWindow,
  props: {
    opened: {
      type: Boolean,
      default: true
    }
  },
  inject: {
    $markerPromise: {
      default: null
    }
  },
  mounted() {
    const el = this.$refs.infoWindow;
    el.parentNode.removeChild(el);
  },
  beforeCreate(options) {
    options.content = this.$refs.infoWindow;
    if (this.$markerPromise) {
      delete options.position;
      return this.$markerPromise.then((mo) => {
        this.$markerObject = mo;
        return mo;
      });
    }
  },
  emits: ["closeclick"],
  methods: {
    _openInfoWindow() {
      this.$infoWindowObject.close();
      if (this.opened) {
        this.$infoWindowObject.open(this.$map, this.$markerObject);
      } else {
        this.$emit("closeclick");
      }
    }
  },
  afterCreate() {
    this._openInfoWindow();
    this.$watch("opened", () => {
      this._openInfoWindow();
    });
  }
});
const _hoisted_1$1 = { ref: "infoWindow" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ], 512);
}
var InfoWindow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var mountableMixin = {
  props: ["resizeBus"],
  data() {
    return {
      _actualResizeBus: null
    };
  },
  created() {
    if (typeof this.resizeBus === "undefined") {
      this.$data._actualResizeBus = this.$gmapDefaultResizeBus;
    } else {
      this.$data._actualResizeBus = this.resizeBus;
    }
  },
  methods: {
    _resizeCallback() {
      this.resize();
    },
    isFunction(functionToCheck) {
      return functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
    },
    _delayedResizeCallback() {
      this.$nextTick(() => this._resizeCallback());
    }
  },
  watch: {
    resizeBus(newVal) {
      this.$data._actualResizeBus = newVal;
    },
    "$data._actualResizeBus"(newVal, oldVal) {
      if (oldVal) {
        oldVal.$off("resize", this._delayedResizeCallback);
      }
    }
  },
  unmounted() {
    if (this.$data._actualResizeBus && this.isFunction(this.$data._actualResizeBus.$off)) {
      this.$data._actualResizeBus.$off("resize", this._delayedResizeCallback);
    }
  }
};
function TwoWayBindingWrapper(fn) {
  let counter = 0;
  fn(
    () => {
      counter += 1;
    },
    () => {
      counter = Math.max(0, counter - 1);
    },
    () => counter === 0
  );
}
var map_vue_vue_type_style_index_0_lang = "";
const props$2 = {
  center: {
    default: { lat: 0, lng: 0 },
    twoWay: true,
    type: Object,
    noBind: true
  },
  zoom: {
    required: false,
    twoWay: true,
    type: Number,
    noBind: true
  },
  maxZoom: {
    required: false,
    twoWay: true,
    type: Number,
    noBind: true
  },
  heading: {
    type: Number,
    twoWay: true
  },
  mapTypeId: {
    twoWay: true,
    type: String
  },
  tilt: {
    twoWay: true,
    type: Number
  },
  options: {
    type: Object,
    default() {
      return {};
    }
  }
};
const events$1 = [
  "bounds_changed",
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "idle",
  "mousemove",
  "mouseout",
  "mouseover",
  "resize",
  "rightclick",
  "tilesloaded"
];
const linkedMethods = ["panBy", "panTo", "panToBounds", "fitBounds"].reduce((all, methodName) => {
  all[methodName] = function() {
    if (this.$mapObject) {
      this.$mapObject[methodName].apply(this.$mapObject, arguments);
    }
  };
  return all;
}, {});
const customMethods = {
  resize() {
    if (this.$mapObject) {
      google.maps.event.trigger(this.$mapObject, "resize");
    }
  },
  resizePreserveCenter() {
    if (!this.$mapObject) {
      return;
    }
    const oldCenter = this.$mapObject.getCenter();
    google.maps.event.trigger(this.$mapObject, "resize");
    this.$mapObject.setCenter(oldCenter);
  },
  _resizeCallback() {
    this.resizePreserveCenter();
  }
};
const _sfc_main$1 = {
  mixins: [mountableMixin],
  props: mappedPropsToVueProps({
    ...props$2,
    ...events$1.reduce(
      (obj, eventName) => ({
        ...obj,
        [`on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`.replace(
          /[-_]+(.)?/g,
          (_, c) => c ? c.toUpperCase() : ""
        )]: Function
      }),
      {}
    )
  }),
  inheritAttrs: false,
  provide() {
    this.$mapPromise = new Promise((resolve, reject) => {
      this.$mapPromiseDeferred = { resolve, reject };
    });
    return {
      $mapPromise: this.$mapPromise
    };
  },
  emits: ["center_changed", "zoom_changed", "bounds_changed"],
  computed: {
    finalLat() {
      return this.center && typeof this.center.lat === "function" ? this.center.lat() : this.center.lat;
    },
    finalLng() {
      return this.center && typeof this.center.lng === "function" ? this.center.lng() : this.center.lng;
    },
    finalLatLng() {
      return { lat: this.finalLat, lng: this.finalLng };
    }
  },
  watch: {
    zoom(zoom) {
      if (this.$mapObject) {
        this.$mapObject.setZoom(zoom);
      }
    }
  },
  mounted() {
    return this.$gmapApiPromiseLazy().then(() => {
      const element = this.$refs["vue-map"];
      const options = {
        ...this.options,
        ...getPropsValues(this, props$2)
      };
      delete options.options;
      this.$mapObject = new google.maps.Map(element, options);
      bindProps(this, this.$mapObject, props$2);
      bindEvents(this, this.$mapObject, events$1);
      TwoWayBindingWrapper((increment, decrement, shouldUpdate) => {
        this.$mapObject.addListener("center_changed", () => {
          if (shouldUpdate()) {
            this.$emit("center_changed", this.$mapObject.getCenter());
          }
          decrement();
        });
        const updateCenter = () => {
          increment();
          this.$mapObject.setCenter(this.finalLatLng);
        };
        WatchPrimitiveProperties(this, ["finalLat", "finalLng"], updateCenter);
      });
      this.$mapObject.addListener("zoom_changed", () => {
        this.$emit("zoom_changed", this.$mapObject.getZoom());
      });
      this.$mapObject.addListener("bounds_changed", () => {
        this.$emit("bounds_changed", this.$mapObject.getBounds());
      });
      this.$mapPromiseDeferred.resolve(this.$mapObject);
      return this.$mapObject;
    }).catch((error) => {
      throw error;
    });
  },
  methods: {
    ...customMethods,
    ...linkedMethods
  }
};
const _hoisted_1 = { class: "vue-map-hidden" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vue-map-container", _ctx.$attrs.class])
  }, [
    createBaseVNode("div", {
      ref: "vue-map",
      class: "vue-map",
      style: normalizeStyle(_ctx.$attrs.style ? _ctx.$attrs.style : "")
    }, null, 4),
    createBaseVNode("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "default")
    ]),
    renderSlot(_ctx.$slots, "visible")
  ], 2);
}
var Map = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const props$1 = {
  options: {
    type: Object,
    twoWay: false,
    default: () => {
    }
  },
  data: {
    type: Array,
    twoWay: true
  }
};
const events = [];
var Heatmap = buildComponent({
  mappedProps: props$1,
  name: "heatmap",
  ctr: () => google.maps.visualization.HeatmapLayer,
  events
});
var downArrowSimulator = (input) => {
  const _addEventListener = input.addEventListener ? input.addEventListener : input.attachEvent;
  function addEventListenerWrapper(type, listener) {
    if (type === "keydown") {
      const origListener = listener;
      listener = function(event) {
        const suggestionSelected = document.getElementsByClassName("pac-item-selected").length > 0;
        if (event.which === 13 && !suggestionSelected) {
          const simulatedEvent = document.createEvent("Event");
          simulatedEvent.keyCode = 40;
          simulatedEvent.which = 40;
          origListener.apply(input, [simulatedEvent]);
        }
        origListener.apply(input, [event]);
      };
    }
    _addEventListener.apply(input, [type, listener]);
  }
  input.addEventListener = addEventListenerWrapper;
  input.attachEvent = addEventListenerWrapper;
};
const mappedProps = {
  bounds: {
    type: Object
  },
  componentRestrictions: {
    type: Object,
    noBind: true
  },
  types: {
    type: Array,
    default: function() {
      return [];
    }
  }
};
const props = {
  selectFirstOnEnter: {
    required: false,
    type: Boolean,
    default: false
  },
  options: {
    type: Object
  }
};
const _sfc_main = {
  mounted() {
    const _this = this;
    this.$gmapApiPromiseLazy().then(() => {
      let refInput = _this.$refs.input;
      if (_this.$slots.input) {
        const refName = _this.$slots.input()[0].props.ref;
        const scopedInput = _this.$slots.input()[0].ref.i.ctx.$refs[refName];
        if (scopedInput) {
          refInput = scopedInput.$el.getElementsByTagName("input")[0];
        }
      }
      if (this.selectFirstOnEnter) {
        downArrowSimulator(refInput);
      }
      if (typeof google.maps.places.Autocomplete !== "function") {
        throw new Error(
          "google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?"
        );
      }
      const finalOptions = {
        ...getPropsValues(this, mappedProps),
        ...this.options
      };
      this.$autocomplete = new google.maps.places.Autocomplete(refInput, finalOptions);
      bindProps(this, this.$autocomplete, mappedProps);
      this.$watch("componentRestrictions", (v) => {
        if (v !== void 0) {
          this.$autocomplete.setComponentRestrictions(v);
        }
      });
      this.$autocomplete.addListener("place_changed", () => {
        this.$emit("place_changed", this.$autocomplete.getPlace());
      });
    });
  },
  props: {
    ...mappedPropsToVueProps(mappedProps),
    ...props
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.$slots["input"] ? renderSlot(_ctx.$slots, "input", normalizeProps(mergeProps({ key: 0 }, _ctx.$attrs))) : !_ctx.$slots["input"] ? (openBlock(), createElementBlock("input", mergeProps({
    key: 1,
    ref: "input"
  }, _ctx.$attrs, toHandlers(_ctx.$attrs, true)), null, 16)) : createCommentVNode("", true);
}
var Autocomplete = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
let GMapApi = null;
function install(Vue, options) {
  options = {
    installComponents: true,
    autobindAllEvents: false,
    ...options
  };
  GMapApi = createApp({
    data: function() {
      return { gmapApi: null };
    }
  });
  const defaultResizeBus = createApp();
  let gmapApiPromiseLazy = makeGMapApiPromiseLazy(options);
  Vue.mixin({
    created() {
      this.$gmapDefaultResizeBus = defaultResizeBus;
      this.$gmapOptions = options;
      this.$gmapApiPromiseLazy = gmapApiPromiseLazy;
    }
  });
  Vue.$gmapDefaultResizeBus = defaultResizeBus;
  Vue.$gmapApiPromiseLazy = gmapApiPromiseLazy;
  if (options.installComponents) {
    Vue.component("GMapMap", Map);
    Vue.component("GMapMarker", Marker);
    Vue.component("GMapInfoWindow", InfoWindow);
    Vue.component("GMapCluster", GMapCluster);
    Vue.component("GMapPolyline", Polyline);
    Vue.component("GMapPolygon", Polygon);
    Vue.component("GMapCircle", Circle);
    Vue.component("GMapRectangle", Rectangle);
    Vue.component("GMapAutocomplete", Autocomplete);
    Vue.component("GMapHeatmap", Heatmap);
  }
}
function makeGMapApiPromiseLazy(options) {
  function onApiLoaded() {
    GMapApi.gmapApi = {};
    return window.google;
  }
  if (options.load) {
    return lazy(() => {
      if (Env.isServer()) {
        return new Promise(() => {
        }).then(onApiLoaded);
      } else {
        return new Promise((resolve, reject) => {
          try {
            window["vueGoogleMapsInit"] = resolve;
            loadGMapApi(options.load);
          } catch (err) {
            reject(err);
          }
        }).then(onApiLoaded);
      }
    });
  } else {
    const promise = new Promise((resolve) => {
      if (Env.isServer()) {
        return;
      }
      window["vueGoogleMapsInit"] = resolve;
    }).then(onApiLoaded);
    return lazy(() => promise);
  }
}
var gmap = boot(async ({ app }) => {
  app.use(install, {
    load: {
      key: "AIzaSyBUK5yMK5Zdz9MOUbzam56ORuFexFBMk-g"
    }
  });
});
export { gmap as default };
