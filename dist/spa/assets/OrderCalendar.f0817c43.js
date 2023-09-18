import { A as defineComponent, r as ref, I as useRouter, f as computed, o as onMounted, bw as resolveComponent, l as openBlock, J as createBlock, K as withCtx, s as normalizeClass, k as createVNode, N as QIcon, y as createCommentVNode, p as createBaseVNode, m as createElementBlock, aH as toDisplayString, R as unref, P as QBtn, Q as QCard, F as Fragment, bd as renderList, bu as QSeparator, q as normalizeStyle, D as nextTick } from "./index.6bc9da2c.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.ef3e1e55.js";
import { Q as QSpace } from "./QSpace.f6197ff3.js";
import { Q as QSelect } from "./QSelect.a5c2fbfb.js";
import { Q as QPage } from "./QPage.5f1b6dfd.js";
import { t as today, Q as QCalendarMonth } from "./index.esm.5cf44adb.js";
import { h as hooks, a as api } from "./axios.d0b87e4b.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { l as dbDateDisplay, h as hourBookingDisplay } from "./help.d97f77b7.js";
import "./selection.e81ada06.js";
import "./QItemLabel.c0748dc1.js";
import "./QMenu.e11d66d0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
const _hoisted_1 = { class: "row q-col-gutter-md q-mb-sm items-center" };
const _hoisted_2 = { class: "col-xs-12 col-md-8" };
const _hoisted_3 = {
  key: 0,
  class: "text-h7"
};
const _hoisted_4 = {
  key: 1,
  class: "text-h7"
};
const _hoisted_5 = {
  key: 2,
  class: "text-h7"
};
const _hoisted_6 = { class: "col-xs-12 col-md-4" };
const _hoisted_7 = { class: "flex" };
const _hoisted_8 = {
  key: 0,
  style: { "overflow": "auto" },
  class: "q-pa-sm"
};
const _hoisted_9 = ["onMouseenter"];
const _hoisted_10 = {
  key: 0,
  style: { "display": "flex", "justify-content": "space-evenly", "flex-wrap": "wrap", "align-items": "center", "font-weight": "400", "font-size": "12px" }
};
const _hoisted_11 = ["onClick"];
const _hoisted_12 = { class: "q-pa-sm" };
const _hoisted_13 = { key: 0 };
const _hoisted_14 = { key: 1 };
const _hoisted_15 = { class: "text-bold" };
const _hoisted_16 = { class: "flex" };
const _hoisted_17 = { key: 0 };
const _hoisted_18 = { class: "q-ml-sm" };
const _hoisted_19 = ["onClick"];
const _hoisted_20 = { class: "q-pa-sm" };
const _hoisted_21 = { key: 0 };
const _hoisted_22 = { key: 1 };
const _hoisted_23 = { class: "text-bold" };
const _hoisted_24 = { class: "flex" };
const _hoisted_25 = { key: 0 };
const _hoisted_26 = { class: "q-ml-sm" };
const _hoisted_27 = ["onClick"];
const _hoisted_28 = { class: "q-pa-sm" };
const _hoisted_29 = { key: 0 };
const _hoisted_30 = { key: 1 };
const _hoisted_31 = { class: "text-bold" };
const _hoisted_32 = { class: "flex" };
const _hoisted_33 = { key: 0 };
const _hoisted_34 = { class: "q-ml-sm" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderCalendar",
  setup(__props) {
    const orders = ref();
    const loading = ref(false);
    const currentHover = ref();
    const calendarView = ref("week");
    const router = useRouter();
    const selectedDate = ref(today());
    const calendarRef = ref();
    const selectedMonth = computed(() => {
      return hooks(selectedDate.value).format("MMMM YYYY");
    });
    const selectedWeek = computed(() => {
      return hooks(selectedDate.value).format("W - MMMM YYYY");
    });
    const getOrders = () => {
      loading.value = true;
      if (calendarView.value) {
        const unit = calendarView.value === "week" ? "week" : calendarView.value === "day" ? "day" : "month";
        const start = hooks(selectedDate.value).subtract(1, unit).startOf(unit).format("YYYY-MM-DD");
        const end = hooks(selectedDate.value).add(1, unit).endOf(unit).format("YYYY-MM-DD");
        api.post("/public/order/bookingcalendar", { start, end }).then((response) => {
          orders.value = response.data;
          loading.value = false;
        }).catch((error) => {
          useMixinDebug(error);
          loading.value = false;
        });
      }
    };
    const onToday = () => {
      if (calendarRef.value) {
        calendarRef.value.moveToToday();
        nextTick(() => {
          getOrders();
        });
      }
    };
    const onPrev = () => {
      if (calendarRef.value) {
        calendarRef.value.prev();
        nextTick(() => {
          getOrders();
        });
      }
    };
    const onNext = () => {
      if (calendarRef.value) {
        calendarRef.value.next();
        nextTick(() => {
          getOrders();
        });
      }
    };
    const getEvents = (timestamp) => {
      if (!orders.value) {
        return [];
      }
      const events = orders.value.filter((o) => hooks(o.scheduled_pickup_date, "DD/MM/YYYY").format("YYYY-MM-DD") === timestamp.date || hooks(o.scheduled_delivery_date, "DD/MM/YYYY").format("YYYY-MM-DD") === timestamp.date);
      if (!events)
        return [];
      return events;
    };
    const hasEvents = (timestamp) => {
      if (!orders.value) {
        return false;
      }
      return orders.value.filter((o) => {
        return hooks(o.scheduled_pickup_date, "DD/MM/YYYY").format("YYYY-MM-DD") === timestamp.date || hooks(o.scheduled_delivery_date, "DD/MM/YYYY").format("YYYY-MM-DD") === timestamp.date;
      }).length > 0;
    };
    const eventColor = (order) => {
      if (order.status === "cancelled") {
        return "bg-red text-white";
      }
      const isAfter = order.status !== "confirmed";
      let color = "bg-primary text-white";
      if (order.productcategories && order.productcategories.filter((q) => q.meta && q.meta.pivot_active).length === 1) {
        if (order.productcategories.find((o) => o.name === "Ironing" && o.meta && o.meta.pivot_active)) {
          color = "bg-yellow-8 text-white";
        }
        if (order.productcategories.find((o) => o.name === "Washing" && o.meta && o.meta.pivot_active)) {
          color = "bg-blue text-white";
        }
      }
      if (isAfter) {
        if (color === "bg-primary text-white") {
          color = "bg-pink-1";
        }
        if (color === "bg-blue text-white") {
          color = "bg-blue-1";
        }
        if (color === "bg-yellow-9 text-white") {
          color = "bg-yellow-1";
        }
      }
      return color;
    };
    const badgeStyles = (event, timeStartPos, timeDurationHeight, index) => {
      const s = {};
      if (timeDurationHeight) {
        s.top = index * 65 + "px";
        s.height = timeDurationHeight(event.duration) + "px";
      }
      s["align-items"] = "flex-start";
      return s;
    };
    const eventsMap = computed(() => {
      const map = {};
      if (!orders.value) {
        return map;
      }
      orders.value.forEach((order) => {
        const orderDate = hooks(order.scheduled_pickup_date, "DD/MM/YYYY").format("YYYY-MM-DD");
        if (!map[orderDate]) {
          map[orderDate] = [];
        }
        let timeStart = parseFloat(order.scheduled_pickup_time ? order.scheduled_pickup_time.split("-")[0] : "9");
        if (timeStart < 10) {
          timeStart = `0${timeStart}`;
        }
        order.time = `${timeStart}:00`;
        map[orderDate].push(order);
        if (order.scheduled_delivery_date) {
          const deliveryDate = hooks(order.scheduled_delivery_date, "DD/MM/YYYY").format("YYYY-MM-DD");
          if (!map[deliveryDate]) {
            map[deliveryDate] = [];
          }
          let timeStart2 = parseFloat(order.scheduled_delivery_time ? order.scheduled_delivery_time.split("-")[0] : "9");
          if (timeStart2 < 10) {
            timeStart2 = `0${timeStart2}`;
          }
          order.time = `${timeStart2}:00`;
          map[deliveryDate].push(order);
        }
      });
      return map;
    });
    const getWeekEvents = (dt) => {
      const events = eventsMap.value[dt] || [];
      if (events.length === 1) {
        events[0].side = "full";
      }
      return events;
    };
    const orderNav = (id) => {
      router.push({ name: "order-edit", params: { id } });
    };
    onMounted(() => {
      getOrders();
    });
    return (_ctx, _cache) => {
      const _component_q_calendar_day = resolveComponent("q-calendar-day");
      return openBlock(), createBlock(QPage, {
        padding: "",
        class: normalizeClass({ "q-pa-md": _ctx.$q.screen.xs })
      }, {
        default: withCtx(() => [
          !_ctx.$q.screen.xs ? (openBlock(), createBlock(QBreadcrumbs, {
            key: 0,
            class: "q-mb-md"
          }, {
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
                label: _ctx.$t("order.namePlural"),
                to: { name: "appDashboard" }
              }, null, 8, ["label"]),
              createVNode(QBreadcrumbsEl, { label: "Calendar" })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createBaseVNode("div", null, [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                calendarView.value === "week" ? (openBlock(), createElementBlock("span", _hoisted_3, "Week " + toDisplayString(unref(selectedWeek)), 1)) : createCommentVNode("", true),
                calendarView.value === "month" ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(selectedMonth)), 1)) : createCommentVNode("", true),
                calendarView.value === "day" ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(unref(dbDateDisplay)(selectedDate.value)), 1)) : createCommentVNode("", true),
                createVNode(QSpace)
              ]),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  !_ctx.$q.screen.xs ? (openBlock(), createBlock(QSpace, { key: 0 })) : createCommentVNode("", true),
                  createVNode(QSelect, {
                    modelValue: calendarView.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => calendarView.value = $event),
                    options: [{ label: "Week", value: "week" }, { label: "Month", value: "month" }, { label: "Day", value: "day" }],
                    "emit-value": "",
                    "map-options": "",
                    dense: "",
                    filled: "",
                    label: "View",
                    class: "q-mr-sm"
                  }, null, 8, ["modelValue"]),
                  _ctx.$q.screen.xs ? (openBlock(), createBlock(QSpace, { key: 1 })) : createCommentVNode("", true),
                  createVNode(QBtn, {
                    onClick: _cache[1] || (_cache[1] = ($event) => onPrev()),
                    icon: "chevron_left",
                    color: "secondary",
                    flat: "",
                    dense: "",
                    round: ""
                  }),
                  createVNode(QBtn, {
                    onClick: _cache[2] || (_cache[2] = ($event) => onToday()),
                    label: "Today",
                    color: "secondary",
                    flat: "",
                    rounded: ""
                  }),
                  createVNode(QBtn, {
                    onClick: _cache[3] || (_cache[3] = ($event) => onNext()),
                    icon: "chevron_right",
                    color: "secondary",
                    flat: "",
                    dense: "",
                    round: ""
                  })
                ])
              ])
            ]),
            !loading.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
              calendarView.value === "month" ? (openBlock(), createBlock(QCard, {
                key: 0,
                style: { "min-width": "1000px", "max-width": "100%" }
              }, {
                default: withCtx(() => [
                  createVNode(unref(QCalendarMonth), {
                    ref_key: "calendarRef",
                    ref: calendarRef,
                    modelValue: selectedDate.value,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedDate.value = $event),
                    weekdays: [1, 2, 3, 4, 5, 6, 0],
                    hoverable: "",
                    bordered: "",
                    "month-label-size": "md",
                    "date-align": "right"
                  }, {
                    day: withCtx(({ scope }) => [
                      createBaseVNode("div", {
                        onMouseenter: ($event) => currentHover.value = scope.timestamp.date,
                        style: { "height": "100%" }
                      }, [
                        hasEvents(scope.timestamp) ? (openBlock(), createElementBlock("div", _hoisted_10, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(getEvents(scope.timestamp), (event) => {
                            return openBlock(), createElementBlock("div", {
                              key: event.id,
                              class: normalizeClass(["full-width cursor-pointer", eventColor(event)]),
                              onClick: ($event) => orderNav(event.id),
                              style: { "font-size": "11px" }
                            }, [
                              createVNode(QSeparator, { dark: "" }),
                              createBaseVNode("div", _hoisted_12, [
                                unref(hooks)(scope.timestamp.date).isSame(unref(hooks)(event.scheduled_pickup_date, "DD/MM/YYYY")) || !event.scheduled_pickup_date ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(unref(hourBookingDisplay)(event.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                                unref(hooks)(scope.timestamp.date).isSame(unref(hooks)(event.scheduled_delivery_date, "DD/MM/YYYY")) && event.scheduled_pickup_date ? (openBlock(), createElementBlock("div", _hoisted_14, toDisplayString(unref(hourBookingDisplay)(event.scheduled_delivery_time)), 1)) : createCommentVNode("", true),
                                createBaseVNode("div", _hoisted_15, toDisplayString(event.team.name), 1),
                                createBaseVNode("div", _hoisted_16, [
                                  event.suburbpostcoderegion ? (openBlock(), createElementBlock("div", _hoisted_17, toDisplayString(event.suburbpostcoderegion.locality), 1)) : createCommentVNode("", true),
                                  createVNode(QSpace),
                                  createBaseVNode("div", _hoisted_18, [
                                    event.invoice && event.invoice.status !== "PAID" ? (openBlock(), createBlock(QIcon, {
                                      key: 0,
                                      name: "note",
                                      size: "14px",
                                      title: "Invoice Open"
                                    })) : createCommentVNode("", true),
                                    event.recurring_order ? (openBlock(), createBlock(QIcon, {
                                      key: 1,
                                      name: "sync",
                                      size: "14px",
                                      class: "q-ml-xs",
                                      title: "Recurring Booking"
                                    })) : createCommentVNode("", true)
                                  ])
                                ])
                              ])
                            ], 10, _hoisted_11);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ], 40, _hoisted_9)
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              calendarView.value === "week" ? (openBlock(), createBlock(QCard, {
                key: 1,
                style: { "min-width": "1000px", "max-width": "100%" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_q_calendar_day, {
                    ref_key: "calendarRef",
                    ref: calendarRef,
                    modelValue: selectedDate.value,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedDate.value = $event),
                    view: "week",
                    animated: "",
                    bordered: "",
                    "transition-next": "slide-left",
                    "transition-prev": "slide-right",
                    "no-active-date": "",
                    "interval-start": 6,
                    "interval-count": 18,
                    "interval-height": 65,
                    weekdays: [1, 2, 3, 4, 5, 6, 0]
                  }, {
                    "day-body": withCtx(({ scope: { timestamp, timeStartPos, timeDurationHeight } }) => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(getWeekEvents(timestamp.date), (event, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: event.id,
                          onClick: ($event) => orderNav(event.id),
                          class: normalizeClass(["order-event full-width", eventColor(event)]),
                          style: normalizeStyle([{ "font-size": "11px" }, badgeStyles(event, timeStartPos, timeDurationHeight, index)])
                        }, [
                          createVNode(QSeparator, { dark: "" }),
                          createBaseVNode("div", _hoisted_20, [
                            unref(hooks)(timestamp.date).isSame(unref(hooks)(event.scheduled_pickup_date, "DD/MM/YYYY")) || !event.scheduled_pickup_date ? (openBlock(), createElementBlock("div", _hoisted_21, toDisplayString(unref(hourBookingDisplay)(event.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                            unref(hooks)(timestamp.date).isSame(unref(hooks)(event.scheduled_delivery_date, "DD/MM/YYYY")) && event.scheduled_pickup_date ? (openBlock(), createElementBlock("div", _hoisted_22, toDisplayString(unref(hourBookingDisplay)(event.scheduled_delivery_time)), 1)) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_23, toDisplayString(event.team.name), 1),
                            createBaseVNode("div", _hoisted_24, [
                              event.suburbpostcoderegion ? (openBlock(), createElementBlock("div", _hoisted_25, toDisplayString(event.suburbpostcoderegion.locality), 1)) : createCommentVNode("", true),
                              createVNode(QSpace),
                              createBaseVNode("div", _hoisted_26, [
                                event.invoice && event.invoice.status !== "PAID" ? (openBlock(), createBlock(QIcon, {
                                  key: 0,
                                  name: "note",
                                  size: "14px",
                                  title: "Invoice Open"
                                })) : createCommentVNode("", true),
                                event.recurring_order ? (openBlock(), createBlock(QIcon, {
                                  key: 1,
                                  name: "sync",
                                  size: "14px",
                                  class: "q-ml-xs",
                                  title: "Recurring Booking"
                                })) : createCommentVNode("", true)
                              ])
                            ])
                          ])
                        ], 14, _hoisted_19);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              calendarView.value === "day" ? (openBlock(), createBlock(QCard, {
                key: 2,
                class: "dayView"
              }, {
                default: withCtx(() => [
                  createVNode(_component_q_calendar_day, {
                    ref_key: "calendarRef",
                    ref: calendarRef,
                    modelValue: selectedDate.value,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => selectedDate.value = $event),
                    view: "day",
                    animated: "",
                    bordered: "",
                    "transition-next": "slide-left",
                    "transition-prev": "slide-right",
                    "interval-start": 6,
                    "interval-count": 18,
                    "max-days": 1,
                    "interval-height": 65
                  }, {
                    "day-body": withCtx(({ scope: { timestamp, timeStartPos, timeDurationHeight } }) => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(getWeekEvents(timestamp.date), (event, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: event.id,
                          onClick: ($event) => orderNav(event.id),
                          class: normalizeClass(["order-event full-width", eventColor(event)]),
                          style: normalizeStyle([{ "font-size": "11px" }, badgeStyles(event, timeStartPos, timeDurationHeight, index)])
                        }, [
                          createVNode(QSeparator, { dark: "" }),
                          createBaseVNode("div", _hoisted_28, [
                            unref(hooks)(timestamp.date).isSame(unref(hooks)(event.scheduled_pickup_date, "DD/MM/YYYY")) || !event.scheduled_pickup_date ? (openBlock(), createElementBlock("div", _hoisted_29, toDisplayString(unref(hourBookingDisplay)(event.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                            unref(hooks)(timestamp.date).isSame(unref(hooks)(event.scheduled_delivery_date, "DD/MM/YYYY")) && event.scheduled_pickup_date ? (openBlock(), createElementBlock("div", _hoisted_30, toDisplayString(unref(hourBookingDisplay)(event.scheduled_delivery_time)), 1)) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_31, toDisplayString(event.team.name), 1),
                            createBaseVNode("div", _hoisted_32, [
                              event.suburbpostcoderegion ? (openBlock(), createElementBlock("div", _hoisted_33, toDisplayString(event.suburbpostcoderegion.locality), 1)) : createCommentVNode("", true),
                              createVNode(QSpace),
                              createBaseVNode("div", _hoisted_34, [
                                event.invoice && event.invoice.status !== "PAID" ? (openBlock(), createBlock(QIcon, {
                                  key: 0,
                                  name: "note",
                                  size: "14px",
                                  title: "Invoice Open"
                                })) : createCommentVNode("", true),
                                event.recurring_order ? (openBlock(), createBlock(QIcon, {
                                  key: 1,
                                  name: "sync",
                                  size: "14px",
                                  class: "q-ml-xs",
                                  title: "Recurring Booking"
                                })) : createCommentVNode("", true)
                              ])
                            ])
                          ])
                        ], 14, _hoisted_27);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
export { _sfc_main as default };
