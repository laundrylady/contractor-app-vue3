import { B as defineComponent, r as ref, w as watch, o as onMounted, m as openBlock, n as createElementBlock, l as createVNode, L as withCtx, M as QCardSection, q as createBaseVNode, O as QIcon, ak as createTextVNode, aj as toDisplayString, S as unref, z as createCommentVNode, F as Fragment, be as renderList, Q as QCard, aa as useRoute, g as computed, C as reactive, i as inject, G as onBeforeUnmount, K as createBlock, t as normalizeClass, R as QBtn, bg as QCheckbox, al as QToggle, N as QInput, bu as QRadio } from "./index.a9a574a4.js";
import { Q as QDate } from "./QDate.297f1bfc.js";
import { Q as QSelect } from "./QSelect.9067d31a.js";
import { Q as QPage } from "./QPage.8b7a7360.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.d88323e3.js";
import { _ as _imports_0$1 } from "./ndis_heart.0820b9e2.js";
import { u as useVuelidate, r as required, a as requiredIf, e as email } from "./index.esm.0e4f4506.js";
import { a as api, m as moment } from "./axios.24ab5c7c.js";
import { u as useQuasar } from "./use-quasar.39bac4cf.js";
import { a as _sfc_main$3, _ as _sfc_main$6, b as _sfc_main$7 } from "./PostcodeRegionField.23863604.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { a as categoryDisplay, h as hourBookingDisplay, c as confirmDelete } from "./help.08e1e70e.js";
import { u as useMixinCommon } from "./common.99c8a90d.js";
import { p as productCategoriesVisibleBooking } from "./helpers.3a5774d0.js";
import { _ as _sfc_main$2 } from "./AppLogo.4c54aac1.js";
import { _ as _sfc_main$4 } from "./OrderContractorManagement.ecdbef2f.js";
import { _ as _sfc_main$5 } from "./DateField.74fcfbc6.js";
import "./use-cache.b0833c75.js";
import "./format.3e32b8d9.js";
import "./QItemSection.2b728bb6.js";
import "./QItemLabel.09cf120e.js";
import "./QMenu.9d7ea008.js";
import "./selection.95ad5cb4.js";
import "./rtl.b51694b1.js";
import "./QResizeObserver.6e646cdf.js";
import "./common.37d9453b.js";
import "./QLinearProgress.ffb84405.js";
import "./QList.0b09280c.js";
import "./UserAvatar.6a9ba6ef.js";
import "./QImg.ed97f9a3.js";
import "./use-ratio.705dbf55.js";
import "./ClosePopup.9ef9fc4b.js";
var _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALcSURBVHgB7ZdBUhNBFIb/1yFr4gkMRaB0ZTgB8QSEqGvDCfQGwAnAExDWKownIJwAWLkgFHMCa9xKMu3rnmSYYYjBiCWR/6tiJnnzqun5+73uPwAhhBBCCCGEEEIIIYQQQgghhBBCyDSU/HW5tYUnz1fx7esxCARLb+rA4GT4vYPzgw08cgTVZgVlOdKP9SRkT3Fl1xEGIWaZpVYbFk8hEuk7fc8/lHlYW9W3ryCOv+AiCHJP/bUoTKjCvJxZYWqvG5D46I7ZoXbHQjZgknAQ4fxwRT/tJmGpomxOsNhsYhbp9091ucM75VpbyJNCUq25CTFbmYxt/Ih3vXCziOsCMfMo24q2U+e6G4bEcVvbZz8bMoVBesG2Jq6nSltsamudqFgNzCJuMU28AivdgiCOAQonrowd7FmzioHsaUojE+3gKt6emb1mqakilHZ0ZRtpTBDoQrvvFX+oJNtGDpk4cK31XrM2k0FSHrY4fkGNm3M7E420AzYgc1G6Cd/SOg6DSfQOdlGKnZqdTLStG/GlHnt72rNVPBTcqVNr7aggzne107jVPfEqXvBHr8Rv0/gtreOYXCm5f7q+qtctPfsbubgVV5L7uPgc4F+w+Kqpy/su1yZ+XraLvt1IKzqpoMvh07FG9fdEGTFOHOdvoBuaNfvoferib+F9lXF2wc3D3Sv5aagYbn69w3wluMoeVZCrnDHtP50oI657tzixZPiun6CVMxijJunjKabBtWjZNLQaX+hC1AsVkRD5Nunjw1j7sNy61DGqmPBz5s9EyZLY6jUdcZLhU2HUelt9CbHuHmaeVbz1TqamNlytePIS49DNU08T2AADezzRS3kzatYw+PUhcX+ijHClXZJVGNEJ2Pqt3mB6It+i3nOoEDfb4564f1Fu4kSaEy17U/c/wuBWXt2lSHWUkcmOhn+J/bYSehNp9G4HZzgPpms/QgghhBBCCCGEEEIIIYSQ/5+fh+ANjRK8lzkAAAAASUVORK5CYII=";
var _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALLSURBVHgB7ZdBUtswFIZ/KbRb0htkQabdlZ6AcIKGTLsmPUG5AXAC2hNg1p0B9wQNJ4CuQwf3BMAWHL0+yUyC45gEmgTC/N+MYkuWbM3v/z2/AIQQQgghhBBCCCGEEEIIed4YzJtas6q/VSwt1SBShZVq/5ozlzDaPGmaIIkTPAGzFWXlUwNG3gOyqj3favCCPAwVyZyqgNrMMaxN0P1xihkyXVG8C15VNvWseSvEQwWYEEl06x111k/0eh111CWmyP+LkheiUTLrEoKOHhMND23ad06PcoXUXuRmVqQWjtbW4PRc1F1Gj8Y0yjfhBepF+BMf4D7qG5HO3YS4dZzFndK74bG8a+qmbVs3/RVFR3gRIli1/Y10cH74F9Og3lT32VW990fdeaP4XHWQmO9IXTwyH9VbF9ka3VP3aL3sMQ8XJWyssjfCFZkQkBhnR8eYBysba+qgdhBIQr66S4Qbt5sTZ6W1rXN3wvk9bplcFO+Mnt3Ws3ZuXFR16IPmJUQZ9VZbN6OuNauDQfHheoBr9y3knRDq9hxj3DKZKG9bW3DYRt6ukQoSPbkYw3gnS0UdIc3BoIrjZCfknLtugfuAblz4kpmxD4DZz6s/wpbPER9a1kRDYaV9dwBjf4WeeIcf7g4vLRclc8feYMDXCdh6ds4Yhw8roy7vixM+51kB6fNg9/DN8JKiKD7uXtt9vcnAfuJU0XgXi0pZPvSMSLhLhcVOrZVTVTZ00UwryJkQqmlX0/e+jDT8lUhgtRW+UnZNfzp3Rwai+PzRC7GWJVODGNfyZdrV4lzIBMnyhqrQjwcZMdeE0iIXBZkoWVE0EMSHS3eBwyVNT/XT61/mJH8zCnPMbbyd9C861x5bLi8CPjcau6wv+Krg9lCvaBhJCK3fw9cN6p/VJb2T0HspgkwF75YQQoQQQgghhBBCCCGEEEIIIYQQQggh5PH8A3w5GU3XgQ4cAAAAAElFTkSuQmCC";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("p", { class: "text-bold" }, "Booking Summary", -1);
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = { key: 0 };
const _hoisted_4$1 = {
  key: 0,
  class: "q-mt-md"
};
const _hoisted_5$1 = { key: 0 };
const _hoisted_6$1 = {
  key: 1,
  class: "q-mt-md"
};
const _hoisted_7$1 = {
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
    const common = useMixinCommon();
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
              default: withCtx(() => {
                var _a;
                return [
                  createBaseVNode("div", null, [
                    localModel.value.suburbpostcoderegion ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
                      createVNode(QIcon, {
                        name: "place",
                        size: "24px"
                      }),
                      createTextVNode(" " + toDisplayString(localModel.value.suburbpostcoderegion.locality), 1),
                      ((_a = unref(common)) == null ? void 0 : _a.operating_country) !== "nzd" ? (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(localModel.value.suburbpostcoderegion.state), 1)) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true)
                  ]),
                  props.productcategories.filter((o) => o.active).length ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
                    createVNode(QIcon, {
                      name: "local_laundry_service",
                      size: "24px"
                    }),
                    createTextVNode(),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(props.productcategories.filter((o) => o.active), (c, index) => {
                      return openBlock(), createElementBlock("span", {
                        key: c.product_category_id
                      }, [
                        index > 0 ? (openBlock(), createElementBlock("span", _hoisted_5$1, " & ")) : createCommentVNode("", true),
                        createTextVNode(toDisplayString(unref(categoryDisplay)(c.product_category_id, props.categories)), 1)
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true),
                  !localModel.value.contractor && props.scheduled_pickup_date && !props.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
                    createVNode(QIcon, {
                      name: "event",
                      size: "24px"
                    }),
                    createTextVNode(" " + toDisplayString(props.scheduled_pickup_date), 1)
                  ])) : createCommentVNode("", true),
                  localModel.value.contractor && props.scheduled_pickup_date && props.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                    createVNode(QIcon, {
                      name: "account_circle",
                      size: "24px"
                    }),
                    createTextVNode(" Pickup with " + toDisplayString(localModel.value.contractor.first_name) + " on " + toDisplayString(props.scheduled_pickup_date) + " (" + toDisplayString(unref(hourBookingDisplay)(props.scheduled_pickup_time)) + ") ", 1)
                  ])) : createCommentVNode("", true)
                ];
              }),
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
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "flex items-end" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 })
], -1);
const _hoisted_7 = {
  key: 1,
  class: "row q-mt-xl q-mb-lg"
};
const _hoisted_8 = { class: "col-xs-12 col-md-6 offset-md-3 text-center" };
const _hoisted_9 = {
  key: 2,
  class: "row text-lg q-mb-lg"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "col-xs-12 col-md-6 offset-md-3 text-center" }, " Book your mobile Laundry service. Washing, Ironing, Pickup and Delivery. ", -1);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = { class: "row q-col-gutter-md" };
