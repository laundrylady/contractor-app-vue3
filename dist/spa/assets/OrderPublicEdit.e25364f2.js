import { C as defineComponent, r as ref, ak as useRoute, o as onMounted, m as openBlock, aa as createBlock, K as withCtx, l as createVNode, t as normalizeClass, q as createBaseVNode, n as createElementBlock, ad as toDisplayString, z as createCommentVNode, Q as QCard, L as QCardSection, N as QIcon, ac as createTextVNode, R as unref, P as QBtn, F as Fragment, ab as renderList, bl as QCheckbox, M as QInput, ae as QCardActions } from "./index.f4154b53.js";
import { Q as QDate } from "./QDate.144d6785.js";
import { Q as QSelect } from "./QSelect.a5ed117f.js";
import { Q as QPage } from "./QPage.8e00c2bb.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.ca5d5059.js";
import { u as useVuelidate, r as required, a as requiredIf } from "./index.esm.be786825.js";
import { a as api, m as moment } from "./axios.8226f3dd.js";
import { _ as _sfc_main$3 } from "./OrderContractorManagement.f310bddf.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { h as hourBookingDisplay, a as categoryDisplay, c as confirmDelete } from "./help.64b1e895.js";
import { p as productCategoriesVisibleBooking } from "./helpers.b6f9c78e.js";
import { _ as _sfc_main$2 } from "./AppLogo.e4aa3d7a.js";
import { u as useMixinCommon } from "./common.469b0480.js";
import { _ as _sfc_main$1, a as _sfc_main$4 } from "./HeaderComponent.6cb9ac31.js";
import "./use-render-cache.3aae9b27.js";
import "./format.de7e9769.js";
import "./selection.f8026f5e.js";
import "./QItemLabel.4f1c6239.js";
import "./QMenu.48688247.js";
import "./rtl.276c3f1b.js";
import "./QResizeObserver.d4578012.js";
import "./QLinearProgress.17a0781c.js";
import "./QList.2c63e15c.js";
import "./UserAvatar.bf26ff0c.js";
import "./use-ratio.0255a8bc.js";
import "./common.dcf69d47.js";
import "./ndis_heart.0820b9e2.js";
import "./QSpace.59266848.js";
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
  class: "text-green q-mt-md"
};
const _hoisted_18 = {
  key: 3,
  class: "q-mt-md"
};
const _hoisted_19 = ["href"];
const _hoisted_20 = {
  key: 4,
  class: "q-mt-lg text-center"
};
const _hoisted_21 = { key: 2 };
const _hoisted_22 = { key: 0 };
const _hoisted_23 = {
  key: 5,
  class: "q-mt-xl"
};
const _hoisted_24 = { class: "row q-col-gutter-md" };
const _hoisted_25 = { class: "col-xs-12 col-sm-5" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("p", { class: "text-leftt text-bold text-grey" }, "CHOOSE THE SERVICES YOU REQUIRE:", -1);
const _hoisted_27 = { class: "flex" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold q-mt-md" }, "SCHEDULED PICKUP DATE", -1);
const _hoisted_29 = {
  key: 0,
  class: "q-mt-md"
};
const _hoisted_30 = { class: "col-xs-12 col-sm-7" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold q-mb-md" }, "SCHEDULED PICKUP TIME", -1);
const _hoisted_32 = {
  key: 6,
  class: "q-mt-xl"
};
const _hoisted_33 = { key: 0 };
const _hoisted_34 = { key: 1 };
const _hoisted_35 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderPublicEdit",
  setup(__props) {
    const common = useMixinCommon();
    const model = ref();
    const modelOriginal = ref();
    const categories = ref();
    const route = useRoute();
    const availableDates = ref();
    const loadingAvailableDates = ref(false);
    const currentBookingDate = ref();
    const minDate = (date) => {
      return availableDates.value.indexOf(date) !== -1;
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
      loadingAvailableDates.value = true;
      api.post("/public/order/findcontractorsdates", {
        suburb_postcode_region_id: modelOriginal.value.suburb_postcode_region_id,
        scheduled_pickup_date: currentBookingDate.value.format("DD/MM/YYYY"),
        productcategories: modelOriginal.value.productcategories
      }).then((response) => {
        availableDates.value = [moment(modelOriginal.value.scheduled_pickup_date, "DD/MM/YYYY").format("YYYY-MM-DD")].concat(response.data);
        loadingAvailableDates.value = false;
      }).catch((error) => {
        loadingAvailableDates.value = false;
        useMixinDebug(error);
      });
    };
    const getOrder = () => {
      api.get(`/public/b/${route.params.id}`).then((response) => {
        model.value = response.data;
        modelOriginal.value = JSON.parse(JSON.stringify(response.data));
        currentBookingDate.value = moment(response.data.scheduled_pickup_date, "DD/MM/YYYY");
        getAvailableContractorsDates();
        setInterval(() => {
          canChangeFunc();
        }, 6e4);
        setInterval(() => {
          canCancelFunc();
        }, 6e4);
        canChangeFunc();
        canCancelFunc();
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
      model.value.contractor_user_id = modelOriginal.value.contractor_user_id;
      showCancel.value = true;
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
    const canChange = ref(false);
    const canChangeFunc = () => {
      if (!model.value.scheduled_pickup_date || !model.value.scheduled_pickup_time) {
        canChange.value = true;
        return true;
      }
      if (model.value.scheduled_pickup_date !== moment().format("DD/MM/YYYY")) {
        canChange.value = true;
        return true;
      }
      const pickupTime = parseFloat(model.value.scheduled_pickup_time.split("-"));
      const timeNow = parseFloat(moment().format("H"));
      if (!isNaN(pickupTime) && !isNaN(timeNow)) {
        const diff = pickupTime - timeNow;
        if (diff <= 3) {
          canChange.value = false;
          return false;
        } else {
          canChange.value = true;
          return true;
        }
      }
      canChange.value = false;
    };
    const canCancel = ref(false);
    const canCancelFunc = () => {
      if (!model.value.scheduled_pickup_date || !model.value.scheduled_pickup_time) {
        canCancel.value = true;
        return false;
      }
      if (model.value.scheduled_pickup_date !== moment().format("DD/MM/YYYY")) {
        canCancel.value = true;
        return true;
      }
      const pickupTime = parseFloat(model.value.scheduled_pickup_time.split("-"));
      const timeNow = parseFloat(moment().format("H"));
      if (!isNaN(pickupTime) && !isNaN(timeNow)) {
        const diff = pickupTime - timeNow;
        if (diff <= 3) {
          canCancel.value = false;
          return false;
        } else {
          canCancel.value = true;
          return true;
        }
      }
      canCancel.value = false;
    };
    onMounted(async () => {
      categories.value = await productCategoriesVisibleBooking();
      getOrder();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                padding: "",
                class: normalizeClass({ "q-pa-md": _ctx.$q.screen.xs })
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(_sfc_main$2)
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
                                  model.value.status === "completed" ? (openBlock(), createElementBlock("div", _hoisted_17, [
                                    createVNode(QIcon, {
                                      name: "check_circle",
                                      size: "20px"
                                    }),
                                    createTextVNode(" This booking has been completed ")
                                  ])) : createCommentVNode("", true),
                                  !model.value.canEdit ? (openBlock(), createElementBlock("div", _hoisted_18, [
                                    createTextVNode("If you require further assistance for your booking please contact our "),
                                    unref(common) ? (openBlock(), createElementBlock("a", {
                                      key: 0,
                                      href: `mailto:${unref(common).operating_country === "aud" ? "support@thelaundrylady.com.au" : "support@thelaundrylady.co.nz"}?subject=Booking ${model.value.display_id}`,
                                      class: "link"
                                    }, "Support Team", 8, _hoisted_19)) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true),
                                  !showChange.value && !showCancel.value && model.value.canEdit ? (openBlock(), createElementBlock("div", _hoisted_20, [
                                    canChange.value ? (openBlock(), createBlock(QBtn, {
                                      key: 0,
                                      onClick: _cache[0] || (_cache[0] = ($event) => showChangeFunc()),
                                      label: "Make a change to this booking",
                                      rounded: "",
                                      flat: "",
                                      color: "primary",
                                      icon: "edit"
                                    })) : createCommentVNode("", true),
                                    canCancel.value ? (openBlock(), createBlock(QBtn, {
                                      key: 1,
                                      onClick: _cache[1] || (_cache[1] = ($event) => showCancelFunc()),
                                      label: "Cancel this booking",
                                      rounded: "",
                                      flat: "",
                                      color: "red"
                                    })) : createCommentVNode("", true),
                                    !canCancel.value && !canChange.value ? (openBlock(), createElementBlock("div", _hoisted_21, [
                                      createTextVNode(" *This Booking is within the 3 hour notification period of the agreed pickup time. "),
                                      model.value.contractor ? (openBlock(), createElementBlock("div", _hoisted_22, "Please contact " + toDisplayString(model.value.contractor.contractor_badge_name) + " on " + toDisplayString(model.value.contractor.mobile), 1)) : createCommentVNode("", true)
                                    ])) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true),
                                  showChange.value && !showChangeSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
                                    createBaseVNode("div", _hoisted_24, [
                                      createBaseVNode("div", _hoisted_25, [
                                        _hoisted_26,
                                        createBaseVNode("div", _hoisted_27, [
                                          createBaseVNode("div", null, [
                                            (openBlock(true), createElementBlock(Fragment, null, renderList(model.value.productcategories, (c) => {
                                              return openBlock(), createElementBlock("div", {
                                                key: c.product_category_id,
                                                class: "q-mr-sm"
                                              }, [
                                                createVNode(QCheckbox, {
                                                  modelValue: c.active,
                                                  "onUpdate:modelValue": [
                                                    ($event) => c.active = $event,
                                                    _cache[2] || (_cache[2] = ($event) => [model.value.scheduled_pickup_date = null, model.value.scheduled_pickup_time = null, model.value.contractor_user_id = null])
                                                  ],
                                                  label: unref(categoryDisplay)(c.product_category_id, categories.value)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                              ]);
                                            }), 128))
                                          ])
                                        ]),
                                        _hoisted_28,
                                        createVNode(QDate, {
                                          modelValue: model.value.scheduled_pickup_date,
                                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.value.scheduled_pickup_date = $event),
                                          mask: "DD/MM/YYYY",
                                          options: minDate,
                                          class: "q-mt-md",
                                          onNavigation: handleScheduledPickupDateNav,
                                          disable: loadingAvailableDates.value
                                        }, null, 8, ["modelValue", "disable"]),
                                        model.value.recurringInfo && model.value.recurringInfo.recurring ? (openBlock(), createElementBlock("div", _hoisted_29, "*This is a recurring booking every " + toDisplayString(model.value.recurringInfo.recurring_every > 1 ? model.value.recurringInfo.recurring_every : "") + " " + toDisplayString(model.value.recurringInfo.recurring.toLowerCase()) + toDisplayString(model.value.recurringInfo.recurring_every > 1 ? "s" : "") + ". Please contact your Laundry Lady/Lad to make any changes to the schedule.", 1)) : createCommentVNode("", true)
                                      ]),
                                      createBaseVNode("div", _hoisted_30, [
                                        _hoisted_31,
                                        model.value.suburb_postcode_region_id && model.value.scheduled_pickup_date && model.value.productcategories.filter((o) => o.active).length ? (openBlock(), createBlock(_sfc_main$3, {
                                          key: 0,
                                          scheduled_pickup_date: model.value.scheduled_pickup_date,
                                          scheduled_pickup_time: model.value.scheduled_pickup_time,
                                          modelValue: model.value.contractor_user_id,
                                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => model.value.contractor_user_id = $event),
                                          reassign: true,
                                          productcategories: model.value.productcategories.filter((o) => o.active),
                                          suburb_postcode_region_id: model.value.suburb_postcode_region_id,
                                          "onUpdate:modelValueTime": updateScheduledPickupTime
                                        }, null, 8, ["scheduled_pickup_date", "scheduled_pickup_time", "modelValue", "productcategories", "suburb_postcode_region_id"])) : createCommentVNode("", true),
                                        createVNode(QInput, {
                                          modelValue: model.value.special_instructions,
                                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.value.special_instructions = $event),
                                          label: "Special Instructions",
                                          outlined: "",
                                          type: "textarea",
                                          rows: "3",
                                          class: "q-mt-md",
                                          "bottom-slots": ""
                                        }, null, 8, ["modelValue"]),
                                        createVNode(QSelect, {
                                          modelValue: model.value.changes_reason,
                                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.value.changes_reason = $event),
                                          options: cancelOrderReasons,
                                          outlined: "",
                                          label: "Reason for change",
                                          error: unref($v).changes_reason.$invalid
                                        }, null, 8, ["modelValue", "error"]),
                                        createVNode(QInput, {
                                          modelValue: model.value.changes_notes,
                                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.value.changes_notes = $event),
                                          label: "Notes about the change",
                                          type: "textarea",
                                          rows: "3",
                                          outlined: ""
                                        }, null, 8, ["modelValue"])
                                      ])
                                    ])
                                  ])) : createCommentVNode("", true),
                                  showCancel.value && !showCancelSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_32, [
                                    createVNode(QSelect, {
                                      modelValue: model.value.cancel_reason,
                                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.value.cancel_reason = $event),
                                      options: cancelOrderReasons,
                                      outlined: "",
                                      label: "Reason for cancellation",
                                      error: unref($v).cancel_reason.$invalid
                                    }, null, 8, ["modelValue", "error"]),
                                    createVNode(QInput, {
                                      modelValue: model.value.cancel_notes,
                                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.value.cancel_notes = $event),
                                      label: "Notes about the cancellation",
                                      type: "textarea",
                                      rows: "3",
                                      outlined: "",
                                      "bottom-slots": ""
                                    }, null, 8, ["modelValue"])
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              createVNode(QCardActions, { align: "right" }, {
                                default: withCtx(() => [
                                  showChange.value && !showChangeSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_33, [
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
                                  showCancel.value && !showCancelSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_34, [
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
              }, 8, ["class"]),
              model.value && model.value.id ? (openBlock(), createElementBlock("div", _hoisted_35, [
                createVNode(_sfc_main$4, {
                  booking: false,
                  apply: true
                })
              ])) : createCommentVNode("", true)
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
