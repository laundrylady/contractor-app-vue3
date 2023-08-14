import { S as createComponent, r as ref, f as computed, h, N as QIcon, G as withDirectives, aq as Ripple, g as getCurrentInstance, i as inject, U as emptyRenderFn, bc as stepperKey, b9 as KeepAlive, V as hSlot, ab as useDarkProps, ac as useDark, Y as provide, a5 as hMergeSlot, ae as hDir, A as defineComponent, B as reactive, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, R as unref, J as createBlock, K as withCtx, aG as createTextVNode, F as Fragment, bd as renderList, aH as toDisplayString, P as QBtn, p as createBaseVNode, a9 as useRoute, o as onMounted, Q as QCard, L as QCardSection, M as QInput, ai as QToggle, be as QCheckbox } from "./index.ef1b2cb4.js";
import { Q as QSlideTransition, _ as _sfc_main$6 } from "./CountryField.9e2013c7.js";
import { u as usePanelChildProps, a as usePanelProps, b as usePanelEmits, c as usePanel } from "./use-panel.beea99a9.js";
import { u as useCache } from "./use-cache.b0833c75.js";
import { Q as QUploader } from "./QUploader.96ecb531.js";
import { Q as QPage } from "./QPage.cb9969b6.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.00cc152e.js";
import { u as useVuelidate, r as required, e as email, s as sameAs } from "./index.esm.af518789.js";
import { u as useQuasar } from "./use-quasar.79f1a1a0.js";
import { a as api } from "./axios.b301f987.js";
import { _ as _sfc_main$3 } from "./AppLogo.3dfad6fd.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.71b58638.js";
import { Q as QList } from "./QList.4bb90025.js";
import { u as uploadConfig, c as confirmDelete } from "./help.470b0717.js";
import { _ as _sfc_main$2 } from "./DateField.aae0861f.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./PostcodeRegionField.c8f1b987.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import "./QSelect.2ec92ecf.js";
import "./selection.bb98bc68.js";
import "./QMenu.9b70bf89.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./touch.3df10340.js";
import "./QCircularProgress.d9e04cfa.js";
import "./QResizeObserver.2a41aa22.js";
import "./ClosePopup.0453095b.js";
var StepHeader = createComponent({
  name: "StepHeader",
  props: {
    stepper: {},
    step: {},
    goToPanel: Function
  },
  setup(props, { attrs }) {
    const { proxy: { $q } } = getCurrentInstance();
    const blurRef = ref(null);
    const isActive = computed(() => props.stepper.modelValue === props.step.name);
    const isDisable = computed(() => {
      const opt = props.step.disable;
      return opt === true || opt === "";
    });
    const isError = computed(() => {
      const opt = props.step.error;
      return opt === true || opt === "";
    });
    const isDone = computed(() => {
      const opt = props.step.done;
      return isDisable.value === false && (opt === true || opt === "");
    });
    const headerNav = computed(() => {
      const opt = props.step.headerNav, nav = opt === true || opt === "" || opt === void 0;
      return isDisable.value === false && props.stepper.headerNav && nav;
    });
    const hasPrefix = computed(() => {
      return props.step.prefix && (isActive.value === false || props.stepper.activeIcon === "none") && (isError.value === false || props.stepper.errorIcon === "none") && (isDone.value === false || props.stepper.doneIcon === "none");
    });
    const icon = computed(() => {
      const defaultIcon = props.step.icon || props.stepper.inactiveIcon;
      if (isActive.value === true) {
        const icon2 = props.step.activeIcon || props.stepper.activeIcon;
        return icon2 === "none" ? defaultIcon : icon2 || $q.iconSet.stepper.active;
      }
      if (isError.value === true) {
        const icon2 = props.step.errorIcon || props.stepper.errorIcon;
        return icon2 === "none" ? defaultIcon : icon2 || $q.iconSet.stepper.error;
      }
      if (isDisable.value === false && isDone.value === true) {
        const icon2 = props.step.doneIcon || props.stepper.doneIcon;
        return icon2 === "none" ? defaultIcon : icon2 || $q.iconSet.stepper.done;
      }
      return defaultIcon;
    });
    const color = computed(() => {
      const errorColor = isError.value === true ? props.step.errorColor || props.stepper.errorColor : void 0;
      if (isActive.value === true) {
        const color2 = props.step.activeColor || props.stepper.activeColor || props.step.color;
        return color2 !== void 0 ? color2 : errorColor;
      }
      if (errorColor !== void 0) {
        return errorColor;
      }
      if (isDisable.value === false && isDone.value === true) {
        return props.step.doneColor || props.stepper.doneColor || props.step.color || props.stepper.inactiveColor;
      }
      return props.step.color || props.stepper.inactiveColor;
    });
    const classes = computed(() => {
      return "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (color.value !== void 0 ? ` text-${color.value}` : "") + (isError.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (hasPrefix.value === true ? "prefix" : "icon") : "") + (isActive.value === true ? " q-stepper__tab--active" : "") + (isDone.value === true ? " q-stepper__tab--done" : "") + (headerNav.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (isDisable.value === true ? " q-stepper__tab--disabled" : "");
    });
    const ripple = computed(() => props.stepper.headerNav !== true ? false : headerNav.value);
    function onActivate() {
      blurRef.value !== null && blurRef.value.focus();
      isActive.value === false && props.goToPanel(props.step.name);
    }
    function onKeyup(e) {
      if (e.keyCode === 13 && isActive.value === false) {
        props.goToPanel(props.step.name);
      }
    }
    return () => {
      const data = { class: classes.value };
      if (headerNav.value === true) {
        data.onClick = onActivate;
        data.onKeyup = onKeyup;
        Object.assign(
          data,
          isDisable.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: attrs.tabindex || 0 }
        );
      }
      const child = [
        h("div", { class: "q-focus-helper", tabindex: -1, ref: blurRef }),
        h("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [
          h("span", { class: "row flex-center" }, [
            hasPrefix.value === true ? props.step.prefix : h(QIcon, { name: icon.value })
          ])
        ])
      ];
      if (props.step.title !== void 0 && props.step.title !== null) {
        const content = [
          h("div", { class: "q-stepper__title" }, props.step.title)
        ];
        if (props.step.caption !== void 0 && props.step.caption !== null) {
          content.push(
            h("div", { class: "q-stepper__caption" }, props.step.caption)
          );
        }
        child.push(
          h("div", {
            class: "q-stepper__label q-stepper__line relative-position"
          }, content)
        );
      }
      return withDirectives(
        h("div", data, child),
        [[Ripple, ripple.value]]
      );
    };
  }
});
function getStepWrapper(slots) {
  return h("div", {
    class: "q-stepper__step-content"
  }, [
    h("div", {
      class: "q-stepper__step-inner"
    }, hSlot(slots.default))
  ]);
}
const PanelWrapper = {
  setup(_, { slots }) {
    return () => getStepWrapper(slots);
  }
};
var QStep = createComponent({
  name: "QStep",
  props: {
    ...usePanelChildProps,
    icon: String,
    color: String,
    title: {
      type: String,
      required: true
    },
    caption: String,
    prefix: [String, Number],
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String,
    headerNav: {
      type: Boolean,
      default: true
    },
    done: Boolean,
    error: Boolean,
    onScroll: [Function, Array]
  },
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $stepper = inject(stepperKey, emptyRenderFn);
    if ($stepper === emptyRenderFn) {
      console.error("QStep needs to be a child of QStepper");
      return emptyRenderFn;
    }
    const { getCacheWithFn } = useCache();
    const rootRef = ref(null);
    const isActive = computed(() => $stepper.value.modelValue === props.name);
    const scrollEvent = computed(() => $q.platform.is.ios !== true && $q.platform.is.chrome === true || isActive.value !== true || $stepper.value.vertical !== true ? {} : {
      onScroll(e) {
        const { target } = e;
        if (target.scrollTop > 0) {
          target.scrollTop = 0;
        }
        props.onScroll !== void 0 && emit("scroll", e);
      }
    });
    const contentKey = computed(() => typeof props.name === "string" || typeof props.name === "number" ? props.name : String(props.name));
    function getStepContent() {
      const vertical = $stepper.value.vertical;
      if (vertical === true && $stepper.value.keepAlive === true) {
        return h(
          KeepAlive,
          $stepper.value.keepAliveProps.value,
          isActive.value === true ? [
            h(
              $stepper.value.needsUniqueKeepAliveWrapper.value === true ? getCacheWithFn(contentKey.value, () => ({ ...PanelWrapper, name: contentKey.value })) : PanelWrapper,
              { key: contentKey.value },
              slots.default
            )
          ] : void 0
        );
      }
      return vertical !== true || isActive.value === true ? getStepWrapper(slots) : void 0;
    }
    return () => h(
      "div",
      { ref: rootRef, class: "q-stepper__step", role: "tabpanel", ...scrollEvent.value },
      $stepper.value.vertical === true ? [
        h(StepHeader, {
          stepper: $stepper.value,
          step: props,
          goToPanel: $stepper.value.goToPanel
        }),
        $stepper.value.animated === true ? h(QSlideTransition, getStepContent) : getStepContent()
      ] : [getStepContent()]
    );
  }
});
const camelRE = /(-\w)/g;
function camelizeProps(props) {
  const acc = {};
  for (const key in props) {
    const newKey = key.replace(camelRE, (m) => m[1].toUpperCase());
    acc[newKey] = props[key];
  }
  return acc;
}
var QStepper = createComponent({
  name: "QStepper",
  props: {
    ...useDarkProps,
    ...usePanelProps,
    flat: Boolean,
    bordered: Boolean,
    alternativeLabels: Boolean,
    headerNav: Boolean,
    contracted: Boolean,
    headerClass: String,
    inactiveColor: String,
    inactiveIcon: String,
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String
  },
  emits: usePanelEmits,
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const {
      updatePanelsList,
      isValidPanelName,
      updatePanelIndex,
      getPanelContent,
      getPanels,
      panelDirectives,
      goToPanel,
      keepAliveProps,
      needsUniqueKeepAliveWrapper
    } = usePanel();
    provide(stepperKey, computed(() => ({
      goToPanel,
      keepAliveProps,
      needsUniqueKeepAliveWrapper,
      ...props
    })));
    const classes = computed(
      () => `q-stepper q-stepper--${props.vertical === true ? "vertical" : "horizontal"}` + (props.flat === true ? " q-stepper--flat" : "") + (props.bordered === true ? " q-stepper--bordered" : "") + (isDark.value === true ? " q-stepper--dark q-dark" : "")
    );
    const headerClasses = computed(
      () => `q-stepper__header row items-stretch justify-between q-stepper__header--${props.alternativeLabels === true ? "alternative" : "standard"}-labels` + (props.flat === false || props.bordered === true ? " q-stepper__header--border" : "") + (props.contracted === true ? " q-stepper__header--contracted" : "") + (props.headerClass !== void 0 ? ` ${props.headerClass}` : "")
    );
    function getContent() {
      const top = hSlot(slots.message, []);
      if (props.vertical === true) {
        isValidPanelName(props.modelValue) && updatePanelIndex();
        const content = h("div", {
          class: "q-stepper__content"
        }, hSlot(slots.default));
        return top === void 0 ? [content] : top.concat(content);
      }
      return [
        h(
          "div",
          { class: headerClasses.value },
          getPanels().map((panel) => {
            const step = camelizeProps(panel.props);
            return h(StepHeader, {
              key: step.name,
              stepper: props,
              step,
              goToPanel
            });
          })
        ),
        top,
        hDir(
          "div",
          { class: "q-stepper__content q-panel-parent" },
          getPanelContent(),
          "cont",
          props.swipeable,
          () => panelDirectives.value
        )
      ];
    }
    return () => {
      updatePanelsList(slots);
      return h("div", {
        class: classes.value
      }, hMergeSlot(slots.navigation, getContent()));
    };
  }
});
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = {
  key: 0,
  class: "text-grey"
};
const _hoisted_3$1 = { key: 3 };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-caption" }, "Accepted file types: jpg, gif, png, pdf, Max. file size: 5 MB, Max. files: 2.", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TmpAttachments",
  props: {
    type: null,
    documents: null
  },
  emits: ["attachment:add", "attachment:remove"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const tmpUploader = ref();
    const needsExpiry = ["Certificate of Currency for Public Liability Insurance", "NDIS Workers Clearance Certificate"];
    const schema = {
      type: props.type,
      file_file_name: null,
      name: null,
      expiry_date: null
    };
    const attachments = computed(() => {
      return props.documents.filter((o) => o.type === props.type) || [];
    });
    const newModel = reactive(schema);
    const addNew = () => {
      emits("attachment:add", { name: newModel.name, file_file_name: newModel.file_file_name, type: props.type, expiry_date: newModel.expiry_date });
      tmpUploader.value.reset();
    };
    const removeAttachment = (a) => {
      confirmDelete("This will remove the attachment").onOk(() => {
        emits("attachment:remove", { name: a.name, file_file_name: a.file_file_name, type: a.type });
      });
    };
    const splitName = (val) => {
      return val.split("-")[1];
    };
    const successUpload = (file) => {
      newModel.file_file_name = file.xhr.response;
      newModel.name = file.xhr.response;
      addNew();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        needsExpiry.indexOf(__props.type) !== -1 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          createVNode(_sfc_main$2, {
            modelValue: newModel.expiry_date,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newModel.expiry_date = $event),
            label: "Expiry Date",
            class: "q-mb-md q-mt-sm",
            invalid: __props.type === "Certificate of Currency for Public Liability Insurance" && !newModel.expiry_date
          }, null, 8, ["modelValue", "invalid"])
        ])) : createCommentVNode("", true),
        !unref(attachments) || !unref(attachments).length ? (openBlock(), createBlock(QList, {
          key: 1,
          separator: "",
          bordered: ""
        }, {
          default: withCtx(() => [
            createVNode(QItem, null, {
              default: withCtx(() => [
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createTextVNode("No documents uploaded")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        unref(attachments) && unref(attachments).length ? (openBlock(), createBlock(QList, {
          key: 2,
          bordered: "",
          separator: ""
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(attachments), (a, index) => {
              return openBlock(), createBlock(QItem, { key: index }, {
                default: withCtx(() => [
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(splitName(a.name)) + " ", 1),
                      a.expiry_date ? (openBlock(), createElementBlock("span", _hoisted_2$1, "Expires: " + toDisplayString(a.expiry_date), 1)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QItemSection, { side: "" }, {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        icon: "delete",
                        onClick: ($event) => removeAttachment(a),
                        flat: ""
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        })) : createCommentVNode("", true),
        needsExpiry.indexOf(__props.type) === -1 || newModel.expiry_date ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          createVNode(QUploader, {
            color: "primary",
            url: unref(uploadConfig).url,
            headers: unref(uploadConfig).headers,
            onUploaded: successUpload,
            label: "Upload document",
            "auto-expand": "",
            "auto-upload": "",
            accept: unref(uploadConfig).documents,
            "field-name": unref(uploadConfig).fieldName,
            class: "q-mb-sm q-mt-sm",
            ref_key: "tmpUploader",
            ref: tmpUploader,
            "max-file-size": unref(uploadConfig)["max-file-size"]
          }, null, 8, ["url", "headers", "accept", "field-name", "max-file-size"]),
          _hoisted_4$1
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
/*!
 * Signature Pad v3.0.0-beta.4 | https://github.com/szimek/signature_pad
 * (c) 2020 Szymon Nowak | Released under the MIT license
 */
class Point {
  constructor(x, y, time) {
    this.x = x;
    this.y = y;
    this.time = time || Date.now();
  }
  distanceTo(start) {
    return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
  }
  equals(other) {
    return this.x === other.x && this.y === other.y && this.time === other.time;
  }
  velocityFrom(start) {
    return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 0;
  }
}
class Bezier {
  constructor(startPoint, control2, control1, endPoint, startWidth, endWidth) {
    this.startPoint = startPoint;
    this.control2 = control2;
    this.control1 = control1;
    this.endPoint = endPoint;
    this.startWidth = startWidth;
    this.endWidth = endWidth;
  }
  static fromPoints(points, widths) {
    const c2 = this.calculateControlPoints(points[0], points[1], points[2]).c2;
    const c3 = this.calculateControlPoints(points[1], points[2], points[3]).c1;
    return new Bezier(points[1], c2, c3, points[2], widths.start, widths.end);
  }
  static calculateControlPoints(s1, s2, s3) {
    const dx1 = s1.x - s2.x;
    const dy1 = s1.y - s2.y;
    const dx2 = s2.x - s3.x;
    const dy2 = s2.y - s3.y;
    const m1 = { x: (s1.x + s2.x) / 2, y: (s1.y + s2.y) / 2 };
    const m2 = { x: (s2.x + s3.x) / 2, y: (s2.y + s3.y) / 2 };
    const l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
    const l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
    const dxm = m1.x - m2.x;
    const dym = m1.y - m2.y;
    const k = l2 / (l1 + l2);
    const cm = { x: m2.x + dxm * k, y: m2.y + dym * k };
    const tx = s2.x - cm.x;
    const ty = s2.y - cm.y;
    return {
      c1: new Point(m1.x + tx, m1.y + ty),
      c2: new Point(m2.x + tx, m2.y + ty)
    };
  }
  length() {
    const steps = 10;
    let length = 0;
    let px;
    let py;
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      const cx = this.point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
      const cy = this.point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
      if (i > 0) {
        const xdiff = cx - px;
        const ydiff = cy - py;
        length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
      }
      px = cx;
      py = cy;
    }
    return length;
  }
  point(t, start, c1, c2, end) {
    return start * (1 - t) * (1 - t) * (1 - t) + 3 * c1 * (1 - t) * (1 - t) * t + 3 * c2 * (1 - t) * t * t + end * t * t * t;
  }
}
function throttle(fn, wait = 250) {
  let previous = 0;
  let timeout = null;
  let result;
  let storedContext;
  let storedArgs;
  const later = () => {
    previous = Date.now();
    timeout = null;
    result = fn.apply(storedContext, storedArgs);
    if (!timeout) {
      storedContext = null;
      storedArgs = [];
    }
  };
  return function wrapper(...args) {
    const now = Date.now();
    const remaining = wait - (now - previous);
    storedContext = this;
    storedArgs = args;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = fn.apply(storedContext, storedArgs);
      if (!timeout) {
        storedContext = null;
        storedArgs = [];
      }
    } else if (!timeout) {
      timeout = window.setTimeout(later, remaining);
    }
    return result;
  };
}
class SignaturePad {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.options = options;
    this._handleMouseDown = (event) => {
      if (event.which === 1) {
        this._mouseButtonDown = true;
        this._strokeBegin(event);
      }
    };
    this._handleMouseMove = (event) => {
      if (this._mouseButtonDown) {
        this._strokeMoveUpdate(event);
      }
    };
    this._handleMouseUp = (event) => {
      if (event.which === 1 && this._mouseButtonDown) {
        this._mouseButtonDown = false;
        this._strokeEnd(event);
      }
    };
    this._handleTouchStart = (event) => {
      event.preventDefault();
      if (event.targetTouches.length === 1) {
        const touch = event.changedTouches[0];
        this._strokeBegin(touch);
      }
    };
    this._handleTouchMove = (event) => {
      event.preventDefault();
      const touch = event.targetTouches[0];
      this._strokeMoveUpdate(touch);
    };
    this._handleTouchEnd = (event) => {
      const wasCanvasTouched = event.target === this.canvas;
      if (wasCanvasTouched) {
        event.preventDefault();
        const touch = event.changedTouches[0];
        this._strokeEnd(touch);
      }
    };
    this.velocityFilterWeight = options.velocityFilterWeight || 0.7;
    this.minWidth = options.minWidth || 0.5;
    this.maxWidth = options.maxWidth || 2.5;
    this.throttle = "throttle" in options ? options.throttle : 16;
    this.minDistance = "minDistance" in options ? options.minDistance : 5;
    this.dotSize = options.dotSize || function dotSize() {
      return (this.minWidth + this.maxWidth) / 2;
    };
    this.penColor = options.penColor || "black";
    this.backgroundColor = options.backgroundColor || "rgba(0,0,0,0)";
    this.onBegin = options.onBegin;
    this.onEnd = options.onEnd;
    this._strokeMoveUpdate = this.throttle ? throttle(SignaturePad.prototype._strokeUpdate, this.throttle) : SignaturePad.prototype._strokeUpdate;
    this._ctx = canvas.getContext("2d");
    this.clear();
    this.on();
  }
  clear() {
    const { _ctx: ctx, canvas } = this;
    ctx.fillStyle = this.backgroundColor;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this._data = [];
    this._reset();
    this._isEmpty = true;
  }
  fromDataURL(dataUrl, options = {}, callback) {
    const image = new Image();
    const ratio = options.ratio || window.devicePixelRatio || 1;
    const width = options.width || this.canvas.width / ratio;
    const height = options.height || this.canvas.height / ratio;
    this._reset();
    image.onload = () => {
      this._ctx.drawImage(image, 0, 0, width, height);
      if (callback) {
        callback();
      }
    };
    image.onerror = (error) => {
      if (callback) {
        callback(error);
      }
    };
    image.src = dataUrl;
    this._isEmpty = false;
  }
  toDataURL(type = "image/png", encoderOptions) {
    switch (type) {
      case "image/svg+xml":
        return this._toSVG();
      default:
        return this.canvas.toDataURL(type, encoderOptions);
    }
  }
  on() {
    this.canvas.style.touchAction = "none";
    this.canvas.style.msTouchAction = "none";
    if (window.PointerEvent) {
      this._handlePointerEvents();
    } else {
      this._handleMouseEvents();
      if ("ontouchstart" in window) {
        this._handleTouchEvents();
      }
    }
  }
  off() {
    this.canvas.style.touchAction = "auto";
    this.canvas.style.msTouchAction = "auto";
    this.canvas.removeEventListener("pointerdown", this._handleMouseDown);
    this.canvas.removeEventListener("pointermove", this._handleMouseMove);
    document.removeEventListener("pointerup", this._handleMouseUp);
    this.canvas.removeEventListener("mousedown", this._handleMouseDown);
    this.canvas.removeEventListener("mousemove", this._handleMouseMove);
    document.removeEventListener("mouseup", this._handleMouseUp);
    this.canvas.removeEventListener("touchstart", this._handleTouchStart);
    this.canvas.removeEventListener("touchmove", this._handleTouchMove);
    this.canvas.removeEventListener("touchend", this._handleTouchEnd);
  }
  isEmpty() {
    return this._isEmpty;
  }
  fromData(pointGroups) {
    this.clear();
    this._fromData(pointGroups, ({ color, curve }) => this._drawCurve({ color, curve }), ({ color, point }) => this._drawDot({ color, point }));
    this._data = pointGroups;
  }
  toData() {
    return this._data;
  }
  _strokeBegin(event) {
    const newPointGroup = {
      color: this.penColor,
      points: []
    };
    if (typeof this.onBegin === "function") {
      this.onBegin(event);
    }
    this._data.push(newPointGroup);
    this._reset();
    this._strokeUpdate(event);
  }
  _strokeUpdate(event) {
    if (this._data.length === 0) {
      this._strokeBegin(event);
      return;
    }
    const x = event.clientX;
    const y = event.clientY;
    const point = this._createPoint(x, y);
    const lastPointGroup = this._data[this._data.length - 1];
    const lastPoints = lastPointGroup.points;
    const lastPoint = lastPoints.length > 0 && lastPoints[lastPoints.length - 1];
    const isLastPointTooClose = lastPoint ? point.distanceTo(lastPoint) <= this.minDistance : false;
    const color = lastPointGroup.color;
    if (!lastPoint || !(lastPoint && isLastPointTooClose)) {
      const curve = this._addPoint(point);
      if (!lastPoint) {
        this._drawDot({ color, point });
      } else if (curve) {
        this._drawCurve({ color, curve });
      }
      lastPoints.push({
        time: point.time,
        x: point.x,
        y: point.y
      });
    }
  }
  _strokeEnd(event) {
    this._strokeUpdate(event);
    if (typeof this.onEnd === "function") {
      this.onEnd(event);
    }
  }
  _handlePointerEvents() {
    this._mouseButtonDown = false;
    this.canvas.addEventListener("pointerdown", this._handleMouseDown);
    this.canvas.addEventListener("pointermove", this._handleMouseMove);
    document.addEventListener("pointerup", this._handleMouseUp);
  }
  _handleMouseEvents() {
    this._mouseButtonDown = false;
    this.canvas.addEventListener("mousedown", this._handleMouseDown);
    this.canvas.addEventListener("mousemove", this._handleMouseMove);
    document.addEventListener("mouseup", this._handleMouseUp);
  }
  _handleTouchEvents() {
    this.canvas.addEventListener("touchstart", this._handleTouchStart);
    this.canvas.addEventListener("touchmove", this._handleTouchMove);
    this.canvas.addEventListener("touchend", this._handleTouchEnd);
  }
  _reset() {
    this._lastPoints = [];
    this._lastVelocity = 0;
    this._lastWidth = (this.minWidth + this.maxWidth) / 2;
    this._ctx.fillStyle = this.penColor;
  }
  _createPoint(x, y) {
    const rect = this.canvas.getBoundingClientRect();
    return new Point(x - rect.left, y - rect.top, new Date().getTime());
  }
  _addPoint(point) {
    const { _lastPoints } = this;
    _lastPoints.push(point);
    if (_lastPoints.length > 2) {
      if (_lastPoints.length === 3) {
        _lastPoints.unshift(_lastPoints[0]);
      }
      const widths = this._calculateCurveWidths(_lastPoints[1], _lastPoints[2]);
      const curve = Bezier.fromPoints(_lastPoints, widths);
      _lastPoints.shift();
      return curve;
    }
    return null;
  }
  _calculateCurveWidths(startPoint, endPoint) {
    const velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;
    const newWidth = this._strokeWidth(velocity);
    const widths = {
      end: newWidth,
      start: this._lastWidth
    };
    this._lastVelocity = velocity;
    this._lastWidth = newWidth;
    return widths;
  }
  _strokeWidth(velocity) {
    return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
  }
  _drawCurveSegment(x, y, width) {
    const ctx = this._ctx;
    ctx.moveTo(x, y);
    ctx.arc(x, y, width, 0, 2 * Math.PI, false);
    this._isEmpty = false;
  }
  _drawCurve({ color, curve }) {
    const ctx = this._ctx;
    const widthDelta = curve.endWidth - curve.startWidth;
    const drawSteps = Math.floor(curve.length()) * 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    for (let i = 0; i < drawSteps; i += 1) {
      const t = i / drawSteps;
      const tt = t * t;
      const ttt = tt * t;
      const u = 1 - t;
      const uu = u * u;
      const uuu = uu * u;
      let x = uuu * curve.startPoint.x;
      x += 3 * uu * t * curve.control1.x;
      x += 3 * u * tt * curve.control2.x;
      x += ttt * curve.endPoint.x;
      let y = uuu * curve.startPoint.y;
      y += 3 * uu * t * curve.control1.y;
      y += 3 * u * tt * curve.control2.y;
      y += ttt * curve.endPoint.y;
      const width = Math.min(curve.startWidth + ttt * widthDelta, this.maxWidth);
      this._drawCurveSegment(x, y, width);
    }
    ctx.closePath();
    ctx.fill();
  }
  _drawDot({ color, point }) {
    const ctx = this._ctx;
    const width = typeof this.dotSize === "function" ? this.dotSize() : this.dotSize;
    ctx.beginPath();
    this._drawCurveSegment(point.x, point.y, width);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
  _fromData(pointGroups, drawCurve, drawDot) {
    for (const group of pointGroups) {
      const { color, points } = group;
      if (points.length > 1) {
        for (let j = 0; j < points.length; j += 1) {
          const basicPoint = points[j];
          const point = new Point(basicPoint.x, basicPoint.y, basicPoint.time);
          this.penColor = color;
          if (j === 0) {
            this._reset();
          }
          const curve = this._addPoint(point);
          if (curve) {
            drawCurve({ color, curve });
          }
        }
      } else {
        this._reset();
        drawDot({
          color,
          point: points[0]
        });
      }
    }
  }
  _toSVG() {
    const pointGroups = this._data;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const minX = 0;
    const minY = 0;
    const maxX = this.canvas.width / ratio;
    const maxY = this.canvas.height / ratio;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", this.canvas.width.toString());
    svg.setAttribute("height", this.canvas.height.toString());
    this._fromData(pointGroups, ({ color, curve }) => {
      const path = document.createElement("path");
      if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
        const attr = `M ${curve.startPoint.x.toFixed(3)},${curve.startPoint.y.toFixed(3)} C ${curve.control1.x.toFixed(3)},${curve.control1.y.toFixed(3)} ${curve.control2.x.toFixed(3)},${curve.control2.y.toFixed(3)} ${curve.endPoint.x.toFixed(3)},${curve.endPoint.y.toFixed(3)}`;
        path.setAttribute("d", attr);
        path.setAttribute("stroke-width", (curve.endWidth * 2.25).toFixed(3));
        path.setAttribute("stroke", color);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke-linecap", "round");
        svg.appendChild(path);
      }
    }, ({ color, point }) => {
      const circle = document.createElement("circle");
      const dotSize = typeof this.dotSize === "function" ? this.dotSize() : this.dotSize;
      circle.setAttribute("r", dotSize.toString());
      circle.setAttribute("cx", point.x.toString());
      circle.setAttribute("cy", point.y.toString());
      circle.setAttribute("fill", color);
      svg.appendChild(circle);
    });
    const prefix = "data:image/svg+xml;base64,";
    const header = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="${minX} ${minY} ${maxX} ${maxY}" width="${maxX}" height="${maxY}">`;
    let body = svg.innerHTML;
    if (body === void 0) {
      const dummy = document.createElement("dummy");
      const nodes = svg.childNodes;
      dummy.innerHTML = "";
      for (let i = 0; i < nodes.length; i += 1) {
        dummy.appendChild(nodes[i].cloneNode(true));
      }
      body = dummy.innerHTML;
    }
    const footer = "</svg>";
    const data = header + body + footer;
    return prefix + btoa(data);
  }
}
var defaultOptions = {
  format: "image/png",
  quality: 0.92,
  width: void 0,
  height: void 0,
  Canvas: void 0,
  crossOrigin: void 0
};
var mergeImages = function(sources, options) {
  if (sources === void 0)
    sources = [];
  if (options === void 0)
    options = {};
  return new Promise(function(resolve) {
    options = Object.assign({}, defaultOptions, options);
    var canvas = options.Canvas ? new options.Canvas() : window.document.createElement("canvas");
    var Image2 = options.Canvas ? options.Canvas.Image : window.Image;
    if (options.Canvas) {
      options.quality *= 100;
    }
    var images = sources.map(function(source) {
      return new Promise(function(resolve2, reject) {
        if (source.constructor.name !== "Object") {
          source = { src: source };
        }
        var img = new Image2();
        img.crossOrigin = options.crossOrigin;
        img.onerror = function() {
          return reject(new Error("Couldn't load image"));
        };
        img.onload = function() {
          return resolve2(Object.assign({}, source, { img }));
        };
        img.src = source.src;
      });
    });
    var ctx = canvas.getContext("2d");
    resolve(Promise.all(images).then(function(images2) {
      var getSize = function(dim) {
        return options[dim] || Math.max.apply(Math, images2.map(function(image) {
          return image.img[dim];
        }));
      };
      canvas.width = getSize("width");
      canvas.height = getSize("height");
      images2.forEach(function(image) {
        ctx.globalAlpha = image.opacity ? image.opacity : 1;
        return ctx.drawImage(image.img, image.x || 0, image.y || 0);
      });
      if (options.Canvas && options.format === "image/jpeg") {
        return new Promise(function(resolve2) {
          canvas.toDataURL(options.format, {
            quality: options.quality,
            progressive: false
          }, function(err, jpeg) {
            if (err) {
              throw err;
            }
            resolve2(jpeg);
          });
        });
      }
      return canvas.toDataURL(options.format, options.quality);
    }));
  });
};
const IMAGE_TYPES = ["image/png", "image/jpeg", "image/svg+xml"];
const checkSaveType = (type) => IMAGE_TYPES.includes(type);
const DEFAULT_OPTIONS = {
  dotSize: (0.5 + 2.5) / 2,
  minWidth: 0.5,
  maxWidth: 2.5,
  throttle: 16,
  minDistance: 5,
  backgroundColor: "rgba(0,0,0,0)",
  penColor: "black",
  velocityFilterWeight: 0.7,
  onBegin: () => {
  },
  onEnd: () => {
  }
};
const convert2NonReactive = (observerValue) => JSON.parse(JSON.stringify(observerValue));
const TRANSPARENT_PNG = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  x: 0,
  y: 0
};
var script = defineComponent({
  name: "VueSignaturePad",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    customStyle: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Object,
      default: () => ({})
    },
    images: {
      type: Array,
      default: () => []
    },
    scaleToDevicePixelRatio: {
      type: Boolean,
      default: () => true
    }
  },
  data: () => ({
    signaturePad: {},
    cacheImages: [],
    signatureData: TRANSPARENT_PNG,
    onResizeHandler: null
  }),
  computed: {
    propsImagesAndCustomImages() {
      const nonReactiveProrpImages = convert2NonReactive(this.images);
      const nonReactiveCachImages = convert2NonReactive(this.cacheImages);
      return [...nonReactiveProrpImages, ...nonReactiveCachImages];
    }
  },
  watch: {
    options: function(nextOptions) {
      Object.keys(nextOptions).forEach((option) => {
        if (this.signaturePad[option]) {
          this.signaturePad[option] = nextOptions[option];
        }
      });
    }
  },
  mounted() {
    const {
      options
    } = this;
    const canvas = this.$refs.signaturePadCanvas;
    const signaturePad = new SignaturePad(canvas, {
      ...DEFAULT_OPTIONS,
      ...options
    });
    this.signaturePad = signaturePad;
    if (options.resizeHandler) {
      this.resizeCanvas = options.resizeHandler.bind(this);
    }
    this.onResizeHandler = this.resizeCanvas.bind(this);
    window.addEventListener("resize", this.onResizeHandler, false);
    this.resizeCanvas();
  },
  beforeUnmount() {
    if (this.onResizeHandler) {
      window.removeEventListener("resize", this.onResizeHandler, false);
    }
  },
  methods: {
    resizeCanvas() {
      const canvas = this.$refs.signaturePadCanvas;
      const data = this.signaturePad.toData();
      const ratio = this.scaleToDevicePixelRatio ? Math.max(window.devicePixelRatio || 1, 1) : 1;
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);
      this.signaturePad.clear();
      this.signatureData = TRANSPARENT_PNG;
      this.signaturePad.fromData(data);
    },
    saveSignature() {
      let type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : IMAGE_TYPES[0];
      let encoderOptions = arguments.length > 1 ? arguments[1] : void 0;
      const {
        signaturePad
      } = this;
      const status = {
        isEmpty: false,
        data: void 0
      };
      if (!checkSaveType(type)) {
        const imageTypesString = IMAGE_TYPES.join(", ");
        throw new Error(`The Image type is incorrect! We are support ${imageTypesString} types.`);
      }
      if (signaturePad.isEmpty()) {
        return {
          ...status,
          isEmpty: true
        };
      } else {
        this.signatureData = signaturePad.toDataURL(type, encoderOptions);
        return {
          ...status,
          data: this.signatureData
        };
      }
    },
    undoSignature() {
      const {
        signaturePad
      } = this;
      const record = signaturePad.toData();
      if (record) {
        return signaturePad.fromData(record.slice(0, -1));
      }
    },
    mergeImageAndSignature(customSignature) {
      this.signatureData = customSignature;
      return mergeImages([...this.images, ...this.cacheImages, this.signatureData]);
    },
    addImages() {
      let images = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      this.cacheImages = [...this.cacheImages, ...images];
      return mergeImages([...this.images, ...this.cacheImages, this.signatureData]);
    },
    fromDataURL(data) {
      let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      let callback = arguments.length > 2 ? arguments[2] : void 0;
      return this.signaturePad.fromDataURL(data, options, callback);
    },
    fromData(data) {
      return this.signaturePad.fromData(data);
    },
    toData() {
      return this.signaturePad.toData();
    },
    lockSignaturePad() {
      return this.signaturePad.off();
    },
    openSignaturePad() {
      return this.signaturePad.on();
    },
    isEmpty() {
      return this.signaturePad.isEmpty();
    },
    getPropImagesAndCacheImages() {
      return this.propsImagesAndCustomImages;
    },
    clearCacheImages() {
      this.cacheImages = [];
      return this.cacheImages;
    },
    clearSignature() {
      return this.signaturePad.clear();
    }
  },
  render() {
    const {
      width,
      height,
      customStyle
    } = this;
    return h("div", {
      style: {
        width,
        height,
        ...customStyle
      }
    }, [h("canvas", {
      style: {
        width,
        height
      },
      ref: "signaturePadCanvas"
    })]);
  }
});
script.__file = "src/components/VueSignaturePad.vue";
const _hoisted_1 = { class: "col-xs-12 col-sm-10 col-md-5" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Thanks for your interest in joining The Laundry Lady.", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Please check your email for the next steps.", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, "The Laundry Lady Team", -1);
const _hoisted_5 = { key: 1 };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Contractor Application Form", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", null, "Please complete form below to proceed to the next steps.", -1);
const _hoisted_8 = { class: "row q-col-gutter-md q-mt-sm" };
const _hoisted_9 = { class: "col-xs-12 col-sm-6" };
const _hoisted_10 = { class: "col-xs-12 col-sm-6" };
const _hoisted_11 = { class: "row q-col-gutter-md q-mt-sm" };
const _hoisted_12 = { class: "col-xs-12 col-sm-6" };
const _hoisted_13 = { class: "col-xs-12 col-sm-6" };
const _hoisted_14 = { class: "row q-col-gutter-md" };
const _hoisted_15 = { class: "col-xs-12 col-sm-6" };
const _hoisted_16 = { class: "col-xs-12 col-sm-6" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", null, "Please enter your current home / business address", -1);
const _hoisted_18 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("p", { class: "q-mt-sm" }, "Please ensure if these change in future you let us know", -1);
const _hoisted_20 = { class: "row q-col-gutter-md" };
const _hoisted_21 = { class: "col-xs-12 col-sm-6" };
const _hoisted_22 = { class: "col-xs-12 col-sm-6" };
const _hoisted_23 = { class: "row q-col-gutter-md" };
const _hoisted_24 = { class: "col-xs-12 col-sm-6" };
const _hoisted_25 = { class: "col-xs-12 col-sm-6" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("p", { class: "q-mt-sm" }, "Please include contact details of 2 referees. These can be personal or work referees. By including their details you agree to us contacting them for a reference check. Your formal offer will not be made until we have completed a satisfactory reference check.", -1);
const _hoisted_27 = { class: "row q-col-gutter-md" };
const _hoisted_28 = { class: "col-xs-12 col-sm-6" };
const _hoisted_29 = { class: "col-xs-12 col-sm-6" };
const _hoisted_30 = { class: "row q-col-gutter-md" };
const _hoisted_31 = { class: "col-xs-12 col-sm-6" };
const _hoisted_32 = { class: "col-xs-12 col-sm-6" };
const _hoisted_33 = { class: "row q-col-gutter-md" };
const _hoisted_34 = { class: "col-xs-12 col-sm-6" };
const _hoisted_35 = { class: "col-xs-12 col-sm-6" };
const _hoisted_36 = { class: "row q-col-gutter-md" };
const _hoisted_37 = { class: "col-xs-12 col-sm-6" };
const _hoisted_38 = { class: "col-xs-12 col-sm-6" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("p", { class: "q-mt-sm" }, [
  /* @__PURE__ */ createTextVNode("If you do not have an ABN, you can register at: "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://www.abr.gov.au/",
    target: "_blank",
    class: "link"
  }, "Australian Government Australian Business Register")
], -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Are you registered for GST?", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("If you are unsure if you need to register for GST talk to your accountant or check out the ATO site for more information. If your GST status changes while you are working with The Laundry Lady please let us know immediately. "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://www.ato.gov.au/Business/GST/Registering-for-GST/",
    target: "_blank",
    class: "link"
  }, "Click here for ATO Registering for GST")
], -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("p", { class: "q-mt-sm" }, "Commission will be paid to your nominated account. Please ensure this is completed or advised prior to any commission being due.", -1);
const _hoisted_43 = { class: "row q-col-gutter-md" };
const _hoisted_44 = { class: "col-xs-12 col-sm-6" };
const _hoisted_45 = { class: "col-xs-12 col-sm-6" };
const _hoisted_46 = { class: "row q-col-gutter-md" };
const _hoisted_47 = { class: "col-xs-12 col-sm-6" };
const _hoisted_48 = { class: "col-xs-12 col-sm-6" };
const _hoisted_49 = { class: "q-mt-sm" };
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("p", null, "Please upload copies of the following documents.", -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-xs" }, "Copy of current Drivers Licence (front and back)", -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-xs q-mt-md" }, "Copy of current Medicare Card", -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-xs q-mt-md" }, "Copy of Certificate of Currency for Public Liability Insuranced ", -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("p", null, "You must have public liability insurance to the coverage of $5million and maintain a current certificate of insurance at all times while carrying out services for the Laundry Lady. The certificate should name all applicants including any family members who may help you with deliveries from time to time. You will need to send us an updated certificate of insurance every year. We have a partnership with Bizcover to offer you the best rates through our group buying power, and make it easier for us to track your certificate of currency. To apply for your Bizcover Public Liability Insurance under the Laundry Lady partnership go to:", -1);
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-xs q-mt-md" }, "NDIS Workers Clearance Certificate", -1);
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("p", null, "Please upload your NDIS Workers Clearance Certificate or email confirmation of your application (save your screenshot as one of the allowed file extensions). See below for instructions on how to obtain your NDIS Workers Clearance. Use appropriate state/territory link (listed below) for your location.", -1);
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://www.qld.gov.au/law/laws-regulated-industries-and-accountability/queensland-laws-and-regulations/regulated-industries-and-licensing/blue-card/applications/combined-disability-worker-screening",
    class: "link",
    target: "_blank"
  }, "Queensland"),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://www.service.vic.gov.au/services/national-disability-insurance-scheme?utm_source=vic_gov_au_website&utm_medium=referral&utm_campaign=ndis_worker_screening_check&utm_content=online_application",
    target: "_blank",
    class: "link q-ml-sm"
  }, "Victoria"),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://screening.sa.gov.au/types-of-check/ndis-worker-checks",
    target: "_blank",
    class: "link q-ml-sm"
  }, "South Australia"),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://www.myaccount.act.gov.au/WWVPNDIS/s/wwvp-ndis-new-application-v2",
    target: "_blank",
    class: "link q-ml-sm"
  }, "ACT"),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://online.transport.wa.gov.au/tso/selfservice/public/ndis_wsu_apply_entry.jsf#/embd/preliminary-questions",
    target: "_blank",
    class: "link q-ml-sm"
  }, "Western Australia")
], -1);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("p", { class: "q-mt-sm" }, "You will need the Laundry Lady employer ID below to complete your application. Laundry Lady details - to use in online application: When completing the application online, please nominate The Laundry Lady Pty Ltd as your employer. Employer ID details are as below. Employer name: The Laundry Lady Pty Ltd Employer ID: 4-GUCBSYQ", -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-xs q-mt-md" }, "Photo of yourself", -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("p", null, "Upload a head and shoulders photo of yourself in front of a white background. We will use this on your public profile on our website that customers will see when booking. If you are a team (eg husband and wife) please provide a photo of both of you together in front of a white background.", -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("p", { class: "text-caption" }, "Accepted file types: jpg, gif, png, pdf, Max. file size: 5 MB", -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold q-mb-sm q-mt-sm" }, "Your Equipment", -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold q-mb-sm" }, "Please check the following", -1);
const _hoisted_64 = { class: "row q-col-gutter-md q-mt-sm" };
const _hoisted_65 = { class: "col-xs-12 col-sm-6" };
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Applicant One Signature", -1);
const _hoisted_67 = { style: { "border": "1px solid #efefef" } };
const _hoisted_68 = { class: "col-xs-12 col-sm-6" };
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Applicant Two Signature", -1);
const _hoisted_70 = { style: { "border": "1px solid #efefef" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ApplicationForm",
  setup(__props) {
    const $q = useQuasar();
    const route = useRoute();
    const loading = ref(false);
    const success = ref(false);
    const step = ref(1);
    const sig1Ref = ref();
    const sig2Ref = ref();
    const abnVerified = ref(false);
    const abnVerifyResult = ref();
    const model = reactive({
      first_name: null,
      last_name: null,
      first_name_2: null,
      last_name_2: null,
      contractor_badge_name: null,
      contractor_start_date: null,
      dateofbirth: null,
      address1: null,
      address2: null,
      suburb_postcode_region_id: null,
      country_id: 13,
      contractor_ec_first_name: null,
      contractor_ec_last_name: null,
      contractor_ec_phone: null,
      contractor_ec_relationship: null,
      contractor_ref_first_name: null,
      contractor_ref_last_name: null,
      contractor_ref_email: null,
      contractor_ref_phone: null,
      contractor_ref2_first_name: null,
      contractor_ref2_last_name: null,
      contractor_ref2_email: null,
      contractor_ref2_phone: null,
      contractor_abn: null,
      contractor_abn_verified: false,
      contractor_gst_registered: false,
      contractor_bd_name: null,
      contractor_bd_bank: null,
      contractor_bd_bsb: null,
      contractor_bd_number: null,
      contractor_clothing_rack: "No",
      contractor_smartphone_type: "No",
      contractor_computer_type: "No",
      contractor_ironing_steam_station: "No",
      contractor_washing_machine_dryer: "No",
      contractor_declaration_agreement: false,
      contractor_declaration_training: false,
      contractor_declaration_abn: false,
      contractor_declaration_pl: false,
      contractor_declaration_inform: false,
      contractor_declaration_kit: false,
      contractor_declaration_information: false,
      contractor_applicant_1_sig: null,
      contractor_applicant_2_sig: null,
      documents: [],
      avatar: null
    });
    const rules = {
      first_name: { required },
      last_name: { required },
      dateofbirth: { required },
      contractor_badge_name: { required },
      contractor_start_date: { required },
      address2: { required },
      suburb_postcode_region_id: { required },
      country_id: { required },
      contractor_ec_first_name: { required },
      contractor_ec_last_name: { required },
      contractor_ec_phone: { required },
      contractor_ec_relationship: { required },
      contractor_ref_first_name: { required },
      contractor_ref_last_name: { required },
      contractor_ref_email: { required, email },
      contractor_ref_phone: { required },
      contractor_ref2_first_name: { required },
      contractor_ref2_last_name: { required },
      contractor_ref2_email: { required, email },
      contractor_ref2_phone: { required },
      contractor_abn: { required },
      contractor_gst_registered: { required },
      contractor_bd_name: { required },
      contractor_bd_bank: { required },
      contractor_bd_bsb: { required },
      contractor_bd_number: { required },
      contractor_clothing_rack: { checked: sameAs("Yes") },
      contractor_smartphone_type: { checked: sameAs("Yes") },
      contractor_computer_type: { checked: sameAs("Yes") },
      contractor_ironing_steam_station: { checked: sameAs("Yes") },
      contractor_washing_machine_dryer: { checked: sameAs("Yes") },
      contractor_declaration_agreement: { checked: sameAs(true) },
      contractor_declaration_training: { checked: sameAs(true) },
      contractor_declaration_abn: { checked: sameAs(true) },
      contractor_declaration_pl: { checked: sameAs(true) },
      contractor_declaration_inform: { checked: sameAs(true) },
      contractor_declaration_kit: { checked: sameAs(true) },
      contractor_declaration_information: { checked: sameAs(true) },
      contractor_applicant_1_sig: { required },
      avatar: { required }
    };
    const $v = useVuelidate(rules, model, { $scope: false });
    const stepsValid = computed(() => {
      const valid = {
        step1: true,
        step2: true,
        step3: true,
        step4: true,
        step5: true,
        step6: true,
        step7: true,
        step8: true,
        step9: true
      };
      if (!model.first_name || !model.last_name || !model.contractor_badge_name || !model.contractor_start_date || !model.dateofbirth) {
        valid.step1 = false;
      }
      if (!model.address2 || !model.suburb_postcode_region_id) {
        valid.step2 = false;
      }
      if (!model.contractor_ec_first_name || !model.contractor_ec_last_name || !model.contractor_ec_phone || !model.contractor_ec_relationship) {
        valid.step3 = false;
      }
      if (!model.contractor_ref_first_name || !model.contractor_ref_last_name || !model.contractor_ref_email || !model.contractor_ref_phone) {
        valid.step4 = false;
      }
      if (!model.contractor_abn || !model.contractor_abn_verified) {
        valid.step5 = false;
      }
      if (!model.contractor_bd_name || !model.contractor_bd_bank || !model.contractor_bd_bsb || !model.contractor_bd_number) {
        valid.step6 = false;
      }
      const dl = model.documents.filter((o) => o.type === "Drivers Licence");
      if (dl.length < 2) {
        valid.step7 = false;
      }
      const mc = model.documents.filter((o) => o.type === "Medicare Card");
      if (!mc.length) {
        valid.step7 = false;
      }
      const pl = model.documents.filter((o) => o.type === "Certificate of Currency for Public Liability Insurance");
      if (!pl.length) {
        valid.step7 = false;
      }
      if (model.contractor_clothing_rack === "No" && model.contractor_smartphone_type === "No" && model.contractor_computer_type === "No" && model.contractor_ironing_steam_station === "No" && model.contractor_washing_machine_dryer === "No") {
        valid.step8 = false;
      }
      if (!model.contractor_declaration_agreement || !model.contractor_declaration_training || !model.contractor_declaration_abn || !model.contractor_declaration_pl || !model.contractor_declaration_inform || !model.contractor_declaration_kit || !model.contractor_declaration_information) {
        valid.step9 = false;
      }
      return valid;
    });
    const saveSig1 = () => {
      const { isEmpty, data } = sig1Ref.value.saveSignature();
      if (!isEmpty) {
        model.contractor_applicant_1_sig = data;
      }
    };
    const resetSig1 = () => {
      model.contractor_applicant_1_sig = null;
      sig1Ref.value.clearSignature();
    };
    const saveSig2 = () => {
      const { isEmpty, data } = sig2Ref.value.saveSignature();
      if (!isEmpty) {
        model.contractor_applicant_2_sig = data;
      }
    };
    const resetSig2 = () => {
      model.contractor_applicant_2_sig = null;
      sig2Ref.value.clearSignature();
    };
    const verifyAbn = () => {
      if (!model.contractor_abn) {
        abnVerified.value = false;
      }
      $q.loading.show({ message: "Verifying ABN with the ATO..." });
      api.post("/public/verifynest/verifyabn", { keyword: model.contractor_abn }).then((response) => {
        abnVerified.value = !response.data.data.Message;
        model.contractor_abn_verified = !response.data.data.Message;
        model.contractor_gst_registered = !!response.data.data.Gst;
        abnVerifyResult.value = response.data.data;
        $q.loading.hide();
      }).catch((error) => {
        $q.loading.hide();
        useMixinDebug(error);
      });
    };
    const update = () => {
      loading.value = true;
      success.value = false;
      $q.loading.show({ message: "Submitting application, please wait..." });
      api.put(`/public/user/contractor/onboarding/application/${route.params.id}`, model).then(() => {
        success.value = true;
        loading.value = false;
        $q.loading.hide();
      }).catch((error) => {
        loading.value = false;
        $q.loading.hide();
        useMixinDebug(error);
      });
    };
    const addDocument = (a) => {
      model.documents.push(a);
    };
    const removeDocument = (a) => {
      model.documents = model.documents.filter((o) => o.name !== a.name);
    };
    const successUpload = (file) => {
      model.avatar = file.xhr.response;
    };
    onMounted(() => {
      api.get(`/public/user/contractor/onboarding/application/${route.params.id}`).then((response) => {
        Object.assign(model, response.data);
      }).catch((error) => {
        useMixinDebug(error);
      });
    });
    return (_ctx, _cache) => {
      return model && model.first_name ? (openBlock(), createBlock(QLayout, {
        key: 0,
        view: "lHh Lpr lFf"
      }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                class: "row justify-center items-center animated fadeIn",
                padding: ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(_sfc_main$3),
                    success.value ? (openBlock(), createBlock(QCard, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(QCardSection, { class: "text-left" }, {
                          default: withCtx(() => [
                            _hoisted_2,
                            _hoisted_3,
                            _hoisted_4
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    !success.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                      _hoisted_6,
                      _hoisted_7,
                      !success.value ? (openBlock(), createBlock(QStepper, {
                        key: 0,
                        modelValue: step.value,
                        "onUpdate:modelValue": _cache[53] || (_cache[53] = ($event) => step.value = $event),
                        ref: "stepper",
                        color: "primary",
                        animated: "",
                        "header-nav": "",
                        vertical: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QStep, {
                            name: 1,
                            title: "Applicant Details",
                            icon: "account_circle",
                            prefix: "1",
                            error: !unref(stepsValid).step1,
                            done: unref(stepsValid).step1,
                            "done-color": "positive"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_8, [
                                createBaseVNode("div", _hoisted_9, [
                                  createVNode(QInput, {
                                    modelValue: model.first_name,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.first_name = $event),
                                    label: "Applicant One First Name",
                                    error: unref($v).first_name.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_10, [
                                  createVNode(QInput, {
                                    modelValue: model.last_name,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.last_name = $event),
                                    label: "Applicant One Last Name",
                                    error: unref($v).last_name.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ])
                              ]),
                              createVNode(_sfc_main$2, {
                                modelValue: model.dateofbirth,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.dateofbirth = $event),
                                invalid: unref($v).dateofbirth.$invalid,
                                label: "Date of Birth"
                              }, null, 8, ["modelValue", "invalid"]),
                              createBaseVNode("div", _hoisted_11, [
                                createBaseVNode("div", _hoisted_12, [
                                  createVNode(QInput, {
                                    modelValue: model.first_name_2,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.first_name_2 = $event),
                                    label: "Applicant Two First Name",
                                    "bottom-slots": ""
                                  }, null, 8, ["modelValue"])
                                ]),
                                createBaseVNode("div", _hoisted_13, [
                                  createVNode(QInput, {
                                    modelValue: model.last_name_2,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => model.last_name_2 = $event),
                                    label: "Applicant Two Last Name",
                                    "bottom-slots": ""
                                  }, null, 8, ["modelValue"])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_14, [
                                createBaseVNode("div", _hoisted_15, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_badge_name,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.contractor_badge_name = $event),
                                    label: "Preferred Name for Name Badge",
                                    error: unref($v).contractor_badge_name.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_16, [
                                  createVNode(_sfc_main$2, {
                                    modelValue: model.contractor_start_date,
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.contractor_start_date = $event),
                                    label: "Start Date",
                                    invalid: unref($v).contractor_start_date.$invalid
                                  }, null, 8, ["modelValue", "invalid"])
                                ])
                              ]),
                              createVNode(QBtn, {
                                onClick: _cache[7] || (_cache[7] = ($event) => step.value = 2),
                                label: "Next",
                                color: "primary",
                                class: "q-mt-lg",
                                rounded: ""
                              })
                            ]),
                            _: 1
                          }, 8, ["error", "done"]),
                          createVNode(QStep, {
                            name: 2,
                            title: "Your Address Details",
                            prefix: "2",
                            error: !unref(stepsValid).step2,
                            done: unref(stepsValid).step2,
                            "done-color": "positive"
                          }, {
                            default: withCtx(() => [
                              _hoisted_17,
                              createVNode(_sfc_main$4, {
                                model,
                                outlined: true,
                                addressfields: { address1: "address1", address2: "address2", suburb_postcode_region_id: "suburb_postcode_region_id", lat: "lat", lng: "lng", country_id: "country_id" },
                                placeholder: _ctx.$t("address.search")
                              }, null, 8, ["model", "placeholder"]),
                              createVNode(QInput, {
                                modelValue: model.address1,
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.address1 = $event),
                                label: _ctx.$t("address.line1"),
                                "bottom-slots": ""
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                modelValue: model.address2,
                                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.address2 = $event),
                                error: unref($v).address2.$invalid,
                                label: _ctx.$t("address.line2")
                              }, null, 8, ["modelValue", "error", "label"]),
                              createBaseVNode("div", _hoisted_18, [
                                createVNode(_sfc_main$5, {
                                  modelValue: model.suburb_postcode_region_id,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => model.suburb_postcode_region_id = $event),
                                  invalid: unref($v).suburb_postcode_region_id.$invalid,
                                  label: _ctx.$t("address.suburb"),
                                  class: "col-xs-12 col-sm-6"
                                }, null, 8, ["modelValue", "invalid", "label"]),
                                createVNode(_sfc_main$6, {
                                  modelValue: model.country_id,
                                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => model.country_id = $event),
                                  label: _ctx.$t("address.country"),
                                  invalid: unref($v).country_id.$invalid,
                                  class: "col-xs-12 col-sm-6"
                                }, null, 8, ["modelValue", "label", "invalid"])
                              ]),
                              createVNode(QBtn, {
                                onClick: _cache[12] || (_cache[12] = ($event) => step.value = 3),
                                label: "Next",
                                color: "primary",
                                class: "q-mt-lg",
                                rounded: ""
                              })
                            ]),
                            _: 1
                          }, 8, ["error", "done"]),
                          createVNode(QStep, {
                            name: 3,
                            title: "Emergency Contact Details",
                            prefix: "3",
                            error: !unref(stepsValid).step3,
                            done: unref(stepsValid).step3,
                            "done-color": "positive"
                          }, {
                            default: withCtx(() => [
                              _hoisted_19,
                              createBaseVNode("div", _hoisted_20, [
                                createBaseVNode("div", _hoisted_21, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_ec_first_name,
                                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => model.contractor_ec_first_name = $event),
                                    label: "Emergency Contact First Name",
                                    error: unref($v).contractor_ec_first_name.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_22, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_ec_last_name,
                                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => model.contractor_ec_last_name = $event),
                                    label: "Emergency Contact Last Name",
                                    error: unref($v).contractor_ec_last_name.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_23, [
                                createBaseVNode("div", _hoisted_24, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_ec_phone,
                                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => model.contractor_ec_phone = $event),
                                    label: "Emergency Contact Phone",
                                    error: unref($v).contractor_ec_phone.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_25, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_ec_relationship,
                                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => model.contractor_ec_relationship = $event),
                                    label: "Emergency Contact Relationship to you",
                                    error: unref($v).contractor_ec_relationship.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ])
                              ]),
                              createVNode(QBtn, {
                                onClick: _cache[17] || (_cache[17] = ($event) => step.value = 4),
                                label: "Next",
                                color: "primary",
                                class: "q-mt-lg",
                                rounded: ""
                              })
                            ]),
                            _: 1
                          }, 8, ["error", "done"]),
                          createVNode(QStep, {
                            name: 4,
                            title: "Your References",
                            prefix: "4",
                            error: !unref(stepsValid).step4,
                            done: unref(stepsValid).step4,
                            "done-color": "positive"
                          }, {
                            default: withCtx(() => [
                              _hoisted_26,
                              createBaseVNode("div", _hoisted_27, [
                                createBaseVNode("div", _hoisted_28, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_ref_first_name,
                                    "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => model.contractor_ref_first_name = $event),
                                    label: "Referee One First Name",
                                    error: unref($v).contractor_ref_first_name.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_29, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_ref_last_name,
                                    "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => model.contractor_ref_last_name = $event),
                                    label: "Referee One Last Name",
                                    error: unref($v).contractor_ref_last_name.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_30, [
                                createBaseVNode("div", _hoisted_31, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_ref_email,
                                    "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => model.contractor_ref_email = $event),
                                    label: "Referee One Email",
                                    error: unref($v).contractor_ref_email.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_32, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_ref_phone,
                                    "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => model.contractor_ref_phone = $event),
                                    label: "Referee One Phone",
                                    error: unref($v).contractor_ref_phone.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_33, [
                                createBaseVNode("div", _hoisted_34, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_ref2_first_name,
                                    "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => model.contractor_ref2_first_name = $event),
                                    label: "Referee Two First Name",
                                    error: unref($v).contractor_ref2_first_name.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_35, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_ref2_last_name,
                                    "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => model.contractor_ref2_last_name = $event),
                                    label: "Referee Two Last Name",
                                    error: unref($v).contractor_ref2_last_name.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_36, [
                                createBaseVNode("div", _hoisted_37, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_ref2_email,
                                    "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => model.contractor_ref2_email = $event),
                                    label: "Referee Two Email",
                                    error: unref($v).contractor_ref2_email.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_38, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_ref2_phone,
                                    "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => model.contractor_ref2_phone = $event),
                                    label: "Referee Two Phone",
                                    error: unref($v).contractor_ref2_phone.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ])
                              ]),
                              createVNode(QBtn, {
                                onClick: _cache[26] || (_cache[26] = ($event) => step.value = 5),
                                label: "Next",
                                color: "primary",
                                class: "q-mt-lg",
                                rounded: ""
                              })
                            ]),
                            _: 1
                          }, 8, ["error", "done"]),
                          createVNode(QStep, {
                            name: 5,
                            title: "Your business details",
                            prefix: "5",
                            error: !unref(stepsValid).step5,
                            done: unref(stepsValid).step5,
                            "done-color": "positive"
                          }, {
                            default: withCtx(() => [
                              _hoisted_39,
                              createVNode(QInput, {
                                modelValue: model.contractor_abn,
                                "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => model.contractor_abn = $event),
                                label: "ABN",
                                "bottom-slots": "",
                                error: unref($v).contractor_abn.$invalid,
                                type: "number"
                              }, {
                                append: withCtx(() => [
                                  model.contractor_abn_verified ? (openBlock(), createBlock(QIcon, {
                                    key: 0,
                                    name: "check",
                                    color: "positive"
                                  })) : createCommentVNode("", true),
                                  model.contractor_abn ? (openBlock(), createBlock(QBtn, {
                                    key: 1,
                                    onClick: _cache[27] || (_cache[27] = ($event) => verifyAbn()),
                                    label: "Verify",
                                    color: "primary",
                                    flat: "",
                                    rounded: ""
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "error"]),
                              _hoisted_40,
                              createVNode(QToggle, {
                                modelValue: model.contractor_gst_registered,
                                "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => model.contractor_gst_registered = $event),
                                label: "I am registered for GST",
                                class: "q-mt-sm q-mb-sm"
                              }, null, 8, ["modelValue"]),
                              _hoisted_41,
                              createVNode(QBtn, {
                                onClick: _cache[30] || (_cache[30] = ($event) => step.value = 6),
                                label: "Next",
                                color: "primary",
                                class: "q-mt-lg",
                                rounded: ""
                              })
                            ]),
                            _: 1
                          }, 8, ["error", "done"]),
                          createVNode(QStep, {
                            name: 6,
                            title: "Your Commission Payments",
                            prefix: "6",
                            error: !unref(stepsValid).step6,
                            done: unref(stepsValid).step6,
                            "done-color": "positive"
                          }, {
                            default: withCtx(() => [
                              _hoisted_42,
                              createBaseVNode("div", _hoisted_43, [
                                createBaseVNode("div", _hoisted_44, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_bd_name,
                                    "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => model.contractor_bd_name = $event),
                                    label: "Account Name",
                                    error: unref($v).contractor_bd_name.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_45, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_bd_bank,
                                    "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => model.contractor_bd_bank = $event),
                                    label: "Bank / Financial Institution",
                                    error: unref($v).contractor_bd_bank.$invalid
                                  }, null, 8, ["modelValue", "error"])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_46, [
                                createBaseVNode("div", _hoisted_47, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_bd_bsb,
                                    "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => model.contractor_bd_bsb = $event),
                                    label: "Branch / BSB Number",
                                    error: unref($v).contractor_bd_bsb.$invalid,
                                    type: "number"
                                  }, null, 8, ["modelValue", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_48, [
                                  createVNode(QInput, {
                                    modelValue: model.contractor_bd_number,
                                    "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => model.contractor_bd_number = $event),
                                    label: "Account Number",
                                    error: unref($v).contractor_bd_number.$invalid,
                                    type: "number"
                                  }, null, 8, ["modelValue", "error"])
                                ])
                              ]),
                              createVNode(QBtn, {
                                onClick: _cache[35] || (_cache[35] = ($event) => step.value = 7),
                                label: "Next",
                                color: "primary",
                                class: "q-mt-lg",
                                rounded: ""
                              })
                            ]),
                            _: 1
                          }, 8, ["error", "done"]),
                          createVNode(QStep, {
                            name: 7,
                            title: "Documents Upload",
                            prefix: "7",
                            error: !unref(stepsValid).step7,
                            done: unref(stepsValid).step7,
                            "done-color": "positive"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_49, [
                                _hoisted_50,
                                _hoisted_51,
                                createVNode(_sfc_main$1, {
                                  type: "Drivers Licence",
                                  documents: model.documents,
                                  "onAttachment:add": addDocument,
                                  "onAttachment:remove": removeDocument
                                }, null, 8, ["documents"]),
                                _hoisted_52,
                                createVNode(_sfc_main$1, {
                                  type: "Medicare Card",
                                  documents: model.documents,
                                  "onAttachment:add": addDocument,
                                  "onAttachment:remove": removeDocument
                                }, null, 8, ["documents"]),
                                _hoisted_53,
                                _hoisted_54,
                                createVNode(_sfc_main$1, {
                                  type: "Certificate of Currency for Public Liability Insurance",
                                  documents: model.documents,
                                  "onAttachment:add": addDocument,
                                  "onAttachment:remove": removeDocument
                                }, null, 8, ["documents"]),
                                _hoisted_55,
                                _hoisted_56,
                                _hoisted_57,
                                createVNode(_sfc_main$1, {
                                  type: "NDIS Workers Clearance Certificate",
                                  documents: model.documents,
                                  "onAttachment:add": addDocument,
                                  "onAttachment:remove": removeDocument
                                }, null, 8, ["documents"]),
                                _hoisted_58,
                                _hoisted_59,
                                _hoisted_60,
                                createVNode(QUploader, {
                                  color: "primary",
                                  url: unref(uploadConfig).url,
                                  headers: unref(uploadConfig).headers,
                                  onUploaded: successUpload,
                                  label: "Upload document",
                                  "auto-expand": "",
                                  "auto-upload": "",
                                  accept: unref(uploadConfig).documents,
                                  "field-name": unref(uploadConfig).fieldName,
                                  class: "q-mb-sm",
                                  ref: "tmpUploader",
                                  "max-file-size": unref(uploadConfig)["max-file-size"]
                                }, null, 8, ["url", "headers", "accept", "field-name", "max-file-size"]),
                                _hoisted_61
                              ]),
                              createVNode(QBtn, {
                                onClick: _cache[36] || (_cache[36] = ($event) => step.value = 8),
                                label: "Next",
                                color: "primary",
                                class: "q-mt-lg",
                                rounded: ""
                              })
                            ]),
                            _: 1
                          }, 8, ["error", "done"]),
                          createVNode(QStep, {
                            name: 8,
                            title: "Requirements Checklist",
                            prefix: "8",
                            error: !unref(stepsValid).step8,
                            done: unref(stepsValid).step8,
                            "done-color": "positive"
                          }, {
                            default: withCtx(() => [
                              _hoisted_62,
                              createBaseVNode("div", null, [
                                createVNode(QCheckbox, {
                                  modelValue: model.contractor_clothing_rack,
                                  "onUpdate:modelValue": _cache[37] || (_cache[37] = ($event) => model.contractor_clothing_rack = $event),
                                  label: "Car with clothing rack or clothing bar secured",
                                  "true-value": "Yes",
                                  "false-value": "No"
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", null, [
                                createVNode(QCheckbox, {
                                  modelValue: model.contractor_smartphone_type,
                                  "onUpdate:modelValue": _cache[38] || (_cache[38] = ($event) => model.contractor_smartphone_type = $event),
                                  label: "Smartphone with data plan",
                                  "true-value": "Yes",
                                  "false-value": "No"
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", null, [
                                createVNode(QCheckbox, {
                                  modelValue: model.contractor_computer_type,
                                  "onUpdate:modelValue": _cache[39] || (_cache[39] = ($event) => model.contractor_computer_type = $event),
                                  label: "Computer or Laptop with internet access",
                                  "true-value": "Yes",
                                  "false-value": "No"
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", null, [
                                createVNode(QCheckbox, {
                                  modelValue: model.contractor_ironing_steam_station,
                                  "onUpdate:modelValue": _cache[40] || (_cache[40] = ($event) => model.contractor_ironing_steam_station = $event),
                                  label: "Ironing steam station",
                                  "true-value": "Yes",
                                  "false-value": "No"
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", null, [
                                createVNode(QCheckbox, {
                                  modelValue: model.contractor_washing_machine_dryer,
                                  "onUpdate:modelValue": _cache[41] || (_cache[41] = ($event) => model.contractor_washing_machine_dryer = $event),
                                  label: "Washing Machine and Dryer",
                                  "true-value": "Yes",
                                  "false-value": "No"
                                }, null, 8, ["modelValue"])
                              ]),
                              createVNode(QBtn, {
                                onClick: _cache[42] || (_cache[42] = ($event) => step.value = 9),
                                label: "Next",
                                color: "primary",
                                class: "q-mt-lg",
                                rounded: ""
                              })
                            ]),
                            _: 1
                          }, 8, ["error", "done"]),
                          createVNode(QStep, {
                            name: 9,
                            title: "Contractor Declaration",
                            prefix: "9",
                            error: !unref(stepsValid).step9,
                            done: unref(stepsValid).step9,
                            "done-color": "positive"
                          }, {
                            default: withCtx(() => [
                              _hoisted_63,
                              createBaseVNode("div", null, [
                                createVNode(QCheckbox, {
                                  modelValue: model.contractor_declaration_agreement,
                                  "onUpdate:modelValue": _cache[43] || (_cache[43] = ($event) => model.contractor_declaration_agreement = $event),
                                  label: "I have read and agree with the Contractor Agreement and will submit a signed agreement"
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", null, [
                                createVNode(QCheckbox, {
                                  modelValue: model.contractor_declaration_training,
                                  "onUpdate:modelValue": _cache[44] || (_cache[44] = ($event) => model.contractor_declaration_training = $event),
                                  label: "I agree to undertake the Laundry Lady Training Program and follow Laundry Lady policies and procedures"
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", null, [
                                createVNode(QCheckbox, {
                                  modelValue: model.contractor_declaration_abn,
                                  "onUpdate:modelValue": _cache[45] || (_cache[45] = ($event) => model.contractor_declaration_abn = $event),
                                  label: "I agree to register and maintain an ABN and for the Laundry Lady to create recepient created tax invoices for weekly commissions"
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", null, [
                                createVNode(QCheckbox, {
                                  modelValue: model.contractor_declaration_pl,
                                  "onUpdate:modelValue": _cache[46] || (_cache[46] = ($event) => model.contractor_declaration_pl = $event),
                                  label: "I agree to take out public liability coverage to $5million and keep the policy current at all times"
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", null, [
                                createVNode(QCheckbox, {
                                  modelValue: model.contractor_declaration_inform,
                                  "onUpdate:modelValue": _cache[47] || (_cache[47] = ($event) => model.contractor_declaration_inform = $event),
                                  label: "I agree to inform the Laundry Lady if any details change in this application form"
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", null, [
                                createVNode(QCheckbox, {
                                  modelValue: model.contractor_declaration_kit,
                                  "onUpdate:modelValue": _cache[48] || (_cache[48] = ($event) => model.contractor_declaration_kit = $event),
                                  label: "I agree to purchase the Starter Kit for $399 including GST as detailed in the The Laundry Lady Contractor Package. An invoice will be sent after references are checked and confirmed."
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", null, [
                                createVNode(QCheckbox, {
                                  modelValue: model.contractor_declaration_information,
                                  "onUpdate:modelValue": _cache[49] || (_cache[49] = ($event) => model.contractor_declaration_information = $event),
                                  label: "I agree that all information included in this application form is true and correct."
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", _hoisted_64, [
                                createBaseVNode("div", _hoisted_65, [
                                  _hoisted_66,
                                  createBaseVNode("div", _hoisted_67, [
                                    createVNode(unref(script), {
                                      id: "signature",
                                      width: "100%",
                                      height: "150px",
                                      ref_key: "sig1Ref",
                                      ref: sig1Ref,
                                      options: { onEnd: saveSig1 }
                                    }, null, 8, ["options"])
                                  ]),
                                  createVNode(QBtn, {
                                    onClick: _cache[50] || (_cache[50] = ($event) => resetSig1()),
                                    icon: "sync",
                                    flat: "",
                                    rounded: ""
                                  })
                                ]),
                                createBaseVNode("div", _hoisted_68, [
                                  _hoisted_69,
                                  createBaseVNode("div", _hoisted_70, [
                                    createVNode(unref(script), {
                                      id: "signature",
                                      width: "100%",
                                      height: "150px",
                                      ref_key: "sig2Ref",
                                      ref: sig2Ref,
                                      options: { onEnd: saveSig2 }
                                    }, null, 8, ["options"])
                                  ]),
                                  createVNode(QBtn, {
                                    onClick: _cache[51] || (_cache[51] = ($event) => resetSig2()),
                                    icon: "sync",
                                    flat: "",
                                    rounded: ""
                                  })
                                ])
                              ]),
                              createVNode(QBtn, {
                                onClick: _cache[52] || (_cache[52] = ($event) => update()),
                                disable: loading.value || unref($v).$invalid || !model.contractor_abn_verified,
                                label: "Submit",
                                color: "primary",
                                class: "q-mt-lg",
                                rounded: ""
                              }, null, 8, ["disable"])
                            ]),
                            _: 1
                          }, 8, ["error", "done"])
                        ]),
                        _: 1
                      }, 8, ["modelValue"])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
