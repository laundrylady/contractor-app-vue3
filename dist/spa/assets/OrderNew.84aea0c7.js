import { A as defineComponent, r as ref, w as watch, o as onMounted, l as openBlock, m as createElementBlock, k as createVNode, K as withCtx, L as QCardSection, p as createBaseVNode, N as QIcon, aG as createTextVNode, aH as toDisplayString, y as createCommentVNode, F as Fragment, bd as renderList, R as unref, Q as QCard, B as reactive, i as inject, E as onBeforeUnmount, J as createBlock, s as normalizeClass, P as QBtn, be as QCheckbox } from "./index.a868d555.js";
import { Q as QDate } from "./QDate.5fd7a831.js";
import { Q as QPage } from "./QPage.197ed816.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.385b8f92.js";
import { u as useVuelidate, r as required } from "./index.esm.ff88b628.js";
import { a as api, m as moment } from "./axios.a7f4982f.js";
import { _ as _sfc_main$3 } from "./PostcodeRegionField.b5b15b96.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { a as categoryDisplay, h as hourBookingDisplay } from "./help.d1a186e3.js";
import { p as productCategoriesVisibleBooking } from "./helpers.81ddf24b.js";
import { _ as _sfc_main$2 } from "./AppLogo.a35bdf65.js";
import { _ as _sfc_main$4 } from "./OrderContractorManagement.95e56e44.js";
import "./use-cache.b0833c75.js";
import "./format.3e32b8d9.js";
import "./QResizeObserver.267e3110.js";
import "./QSelect.f4199137.js";
import "./selection.2e6c8ab7.js";
import "./QItemLabel.b4dfa054.js";
import "./QMenu.b68ab337.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.c400dfe9.js";
import "./QList.c5d665a0.js";
import "./UserAvatar.29c8b3cf.js";
import "./QImg.5fbc0358.js";
import "./use-ratio.608fc428.js";
var _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALcSURBVHgB7ZdBUhNBFIb/1yFr4gkMRaB0ZTgB8QSEqGvDCfQGwAnAExDWKownIJwAWLkgFHMCa9xKMu3rnmSYYYjBiCWR/6tiJnnzqun5+73uPwAhhBBCCCGEEEIIIYQQQgghhBBCyDSU/HW5tYUnz1fx7esxCARLb+rA4GT4vYPzgw08cgTVZgVlOdKP9SRkT3Fl1xEGIWaZpVYbFk8hEuk7fc8/lHlYW9W3ryCOv+AiCHJP/bUoTKjCvJxZYWqvG5D46I7ZoXbHQjZgknAQ4fxwRT/tJmGpomxOsNhsYhbp9091ucM75VpbyJNCUq25CTFbmYxt/Ih3vXCziOsCMfMo24q2U+e6G4bEcVvbZz8bMoVBesG2Jq6nSltsamudqFgNzCJuMU28AivdgiCOAQonrowd7FmzioHsaUojE+3gKt6emb1mqakilHZ0ZRtpTBDoQrvvFX+oJNtGDpk4cK31XrM2k0FSHrY4fkGNm3M7E420AzYgc1G6Cd/SOg6DSfQOdlGKnZqdTLStG/GlHnt72rNVPBTcqVNr7aggzne107jVPfEqXvBHr8Rv0/gtreOYXCm5f7q+qtctPfsbubgVV5L7uPgc4F+w+Kqpy/su1yZ+XraLvt1IKzqpoMvh07FG9fdEGTFOHOdvoBuaNfvoferib+F9lXF2wc3D3Sv5aagYbn69w3wluMoeVZCrnDHtP50oI657tzixZPiun6CVMxijJunjKabBtWjZNLQaX+hC1AsVkRD5Nunjw1j7sNy61DGqmPBz5s9EyZLY6jUdcZLhU2HUelt9CbHuHmaeVbz1TqamNlytePIS49DNU08T2AADezzRS3kzatYw+PUhcX+ijHClXZJVGNEJ2Pqt3mB6It+i3nOoEDfb4564f1Fu4kSaEy17U/c/wuBWXt2lSHWUkcmOhn+J/bYSehNp9G4HZzgPpms/QgghhBBCCCGEEEIIIYSQ/5+fh+ANjRK8lzkAAAAASUVORK5CYII=";
var _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALLSURBVHgB7ZdBUtswFIZ/KbRb0htkQabdlZ6AcIKGTLsmPUG5AXAC2hNg1p0B9wQNJ4CuQwf3BMAWHL0+yUyC45gEmgTC/N+MYkuWbM3v/z2/AIQQQgghhBBCCCGEEEIIed4YzJtas6q/VSwt1SBShZVq/5ozlzDaPGmaIIkTPAGzFWXlUwNG3gOyqj3favCCPAwVyZyqgNrMMaxN0P1xihkyXVG8C15VNvWseSvEQwWYEEl06x111k/0eh111CWmyP+LkheiUTLrEoKOHhMND23ad06PcoXUXuRmVqQWjtbW4PRc1F1Gj8Y0yjfhBepF+BMf4D7qG5HO3YS4dZzFndK74bG8a+qmbVs3/RVFR3gRIli1/Y10cH74F9Og3lT32VW990fdeaP4XHWQmO9IXTwyH9VbF9ka3VP3aL3sMQ8XJWyssjfCFZkQkBhnR8eYBysba+qgdhBIQr66S4Qbt5sTZ6W1rXN3wvk9bplcFO+Mnt3Ws3ZuXFR16IPmJUQZ9VZbN6OuNauDQfHheoBr9y3knRDq9hxj3DKZKG9bW3DYRt6ukQoSPbkYw3gnS0UdIc3BoIrjZCfknLtugfuAblz4kpmxD4DZz6s/wpbPER9a1kRDYaV9dwBjf4WeeIcf7g4vLRclc8feYMDXCdh6ds4Yhw8roy7vixM+51kB6fNg9/DN8JKiKD7uXtt9vcnAfuJU0XgXi0pZPvSMSLhLhcVOrZVTVTZ00UwryJkQqmlX0/e+jDT8lUhgtRW+UnZNfzp3Rwai+PzRC7GWJVODGNfyZdrV4lzIBMnyhqrQjwcZMdeE0iIXBZkoWVE0EMSHS3eBwyVNT/XT61/mJH8zCnPMbbyd9C861x5bLi8CPjcau6wv+Krg9lCvaBhJCK3fw9cN6p/VJb2T0HspgkwF75YQQoQQQgghhBBCCCGEEEIIIYQQQggh5PH8A3w5GU3XgQ4cAAAAAElFTkSuQmCC";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-bold" }, "Booking Summary", -1);
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = {
  key: 0,
  class: "q-mt-md"
};
const _hoisted_4$1 = {
  key: 1,
  class: "q-mt-md"
};
const _hoisted_5$1 = {
  key: 2,
  class: "q-mt-md"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderNewSummary",
  props: {
    suburb_postcode_region_id: null,
    contractor_user_id: null,
    scheduled_pickup_date: null,
    scheduled_pickup_time: null,
    productcategories: null,
    categories: null
  },
  setup(__props) {
    const props = __props;
    const localModel = ref({ suburbpostcoderegion: void 0, contractor: void 0 });
    const getSuburbPostcodeRegion = (val) => {
      api.get(`/public/postcoderegion/${val}`).then((response) => {
        localModel.value.suburbpostcoderegion = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const getContractor = (val) => {
      api.get(`/public/user/contractor/details/${val}`).then((response) => {
        localModel.value.contractor = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    watch(() => props.suburb_postcode_region_id, (newVal) => {
      if (newVal) {
        getSuburbPostcodeRegion(newVal);
      } else {
        localModel.value.suburbpostcoderegion = null;
      }
    });
    watch(() => props.contractor_user_id, (newVal) => {
      if (newVal) {
        getContractor(newVal);
      } else {
        localModel.value.contractor = null;
      }
    });
    onMounted(() => {
      if (props.suburb_postcode_region_id) {
        getSuburbPostcodeRegion(props.suburb_postcode_region_id);
      }
      if (props.contractor_user_id) {
        getContractor(props.contractor_user_id);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1$1,
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("div", null, [
                  localModel.value.suburbpostcoderegion ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
                    createVNode(QIcon, {
                      name: "place",
                      size: "24px"
                    }),
                    createTextVNode(" " + toDisplayString(localModel.value.suburbpostcoderegion.locality) + " " + toDisplayString(localModel.value.suburbpostcoderegion.state), 1)
                  ])) : createCommentVNode("", true)
                ]),
                props.productcategories.filter((o) => o.active).length ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                  createVNode(QIcon, {
                    name: "local_laundry_service",
                    size: "24px"
                  }),
                  createTextVNode(),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(props.productcategories.filter((o) => o.active), (c) => {
                    return openBlock(), createElementBlock("span", {
                      key: c.product_category_id,
                      class: "q-mr-sm"
                    }, toDisplayString(unref(categoryDisplay)(c.product_category_id, props.categories)), 1);
                  }), 128))
                ])) : createCommentVNode("", true),
                !localModel.value.contractor && props.scheduled_pickup_date && !props.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
                  createVNode(QIcon, {
                    name: "event",
                    size: "24px"
                  }),
                  createTextVNode(" " + toDisplayString(props.scheduled_pickup_date), 1)
                ])) : createCommentVNode("", true),
                localModel.value.contractor && props.scheduled_pickup_date && props.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
                  createVNode(QIcon, {
                    name: "account_circle",
                    size: "24px"
                  }),
                  createTextVNode(" Pickup with " + toDisplayString(localModel.value.contractor.first_name) + " on " + toDisplayString(props.scheduled_pickup_date) + " (" + toDisplayString(unref(hourBookingDisplay)(props.scheduled_pickup_time)) + ") ", 1)
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
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
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "order-new-step" }, " Enter your details ", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "flex items-end" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 })
], -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "order-new-step" }, " Confirm booking ", -1);
const _hoisted_9 = { class: "row q-mt-xl q-mb-lg" };
const _hoisted_10 = { class: "col-xs-12 col-sm-6 offset-sm-3 text-center" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("div", { class: "row text-lg q-mb-xl" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "col-xs-12 col-sm-6 offset-sm-3 text-center" }, " Book your mobile Laundry service. Washing, Ironing, Pickup and Delivery. ")
], -1);
const _hoisted_12 = { class: "row q-col-gutter-md" };
const _hoisted_13 = { class: "col-xs-12 col-sm-6 offset-sm-3" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Select your pickup location:", -1);
const _hoisted_15 = {
  key: 0,
  class: "text-lg text-center q-mt-lg"
};
const _hoisted_16 = { class: "text-center q-mt-xl" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Choose the services you require:", -1);
const _hoisted_18 = { class: "flex justify-center" };
const _hoisted_19 = { class: "q-mr-sm" };
const _hoisted_20 = { key: 0 };
const _hoisted_21 = { class: "text-center q-mt-xl" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Choose the desired pickup date:", -1);
const _hoisted_23 = { class: "text-center" };
const _hoisted_24 = { class: "q-mt-xl text-center" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Select your Laundry Lad or Lad:", -1);
const _hoisted_26 = { class: "q-mt-xl text-center" };
const _hoisted_27 = { class: "col-xs-12 col-sm-3" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderNew",
  setup(__props) {
    const step = ref(1);
    const washingAndIroning = ref(false);
    const categories = ref();
    const availableDates = ref([]);
    const schema = {
      suburb_postcode_region_id: null,
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
    const noContractors = ref(false);
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
        }).catch((error) => {
          useMixinDebug(error);
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
                class: normalizeClass({ "q-pa-md": _ctx.$q.screen.xs })
              }, {
                default: withCtx(() => [
                  !_ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_1, [
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
                    _hoisted_6,
                    _hoisted_7,
                    _hoisted_8
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", _hoisted_10, [
                      createVNode(_sfc_main$2)
                    ])
                  ]),
                  _hoisted_11,
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("div", _hoisted_13, [
                      createVNode(QCard, {
                        flat: "",
                        class: "bg-page"
                      }, {
                        default: withCtx(() => [
                          step.value === 1 ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                            default: withCtx(() => [
                              _hoisted_14,
                              createVNode(_sfc_main$3, {
                                modelValue: model.suburb_postcode_region_id,
                                "onUpdate:modelValue": [
                                  _cache[1] || (_cache[1] = ($event) => model.suburb_postcode_region_id = $event),
                                  _cache[2] || (_cache[2] = ($event) => checkContractors())
                                ],
                                label: "Enter your pickup suburb",
                                outlined: "",
                                invalid: unref($v).suburb_postcode_region_id.$invalid
                              }, null, 8, ["modelValue", "invalid"]),
                              noContractors.value ? (openBlock(), createElementBlock("div", _hoisted_15, "Sorry, there is currently no availability in this area.")) : createCommentVNode("", true),
                              createBaseVNode("div", _hoisted_16, [
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
                              _hoisted_17,
                              createBaseVNode("div", _hoisted_18, [
                                createBaseVNode("div", null, [
                                  createBaseVNode("div", _hoisted_19, [
                                    createVNode(QCheckbox, {
                                      modelValue: washingAndIroning.value,
                                      "onUpdate:modelValue": [
                                        _cache[4] || (_cache[4] = ($event) => washingAndIroning.value = $event),
                                        _cache[5] || (_cache[5] = ($event) => toggleWashingAndIroning())
                                      ],
                                      label: "Washing & Ironing"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  !washingAndIroning.value ? (openBlock(), createElementBlock("div", _hoisted_20, [
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
                              createBaseVNode("div", _hoisted_21, [
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
                              _hoisted_22,
                              createBaseVNode("div", _hoisted_23, [
                                createVNode(QDate, {
                                  modelValue: model.scheduled_pickup_date,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.scheduled_pickup_date = $event),
                                  mask: "DD/MM/YYYY",
                                  options: minDate,
                                  class: "q-mt-md",
                                  onNavigation: handleScheduledPickupDateNav
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", _hoisted_24, [
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
                              _hoisted_25,
                              createVNode(QCard, null, {
                                default: withCtx(() => [
                                  createVNode(QCardSection, null, {
                                    default: withCtx(() => [
                                      model.suburb_postcode_region_id && model.scheduled_pickup_date && model.productcategories.filter((o) => o.active).length ? (openBlock(), createBlock(_sfc_main$4, {
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
                              createBaseVNode("div", _hoisted_26, [
                                createVNode(QBtn, {
                                  onClick: _cache[13] || (_cache[13] = ($event) => stepMove(3)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[14] || (_cache[14] = ($event) => stepMove(4)),
                                  color: "primary",
                                  label: "Continue",
                                  disable: !model.contractor_user_id,
                                  rounded: ""
                                }, null, 8, ["disable"])
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_27, [
                      createVNode(QCard, {
                        flat: "",
                        class: "bg-page"
                      }, {
                        default: withCtx(() => [
                          createVNode(QCardSection, null, {
                            default: withCtx(() => [
                              categories.value && model.suburb_postcode_region_id ? (openBlock(), createBlock(_sfc_main$1, {
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
                    ])
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
