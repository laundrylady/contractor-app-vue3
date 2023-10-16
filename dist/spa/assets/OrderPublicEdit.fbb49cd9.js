import { A as defineComponent, r as ref, a9 as useRoute, o as onMounted, l as openBlock, J as createBlock, K as withCtx, k as createVNode, s as normalizeClass, p as createBaseVNode, m as createElementBlock, aH as toDisplayString, y as createCommentVNode, Q as QCard, L as QCardSection, N as QIcon, aG as createTextVNode, R as unref, P as QBtn, M as QInput, be as QCheckbox, aa as QCardActions } from "./index.b7abd301.js";
import { Q as QDate } from "./QDate.ec0270f6.js";
import { Q as QSelect } from "./QSelect.33228d01.js";
import { Q as QPage } from "./QPage.7fcde007.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.31c204e1.js";
import { u as useVuelidate, r as required, a as requiredIf } from "./index.esm.a3a69065.js";
import { a as api, m as moment } from "./axios.ac485b3d.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { b as hourBookingOptions, h as hourBookingDisplay, c as confirmDelete } from "./help.ae81b970.js";
import { p as productCategoriesVisibleBooking } from "./helpers.ece6d73c.js";
import { _ as _sfc_main$1 } from "./AppLogo.389869e0.js";
import "./use-cache.b0833c75.js";
import "./format.3e32b8d9.js";
import "./selection.a11a3ba2.js";
import "./QItemLabel.73012d76.js";
import "./QMenu.0c8d2be9.js";
import "./rtl.b51694b1.js";
import "./QResizeObserver.7e22ee07.js";
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
const _hoisted_14 = {
  key: 0,
  class: "bg-green text-white q-pa-md q-mt-md"
};
const _hoisted_15 = {
  key: 1,
  class: "bg-green text-white q-pa-md q-mt-md"
};
const _hoisted_16 = {
  key: 2,
  class: "q-mt-lg text-center"
};
const _hoisted_17 = {
  key: 3,
  class: "q-mt-xl"
};
const _hoisted_18 = { class: "row q-col-gutter-md" };
const _hoisted_19 = { class: "col-xs-12 col-sm-5 text-center" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "SCHEDULED PICKUP DATE", -1);
const _hoisted_21 = { class: "col-xs-12 col-sm-7" };
const _hoisted_22 = {
  key: 4,
  class: "q-mt-xl"
};
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", null, "PLEASE NOTE: Bookings that are cancelled within 3 hours of the scheduled pickup time will incur a $12.50 administration charge.", -1);
const _hoisted_24 = { key: 0 };
const _hoisted_25 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderPublicEdit",
  setup(__props) {
    const model = ref();
    const modelOriginal = ref();
    const categories = ref();
    const route = useRoute();
    const availableDates = ref();
    const currentBookingDate = ref();
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
      "Unavailable to complete booking",
      "Appointment made in error",
      "NDIS requested",
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
        modelOriginal.value = JSON.parse(JSON.stringify(response.data));
        currentBookingDate.value = moment(response.data.scheduled_pickup_date, "DD/MM/YYYY");
        if (model.value.scheduled_pickup_time && !hourBookingOptions.find((o) => o.value === model.value.scheduled_pickup_time)) {
          hourBookingOptions.unshift({ value: "", label: "-----------", disable: true });
          hourBookingOptions.unshift({ value: model.value.scheduled_pickup_time, label: hourBookingDisplay(model.value.scheduled_pickup_time), disable: false });
        }
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
                                            createVNode(QIcon, {
                                              name: "person",
                                              size: "24px"
                                            }),
                                            createTextVNode(" Pickup with " + toDisplayString(modelOriginal.value.contractor.first_name) + " on " + toDisplayString(modelOriginal.value.scheduled_pickup_date) + " (" + toDisplayString(unref(hourBookingDisplay)(modelOriginal.value.scheduled_pickup_time)) + ") ", 1)
                                          ])) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  showChangeSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
                                    createVNode(QIcon, { name: "check" }),
                                    createTextVNode(" Your " + toDisplayString(_ctx.$t("order.name")) + " has been updated. ", 1)
                                  ])) : createCommentVNode("", true),
                                  showCancelSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_15, [
                                    createVNode(QIcon, { name: "check" }),
                                    createTextVNode(" Your " + toDisplayString(_ctx.$t("order.name")) + " has been cancelled. ", 1)
                                  ])) : createCommentVNode("", true),
                                  !showChange.value && !showCancel.value ? (openBlock(), createElementBlock("div", _hoisted_16, [
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
                                  showChange.value && !showChangeSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
                                    createBaseVNode("div", _hoisted_18, [
                                      createBaseVNode("div", _hoisted_19, [
                                        _hoisted_20,
                                        createVNode(QDate, {
                                          modelValue: model.value.scheduled_pickup_date,
                                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value.scheduled_pickup_date = $event),
                                          mask: "DD/MM/YYYY",
                                          options: minDate,
                                          class: "q-mt-md",
                                          onNavigation: handleScheduledPickupDateNav
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      createBaseVNode("div", _hoisted_21, [
                                        createVNode(QSelect, {
                                          modelValue: model.value.scheduled_pickup_time,
                                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.value.scheduled_pickup_time = $event),
                                          label: _ctx.$t("order.scheduledPickupTime"),
                                          options: unref(hourBookingOptions),
                                          "emit-value": "",
                                          "map-options": "",
                                          outlined: ""
                                        }, null, 8, ["modelValue", "label", "options"]),
                                        createVNode(QInput, {
                                          modelValue: model.value.special_instructions,
                                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => model.value.special_instructions = $event),
                                          label: "Special Instructions",
                                          outlined: "",
                                          type: "textarea",
                                          rows: "3",
                                          class: "q-mt-md",
                                          "bottom-slots": ""
                                        }, null, 8, ["modelValue"]),
                                        createVNode(QSelect, {
                                          modelValue: model.value.changes_reason,
                                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.value.changes_reason = $event),
                                          options: cancelOrderReasons,
                                          outlined: "",
                                          label: "Reason for change",
                                          error: unref($v).changes_reason.$invalid
                                        }, null, 8, ["modelValue", "error"]),
                                        createVNode(QInput, {
                                          modelValue: model.value.changes_notes,
                                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.value.changes_notes = $event),
                                          label: "Notes about the change",
                                          type: "textarea",
                                          rows: "3",
                                          outlined: ""
                                        }, null, 8, ["modelValue"])
                                      ])
                                    ])
                                  ])) : createCommentVNode("", true),
                                  showCancel.value && !showCancelSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_22, [
                                    _hoisted_23,
                                    createVNode(QSelect, {
                                      modelValue: model.value.cancel_reason,
                                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.value.cancel_reason = $event),
                                      options: cancelOrderReasons,
                                      outlined: "",
                                      label: "Reason for cancellation",
                                      error: unref($v).cancel_reason.$invalid
                                    }, null, 8, ["modelValue", "error"]),
                                    createVNode(QInput, {
                                      modelValue: model.value.cancel_notes,
                                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.value.cancel_notes = $event),
                                      label: "Notes about the cancellation",
                                      type: "textarea",
                                      rows: "3",
                                      outlined: "",
                                      "bottom-slots": ""
                                    }, null, 8, ["modelValue"]),
                                    createVNode(QCheckbox, {
                                      modelValue: model.value.cancel_rebook,
                                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.value.cancel_rebook = $event),
                                      label: "Booking needs rescheduling"
                                    }, null, 8, ["modelValue"])
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(QCardActions, { align: "right" }, {
                                default: withCtx(() => [
                                  showChange.value && !showChangeSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_24, [
                                    createVNode(QBtn, {
                                      onClick: _cache[10] || (_cache[10] = ($event) => showChange.value = false),
                                      label: "Cancel",
                                      color: "secondary",
                                      flat: "",
                                      rounded: "",
                                      class: "q-mr-sm"
                                    }),
                                    createVNode(QBtn, {
                                      onClick: _cache[11] || (_cache[11] = ($event) => updateOrder()),
                                      disable: unref($v).$invalid,
                                      label: "Update Booking",
                                      color: "primary",
                                      rounded: ""
                                    }, null, 8, ["disable"])
                                  ])) : createCommentVNode("", true),
                                  showCancel.value && !showCancelSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_25, [
                                    createVNode(QBtn, {
                                      onClick: _cache[12] || (_cache[12] = ($event) => showCancel.value = false),
                                      label: "Reset",
                                      color: "secondary",
                                      flat: "",
                                      rounded: "",
                                      class: "q-mr-sm"
                                    }),
                                    createVNode(QBtn, {
                                      onClick: _cache[13] || (_cache[13] = ($event) => cancelOrder()),
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
