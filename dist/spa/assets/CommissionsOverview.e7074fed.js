import { A as defineComponent, r as ref, B as reactive, o as onMounted, J as resolveComponent, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, M as QCardSection, q as createBaseVNode, S as QBtn, Q as QCard, n as createElementBlock, U as unref, aF as toDisplayString, F as Fragment, bi as renderList, y as createCommentVNode, R as createTextVNode } from "./index.3eea7960.js";
import { Q as QBreadcrumbsEl, a as QBreadcrumbs } from "./QBreadcrumbs.f2fe87a9.js";
import { Q as QBtnGroup } from "./QBtnGroup.cef273d2.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.621084f7.js";
import { Q as QList } from "./QList.acfa1549.js";
import { Q as QPage } from "./QPage.ade328d2.js";
import { m as moment, a as api } from "./axios.a37557cf.js";
import { u as useQuasar } from "./use-quasar.4fc54c30.js";
import { _ as _sfc_main$2 } from "./UserAvatar.bc604393.js";
import { _ as _sfc_main$1 } from "./DateField.52929768.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { a as currencyFormat, C as getDateRange } from "./help.79cd30dc.js";
import { G as GChart } from "./index.63f8b8f4.js";
import "./format.aadc6b26.js";
import "./ClosePopup.da21502b.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, " Commissions Overview", -1);
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
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", null, "Paid in Period", -1);
const _hoisted_14 = { class: "col-xs-12 col-sm-6" };
const _hoisted_15 = { class: "text-h5" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", null, "Earners", -1);
const _hoisted_17 = { class: "col-xs-12 col-sm-3" };
const _hoisted_18 = { class: "text-h5" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", null, "Total Commissions Paid", -1);
const _hoisted_20 = { class: "text-h5" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", null, "Total Commissions Owing", -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 q-mb-md" }, "Top Earners", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CommissionsOverview",
  setup(__props) {
    const data = ref();
    const dataOwing = ref();
    const dataChart = ref();
    const chartOptions = ref({
      title: "Commission Payment History",
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
      $q.loading.show({ message: "Fetching commission data..." });
      api.post("/user/contractor/reporting/commissionsoverview", search).then((response) => {
        data.value = response.data;
        dataChart.value = [["Week", "Amount"]];
        for (const d of response.data.dateRange.history) {
          dataChart.value.push([d.week, d.amount]);
        }
        $q.loading.hide();
      }).catch((error) => {
        useMixinDebug(error);
        $q.loading.hide();
      });
    };
    onMounted(() => {
      getReport();
      api.post("/user/contractor/reporting/commissionsowing").then((response) => {
        dataOwing.value = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
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
              createVNode(QBreadcrumbsEl, { label: "Commissions Overview" })
            ]),
            _: 1
          }),
          createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_1,
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
                            createBaseVNode("div", _hoisted_15, toDisplayString(data.value.dateRange.top.length), 1),
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
                    (openBlock(true), createElementBlock(Fragment, null, renderList(data.value.dateRange.top, (t) => {
                      return openBlock(), createBlock(QItem, {
                        key: t.contractor.id
                      }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$2, {
                                user: t.contractor
                              }, null, 8, ["user"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(_component_router_link, {
                                to: { name: "contractor-dashboard", params: { id: t.contractor.id } },
                                class: "link text-h6",
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(t.contractor.fullname), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, {
                            side: "",
                            class: "text-h6"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(currencyFormat)(t.amount)), 1)
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
              createBaseVNode("div", _hoisted_17, [
                createVNode(QCard, { class: "bg-positive text-white q-mb-md" }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, { class: "text-center" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_18, toDisplayString(unref(currencyFormat)(data.value.allTime.total)), 1),
                        _hoisted_19
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                dataOwing.value ? (openBlock(), createBlock(QCard, {
                  key: 0,
                  class: "bg-negative text-white q-mb-md"
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, { class: "text-center" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_20, toDisplayString(unref(currencyFormat)(dataOwing.value.total.total)), 1),
                        _hoisted_21
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(QCard, { class: "bg-seamless" }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        _hoisted_22,
                        createVNode(QList, {
                          separator: "",
                          class: "bg-white"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(data.value.allTime.top, (t) => {
                              return openBlock(), createBlock(QItem, {
                                key: t.contractor.id
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$2, {
                                        user: t.contractor
                                      }, null, 8, ["user"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_router_link, {
                                        to: { name: "contractor-dashboard", params: { id: t.contractor.id } },
                                        class: "link",
                                        target: "_blank"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(t.contractor.fullname), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["to"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(QItemSection, {
                                    side: "",
                                    class: "text-h6"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(currencyFormat)(t.amount)), 1)
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
