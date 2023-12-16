import { B as defineComponent, r as ref, aa as useRoute, o as onMounted, m as openBlock, K as createBlock, L as withCtx, l as createVNode, t as normalizeClass, q as createBaseVNode, n as createElementBlock, aj as toDisplayString, z as createCommentVNode, Q as QCard, M as QCardSection, O as QIcon, ak as createTextVNode, S as unref, R as QBtn, bg as QCheckbox, F as Fragment, be as renderList, N as QInput, ab as QCardActions } from "./index.6a0e49ef.js";
import { Q as QDate } from "./QDate.48ebc438.js";
import { Q as QSelect } from "./QSelect.670b73c2.js";
import { Q as QPage } from "./QPage.e3227941.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.2ce9dcae.js";
import { u as useVuelidate, r as required, a as requiredIf } from "./index.esm.89ee3987.js";
import { a as api, m as moment } from "./axios.fb5a1a1c.js";
import { _ as _sfc_main$2 } from "./OrderContractorManagement.56c95e48.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { h as hourBookingDisplay, a as categoryDisplay, c as confirmDelete } from "./help.01f01c96.js";
import { p as productCategoriesVisibleBooking } from "./helpers.b0c4e2c0.js";
import { _ as _sfc_main$1 } from "./AppLogo.5e5e9c16.js";
import "./use-cache.b0833c75.js";
import "./format.3e32b8d9.js";
import "./QItemSection.322b798b.js";
import "./QItemLabel.c30e8810.js";
import "./QMenu.4cdb6815.js";
import "./selection.81608666.js";
import "./rtl.b51694b1.js";
import "./QResizeObserver.9e41a4c7.js";
import "./QLinearProgress.44d5e5bc.js";
import "./QList.6c3ab040.js";
import "./UserAvatar.3bf479a1.js";
import "./QImg.70c0d7ba.js";
import "./use-ratio.4099e760.js";
const _hoisted_1 = { class: "row q-mt-xl q-mb-lg" };
const _hoisted_2 = { class: "col-xs-12 col-sm-6 offset-sm-3 text-center" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "row q-col-gutter-md" };
const _hoisted_5 = { class: "col-xs-12 col-sm-6 offset-sm-3" };
const _hoisted_6 = { class: "text-center text-h4 q-mb-xl" };
const _hoisted_7 = {
  key: 0,
  class: "bg-red text-white q-pa-md"
};
const _hoisted_8 = { key: 1 };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold q-mb-xs" }, "Booking Summary", -1);
const _hoisted_10 = { class: "q-mb-sm" };
const _hoisted_11 = { class: "q-mb-sm" };
const _hoisted_12 = { key: 0 };
const _hoisted_13 = { key: 0 };
const _hoisted_14 = { key: 1 };
const _hoisted_15 = {
  key: 0,
  class: "bg-green text-white q-pa-md q-mt-md"
};
const _hoisted_16 = {
  key: 1,
  class: "bg-green text-white q-pa-md q-mt-md"
};
const _hoisted_17 = {
  key: 2,
  class: "q-mt-lg text-center"
};
const _hoisted_18 = {
  key: 3,
  class: "q-mt-xl"
};
const _hoisted_19 = { class: "row q-col-gutter-md" };
const _hoisted_20 = { class: "col-xs-12 col-sm-5" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("p", { class: "text-leftt text-bold text-grey" }, "CHOOSE THE SERVICES YOU REQUIRE:", -1);
const _hoisted_22 = { class: "flex" };
const _hoisted_23 = { class: "q-mr-sm" };
const _hoisted_24 = { key: 0 };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold q-mt-md" }, "SCHEDULED PICKUP DATE", -1);
const _hoisted_26 = { class: "col-xs-12 col-sm-7" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold q-mb-md" }, "SCHEDULED PICKUP TIME", -1);
const _hoisted_28 = {
  key: 4,
  class: "q-mt-xl"
};
const _hoisted_29 = { key: 0 };
const _hoisted_30 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderPublicEdit",
  setup(__props) {
    const model = ref();
    const modelOriginal = ref();
    const categories = ref();
    const route = useRoute();
    const availableDates = ref();
    const currentBookingDate = ref();
    const washingAndIroning = ref(false);
    const minDate = (date) => {
      return date >= moment().add(1, "day").format("YYYY/MM/DD") && availableDates.value.indexOf(date) !== -1;
    };
    const showChange = ref(false);
    const showChangeSuccess = ref(false);
    const showCancel = ref(false);
    const showCancelSuccess = ref(false);
    const rules = {
      scheduled_pickup_date: { required },
      scheduled_pickup_time: { required },
      changes_reason: { requiredIf: requiredIf(() => showChange.value) },
      cancel_reason: { requiredIf: requiredIf(() => showCancel.value) }
    };
    const $v = useVuelidate(rules, model);
    const cancelOrderReasons = [
      "Appointment made in error",
      "Not available at this time ",
      "Not needed",
      "Holiday / Away",
      "Business closure",
      "Moving to another location",
      "Not happy with service",
      "Not happy with Laundry Lady or Lad",
      "Other"
    ];
    const handleScheduledPickupDateNav = (view) => {
      currentBookingDate.value = moment(`${view.year}-${view.month}-01`);
      getAvailableContractorsDates();
    };
    const getAvailableContractorsDates = () => {
      availableDates.value = [];
      api.post("/public/order/findcontractorsdates", {
        suburb_postcode_region_id: modelOriginal.value.suburb_postcode_region_id,
        scheduled_pickup_date: currentBookingDate.value.format("DD/MM/YYYY"),
        productcategories: modelOriginal.value.productcategories,
        contractor_user_id: modelOriginal.value.contractor_user_id
      }).then((response) => {
        availableDates.value = [moment(modelOriginal.value.scheduled_pickup_date, "DD/MM/YYYY").format("YYYY-MM-DD")].concat(response.data);
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const getOrder = () => {
      api.get(`/public/b/${route.params.id}`).then((response) => {
        model.value = response.data;
        washingAndIroning.value = model.value.productcategories.length === 2;
        modelOriginal.value = JSON.parse(JSON.stringify(response.data));
        currentBookingDate.value = moment(response.data.scheduled_pickup_date, "DD/MM/YYYY");
        getAvailableContractorsDates();
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const showChangeFunc = () => {
      showCancel.value = false;
      model.value.changes_reason = null;
      model.value.changes_notes = null;
      showChangeSuccess.value = false;
      showChange.value = true;
    };
    const showCancelFunc = () => {
      showChange.value = false;
      model.value.cancel_reason = null;
      model.value.cancel_notes = null;
      showCancel.value = true;
    };
    const toggleWashingAndIroning = () => {
      model.value.productcategories.forEach((o) => {
        o.active = washingAndIroning.value;
      });
      model.value.scheduled_pickup_date = null;
      model.value.scheduled_pickup_time = null;
      model.value.contractor_user_id = null;
    };
    const updateScheduledPickupTime = (val) => {
      model.value.scheduled_pickup_time = val;
    };
    const updateOrder = () => {
      api.put(`/public/b/${model.value.id}`, model.value).then(() => {
        showChangeSuccess.value = true;
        getOrder();
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const cancelOrder = () => {
      confirmDelete("This will cancel the booking").onOk(() => {
        api.put(`/public/b/cancel/${model.value.id}`, model.value).then(() => {
          showCancelSuccess.value = true;
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    };
    onMounted(async () => {
      categories.value = await productCategoriesVisibleBooking();
      getOrder();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                padding: "",
                class: normalizeClass({ "q-pa-md": _ctx.$q.screen.xs })
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(_sfc_main$1)
                    ])
                  ]),
                  model.value && model.value.id ? (openBlock(), createElementBlock("div", _hoisted_3, [
                    createBaseVNode("div", _hoisted_4, [
                      createBaseVNode("div", _hoisted_5, [
                        createBaseVNode("div", _hoisted_6, "Booking #" + toDisplayString(model.value.display_id), 1),
                        !modelOriginal.value.scheduled_pickup_date ? (openBlock(), createElementBlock("div", _hoisted_7, " There is an issue with this booking preventing you from making changes. Please contact us to make changes to this booking.")) : createCommentVNode("", true),
                        modelOriginal.value.scheduled_pickup_date ? (openBlock(), createElementBlock("div", _hoisted_8, [
                          createVNode(QCard, null, {
                            default: withCtx(() => [
                              createVNode(QCardSection, null, {
                                default: withCtx(() => [
                                  _hoisted_9,
                                  createVNode(QCard, null, {
                                    default: withCtx(() => [
                                      createVNode(QCardSection, null, {
                                        default: withCtx(() => [
                                          createBaseVNode("div", _hoisted_10, [
                                            createVNode(QIcon, {
                                              name: "account_circle",
                                              size: "24px"
                                            }),
                                            createTextVNode(" " + toDisplayString(modelOriginal.value.team), 1)
                                          ]),
                                          createBaseVNode("div", _hoisted_11, [
                                            modelOriginal.value.suburb ? (openBlock(), createElementBlock("span", _hoisted_12, [
                                              createVNode(QIcon, {
                                                name: "place",
                                                size: "24px"
                                              }),
                                              createTextVNode(" " + toDisplayString(modelOriginal.value.suburb), 1)
                                            ])) : createCommentVNode("", true)
                                          ]),
                                          modelOriginal.value.contractor && modelOriginal.value.scheduled_pickup_date && modelOriginal.value.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_13, [
                                            !_ctx.$q.screen.xs ? (openBlock(), createBlock(QIcon, {
                                              key: 0,
                                              name: "person",
                                              size: "24px"
                                            })) : createCommentVNode("", true),
                                            createTextVNode(" Pickup with " + toDisplayString(modelOriginal.value.contractor.first_name) + " on " + toDisplayString(modelOriginal.value.scheduled_pickup_date) + " ", 1),
                                            _ctx.$q.screen.xs ? (openBlock(), createElementBlock("br", _hoisted_14)) : createCommentVNode("", true),
                                            createTextVNode(" (" + toDisplayString(unref(hourBookingDisplay)(modelOriginal.value.scheduled_pickup_time)) + ") ", 1)
                                          ])) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  showChangeSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_15, [
                                    createVNode(QIcon, { name: "check" }),
                                    createTextVNode(" Your " + toDisplayString(_ctx.$t("order.name")) + " has been updated. ", 1)
                                  ])) : createCommentVNode("", true),
                                  showCancelSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_16, [
                                    createVNode(QIcon, { name: "check" }),
                                    createTextVNode(" Your " + toDisplayString(_ctx.$t("order.name")) + " has been cancelled. ", 1)
                                  ])) : createCommentVNode("", true),
                                  !showChange.value && !showCancel.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
                                    createVNode(QBtn, {
                                      onClick: _cache[0] || (_cache[0] = ($event) => showChangeFunc()),
                                      label: "Make a change to this booking",
                                      rounded: "",
                                      flat: "",
                                      color: "primary",
                                      icon: "edit"
                                    }),
                                    createVNode(QBtn, {
                                      onClick: _cache[1] || (_cache[1] = ($event) => showCancelFunc()),
                                      label: "Cancel this booking",
                                      rounded: "",
                                      flat: "",
                                      color: "red"
                                    })
                                  ])) : createCommentVNode("", true),
                                  showChange.value && !showChangeSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_18, [
                                    createBaseVNode("div", _hoisted_19, [
                                      createBaseVNode("div", _hoisted_20, [
                                        _hoisted_21,
                                        createBaseVNode("div", _hoisted_22, [
                                          createBaseVNode("div", null, [
                                            createBaseVNode("div", _hoisted_23, [
                                              createVNode(QCheckbox, {
                                                modelValue: washingAndIroning.value,
                                                "onUpdate:modelValue": [
                                                  _cache[2] || (_cache[2] = ($event) => washingAndIroning.value = $event),
                                                  _cache[3] || (_cache[3] = ($event) => toggleWashingAndIroning())
                                                ],
                                                label: "Washing & Ironing"
                                              }, null, 8, ["modelValue"])
                                            ]),
                                            !washingAndIroning.value ? (openBlock(), createElementBlock("div", _hoisted_24, [
                                              (openBlock(true), createElementBlock(Fragment, null, renderList(model.value.productcategories, (c) => {
                                                return openBlock(), createElementBlock("div", {
                                                  key: c.product_category_id,
                                                  class: "q-mr-sm"
                                                }, [
                                                  createVNode(QCheckbox, {
                                                    modelValue: c.active,
                                                    "onUpdate:modelValue": [
                                                      ($event) => c.active = $event,
                                                      _cache[4] || (_cache[4] = ($event) => [model.value.scheduled_pickup_date = null, model.value.scheduled_pickup_time = null, model.value.contractor_user_id = null])
                                                    ],
                                                    label: unref(categoryDisplay)(c.product_category_id, categories.value)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                                ]);
                                              }), 128))
                                            ])) : createCommentVNode("", true)
                                          ])
                                        ]),
                                        _hoisted_25,
                                        createVNode(QDate, {
                                          modelValue: model.value.scheduled_pickup_date,
                                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.value.scheduled_pickup_date = $event),
                                          mask: "DD/MM/YYYY",
                                          options: minDate,
                                          class: "q-mt-md",
                                          onNavigation: handleScheduledPickupDateNav
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      createBaseVNode("div", _hoisted_26, [
                                        _hoisted_27,
                                        model.value.suburb_postcode_region_id && model.value.scheduled_pickup_date && model.value.productcategories.filter((o) => o.active).length ? (openBlock(), createBlock(_sfc_main$2, {
                                          key: 0,
                                          scheduled_pickup_date: model.value.scheduled_pickup_date,
                                          scheduled_pickup_time: model.value.scheduled_pickup_time,
                                          modelValue: model.value.contractor_user_id,
                                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.value.contractor_user_id = $event),
                                          reassign: true,
                                          productcategories: model.value.productcategories.filter((o) => o.active),
                                          suburb_postcode_region_id: model.value.suburb_postcode_region_id,
                                          "onUpdate:modelValueTime": updateScheduledPickupTime
                                        }, null, 8, ["scheduled_pickup_date", "scheduled_pickup_time", "modelValue", "productcategories", "suburb_postcode_region_id"])) : createCommentVNode("", true),
                                        createVNode(QInput, {
                                          modelValue: model.value.special_instructions,
                                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.value.special_instructions = $event),
                                          label: "Special Instructions",
                                          outlined: "",
                                          type: "textarea",
                                          rows: "3",
                                          class: "q-mt-md",
                                          "bottom-slots": ""
                                        }, null, 8, ["modelValue"]),
                                        createVNode(QSelect, {
                                          modelValue: model.value.changes_reason,
                                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.value.changes_reason = $event),
                                          options: cancelOrderReasons,
                                          outlined: "",
                                          label: "Reason for change",
                                          error: unref($v).changes_reason.$invalid
                                        }, null, 8, ["modelValue", "error"]),
                                        createVNode(QInput, {
                                          modelValue: model.value.changes_notes,
                                          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.value.changes_notes = $event),
                                          label: "Notes about the change",
                                          type: "textarea",
                                          rows: "3",
                                          outlined: ""
                                        }, null, 8, ["modelValue"])
                                      ])
                                    ])
                                  ])) : createCommentVNode("", true),
                                  showCancel.value && !showCancelSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_28, [
                                    createVNode(QSelect, {
                                      modelValue: model.value.cancel_reason,
                                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => model.value.cancel_reason = $event),
                                      options: cancelOrderReasons,
                                      outlined: "",
                                      label: "Reason for cancellation",
                                      error: unref($v).cancel_reason.$invalid
                                    }, null, 8, ["modelValue", "error"]),
                                    createVNode(QInput, {
                                      modelValue: model.value.cancel_notes,
                                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => model.value.cancel_notes = $event),
                                      label: "Notes about the cancellation",
                                      type: "textarea",
                                      rows: "3",
                                      outlined: "",
                                      "bottom-slots": ""
                                    }, null, 8, ["modelValue"]),
                                    createVNode(QCheckbox, {
                                      modelValue: model.value.cancel_rebook,
                                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => model.value.cancel_rebook = $event),
                                      label: "Booking needs rescheduling"
                                    }, null, 8, ["modelValue"])
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(QCardActions, { align: "right" }, {
                                default: withCtx(() => [
                                  showChange.value && !showChangeSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_29, [
                                    createVNode(QBtn, {
                                      onClick: _cache[13] || (_cache[13] = ($event) => showChange.value = false),
                                      label: "Cancel",
                                      color: "secondary",
                                      flat: "",
                                      rounded: "",
                                      class: "q-mr-sm"
                                    }),
                                    createVNode(QBtn, {
                                      onClick: _cache[14] || (_cache[14] = ($event) => updateOrder()),
                                      disable: unref($v).$invalid,
                                      label: "Update Booking",
                                      color: "primary",
                                      rounded: ""
                                    }, null, 8, ["disable"])
                                  ])) : createCommentVNode("", true),
                                  showCancel.value && !showCancelSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_30, [
                                    createVNode(QBtn, {
                                      onClick: _cache[15] || (_cache[15] = ($event) => showCancel.value = false),
                                      label: "Reset",
                                      color: "secondary",
                                      flat: "",
                                      rounded: "",
                                      class: "q-mr-sm"
                                    }),
                                    createVNode(QBtn, {
                                      onClick: _cache[16] || (_cache[16] = ($event) => cancelOrder()),
                                      disable: unref($v).$invalid,
                                      label: "Cancel Booking",
                                      color: "red",
                                      rounded: ""
                                    }, null, 8, ["disable"])
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };