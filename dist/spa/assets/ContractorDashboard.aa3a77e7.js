import { S as createComponent, ap as useFormProps, r as ref, g as computed, w as watch, aB as stopAndPrevent, b8 as position, bw as useFormAttrs, ao as hDir, j as getCurrentInstance, h, C as defineComponent, o as onMounted, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, Q as QCard, ac as createTextVNode, H as withDirectives, P as QBtn, L as QCardSection, F as Fragment, ab as renderList, aa as createBlock, ad as toDisplayString, af as QDialog, q as createBaseVNode, t as normalizeClass, z as createCommentVNode, R as unref, ak as useRoute, i as inject, N as QIcon, M as QInput, ae as QCardActions } from "./index.9b8e3a41.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.850a2912.js";
import { Q as QLinearProgress } from "./QLinearProgress.555c5d4d.js";
import { Q as QSpace } from "./QSpace.c5fd7305.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.ee9152ee.js";
import { Q as QToolbar } from "./QToolbar.095c3e59.js";
import { u as useCircularCommonProps, Q as QCircularProgress } from "./QCircularProgress.0ef61ddf.js";
import { Q as QItemSection, a as QItem } from "./selection.1e8dc3ac.js";
import { Q as QList } from "./QList.d693d19d.js";
import { C as ClosePopup } from "./ClosePopup.4af4f8bb.js";
import { m as moment, a as api } from "./axios.24410139.js";
import { T as TouchPan } from "./TouchPan.cda5b99f.js";
import { b as between, n as normalizeToInterval } from "./format.de7e9769.js";
import { Q as QItemLabel } from "./QItemLabel.06bc1152.js";
import { _ as _sfc_main$3 } from "./DateField.d2c6485d.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { k as currencyFormat, l as hourOptions, m as dayOptions } from "./help.74fea236.js";
import { Q as QMarkupTable } from "./QMarkupTable.fdb584a0.js";
import "./touch.9135741d.js";
import "./QDate.f074af53.js";
import "./use-render-cache.3aae9b27.js";
import "./QPopupProxy.556fb986.js";
import "./QMenu.2f87fb0a.js";
import "./use-quasar.cf0b3beb.js";
const keyCodes = [34, 37, 40, 33, 39, 38];
const commonPropsName = Object.keys(useCircularCommonProps);
var QKnob = createComponent({
  name: "QKnob",
  props: {
    ...useFormProps,
    ...useCircularCommonProps,
    modelValue: {
      type: Number,
      required: true
    },
    innerMin: Number,
    innerMax: Number,
    step: {
      type: Number,
      default: 1,
      validator: (v) => v >= 0
    },
    tabindex: {
      type: [Number, String],
      default: 0
    },
    disable: Boolean,
    readonly: Boolean
  },
  emits: ["update:modelValue", "change", "dragValue"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const model = ref(props.modelValue);
    const dragging = ref(false);
    const innerMin = computed(() => isNaN(props.innerMin) === true || props.innerMin < props.min ? props.min : props.innerMin);
    const innerMax = computed(() => isNaN(props.innerMax) === true || props.innerMax > props.max ? props.max : props.innerMax);
    let centerPosition;
    function normalizeModel() {
      model.value = props.modelValue === null ? innerMin.value : between(props.modelValue, innerMin.value, innerMax.value);
      updateValue(true);
    }
    watch(
      () => `${props.modelValue}|${innerMin.value}|${innerMax.value}`,
      normalizeModel
    );
    normalizeModel();
    const editable = computed(() => props.disable === false && props.readonly === false);
    const classes = computed(
      () => "q-knob non-selectable" + (editable.value === true ? " q-knob--editable" : props.disable === true ? " disabled" : "")
    );
    const decimals = computed(() => (String(props.step).trim().split(".")[1] || "").length);
    const step = computed(() => props.step === 0 ? 1 : props.step);
    const instantFeedback = computed(() => props.instantFeedback === true || dragging.value === true);
    const onEvents = $q.platform.is.mobile === true ? computed(() => editable.value === true ? { onClick } : {}) : computed(() => editable.value === true ? {
      onMousedown,
      onClick,
      onKeydown,
      onKeyup
    } : {});
    const attrs = computed(() => editable.value === true ? { tabindex: props.tabindex } : { [`aria-${props.disable === true ? "disabled" : "readonly"}`]: "true" });
    const circularProps = computed(() => {
      const agg = {};
      commonPropsName.forEach((name) => {
        agg[name] = props[name];
      });
      return agg;
    });
    function pan(event) {
      if (event.isFinal) {
        updatePosition(event.evt, true);
        dragging.value = false;
      } else if (event.isFirst) {
        updateCenterPosition();
        dragging.value = true;
        updatePosition(event.evt);
      } else {
        updatePosition(event.evt);
      }
    }
    const directives = computed(() => {
      return [[
        TouchPan,
        pan,
        void 0,
        { prevent: true, stop: true, mouse: true }
      ]];
    });
    function updateCenterPosition() {
      const { top, left, width, height } = proxy.$el.getBoundingClientRect();
      centerPosition = {
        top: top + height / 2,
        left: left + width / 2
      };
    }
    function onMousedown(evt) {
      updateCenterPosition();
      updatePosition(evt);
    }
    function onClick(evt) {
      updateCenterPosition();
      updatePosition(evt, true);
    }
    function onKeydown(evt) {
      if (!keyCodes.includes(evt.keyCode)) {
        return;
      }
      stopAndPrevent(evt);
      const stepVal = ([34, 33].includes(evt.keyCode) ? 10 : 1) * step.value, offset = [34, 37, 40].includes(evt.keyCode) ? -stepVal : stepVal;
      model.value = between(
        parseFloat((model.value + offset).toFixed(decimals.value)),
        innerMin.value,
        innerMax.value
      );
      updateValue();
    }
    function updatePosition(evt, change) {
      const pos = position(evt), height = Math.abs(pos.top - centerPosition.top), distance = Math.sqrt(
        height ** 2 + Math.abs(pos.left - centerPosition.left) ** 2
      );
      let angle = Math.asin(height / distance) * (180 / Math.PI);
      if (pos.top < centerPosition.top) {
        angle = centerPosition.left < pos.left ? 90 - angle : 270 + angle;
      } else {
        angle = centerPosition.left < pos.left ? angle + 90 : 270 - angle;
      }
      if ($q.lang.rtl === true) {
        angle = normalizeToInterval(-angle - props.angle, 0, 360);
      } else if (props.angle) {
        angle = normalizeToInterval(angle - props.angle, 0, 360);
      }
      if (props.reverse === true) {
        angle = 360 - angle;
      }
      let newModel = props.min + angle / 360 * (props.max - props.min);
      if (step.value !== 0) {
        const modulo = newModel % step.value;
        newModel = newModel - modulo + (Math.abs(modulo) >= step.value / 2 ? (modulo < 0 ? -1 : 1) * step.value : 0);
        newModel = parseFloat(newModel.toFixed(decimals.value));
      }
      newModel = between(newModel, innerMin.value, innerMax.value);
      emit("dragValue", newModel);
      if (model.value !== newModel) {
        model.value = newModel;
      }
      updateValue(change);
    }
    function onKeyup(evt) {
      if (keyCodes.includes(evt.keyCode)) {
        updateValue(true);
      }
    }
    function updateValue(change) {
      props.modelValue !== model.value && emit("update:modelValue", model.value);
      change === true && emit("change", model.value);
    }
    const formAttrs = useFormAttrs(props);
    function getNameInput() {
      return h("input", formAttrs.value);
    }
    return () => {
      const data = {
        class: classes.value,
        role: "slider",
        "aria-valuemin": innerMin.value,
        "aria-valuemax": innerMax.value,
        "aria-valuenow": props.modelValue,
        ...attrs.value,
        ...circularProps.value,
        value: model.value,
        instantFeedback: instantFeedback.value,
        ...onEvents.value
      };
      const child = {
        default: slots.default
      };
      if (editable.value === true && props.name !== void 0) {
        child.internal = getNameInput;
      }
      return hDir(
        QCircularProgress,
        data,
        child,
        "knob",
        editable.value,
        () => directives.value
      );
    };
  }
});
const _hoisted_1$2 = { class: "col-shrink" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Powersensor Usage", -1);
const _hoisted_3$1 = { class: "col-shrink" };
const _hoisted_4$1 = { class: "flex" };
const _hoisted_5$1 = { class: "flex q-col-gutter-xs no-wrap" };
const _hoisted_6$1 = { class: "col-xs-1" };
const _hoisted_7$1 = { class: "col-shrink" };
const _hoisted_8$1 = { class: "col-shrink" };
const _hoisted_9$1 = { class: "col-xs-1" };
const _hoisted_10$1 = { key: 0 };
const _hoisted_11$1 = {
  key: 1,
  class: "row q-col-gutter-md items-center"
};
const _hoisted_12$1 = { class: "col-xs-12 col-md-3 text-center" };
const _hoisted_13$1 = { class: "text-h4 text-bold" };
const _hoisted_14$1 = { class: "text-caption" };
const _hoisted_15$1 = {
  key: 0,
  class: "q-mt-xs"
};
const _hoisted_16$1 = { class: "col-xs-12 col-md-9" };
const _hoisted_17$1 = { class: "row q-col-gutter-md" };
const _hoisted_18$1 = { class: "text-center" };
const _hoisted_19$1 = { class: "text-h6 text-center q-mt-xs" };
const _hoisted_20$1 = { class: "text-center" };
const _hoisted_21$1 = { class: "text-center q-mt-xs" };
const _hoisted_22$1 = {
  key: 2,
  class: "q-mt-md"
};
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("pre", null, null, -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PowersensorStats",
  setup(__props) {
    const loading = ref(false);
    const data = ref();
    const search = ref({ start: moment().startOf("isoWeek").format("DD/MM/YYYY"), end: moment().endOf("isoWeek").format("DD/MM/YYYY") });
    const showHidden = ref(false);
    const showDownloadModal = ref(false);
    const getData = () => {
      loading.value = true;
      api.post("/public/powersensor/usage", search.value).then((response) => {
        data.value = response.data;
        loading.value = false;
      }).catch((error) => {
        useMixinDebug(error);
      });
      loading.value = false;
    };
    const hideDevice = (id) => {
      api.post("/public/powersensordevicehidden/add", { id }).then(() => {
        getData();
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const unHideDevice = (id) => {
      api.delete(`/public/powersensordevicehidden/${id}`).then(() => {
        getData();
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const downloadFyData = (year) => {
      document.location.href = `/api/public/powersensor/usagefy/${year}`;
    };
    const weekNav = (dir) => {
      if (dir === "prev") {
        search.value.start = moment(search.value.start, "DD/MM/YYYY").subtract(1, "week").startOf("isoWeek").format("DD/MM/YYYY");
        search.value.end = moment(search.value.end, "DD/MM/YYYY").subtract(1, "week").endOf("isoWeek").format("DD/MM/YYYY");
      }
      if (dir === "next") {
        search.value.start = moment(search.value.start, "DD/MM/YYYY").add(1, "week").startOf("isoWeek").format("DD/MM/YYYY");
        search.value.end = moment(search.value.end, "DD/MM/YYYY").add(1, "week").endOf("isoWeek").format("DD/MM/YYYY");
      }
      getData();
    };
    onMounted(() => {
      getData();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QDialog, {
          modelValue: showDownloadModal.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showDownloadModal.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "modal" }, {
              default: withCtx(() => [
                createVNode(QToolbar, { class: "bg-primary text-white" }, {
                  default: withCtx(() => [
                    createVNode(QToolbarTitle, null, {
                      default: withCtx(() => [
                        createTextVNode(" Powersensor Financial Year Data ")
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode(QBtn, {
                      round: "",
                      dense: "",
                      icon: "close",
                      flat: ""
                    }, null, 512), [
                      [ClosePopup]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QList, { separator: "" }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(data.value.fy, (y) => {
                          return withDirectives((openBlock(), createBlock(QItem, {
                            onClick: ($event) => downloadFyData(y.value),
                            clickable: "",
                            key: y
                          }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(y.label) + " Financial Year", 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])), [
                            [ClosePopup]
                          ]);
                        }), 128))
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
        }, 8, ["modelValue"]),
        createVNode(QCard, { class: "q-mt-lg" }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(["flex q-mb-lg", { "no-wrap": !_ctx.$q.screen.xs }])
                }, [
                  createBaseVNode("div", _hoisted_1$2, [
                    _hoisted_2$1,
                    createBaseVNode("div", {
                      class: normalizeClass({ "q-mb-md": _ctx.$q.screen.xs })
                    }, [
                      createBaseVNode("a", {
                        onClick: _cache[1] || (_cache[1] = ($event) => showDownloadModal.value = true),
                        class: "link"
                      }, "Click here"),
                      createTextVNode(" to download FY power usage data.")
                    ], 2)
                  ]),
                  createVNode(QSpace),
                  createBaseVNode("div", _hoisted_3$1, [
                    createBaseVNode("div", _hoisted_4$1, [
                      createVNode(QSpace),
                      createBaseVNode("div", _hoisted_5$1, [
                        createBaseVNode("div", _hoisted_6$1, [
                          createVNode(QBtn, {
                            onClick: _cache[2] || (_cache[2] = ($event) => weekNav("prev")),
                            icon: "chevron_left",
                            round: "",
                            flat: "",
                            disable: loading.value
                          }, null, 8, ["disable"])
                        ]),
                        createBaseVNode("div", _hoisted_7$1, [
                          createVNode(_sfc_main$3, {
                            modelValue: search.value.start,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => search.value.start = $event),
                            label: "Start",
                            dense: true,
                            outlined: true,
                            disable: true
                          }, null, 8, ["modelValue"])
                        ]),
                        createBaseVNode("div", _hoisted_8$1, [
                          createVNode(_sfc_main$3, {
                            modelValue: search.value.end,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => search.value.end = $event),
                            label: "End",
                            dense: true,
                            outlined: true,
                            disable: true
                          }, null, 8, ["modelValue"])
                        ]),
                        createBaseVNode("div", _hoisted_9$1, [
                          createVNode(QBtn, {
                            onClick: _cache[5] || (_cache[5] = ($event) => weekNav("next")),
                            icon: "chevron_right",
                            round: "",
                            flat: "",
                            disable: loading.value
                          }, null, 8, ["disable"])
                        ])
                      ])
                    ])
                  ])
                ], 2),
                !loading.value && (!data.value || !data.value.visible.length) ? (openBlock(), createElementBlock("div", _hoisted_10$1, "No Powersensor data found.")) : createCommentVNode("", true),
                data.value && data.value.visible.length ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
                  createBaseVNode("div", _hoisted_12$1, [
                    createBaseVNode("div", _hoisted_13$1, toDisplayString(unref(currencyFormat)(data.value.totals.visible_cost)), 1),
                    createTextVNode(" *Approx cost "),
                    createBaseVNode("div", _hoisted_14$1, toDisplayString(data.value.totals.visible.toFixed(4)) + " kw", 1),
                    !_ctx.$q.screen.xs && data.value.hiddenDevices.length ? (openBlock(), createElementBlock("div", _hoisted_15$1, [
                      createVNode(QBtn, {
                        onClick: _cache[6] || (_cache[6] = ($event) => showHidden.value = !showHidden.value),
                        label: "Show hidden devices",
                        color: "grey",
                        flat: "",
                        rounded: "",
                        size: "sm"
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_16$1, [
                    createBaseVNode("div", _hoisted_17$1, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(data.value.visible, (d) => {
                        return openBlock(), createElementBlock("div", {
                          class: "col-xs-12 col-md-3",
                          key: d.id
                        }, [
                          createBaseVNode("div", _hoisted_18$1, [
                            createVNode(QKnob, {
                              modelValue: d.per,
                              color: "green",
                              "track-color": "green-1",
                              "show-value": "",
                              size: "55px",
                              readonly: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(d.per.toFixed(0)) + "%", 1)
                              ]),
                              _: 2
                            }, 1032, ["modelValue"])
                          ]),
                          createBaseVNode("div", _hoisted_19$1, toDisplayString(unref(currencyFormat)(d.cost)), 1),
                          createBaseVNode("div", _hoisted_20$1, toDisplayString(d.label), 1),
                          createBaseVNode("div", _hoisted_21$1, [
                            createVNode(QBtn, {
                              onClick: ($event) => hideDevice(d.id),
                              color: "grey",
                              flat: "",
                              size: "sm",
                              rounded: "",
                              label: "Hide"
                            }, null, 8, ["onClick"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ])) : createCommentVNode("", true),
                showHidden.value && data.value.hiddenDevices.length ? (openBlock(), createElementBlock("div", _hoisted_22$1, [
                  createVNode(QList, {
                    bordered: "",
                    separator: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, { header: "" }, {
                        default: withCtx(() => [
                          createTextVNode("HIDDEN DEVICES")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(data.value.hiddenDevices, (h2) => {
                        return openBlock(), createBlock(QItem, {
                          key: h2.id
                        }, {
                          default: withCtx(() => [
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(h2.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QItemSection, { side: "" }, {
                              default: withCtx(() => [
                                createVNode(QBtn, {
                                  onClick: ($event) => unHideDevice(h2.id),
                                  color: "grey",
                                  label: "Unhide",
                                  flat: "",
                                  rounded: ""
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
                  })
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _hoisted_23$1
      ], 64);
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("th", null, null, -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserRosterView",
  setup(__props) {
    const roster = ref();
    const isActive = (h2, d) => {
      if (!roster.value) {
        return false;
      }
      return roster.value.find((o) => {
        if (o.start_time && o.end_time) {
          return o.day === d && h2 >= o.start_time && h2 <= o.end_time;
        }
        return false;
      });
    };
    onMounted(() => {
      api.get("/public/userroster/index").then((response) => {
        roster.value = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(QMarkupTable, {
          dense: "",
          separator: "cell",
          flat: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                _hoisted_1$1,
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(hourOptions), (h2, hindex) => {
                  return openBlock(), createElementBlock("th", { key: hindex }, toDisplayString(h2.label), 1);
                }), 128))
              ])
            ]),
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dayOptions), (d, dindex) => {
                return openBlock(), createElementBlock("tr", { key: dindex }, [
                  createBaseVNode("td", null, toDisplayString(d.label.slice(0, 1)), 1),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(hourOptions), (h2, hindex) => {
                    return openBlock(), createElementBlock("td", {
                      key: hindex,
                      class: normalizeClass({ "bg-positive": isActive(h2.value, d.value) })
                    }, null, 2);
                  }), 128))
                ]);
              }), 128))
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "q-mt-lg text-center"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mt-md q-mb-lg" }, " Loading profile ", -1);
const _hoisted_4 = { key: 2 };
const _hoisted_5 = { class: "row q-col-gutter-md q-mb-lg" };
const _hoisted_6 = { class: "col-xs-12 col-sm-6" };
const _hoisted_7 = { class: "flex items-center" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Weekly Target", -1);
const _hoisted_9 = {
  class: "text-center",
  style: { "height": "65px" }
};
const _hoisted_10 = { class: "text-center text-h6 q-mt-sm" };
const _hoisted_11 = { class: "col-xs-12 col-sm-6" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Commissions", -1);
const _hoisted_13 = { class: "row q-col-gutter-md" };
const _hoisted_14 = { class: "col-xs-6" };
const _hoisted_15 = { class: "text-h6 text-center" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, "Owing", -1);
const _hoisted_17 = { class: "col-xs-6" };
const _hoisted_18 = { class: "text-h6 text-center" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, " Paid ", -1);
const _hoisted_20 = { class: "col-xs-12 col-sm-6" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Current Capacity", -1);
const _hoisted_22 = { class: "row q-col-gutter-md" };
const _hoisted_23 = { class: "text-center" };
const _hoisted_24 = { class: "q-mb-sm" };
const _hoisted_25 = { class: "col-xs-12 col-sm-6" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Invoicing", -1);
const _hoisted_27 = { class: "row q-col-gutter-md" };
const _hoisted_28 = { class: "col-xs-6" };
const _hoisted_29 = { class: "text-h6 text-center" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, "Invoiced", -1);
const _hoisted_31 = { class: "col-xs-6" };
const _hoisted_32 = { class: "text-h6 text-center" };
const _hoisted_33 = { class: "text-center" };
const _hoisted_34 = { key: 0 };
const _hoisted_35 = { class: "text-negative" };
const _hoisted_36 = { class: "col-xs-12 col-sm-6" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Bookings", -1);
const _hoisted_38 = { class: "row q-col-gutter-md" };
const _hoisted_39 = { class: "col-xs-6" };
const _hoisted_40 = { class: "text-h6 text-center" };
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, "Total", -1);
const _hoisted_42 = { class: "col-xs-6" };
const _hoisted_43 = { class: "text-h6 text-center" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, " Recurring ", -1);
const _hoisted_45 = { class: "col-xs-12 col-sm-6" };
const _hoisted_46 = { class: "text-h6 q-mb-md" };
const _hoisted_47 = { class: "row q-col-gutter-md" };
const _hoisted_48 = { class: "col-xs-6" };
const _hoisted_49 = { class: "text-center" };
const _hoisted_50 = { class: "q-mt-sm" };
const _hoisted_51 = { class: "col-xs-6" };
const _hoisted_52 = { class: "text-center" };
const _hoisted_53 = { class: "q-mt-sm" };
const _hoisted_54 = { class: "text-h6" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://support.teamlaundrylady.co/support/tickets/new",
    class: "link",
    target: "_blank"
  }, "Click here to let us know if you need to make a change.")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorDashboard",
  props: {
    model: null
  },
  setup(__props) {
    const route = useRoute();
    const loading = ref(true);
    const bus = inject("bus");
    const showUnpaids = ref(false);
    const weeklyTarget = ref();
    const showWeeklyTargetInput = ref(false);
    const dashboard = ref();
    const recurringOrders = ref();
    const getDashboard = () => {
      loading.value = true;
      api.get("/public/user/contractor/dashboard").then((response) => {
        dashboard.value = response.data;
        loading.value = false;
      }).catch((error) => {
        loading.value = false;
        useMixinDebug(error);
      });
    };
    const getRecurringOrders = () => {
      api.get("/public/user/contractor/recurring").then((response) => {
        recurringOrders.value = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const updateWeeklyTarget = () => {
      console.log(weeklyTarget.value);
      if (weeklyTarget.value) {
        api.put("/public/user/contractor/weeklytarget", { contractor_target: weeklyTarget.value }).then(() => {
          bus.emit("getContractor");
          getDashboard();
          showWeeklyTargetInput.value = false;
          weeklyTarget.value = null;
        }).catch((error) => {
          useMixinDebug(error);
        });
      }
    };
    onMounted(() => {
      getDashboard();
      getRecurringOrders();
    });
    watch(() => route.params.id, (newVal) => {
      if (route.name === "contractor-dashboard") {
        if (newVal) {
          getDashboard();
          getRecurringOrders();
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        !_ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(QBreadcrumbs, { class: "q-mb-md" }, {
            separator: withCtx(() => [
              createVNode(QIcon, {
                size: "1.5em",
                name: "chevron_right"
              })
            ]),
            default: withCtx(() => [
              createVNode(QBreadcrumbsEl, {
                label: "Home",
                icon: "home",
                to: { name: "appDashboard" }
              }),
              createVNode(QBreadcrumbsEl, {
                label: "Profile",
                to: { name: "orders" }
              })
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(QLinearProgress, {
            indeterminate: "",
            color: "primary",
            height: "2px"
          }),
          _hoisted_3
        ])) : createCommentVNode("", true),
        !loading.value && dashboard.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createVNode(QCard, {
                class: "bg-accent fit",
                style: { "height": "160px" }
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_7, [
                        _hoisted_8,
                        createVNode(QSpace),
                        createVNode(QBtn, {
                          icon: "edit",
                          flat: "",
                          round: "",
                          size: "sm",
                          onClick: _cache[0] || (_cache[0] = ($event) => showWeeklyTargetInput.value = true)
                        }),
                        createVNode(QDialog, {
                          modelValue: showWeeklyTargetInput.value,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => showWeeklyTargetInput.value = $event)
                        }, {
                          default: withCtx(() => [
                            createVNode(QCard, { class: "modal-sm" }, {
                              default: withCtx(() => [
                                createVNode(QToolbar, { class: "bg-primary text-white" }, {
                                  default: withCtx(() => [
                                    createVNode(QToolbarTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Update Weekly Target")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(QSpace),
                                    withDirectives(createVNode(QBtn, {
                                      icon: "close",
                                      round: "",
                                      dense: "",
                                      flat: ""
                                    }, null, 512), [
                                      [ClosePopup]
                                    ])
                                  ]),
                                  _: 1
                                }),
                                createVNode(QCardSection, null, {
                                  default: withCtx(() => [
                                    createVNode(QInput, {
                                      modelValue: weeklyTarget.value,
                                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => weeklyTarget.value = $event),
                                      autofocus: "",
                                      outlined: "",
                                      label: "Enter a weekly target",
                                      type: "number"
                                    }, null, 8, ["modelValue"])
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
                                    createTextVNode(),
                                    createVNode(QBtn, {
                                      onClick: _cache[2] || (_cache[2] = ($event) => updateWeeklyTarget()),
                                      label: "Update",
                                      color: "primary",
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
                      createBaseVNode("div", _hoisted_9, [
                        dashboard.value.weeklyOrders.percentage ? (openBlock(), createBlock(QCircularProgress, {
                          key: 0,
                          value: dashboard.value.weeklyOrders.percentage,
                          size: "64px",
                          color: "primary",
                          "track-color": "pink-1"
                        }, null, 8, ["value"])) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("div", _hoisted_10, toDisplayString(unref(currencyFormat)(dashboard.value.weeklyOrders.sum)) + " / " + toDisplayString(unref(currencyFormat)(__props.model.contractor_target)), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(QCard, { class: "bg-secondary text-white fit" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _hoisted_12,
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("div", _hoisted_14, [
                          createBaseVNode("div", _hoisted_15, toDisplayString(unref(currencyFormat)(dashboard.value.totalCommissionsOwing.grandTotal)), 1),
                          _hoisted_16
                        ]),
                        createBaseVNode("div", _hoisted_17, [
                          createBaseVNode("div", _hoisted_18, toDisplayString(unref(currencyFormat)(dashboard.value.totalCommissionsPaid.grandTotal)), 1),
                          _hoisted_19
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_20, [
              createVNode(QCard, { class: "fit" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _hoisted_21,
                      createBaseVNode("div", _hoisted_22, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(dashboard.value.capacity, (c) => {
                          return openBlock(), createElementBlock("div", {
                            class: "col-xs-6",
                            key: c.name
                          }, [
                            createBaseVNode("div", _hoisted_23, [
                              createBaseVNode("div", _hoisted_24, [
                                c.per ? (openBlock(), createBlock(QCircularProgress, {
                                  key: 0,
                                  value: parseFloat(c.per),
                                  size: "64px",
                                  color: "secondary",
                                  "show-value": "",
                                  "track-color": "grey-3"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("small", null, toDisplayString(c.oc) + "/" + toDisplayString(c.cc), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"])) : createCommentVNode("", true),
                                !c.per ? (openBlock(), createBlock(QCircularProgress, {
                                  key: 1,
                                  value: 0,
                                  size: "64px",
                                  color: "secondary",
                                  "show-value": "",
                                  "track-color": "grey-3"
                                })) : createCommentVNode("", true)
                              ]),
                              createTextVNode(" " + toDisplayString(c.name), 1)
                            ])
                          ]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_25, [
              createVNode(QCard, { class: "fit" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _hoisted_26,
                      createBaseVNode("div", _hoisted_27, [
                        createBaseVNode("div", _hoisted_28, [
                          createBaseVNode("div", _hoisted_29, toDisplayString(unref(currencyFormat)(dashboard.value.totalOrdersTotalPrice[0].sum)), 1),
                          _hoisted_30
                        ]),
                        createBaseVNode("div", _hoisted_31, [
                          createBaseVNode("div", _hoisted_32, toDisplayString(unref(currencyFormat)(dashboard.value.totalOrdersTotalOwingGrand)), 1),
                          createBaseVNode("div", _hoisted_33, [
                            createBaseVNode("a", {
                              class: "link",
                              onClick: _cache[4] || (_cache[4] = ($event) => showUnpaids.value = !showUnpaids.value)
                            }, "Unpaids")
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  showUnpaids.value ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(QList, {
                        bordered: "",
                        separator: ""
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(dashboard.value.totalOrdersTotalOwingData, (u) => {
                            return openBlock(), createBlock(QItem, {
                              key: u.id
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createBaseVNode("strong", null, "Booking #" + toDisplayString(u.order.display_id), 1),
                                    u.team ? (openBlock(), createElementBlock("span", _hoisted_34, toDisplayString(u.team.name), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(QItemSection, { side: "" }, {
                                  default: withCtx(() => [
                                    createBaseVNode("span", _hoisted_35, toDisplayString(unref(currencyFormat)(u.grand_total_price)), 1),
                                    createTextVNode("Due: " + toDisplayString(u.due_date), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_36, [
              createVNode(QCard, { class: "fit" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _hoisted_37,
                      createBaseVNode("div", _hoisted_38, [
                        createBaseVNode("div", _hoisted_39, [
                          createBaseVNode("div", _hoisted_40, toDisplayString(dashboard.value.totalOrdersCount[0].count), 1),
                          _hoisted_41
                        ]),
                        createBaseVNode("div", _hoisted_42, [
                          createBaseVNode("div", _hoisted_43, toDisplayString(dashboard.value.totalOrdersCountRecurring[0].count), 1),
                          _hoisted_44
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_45, [
              createVNode(QCard, { class: "fit" }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_46, toDisplayString(_ctx.$t("team.namePlural")), 1),
                      createBaseVNode("div", _hoisted_47, [
                        createBaseVNode("div", _hoisted_48, [
                          createBaseVNode("div", _hoisted_49, [
                            dashboard.value.retainedRebooked.rebookedPercentage ? (openBlock(), createBlock(QCircularProgress, {
                              key: 0,
                              value: parseFloat(dashboard.value.retainedRebooked.rebookedPercentage),
                              size: "64px",
                              color: "positive",
                              "show-value": "",
                              "track-color": "grey-3"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(dashboard.value.retainedRebooked.rebooked), 1)
                              ]),
                              _: 1
                            }, 8, ["value"])) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_50, "Rebooked (" + toDisplayString(dashboard.value.retainedRebooked.rebookedPercentage) + "%)", 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_51, [
                          createBaseVNode("div", _hoisted_52, [
                            dashboard.value.retainedRebooked.retainedPercentage >= 0 ? (openBlock(), createBlock(QCircularProgress, {
                              key: 0,
                              value: parseFloat(dashboard.value.retainedRebooked.retainedPercentage),
                              size: "64px",
                              color: "positive",
                              "show-value": "",
                              "track-color": "grey-3"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(dashboard.value.retainedRebooked.retained), 1)
                              ]),
                              _: 1
                            }, 8, ["value"])) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_53, " Retained (" + toDisplayString(dashboard.value.retainedRebooked.retainedPercentage) + "%) ", 1)
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          createVNode(_sfc_main$2),
          createBaseVNode("div", _hoisted_54, "Current " + toDisplayString(_ctx.$t("schedule.name")), 1),
          _hoisted_55,
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, { rosterUser: __props.model }, null, 8, ["rosterUser"])
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export { _sfc_main as default };
