import { S as createComponent, h, V as hSlot, A as defineComponent, r as ref, B as reactive, i as inject, o as onMounted, E as onBeforeUnmount, l as openBlock, J as createBlock, K as withCtx, k as createVNode, s as normalizeClass, Q as QCard, L as QCardSection, p as createBaseVNode, aH as toDisplayString, R as unref, P as QBtn, bd as QCheckbox, m as createElementBlock, F as Fragment, bc as renderList, y as createCommentVNode, aG as createTextVNode, M as QInput } from "./index.09db86c6.js";
import { Q as QStepper, a as QStep } from "./QStepper.eb203986.js";
import { Q as QDate } from "./QDate.089f4805.js";
import { Q as QPage } from "./QPage.ad6f9e26.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.971770bb.js";
import { u as useVuelidate, r as required } from "./index.esm.6d4c12da.js";
import { m as moment, a as api } from "./axios.a630860f.js";
import { _ as _sfc_main$2 } from "./PostcodeRegionField.d5ebf897.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { a as categoryDisplay } from "./help.43e74e3a.js";
import { p as productCategoriesVisibleBooking } from "./helpers.d110a097.js";
import { _ as _sfc_main$1 } from "./AppLogo.178502a8.js";
import { _ as _sfc_main$3 } from "./OrderContractorManagement.a2bc3408.js";
import "./QSlideTransition.ce9f3a23.js";
import "./use-panel.9235567d.js";
import "./touch.3df10340.js";
import "./selection.b097d85c.js";
import "./use-cache.b0833c75.js";
import "./format.3e32b8d9.js";
import "./QResizeObserver.a19e64c4.js";
import "./QSelect.b914fb42.js";
import "./QItemSection.0ff59c1c.js";
import "./QMenu.f4a75668.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.251b2a6a.js";
import "./QList.ea43f186.js";
import "./UserAvatar.52903f46.js";
import "./QImg.094f3ced.js";
import "./use-ratio.c4701a1c.js";
var QStepperNavigation = createComponent({
  name: "QStepperNavigation",
  setup(_, { slots }) {
    return () => h("div", { class: "q-stepper__nav" }, hSlot(slots.default));
  }
});
const _hoisted_1 = { class: "text-h5 text-bold" };
const _hoisted_2 = { class: "q-mr-sm" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = {
  class: "q-mt-md",
  style: { "min-height": "100px" }
};
const _hoisted_5 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderNew",
  setup(__props) {
    const step = ref(1);
    const washingAndIroning = ref(false);
    const categories = ref();
    const availableDates = ref([]);
    const schema = {
      contractor_user_id: null,
      scheduled_pickup_date: null,
      scheduled_pickup_time: null,
      special_instructions: null,
      recurring_order: false,
      recurring: null,
      productcategories: []
    };
    const model = reactive(JSON.parse(JSON.stringify(schema)));
    const bus = inject("bus");
    const minDate = (date) => {
      return date >= moment().add(1, "day").format("YYYY/MM/DD") && availableDates.value.indexOf(date) !== -1;
    };
    const currentBookingDate = ref(moment());
    const rules = {
      suburb_postcode_region_id: { required },
      scheduled_pickup_date: { required },
      scheduled_pickup_time: { required },
      contractor_user_id: { required },
      productcategories: { required }
    };
    const $v = useVuelidate(rules, model);
    const toggleWashingAndIroning = () => {
      model.productcategories.forEach((o) => {
        o.active = washingAndIroning.value;
      });
    };
    const stepMove = (nextStep) => {
      sessionStorage.setItem("public-order", JSON.stringify(model));
      if (nextStep === 3) {
        getAvailableContractorsDates();
      } else {
        step.value = nextStep;
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
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const updateScheduledPickupTime = (val) => {
      model.scheduled_pickup_time = val;
    };
    onMounted(async () => {
      Object.assign(model, JSON.parse(JSON.stringify(schema)));
      categories.value = await productCategoriesVisibleBooking();
      model.productcategories = [];
      for (const c of categories.value) {
        model.productcategories.push({ product_category_id: c.value, active: false });
      }
      washingAndIroning.value = false;
      const publicOrderCheck = sessionStorage.getItem("public-order");
      if (publicOrderCheck) {
        Object.assign(model, JSON.parse(publicOrderCheck));
      }
      if (model.productcategories.filter((o) => o.active).length && model.scheduled_pickup_date) {
        getAvailableContractorsDates();
      }
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
                class: normalizeClass(["row justify-center items-center animated fadeIn", { "q-pa-md": _ctx.$q.screen.xs }]),
                padding: ""
              }, {
                default: withCtx(() => [
                  createVNode(QCard, { class: "col-xs-12 col-sm-6 col-md-4" }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, {
                        class: "text-center",
                        style: { "min-height": "165px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1)
                        ]),
                        _: 1
                      }),
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_1, "New " + toDisplayString(_ctx.$t("order.name")), 1),
                          createVNode(QStepper, {
                            modelValue: step.value,
                            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => step.value = $event),
                            vertical: "",
                            color: "primary",
                            animated: "",
                            "header-nav": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(QStep, {
                                name: 1,
                                title: "Suburb to pickup from",
                                icon: "place",
                                done: !!model.suburb_postcode_region_id
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2, {
                                    modelValue: model.suburb_postcode_region_id,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.suburb_postcode_region_id = $event),
                                    label: "Enter your pickup suburb",
                                    outlined: "",
                                    invalid: unref($v).suburb_postcode_region_id.$invalid,
                                    class: "q-mt-md"
                                  }, null, 8, ["modelValue", "invalid"]),
                                  createVNode(QStepperNavigation, null, {
                                    default: withCtx(() => [
                                      createVNode(QBtn, {
                                        onClick: _cache[1] || (_cache[1] = ($event) => stepMove(2)),
                                        color: "primary",
                                        label: "Continue",
                                        disable: !model.suburb_postcode_region_id
                                      }, null, 8, ["disable"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["done"]),
                              createVNode(QStep, {
                                name: 2,
                                title: "Select the services",
                                icon: "local_laundry_service",
                                done: !!model.productcategories.filter((o) => o.active).length
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_2, [
                                    createVNode(QCheckbox, {
                                      modelValue: washingAndIroning.value,
                                      "onUpdate:modelValue": [
                                        _cache[2] || (_cache[2] = ($event) => washingAndIroning.value = $event),
                                        _cache[3] || (_cache[3] = ($event) => toggleWashingAndIroning())
                                      ],
                                      label: "Washing & Ironing"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  !washingAndIroning.value ? (openBlock(), createElementBlock("span", _hoisted_3, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(model.productcategories, (c) => {
                                      return openBlock(), createElementBlock("div", {
                                        key: c.product_category_id,
                                        class: "q-mr-sm"
                                      }, [
                                        createVNode(QCheckbox, {
                                          modelValue: c.active,
                                          "onUpdate:modelValue": ($event) => c.active = $event,
                                          label: unref(categoryDisplay)(c.product_category_id, categories.value)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                      ]);
                                    }), 128))
                                  ])) : createCommentVNode("", true),
                                  createVNode(QStepperNavigation, null, {
                                    default: withCtx(() => [
                                      createVNode(QBtn, {
                                        onClick: _cache[4] || (_cache[4] = ($event) => stepMove(3)),
                                        color: "primary",
                                        label: "Continue",
                                        disable: !model.productcategories.filter((o) => o.active).length
                                      }, null, 8, ["disable"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["done"]),
                              createVNode(QStep, {
                                name: 3,
                                title: "Pickup date",
                                icon: "event",
                                done: !!model.scheduled_pickup_date
                              }, {
                                default: withCtx(() => [
                                  createVNode(QDate, {
                                    modelValue: model.scheduled_pickup_date,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.scheduled_pickup_date = $event),
                                    mask: "DD/MM/YYYY",
                                    options: minDate,
                                    class: "q-mt-md",
                                    onNavigation: handleScheduledPickupDateNav
                                  }, null, 8, ["modelValue"]),
                                  createVNode(QStepperNavigation, null, {
                                    default: withCtx(() => [
                                      createVNode(QBtn, {
                                        onClick: _cache[6] || (_cache[6] = ($event) => stepMove(4)),
                                        color: "primary",
                                        label: "Continue",
                                        disable: !model.scheduled_pickup_date
                                      }, null, 8, ["disable"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["done"]),
                              createVNode(QStep, {
                                name: 4,
                                title: "Choose lady or lad",
                                done: !!model.contractor_user_id,
                                icon: "account_circle"
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_4, [
                                    model.suburb_postcode_region_id && model.scheduled_pickup_date && model.productcategories.filter((o) => o.active).length ? (openBlock(), createBlock(_sfc_main$3, {
                                      key: 0,
                                      scheduled_pickup_date: model.scheduled_pickup_date,
                                      scheduled_pickup_time: model.scheduled_pickup_time,
                                      modelValue: model.contractor_user_id,
                                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.contractor_user_id = $event),
                                      reassign: true,
                                      productcategories: model.productcategories.filter((o) => o.active),
                                      suburb_postcode_region_id: model.suburb_postcode_region_id,
                                      "onUpdate:modelValueTime": updateScheduledPickupTime
                                    }, null, 8, ["scheduled_pickup_date", "scheduled_pickup_time", "modelValue", "productcategories", "suburb_postcode_region_id"])) : createCommentVNode("", true),
                                    createTextVNode(" " + toDisplayString(model.scheduled_pickup_time) + " ", 1),
                                    !model.suburb_postcode_region_id || !model.scheduled_pickup_date || !model.productcategories.filter((o) => o.active).length ? (openBlock(), createElementBlock("div", _hoisted_5, " Please complete the selections in the previous steps.")) : createCommentVNode("", true)
                                  ]),
                                  createVNode(QStepperNavigation, null, {
                                    default: withCtx(() => [
                                      createVNode(QBtn, {
                                        onClick: _cache[8] || (_cache[8] = ($event) => stepMove(5)),
                                        color: "primary",
                                        label: "Continue"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["done"]),
                              createVNode(QStep, {
                                name: 5,
                                title: "Finalise"
                              }, {
                                default: withCtx(() => [
                                  createVNode(QInput, {
                                    modelValue: model.special_instructions,
                                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.special_instructions = $event),
                                    label: "Special Instructions",
                                    autogrow: "",
                                    outlined: "",
                                    class: "q-mt-md"
                                  }, null, 8, ["modelValue"]),
                                  createVNode(QStepperNavigation, null, {
                                    default: withCtx(() => [
                                      createVNode(QBtn, {
                                        onClick: _cache[10] || (_cache[10] = ($event) => step.value = 2),
                                        color: "primary",
                                        label: "Continue"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
