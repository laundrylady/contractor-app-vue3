import { B as defineComponent, r as ref, J as useRouter, g as computed, o as onMounted, by as resolveComponent, m as openBlock, K as createBlock, L as withCtx, t as normalizeClass, l as createVNode, O as QIcon, z as createCommentVNode, q as createBaseVNode, n as createElementBlock, aj as toDisplayString, S as unref, R as QBtn, Q as QCard, F as Fragment, be as renderList, bw as QSeparator, s as normalizeStyle, ak as createTextVNode, E as nextTick } from "./index.6a0e49ef.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.25b8b827.js";
import { Q as QSpace } from "./QSpace.92c4ce77.js";
import { Q as QSelect } from "./QSelect.670b73c2.js";
import { Q as QPage } from "./QPage.e3227941.js";
import { t as today, Q as QCalendarMonth } from "./index.esm.f269320b.js";
import { h as hooks, a as api } from "./axios.fb5a1a1c.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { t as dbDateDisplay, h as hourBookingDisplay, g as hourAgreedDisplay, D as sortOrdersByKey } from "./help.01f01c96.js";
import "./QItemSection.322b798b.js";
import "./QItemLabel.c30e8810.js";
import "./QMenu.4cdb6815.js";
import "./selection.81608666.js";
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
const _hoisted_14 = { key: 0 };
const _hoisted_15 = { key: 1 };
const _hoisted_16 = { key: 1 };
const _hoisted_17 = { key: 0 };
const _hoisted_18 = { key: 1 };
const _hoisted_19 = { class: "text-bold" };
const _hoisted_20 = { class: "flex" };
const _hoisted_21 = { key: 0 };
const _hoisted_22 = { class: "q-ml-sm" };
const _hoisted_23 = ["onClick"];
const _hoisted_24 = { class: "q-pa-sm" };
const _hoisted_25 = { key: 0 };
const _hoisted_26 = { key: 0 };
const _hoisted_27 = { key: 1 };
const _hoisted_28 = { key: 1 };
const _hoisted_29 = { key: 0 };
const _hoisted_30 = { key: 1 };
const _hoisted_31 = { class: "text-bold" };
const _hoisted_32 = { class: "flex" };
const _hoisted_33 = { key: 0 };
const _hoisted_34 = { class: "q-ml-sm" };
const _hoisted_35 = ["onClick"];
const _hoisted_36 = { class: "q-pa-sm" };
const _hoisted_37 = { key: 0 };
const _hoisted_38 = { key: 0 };
const _hoisted_39 = { key: 1 };
const _hoisted_40 = { key: 1 };
const _hoisted_41 = { key: 0 };
const _hoisted_42 = { key: 1 };
const _hoisted_43 = { class: "text-bold" };
const _hoisted_44 = { class: "flex" };
const _hoisted_45 = { key: 0 };
const _hoisted_46 = { class: "q-ml-sm" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderCalendar",
  setup(__props) {
    const orders = ref();
    const loading = ref(false);
    const currentHover = ref();
    const calendarView = ref("week");
    const router = useRouter();
    const pickupOrDelivery = ref("pickups");
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
        api.post(`/public/order/bookingcalendar/${pickupOrDelivery.value}`, { start, end }).then((response) => {
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
      if (pickupOrDelivery.value === "pickups") {
        const events = orders.value.filter((o) => hooks(o.scheduled_pickup_date, "DD/MM/YYYY").format("YYYY-MM-DD") === timestamp.date);
        if (!events)
          return [];
        return sortOrdersByKey(events, "sortTime", "asc", "number");
      } else {
        const events = orders.value.filter((o) => hooks(o.scheduled_delivery_date, "DD/MM/YYYY").format("YYYY-MM-DD") === timestamp.date);
        if (!events)
          return [];
        return sortOrdersByKey(events, "sortTime", "asc", "number");
      }
    };
    const hasEvents = (timestamp) => {
      if (!orders.value) {
        return false;
      }
      if (pickupOrDelivery.value === "pickups") {
        return orders.value.filter((o) => {
          return hooks(o.scheduled_pickup_date, "DD/MM/YYYY").format("YYYY-MM-DD") === timestamp.date;
        }).length > 0;
      } else {
        return orders.value.filter((o) => {
          return hooks(o.scheduled_delivery_date, "DD/MM/YYYY").format("YYYY-MM-DD") === timestamp.date;
        }).length > 0;
      }
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
        if (pickupOrDelivery.value === "pickups") {
          const orderDate = hooks(order.scheduled_pickup_date, "DD/MM/YYYY").format("YYYY-MM-DD");
          if (!map[orderDate]) {
            map[orderDate] = [];
          }
          let timeStart = parseFloat(order.scheduled_pickup_time ? order.scheduled_pickup_time.split("-")[0] : "9");
          if (timeStart < 10) {
            timeStart = `0${timeStart}`;
          }
          order.time = `${timeStart}:00`;
          order.pickupSortTime = timeStart;
          if (!order.scheduled_delivery_date) {
            order.sortTime = order.pickupSortTime;
          }
          map[orderDate].push(order);
        } else {
          if (order.scheduled_delivery_date) {
            const deliveryDate = hooks(order.scheduled_delivery_date, "DD/MM/YYYY").format("YYYY-MM-DD");
            if (!map[deliveryDate]) {
              map[deliveryDate] = [];
            }
            let timeStart = parseFloat(order.scheduled_delivery_time ? order.scheduled_delivery_time.split("-")[0] : "9");
            if (timeStart < 10) {
              timeStart = `0${timeStart}`;
            }
            order.time = `${timeStart}:00`;
            order.deliverySortTime = timeStart;
            order.sortTime = hooks().isSame(hooks(order.scheduled_pickup_date, "DD/MM/YYYY")) ? order.pickupSortTime : order.deliverySortTime;
            map[deliveryDate].push(order);
          }
        }
      });
      return map;
    });
    const getWeekEvents = (dt) => {
      const events = eventsMap.value[dt];
      if (!events || !Array.isArray(events)) {
        return [];
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
                    "onUpdate:modelValue": [
                      _cache[0] || (_cache[0] = ($event) => calendarView.value = $event),
                      _cache[1] || (_cache[1] = ($event) => getOrders())
                    ],
                    options: [{ label: "Week", value: "week" }, { label: "Month", value: "month" }, { label: "Day", value: "day" }],
                    "emit-value": "",
                    "map-options": "",
                    dense: "",
                    filled: "",
                    label: "View",
                    class: "q-mr-sm"
                  }, null, 8, ["modelValue"]),
                  createVNode(QSelect, {
                    modelValue: pickupOrDelivery.value,
                    "onUpdate:modelValue": [
                      _cache[2] || (_cache[2] = ($event) => pickupOrDelivery.value = $event),
                      _cache[3] || (_cache[3] = ($event) => getOrders())
                    ],
                    options: [{ label: "Pickups", value: "pickups" }, { label: "Deliveries", value: "deliveries" }],
                    "emit-value": "",
                    "map-options": "",
                    dense: "",
                    filled: "",
                    label: "Mode",
                    class: "q-mr-sm"
                  }, null, 8, ["modelValue"]),
                  _ctx.$q.screen.xs ? (openBlock(), createBlock(QSpace, { key: 1 })) : createCommentVNode("", true),
                  createVNode(QBtn, {
                    onClick: _cache[4] || (_cache[4] = ($event) => onPrev()),
                    icon: "chevron_left",
                    color: "secondary",
                    flat: "",
                    dense: "",
                    round: ""
                  }),
                  createVNode(QBtn, {
                    onClick: _cache[5] || (_cache[5] = ($event) => onToday()),
                    label: "Today",
                    color: "secondary",
                    flat: "",
                    rounded: ""
                  }),
                  createVNode(QBtn, {
                    onClick: _cache[6] || (_cache[6] = ($event) => onNext()),
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
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => selectedDate.value = $event),
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
                          (openBlock(true), createElementBlock(Fragment, null, renderList(getEvents(scope.timestamp), (event, index) => {
                            return openBlock(), createElementBlock("div", {
                              key: `${index}-${event.id}`,
                              class: normalizeClass(["full-width cursor-pointer", eventColor(event)]),
                              onClick: ($event) => orderNav(event.id),
                              style: { "font-size": "11px" }
                            }, [
                              createVNode(QSeparator, { dark: "" }),
                              createBaseVNode("div", _hoisted_12, [
                                pickupOrDelivery.value === "pickups" && event.scheduled_pickup_time && unref(hooks)(scope.timestamp.date).isSame(unref(hooks)(event.scheduled_pickup_date, "DD/MM/YYYY")) ? (openBlock(), createElementBlock("div", _hoisted_13, [
                                  !event.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_14, toDisplayString(unref(hourBookingDisplay)(event.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                                  event.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_15, toDisplayString(unref(hourAgreedDisplay)(event.agreed_pickup_time)), 1)) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true),
                                pickupOrDelivery.value === "deliveries" && event.scheduled_delivery_time && unref(hooks)(scope.timestamp.date).isSame(unref(hooks)(event.scheduled_delivery_date, "DD/MM/YYYY")) ? (openBlock(), createElementBlock("div", _hoisted_16, [
                                  !event.agreed_delivery_time ? (openBlock(), createElementBlock("span", _hoisted_17, toDisplayString(unref(hourBookingDisplay)(event.scheduled_delivery_time)), 1)) : createCommentVNode("", true),
                                  event.agreed_delivery_time ? (openBlock(), createElementBlock("span", _hoisted_18, toDisplayString(unref(hourAgreedDisplay)(event.agreed_delivery_time)), 1)) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true),
                                createBaseVNode("div", _hoisted_19, toDisplayString(event.team.name), 1),
                                createBaseVNode("div", _hoisted_20, [
                                  event.suburbpostcoderegion ? (openBlock(), createElementBlock("div", _hoisted_21, toDisplayString(event.suburbpostcoderegion.locality), 1)) : createCommentVNode("", true),
                                  createVNode(QSpace),
                                  createBaseVNode("div", _hoisted_22, [
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
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => selectedDate.value = $event),
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
                          key: `${index}-${event.id}`,
                          onClick: ($event) => orderNav(event.id),
                          class: normalizeClass(["order-event full-width", eventColor(event)]),
                          style: normalizeStyle([{ "font-size": "11px" }, badgeStyles(event, timeStartPos, timeDurationHeight, index)])
                        }, [
                          createVNode(QSeparator, { dark: "" }),
                          createBaseVNode("div", _hoisted_24, [
                            pickupOrDelivery.value === "pickups" && event.scheduled_pickup_time && unref(hooks)(timestamp.date).isSame(unref(hooks)(event.scheduled_pickup_date, "DD/MM/YYYY")) ? (openBlock(), createElementBlock("div", _hoisted_25, [
                              !event.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_26, toDisplayString(unref(hourBookingDisplay)(event.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                              event.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_27, toDisplayString(unref(hourAgreedDisplay)(event.agreed_pickup_time)), 1)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            pickupOrDelivery.value === "deliveries" && event.scheduled_delivery_time && unref(hooks)(timestamp.date).isSame(unref(hooks)(event.scheduled_delivery_date, "DD/MM/YYYY")) ? (openBlock(), createElementBlock("div", _hoisted_28, [
                              !event.agreed_delivery_time ? (openBlock(), createElementBlock("span", _hoisted_29, toDisplayString(unref(hourBookingDisplay)(event.scheduled_delivery_time)), 1)) : createCommentVNode("", true),
                              event.agreed_delivery_time ? (openBlock(), createElementBlock("span", _hoisted_30, [
                                createTextVNode(toDisplayString(unref(hourAgreedDisplay)(event.agreed_delivery_time)), 1),
                                createVNode(QIcon, {
                                  name: "local_shipping",
                                  class: "q-ml-xs"
                                })
                              ])) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
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
                        ], 14, _hoisted_23);
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
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => selectedDate.value = $event),
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
                          createBaseVNode("div", _hoisted_36, [
                            pickupOrDelivery.value === "pickups" && event.scheduled_pickup_time && unref(hooks)(timestamp.date).isSame(unref(hooks)(event.scheduled_pickup_date, "DD/MM/YYYY")) ? (openBlock(), createElementBlock("div", _hoisted_37, [
                              !event.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_38, toDisplayString(unref(hourBookingDisplay)(event.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                              event.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_39, toDisplayString(unref(hourAgreedDisplay)(event.agreed_pickup_time)), 1)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            pickupOrDelivery.value === "deliveries" && event.scheduled_delivery_time && unref(hooks)(timestamp.date).isSame(unref(hooks)(event.scheduled_delivery_date, "DD/MM/YYYY")) ? (openBlock(), createElementBlock("div", _hoisted_40, [
                              !event.agreed_delivery_time ? (openBlock(), createElementBlock("span", _hoisted_41, [
                                createTextVNode(toDisplayString(unref(hourBookingDisplay)(event.scheduled_delivery_time)), 1),
                                createVNode(QIcon, {
                                  name: "local_shipping",
                                  class: "q-ml-xs"
                                })
                              ])) : createCommentVNode("", true),
                              event.agreed_delivery_time ? (openBlock(), createElementBlock("span", _hoisted_42, [
                                createTextVNode(toDisplayString(unref(hourAgreedDisplay)(event.agreed_delivery_time)), 1),
                                createVNode(QIcon, {
                                  name: "local_shipping",
                                  class: "q-ml-xs"
                                })
                              ])) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_43, toDisplayString(event.team.name), 1),
                            createBaseVNode("div", _hoisted_44, [
                              event.suburbpostcoderegion ? (openBlock(), createElementBlock("div", _hoisted_45, toDisplayString(event.suburbpostcoderegion.locality), 1)) : createCommentVNode("", true),
                              createVNode(QSpace),
                              createBaseVNode("div", _hoisted_46, [
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
                        ], 14, _hoisted_35);
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