const _hoisted_13 = { class: "col-xs-12 col-md-6 offset-md-3" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Select your pickup location:", -1);
const _hoisted_15 = {
  key: 0,
  class: "text-lg text-center q-mt-lg"
};
const _hoisted_16 = { class: "text-center q-mt-xl" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Choose the services you require:", -1);
const _hoisted_18 = { class: "flex justify-center" };
const _hoisted_19 = { class: "hidden" };
const _hoisted_20 = { class: "text-center q-mt-xl" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Choose the desired pickup date:", -1);
const _hoisted_22 = { class: "text-center" };
const _hoisted_23 = { class: "q-mt-xl text-center" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Select your Laundry Lady or Lad:", -1);
const _hoisted_25 = { class: "q-mt-xl text-center" };
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Enter your details:", -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-sm" }, "Your Details", -1);
const _hoisted_28 = { class: "row q-col-gutter-md q-mb-sm" };
const _hoisted_29 = { class: "col-xs-12 col-sm-6" };
const _hoisted_30 = {
  key: 0,
  class: "col-xs-12 col-sm-6"
};
const _hoisted_31 = {
  key: 0,
  class: "bg-primary text-white q-pa-md q-mb-lg"
};
const _hoisted_32 = { key: 1 };
const _hoisted_33 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_34 = { class: "col-xs-12 col-sm-6" };
const _hoisted_35 = {
  key: 0,
  class: "col-xs-12 col-sm-6"
};
const _hoisted_36 = { class: "row q-col-gutter-md" };
const _hoisted_37 = { class: "col-xs-12 col-sm-6" };
const _hoisted_38 = { class: "col-xs-12 col-sm-6" };
const _hoisted_39 = { class: "row q-col-gutter-md" };
const _hoisted_40 = { class: "col-xs-12 col-sm-6" };
const _hoisted_41 = { class: "col-xs-12 col-sm-6" };
const _hoisted_42 = { key: 1 };
const _hoisted_43 = { class: "row q-col-gutter-md" };
const _hoisted_44 = { class: "col-xs-12 col-sm-6" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0$1,
  style: { "height": "32px" }
}, null, -1);
const _hoisted_46 = { class: "col-xs-12 col-sm-6" };
const _hoisted_47 = { class: "row q-col-gutter-md" };
const _hoisted_48 = { class: "row q-col-gutter-md" };
const _hoisted_49 = { class: "q-mt-md" };
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mt-sm" }, "Pickup Address", -1);
const _hoisted_51 = /* @__PURE__ */ createBaseVNode("p", null, "Enter your pickup / delivery address.", -1);
const _hoisted_52 = { class: "row q-col-gutter-md" };
const _hoisted_53 = { class: "q-mt-xl text-center" };
const _hoisted_54 = {
  key: 0,
  class: "text-center text-bold"
};
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Your contact details", -1);
const _hoisted_56 = { class: "q-mb-md" };
const _hoisted_57 = { class: "q-mt-md q-mb-md" };
const _hoisted_58 = { class: "q-mb-xs" };
const _hoisted_59 = {
  key: 0,
  href: "https://thelaundrylady.co.nz/terms-and-conditions/",
  target: "_blank",
  class: "link"
};
const _hoisted_60 = {
  key: 1,
  href: "https://thelaundrylady.com.au/terms-and-conditions/",
  target: "_blank",
  class: "link"
};
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("p", null, "The following problems were found when trying to submit the booking:", -1);
const _hoisted_62 = { class: "text-bold" };
const _hoisted_63 = { class: "text-center" };
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 text-center q-mt-sm" }, "Booking Confirmed", -1);
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center" }, "Great news, your booking has been confirmed!", -1);
const _hoisted_66 = {
  key: 0,
  href: "https://thelaundrylady.co.nz/faqs/",
  target: "_blank",
  class: "link"
};
const _hoisted_67 = {
  key: 1,
  href: "https://thelaundrylady.co.nz/faqs/",
  target: "_blank",
  class: "link"
};
const _hoisted_68 = {
  key: 1,
  class: "q-mt-xl text-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderNew",
  setup(__props) {
    var _a;
    const step = ref(1);
    const washingAndIroning = ref(false);
    const washingOnly = ref(false);
    const ironingOnly = ref(false);
    const categories = ref();
    const availableDates = ref([]);
    const success = ref(false);
    const error = ref(false);
    const confirming = ref(false);
    const errors = ref([]);
    const common = useMixinCommon();
    const route = useRoute();
    const iframed = ref(false);
    const loaded = ref(false);
    const agreeNdis = ref(false);
    const schema = {
      address1: null,
      address2: null,
      suburb_postcode_region_id: null,
      postcode: null,
      lat: null,
      lng: null,
      country_id: (_a = common.value) == null ? void 0 : _a.operating_country_id,
      contractor_user_id: null,
      scheduled_pickup_date: null,
      scheduled_pickup_time: null,
      special_instructions: null,
      recurring_order: false,
      cancellation_terms: false,
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
        ndis_plan_manager_email: null,
        ndis_support_coordinator_email: null,
        ndis_plan_start: null,
        ndis_plan_end: null,
        ndis_line_item: false,
        ndis_funds_inform: false,
        ndis_funds: false,
        ndis_payment: "self",
        abn: null,
        marketing_subscribed: true,
        payment_terms: "Credit Card"
      }
    };
    const ndisOk = computed(() => {
      if (model.team.type === "NDIS") {
        if (!model.team.ndis_line_item || !model.team.ndis_funds_inform || !model.team.ndis_funds) {
          return false;
        }
      }
      return true;
    });
    const toggleWashingAndIroning = () => {
      ironingOnly.value = false;
      washingOnly.value = false;
      model.productcategories.forEach((o) => {
        o.active = true;
      });
      model.contractor_user_id = null;
      model.scheduled_pickup_date = null;
      model.scheduled_pickup_time = null;
    };
    const toggleWashingOnly = () => {
      washingAndIroning.value = false;
      ironingOnly.value = false;
      const washingObj = model.productcategories.find((o) => o.product_category_id === 1);
      if (washingObj) {
        washingObj.active = washingOnly.value;
      }
      const ironingObj = model.productcategories.find((o) => o.product_category_id === 2);
      if (ironingObj) {
        ironingObj.active = false;
      }
      model.contractor_user_id = null;
      model.scheduled_pickup_date = null;
      model.scheduled_pickup_time = null;
    };
    const toggleIroningOnly = () => {
      washingAndIroning.value = false;
      washingOnly.value = false;
      const washingObj = model.productcategories.find((o) => o.product_category_id === 1);
      if (washingObj) {
        washingObj.active = false;
      }
      const ironingObj = model.productcategories.find((o) => o.product_category_id === 2);
      if (ironingObj) {
        ironingObj.active = ironingOnly.value;
      }
      model.contractor_user_id = null;
      model.scheduled_pickup_date = null;
      model.scheduled_pickup_time = null;
    };
    const customerTypes = computed(() => {
      var _a2, _b;
      if (((_a2 = common == null ? void 0 : common.value) == null ? void 0 : _a2.operating_country) === "aud") {
        return ["Residential", "Business", "NDIS", "Home Care", "Aged Care", "Veteran Affairs", "Sporting Group", "Other"];
      }
      if (((_b = common == null ? void 0 : common.value) == null ? void 0 : _b.operating_country) === "nzd") {
        return ["Residential", "Business", "Disability Services", "Home Care", "Aged Care", "Veteran Affairs", "Sporting Group", "Other"];
      }
      return [];
    });
    const model = reactive(JSON.parse(JSON.stringify(schema)));
    const bus = inject("bus");
    const minDate = (date) => {
      return date >= moment().format("YYYY/MM/DD") && availableDates.value.indexOf(date) !== -1;
    };
    const currentBookingDate = ref(moment());
    const noContractors = ref(false);
    const rules = {
      suburb_postcode_region_id: { required },
      postcode: { required },
      address2: { required },
      country_id: { required },
      scheduled_pickup_date: { required },
      scheduled_pickup_time: { required },
      contractor_user_id: { required },
      productcategories: { required },
      team: {
        name: { requiredIf: requiredIf(() => ["Business", "Aged Care", "Sporting Group"].indexOf(model.team.type || "") !== -1) },
        first_name: { required },
        last_name: { required },
        type: { required },
        email: { required, email },
        mobile: { required },
        ndis_number: { requiredIf: requiredIf(() => model.team.type === "NDIS") },
        ndis_type: { requiredIf: requiredIf(() => model.team.type === "NDIS") },
        abn: { requiredIf: requiredIf(() => ["Business", "Aged Care", "Sporting Group"].indexOf(model.team.type || "") !== -1) },
        payment_terms: { required }
      }
    };
    const $v = useVuelidate(rules, model);
    const $q = useQuasar();
    const stepMove = (nextStep) => {
      if (nextStep === 3) {
        getAvailableContractorsDates();
      } else {
        step.value = nextStep;
      }
    };
    const resetModel = () => {
      Object.assign(model, JSON.parse(JSON.stringify(schema)));
      washingAndIroning.value = false;
      washingOnly.value = false;
      ironingOnly.value = false;
      for (const c of categories.value) {
        model.productcategories.push({ product_category_id: c.value, active: false });
      }
    };
    const checkContractors = () => {
      if (!model.suburb_postcode_region_id) {
        noContractors.value = false;
        resetModel();
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
        confirming.value = true;
        success.value = false;
        error.value = false;
        api.post("/public/order/new", model).then(() => {
          success.value = true;
          confirming.value = false;
          $q.loading.hide();
        }).catch((responseError) => {
          confirming.value = false;
          error.value = true;
          errors.value = responseError.response && responseError.response.data ? responseError.response.data.errors : [{ field: "Unknown Error", message: "Unknown error occured." }];
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
      if (route.query.location) {
        model.suburb_postcode_region_id = parseFloat(route.query.location.toString());
      }
      if (route.query.iframed) {
        iframed.value = true;
      }
      loaded.value = true;
    });
    onBeforeUnmount(() => {
      bus.off("newOrder");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              loaded.value ? (openBlock(), createBlock(QPage, {
                key: 0,
                padding: !iframed.value,
                class: normalizeClass({ "q-pa-md": unref($q).screen.xs && !iframed.value })
              }, {
                default: withCtx(() => [
                  !unref($q).screen.xs && !iframed.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
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
                  !iframed.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                    createBaseVNode("div", _hoisted_8, [
                      createVNode(_sfc_main$2)
                    ])
                  ])) : createCommentVNode("", true),
                  !iframed.value ? (openBlock(), createElementBlock("div", _hoisted_9, _hoisted_11)) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("div", _hoisted_13, [
                      step.value !== 6 && model.scheduled_pickup_date ? (openBlock(), createBlock(QCard, {
                        key: 0,
                        flat: "",
                        class: "bg-page q-mb-md"
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
                      })) : createCommentVNode("", true),
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
                                invalid: unref($v).suburb_postcode_region_id.$invalid,
                                clearable: true
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
                                  createBaseVNode("div", null, [
                                    createVNode(QCheckbox, {
                                      modelValue: washingAndIroning.value,
                                      "onUpdate:modelValue": [
                                        _cache[4] || (_cache[4] = ($event) => washingAndIroning.value = $event),
                                        _cache[5] || (_cache[5] = ($event) => toggleWashingAndIroning())
                                      ],
                                      label: "Washing & Ironing"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  createBaseVNode("div", null, [
                                    createVNode(QCheckbox, {
                                      modelValue: washingOnly.value,
                                      "onUpdate:modelValue": [
                                        _cache[6] || (_cache[6] = ($event) => washingOnly.value = $event),
                                        _cache[7] || (_cache[7] = ($event) => toggleWashingOnly())
                                      ],
                                      label: "Washing"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  createBaseVNode("div", null, [
                                    createVNode(QCheckbox, {
                                      modelValue: ironingOnly.value,
                                      "onUpdate:modelValue": [
                                        _cache[8] || (_cache[8] = ($event) => ironingOnly.value = $event),
                                        _cache[9] || (_cache[9] = ($event) => toggleIroningOnly())
                                      ],
                                      label: "Ironing"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  createBaseVNode("div", _hoisted_19, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(model.productcategories, (c) => {
                                      return openBlock(), createElementBlock("div", {
                                        key: c.product_category_id,
                                        class: "q-mr-sm"
                                      }, [
                                        createVNode(QCheckbox, {
                                          modelValue: c.active,
                                          "onUpdate:modelValue": [
                                            ($event) => c.active = $event,
                                            _cache[10] || (_cache[10] = ($event) => [model.scheduled_pickup_date = null, model.scheduled_pickup_time = null, model.contractor_user_id = null])
                                          ],
                                          label: unref(categoryDisplay)(c.product_category_id, categories.value)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                      ]);
                                    }), 128))
                                  ])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_20, [
                                createVNode(QBtn, {
                                  onClick: _cache[11] || (_cache[11] = ($event) => stepMove(1)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[12] || (_cache[12] = ($event) => stepMove(3)),
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
                              _hoisted_21,
                              createBaseVNode("div", _hoisted_22, [
                                createVNode(QDate, {
                                  modelValue: model.scheduled_pickup_date,
                                  "onUpdate:modelValue": [
                                    _cache[13] || (_cache[13] = ($event) => model.scheduled_pickup_date = $event),
                                    _cache[14] || (_cache[14] = ($event) => [model.scheduled_pickup_time = null, model.contractor_user_id = null])
                                  ],
                                  mask: "DD/MM/YYYY",
                                  options: minDate,
                                  class: "q-mt-md",
                                  onNavigation: handleScheduledPickupDateNav
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", _hoisted_23, [
                                createVNode(QBtn, {
                                  onClick: _cache[15] || (_cache[15] = ($event) => stepMove(2)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[16] || (_cache[16] = ($event) => stepMove(4)),
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
                              _hoisted_24,
                              createVNode(QCard, null, {
                                default: withCtx(() => [
                                  createVNode(QCardSection, null, {
                                    default: withCtx(() => [
                                      model.suburb_postcode_region_id && model.scheduled_pickup_date && model.productcategories.filter((o) => o.active).length ? (openBlock(), createBlock(_sfc_main$4, {
                                        key: 0,
                                        scheduled_pickup_date: model.scheduled_pickup_date,
                                        scheduled_pickup_time: model.scheduled_pickup_time,
                                        modelValue: model.contractor_user_id,
                                        "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => model.contractor_user_id = $event),
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
                              createBaseVNode("div", _hoisted_25, [
                                createVNode(QBtn, {
                                  onClick: _cache[18] || (_cache[18] = ($event) => stepMove(3)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[19] || (_cache[19] = ($event) => stepMove(5)),
                                  color: "primary",
                                  label: "Continue",
                                  disable: !model.contractor_user_id || !model.scheduled_pickup_time,
                                  rounded: ""
                                }, null, 8, ["disable"])
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          step.value === 5 ? (openBlock(), createBlock(QCardSection, { key: 4 }, {
                            default: withCtx(() => [
                              _hoisted_26,
                              createVNode(QCard, null, {
                                default: withCtx(() => [
                                  createVNode(QCardSection, null, {
                                    default: withCtx(() => {
                                      var _a2, _b;
                                      return [
                                        _hoisted_27,
                                        createBaseVNode("div", _hoisted_28, [
                                          createBaseVNode("div", _hoisted_29, [
                                            createVNode(QSelect, {
                                              modelValue: model.team.type,
                                              "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => model.team.type = $event),
                                              error: unref($v).team.type.$invalid,
                                              label: _ctx.$t("team.type"),
                                              options: unref(customerTypes),
                                              outlined: ""
                                            }, null, 8, ["modelValue", "error", "label", "options"])
                                          ]),
                                          model.team.type === "Business" ? (openBlock(), createElementBlock("div", _hoisted_30, [
                                            createVNode(QSelect, {
                                              modelValue: model.team.payment_terms,
                                              "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => model.team.payment_terms = $event),
                                              options: ["Credit Card", "Bank Transfer"],
                                              label: "Payment via",
                                              outlined: "",
                                              error: unref($v).team.payment_terms.$invalid
                                            }, null, 8, ["modelValue", "error"])
                                          ])) : createCommentVNode("", true)
                                        ]),
                                        model.team.type === "NDIS" ? (openBlock(), createElementBlock("div", _hoisted_31, [
                                          createTextVNode(" To claim laundry services under NDIS you MUST have item number 01_021_0120_1_1 0 - Linen Service listed in your current NDIS plan. If this line item is not listed you will not be eligible to claim under NDIS. Do you wish to proceed? "),
                                          createVNode(QToggle, {
                                            modelValue: agreeNdis.value,
                                            "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => agreeNdis.value = $event),
                                            label: "I wish to proceed",
                                            color: "white"
                                          }, null, 8, ["modelValue"])
                                        ])) : createCommentVNode("", true),
                                        model.team.type !== "NDIS" || model.team.type === "NDIS" && agreeNdis.value ? (openBlock(), createElementBlock("div", _hoisted_32, [
                                          ["Business", "Aged Care", "Sporting Group"].indexOf(model.team.type || "") !== -1 ? (openBlock(), createElementBlock("div", _hoisted_33, [
                                            createBaseVNode("div", _hoisted_34, [
                                              createVNode(QInput, {
                                                modelValue: model.team.name,
                                                "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => model.team.name = $event),
                                                label: _ctx.$t("team.teamName"),
                                                error: unref($v).team.name.$invalid,
                                                outlined: ""
                                              }, null, 8, ["modelValue", "label", "error"])
                                            ]),
                                            ["Business", "Aged Care", "Sporting Group"].indexOf(model.team.type || "") !== -1 ? (openBlock(), createElementBlock("div", _hoisted_35, [
                                              createVNode(QInput, {
                                                modelValue: model.team.abn,
                                                "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => model.team.abn = $event),
                                                label: ((_a2 = unref(common)) == null ? void 0 : _a2.operating_country) === "nzd" ? "NZBN" : "ABN",
                                                error: unref($v).team.abn.$invalid,
                                                outlined: ""
                                              }, null, 8, ["modelValue", "label", "error"])
                                            ])) : createCommentVNode("", true)
                                          ])) : createCommentVNode("", true),
                                          createBaseVNode("div", _hoisted_36, [
                                            createBaseVNode("div", _hoisted_37, [
                                              createVNode(QInput, {
                                                modelValue: model.team.first_name,
                                                "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => model.team.first_name = $event),
                                                error: unref($v).team.first_name.$invalid,
                                                label: "Contact first name",
                                                outlined: ""
                                              }, null, 8, ["modelValue", "error"])
                                            ]),
                                            createBaseVNode("div", _hoisted_38, [
                                              createVNode(QInput, {
                                                modelValue: model.team.last_name,
                                                "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => model.team.last_name = $event),
                                                error: unref($v).team.last_name.$invalid,
                                                label: "Contact last name",
                                                outlined: ""
                                              }, null, 8, ["modelValue", "error"])
                                            ])
                                          ]),
                                          createBaseVNode("div", _hoisted_39, [
                                            createBaseVNode("div", _hoisted_40, [
                                              createVNode(QInput, {
                                                modelValue: model.team.email,
                                                "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => model.team.email = $event),
                                                error: unref($v).team.email.$invalid,
                                                label: "Your email address",
                                                outlined: "",
                                                autocapitalize: "off"
                                              }, null, 8, ["modelValue", "error"])
                                            ]),
                                            createBaseVNode("div", _hoisted_41, [
                                              createVNode(QInput, {
                                                modelValue: model.team.mobile,
                                                "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => model.team.mobile = $event),
                                                error: unref($v).team.mobile.$invalid,
                                                label: "Your contact mobile number",
                                                outlined: "",
                                                mask: ((_b = unref(common)) == null ? void 0 : _b.operating_country) === "aud" ? "#### ### ###" : "",
                                                maxlength: "20"
                                              }, null, 8, ["modelValue", "error", "mask"])
                                            ])
                                          ]),
                                          model.team.type === "NDIS" ? (openBlock(), createElementBlock("div", _hoisted_42, [
                                            createBaseVNode("div", _hoisted_43, [
                                              createBaseVNode("div", _hoisted_44, [
                                                createVNode(QInput, {
                                                  modelValue: model.team.ndis_number,
                                                  "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => model.team.ndis_number = $event),
                                                  label: _ctx.$t("team.ndisNumber"),
                                                  outlined: "",
                                                  error: unref($v).team.ndis_number.$invalid
                                                }, {
                                                  prepend: withCtx(() => [
                                                    _hoisted_45
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "label", "error"])
                                              ]),
                                              createBaseVNode("div", _hoisted_46, [
                                                createVNode(QSelect, {
                                                  modelValue: model.team.ndis_type,
                                                  "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => model.team.ndis_type = $event),
                                                  label: _ctx.$t("team.ndisType"),
                                                  error: unref($v).team.ndis_type.$invalid,
                                                  outlined: "",
                                                  options: ["Self managed", "Plan managed", "NDIA registered"]
                                                }, null, 8, ["modelValue", "label", "error"])
                                              ])
                                            ]),
                                            createBaseVNode("div", _hoisted_47, [
                                              createVNode(QInput, {
                                                modelValue: model.team.ndis_plan_manager_email,
                                                "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => model.team.ndis_plan_manager_email = $event),
                                                label: _ctx.$t("team.ndisPlanManagerEmail"),
                                                "bottom-slots": "",
                                                class: "col-xs-12 col-sm-6",
                                                outlined: ""
                                              }, null, 8, ["modelValue", "label"]),
                                              createVNode(QInput, {
                                                modelValue: model.team.ndis_support_coordinator_email,
                                                "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => model.team.ndis_support_coordinator_email = $event),
                                                label: _ctx.$t("team.ndisSupportCoordinatorEmail"),
                                                class: "col-xs-12 col-sm-6",
                                                "bottom-slots": "",
                                                outlined: ""
                                              }, null, 8, ["modelValue", "label"])
                                            ]),
                                            createBaseVNode("div", _hoisted_48, [
                                              createVNode(_sfc_main$5, {
                                                modelValue: model.team.ndis_plan_start,
                                                "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => model.team.ndis_plan_start = $event),
                                                label: _ctx.$t("team.ndisPlanStart"),
                                                outlined: true,
                                                class: "col-xs-12 col-sm-6"
                                              }, null, 8, ["modelValue", "label"]),
                                              createVNode(_sfc_main$5, {
                                                modelValue: model.team.ndis_plan_end,
                                                "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => model.team.ndis_plan_end = $event),
                                                label: _ctx.$t("team.ndisPlanEnd"),
                                                outlined: true,
                                                class: "col-xs-12 col-sm-6"
                                              }, null, 8, ["modelValue", "label"])
                                            ]),
                                            createBaseVNode("div", _hoisted_49, [
                                              createVNode(QToggle, {
                                                modelValue: model.team.ndis_line_item,
                                                "onUpdate:modelValue": _cache[35] || (_cache[35] = ($event) => model.team.ndis_line_item = $event),
                                                label: "Yes I (the client) have item number 01_021_0120_1_1 \u2013 Linen Service stated in my current NDIS plan"
                                              }, null, 8, ["modelValue"])
                                            ]),
                                            createBaseVNode("div", null, [
                                              createVNode(QToggle, {
                                                modelValue: model.team.ndis_funds,
                                                "onUpdate:modelValue": _cache[36] || (_cache[36] = ($event) => model.team.ndis_funds = $event),
                                                label: "Yes I (the client) have sufficient funds available under the Linen code to pay for my services and I agree to inform Laundry Lady if funds run out"
                                              }, null, 8, ["modelValue"])
                                            ]),
                                            createBaseVNode("div", null, [
                                              createVNode(QToggle, {
                                                modelValue: model.team.ndis_funds_inform,
                                                "onUpdate:modelValue": _cache[37] || (_cache[37] = ($event) => model.team.ndis_funds_inform = $event),
                                                label: "Yes I (the client) agree to inform Laundry Lady if there are any changes to my plan that will affect claiming under this code"
                                              }, null, 8, ["modelValue"])
                                            ]),
                                            createVNode(QRadio, {
                                              modelValue: model.team.ndis_payment,
                                              "onUpdate:modelValue": _cache[38] || (_cache[38] = ($event) => model.team.ndis_payment = $event),
                                              val: "self",
                                              label: "I (the client) will pay for services myself and will be responsible for claiming under the NDIS (self-managed)"
                                            }, null, 8, ["modelValue"]),
                                            createVNode(QRadio, {
                                              modelValue: model.team.ndis_payment,
                                              "onUpdate:modelValue": _cache[39] || (_cache[39] = ($event) => model.team.ndis_payment = $event),
                                              val: "plan",
                                              label: "The invoice should be sent to my plan manager for payment"
                                            }, null, 8, ["modelValue"])
                                          ])) : createCommentVNode("", true),
                                          _hoisted_50,
                                          _hoisted_51,
                                          createVNode(_sfc_main$6, {
                                            model,
                                            filled: true,
                                            addressfields: { address1: "address1", address2: "address2", suburb_postcode_region_id: "suburb_postcode_region_id", lat: "lat", lng: "lng", country_id: "country_id", postcode: "postcode" },
                                            placeholder: _ctx.$t("address.search")
                                          }, null, 8, ["model", "placeholder"]),
                                          createVNode(QInput, {
                                            modelValue: model.address1,
                                            "onUpdate:modelValue": _cache[40] || (_cache[40] = ($event) => model.address1 = $event),
                                            label: _ctx.$t("address.line1"),
                                            outlined: "",
                                            class: "q-mb-md"
                                          }, null, 8, ["modelValue", "label"]),
                                          createVNode(QInput, {
                                            modelValue: model.address2,
                                            "onUpdate:modelValue": _cache[41] || (_cache[41] = ($event) => model.address2 = $event),
                                            error: unref($v).address2.$invalid,
                                            label: _ctx.$t("address.line2"),
                                            outlined: ""
                                          }, null, 8, ["modelValue", "error", "label"]),
                                          createBaseVNode("div", _hoisted_52, [
                                            createVNode(_sfc_main$3, {
                                              modelValue: model.suburb_postcode_region_id,
                                              "onUpdate:modelValue": _cache[42] || (_cache[42] = ($event) => model.suburb_postcode_region_id = $event),
                                              invalid: unref($v).suburb_postcode_region_id.$invalid,
                                              label: _ctx.$t("address.suburb"),
                                              class: "col-xs-12 col-sm-6",
                                              outlined: true
                                            }, null, 8, ["modelValue", "invalid", "label"]),
                                            createVNode(QInput, {
                                              modelValue: model.postcode,
                                              "onUpdate:modelValue": _cache[43] || (_cache[43] = ($event) => model.postcode = $event),
                                              error: unref($v).postcode.$invalid,
                                              label: _ctx.$t("address.postcode"),
                                              outlined: "",
                                              class: "col-xs-12 col-sm-6"
                                            }, null, 8, ["modelValue", "error", "label"]),
                                            createVNode(_sfc_main$7, {
                                              modelValue: model.country_id,
                                              "onUpdate:modelValue": _cache[44] || (_cache[44] = ($event) => model.country_id = $event),
                                              label: _ctx.$t("address.country"),
                                              class: "col-xs-12 col-sm-6",
                                              outlined: true,
                                              invalid: unref($v).country_id.$invalid
                                            }, null, 8, ["modelValue", "label", "invalid"])
                                          ])
                                        ])) : createCommentVNode("", true)
                                      ];
                                    }),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createBaseVNode("div", _hoisted_53, [
                                createVNode(QBtn, {
                                  onClick: _cache[45] || (_cache[45] = ($event) => stepMove(4)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[46] || (_cache[46] = ($event) => stepMove(6)),
                                  color: "primary",
                                  label: "Continue",
                                  disable: unref($v).$invalid || !unref(ndisOk),
                                  rounded: ""
                                }, null, 8, ["disable"])
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          step.value === 6 ? (openBlock(), createBlock(QCardSection, { key: 5 }, {
                            default: withCtx(() => [
                              !success.value && !error.value && !confirming.value ? (openBlock(), createElementBlock("p", _hoisted_54, "Confirm your booking:")) : createCommentVNode("", true),
                              createVNode(QCard, null, {
                                default: withCtx(() => [
                                  !success.value && !error.value && !confirming.value ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                                    default: withCtx(() => {
                                      var _a2, _b;
                                      return [
                                        _hoisted_55,
                                        createBaseVNode("div", null, toDisplayString(model.team.email), 1),
                                        createBaseVNode("div", _hoisted_56, toDisplayString(model.team.mobile), 1),
                                        categories.value && model.suburb_postcode_region_id ? (openBlock(), createBlock(_sfc_main$1, {
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
                                          "onUpdate:modelValue": _cache[47] || (_cache[47] = ($event) => model.special_instructions = $event),
                                          class: "q-mt-lg",
                                          type: "textarea",
                                          label: "Please enter any special instructions for this booking",
                                          outlined: "",
                                          rows: "3"
                                        }, null, 8, ["modelValue"]),
                                        createBaseVNode("div", _hoisted_57, [
                                          createVNode(QToggle, {
                                            modelValue: model.team.marketing_subscribed,
                                            "onUpdate:modelValue": _cache[48] || (_cache[48] = ($event) => model.team.marketing_subscribed = $event),
                                            label: "I want to receive emails with the latest news and updates from The Laundry Lady"
                                          }, null, 8, ["modelValue"])
                                        ]),
                                        createBaseVNode("div", null, [
                                          createBaseVNode("div", _hoisted_58, [
                                            createTextVNode("No cancellations or changes allowed within 3 hours of the appointment. Charges will be applied if clothes are not ready at pickup. By booking this appointment you agree to our Terms and Conditions which can be found online here: "),
                                            ((_a2 = unref(common)) == null ? void 0 : _a2.operating_country) === "nzd" ? (openBlock(), createElementBlock("a", _hoisted_59, "https://thelaundrylady.co.nz/terms-and-conditions/")) : createCommentVNode("", true),
                                            ((_b = unref(common)) == null ? void 0 : _b.operating_country) === "aud" ? (openBlock(), createElementBlock("a", _hoisted_60, "https://thelaundrylady.com.au/terms-and-conditions/")) : createCommentVNode("", true)
                                          ]),
                                          createBaseVNode("div", null, [
                                            createVNode(QToggle, {
                                              modelValue: model.cancellation_terms,
                                              "onUpdate:modelValue": _cache[49] || (_cache[49] = ($event) => model.cancellation_terms = $event),
                                              label: "I agree to the Cancellation policy"
                                            }, null, 8, ["modelValue"])
                                          ])
                                        ])
                                      ];
                                    }),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  error.value ? (openBlock(), createBlock(QCardSection, { key: 1 }, {
                                    default: withCtx(() => [
                                      _hoisted_61,
                                      (openBlock(true), createElementBlock(Fragment, null, renderList(errors.value, (e, index) => {
                                        return openBlock(), createElementBlock("div", { key: index }, [
                                          createBaseVNode("div", _hoisted_62, toDisplayString(e.message), 1)
                                        ]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  success.value ? (openBlock(), createBlock(QCardSection, { key: 2 }, {
                                    default: withCtx(() => {
                                      var _a2, _b;
                                      return [
                                        createBaseVNode("div", _hoisted_63, [
                                          createVNode(QIcon, {
                                            name: "o_check_circle",
                                            size: "64px",
                                            color: "green"
                                          })
                                        ]),
                                        _hoisted_64,
                                        _hoisted_65,
                                        createBaseVNode("p", null, [
                                          createTextVNode("An email with all of the details is on its way. While you wait, check out our FAQs page for all the details to get ready for your service. "),
                                          ((_a2 = unref(common)) == null ? void 0 : _a2.operating_country) === "nzd" ? (openBlock(), createElementBlock("a", _hoisted_66, "https://thelaundrylady.co.nz/faqs/")) : createCommentVNode("", true),
                                          ((_b = unref(common)) == null ? void 0 : _b.operating_country) === "aud" ? (openBlock(), createElementBlock("a", _hoisted_67, "https://thelaundrylady.com.au/faqs/")) : createCommentVNode("", true)
                                        ]),
                                        categories.value && model.suburb_postcode_region_id ? (openBlock(), createBlock(_sfc_main$1, {
                                          key: 0,
                                          suburb_postcode_region_id: model.suburb_postcode_region_id,
                                          contractor_user_id: model.contractor_user_id,
                                          scheduled_pickup_date: model.scheduled_pickup_date,
                                          scheduled_pickup_time: model.scheduled_pickup_time,
                                          productcategories: model.productcategories,
                                          categories: categories.value
                                        }, null, 8, ["suburb_postcode_region_id", "contractor_user_id", "scheduled_pickup_date", "scheduled_pickup_time", "productcategories", "categories"])) : createCommentVNode("", true)
                                      ];
                                    }),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              !success.value && !confirming.value ? (openBlock(), createElementBlock("div", _hoisted_68, [
                                createVNode(QBtn, {
                                  onClick: _cache[50] || (_cache[50] = ($event) => stepMove(5)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[51] || (_cache[51] = ($event) => save()),
                                  color: "primary",
                                  label: "Confirm booking",
                                  disable: unref($v).$invalid || !model.cancellation_terms || !unref(ndisOk),
                                  rounded: ""
                                }, null, 8, ["disable"])
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["padding", "class"])) : createCommentVNode("", true)
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
