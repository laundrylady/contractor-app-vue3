import { Q as QCircularProgress } from "./QCircularProgress.2911dda3.js";
import { A as defineComponent, r as ref, B as reactive, i as inject, o as onMounted, E as onBeforeUnmount, l as openBlock, J as createBlock, K as withCtx, Q as QCard, k as createVNode, aG as createTextVNode, aH as toDisplayString, R as unref, G as withDirectives, P as QBtn, bu as QSeparator, L as QCardSection, p as createBaseVNode, ai as QToggle, m as createElementBlock, F as Fragment, bd as renderList, M as QInput, y as createCommentVNode, aa as QCardActions, aE as QDialog, f as computed, a9 as useRoute, w as watch, N as QIcon, s as normalizeClass } from "./index.1d2cc295.js";
import { a as api, m as moment, h as hooks } from "./axios.91d62303.js";
import { _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$7 } from "./OrderRecurringBookingFormat.5d2c2dc5.js";
import { Q as QSpace } from "./QSpace.c6df3a14.js";
import { Q as QBtnGroup } from "./QBtnGroup.dbeff857.js";
import { Q as QBadge } from "./QBadge.023ce274.js";
import { t as today, Q as QCalendarMonth } from "./index.esm.93130212.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { d as dbDateDisplay, h as hourOptions, a as categoryDisplay, b as doNotify, c as confirmDelete, e as hourDisplay, g as currencyFormat } from "./help.f0ed8230.js";
import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.4d5be4c5.js";
import { Q as QSelect } from "./QSelect.96553d0d.js";
import { C as ClosePopup } from "./ClosePopup.bd505eea.js";
import { u as useVuelidate, r as required } from "./index.esm.2211563a.js";
import { p as productCategoriesVisibleCapacity } from "./helpers.855cb89b.js";
import { _ as _sfc_main$4 } from "./DateField.a1bafec0.js";
import "./format.2692d829.js";
import "./QItemSection.bf749560.js";
import "./QList.7e21fa8d.js";
import "./UserAvatar.0db33da1.js";
import "./QImg.b1c71029.js";
import "./use-ratio.4d8e33f6.js";
import "./StatusTag.999e3be3.js";
import "./use-cache.b0833c75.js";
import "./use-quasar.f80b811d.js";
const _hoisted_1$3 = { class: "row q-col-gutter-md" };
const _hoisted_2$3 = { class: "row q-col-gutter-md" };
const _hoisted_3$3 = { class: "col-xs-12 col-sm-6" };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Start and end times", -1);
const _hoisted_5$3 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_6$2 = { class: "col-xs-12 col-sm-6" };
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Capacity for this timeslot:", -1);
const _hoisted_8$2 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_9$2 = { key: 0 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UserRosterScheduleEdit",
  setup(__props) {
    const show = ref(false);
    const model = reactive({
      id: null,
      day: null,
      start_time: null,
      end_time: null,
      active: true,
      user_id: null,
      user: null,
      user_postcoderegion_group_id: null,
      capacity: { products: [] }
    });
    const loading = ref(false);
    const categories = ref();
    const userpostcoderegiongroups = ref();
    const bus = inject("bus");
    const errors = ref();
    const rules = {
      user_postcoderegion_group_id: { required },
      day: { required },
      start_time: { required },
      end_time: { required }
    };
    const $v = useVuelidate(rules, model);
    const save = () => {
      errors.value = false;
      loading.value = true;
      api.put(`/userrosterschedule/${model.id}`, model).then(() => {
        doNotify("positive", "Schedule updated");
        bus.emit("getSchedule");
        show.value = false;
        loading.value = false;
      }).catch((error) => {
        loading.value = false;
        errors.value = error.response.data;
        useMixinDebug(error);
      });
    };
    const endHourOptions = (hour) => {
      if (!hour) {
        return hourOptions;
      }
      return hourOptions.filter((o) => o.value > hour && o.value <= hour + 3);
    };
    const checkQty = (val) => {
      if (!val.qty) {
        val.qty = 0;
      }
    };
    onMounted(() => {
      bus.on("editUserRosterSchedule", async (id) => {
        categories.value = await productCategoriesVisibleCapacity();
        api.get(`/userrosterschedule/${id}`).then((response) => {
          Object.assign(model, response.data);
          api.get(`/userpostcoderegiongroup/index/${model.user_id}`).then((response2) => {
            userpostcoderegiongroups.value = response2.data.map((o) => {
              return { value: o.id, label: o.name };
            });
          }).catch((error) => {
            useMixinDebug(error);
          });
          show.value = true;
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    });
    onBeforeUnmount(() => {
      bus.off("editUserRosterSchedule");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          model.day && model.user ? (openBlock(), createBlock(QCard, {
            key: 0,
            class: "modal"
          }, {
            default: withCtx(() => [
              createVNode(QToolbar, null, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(dbDateDisplay)(model.day, "dddd DD/MM/YYYY")) + " - " + toDisplayString(model.user.fullname), 1)
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
                  createBaseVNode("div", _hoisted_1$3, [
                    createVNode(QSelect, {
                      modelValue: model.user_postcoderegion_group_id,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.user_postcoderegion_group_id = $event),
                      label: "Select the pickup area",
                      options: userpostcoderegiongroups.value,
                      "map-options": "",
                      "emit-value": "",
                      error: unref($v).user_postcoderegion_group_id.$invalid,
                      filled: "",
                      class: "col-xs-12 col-sm-6"
                    }, null, 8, ["modelValue", "options", "error"])
                  ]),
                  createBaseVNode("div", _hoisted_2$3, [
                    createBaseVNode("div", _hoisted_3$3, [
                      _hoisted_4$3,
                      createBaseVNode("div", _hoisted_5$3, [
                        createVNode(QSelect, {
                          modelValue: model.start_time,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.start_time = $event),
                          outlined: "",
                          dense: "",
                          options: unref(hourOptions),
                          "map-options": "",
                          "emit-value": "",
                          label: "Start Time",
                          "options-cover": "",
                          class: "col-xs-12 col-sm-6"
                        }, null, 8, ["modelValue", "options"]),
                        createVNode(QSelect, {
                          modelValue: model.end_time,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.end_time = $event),
                          outlined: "",
                          dense: "",
                          options: endHourOptions(model.start_time),
                          "map-options": "",
                          "emit-value": "",
                          label: "End Time",
                          "options-cover": "",
                          class: "col-xs-12 col-sm-6"
                        }, null, 8, ["modelValue", "options"])
                      ]),
                      createVNode(QToggle, {
                        modelValue: model.active,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.active = $event),
                        label: "Active"
                      }, null, 8, ["modelValue"])
                    ]),
                    createBaseVNode("div", _hoisted_6$2, [
                      _hoisted_7$2,
                      model.capacity.products ? (openBlock(), createElementBlock("div", _hoisted_8$2, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(model.capacity.products, (c, cindex) => {
                          return openBlock(), createElementBlock("div", {
                            key: cindex,
                            class: "col-xs-12 col-sm-6"
                          }, [
                            createVNode(QInput, {
                              modelValue: c.qty,
                              "onUpdate:modelValue": ($event) => c.qty = $event,
                              outlined: "",
                              dense: "",
                              label: unref(categoryDisplay)(c.product_category_id, categories.value),
                              "options-cover": "",
                              onBlur: ($event) => checkQty(c),
                              class: "q-mb-md"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "onBlur"])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  errors.value ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
                    createBaseVNode("ul", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(errors.value.errors, (e, index) => {
                        return openBlock(), createElementBlock("li", {
                          key: index,
                          class: "text-negative"
                        }, toDisplayString(e.message), 1);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(QCardActions, { align: "right" }, {
                default: withCtx(() => [
                  withDirectives(createVNode(QBtn, {
                    label: "Cancel",
                    flat: "",
                    color: "secondary"
                  }, null, 512), [
                    [ClosePopup]
                  ]),
                  createVNode(QBtn, {
                    disable: loading.value || unref($v).$invalid,
                    label: "Update",
                    color: "primary",
                    onClick: _cache[4] || (_cache[4] = ($event) => save()),
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
const _hoisted_1$2 = { class: "row q-col-gutter-md q-mb-lg" };
const _hoisted_2$2 = { class: "col-xs-12 col-sm-6" };
const _hoisted_3$2 = { class: "row q-col-gutter-md" };
const _hoisted_4$2 = { class: "col-xs-12 col-sm-6" };
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Start and end times", -1);
const _hoisted_6$1 = { class: "row q-col-gutter-md" };
const _hoisted_7$1 = { class: "col-xs-12 col-sm-6" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Capacity for this timeslot:", -1);
const _hoisted_9$1 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_10$1 = { key: 0 };
const _hoisted_11$1 = { class: "q-mt-lg flex" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UserRosterScheduleCreate",
  setup(__props) {
    const user = ref();
    const bus = inject("bus");
    const show = ref(false);
    const categories = ref();
    const userpostcoderegiongroups = ref();
    const errors = ref();
    const loading = ref(false);
    const schema = {
      user_id: null,
      day: null,
      start_time: null,
      end_time: null,
      active: true,
      user_postcoderegion_group_id: null,
      capacity: { products: [] }
    };
    const newSchedule = reactive(JSON.parse(JSON.stringify(schema)));
    const rules = {
      user_id: { required },
      day: { required },
      start_time: { required },
      end_time: { required },
      user_postcoderegion_group_id: { required }
    };
    const $v = useVuelidate(rules, newSchedule, { $scope: false });
    const addSchedule = () => {
      errors.value = false;
      loading.value = true;
      api.post("/userrosterschedule", newSchedule).then(() => {
        bus.emit("getSchedule");
        show.value = false;
        loading.value = false;
      }).catch((error) => {
        loading.value = false;
        errors.value = error.response.data;
        useMixinDebug(error);
      });
    };
    const endHourOptions = (hour) => {
      if (!hour) {
        return hourOptions;
      }
      return hourOptions.filter((o) => o.value > hour && o.value <= hour + 3);
    };
    const checkQty = (val) => {
      if (!val.qty) {
        val.qty = 0;
      }
    };
    onMounted(async () => {
      bus.on("newUserRosterSchedule", async (data) => {
        user.value = data.user;
        errors.value = null;
        categories.value = await productCategoriesVisibleCapacity();
        api.get(`/userpostcoderegiongroup/index/${user.value.id}`).then((response) => {
          userpostcoderegiongroups.value = response.data.map((o) => {
            return { value: o.id, label: o.name };
          });
        }).catch((error) => {
          useMixinDebug(error);
        });
        Object.assign(newSchedule, JSON.parse(JSON.stringify(schema)));
        for (const c of categories.value) {
          newSchedule.capacity.products.push({ product_category_id: c.value, qty: 0 });
        }
        newSchedule.day = moment(data.day).format("DD/MM/YYYY");
        newSchedule.user_id = user.value.id;
        show.value = true;
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          createVNode(QCard, { class: "modal" }, {
            default: withCtx(() => [
              createVNode(QToolbar, null, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Add a new " + toDisplayString(_ctx.$t("schedule.name")) + " entry", 1)
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
                  createBaseVNode("div", _hoisted_1$2, [
                    createVNode(QSelect, {
                      modelValue: newSchedule.user_postcoderegion_group_id,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newSchedule.user_postcoderegion_group_id = $event),
                      label: "Select the pickup area",
                      options: userpostcoderegiongroups.value,
                      "map-options": "",
                      "emit-value": "",
                      error: unref($v).user_postcoderegion_group_id.$invalid,
                      filled: "",
                      class: "col-xs-12 col-sm-6"
                    }, null, 8, ["modelValue", "options", "error"]),
                    createBaseVNode("div", _hoisted_2$2, [
                      createVNode(_sfc_main$4, {
                        modelValue: newSchedule.day,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newSchedule.day = $event),
                        label: "Date",
                        invalid: unref($v).day.$invalid,
                        outlined: true
                      }, null, 8, ["modelValue", "invalid"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_3$2, [
                    createBaseVNode("div", _hoisted_4$2, [
                      _hoisted_5$2,
                      createBaseVNode("div", _hoisted_6$1, [
                        createVNode(QSelect, {
                          modelValue: newSchedule.start_time,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => newSchedule.start_time = $event),
                          outlined: "",
                          dense: "",
                          options: unref(hourOptions),
                          "map-options": "",
                          "emit-value": "",
                          label: "Start Time",
                          "options-cover": "",
                          class: "col-xs-12 col-sm-6"
                        }, null, 8, ["modelValue", "options"]),
                        createVNode(QSelect, {
                          modelValue: newSchedule.end_time,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => newSchedule.end_time = $event),
                          outlined: "",
                          dense: "",
                          options: endHourOptions(newSchedule.start_time),
                          "map-options": "",
                          "emit-value": "",
                          label: "End Time",
                          "options-cover": "",
                          class: "col-xs-12 col-sm-6"
                        }, null, 8, ["modelValue", "options"])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_7$1, [
                      _hoisted_8$1,
                      newSchedule.capacity.products ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(newSchedule.capacity.products, (c, cindex) => {
                          return openBlock(), createElementBlock("div", {
                            key: cindex,
                            class: "col-xs-12 col-sm-6"
                          }, [
                            createVNode(QInput, {
                              modelValue: c.qty,
                              "onUpdate:modelValue": ($event) => c.qty = $event,
                              outlined: "",
                              dense: "",
                              label: unref(categoryDisplay)(c.product_category_id, categories.value),
                              "options-cover": "",
                              onBlur: ($event) => checkQty(c),
                              class: "q-mb-md"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "onBlur"])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  errors.value ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                    createBaseVNode("ul", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(errors.value.errors, (e, index) => {
                        return openBlock(), createElementBlock("li", {
                          key: index,
                          class: "text-negative"
                        }, toDisplayString(e.message), 1);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_11$1, [
                    createVNode(QBtn, {
                      onClick: _cache[4] || (_cache[4] = ($event) => addSchedule()),
                      disable: unref($v).$invalid || loading.value,
                      icon: "add_circle",
                      label: "Add",
                      color: "primary",
                      class: "full-width",
                      loading: loading.value
                    }, null, 8, ["disable", "loading"])
                  ])
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
        createVNode(_sfc_main$3),
        createVNode(_sfc_main$2),
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
                    createVNode(_sfc_main$6, {
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
                    recurringOrders.value ? (openBlock(), createBlock(_sfc_main$7, {
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
                    createVNode(_sfc_main$6, {
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
                    createVNode(_sfc_main$6, {
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
        createVNode(_sfc_main$5, {
          notable_type: "User",
          notable_id: __props.model.id,
          nobox: true
        }, null, 8, ["notable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
