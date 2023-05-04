import { A as defineComponent, r as ref, B as reactive, o as onMounted, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, M as QCardSection, q as createBaseVNode, aI as toDisplayString, S as QBtn, Q as QCard, n as createElementBlock, U as unref, F as Fragment, be as renderList, R as createTextVNode, y as createCommentVNode } from "./index.3359169e.js";
import { Q as QBreadcrumbsEl, a as QBreadcrumbs } from "./QBreadcrumbs.c3ad3454.js";
import { Q as QBtnGroup } from "./QBtnGroup.49dad4cf.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.73389b03.js";
import { Q as QList } from "./QList.95271f43.js";
import { Q as QCircularProgress } from "./QCircularProgress.30ae0c17.js";
import { Q as QPage } from "./QPage.dfb4b3fb.js";
import { m as moment, a as api } from "./axios.cc17e3e5.js";
import { u as useQuasar } from "./use-quasar.a76bcee3.js";
import { _ as _sfc_main$1 } from "./DateField.d02947bd.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { a as currencyFormat, C as getDateRange, o as dbDateDisplay } from "./help.5154fe45.js";
import { G as GChart } from "./index.2a013cbf.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.5f6642b6.js";
import "./format.91cb2860.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.678cb922.js";
const _hoisted_1 = { class: "text-h6 q-mb-md" };
const _hoisted_2 = { class: "row q-col-gutter-md" };
const _hoisted_3 = { class: "col-xs-12 col-sm-5" };
const _hoisted_4 = { class: "col-xs-12 col-sm-5" };
const _hoisted_5 = { class: "col-xs-12 col-sm-2" };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { class: "row q-col-gutter-md" };
const _hoisted_8 = { class: "col-xs-12 col-sm-9" };
const _hoisted_9 = { style: { "min-height": "200px" } };
const _hoisted_10 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_11 = { class: "col-xs-12 col-sm-6" };
const _hoisted_12 = { class: "text-h5" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", null, "Revenue in Period", -1);
const _hoisted_14 = { class: "col-xs-12 col-sm-6" };
const _hoisted_15 = { class: "text-h5" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", null, "Orders", -1);
const _hoisted_17 = { class: "text-h6" };
const _hoisted_18 = { class: "col-xs-12 col-sm-3" };
const _hoisted_19 = { class: "text-h5" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", null, "All Time Revenue", -1);
const _hoisted_21 = { class: "text-center q-pt-md" };
const _hoisted_22 = { class: "q-pa-sm text-caption" };
const _hoisted_23 = { class: "text-center q-pt-md" };
const _hoisted_24 = { class: "q-pa-sm text-caption" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderOverview",
  setup(__props) {
    const data = ref();
    const dataChart = ref();
    const i8n = useI18n();
    const chartOptions = ref({
      title: `${i8n.t("order.namePlural")} History`,
      height: 200,
      backgroundColor: { fill: "transparent" }
    });
    const $q = useQuasar();
    const search = reactive({ start: moment().startOf("isoWeek").format("DD/MM/YYYY"), end: moment().endOf("isoWeek").format("DD/MM/YYYY") });
    const populateDateRange = (val) => {
      const dates = getDateRange(val);
      search.start = dates.start;
      search.end = dates.end;
    };
    const getReport = () => {
      $q.loading.show({ message: "Fetching order data..." });
      api.post("/order/reporting/overview", search).then((response) => {
        data.value = response.data;
        dataChart.value = [["Week", "Amount"]];
        for (const d of response.data.dateRange.history) {
          dataChart.value.push([d.week, d.total]);
        }
        data.value.dateRange.history = data.value.dateRange.history.reverse();
        $q.loading.hide();
      }).catch((error) => {
        useMixinDebug(error);
        $q.loading.hide();
      });
    };
    onMounted(() => {
      getReport();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { padding: "" }, {
        default: withCtx(() => [
          createVNode(QBreadcrumbs, { class: "q-mb-md q-mt-md" }, {
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
                label: "Reporting",
                to: { name: "reporting" }
              }),
              createVNode(QBreadcrumbsEl, {
                label: _ctx.$t("order.namePlural")
              }, null, 8, ["label"])
            ]),
            _: 1
          }),
          createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, toDisplayString(_ctx.$t("order.namePlural")) + " Overview", 1),
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("div", _hoisted_3, [
                      createVNode(_sfc_main$1, {
                        modelValue: search.start,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.start = $event),
                        label: "Start",
                        dense: true,
                        outlined: true
                      }, null, 8, ["modelValue"]),
                      createVNode(QBtnGroup, {
                        flat: "",
                        class: "q-mt-xs"
                      }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            flat: "",
                            onClick: _cache[1] || (_cache[1] = ($event) => populateDateRange("t")),
                            label: "T",
                            color: "primary",
                            title: "Today"
                          }),
                          createVNode(QBtn, {
                            flat: "",
                            onClick: _cache[2] || (_cache[2] = ($event) => populateDateRange("w")),
                            label: "W",
                            color: "primary",
                            title: "Week"
                          }),
                          createVNode(QBtn, {
                            flat: "",
                            onClick: _cache[3] || (_cache[3] = ($event) => populateDateRange("m")),
                            label: "M",
                            color: "primary",
                            title: "Month"
                          }),
                          createVNode(QBtn, {
                            flat: "",
                            onClick: _cache[4] || (_cache[4] = ($event) => populateDateRange("y")),
                            label: "Y",
                            color: "primary",
                            title: "Year"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_4, [
                      createVNode(_sfc_main$1, {
                        modelValue: search.end,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => search.end = $event),
                        label: "End",
                        dense: true,
                        outlined: true
                      }, null, 8, ["modelValue"])
                    ]),
                    createBaseVNode("div", _hoisted_5, [
                      createVNode(QBtn, {
                        onClick: _cache[6] || (_cache[6] = ($event) => getReport()),
                        label: "Submit",
                        color: "primary"
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          data.value && dataChart.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createVNode(unref(GChart), {
                    type: "LineChart",
                    data: dataChart.value,
                    options: chartOptions.value,
                    class: "q-mb-md"
                  }, null, 8, ["data", "options"])
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(QCard, { class: "bg-secondary text-white text-center" }, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_12, toDisplayString(unref(currencyFormat)(data.value.dateRange.total)), 1),
                            _hoisted_13
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(QCard, { class: "bg-secondary text-white text-center" }, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_15, toDisplayString(data.value.dateRange.count), 1),
                            _hoisted_16
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode(QList, {
                  bordered: "",
                  separator: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(data.value.dateRange.history, (t) => {
                      return openBlock(), createBlock(QItem, {
                        key: t.week
                      }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createBaseVNode("div", null, [
                                createBaseVNode("div", _hoisted_17, toDisplayString(t.week), 1),
                                createTextVNode(" " + toDisplayString(unref(dbDateDisplay)(t.start)) + " -> " + toDisplayString(unref(dbDateDisplay)(t.end)), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, {
                            side: "",
                            class: "text-h6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(currencyFormat)(t.total)), 1)
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
              createBaseVNode("div", _hoisted_18, [
                createVNode(QCard, { class: "bg-positive text-white q-mb-md" }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, { class: "text-center" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_19, toDisplayString(unref(currencyFormat)(data.value.allTime.total)), 1),
                        _hoisted_20
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(QCard, { class: "bg-seamless q-mb-md" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_21, [
                      createVNode(QCircularProgress, {
                        value: parseFloat(data.value.retainedRebooked.retainedPercentage),
                        color: "primary",
                        size: "64px",
                        "track-color": "grey-4",
                        "show-value": "",
                        title: data.value.retainedRebooked.retained
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_22, toDisplayString(data.value.retainedRebooked.retainedPercentage) + "%", 1)
                        ]),
                        _: 1
                      }, 8, ["value", "title"])
                    ]),
                    createVNode(QCardSection, { class: "text-center" }, {
                      default: withCtx(() => [
                        createTextVNode(" Retained ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(QCard, { class: "bg-seamless q-mb-md" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_23, [
                      createVNode(QCircularProgress, {
                        value: parseFloat(data.value.retainedRebooked.rebookedPercentage),
                        color: "primary",
                        size: "64px",
                        "track-color": "grey-4",
                        "show-value": "",
                        title: data.value.retainedRebooked.rebooked
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_24, toDisplayString(data.value.retainedRebooked.rebookedPercentage) + "%", 1)
                        ]),
                        _: 1
                      }, 8, ["value", "title"])
                    ]),
                    createVNode(QCardSection, { class: "text-center" }, {
                      default: withCtx(() => [
                        createTextVNode(" Rebooked ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
