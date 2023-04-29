import { Q as QCircularProgress } from "./QCircularProgress.09563eb5.js";
import { A as defineComponent, i as inject, r as ref, g as computed, o as onMounted, E as onBeforeUnmount, m as openBlock, n as createElementBlock, l as createVNode, q as createBaseVNode, aF as toDisplayString, U as unref, L as withCtx, S as QBtn, F as Fragment, bi as renderList, y as createCommentVNode, K as createBlock, ad as useRoute, w as watch, Q as QCard, M as QCardSection, R as createTextVNode, O as QIcon, t as normalizeClass } from "./index.3eea7960.js";
import { h as hooks, a as api } from "./axios.a37557cf.js";
import { _ as _sfc_main$4 } from "./GlobalNotes.8ac97e18.js";
import { _ as _sfc_main$5 } from "./OrderListFormat.4a952eb6.js";
import { _ as _sfc_main$6 } from "./OrderRecurringBookingFormat.2c765cb3.js";
import { Q as QSpace } from "./QSpace.958769c9.js";
import { Q as QBtnGroup } from "./QBtnGroup.cef273d2.js";
import { Q as QBadge } from "./QBadge.0bbfff4d.js";
import { t as today, Q as QCalendarMonth } from "./index.esm.b06efdf8.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { c as confirmDelete, n as hourDisplay, a as currencyFormat } from "./help.79cd30dc.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./UserRosterScheduleCreate.9479f718.js";
import "./format.aadc6b26.js";
import "./QToolbarTitle.c5728a0a.js";
import "./QItemSection.621084f7.js";
import "./QList.acfa1549.js";
import "./UserAvatar.bc604393.js";
import "./StatusTag.787225a1.js";
import "./QSelect.1c9fa3ed.js";
import "./rtl.583477fb.js";
import "./ClosePopup.da21502b.js";
import "./index.esm.3393c8fb.js";
import "./helpers.1f44b1ff.js";
import "./DateField.52929768.js";
import "./use-quasar.4fc54c30.js";
const _hoisted_1$1 = { class: "flex items-center q-mb-sm" };
const _hoisted_2$1 = { class: "text-h7 text-primary" };
const _hoisted_3$1 = ["onMouseenter"];
const _hoisted_4$1 = {
  key: 0,
  style: { "display": "flex", "justify-content": "space-evenly", "flex-wrap": "wrap", "align-items": "center", "font-weight": "400", "font-size": "12px", "height": "auto" }
};
const _hoisted_5$1 = {
  key: 1,
  class: "text-center q-mt-sm"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserRosterScheduleManagement",
  props: {
    user: null
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const schedule = ref();
    const loading = ref(false);
    const currentHover = ref();
    const getSchedule = () => {
      loading.value = true;
      const start = hooks(selectedDate.value).subtract(1, "month").startOf("month").format("YYYY-MM-DD");
      const end = hooks(selectedDate.value).add(1, "month").endOf("month").format("YYYY-MM-DD");
      api.get(`/userrosterschedule/index?user_id=${props.user.id}&start=${start}&end=${end}`).then((response) => {
        schedule.value = response.data;
        loading.value = false;
      }).catch((error) => {
        useMixinDebug(error);
        loading.value = false;
      });
    };
    const selectedDate = ref(today());
    const calendarRef = ref();
    const selectedMonth = computed(() => {
      return hooks(selectedDate.value).format("MMMM YYYY");
    });
    const onToday = () => {
      if (calendarRef.value) {
        calendarRef.value.moveToToday();
        getSchedule();
      }
    };
    const onPrev = () => {
      if (calendarRef.value) {
        calendarRef.value.prev();
        getSchedule();
      }
    };
    const onNext = () => {
      if (calendarRef.value) {
        calendarRef.value.next();
        getSchedule();
      }
    };
    const isAfterToday = (timestamp) => {
      const today2 = hooks();
      const compare = hooks(timestamp.date);
      if (compare.isSameOrAfter(today2)) {
        return true;
      }
      return false;
    };
    const getEvents = (timestamp) => {
      if (!schedule.value) {
        return [];
      }
      const events = schedule.value.filter((o) => o.day === timestamp.date);
      if (!events)
        return [];
      return events;
    };
    const hasEvents = (timestamp) => {
      if (!schedule.value) {
        return [];
      }
      return schedule.value.filter((o) => o.day === timestamp.date).length > 0;
    };
    const editUserRosterSchedule = (id) => {
      bus.emit("editUserRosterSchedule", id);
    };
    const newUserRosterSchedule = (timestamp) => {
      confirmDelete("This will create a new entry for this day").onOk(() => {
        bus.emit("newUserRosterSchedule", { day: timestamp.date, user: props.user });
      });
    };
    onMounted(async () => {
      getSchedule();
      bus.on("getSchedule", () => {
        getSchedule();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getSchedule");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$2),
        createVNode(_sfc_main$3),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("span", _hoisted_2$1, toDisplayString(unref(selectedMonth)), 1),
          createVNode(QSpace),
          createVNode(QBtnGroup, null, {
            default: withCtx(() => [
              createVNode(QBtn, {
                onClick: _cache[0] || (_cache[0] = ($event) => onPrev()),
                icon: "chevron_left",
                color: "secondary"
              }),
              createVNode(QBtn, {
                onClick: _cache[1] || (_cache[1] = ($event) => onToday()),
                label: "Today",
                color: "secondary"
              }),
              createVNode(QBtn, {
                onClick: _cache[2] || (_cache[2] = ($event) => onNext()),
                icon: "chevron_right",
                color: "secondary"
              })
            ]),
            _: 1
          })
        ]),
        createVNode(unref(QCalendarMonth), {
          ref_key: "calendarRef",
          ref: calendarRef,
          modelValue: selectedDate.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedDate.value = $event),
          weekdays: [1, 2, 3, 4, 5, 6, 0],
          hoverable: "",
          bordered: "",
          animated: "",
          "day-min-height": 80,
          "day-height": 80,
          "month-label-size": "md",
          "date-align": "right"
        }, {
          day: withCtx(({ scope }) => [
            createBaseVNode("div", {
              onMouseenter: ($event) => currentHover.value = scope.timestamp.date,
              style: { "height": "100%" }
            }, [
              hasEvents(scope.timestamp) ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(getEvents(scope.timestamp), (event) => {
                  return openBlock(), createBlock(QBadge, {
                    key: event.time,
                    label: `${unref(hourDisplay)(event.start_time)} - ${unref(hourDisplay)(event.end_time)}`,
                    class: "q-mb-xs cursor-pointer",
                    onClick: ($event) => editUserRosterSchedule(event.id),
                    color: event.active ? "positive" : "negative"
                  }, null, 8, ["label", "onClick", "color"]);
                }), 128))
              ])) : createCommentVNode("", true),
              isAfterToday(scope.timestamp) && currentHover.value === scope.timestamp.date ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                createVNode(QBtn, {
                  onClick: ($event) => newUserRosterSchedule(scope.timestamp),
                  icon: "add_circle",
                  flat: "",
                  size: "sm",
                  dense: "",
                  label: _ctx.$t("schedule.create"),
                  color: "grey-6"
                }, null, 8, ["onClick", "label"])
              ])) : createCommentVNode("", true)
            ], 40, _hoisted_3$1)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "row q-col-gutter-md q-mb-lg" };
