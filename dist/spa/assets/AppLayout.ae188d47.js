var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField = (obj, key, value2) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);
  return value2;
};
import { Q as QSpace } from "./QSpace.05db7357.js";
import { S as createComponent, r as ref, g as computed, o as onMounted, G as onBeforeUnmount, h, j as getCurrentInstance, B as defineComponent, J as useRouter, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, a9 as createBlock, aN as QSpinner, z as createCommentVNode, N as QIcon, bw as QSeparator, v as normalizeProps, aM as guardReactiveProps, ab as createTextVNode, ac as toDisplayString, i as inject, U as emptyRenderFn, a3 as isRuntimeSsrPreHydration, w as watch, a5 as hMergeSlot, W as layoutKey, C as reactive, H as withDirectives, P as QBtn, ae as QDialog, by as resolveComponent, R as unref, Q as QCard, L as QCardSection, q as createBaseVNode, bi as QCheckbox, F as Fragment, aa as renderList, ar as QToggle, t as normalizeClass, M as QInput, ad as QCardActions, bx as QAvatar } from "./index.bb082a98.js";
import { Q as QImg } from "./UserAvatar.8f55af60.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.c390f765.js";
import { Q as QList } from "./QList.86a8068e.js";
import { Q as QMenu } from "./QMenu.76fab67d.js";
import { Q as QToolbar } from "./QToolbar.127e68dd.js";
import { Q as QHeader } from "./QHeader.fc56d8af.js";
import { b as between } from "./format.3e32b8d9.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.55666630.js";
import { C as ClosePopup } from "./ClosePopup.0b937a7e.js";
import { a as api, m as moment } from "./axios.847c91ae.js";
import { o as openURL } from "./open-url.094ce02f.js";
import { u as useQuasar } from "./use-quasar.4a2a2740.js";
import { _ as _sfc_main$8 } from "./AppLogo.08cd3937.js";
import { Q as QItemLabel } from "./QItemLabel.b2006bcf.js";
import { Q as QSelect } from "./QSelect.09b8065a.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.a2991d4a.js";
import { Q as QPage } from "./QPage.41bbfb8f.js";
import { Q as QResizeObserver } from "./QResizeObserver.c7a79699.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { _ as _sfc_main$7 } from "./ValidationsModal.aaf3688f.js";
import { Q as QBadge } from "./QBadge.4551a4f2.js";
import { u as useVuelidate, r as required, a as requiredIf } from "./index.esm.1aaa31b9.js";
import { b as arrayRange, d as hourBookingOptions, a as categoryDisplay, e as doNotify } from "./help.08f82b20.js";
import { u as useMixinSecurity } from "./security.08494a81.js";
import { p as productCategoriesVisibleBooking } from "./helpers.c9226041.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.79c8463e.js";
import { _ as _sfc_main$5 } from "./DateField.c662fa9e.js";
import { _ as _sfc_main$4 } from "./TeamField.c0379962.js";
import { _ as _sfc_main$6 } from "./OrderContractorManagement.6f55f647.js";
import { u as useMixinCommon } from "./common.0aea948f.js";
import { g as getLocationPromise } from "./geolocation.525675d5.js";
import "./use-ratio.cec9a002.js";
import "./selection.bfc2e834.js";
import "./rtl.b51694b1.js";
import "./QDate.209a8361.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.ad98adb1.js";
import "./QLinearProgress.8f52c73b.js";
import "./common.04be35ea.js";
const xhr = XMLHttpRequest, open = xhr.prototype.open, positionValues = ["top", "right", "bottom", "left"];
let stack = [];
let highjackCount = 0;
function translate({ p, pos, active, horiz, reverse, dir }) {
  let x = 1, y = 1;
  if (horiz === true) {
    if (reverse === true) {
      x = -1;
    }
    if (pos === "bottom") {
      y = -1;
    }
    return { transform: `translate3d(${x * (p - 100)}%,${active ? 0 : y * -200}%,0)` };
  }
  if (reverse === true) {
    y = -1;
  }
  if (pos === "right") {
    x = -1;
  }
  return { transform: `translate3d(${active ? 0 : dir * x * -200}%,${y * (p - 100)}%,0)` };
}
function inc(p, amount) {
  if (typeof amount !== "number") {
    if (p < 25) {
      amount = Math.random() * 3 + 3;
    } else if (p < 65) {
      amount = Math.random() * 3;
    } else if (p < 85) {
      amount = Math.random() * 2;
    } else if (p < 99) {
      amount = 0.6;
    } else {
      amount = 0;
    }
  }
  return between(p + amount, 0, 100);
}
function highjackAjax(stackEntry) {
  highjackCount++;
  stack.push(stackEntry);
  if (highjackCount > 1) {
    return;
  }
  xhr.prototype.open = function(_, url2) {
    const stopStack = [];
    const loadStart = () => {
      stack.forEach((entry) => {
        if (entry.hijackFilter.value === null || entry.hijackFilter.value(url2) === true) {
          entry.start();
          stopStack.push(entry.stop);
        }
      });
    };
    const loadEnd = () => {
      stopStack.forEach((stop) => {
        stop();
      });
    };
    this.addEventListener("loadstart", loadStart, { once: true });
    this.addEventListener("loadend", loadEnd, { once: true });
    open.apply(this, arguments);
  };
}
function restoreAjax(start) {
  stack = stack.filter((entry) => entry.start !== start);
  highjackCount = Math.max(0, highjackCount - 1);
  if (highjackCount === 0) {
    xhr.prototype.open = open;
  }
}
var QAjaxBar = createComponent({
  name: "QAjaxBar",
  props: {
    position: {
      type: String,
      default: "top",
      validator: (val) => positionValues.includes(val)
    },
    size: {
      type: String,
      default: "2px"
    },
    color: String,
    skipHijack: Boolean,
    reverse: Boolean,
    hijackFilter: Function
  },
  emits: ["start", "stop"],
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();
    const progress = ref(0);
    const onScreen = ref(false);
    const animate = ref(true);
    let sessions = 0, timer = null, speed;
    const classes = computed(
      () => `q-loading-bar q-loading-bar--${props.position}` + (props.color !== void 0 ? ` bg-${props.color}` : "") + (animate.value === true ? "" : " no-transition")
    );
    const horizontal = computed(() => props.position === "top" || props.position === "bottom");
    const sizeProp = computed(() => horizontal.value === true ? "height" : "width");
    const style = computed(() => {
      const active = onScreen.value;
      const obj = translate({
        p: progress.value,
        pos: props.position,
        active,
        horiz: horizontal.value,
        reverse: proxy.$q.lang.rtl === true && ["top", "bottom"].includes(props.position) ? props.reverse === false : props.reverse,
        dir: proxy.$q.lang.rtl === true ? -1 : 1
      });
      obj[sizeProp.value] = props.size;
      obj.opacity = active ? 1 : 0;
      return obj;
    });
    const attributes = computed(() => onScreen.value === true ? {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": progress.value
    } : { "aria-hidden": "true" });
    function start(newSpeed = 300) {
      const oldSpeed = speed;
      speed = Math.max(0, newSpeed) || 0;
      sessions++;
      if (sessions > 1) {
        if (oldSpeed === 0 && newSpeed > 0) {
          planNextStep();
        } else if (timer !== null && oldSpeed > 0 && newSpeed <= 0) {
          clearTimeout(timer);
          timer = null;
        }
        return sessions;
      }
      timer !== null && clearTimeout(timer);
      emit("start");
      progress.value = 0;
      timer = setTimeout(() => {
        timer = null;
        animate.value = true;
        newSpeed > 0 && planNextStep();
      }, onScreen.value === true ? 500 : 1);
      if (onScreen.value !== true) {
        onScreen.value = true;
        animate.value = false;
      }
      return sessions;
    }
    function increment(amount) {
      if (sessions > 0) {
        progress.value = inc(progress.value, amount);
      }
      return sessions;
    }
    function stop() {
      sessions = Math.max(0, sessions - 1);
      if (sessions > 0) {
        return sessions;
      }
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      emit("stop");
      const end = () => {
        animate.value = true;
        progress.value = 100;
        timer = setTimeout(() => {
          timer = null;
          onScreen.value = false;
        }, 1e3);
      };
      if (progress.value === 0) {
        timer = setTimeout(end, 1);
      } else {
        end();
      }
      return sessions;
    }
    function planNextStep() {
      if (progress.value < 100) {
        timer = setTimeout(() => {
          timer = null;
          increment();
          planNextStep();
        }, speed);
      }
    }
    let hijacked;
    onMounted(() => {
      if (props.skipHijack !== true) {
        hijacked = true;
        highjackAjax({
          start,
          stop,
          hijackFilter: computed(() => props.hijackFilter || null)
        });
      }
    });
    onBeforeUnmount(() => {
      timer !== null && clearTimeout(timer);
      hijacked === true && restoreAjax(start);
    });
    Object.assign(proxy, { start, stop, increment });
    return () => h("div", {
      class: classes.value,
      style: style.value,
      ...attributes.value
    });
  }
});
var _imports_0 = "/portal/assets/logo_app.ec74ee8f.png";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HeaderSearch",
  setup(__props) {
    const keyword = ref();
    const loading = ref();
    const results = ref();
    const router = useRouter();
    const doNav = (model, type) => {
      if (type === "contractor") {
        router.push({ name: "contractor-dashboard", params: { id: model.value } }).catch();
      }
      if (type === "team") {
        router.push({ name: "team-dashboard", params: { id: model.value } }).catch();
      }
      if (type === "order") {
        router.push({ name: "order-edit", params: { id: model.value } }).catch();
      }
      keyword.value = null;
      loading.value = false;
    };
    const search = async (update, searchKeyword) => {
      loading.value = true;
      const result = await api.post("/public/search", { keyword: searchKeyword });
      if (result.data.length === 1) {
        doNav(result.data[0], result.data[0].type);
        return true;
      }
      if (update) {
        update(() => {
          results.value = result.data;
          loading.value = false;
        });
      }
    };
    const filter = (val, update) => {
      if (val.length < 2) {
        return false;
      }
      search(update, val);
    };
    const handleChange = (newVal) => {
      doNav(newVal, newVal.type);
      keyword.value = null;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(QSelect, {
          modelValue: keyword.value,
          "onUpdate:modelValue": [
            _cache[0] || (_cache[0] = ($event) => keyword.value = $event),
            handleChange
          ],
          modelModifiers: { trim: true },
          placeholder: "Keyword search",
          disabled: loading.value,
          loading: loading.value,
          borderless: "",
          dark: "",
          class: "gt-xs",
          style: { "width": "500px" },
          "use-input": "",
          options: results.value,
          onFilter: filter,
          "hide-dropdown-icon": "",
          "input-debounce": 300
        }, {
          loading: withCtx(() => [
            loading.value ? (openBlock(), createBlock(QSpinner, { key: 0 })) : createCommentVNode("", true)
          ]),
          prepend: withCtx(() => [
            createVNode(QIcon, { name: "search" })
          ]),
          option: withCtx((scope) => [
            createVNode(QSeparator),
            createVNode(QItem, normalizeProps(guardReactiveProps(scope.itemProps)), {
              default: withCtx(() => [
                scope.opt.type === "contractor" ? (openBlock(), createBlock(QItemSection, {
                  key: 0,
                  avatar: ""
                }, {
                  default: withCtx(() => [
                    createVNode(QIcon, {
                      name: "engineering",
                      size: "32px"
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                scope.opt.type === "user" ? (openBlock(), createBlock(QItemSection, {
                  key: 1,
                  avatar: ""
                }, {
                  default: withCtx(() => [
                    createVNode(QIcon, {
                      name: "account_circle",
                      size: "32px"
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                scope.opt.type === "team" ? (openBlock(), createBlock(QItemSection, {
                  key: 2,
                  avatar: ""
                }, {
                  default: withCtx(() => [
                    createVNode(QIcon, {
                      name: "group",
                      size: "32px"
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                scope.opt.type === "order" ? (openBlock(), createBlock(QItemSection, {
                  key: 3,
                  avatar: ""
                }, {
                  default: withCtx(() => [
                    createVNode(QIcon, {
                      name: "shopping_cart",
                      size: "32px"
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(scope.opt.label), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(QItemLabel, { caption: "" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(scope.opt.sublabel), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1040)
          ]),
          _: 1
        }, 8, ["modelValue", "disabled", "loading", "options"])
      ]);
    };
  }
});
var QFooter = createComponent({
  name: "QFooter",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QFooter needs to be child of QLayout");
      return emptyRenderFn;
    }
    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);
    const windowHeight = ref(
      isRuntimeSsrPreHydration.value === true || $layout.isContainer.value === true ? 0 : window.innerHeight
    );
    const fixed = computed(
      () => props.reveal === true || $layout.view.value.indexOf("F") > -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const containerHeight = computed(() => $layout.isContainer.value === true ? $layout.containerHeight.value : windowHeight.value);
    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0;
      }
      const offset2 = $layout.scroll.value.position + containerHeight.value + size.value - $layout.height.value;
      return offset2 > 0 ? offset2 : 0;
    });
    const hidden = computed(
      () => props.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props.modelValue === true && hidden.value === true && props.reveal === true
    );
    const classes = computed(
      () => "q-footer q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-bottom" + (props.bordered === true ? " q-footer--bordered" : "") + (hidden.value === true ? " q-footer--hidden" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" + (fixed.value !== true ? " hidden" : "") : "")
    );
    const style = computed(() => {
      const view = $layout.rows.value.bottom, css = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css;
    });
    function updateLayout(prop, val) {
      $layout.update("footer", prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function onResize({ height }) {
      updateLocal(size, height);
      updateLayout("size", height);
    }
    function updateRevealed() {
      if (props.reveal !== true) {
        return;
      }
      const { direction, position, inflectionPoint } = $layout.scroll.value;
      updateLocal(revealed, direction === "up" || position - inflectionPoint < 100 || $layout.height.value - containerHeight.value - position - size.value < 300);
    }
    function onFocusin(evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }
      emit("focusin", evt);
    }
    watch(() => props.modelValue, (val) => {
      updateLayout("space", val);
      updateLocal(revealed, true);
      $layout.animate();
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(() => props.reveal, (val) => {
      val === false && updateLocal(revealed, props.modelValue);
    });
    watch(revealed, (val) => {
      $layout.animate();
      emit("reveal", val);
    });
    watch([size, $layout.scroll, $layout.height], updateRevealed);
    watch(() => $q.screen.height, (val) => {
      $layout.isContainer.value !== true && updateLocal(windowHeight, val);
    });
    const instance = {};
    $layout.instances.footer = instance;
    props.modelValue === true && updateLayout("size", size.value);
    updateLayout("space", props.modelValue);
    updateLayout("offset", offset.value);
    onBeforeUnmount(() => {
      if ($layout.instances.footer === instance) {
        $layout.instances.footer = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hMergeSlot(slots.default, [
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      ]);
      props.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      return h("footer", {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child);
    };
  }
});
const _hoisted_1$2 = ["src"];
const _hoisted_2$2 = ["src"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MediaViewer",
  setup(__props) {
    const rotateZoom = reactive({
      rotate: 0,
      zoom: 1
    });
    const $q = useQuasar();
    const bus = inject("bus");
    const data = ref();
    const src = ref();
    const pdfSrc = ref();
    const showModal = ref(false);
    const viewerImage = ref();
    const rotateZoomFunc = (action) => {
      if (action === "rotateForward") {
        rotateZoom.rotate += 90;
        if (rotateZoom.rotate > 360) {
          rotateZoom.rotate = 90;
        }
      }
      if (action === "rotateBackwards") {
        if (viewerImage.value) {
          viewerImage.value.style.transform = `rotate(${rotateZoom.rotate}deg)`;
        }
      }
      if (action === "zoomIn") {
        rotateZoom.zoom += 0.2;
      }
      if (action === "zoomOut") {
        rotateZoom.zoom -= 0.2;
      }
      if (viewerImage.value) {
        viewerImage.value.style.transform = `scale(${rotateZoom.zoom}) rotate(${rotateZoom.rotate}deg)`;
      }
    };
    onMounted(() => {
      bus.on("view-file", (eventData) => {
        Object.assign(rotateZoom, { rotate: 0, zoom: 1 });
        pdfSrc.value = false;
        data.value = eventData;
        $q.loading.show({ message: "Loading asset..." });
        src.value = false;
        if (data.value.type === "photo") {
          api.get(`/photo/${data.value.model.id}?original=1`).then((response) => {
            api.get(`/photo/loadoriginaldata/${data.value.model.id}`).then((res) => {
              src.value = "data:" + response.data.image_file_uri.original.type + ";base64," + res.data.raw;
            });
            $q.loading.hide();
            showModal.value = true;
          }).catch((error) => {
            $q.loading.hide();
            useMixinDebug(error);
          });
        } else if (data.value.type === "pdfUrl") {
          window.open(data.value.url);
          $q.loading.hide();
        } else {
          api.get(`/attachment/${data.value.model.id}?original=1`).then((response) => {
            data.value = response.data;
            if (data.value.file_file_uri.original.type !== "application/pdf") {
              src.value = `data:${response.data.file_file_uri.original.type};base64,${response.data.file_file_uri.original.data.content}`;
              $q.loading.hide();
              showModal.value = true;
            } else {
              pdfSrc.value = `data:application/pdf;base64,${response.data.file_file_uri.original.data}`;
              window.open(data.value.file_file_uri.original.uri);
            }
            $q.loading.hide();
          }).catch((error) => {
            useMixinDebug(error);
          });
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: showModal.value,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => showModal.value = $event),
        maximized: ""
      }, {
        default: withCtx(() => [
          createVNode(QLayout, {
            view: "Lhh lpR fff",
            container: "",
            class: "bg-black"
          }, {
            default: withCtx(() => [
              createVNode(QHeader, { class: "bg-secondary" }, {
                default: withCtx(() => [
                  createVNode(QToolbar, null, {
                    default: withCtx(() => [
                      createVNode(QToolbarTitle, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(data.value.name), 1)
                        ]),
                        _: 1
                      }),
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        round: "",
                        dense: "",
                        icon: "close"
                      }, null, 512), [
                        [ClosePopup]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QPageContainer, null, {
                default: withCtx(() => [
                  createVNode(QPage, { class: "items-center flex justify-center" }, {
                    default: withCtx(() => [
                      pdfSrc.value ? (openBlock(), createElementBlock("iframe", {
                        key: 0,
                        src: pdfSrc.value,
                        width: "100%",
                        class: "pdfIframe"
                      }, null, 8, _hoisted_1$2)) : createCommentVNode("", true),
                      src.value && !pdfSrc.value ? (openBlock(), createElementBlock("img", {
                        key: 1,
                        src: src.value,
                        style: { "max-width": "100%" },
                        ref_key: "viewerImage",
                        ref: viewerImage
                      }, null, 8, _hoisted_2$2)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QFooter, { class: "bg-primary text-white" }, {
                default: withCtx(() => [
                  !pdfSrc.value ? (openBlock(), createBlock(QToolbar, {
                    key: 0,
                    inset: "",
                    class: "row justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        onClick: _cache[0] || (_cache[0] = ($event) => rotateZoomFunc("rotateForward")),
                        icon: "refresh"
                      }),
                      createVNode(QBtn, {
                        onClick: _cache[1] || (_cache[1] = ($event) => rotateZoomFunc("zoomIn")),
                        icon: "zoom_in"
                      }),
                      createVNode(QBtn, {
                        onClick: _cache[2] || (_cache[2] = ($event) => rotateZoomFunc("zoomOut")),
                        icon: "zoom_out"
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const _hoisted_1$1 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = { key: 1 };
const _hoisted_4 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_5 = {
  key: 1,
  class: "q-mt-md"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Products", -1);
const _hoisted_7 = { class: "q-mr-sm" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = { key: 2 };
const _hoisted_10 = { class: "q-mt-md" };
const _hoisted_11 = { class: "row q-col-gutter-md" };
const _hoisted_12 = { class: "col-xs-12 col-sm-6" };
const _hoisted_13 = {
  key: 0,
  class: "col-xs-12 col-sm-6"
};
const _hoisted_14 = {
  key: 0,
  class: "q-mb-lg"
};
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", null, "If the booking needs to occur multiple times a week, choose the days below:", -1);
const _hoisted_16 = { class: "row q-col-gutter-md" };
const _hoisted_17 = {
  key: 0,
  class: "col-xs-12 col-sm-6"
};
const _hoisted_18 = {
  key: 1,
  class: "col-xs-12 col-sm-6"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderCreate",
  setup(__props) {
    const show = ref(false);
    const washingAndIroning = ref(false);
    const { user } = useMixinSecurity();
    const categories = ref();
    const addressError = ref(false);
    const schema = {
      team_id: null,
      contractor_user_id: null,
      scheduled_pickup_date: null,
      scheduled_pickup_time: null,
      special_instructions: null,
      status: "confirmed",
      recurring_order: false,
      recurring: null,
      recurring_every: null,
      recurring_end: null,
      recurring_days: {
        days: [
          { day: 0, active: false, label: "Sun" },
          { day: 1, active: false, label: "Mon" },
          { day: 2, active: false, label: "Tue" },
          { day: 3, active: false, label: "Wed" },
          { day: 4, active: false, label: "Thu" },
          { day: 5, active: false, label: "Fri" },
          { day: 6, active: false, label: "Sat" }
        ]
      },
      products: [],
      productcategories: []
    };
    const model = reactive(JSON.parse(JSON.stringify(schema)));
    const loading = ref(false);
    const bus = inject("bus");
    const i8n = useI18n();
    const rules = {
      team_id: { required },
      scheduled_pickup_date: { required },
      scheduled_pickup_time: { required },
      status: { required },
      recurring: { requiredIf: requiredIf(() => model.recurring_order) },
      recurring_every: { requiredIf: requiredIf(() => model.recurring_order) },
      recurring_end_type: { requiredIf: requiredIf(() => model.recurring_order) },
      recurring_end: { requiredIf: requiredIf(() => model.recurring_order && model.recurring_end_type !== "Never") }
    };
    const $v = useVuelidate(rules, model);
    const toggleWashingAndIroning = () => {
      model.productcategories.forEach((o) => {
        o.active = washingAndIroning.value;
      });
    };
    const recurringOccurenceOptions = computed(() => {
      if (model.recurring === "Day") {
        return arrayRange(1, 50, 1, true);
      }
      if (model.recurring === "Week") {
        return arrayRange(1, 12, 1, true);
      }
      if (model.recurring === "Month") {
        return arrayRange(1, 3, 1, true);
      }
      return arrayRange(1, 50, 1, true);
    });
    const save = () => {
      loading.value = true;
      api.post("/public/order", model).then(() => {
        doNotify("positive", `${i8n.t("order.name")} created`);
        bus.emit("orderLoadMore");
        show.value = false;
        loading.value = false;
      }).catch((error) => {
        useMixinDebug(error);
        loading.value = false;
      });
    };
    const handleTeamChange = () => {
      if (model.team_id) {
        api.get(`/public/team/${model.team_id}`).then((response) => {
          if (!response.data.address2 || !response.data.suburb_postcode_region_id) {
            addressError.value = true;
          } else {
            addressError.value = false;
          }
        }).catch((error) => {
          useMixinDebug(error);
        });
      }
    };
    onMounted(async () => {
      bus.on("newOrder", async (data) => {
        Object.assign(model, JSON.parse(JSON.stringify(schema)));
        categories.value = await productCategoriesVisibleBooking();
        for (const c of categories.value) {
          model.productcategories.push({ product_category_id: c.value, active: false });
        }
        if (data.team_id) {
          model.team_id = data.team_id;
          handleTeamChange();
        }
        show.value = true;
        washingAndIroning.value = false;
      });
    });
    onBeforeUnmount(() => {
      bus.off("newOrder");
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          unref(user) ? (openBlock(), createBlock(QCard, {
            key: 0,
            class: "modal"
          }, {
            default: withCtx(() => [
              createVNode(QToolbar, { class: "bg-primary text-white" }, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("order.create")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QSpace),
                  withDirectives(createVNode(QBtn, {
                    icon: "close",
                    flat: "",
                    round: "",
                    dense: ""
                  }, null, 512), [
                    [ClosePopup]
                  ])
                ]),
                _: 1
              }),
              createVNode(QSeparator),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$1, [
                    createVNode(_sfc_main$4, {
                      modelValue: model.team_id,
                      "onUpdate:modelValue": [
                        _cache[0] || (_cache[0] = ($event) => model.team_id = $event),
                        _cache[1] || (_cache[1] = ($event) => handleTeamChange())
                      ],
                      label: _ctx.$t("team.name"),
                      status: "active",
                      class: "col-xs-12",
                      error: unref($v).team_id.$invalid,
                      clearable: true,
                      outlined: true
                    }, null, 8, ["modelValue", "label", "error"])
                  ]),
                  addressError.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                    createVNode(QIcon, { name: "warning" }),
                    createTextVNode(" The selected customer has an incomplete or invalid address. "),
                    createVNode(_component_router_link, {
                      to: { name: "team-dashboard", params: { id: model.team_id } },
                      class: "link"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Click here to update the customer record.")
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ])) : createCommentVNode("", true),
                  !addressError.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                    model.team_id ? (openBlock(), createElementBlock("div", _hoisted_4, [
                      createVNode(_sfc_main$5, {
                        modelValue: model.scheduled_pickup_date,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.scheduled_pickup_date = $event),
                        label: _ctx.$t("order.scheduledPickupDate"),
                        invalid: unref($v).scheduled_pickup_date.$invalid,
                        class: "col-xs-12 col-sm-6",
                        outlined: true
                      }, null, 8, ["modelValue", "label", "invalid"]),
                      createVNode(QSelect, {
                        modelValue: model.scheduled_pickup_time,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.scheduled_pickup_time = $event),
                        label: _ctx.$t("order.scheduledPickupTime"),
                        invalid: unref($v).scheduled_pickup_time,
                        options: unref(hourBookingOptions),
                        "emit-value": "",
                        "map-options": "",
                        class: "col-xs-12 col-sm-6",
                        outlined: ""
                      }, null, 8, ["modelValue", "label", "invalid", "options"])
                    ])) : createCommentVNode("", true),
                    model.team_id && model.scheduled_pickup_date && model.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_5, [
                      _hoisted_6,
                      createBaseVNode("span", _hoisted_7, [
                        createVNode(QCheckbox, {
                          modelValue: washingAndIroning.value,
                          "onUpdate:modelValue": [
                            _cache[4] || (_cache[4] = ($event) => washingAndIroning.value = $event),
                            _cache[5] || (_cache[5] = ($event) => toggleWashingAndIroning())
                          ],
                          label: "Washing & Ironing"
                        }, null, 8, ["modelValue"])
                      ]),
                      !washingAndIroning.value ? (openBlock(), createElementBlock("span", _hoisted_8, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(model.productcategories, (c) => {
                          return openBlock(), createElementBlock("span", {
                            key: c.product_category_id,
                            class: "q-mr-sm"
                          }, [
                            createVNode(QCheckbox, {
                              modelValue: c.active,
                              "onUpdate:modelValue": ($event) => c.active = $event,
                              label: unref(categoryDisplay)(c.product_category_id, categories.value)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  !addressError.value && model.team_id && model.scheduled_pickup_date && model.scheduled_pickup_time && model.productcategories && model.productcategories.filter((o) => o.active).length ? (openBlock(), createElementBlock("div", _hoisted_9, [
                    unref(user).role === "customer" ? (openBlock(), createBlock(_sfc_main$6, {
                      key: 0,
                      team_id: model.team_id,
                      scheduled_pickup_date: model.scheduled_pickup_date,
                      scheduled_pickup_time: model.scheduled_pickup_time,
                      modelValue: model.contractor_user_id,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.contractor_user_id = $event),
                      reassign: true,
                      productcategories: model.productcategories.filter((o) => o.active)
                    }, null, 8, ["team_id", "scheduled_pickup_date", "scheduled_pickup_time", "modelValue", "productcategories"])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_10, [
                      createVNode(QToggle, {
                        modelValue: model.recurring_order,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.recurring_order = $event),
                        label: _ctx.$t("order.recurring")
                      }, null, 8, ["modelValue", "label"]),
                      model.recurring_order ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass(["q-pa-md q-mt-sm", { "bg-grey-1": !_ctx.$q.dark.isActive }])
                      }, [
                        createBaseVNode("div", _hoisted_11, [
                          createBaseVNode("div", _hoisted_12, [
                            createVNode(QSelect, {
                              modelValue: model.recurring,
                              "onUpdate:modelValue": [
                                _cache[8] || (_cache[8] = ($event) => model.recurring = $event),
                                _cache[9] || (_cache[9] = ($event) => model.recurring_end = "")
                              ],
                              label: _ctx.$t("order.recurringFrequency"),
                              options: ["Week", "Month", "Day"],
                              "bottom-slots": "",
                              error: unref($v).recurring.$invalid,
                              outlined: ""
                            }, null, 8, ["modelValue", "label", "error"])
                          ]),
                          model.recurring ? (openBlock(), createElementBlock("div", _hoisted_13, [
                            createVNode(QSelect, {
                              modelValue: model.recurring_every,
                              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => model.recurring_every = $event),
                              label: "Repeat every",
                              options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                              error: unref($v).recurring_every.$invalid,
                              outlined: ""
                            }, {
                              append: withCtx(() => [
                                createVNode(QBadge, {
                                  label: `${model.recurring}s`,
                                  color: "grey"
                                }, null, 8, ["label"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "error"])
                          ])) : createCommentVNode("", true)
                        ]),
                        model.recurring === "Week" ? (openBlock(), createElementBlock("div", _hoisted_14, [
                          _hoisted_15,
                          (openBlock(true), createElementBlock(Fragment, null, renderList(model.recurring_days.days, (d) => {
                            return openBlock(), createBlock(QBtn, {
                              key: d.day,
                              color: "primary",
                              onClick: ($event) => d.active = !d.active,
                              label: d.label,
                              flat: !d.active,
                              class: "q-mr-xs",
                              size: "sm"
                            }, null, 8, ["onClick", "label", "flat"]);
                          }), 128))
                        ])) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_16, [
                          model.recurring ? (openBlock(), createElementBlock("div", _hoisted_17, [
                            createVNode(QSelect, {
                              modelValue: model.recurring_end_type,
                              "onUpdate:modelValue": [
                                _cache[11] || (_cache[11] = ($event) => model.recurring_end_type = $event),
                                _cache[12] || (_cache[12] = ($event) => model.recurring_end = "")
                              ],
                              label: "Ends",
                              options: ["After", "On", "Never"],
                              error: unref($v).recurring_end_type.$invalid,
                              outlined: ""
                            }, null, 8, ["modelValue", "error"])
                          ])) : createCommentVNode("", true),
                          model.recurring ? (openBlock(), createElementBlock("div", _hoisted_18, [
                            model.recurring_end_type === "After" ? (openBlock(), createBlock(QSelect, {
                              key: 0,
                              modelValue: model.recurring_end,
                              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => model.recurring_end = $event),
                              label: "Choose the amount",
                              error: unref($v).recurring_end.$invalid,
                              options: unref(recurringOccurenceOptions),
                              outlined: ""
                            }, {
                              append: withCtx(() => [
                                createVNode(QBadge, {
                                  label: "occurences",
                                  color: "grey"
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "error", "options"])) : createCommentVNode("", true),
                            model.recurring_end_type === "On" ? (openBlock(), createBlock(_sfc_main$5, {
                              key: 1,
                              modelValue: model.recurring_end,
                              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => model.recurring_end = $event),
                              label: "Choose an end date",
                              outlined: true,
                              invalid: unref($v).recurring_end.$invalid
                            }, null, 8, ["modelValue", "invalid"])) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    createVNode(QInput, {
                      modelValue: model.special_instructions,
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => model.special_instructions = $event),
                      label: "Special Instructions",
                      autogrow: "",
                      outlined: "",
                      class: "q-mt-md"
                    }, null, 8, ["modelValue"])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(QCardActions, { align: "right" }, {
                default: withCtx(() => [
                  withDirectives(createVNode(QBtn, {
                    label: "Cancel",
                    flat: "",
                    color: "secondary",
                    rounded: ""
                  }, null, 512), [
                    [ClosePopup]
                  ]),
                  createVNode(QBtn, {
                    disable: loading.value || unref($v).$invalid || !model.productcategories.filter((o) => o.active).length,
                    label: "Save",
                    color: "primary",
                    onClick: _cache[16] || (_cache[16] = ($event) => save()),
                    rounded: "",
                    loading: loading.value
                  }, null, 8, ["disable", "loading"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const PACKET_TYPES = /* @__PURE__ */ Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
const PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
const ERROR_PACKET = { type: "error", data: "parser error" };
const withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
const isView$1 = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
const encodePacket = ({ type, data }, supportsBinary, callback) => {
  if (withNativeBlob$1 && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
const encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i2 = 0; i2 < chars.length; i2++) {
  lookup$1[chars.charCodeAt(i2)] = i2;
}
const decode$1 = (base64) => {
  let bufferLength = base64.length * 0.75, len = base64.length, i2, p = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i2 = 0; i2 < len; i2 += 4) {
    encoded1 = lookup$1[base64.charCodeAt(i2)];
    encoded2 = lookup$1[base64.charCodeAt(i2 + 1)];
    encoded3 = lookup$1[base64.charCodeAt(i2 + 2)];
    encoded4 = lookup$1[base64.charCodeAt(i2 + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};
const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
const decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
const decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer$1) {
    const decoded = decode$1(data);
    return mapBinary(decoded, binaryType);
  } else {
    return { base64: true, data };
  }
};
const mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;
    case "arraybuffer":
    default:
      return data;
  }
};
const SEPARATOR = String.fromCharCode(30);
const encodePayload = (packets, callback) => {
  const length2 = packets.length;
  const encodedPackets = new Array(length2);
  let count = 0;
  packets.forEach((packet, i2) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i2] = encodedPacket;
      if (++count === length2) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
const decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i2 = 0; i2 < encodedPackets.length; i2++) {
    const decodedPacket = decodePacket(encodedPackets[i2], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
const protocol$1 = 4;
function Emitter(obj) {
  if (obj)
    return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function(event, fn) {
  function on2() {
    this.off(event, on2);
    fn.apply(this, arguments);
  }
  on2.fn = fn;
  this.on(event, on2);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks)
    return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i2 = 0; i2 < callbacks.length; i2++) {
    cb = callbacks[i2];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i2, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function(event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
  for (var i2 = 1; i2 < arguments.length; i2++) {
    args[i2 - 1] = arguments[i2];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
      callbacks[i2].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function(event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function(event) {
  return !!this.listeners(event).length;
};
const globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
  }
}
const BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0, length2 = 0;
  for (let i2 = 0, l = str.length; i2 < l; i2++) {
    c = str.charCodeAt(i2);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i2++;
      length2 += 4;
    }
  }
  return length2;
}
class TransportError extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
}
class Transport extends Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.socket = opts.socket;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    this.readyState = "opening";
    this.doOpen();
    return this;
  }
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    }
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data) {
    const packet = decodePacket(data, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
  pause(onPause) {
  }
}
const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {};
let seed = 0, i = 0, prev;
function encode$1(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function yeast() {
  const now = encode$1(+new Date());
  if (now !== prev)
    return seed = 0, prev = now;
  return now + "." + encode$1(seed++);
}
for (; i < length; i++)
  map[alphabet[i]] = i;
function encode(obj) {
  let str = "";
  for (let i2 in obj) {
    if (obj.hasOwnProperty(i2)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
    }
  }
  return str;
}
function decode(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i2 = 0, l = pairs.length; i2 < l; i2++) {
    let pair = pairs[i2].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}
let value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {
}
const hasCORS = value;
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
}
function empty() {
}
const hasXHR2 = function() {
  const xhr2 = new XHR({
    xdomain: false
  });
  return null != xhr2.responseType;
}();
class Polling extends Transport {
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = "https:" === location.protocol;
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function() {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function() {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data) {
    const callback = (packet) => {
      if ("opening" === this.readyState && packet.type === "open") {
        this.onOpen();
      }
      if ("close" === packet.type) {
        this.onClose({ description: "transport closed by the server" });
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data, this.socket.binaryType).forEach(callback);
    if ("closed" !== this.readyState) {
      this.polling = false;
      this.emitReserved("pollComplete");
      if ("open" === this.readyState) {
        this.poll();
      }
    }
  }
  doClose() {
    const close = () => {
      this.write([{ type: "close" }]);
    };
    if ("open" === this.readyState) {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data) => {
      this.doWrite(data, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";
    if (false !== this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    if (this.opts.port && ("https" === schema && Number(this.opts.port) !== 443 || "http" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    const encodedQuery = encode(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  request(opts = {}) {
    Object.assign(opts, { xd: this.xd, xs: this.xs }, this.opts);
    return new Request(this.uri(), opts);
  }
  doWrite(data, fn) {
    const req = this.request({
      method: "POST",
      data
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
}
class Request extends Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = false !== opts.async;
    this.data = void 0 !== opts.data ? opts.data : null;
    this.create();
  }
  create() {
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr2 = this.xhr = new XHR(opts);
    try {
      xhr2.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          xhr2.setDisableHeaderCheck && xhr2.setDisableHeaderCheck(true);
          for (let i2 in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i2)) {
              xhr2.setRequestHeader(i2, this.opts.extraHeaders[i2]);
            }
          }
        }
      } catch (e) {
      }
      if ("POST" === this.method) {
        try {
          xhr2.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {
        }
      }
      try {
        xhr2.setRequestHeader("Accept", "*/*");
      } catch (e) {
      }
      if ("withCredentials" in xhr2) {
        xhr2.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr2.timeout = this.opts.requestTimeout;
      }
      xhr2.onreadystatechange = () => {
        if (4 !== xhr2.readyState)
          return;
        if (200 === xhr2.status || 1223 === xhr2.status) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr2.status === "number" ? xhr2.status : 0);
          }, 0);
        }
      };
      xhr2.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  cleanup(fromError) {
    if ("undefined" === typeof this.xhr || null === this.xhr) {
      return;
    }
    this.xhr.onreadystatechange = empty;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {
      }
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  onLoad() {
    const data = this.xhr.responseText;
    if (data !== null) {
      this.emitReserved("data", data);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  abort() {
    this.cleanup();
  }
}
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i2 in Request.requests) {
    if (Request.requests.hasOwnProperty(i2)) {
      Request.requests[i2].abort();
    }
  }
}
const nextTick = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb) => Promise.resolve().then(cb);
  } else {
    return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
  }
})();
const WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
const usingBrowserWebSocket = true;
const defaultBinaryType = "arraybuffer";
const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
class WS extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i2 = 0; i2 < packets.length; i2++) {
      const packet = packets[i2];
      const lastPacket = i2 === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data) => {
        const opts = {};
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data);
          }
        } catch (e) {
        }
        if (lastPacket) {
          nextTick(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";
    if (this.opts.port && ("wss" === schema && Number(this.opts.port) !== 443 || "ws" === schema && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    const encodedQuery = encode(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  check() {
    return !!WebSocket;
  }
}
const transports = {
  websocket: WS,
  polling: Polling
};
const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
const parts = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function parse(str) {
  const src = str, b = str.indexOf("["), e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re.exec(str || ""), uri = {}, i2 = 14;
  while (i2--) {
    uri[parts[i2]] = m[i2] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
  if (path.slice(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.slice(-1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data[$1] = $2;
    }
  });
  return data;
}
class Socket$1 extends Emitter {
  constructor(uri, opts = {}) {
    super();
    this.writeBuffer = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query)
        opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      addTrailingSlash: true,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
    if (typeof this.opts.query === "string") {
      this.opts.query = decode(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        this.beforeunloadEventListener = () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        };
        addEventListener("beforeunload", this.beforeunloadEventListener, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol$1;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new transports[name](opts);
  }
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket$1.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (0 === this.transports.length) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (reason) => this.onClose("transport close", reason));
  }
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket$1.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{ type: "ping", data: "probe" }]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if ("pong" === msg.type && "probe" === msg.data) {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          Socket$1.priorWebsocketSuccess = "websocket" === transport.name;
          this.transport.pause(() => {
            if (failed)
              return;
            if ("closed" === this.readyState)
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{ type: "upgrade" }]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  onOpen() {
    this.readyState = "open";
    Socket$1.priorWebsocketSuccess = "websocket" === this.transport.name;
    this.emitReserved("open");
    this.flush();
    if ("open" === this.readyState && this.opts.upgrade) {
      let i2 = 0;
      const l = this.upgrades.length;
      for (; i2 < l; i2++) {
        this.probe(this.upgrades[i2]);
      }
    }
  }
  onPacket(packet) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    }
  }
  onHandshake(data) {
    this.emitReserved("handshake", data);
    this.id = data.sid;
    this.transport.query.sid = data.sid;
    this.upgrades = this.filterUpgrades(data.upgrades);
    this.pingInterval = data.pingInterval;
    this.pingTimeout = data.pingTimeout;
    this.maxPayload = data.maxPayload;
    this.onOpen();
    if ("closed" === this.readyState)
      return;
    this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (0 === this.writeBuffer.length) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
      const data = this.writeBuffer[i2].data;
      if (data) {
        payloadSize += byteLength(data);
      }
      if (i2 > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i2);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  sendPacket(type, data, options, fn) {
    if ("function" === typeof data) {
      fn = data;
      data = void 0;
    }
    if ("function" === typeof options) {
      fn = options;
      options = null;
    }
    if ("closing" === this.readyState || "closed" === this.readyState) {
      return;
    }
    options = options || {};
    options.compress = false !== options.compress;
    const packet = {
      type,
      data,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if ("opening" === this.readyState || "open" === this.readyState) {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  onError(err) {
    Socket$1.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  onClose(reason, description) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("beforeunload", this.beforeunloadEventListener, false);
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i2 = 0;
    const j = upgrades.length;
    for (; i2 < j; i2++) {
      if (~this.transports.indexOf(upgrades[i2]))
        filteredUpgrades.push(upgrades[i2]);
    }
    return filteredUpgrades;
  }
}
Socket$1.protocol = protocol$1;
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (null == uri)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if ("/" === uri.charAt(0)) {
      if ("/" === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if ("undefined" !== typeof loc) {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = parse(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}
const withNativeArrayBuffer = typeof ArrayBuffer === "function";
const isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
const toString = Object.prototype.toString;
const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i2 = 0, l = obj.length; i2 < l; i2++) {
      if (hasBinary(obj[i2])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return { packet: pack, buffers };
}
function _deconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (isBinary(data)) {
    const placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i2 = 0; i2 < data.length; i2++) {
      newData[i2] = _deconstructPacket(data[i2], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data)
    return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i2 = 0; i2 < data.length; i2++) {
      data[i2] = _reconstructPacket(data[i2], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}
const protocol = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
class Encoder {
  constructor(replacer) {
    this.replacer = replacer;
  }
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
}
class Decoder extends Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i2 = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i2 + 1;
      while (str.charAt(++i2) !== "-" && i2 != str.length) {
      }
      const buf = str.substring(start, i2);
      if (buf != Number(buf) || str.charAt(i2) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i2 + 1)) {
      const start = i2 + 1;
      while (++i2) {
        const c = str.charAt(i2);
        if ("," === c)
          break;
        if (i2 === str.length)
          break;
      }
      p.nsp = str.substring(start, i2);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i2 + 1);
    if ("" !== next && Number(next) == next) {
      const start = i2 + 1;
      while (++i2) {
        const c = str.charAt(i2);
        if (null == c || Number(c) != c) {
          --i2;
          break;
        }
        if (i2 === str.length)
          break;
      }
      p.id = Number(str.substring(start, i2 + 1));
    }
    if (str.charAt(++i2)) {
      const payload = this.tryParse(str.substr(i2));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return typeof payload === "object";
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || typeof payload === "object";
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && payload.length > 0;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
}
class BinaryReconstructor {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
}
var parser = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  protocol,
  get PacketType() {
    return PacketType;
  },
  Encoder,
  Decoder
}, Symbol.toStringTag, { value: "Module" }));
function on(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}
const RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
class Socket extends Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.recovered = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this._queue = [];
    this._queueSeq = 0;
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    this._opts = Object.assign({}, opts);
    if (this.io._autoConnect)
      this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs)
      return;
    const io = this.io;
    this.subs = [
      on(io, "open", this.onopen.bind(this)),
      on(io, "packet", this.onpacket.bind(this)),
      on(io, "error", this.onerror.bind(this)),
      on(io, "close", this.onclose.bind(this))
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if ("open" === this.io._readyState)
      this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
      this._addToQueue(args);
      return this;
    }
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if ("function" === typeof args[args.length - 1]) {
      const id = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id, ack);
      packet.id = id;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket)
      ;
    else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id, ack) {
    var _a;
    const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
    if (timeout === void 0) {
      this.acks[id] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id];
      for (let i2 = 0; i2 < this.sendBuffer.length; i2++) {
        if (this.sendBuffer[i2].id === id) {
          this.sendBuffer.splice(i2, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  emitWithAck(ev, ...args) {
    const withErr = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
    return new Promise((resolve, reject) => {
      args.push((arg1, arg2) => {
        if (withErr) {
          return arg1 ? reject(arg1) : resolve(arg2);
        } else {
          return resolve(arg1);
        }
      });
      this.emit(ev, ...args);
    });
  }
  _addToQueue(args) {
    let ack;
    if (typeof args[args.length - 1] === "function") {
      ack = args.pop();
    }
    const packet = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: false,
      args,
      flags: Object.assign({ fromQueue: true }, this.flags)
    };
    args.push((err, ...responseArgs) => {
      if (packet !== this._queue[0]) {
        return;
      }
      const hasError = err !== null;
      if (hasError) {
        if (packet.tryCount > this._opts.retries) {
          this._queue.shift();
          if (ack) {
            ack(err);
          }
        }
      } else {
        this._queue.shift();
        if (ack) {
          ack(null, ...responseArgs);
        }
      }
      packet.pending = false;
      return this._drainQueue();
    });
    this._queue.push(packet);
    this._drainQueue();
  }
  _drainQueue(force = false) {
    if (!this.connected || this._queue.length === 0) {
      return;
    }
    const packet = this._queue[0];
    if (packet.pending && !force) {
      return;
    }
    packet.pending = true;
    packet.tryCount++;
    this.flags = packet.flags;
    this.emit.apply(this, packet.args);
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    if (typeof this.auth == "function") {
      this.auth((data) => {
        this._sendConnectPacket(data);
      });
    } else {
      this._sendConnectPacket(this.auth);
    }
  }
  _sendConnectPacket(data) {
    this.packet({
      type: PacketType.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
    });
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          this.onconnect(packet.data.sid, packet.data.pid);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    if (null != packet.id) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
    if (this._pid && args.length && typeof args[args.length - 1] === "string") {
      this._lastOffset = args[args.length - 1];
    }
  }
  ack(id) {
    const self2 = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      self2.packet({
        type: PacketType.ACK,
        id,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if ("function" === typeof ack) {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    }
  }
  onconnect(id, pid) {
    this.id = id;
    this.recovered = pid && this._pid === pid;
    this._pid = pid;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
    this._drainQueue(true);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      this.packet({ type: PacketType.DISCONNECT });
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener === listeners[i2]) {
          listeners.splice(i2, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i2 = 0; i2 < listeners.length; i2++) {
        if (listener === listeners[i2]) {
          listeners.splice(i2, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
}
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min) {
  this.ms = min;
};
Backoff.prototype.setMax = function(max) {
  this.max = max;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};
class Manager extends Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && "object" === typeof uri) {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v;
    return this;
  }
  reconnectionAttempts(v) {
    if (v === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v;
    return this;
  }
  reconnectionDelay(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v);
    return this;
  }
  randomizationFactor(v) {
    var _a;
    if (v === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v);
    return this;
  }
  reconnectionDelayMax(v) {
    var _a;
    if (v === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v);
    return this;
  }
  timeout(v) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket$1(this.uri, this.opts);
    const socket2 = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on(socket2, "open", function() {
      self2.onopen();
      fn && fn();
    });
    const errorSub = on(socket2, "error", (err) => {
      self2.cleanup();
      self2._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        self2.maybeReconnectOnOpen();
      }
    });
    if (false !== this._timeout) {
      const timeout = this._timeout;
      if (timeout === 0) {
        openSubDestroy();
      }
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket2.close();
        socket2.emit("error", new Error("timeout"));
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket2 = this.engine;
    this.subs.push(on(socket2, "ping", this.onping.bind(this)), on(socket2, "data", this.ondata.bind(this)), on(socket2, "error", this.onerror.bind(this)), on(socket2, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data) {
    try {
      this.decoder.add(data);
    } catch (e) {
      this.onclose("parse error", e);
    }
  }
  ondecoded(packet) {
    nextTick(() => {
      this.emitReserved("packet", packet);
    }, this.setTimeoutFn);
  }
  onerror(err) {
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket2 = this.nsps[nsp];
    if (!socket2) {
      socket2 = new Socket(this, nsp, opts);
      this.nsps[nsp] = socket2;
    } else if (this._autoConnect && !socket2.active) {
      socket2.connect();
    }
    return socket2;
  }
  _destroy(socket2) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket3 = this.nsps[nsp];
      if (socket3.active) {
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i2 = 0; i2 < encodedPackets.length; i2++) {
      this.engine.write(encodedPackets[i2], packet.options);
    }
  }
  cleanup() {
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine)
      this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self2 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self2.skipReconnect)
          return;
        this.emitReserved("reconnect_attempt", self2.backoff.attempts);
        if (self2.skipReconnect)
          return;
        self2.open((err) => {
          if (err) {
            self2._reconnecting = false;
            self2.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self2.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
}
const cache = {};
function lookup(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source = parsed.source;
  const id = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id] && path in cache[id]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source, opts);
  } else {
    if (!cache[id]) {
      cache[id] = new Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup, {
  Manager,
  Socket,
  io: lookup,
  connect: lookup
});
class SocketIOService {
  constructor() {
    __publicField(this, "socket");
    let url2 = "";
    {
      url2 = `https://${window.location.hostname}`;
    }
    this.socket = lookup(url2, { transports: ["websocket", "polling"] });
  }
}
const socket = new SocketIOService().socket;
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  style: { "max-width": "100%", "max-height": "50px" }
}, null, -1);
const _hoisted_2 = {
  key: 0,
  class: "text-center q-pa-md bg-accent"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "q-mt-md" }, "Your session has timed out.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppLayout",
  setup(__props) {
    const { user } = useMixinSecurity();
    const $q = useQuasar();
    const isLocked = ref(false);
    const bus = inject("bus");
    const geolocationEnabled = ref(true);
    const hideGeolocationMessage = ref(!!localStorage.getItem("hideGeolocationMessage"));
    const common = useMixinCommon();
    setInterval(() => {
      isLocked.value = !!(user.value && user.value.lastRequest && moment().diff(user.value.lastRequest, "minutes") >= 120);
    }, 1e3);
    const logout = () => {
      window.location.href = "/api/auth/logout?from=portal";
    };
    const login = () => {
      document.location.reload();
    };
    const checkGeolocation = async () => {
      const currentLoc = await getLocationPromise();
      if (!currentLoc.lat || !currentLoc.lng) {
        geolocationEnabled.value = false;
      } else {
        geolocationEnabled.value = true;
      }
    };
    const dismissGeolocationEnabled = () => {
      localStorage.setItem("hideGeolocationMessage", "1");
      hideGeolocationMessage.value = true;
    };
    socket.on("newReleasePortal", () => {
      setTimeout(() => {
        $q.notify({
          icon: "warning",
          message: "A new version is available<br/>Please complete any work in progress and refresh",
          html: true,
          color: "primary",
          multiLine: true,
          timeout: 0,
          actions: [
            {
              label: "Refresh",
              color: "white",
              rounded: true,
              handler: () => {
                window.location.reload();
              }
            }
          ]
        });
      }, 5e3);
    });
    onMounted(async () => {
      socket.on("connect", () => {
        console.log("Socket connected");
        if (user.value && user.value.id) {
          socket.emit("authRoom", user.value.id);
        }
      });
      socket.on("hookContractor", (data) => {
        console.log("hookContractor", data);
        if (data && data.emit) {
          bus.emit(data.emit, data);
        }
      });
      await checkGeolocation();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_router_view = resolveComponent("router-view");
      return unref(user) && unref(user).id ? (openBlock(), createBlock(QLayout, {
        key: 0,
        view: "lHh LpR fFf",
        class: "bg-page-background"
      }, {
        default: withCtx(() => [
          createVNode(QHeader, null, {
            default: withCtx(() => [
              createVNode(QToolbar, { style: { "height": "65px" } }, {
                default: withCtx(() => [
                  createVNode(_component_router_link, {
                    to: { name: "appDashboard" },
                    class: "link"
                  }, {
                    default: withCtx(() => [
                      _hoisted_1
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$3, { class: "q-ml-md" }),
                  createVNode(QSpace),
                  createVNode(QBtn, {
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(openURL)("https://support.teamlaundrylady.co/support/tickets/new")),
                    icon: "sym_o_help",
                    flat: "",
                    round: "",
                    class: "q-mr-xs",
                    title: "Contact support"
                  }),
                  createVNode(QBtn, {
                    to: { name: "orders" },
                    flat: "",
                    round: "",
                    icon: "format_list_bulleted",
                    class: "q-mr-xs",
                    title: "All Bookings"
                  }),
                  createVNode(QBtn, {
                    icon: "event",
                    title: _ctx.$t("order.namePlural"),
                    to: { name: "order-calendar" },
                    flat: "",
                    round: "",
                    class: "q-mr-xs"
                  }, null, 8, ["title"]),
                  createVNode(QBtn, {
                    icon: "shopping_cart",
                    title: "Order supplies",
                    flat: "",
                    round: "",
                    class: "q-mr-xs",
                    onClick: _cache[1] || (_cache[1] = ($event) => {
                      var _a;
                      return unref(openURL)(((_a = unref(common)) == null ? void 0 : _a.operating_country) === "aud" ? "https://teamlaundrylady.co/account/login" : "https://www.teamlaundrylady.co.nz/");
                    })
                  }),
                  createVNode(QBtn, {
                    flat: "",
                    round: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(QAvatar, { size: "32px" }, {
                        default: withCtx(() => [
                          createVNode(QImg, { src: "/api/user/useravatar?fetch=thumb" })
                        ]),
                        _: 1
                      }),
                      createVNode(QMenu, null, {
                        default: withCtx(() => [
                          createVNode(QList, null, {
                            default: withCtx(() => [
                              withDirectives((openBlock(), createBlock(QItem, {
                                to: { name: "contractor-edit" },
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Settings")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, {
                                onClick: _cache[2] || (_cache[2] = ($event) => logout()),
                                clickable: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Sign Out")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })), [
                                [ClosePopup]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QAjaxBar, {
                color: "accent",
                size: "3px"
              }),
              !geolocationEnabled.value && !hideGeolocationMessage.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
                createVNode(QIcon, {
                  name: "warning",
                  size: "20px"
                }),
                createTextVNode(" Access to the location service has been disabled on this device. Some features won't work correctly until you enable access. "),
                createBaseVNode("a", {
                  onClick: _cache[3] || (_cache[3] = ($event) => dismissGeolocationEnabled()),
                  class: "link"
                }, "DISMISS")
              ])) : createCommentVNode("", true),
              createVNode(_component_router_view)
            ]),
            _: 1
          }),
          createVNode(_sfc_main$2),
          createVNode(_sfc_main$7),
          createVNode(_sfc_main$1),
          createVNode(QDialog, {
            modelValue: isLocked.value,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isLocked.value = $event),
            persistent: ""
          }, {
            default: withCtx(() => [
              createVNode(QCard, { class: "modal-sm" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, { class: "text-center" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$8),
                      _hoisted_3,
                      createVNode(QBtn, {
                        onClick: _cache[4] || (_cache[4] = ($event) => login()),
                        color: "primary",
                        label: "Sign In",
                        rounded: ""
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
