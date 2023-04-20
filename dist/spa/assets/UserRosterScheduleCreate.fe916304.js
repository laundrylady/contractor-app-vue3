import { a as QToolbarTitle, Q as QToolbar } from "./QToolbarTitle.b94b23ea.js";
import { Q as QSpace } from "./QSpace.157cbeaf.js";
import { A as defineComponent, r as ref, B as reactive, i as inject, o as onMounted, E as onBeforeUnmount, m as openBlock, K as createBlock, L as withCtx, Q as QCard, l as createVNode, R as createTextVNode, aF as toDisplayString, U as unref, G as withDirectives, S as QBtn, bp as QSeparator, q as createBaseVNode, af as QToggle, n as createElementBlock, F as Fragment, bi as renderList, y as createCommentVNode, M as QCardSection, ae as QCardActions, aD as QDialog, N as QInput } from "./index.e7424e86.js";
import { Q as QSelect } from "./QSelect.fc8325f9.js";
import { C as ClosePopup } from "./ClosePopup.351cedad.js";
import { u as useVuelidate, r as required } from "./index.esm.484f53e2.js";
import { a as api, m as moment } from "./axios.e112af7f.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { o as dbDateDisplay, p as hourOptions, b as doNotify, q as categoryDisplay } from "./help.f4bb6a30.js";
import { a as productCategoriesVisibleCapacity } from "./helpers.b97e78a8.js";
import { _ as _sfc_main$2 } from "./DateField.93a8e45b.js";
const _hoisted_1$1 = { class: "row q-col-gutter-md" };
const _hoisted_2$1 = { class: "row q-col-gutter-md" };
const _hoisted_3$1 = { class: "col-xs-12 col-sm-6" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Start and end times", -1);
const _hoisted_5$1 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_6$1 = { class: "col-xs-12 col-sm-6" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Capacity for this timeslot:", -1);
const _hoisted_8$1 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_9$1 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
                  createBaseVNode("div", _hoisted_1$1, [
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
                  createBaseVNode("div", _hoisted_2$1, [
                    createBaseVNode("div", _hoisted_3$1, [
                      _hoisted_4$1,
                      createBaseVNode("div", _hoisted_5$1, [
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
                    createBaseVNode("div", _hoisted_6$1, [
                      _hoisted_7$1,
                      model.capacity.products ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
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
                  errors.value ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
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
const _hoisted_1 = { class: "row q-col-gutter-md q-mb-lg" };
const _hoisted_2 = { class: "col-xs-12 col-sm-6" };
const _hoisted_3 = { class: "row q-col-gutter-md" };
const _hoisted_4 = { class: "col-xs-12 col-sm-6" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Start and end times", -1);
const _hoisted_6 = { class: "row q-col-gutter-md" };
const _hoisted_7 = { class: "col-xs-12 col-sm-6" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Capacity for this timeslot:", -1);
const _hoisted_9 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { class: "q-mt-lg flex" };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
                  createBaseVNode("div", _hoisted_1, [
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
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(_sfc_main$2, {
                        modelValue: newSchedule.day,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newSchedule.day = $event),
                        label: "Date",
                        invalid: unref($v).day.$invalid,
                        outlined: true
                      }, null, 8, ["modelValue", "invalid"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_3, [
                    createBaseVNode("div", _hoisted_4, [
                      _hoisted_5,
                      createBaseVNode("div", _hoisted_6, [
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
                    createBaseVNode("div", _hoisted_7, [
                      _hoisted_8,
                      newSchedule.capacity.products ? (openBlock(), createElementBlock("div", _hoisted_9, [
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
                  errors.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
                    createBaseVNode("ul", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(errors.value.errors, (e, index) => {
                        return openBlock(), createElementBlock("li", {
                          key: index,
                          class: "text-negative"
                        }, toDisplayString(e.message), 1);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_11, [
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
export { _sfc_main$1 as _, _sfc_main as a };
