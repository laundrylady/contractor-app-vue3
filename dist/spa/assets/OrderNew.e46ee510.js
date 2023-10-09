import { A as defineComponent, r as ref, B as reactive, i as inject, o as onMounted, E as onBeforeUnmount, l as openBlock, J as createBlock, K as withCtx, k as createVNode, s as normalizeClass, R as unref, m as createElementBlock, p as createBaseVNode, y as createCommentVNode, Q as QCard, L as QCardSection, P as QBtn, be as QCheckbox, F as Fragment, bd as renderList, M as QInput, aH as toDisplayString, ai as QToggle, N as QIcon } from "./index.ce4c1a7a.js";
import { Q as QDate } from "./QDate.43a36fe2.js";
import { Q as QSelect } from "./QSelect.34b2bc9a.js";
import { Q as QPage } from "./QPage.f6cf2197.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.4c640deb.js";
import { _ as _sfc_main$6, a as _imports_0, b as _imports_1 } from "./OrderNewSummary.f50f322d.js";
import { _ as _imports_0$1 } from "./ndis_heart.0820b9e2.js";
import { u as useVuelidate, r as required, a as requiredIf, e as email } from "./index.esm.20373706.js";
import { m as moment, a as api } from "./axios.b7066d7d.js";
import { u as useQuasar } from "./use-quasar.0e58704c.js";
import { _ as _sfc_main$4 } from "./AddressSearch.ffa9a07a.js";
import { _ as _sfc_main$5 } from "./CountryField.28e5c88c.js";
import { _ as _sfc_main$2 } from "./PostcodeRegionField.7d2af560.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { a as categoryDisplay, c as confirmDelete } from "./help.78e61210.js";
import { p as productCategoriesVisibleBooking } from "./helpers.3f1a2a8d.js";
import { _ as _sfc_main$1 } from "./AppLogo.28cd238c.js";
import { _ as _sfc_main$3 } from "./OrderContractorManagement.648af851.js";
import "./use-cache.b0833c75.js";
import "./format.3e32b8d9.js";
import "./selection.65eebc9b.js";
import "./QItemLabel.ee47553a.js";
import "./QMenu.9894afac.js";
import "./rtl.b51694b1.js";
import "./QResizeObserver.32f7bfef.js";
import "./QLinearProgress.6889a73e.js";
import "./QList.05512999.js";
import "./UserAvatar.9f32071f.js";
import "./QImg.d0d81a6d.js";
import "./use-ratio.a90f4b4e.js";
const _hoisted_1 = {
  key: 0,
  class: "flex justify-center q-mt-xl"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "flex items-end" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 })
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "flex items-start" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_1 })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "flex items-end" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 })
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex items-start" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_1 })
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "flex items-end" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 })
], -1);
const _hoisted_7 = { class: "row q-mt-xl q-mb-lg" };
const _hoisted_8 = { class: "col-xs-12 col-sm-6 offset-sm-3 text-center" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "row text-lg q-mb-lg" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "col-xs-12 col-sm-6 offset-sm-3 text-center" }, " Book your mobile Laundry service. Washing, Ironing, Pickup and Delivery. ")
], -1);
const _hoisted_10 = { class: "row q-col-gutter-md" };
const _hoisted_11 = { class: "col-xs-12 col-sm-6 offset-sm-3" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Select your pickup location:", -1);
const _hoisted_13 = {
  key: 0,
  class: "text-lg text-center q-mt-lg"
};
const _hoisted_14 = { class: "text-center q-mt-xl" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Choose the services you require:", -1);
const _hoisted_16 = { class: "flex justify-center" };
const _hoisted_17 = { class: "q-mr-sm" };
const _hoisted_18 = { key: 0 };
const _hoisted_19 = { class: "text-center q-mt-xl" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Choose the desired pickup date:", -1);
const _hoisted_21 = { class: "text-center" };
const _hoisted_22 = { class: "q-mt-xl text-center" };
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Select your Laundry Lad or Lad:", -1);
const _hoisted_24 = { class: "q-mt-xl text-center" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Enter your details:", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Your Details", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("p", null, "Text here", -1);
const _hoisted_28 = { class: "row q-col-gutter-md" };
const _hoisted_29 = { class: "col-xs-4" };
const _hoisted_30 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_31 = { class: "col-xs-6" };
const _hoisted_32 = {
  key: 0,
  class: "col-xs-6"
};
const _hoisted_33 = {
  key: 1,
  class: "row q-col-gutter-md"
};
const _hoisted_34 = { class: "col-xs-6" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0$1,
  style: { "height": "32px" }
}, null, -1);
const _hoisted_36 = { class: "col-xs-6" };
const _hoisted_37 = { class: "row q-col-gutter-md" };
const _hoisted_38 = { class: "col-xs-6" };
const _hoisted_39 = { class: "col-xs-6" };
const _hoisted_40 = { class: "row q-col-gutter-md" };
const _hoisted_41 = { class: "col-xs-6" };
const _hoisted_42 = { class: "col-xs-6" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Pickup Address", -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("p", null, "Enter your pickup / delivery address.", -1);
const _hoisted_45 = { class: "row q-col-gutter-md" };
const _hoisted_46 = { class: "q-mt-xl text-center" };
const _hoisted_47 = {
  key: 0,
  class: "text-center text-bold"
};
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Your contact details", -1);
const _hoisted_49 = { class: "q-mb-md" };
const _hoisted_50 = { class: "text-center" };
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 text-center q-mt-sm" }, "Booking Confirmed", -1);
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center" }, "Great news, your booking has been confirmed!", -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center" }, "Next steps....", -1);
const _hoisted_54 = {
  key: 1,
  class: "q-mt-xl text-center"
};
const _hoisted_55 = {
  key: 0,
  class: "col-xs-12 col-sm-3"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderNew",
  setup(__props) {
    const step = ref(1);
    const washingAndIroning = ref(false);
    const categories = ref();
    const availableDates = ref([]);
    const success = ref(false);
    const error = ref(false);
    const schema = {
      address1: null,
      address2: null,
      suburb_postcode_region_id: null,
      lat: null,
      lng: null,
      country_id: 13,
      contractor_user_id: null,
      scheduled_pickup_date: null,
      scheduled_pickup_time: null,
      special_instructions: null,
      recurring_order: false,
      recurring: null,
      productcategories: [],
      team: {
        id: null,
        name: null,
        first_name: null,
        last_name: null,
        type: null,
        email: null,
        mobile: null,
        ndis_number: null,
        ndis_type: null,
        abn: null
      }
    };
    const model = reactive(JSON.parse(JSON.stringify(schema)));
    const bus = inject("bus");
    const minDate = (date) => {
      return date >= moment().add(1, "day").format("YYYY/MM/DD") && availableDates.value.indexOf(date) !== -1;
    };
    const currentBookingDate = ref(moment());
    const noContractors = ref(false);
    const rules = {
      suburb_postcode_region_id: { required },
      address2: { required },
      country_id: { required },
      scheduled_pickup_date: { required },
      scheduled_pickup_time: { required },
      contractor_user_id: { required },
      productcategories: { required },
      recurring: { requiredIf: requiredIf(() => model.recurring_order) },
      team: {
        name: { requiredIf: requiredIf(() => ["Business", "Aged Care", "Sporting Group"].indexOf(model.team.type || "") !== -1) },
        first_name: { required },
        last_name: { required },
        type: { required },
        email: { required, email },
        mobile: { required },
        ndis_number: { requiredIf: requiredIf(() => model.team.type === "NDIS") },
        ndis_type: { requiredIf: requiredIf(() => model.team.type === "NDIS") },
        abn: { requiredIf: requiredIf(() => ["Business", "Aged Care", "Sporting Group"].indexOf(model.team.type || "") !== -1) }
      }
    };
    const $v = useVuelidate(rules, model);
    const $q = useQuasar();
    const toggleWashingAndIroning = () => {
      model.productcategories.forEach((o) => {
        o.active = washingAndIroning.value;
      });
      model.scheduled_pickup_date = null;
      model.scheduled_pickup_time = null;
      model.contractor_user_id = null;
    };
    const stepMove = (nextStep) => {
      if (nextStep === 3) {
        getAvailableContractorsDates();
      } else {
        step.value = nextStep;
      }
    };
    const checkContractors = () => {
      if (!model.suburb_postcode_region_id) {
        noContractors.value = false;
      } else {
        api.post("/public/order/findcontractorsinsuburbpostcoderegion", { suburb_postcode_region_id: model.suburb_postcode_region_id }).then((response) => {
          noContractors.value = !response.data.found;
          if (noContractors.value) {
            model.suburb_postcode_region_id = null;
          }
        }).catch((error2) => {
          useMixinDebug(error2);
        });
      }
    };
    const handleScheduledPickupDateNav = (view) => {
      currentBookingDate.value = moment(`${view.year}-${view.month}-01`);
      getAvailableContractorsDates();
    };
    const getAvailableContractorsDates = () => {
      availableDates.value = [];
      api.post("/public/order/findcontractorsdates", {
        suburb_postcode_region_id: model.suburb_postcode_region_id,
        scheduled_pickup_date: currentBookingDate.value.format("DD/MM/YYYY"),
        productcategories: model.productcategories
      }).then((response) => {
        availableDates.value = response.data;
        step.value = 3;
      }).catch((error2) => {
        useMixinDebug(error2);
      });
    };
    const updateScheduledPickupTime = (val) => {
      model.scheduled_pickup_time = val;
    };
    const save = () => {
      confirmDelete("This will confirm the booking").onOk(() => {
        $q.loading.show({ message: "Confirming booking..." });
        success.value = false;
        error.value = false;
        api.post("/public/order/new", model).then(() => {
          success.value = true;
          $q.loading.hide();
        }).catch((error2) => {
          useMixinDebug(error2);
          error2.value = true;
          $q.loading.hide();
        });
      });
    };
    onMounted(async () => {
      Object.assign(model, JSON.parse(JSON.stringify(schema)));
      categories.value = await productCategoriesVisibleBooking();
      model.productcategories = [];
      for (const c of categories.value) {
        model.productcategories.push({ product_category_id: c.value, active: false });
      }
      washingAndIroning.value = false;
    });
    onBeforeUnmount(() => {
      bus.off("newOrder");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                padding: "",
                class: normalizeClass({ "q-pa-md": unref($q).screen.xs })
              }, {
                default: withCtx(() => [
                  !unref($q).screen.xs ? (openBlock(), createElementBlock("div", _hoisted_1, [
                    createBaseVNode("div", {
                      class: normalizeClass(["order-new-step", { "active": step.value === 1 || model.suburb_postcode_region_id }]),
                      onClick: _cache[0] || (_cache[0] = ($event) => stepMove(1))
                    }, " Select your suburb ", 2),
                    _hoisted_2,
                    createBaseVNode("div", {
                      class: normalizeClass(["order-new-step", { "active": step.value === 2 || model.productcategories.filter((o) => o.active).length }])
                    }, " Select your service ", 2),
                    _hoisted_3,
                    createBaseVNode("div", {
                      class: normalizeClass(["order-new-step", { "active": step.value === 3 || model.scheduled_pickup_date }])
                    }, " Select pickup date ", 2),
                    _hoisted_4,
                    createBaseVNode("div", {
                      class: normalizeClass(["order-new-step", { "active": step.value === 4 || model.contractor_user_id }])
                    }, " Select your Laundry Lady or Lad ", 2),
                    _hoisted_5,
                    createBaseVNode("div", {
                      class: normalizeClass(["order-new-step", { "active": step.value === 5 || !unref($v).$invalid }])
                    }, " Enter your details ", 2),
                    _hoisted_6,
                    createBaseVNode("div", {
                      class: normalizeClass(["order-new-step", { "active": step.value === 6 }])
                    }, " Confirm booking ", 2)
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("div", _hoisted_8, [
                      createVNode(_sfc_main$1)
                    ])
                  ]),
                  _hoisted_9,
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, [
                      createVNode(QCard, {
                        flat: "",
                        class: "bg-page"
                      }, {
                        default: withCtx(() => [
                          step.value === 1 ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                            default: withCtx(() => [
                              _hoisted_12,
                              createVNode(_sfc_main$2, {
                                modelValue: model.suburb_postcode_region_id,
                                "onUpdate:modelValue": [
                                  _cache[1] || (_cache[1] = ($event) => model.suburb_postcode_region_id = $event),
                                  _cache[2] || (_cache[2] = ($event) => checkContractors())
                                ],
                                label: "Enter your pickup suburb",
                                outlined: "",
                                invalid: unref($v).suburb_postcode_region_id.$invalid
                              }, null, 8, ["modelValue", "invalid"]),
                              noContractors.value ? (openBlock(), createElementBlock("div", _hoisted_13, "Sorry, there is currently no availability in this area.")) : createCommentVNode("", true),
                              createBaseVNode("div", _hoisted_14, [
                                createVNode(QBtn, {
                                  onClick: _cache[3] || (_cache[3] = ($event) => stepMove(2)),
                                  color: "primary",
                                  label: "Continue",
                                  rounded: "",
                                  disable: !model.suburb_postcode_region_id
                                }, null, 8, ["disable"])
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          step.value === 2 ? (openBlock(), createBlock(QCardSection, { key: 1 }, {
                            default: withCtx(() => [
                              _hoisted_15,
                              createBaseVNode("div", _hoisted_16, [
                                createBaseVNode("div", null, [
                                  createBaseVNode("div", _hoisted_17, [
                                    createVNode(QCheckbox, {
                                      modelValue: washingAndIroning.value,
                                      "onUpdate:modelValue": [
                                        _cache[4] || (_cache[4] = ($event) => washingAndIroning.value = $event),
                                        _cache[5] || (_cache[5] = ($event) => toggleWashingAndIroning())
                                      ],
                                      label: "Washing & Ironing"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  !washingAndIroning.value ? (openBlock(), createElementBlock("div", _hoisted_18, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(model.productcategories, (c) => {
                                      return openBlock(), createElementBlock("div", {
                                        key: c.product_category_id,
                                        class: "q-mr-sm"
                                      }, [
                                        createVNode(QCheckbox, {
                                          modelValue: c.active,
                                          "onUpdate:modelValue": [
                                            ($event) => c.active = $event,
                                            _cache[6] || (_cache[6] = ($event) => [model.scheduled_pickup_date = null, model.scheduled_pickup_time = null, model.contractor_user_id = null])
                                          ],
                                          label: unref(categoryDisplay)(c.product_category_id, categories.value)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                      ]);
                                    }), 128))
                                  ])) : createCommentVNode("", true)
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_19, [
                                createVNode(QBtn, {
                                  onClick: _cache[7] || (_cache[7] = ($event) => stepMove(1)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[8] || (_cache[8] = ($event) => stepMove(3)),
                                  color: "primary",
                                  label: "Continue",
                                  disable: !model.productcategories.filter((o) => o.active).length,
                                  rounded: ""
                                }, null, 8, ["disable"])
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          step.value === 3 ? (openBlock(), createBlock(QCardSection, { key: 2 }, {
                            default: withCtx(() => [
                              _hoisted_20,
                              createBaseVNode("div", _hoisted_21, [
                                createVNode(QDate, {
                                  modelValue: model.scheduled_pickup_date,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.scheduled_pickup_date = $event),
                                  mask: "DD/MM/YYYY",
                                  options: minDate,
                                  class: "q-mt-md",
                                  onNavigation: handleScheduledPickupDateNav
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", _hoisted_22, [
                                createVNode(QBtn, {
                                  onClick: _cache[10] || (_cache[10] = ($event) => stepMove(2)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[11] || (_cache[11] = ($event) => stepMove(4)),
                                  color: "primary",
                                  label: "Continue",
                                  disable: !model.scheduled_pickup_date,
                                  rounded: ""
                                }, null, 8, ["disable"])
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          step.value === 4 ? (openBlock(), createBlock(QCardSection, { key: 3 }, {
                            default: withCtx(() => [
                              _hoisted_23,
                              createVNode(QCard, null, {
                                default: withCtx(() => [
                                  createVNode(QCardSection, null, {
                                    default: withCtx(() => [
                                      model.suburb_postcode_region_id && model.scheduled_pickup_date && model.productcategories.filter((o) => o.active).length ? (openBlock(), createBlock(_sfc_main$3, {
                                        key: 0,
                                        scheduled_pickup_date: model.scheduled_pickup_date,
                                        scheduled_pickup_time: model.scheduled_pickup_time,
                                        modelValue: model.contractor_user_id,
                                        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => model.contractor_user_id = $event),
                                        reassign: true,
                                        productcategories: model.productcategories.filter((o) => o.active),
                                        suburb_postcode_region_id: model.suburb_postcode_region_id,
                                        "onUpdate:modelValueTime": updateScheduledPickupTime
                                      }, null, 8, ["scheduled_pickup_date", "scheduled_pickup_time", "modelValue", "productcategories", "suburb_postcode_region_id"])) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createBaseVNode("div", _hoisted_24, [
                                createVNode(QBtn, {
                                  onClick: _cache[13] || (_cache[13] = ($event) => stepMove(3)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[14] || (_cache[14] = ($event) => stepMove(5)),
                                  color: "primary",
                                  label: "Continue",
                                  disable: !model.contractor_user_id,
                                  rounded: ""
                                }, null, 8, ["disable"])
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          step.value === 5 ? (openBlock(), createBlock(QCardSection, { key: 4 }, {
                            default: withCtx(() => [
                              _hoisted_25,
                              createVNode(QCard, null, {
                                default: withCtx(() => [
                                  createVNode(QCardSection, null, {
                                    default: withCtx(() => [
                                      _hoisted_26,
                                      _hoisted_27,
                                      createBaseVNode("div", _hoisted_28, [
                                        createBaseVNode("div", _hoisted_29, [
                                          createVNode(QSelect, {
                                            modelValue: model.team.type,
                                            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => model.team.type = $event),
                                            error: unref($v).team.type.$invalid,
                                            label: _ctx.$t("team.type"),
                                            options: ["Residential", "Business", "NDIS", "Home Care", "Aged Care", "DVA", "Sporting Group", "Other"],
                                            outlined: ""
                                          }, null, 8, ["modelValue", "error", "label"])
                                        ])
                                      ]),
                                      ["Business", "Aged Care", "Sporting Group"].indexOf(model.team.type || "") !== -1 ? (openBlock(), createElementBlock("div", _hoisted_30, [
                                        createBaseVNode("div", _hoisted_31, [
                                          createVNode(QInput, {
                                            modelValue: model.team.name,
                                            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => model.team.name = $event),
                                            label: _ctx.$t("team.teamName"),
                                            error: unref($v).team.name.$invalid,
                                            outlined: ""
                                          }, null, 8, ["modelValue", "label", "error"])
                                        ]),
                                        ["Business", "Aged Care", "Sporting Group"].indexOf(model.team.type || "") !== -1 ? (openBlock(), createElementBlock("div", _hoisted_32, [
                                          createVNode(QInput, {
                                            modelValue: model.team.abn,
                                            "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => model.team.abn = $event),
                                            label: _ctx.$t("team.abn"),
                                            error: unref($v).team.abn.$invalid,
                                            outlined: ""
                                          }, null, 8, ["modelValue", "label", "error"])
                                        ])) : createCommentVNode("", true)
                                      ])) : createCommentVNode("", true),
                                      model.team.type === "NDIS" ? (openBlock(), createElementBlock("div", _hoisted_33, [
                                        createBaseVNode("div", _hoisted_34, [
                                          createVNode(QInput, {
                                            modelValue: model.team.ndis_number,
                                            "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => model.team.ndis_number = $event),
                                            label: _ctx.$t("team.ndisNumber"),
                                            outlined: "",
                                            error: unref($v).team.ndis_number.$invalid
                                          }, {
                                            prepend: withCtx(() => [
                                              _hoisted_35
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "label", "error"])
                                        ]),
                                        createBaseVNode("div", _hoisted_36, [
                                          createVNode(QSelect, {
                                            modelValue: model.team.ndis_type,
                                            "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => model.team.ndis_type = $event),
                                            label: _ctx.$t("team.ndisType"),
                                            error: unref($v).team.ndis_type.$invalid,
                                            outlined: "",
                                            options: ["Self managed", "Plan managed", "NDIA registered"]
                                          }, null, 8, ["modelValue", "label", "error"])
                                        ])
                                      ])) : createCommentVNode("", true),
                                      createBaseVNode("div", _hoisted_37, [
                                        createBaseVNode("div", _hoisted_38, [
                                          createVNode(QInput, {
                                            modelValue: model.team.first_name,
                                            "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => model.team.first_name = $event),
                                            error: unref($v).team.first_name.$invalid,
                                            label: "Contact first name",
                                            outlined: ""
                                          }, null, 8, ["modelValue", "error"])
                                        ]),
                                        createBaseVNode("div", _hoisted_39, [
                                          createVNode(QInput, {
                                            modelValue: model.team.last_name,
                                            "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => model.team.last_name = $event),
                                            error: unref($v).team.last_name.$invalid,
                                            label: "Contact last name",
                                            outlined: ""
                                          }, null, 8, ["modelValue", "error"])
                                        ])
                                      ]),
                                      createBaseVNode("div", _hoisted_40, [
                                        createBaseVNode("div", _hoisted_41, [
                                          createVNode(QInput, {
                                            modelValue: model.team.email,
                                            "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => model.team.email = $event),
                                            error: unref($v).team.email.$invalid,
                                            label: "Your email address",
                                            outlined: ""
                                          }, null, 8, ["modelValue", "error"])
                                        ]),
                                        createBaseVNode("div", _hoisted_42, [
                                          createVNode(QInput, {
                                            modelValue: model.team.mobile,
                                            "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => model.team.mobile = $event),
                                            error: unref($v).team.mobile.$invalid,
                                            label: "Your contact mobile number",
                                            outlined: "",
                                            mask: "#### ### ###"
                                          }, null, 8, ["modelValue", "error"])
                                        ])
                                      ]),
                                      _hoisted_43,
                                      _hoisted_44,
                                      createVNode(_sfc_main$4, {
                                        model,
                                        filled: true,
                                        addressfields: { address1: "address1", address2: "address2", suburb_postcode_region_id: "suburb_postcode_region_id", lat: "lat", lng: "lng", country_id: "country_id" },
                                        placeholder: _ctx.$t("address.search")
                                      }, null, 8, ["model", "placeholder"]),
                                      createVNode(QInput, {
                                        modelValue: model.address1,
                                        "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => model.address1 = $event),
                                        label: _ctx.$t("address.line1"),
                                        outlined: "",
                                        class: "q-mb-md"
                                      }, null, 8, ["modelValue", "label"]),
                                      createVNode(QInput, {
                                        modelValue: model.address2,
                                        "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => model.address2 = $event),
                                        error: unref($v).address2.$invalid,
                                        label: _ctx.$t("address.line2"),
                                        outlined: ""
                                      }, null, 8, ["modelValue", "error", "label"]),
                                      createBaseVNode("div", _hoisted_45, [
                                        createVNode(_sfc_main$2, {
                                          modelValue: model.suburb_postcode_region_id,
                                          "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => model.suburb_postcode_region_id = $event),
                                          invalid: unref($v).suburb_postcode_region_id.$invalid,
                                          label: _ctx.$t("address.suburb"),
                                          class: "col-xs-12 col-sm-6",
                                          outlined: true
                                        }, null, 8, ["modelValue", "invalid", "label"]),
                                        createVNode(_sfc_main$5, {
                                          modelValue: model.country_id,
                                          "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => model.country_id = $event),
                                          label: _ctx.$t("address.country"),
                                          class: "col-xs-12 col-sm-6",
                                          outlined: true,
                                          invalid: unref($v).country_id.$invalid
                                        }, null, 8, ["modelValue", "label", "invalid"])
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createBaseVNode("div", _hoisted_46, [
                                createVNode(QBtn, {
                                  onClick: _cache[28] || (_cache[28] = ($event) => stepMove(4)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[29] || (_cache[29] = ($event) => stepMove(6)),
                                  color: "primary",
                                  label: "Continue",
                                  disable: unref($v).$invalid,
                                  rounded: ""
                                }, null, 8, ["disable"])
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          step.value === 6 ? (openBlock(), createBlock(QCardSection, { key: 5 }, {
                            default: withCtx(() => [
                              !success.value && !error.value ? (openBlock(), createElementBlock("p", _hoisted_47, "Confirm your booking:")) : createCommentVNode("", true),
                              createVNode(QCard, null, {
                                default: withCtx(() => [
                                  !success.value && !error.value ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                                    default: withCtx(() => [
                                      _hoisted_48,
                                      createBaseVNode("div", null, toDisplayString(model.team.email), 1),
                                      createBaseVNode("div", _hoisted_49, toDisplayString(model.team.mobile), 1),
                                      categories.value && model.suburb_postcode_region_id ? (openBlock(), createBlock(_sfc_main$6, {
                                        key: 0,
                                        suburb_postcode_region_id: model.suburb_postcode_region_id,
                                        contractor_user_id: model.contractor_user_id,
                                        scheduled_pickup_date: model.scheduled_pickup_date,
                                        scheduled_pickup_time: model.scheduled_pickup_time,
                                        productcategories: model.productcategories,
                                        categories: categories.value
                                      }, null, 8, ["suburb_postcode_region_id", "contractor_user_id", "scheduled_pickup_date", "scheduled_pickup_time", "productcategories", "categories"])) : createCommentVNode("", true),
                                      createVNode(QInput, {
                                        modelValue: model.special_instructions,
                                        "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => model.special_instructions = $event),
                                        class: "q-mt-lg",
                                        type: "textarea",
                                        label: "Please enter any special instructions for this booking",
                                        outlined: "",
                                        rows: "3"
                                      }, null, 8, ["modelValue"]),
                                      createVNode(QToggle, {
                                        modelValue: model.recurring_order,
                                        "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => model.recurring_order = $event),
                                        label: "Would you like to make this a recurring booking?",
                                        class: "q-mt-md"
                                      }, null, 8, ["modelValue"]),
                                      model.recurring_order ? (openBlock(), createBlock(QSelect, {
                                        key: 1,
                                        modelValue: model.recurring,
                                        "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => model.recurring = $event),
                                        label: _ctx.$t("order.recurringFrequency"),
                                        options: ["Week", "Fortnite", "Month"],
                                        outlined: "",
                                        class: "q-mt-sm"
                                      }, null, 8, ["modelValue", "label"])) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  success.value ? (openBlock(), createBlock(QCardSection, { key: 1 }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_50, [
                                        createVNode(QIcon, {
                                          name: "o_check_circle",
                                          size: "64px",
                                          color: "green"
                                        })
                                      ]),
                                      _hoisted_51,
                                      _hoisted_52,
                                      _hoisted_53
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              !success.value ? (openBlock(), createElementBlock("div", _hoisted_54, [
                                createVNode(QBtn, {
                                  onClick: _cache[33] || (_cache[33] = ($event) => stepMove(5)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[34] || (_cache[34] = ($event) => save()),
                                  color: "primary",
                                  label: "Confirm booking",
                                  disable: unref($v).$invalid,
                                  rounded: ""
                                }, null, 8, ["disable"])
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    step.value !== 6 && model.scheduled_pickup_date ? (openBlock(), createElementBlock("div", _hoisted_55, [
                      createVNode(QCard, {
                        flat: "",
                        class: "bg-page"
                      }, {
                        default: withCtx(() => [
                          createVNode(QCardSection, null, {
                            default: withCtx(() => [
                              categories.value && model.suburb_postcode_region_id ? (openBlock(), createBlock(_sfc_main$6, {
                                key: 0,
                                suburb_postcode_region_id: model.suburb_postcode_region_id,
                                contractor_user_id: model.contractor_user_id,
                                scheduled_pickup_date: model.scheduled_pickup_date,
                                scheduled_pickup_time: model.scheduled_pickup_time,
                                productcategories: model.productcategories,
                                categories: categories.value
                              }, null, 8, ["suburb_postcode_region_id", "contractor_user_id", "scheduled_pickup_date", "scheduled_pickup_time", "productcategories", "categories"])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true)
                  ])
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
