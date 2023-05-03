import { Q as QLinearProgress } from "./QLinearProgress.b986023f.js";
import { Q as QItemLabel } from "./rtl.20f006a8.js";
import { A as defineComponent, r as ref, B as reactive, i as inject, o as onMounted, E as onBeforeUnmount, m as openBlock, K as createBlock, L as withCtx, Q as QCard, l as createVNode, R as createTextVNode, aI as toDisplayString, U as unref, G as withDirectives, S as QBtn, bt as QSeparator, M as QCardSection, q as createBaseVNode, n as createElementBlock, F as Fragment, bm as renderList, N as QInput, y as createCommentVNode, ae as QCardActions, aG as QDialog, J as resolveComponent, O as QIcon, u as normalizeProps, aH as guardReactiveProps, ak as QToggle } from "./index.b320c8ca.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.370f32fe.js";
import { Q as QList } from "./QList.b5b9109a.js";
import { Q as QSelect } from "./QSelect.a53b0a68.js";
import { u as useVuelidate, r as required } from "./index.esm.51560a50.js";
import { a as api } from "./axios.fb60ded3.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { m as dayDisplay, r as dayOptions, p as hourOptions, q as categoryDisplay, b as doNotify, g as groupBy, n as hourDisplay, s as durationDisplay, t as categoryIcon, c as confirmDelete } from "./help.1102714b.js";
import { a as productCategoriesVisibleCapacity } from "./helpers.79c8f6da.js";
import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.4392daa0.js";
import { Q as QSpace } from "./QSpace.d1a2e646.js";
import { C as ClosePopup } from "./ClosePopup.97d3c14c.js";
import "./format.8239da63.js";
const _hoisted_1$2 = { class: "row q-col-gutter-md" };
const _hoisted_2$2 = { class: "row q-col-gutter-md" };
const _hoisted_3$1 = { class: "col-xs-12 col-sm-6" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Choose the day, start and end times", -1);
const _hoisted_5$1 = { class: "row q-col-gutter-md" };
const _hoisted_6$1 = { class: "col-xs-12 col-sm-6" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Capacity for this timeslot:", -1);
const _hoisted_8$1 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_9$1 = { key: 0 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UserRosterEdit",
  setup(__props) {
    const show = ref(false);
    const userpostcoderegiongroups = ref();
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
    const bus = inject("bus");
    const errors = ref();
    const categories = ref();
    const rules = {
      user_postcoderegion_group_id: { required },
      day: { required },
      start_time: { required },
      end_time: { required }
    };
    const $v = useVuelidate(rules, model);
    const save = (close) => {
      errors.value = false;
      loading.value = true;
      api.put(`/userroster/${model.id}`, model).then(() => {
        doNotify("positive", "Roster updated");
        bus.emit("getRoster");
        if (close) {
          show.value = false;
        }
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
      bus.on("editRoster", async (id) => {
        categories.value = await productCategoriesVisibleCapacity();
        api.get(`/userroster/${id}`).then((response) => {
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
      bus.off("editRoster");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          model.day ? (openBlock(), createBlock(QCard, {
            key: 0,
            class: "modal"
          }, {
            default: withCtx(() => [
              createVNode(QToolbar, null, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(dayDisplay)(model.day)), 1)
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
                      modelValue: model.user_postcoderegion_group_id,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.user_postcoderegion_group_id = $event),
                      label: "Select the pickup area",
                      options: userpostcoderegiongroups.value,
                      "map-options": "",
                      "emit-value": "",
                      error: unref($v).user_postcoderegion_group_id.$invalid,
                      filled: "",
                      class: "col-xs-12 col-sm-6"
                    }, null, 8, ["modelValue", "options", "error"]),
                    createVNode(QSelect, {
                      modelValue: model.day,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.day = $event),
                      outlined: "",
                      options: unref(dayOptions),
                      "map-options": "",
                      "emit-value": "",
                      label: "Day",
                      class: "col-xs-12 col-sm-6"
                    }, null, 8, ["modelValue", "options"])
                  ]),
                  createBaseVNode("div", _hoisted_2$2, [
                    createBaseVNode("div", _hoisted_3$1, [
                      _hoisted_4$1,
                      createBaseVNode("div", _hoisted_5$1, [
                        createVNode(QSelect, {
                          modelValue: model.start_time,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.start_time = $event),
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
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.end_time = $event),
                          outlined: "",
                          dense: "",
                          options: endHourOptions(model.start_time),
                          "map-options": "",
                          "emit-value": "",
                          label: "End Time",
                          "options-cover": "",
                          class: "col-xs-12 col-sm-6"
                        }, null, 8, ["modelValue", "options"])
                      ])
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
                    onClick: _cache[4] || (_cache[4] = ($event) => save(true)),
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
const _hoisted_1$1 = {
  key: 0,
  class: "q-mb-md"
};
const _hoisted_2$1 = { key: 1 };
const _hoisted_3 = { class: "flex items-center" };
const _hoisted_4 = { class: "q-mr-lg" };
const _hoisted_5 = {
  key: 1,
  class: "text-grey q-mr-md"
};
const _hoisted_6 = {
  key: 2,
  class: "q-mt-md"
};
const _hoisted_7 = {
  key: 3,
  class: "q-mt-md"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-sm" }, "Add a new roster entry", -1);
const _hoisted_9 = { class: "row q-col-gutter-md" };
const _hoisted_10 = { class: "row q-col-gutter-md" };
const _hoisted_11 = { class: "col-xs-12 col-sm-6" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Start and end times", -1);
const _hoisted_13 = { class: "row q-col-gutter-md" };
const _hoisted_14 = { class: "col-xs-12 col-sm-6" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Capacity for this timeslot:", -1);
const _hoisted_16 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_17 = { key: 0 };
const _hoisted_18 = { class: "q-mt-lg" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserRosterManagement",
  props: {
    user: null
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const showNew = ref(false);
    const errors = ref();
    const roster = ref();
    const categories = ref();
    const userpostcoderegiongroups = ref();
    const loading = ref(false);
    const schema = {
      user_id: props.user.id,
      day: [],
      start_time: null,
      end_time: null,
      active: true,
      user_postcoderegion_group_id: null,
      capacity: { products: [] }
    };
    const newRoster = reactive(JSON.parse(JSON.stringify(schema)));
    const rules = {
      user_id: { required },
      day: { required },
      start_time: { required },
      end_time: { required },
      user_postcoderegion_group_id: { required },
      capacity: { products: { required } }
    };
    const $v = useVuelidate(rules, newRoster, { $scope: false });
    const addRoster = () => {
      errors.value = false;
      loading.value = true;
      api.post("/userroster", newRoster).then(() => {
        getRoster();
        Object.assign(newRoster, JSON.parse(JSON.stringify(schema)));
        loading.value = false;
        showNew.value = false;
      }).catch((error) => {
        loading.value = false;
        errors.value = error.response.data;
        useMixinDebug(error);
      });
    };
    const removeRoster = (id) => {
      confirmDelete("Remove this roster entry?").onOk(() => {
        api.delete(`/userroster/${id}`).then(() => {
          getRoster();
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    };
    const getRoster = () => {
      loading.value = true;
      api.get(`/userroster/index?user_id=${props.user.id}`).then((response) => {
        roster.value = groupBy(response.data, "day");
        loading.value = false;
      }).catch((error) => {
        useMixinDebug(error);
        loading.value = false;
      });
    };
    const editRoster = (id) => {
      bus.emit("editRoster", id);
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
      categories.value = await productCategoriesVisibleCapacity();
      for (const c of categories.value) {
        newRoster.capacity.products.push({ product_category_id: c.value, qty: 0 });
      }
      api.get(`/userpostcoderegiongroup/index/${props.user.id}`).then((response) => {
        userpostcoderegiongroups.value = response.data.map((o) => {
          return { value: o.id, label: `${o.name} (${o.postcoderegions.length} suburbs)` };
        });
      }).catch((error) => {
        useMixinDebug(error);
      });
      getRoster();
      bus.on("getRoster", () => {
        getRoster();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getRoster");
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$2),
        loading.value ? (openBlock(), createBlock(QLinearProgress, {
          key: 0,
          indeterminate: ""
        })) : createCommentVNode("", true),
        createBaseVNode("div", null, [
          !loading.value && (!roster.value || !roster.value.length) ? (openBlock(), createElementBlock("div", _hoisted_1$1, " No roster found. ")) : createCommentVNode("", true)
        ]),
        roster.value && roster.value.length ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createVNode(QCard, { style: { "min-height": "200px" } }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(roster.value, (r, ri) => {
                return openBlock(), createElementBlock("div", {
                  key: r.key
                }, [
                  createVNode(QList, { separator: "" }, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, {
                        header: "",
                        class: "text-h6 q-pb-none text-black"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(dayDisplay)(parseFloat(r.key))), 1)
                        ]),
                        _: 2
                      }, 1024),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(r.data, (rr) => {
                        return openBlock(), createBlock(QItem, {
                          key: rr.id
                        }, {
                          default: withCtx(() => [
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_3, [
                                  rr.active ? (openBlock(), createBlock(QIcon, {
                                    key: 0,
                                    name: "check_circle",
                                    color: "positive",
                                    class: "q-mr-sm"
                                  })) : createCommentVNode("", true),
                                  createBaseVNode("div", _hoisted_4, toDisplayString(unref(hourDisplay)(rr.start_time)) + " to " + toDisplayString(unref(hourDisplay)(rr.end_time)) + " (" + toDisplayString(unref(durationDisplay)(rr.duration)) + ") ", 1),
                                  rr.postcoderegiongroup && rr.postcoderegiongroup.postcoderegions ? (openBlock(), createElementBlock("div", _hoisted_5, [
                                    createVNode(QIcon, { name: "place" }),
                                    createTextVNode(" " + toDisplayString(rr.postcoderegiongroup.postcoderegions.length), 1)
                                  ])) : createCommentVNode("", true),
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(rr.capacity.products, (c, cindex) => {
                                    return openBlock(), createElementBlock("div", {
                                      key: cindex,
                                      class: "q-mr-md text-grey"
                                    }, [
                                      createVNode(QIcon, {
                                        name: unref(categoryIcon)(c.product_category_id, categories.value)
                                      }, null, 8, ["name"]),
                                      createTextVNode(" " + toDisplayString(c.qty), 1)
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QItemSection, { side: "" }, {
                              default: withCtx(() => [
                                createBaseVNode("div", null, [
                                  createVNode(QBtn, {
                                    onClick: ($event) => editRoster(rr.id),
                                    icon: "edit",
                                    flat: "",
                                    class: "q-mr-xs"
                                  }, null, 8, ["onClick"]),
                                  createVNode(QBtn, {
                                    onClick: ($event) => removeRoster(rr.id),
                                    icon: "delete",
                                    flat: ""
                                  }, null, 8, ["onClick"])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024),
                  ri + 1 !== roster.value.length ? (openBlock(), createBlock(QSeparator, {
                    key: 0,
                    class: "q-mb-sm"
                  })) : createCommentVNode("", true)
                ]);
              }), 128))
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        !loading.value && (!userpostcoderegiongroups.value || userpostcoderegiongroups.value.length === 0) ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createVNode(_component_router_link, {
            to: { name: "contractor-postcoderegion-groups", params: { id: __props.user.id } },
            class: "link"
          }, {
            default: withCtx(() => [
              createVNode(QIcon, { name: "warning" }),
              createTextVNode(" Please configure the pickup locations before creating the roster.")
            ]),
            _: 1
          }, 8, ["to"])
        ])) : createCommentVNode("", true),
        !showNew.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
          userpostcoderegiongroups.value && userpostcoderegiongroups.value.length ? (openBlock(), createBlock(QBtn, {
            key: 0,
            onClick: _cache[0] || (_cache[0] = ($event) => showNew.value = true),
            label: "Add roster entry",
            color: "primary"
          })) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        showNew.value ? (openBlock(), createBlock(QCard, {
          key: 4,
          class: "q-mt-lg"
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                _hoisted_8,
                createBaseVNode("div", _hoisted_9, [
                  createVNode(QSelect, {
                    modelValue: newRoster.user_postcoderegion_group_id,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newRoster.user_postcoderegion_group_id = $event),
                    label: "Select the pickup area",
                    options: userpostcoderegiongroups.value,
                    "map-options": "",
                    "emit-value": "",
                    error: unref($v).user_postcoderegion_group_id.$invalid,
                    filled: "",
                    class: "col-xs-12 col-sm-6"
                  }, null, 8, ["modelValue", "options", "error"]),
                  createVNode(QSelect, {
                    modelValue: newRoster.day,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => newRoster.day = $event),
                    outlined: "",
                    options: unref(dayOptions),
                    "map-options": "",
                    "emit-value": "",
                    label: "Days",
                    multiple: "",
                    class: "col-xs-12 col-md-6"
                  }, {
                    option: withCtx(({ itemProps, opt, selected, toggleOption }) => [
                      createVNode(QItem, normalizeProps(guardReactiveProps(itemProps)), {
                        default: withCtx(() => [
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(QItemLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(opt.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, { side: "" }, {
                            default: withCtx(() => [
                              createVNode(QToggle, {
                                "model-value": selected,
                                "onUpdate:modelValue": ($event) => toggleOption(opt)
                              }, null, 8, ["model-value", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1040)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "options"])
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    _hoisted_12,
                    createBaseVNode("div", _hoisted_13, [
                      createVNode(QSelect, {
                        modelValue: newRoster.start_time,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => newRoster.start_time = $event),
                        outlined: "",
                        dense: "",
                        options: unref(hourOptions),
                        "map-options": "",
                        "emit-value": "",
                        label: "Start Time",
                        "options-cover": "",
                        class: "col-xs-12 col-sm-12 col-md-6"
                      }, null, 8, ["modelValue", "options"]),
                      createVNode(QSelect, {
                        modelValue: newRoster.end_time,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => newRoster.end_time = $event),
                        outlined: "",
                        dense: "",
                        options: endHourOptions(newRoster.start_time),
                        "map-options": "",
                        "emit-value": "",
                        label: "End Time",
                        "options-cover": "",
                        class: "col-xs-12 col-sm-12 col-md-6"
                      }, null, 8, ["modelValue", "options"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    _hoisted_15,
                    newRoster.capacity.products ? (openBlock(), createElementBlock("div", _hoisted_16, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(newRoster.capacity.products, (c, cindex) => {
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
                errors.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
                  createBaseVNode("ul", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(errors.value.errors, (e, index) => {
                      return openBlock(), createElementBlock("li", {
                        key: index,
                        class: "text-negative"
                      }, toDisplayString(e.message), 1);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_18, [
                  createVNode(QBtn, {
                    onClick: _cache[5] || (_cache[5] = ($event) => addRoster()),
                    disable: unref($v).$invalid || loading.value,
                    icon: "add_circle",
                    label: "Add Roster",
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
        })) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorRoster",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("roster.name")), 1),
        createBaseVNode("p", null, "Below are the pickup timeslots for this " + toDisplayString(_ctx.$t("contractor.name").toLowerCase()) + ".", 1),
        createVNode(_sfc_main$1, { user: __props.model }, null, 8, ["user"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