const _hoisted_3 = { class: "col-xs-12 col-sm-4" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Weekly Target", -1);
const _hoisted_5 = {
  class: "text-center",
  style: { "height": "65px" }
};
const _hoisted_6 = { class: "text-center q-mt-sm" };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { class: "col-xs-12 col-sm-4" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Commissions", -1);
const _hoisted_10 = { class: "row q-col-gutter-md" };
const _hoisted_11 = { class: "col-xs-12 col-sm-6" };
const _hoisted_12 = { class: "text-h6 text-center" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, "Owing", -1);
const _hoisted_14 = { class: "col-xs-12 col-sm-6" };
const _hoisted_15 = { class: "text-h6 text-center" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, " Paid ", -1);
const _hoisted_17 = { class: "col-xs-12 col-sm-4" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Statistics", -1);
const _hoisted_19 = { class: "row q-col-gutter-md" };
const _hoisted_20 = { class: "col-xs-12 col-sm-6" };
const _hoisted_21 = { class: "text-h6 text-center" };
const _hoisted_22 = { class: "text-center" };
const _hoisted_23 = { class: "col-xs-12 col-sm-6" };
const _hoisted_24 = { class: "text-h6 text-center" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center" }, " Total Revenue ", -1);
const _hoisted_26 = { class: "row q-col-gutter-md" };
const _hoisted_27 = { class: "col-xs-12 col-sm-6" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Awaiting Pickup", -1);
const _hoisted_29 = { key: 0 };
const _hoisted_30 = { class: "col-xs-12 col-sm-6" };
const _hoisted_31 = { class: "text-h6 q-mb-md" };
const _hoisted_32 = { key: 0 };
const _hoisted_33 = { class: "col-xs-12 col-sm-6" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "In Progress", -1);
const _hoisted_35 = { key: 0 };
const _hoisted_36 = { class: "col-xs-12 col-sm-6" };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Recently Completed", -1);
const _hoisted_38 = { key: 0 };
const _hoisted_39 = { class: "text-h5" };
const _hoisted_40 = { class: "q-mb-xl" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorDashboard",
  props: {
    model: null
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const dashboard = ref();
    const recurringOrders = ref();
    const getDashboard = () => {
      api.get(`/user/contractor/dashboard/${props.model.id}`).then((response) => {
        dashboard.value = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const getRecurringOrders = () => {
      api.get(`/user/contractor/recurring/${props.model.id}`).then((response) => {
        recurringOrders.value = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
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
      return __props.model.id && dashboard.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(QCard, {
              class: "bg-accent",
              style: { "height": "160px" }
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_4,
                    createBaseVNode("div", _hoisted_5, [
                      dashboard.value.weeklyOrders.percentage ? (openBlock(), createBlock(QCircularProgress, {
                        key: 0,
                        value: dashboard.value.weeklyOrders.percentage,
                        size: "64px",
                        color: "primary",
                        "track-color": "pink-1"
                      }, null, 8, ["value"])) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_6, [
                      createTextVNode(toDisplayString(unref(currencyFormat)(dashboard.value.weeklyOrders.sum)) + " / " + toDisplayString(unref(currencyFormat)(__props.model.contractor_target)) + " ", 1),
                      dashboard.value.weeklyOrders.diff === 0 ? (openBlock(), createElementBlock("span", _hoisted_7, "~")) : createCommentVNode("", true),
                      dashboard.value.weeklyOrders.diff < 0 ? (openBlock(), createBlock(QIcon, {
                        key: 1,
                        name: "arrow_downward",
                        color: "negative"
                      })) : createCommentVNode("", true),
                      dashboard.value.weeklyOrders.diff > 0 ? (openBlock(), createBlock(QIcon, {
                        key: 2,
                        name: "arrow_upward",
                        color: "positive"
                      })) : createCommentVNode("", true),
                      createTextVNode(),
                      dashboard.value.weeklyOrders.diff !== 0 ? (openBlock(), createElementBlock("span", {
                        key: 3,
                        class: normalizeClass({ "text-positive": dashboard.value.weeklyOrders.diff > 0, "text-negative": dashboard.value.weeklyOrders.diff < 0 })
                      }, toDisplayString(dashboard.value.weeklyOrders.diff) + "%", 3)) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_8, [
            createVNode(QCard, {
              class: "bg-secondary text-white",
              style: { "height": "160px" }
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_9,
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("div", _hoisted_12, toDisplayString(unref(currencyFormat)(dashboard.value.totalCommissionsOwing.grandTotal)), 1),
                        _hoisted_13
                      ]),
                      createBaseVNode("div", _hoisted_14, [
                        createBaseVNode("div", _hoisted_15, toDisplayString(unref(currencyFormat)(dashboard.value.totalCommissionsPaid.grandTotal)), 1),
                        _hoisted_16
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_17, [
            createVNode(QCard, {
              class: "bg-secondary text-white",
              style: { "height": "160px" }
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_18,
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("div", _hoisted_21, toDisplayString(dashboard.value.totalOrdersCount[0].count), 1),
                        createBaseVNode("div", _hoisted_22, "Total " + toDisplayString(_ctx.$t("order.namePlural")), 1)
                      ]),
                      createBaseVNode("div", _hoisted_23, [
                        createBaseVNode("div", _hoisted_24, toDisplayString(unref(currencyFormat)(dashboard.value.totalOrdersTotalPrice[0].sum ? parseFloat(dashboard.value.totalOrdersTotalPrice[0].sum) + parseFloat(dashboard.value.totalOrdersTotalPriceGst[0].sum) : 0)), 1),
                        _hoisted_25
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
        createBaseVNode("div", _hoisted_26, [
          createBaseVNode("div", _hoisted_27, [
            createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_28,
                    !dashboard.value.ordersConfirmed.length ? (openBlock(), createElementBlock("div", _hoisted_29, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                    createVNode(_sfc_main$5, {
                      orders: dashboard.value.ordersConfirmed,
                      "no-avatar": true
                    }, null, 8, ["orders"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_30, [
            createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_31, [
                      createVNode(QIcon, { name: "sync" }),
                      createTextVNode(" Recurring " + toDisplayString(_ctx.$t("order.namePlural")), 1)
                    ]),
                    !recurringOrders.value || !recurringOrders.value.length ? (openBlock(), createElementBlock("div", _hoisted_32, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                    recurringOrders.value ? (openBlock(), createBlock(_sfc_main$6, {
                      key: 1,
                      orders: recurringOrders.value,
                      "no-avatar": true
                    }, null, 8, ["orders"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_33, [
            createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_34,
                    !dashboard.value.ordersInprogress.length ? (openBlock(), createElementBlock("div", _hoisted_35, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                    createVNode(_sfc_main$5, {
                      orders: dashboard.value.ordersInprogress,
                      "no-avatar": true
                    }, null, 8, ["orders"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_36, [
            createVNode(QCard, { class: "bg-seamless q-mb-lg" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _hoisted_37,
                    !dashboard.value.ordersRecentCompleted.length ? (openBlock(), createElementBlock("div", _hoisted_38, "No " + toDisplayString(_ctx.$t("order.namePlural").toLowerCase()) + " found. ", 1)) : createCommentVNode("", true),
                    createVNode(_sfc_main$5, {
                      orders: dashboard.value.ordersRecentCompleted,
                      "no-avatar": true
                    }, null, 8, ["orders"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_39, "Current " + toDisplayString(_ctx.$t("schedule.name")), 1),
        createBaseVNode("p", null, "Below is the current schedule for the " + toDisplayString(_ctx.$t("contractor.name").toLowerCase()) + ".", 1),
        createBaseVNode("div", _hoisted_40, [
          createVNode(_sfc_main$1, { user: __props.model }, null, 8, ["user"])
        ]),
        createVNode(_sfc_main$4, {
          notable_type: "User",
          notable_id: __props.model.id,
          nobox: true
        }, null, 8, ["notable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
