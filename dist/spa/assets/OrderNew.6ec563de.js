import { C as defineComponent, r as ref, w as watch, o as onMounted, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, L as QCardSection, q as createBaseVNode, N as QIcon, ac as createTextVNode, ad as toDisplayString, R as unref, z as createCommentVNode, F as Fragment, ab as renderList, Q as QCard, ak as useRoute, g as computed, D as reactive, i as inject, G as onBeforeUnmount, aa as createBlock, t as normalizeClass, M as QInput, P as QBtn, bl as QCheckbox, aQ as QSpinner, as as QToggle, bx as QRadio } from "./index.26ecc84c.js";
import { Q as QSelect } from "./QSelect.2948296f.js";
import { Q as QDate } from "./QDate.ca78e539.js";
import { Q as QPage } from "./QPage.0cd8e7c6.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.2667ee31.js";
import { _ as _imports_0 } from "./ndis_heart.0820b9e2.js";
import { u as useVuelidate, r as required, a as requiredIf, e as email } from "./index.esm.0f2dc13e.js";
import { a as api, m as moment } from "./axios.942456e6.js";
import { u as useQuasar } from "./use-quasar.52795b41.js";
import { _ as _sfc_main$2, a as _sfc_main$9 } from "./HeaderComponent.75de1d95.js";
import { a as _sfc_main$4, _ as _sfc_main$7, b as _sfc_main$8 } from "./PostcodeRegionField.aeb6ac8d.js";
import { _ as _sfc_main$6 } from "./DateField.256b1514.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { a as categoryDisplay, d as displayDateOrder, h as hourBookingDisplay, c as confirmDelete } from "./help.c16653b0.js";
import { u as useMixinCommon } from "./common.d36c798c.js";
import { p as productCategoriesVisibleBooking } from "./helpers.ab807207.js";
import { _ as _sfc_main$3 } from "./AppLogo.e1c99afb.js";
import { _ as _sfc_main$5 } from "./OrderContractorManagement.cdfceb75.js";
import "./QItemSection.d61f97d4.js";
import "./QItemLabel.869e1563.js";
import "./QMenu.96ee2f21.js";
import "./selection.2b49221b.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./use-render-cache.3aae9b27.js";
import "./QResizeObserver.e19f5036.js";
import "./QSpace.933cabad.js";
import "./QList.ee9af6a8.js";
import "./ClosePopup.a14ea6af.js";
import "./QPopupProxy.f6c3d28d.js";
import "./common.f4b0dd2d.js";
import "./QLinearProgress.4ef1995e.js";
import "./UserAvatar.ad1c4106.js";
import "./use-ratio.a305fccc.js";
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
                      createTextVNode(" " + toDisplayString(localModel.value.suburbpostcoderegion.locality) + " ", 1),
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
                    createTextVNode(" " + toDisplayString(unref(displayDateOrder)(props.scheduled_pickup_date)), 1)
                  ])) : createCommentVNode("", true),
                  localModel.value.contractor && props.scheduled_pickup_date && props.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                    createVNode(QIcon, {
                      name: "account_circle",
                      size: "24px"
                    }),
                    createTextVNode(" Pickup with " + toDisplayString(localModel.value.contractor.contractor_badge_name) + " on " + toDisplayString(unref(displayDateOrder)(props.scheduled_pickup_date)) + " (" + toDisplayString(unref(hourBookingDisplay)(props.scheduled_pickup_time)) + ") ", 1)
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
  class: "row q-mt-xl q-mb-lg"
};
const _hoisted_2 = { class: "col-xs-12 col-md-6 offset-md-3 text-center" };
const _hoisted_3 = {
  key: 1,
  class: "row text-lg q-mb-lg"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "col-xs-12 col-md-6 offset-md-3 text-center" }, " Book your mobile Laundry service. Washing, Ironing, Pickup and Delivery. ", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = { class: "row q-col-gutter-md" };
const _hoisted_7 = { class: "col-xs-12 col-md-6 offset-md-3" };
const _hoisted_8 = {
  key: 0,
  class: "q-mb-lg flex justify-center"
};
const _hoisted_9 = {
  key: 1,
  class: "q-mb-lg flex justify-center"
};
const _hoisted_10 = {
  key: 0,
  class: "text-red q-mb-md"
};
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { key: 2 };
const _hoisted_13 = { key: 0 };
const _hoisted_14 = { key: 2 };
const _hoisted_15 = { key: 2 };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Select your pickup location:", -1);
const _hoisted_17 = {
  key: 0,
  class: "text-center q-mt-lg"
};
const _hoisted_18 = { key: 0 };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("strong", null, "We currently don't have availability in your area, register your interest below and we will let you know as soon as we do", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-md" }, "Register your interest below:", -1);
const _hoisted_21 = {
  key: 1,
  class: "q-mt-md"
};
const _hoisted_22 = { class: "q-mt-md" };
const _hoisted_23 = {
  key: 3,
  class: "text-center q-mt-xl"
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Choose the services you require:", -1);
const _hoisted_25 = { class: "flex justify-center" };
const _hoisted_26 = { class: "hidden" };
const _hoisted_27 = { class: "text-center q-mt-xl" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center text-bold" }, "Choose the desired pickup date:", -1);
const _hoisted_29 = {
  class: "q-mt-sm text-center",
  style: { "height": "14px" }
};
const _hoisted_30 = { key: 0 };
const _hoisted_31 = { class: "text-center" };
const _hoisted_32 = { class: "q-mt-xl text-center" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Select your Laundry Lady or Lad:", -1);
const _hoisted_34 = { class: "q-mt-xl text-center" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center text-bold" }, "Enter your details:", -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-sm" }, "Your Details", -1);
const _hoisted_37 = { class: "row q-col-gutter-md q-mb-sm" };
const _hoisted_38 = { class: "col-xs-12 col-sm-6" };
const _hoisted_39 = {
  key: 0,
  class: "bg-primary text-white q-pa-md q-mb-lg"
};
const _hoisted_40 = { class: "q-mt-xs" };
const _hoisted_41 = { key: 1 };
const _hoisted_42 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_43 = { class: "col-xs-12 col-sm-6" };
const _hoisted_44 = {
  key: 0,
  class: "col-xs-12 col-sm-6"
};
const _hoisted_45 = { class: "row q-col-gutter-md" };
const _hoisted_46 = { class: "col-xs-12 col-sm-6" };
const _hoisted_47 = { class: "col-xs-12 col-sm-6" };
const _hoisted_48 = { class: "row q-col-gutter-md" };
const _hoisted_49 = { class: "col-xs-12 col-sm-6" };
const _hoisted_50 = { class: "col-xs-12 col-sm-6" };
const _hoisted_51 = { class: "col-xs-12 col-sm-6" };
const _hoisted_52 = { key: 1 };
const _hoisted_53 = { class: "row q-col-gutter-md" };
const _hoisted_54 = { class: "col-xs-12 col-sm-6" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  style: { "height": "32px" }
}, null, -1);
const _hoisted_56 = { class: "col-xs-12 col-sm-6" };
const _hoisted_57 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_58 = { class: "row q-col-gutter-md" };
const _hoisted_59 = { class: "row q-col-gutter-md" };
const _hoisted_60 = { class: "q-mt-lg" };
const _hoisted_61 = { class: "q-mb-sm" };
const _hoisted_62 = { class: "q-mb-sm" };
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mt-sm" }, "Pickup Address", -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("p", null, "Enter your pickup / delivery address.", -1);
const _hoisted_65 = { class: "row q-col-gutter-md" };
const _hoisted_66 = { class: "q-mt-xl text-center" };
const _hoisted_67 = {
  key: 0,
  class: "text-center text-bold"
};
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold" }, "Your contact details", -1);
const _hoisted_69 = { class: "q-mb-md" };
const _hoisted_70 = { class: "q-mt-lg" };
const _hoisted_71 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-xs" }, "Would you like to set this as a recurring booking?", -1);
const _hoisted_72 = {
  key: 0,
  class: "q-mt-sm"
};
const _hoisted_73 = { class: "row q-col-gutter-md" };
const _hoisted_74 = { class: "col-xs-12 col-sm-6" };
const _hoisted_75 = { class: "q-mb-md q-mt-sm" };
const _hoisted_76 = { class: "q-mb-xs" };
const _hoisted_77 = {
  key: 0,
  href: "https://thelaundrylady.co.nz/terms-and-conditions/",
  target: "_blank",
  class: "link"
};
const _hoisted_78 = {
  key: 1,
  href: "https://thelaundrylady.com.au/terms-and-conditions/",
  target: "_blank",
  class: "link"
};
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("p", null, "The following problems were found when trying to submit the booking:", -1);
const _hoisted_80 = { class: "text-bold" };
const _hoisted_81 = { class: "text-center" };
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 text-center q-mt-sm" }, "Booking Confirmed", -1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("p", { class: "text-center" }, "Great news, your booking has been confirmed!", -1);
const _hoisted_84 = ["href"];
const _hoisted_85 = ["href"];
const _hoisted_86 = {
  key: 1,
  class: "q-mt-xl text-center"
};
const _hoisted_87 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderNew",
  setup(__props) {
    var _a;
    const step = ref(1);
    const washingAndIroning = ref(false);
    const washingOnly = ref(false);
    const ironingOnly = ref(false);
    const categories = ref();
    const loadingAvailableDates = ref(false);
    const availableDates = ref([]);
    const success = ref(false);
    const error = ref(false);
    const confirming = ref(false);
    const errors = ref([]);
    const common = useMixinCommon();
    const route = useRoute();
    const iframed = ref(true);
    const loaded = ref(false);
    const agreeNdis = ref(false);
    const tokenTeams = ref();
    const tokenTeamsSelect = ref();
    const tokenError = ref();
    const preparingForPickupUrl = ref();
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
      recurring_order: null,
      recurring: null,
      recurring_every: null,
      recurring_end: null,
      recurring_days: {
        days: [
          { day: 0, active: false, label: "Sun" },
          { day: 1, active: false, label: "Mon" },
          { day: 2, active: false, label: "Tue" },
          { day: 3, active: false, label: "Wed" },
          { day: 4, active: false, label: "Thu" },
          { day: 5, active: false, label: "Fri" },
          { day: 6, active: false, label: "Sat" }
        ]
      },
      recurring_notes: null,
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
        other_phone: null,
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
        ndis_dob: null,
        abn: null,
        marketing_subscribed: true
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
      return availableDates.value.indexOf(date) !== -1;
    };
    const currentBookingDate = ref(moment());
    const noContractors = ref(false);
    const registerInterest = reactive({
      suburb_postcode_region_id: null,
      email: null,
      success: false
    });
    const rules = {
      suburb_postcode_region_id: { required },
      postcode: { required },
      address2: { required },
      country_id: { required },
      scheduled_pickup_date: { required },
      scheduled_pickup_time: { required },
      contractor_user_id: { required },
      productcategories: { required },
      recurring_order: { requiredIf: requiredIf(() => step.value === 6) },
      recurring: { requiredIf: requiredIf(() => model.recurring_order) },
      recurring_notes: { requiredIf: requiredIf(() => model.recurring_order && model.recurring === "Other") },
      team: {
        name: { requiredIf: requiredIf(() => ["Business", "Aged Care", "Sporting Group"].indexOf(model.team.type || "") !== -1) },
        first_name: { required },
        last_name: { required },
        type: { required },
        email: { required, email },
        mobile: { requiredIf: requiredIf(() => !model.team.other_phone) },
        other_phone: { requiredIf: requiredIf(() => !model.team.mobile) },
        ndis_number: { requiredIf: requiredIf(() => model.team.type === "NDIS") },
        ndis_type: { requiredIf: requiredIf(() => model.team.type === "NDIS") },
        ndis_dob: { requiredIf: requiredIf(() => model.team.type === "NDIS") },
        abn: { requiredIf: requiredIf(() => ["Business", "Aged Care", "Sporting Group"].indexOf(model.team.type || "") !== -1) },
        ndis_plan_manager_email: { email },
        ndis_support_coordinator_email: { email }
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
      availableDates.value = [];
    };
    const checkContractors = () => {
      if (!model.suburb_postcode_region_id) {
        noContractors.value = false;
        resetModel();
      } else {
        Object.assign(registerInterest, { suburb_postcode_region_id: null, email: null, success: false });
        api.post("/public/order/findcontractorsinsuburbpostcoderegion", { suburb_postcode_region_id: model.suburb_postcode_region_id }).then((response) => {
          noContractors.value = !response.data.found;
          if (noContractors.value) {
            registerInterest.suburb_postcode_region_id = model.suburb_postcode_region_id;
            registerInterest.email = null;
          }
          availableDates.value = [];
        }).catch((error2) => {
          useMixinDebug(error2);
        });
      }
    };
    const handleScheduledPickupDateNav = (view) => {
      console.log(`Handling ${view.year}-${view.month}`);
      currentBookingDate.value = moment(`${view.year}-${view.month}-01`, "YYYY-M-D");
      getAvailableContractorsDates();
    };
    const getAvailableContractorsDates = () => {
      availableDates.value = [];
      loadingAvailableDates.value = true;
      api.post("/public/order/findcontractorsdates", {
        suburb_postcode_region_id: model.suburb_postcode_region_id,
        scheduled_pickup_date: currentBookingDate.value.format("DD/MM/YYYY"),
        productcategories: model.productcategories
      }).then((response) => {
        availableDates.value = response.data;
        step.value = 3;
        loadingAvailableDates.value = false;
      }).catch((error2) => {
        loadingAvailableDates.value = false;
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
        api.post("/public/order/new", model).then((response) => {
          if (response.data.preparingForPickupUrl) {
            preparingForPickupUrl.value = response.data.preparingForPickupUrl;
            document.location.href = preparingForPickupUrl.value;
            return true;
          }
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
    const registerInterestFunc = () => {
      if (registerInterest.email && registerInterest.suburb_postcode_region_id) {
        api.post("/public/postcoderegioninterest/register", registerInterest).then(() => {
          registerInterest.success = true;
        }).catch((error2) => {
          useMixinDebug(error2);
        });
      }
    };
    const resetRegisterInterest = () => {
      noContractors.value = false;
      Object.assign(registerInterest, { suburb_postcode_region_id: null, email: null, success: false });
      model.suburb_postcode_region_id = null;
    };
    const selectTokenTeam = (id) => {
      const team = tokenTeams.value.find((o) => o.id === id);
      if (team) {
        model.team = team;
        model.suburb_postcode_region_id = team.suburb_postcode_region_id;
        model.address1 = team.address1;
        model.address2 = team.address2;
        model.postcode = team.postcode;
        step.value = 2;
      }
    };
    const tokenErrorEmailSend = () => {
      if (!tokenError.value.email) {
        return false;
      }
      api.post("/public/team/sendbookinglink", { email: tokenError.value.email }).then(() => {
        tokenError.value.emailSent = true;
      }).catch((error2) => {
        useMixinDebug(error2);
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
      if (!route.query.iframed) {
        iframed.value = false;
      }
      if (route.query.t) {
        api.post("/public/team/findbytoken", { token: route.query.t }).then((response) => {
          tokenTeams.value = response.data.teams;
          if (response.data.teams && response.data.teams.length === 1) {
            selectTokenTeam(response.data.teams[0].id);
          }
          loaded.value = true;
        }).catch((error2) => {
          if (error2.response && error2.response.data) {
            tokenError.value = { message: error2.response.data.error, resend: error2.response.data.resend, email: null, emailSent: false };
          }
          loaded.value = true;
        });
      } else {
        loaded.value = true;
      }
      try {
        let fbmpid = "1797469603884044";
        if (window.location.hostname.match(".nz")) {
          fbmpid = "1885184374985412";
        }
        window.fbq("init", fbmpid);
        window.fbq("track", "PageView");
      } catch (error2) {
        console.log(error2);
      }
    });
    onBeforeUnmount(() => {
      bus.off("newOrder");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          !iframed.value ? (openBlock(), createBlock(_sfc_main$2, { key: 0 })) : createCommentVNode("", true),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              loaded.value ? (openBlock(), createBlock(QPage, {
                key: 0,
                padding: !iframed.value,
                class: normalizeClass({ "q-pa-md": unref($q).screen.xs && !iframed.value })
              }, {
                default: withCtx(() => [
                  !iframed.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(_sfc_main$3)
                    ])
                  ])) : createCommentVNode("", true),
                  !iframed.value ? (openBlock(), createElementBlock("div", _hoisted_3, _hoisted_5)) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("div", _hoisted_7, [
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
                              tokenTeams.value && tokenTeams.value.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                createVNode(QSelect, {
                                  modelValue: tokenTeamsSelect.value,
                                  "onUpdate:modelValue": [
                                    _cache[0] || (_cache[0] = ($event) => tokenTeamsSelect.value = $event),
                                    _cache[1] || (_cache[1] = ($event) => selectTokenTeam(tokenTeamsSelect.value))
                                  ],
                                  label: "Select the customer record",
                                  options: tokenTeams.value.map((o) => {
                                    return { label: o.name, value: o.id };
                                  }),
                                  outlined: "",
                                  style: { "width": "400px" },
                                  "map-options": "",
                                  "emit-value": ""
                                }, null, 8, ["modelValue", "options"])
                              ])) : createCommentVNode("", true),
                              tokenError.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
                                createBaseVNode("div", null, [
                                  !tokenError.value.emailSent ? (openBlock(), createElementBlock("div", _hoisted_10, "There was an issue with the customer token: " + toDisplayString(tokenError.value.message), 1)) : createCommentVNode("", true),
                                  !tokenError.value.resend ? (openBlock(), createElementBlock("p", _hoisted_11, "Please contact us to obtain a new booking link.")) : createCommentVNode("", true),
                                  tokenError.value.resend ? (openBlock(), createElementBlock("div", _hoisted_12, [
                                    !tokenError.value.emailSent ? (openBlock(), createElementBlock("p", _hoisted_13, "Confirm your email address below to obtain a new booking link:")) : createCommentVNode("", true),
                                    !tokenError.value.emailSent ? (openBlock(), createBlock(QInput, {
                                      key: 1,
                                      modelValue: tokenError.value.email,
                                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => tokenError.value.email = $event),
                                      label: "Enter your email address",
                                      outlined: ""
                                    }, {
                                      append: withCtx(() => [
                                        createVNode(QBtn, {
                                          onClick: _cache[2] || (_cache[2] = ($event) => tokenErrorEmailSend()),
                                          disable: !tokenError.value.email,
                                          color: "primary",
                                          label: "Confirm"
                                        }, null, 8, ["disable"])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue"])) : createCommentVNode("", true),
                                    tokenError.value.emailSent ? (openBlock(), createElementBlock("div", _hoisted_14, [
                                      createVNode(QIcon, { name: "mail" }),
                                      createTextVNode(" We've sent a booking link to the confirmed email address. Please check your email and close this window.")
                                    ])) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true)
                                ])
                              ])) : createCommentVNode("", true),
                              !tokenError.value && !tokenTeams.value ? (openBlock(), createElementBlock("div", _hoisted_15, [
                                _hoisted_16,
                                createVNode(_sfc_main$4, {
                                  modelValue: model.suburb_postcode_region_id,
                                  "onUpdate:modelValue": [
                                    _cache[4] || (_cache[4] = ($event) => model.suburb_postcode_region_id = $event),
                                    _cache[5] || (_cache[5] = ($event) => checkContractors())
                                  ],
                                  label: "Enter your pickup suburb",
                                  outlined: "",
                                  invalid: unref($v).suburb_postcode_region_id.$invalid,
                                  clearable: true
                                }, null, 8, ["modelValue", "invalid"]),
                                noContractors.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
                                  !registerInterest.success ? (openBlock(), createElementBlock("div", _hoisted_18, [
                                    _hoisted_19,
                                    _hoisted_20,
                                    createVNode(QInput, {
                                      modelValue: registerInterest.email,
                                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => registerInterest.email = $event),
                                      label: "Enter your email address",
                                      outlined: ""
                                    }, {
                                      append: withCtx(() => [
                                        createVNode(QBtn, {
                                          onClick: _cache[6] || (_cache[6] = ($event) => registerInterestFunc()),
                                          label: "Register",
                                          color: "primary",
                                          disable: !registerInterest.email
                                        }, null, 8, ["disable"])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue"])
                                  ])) : createCommentVNode("", true),
                                  registerInterest.success ? (openBlock(), createElementBlock("div", _hoisted_21, [
                                    createTextVNode(" Thank you for your interest. We'll be in contact as soon as the selected area opens up. "),
                                    createBaseVNode("div", _hoisted_22, [
                                      createVNode(QBtn, {
                                        onClick: _cache[8] || (_cache[8] = ($event) => resetRegisterInterest()),
                                        label: "Search for a different location",
                                        color: "primary",
                                        outline: "",
                                        rounded: ""
                                      })
                                    ])
                                  ])) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true)
                              ])) : createCommentVNode("", true),
                              !registerInterest.suburb_postcode_region_id && !tokenError.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
                                createVNode(QBtn, {
                                  onClick: _cache[9] || (_cache[9] = ($event) => stepMove(2)),
                                  color: "primary",
                                  label: "Continue",
                                  rounded: "",
                                  disable: !model.suburb_postcode_region_id
                                }, null, 8, ["disable"])
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          step.value === 2 ? (openBlock(), createBlock(QCardSection, { key: 1 }, {
                            default: withCtx(() => [
                              _hoisted_24,
                              createBaseVNode("div", _hoisted_25, [
                                createBaseVNode("div", null, [
                                  createBaseVNode("div", null, [
                                    createVNode(QCheckbox, {
                                      modelValue: washingAndIroning.value,
                                      "onUpdate:modelValue": [
                                        _cache[10] || (_cache[10] = ($event) => washingAndIroning.value = $event),
                                        _cache[11] || (_cache[11] = ($event) => toggleWashingAndIroning())
                                      ],
                                      label: "Washing & Ironing"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  createBaseVNode("div", null, [
                                    createVNode(QCheckbox, {
                                      modelValue: washingOnly.value,
                                      "onUpdate:modelValue": [
                                        _cache[12] || (_cache[12] = ($event) => washingOnly.value = $event),
                                        _cache[13] || (_cache[13] = ($event) => toggleWashingOnly())
                                      ],
                                      label: "Washing"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  createBaseVNode("div", null, [
                                    createVNode(QCheckbox, {
                                      modelValue: ironingOnly.value,
                                      "onUpdate:modelValue": [
                                        _cache[14] || (_cache[14] = ($event) => ironingOnly.value = $event),
                                        _cache[15] || (_cache[15] = ($event) => toggleIroningOnly())
                                      ],
                                      label: "Ironing"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  createBaseVNode("div", _hoisted_26, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(model.productcategories, (c) => {
                                      return openBlock(), createElementBlock("div", {
                                        key: c.product_category_id,
                                        class: "q-mr-sm"
                                      }, [
                                        createVNode(QCheckbox, {
                                          modelValue: c.active,
                                          "onUpdate:modelValue": [
                                            ($event) => c.active = $event,
                                            _cache[16] || (_cache[16] = ($event) => [model.scheduled_pickup_date = null, model.scheduled_pickup_time = null, model.contractor_user_id = null])
                                          ],
                                          label: unref(categoryDisplay)(c.product_category_id, categories.value)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                      ]);
                                    }), 128))
                                  ])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_27, [
                                createVNode(QBtn, {
                                  onClick: _cache[17] || (_cache[17] = ($event) => stepMove(1)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: "",
                                  disable: loadingAvailableDates.value
                                }, null, 8, ["disable"]),
                                createVNode(QBtn, {
                                  onClick: _cache[18] || (_cache[18] = ($event) => stepMove(3)),
                                  color: "primary",
                                  label: "Continue",
                                  disable: !model.productcategories.filter((o) => o.active).length || loadingAvailableDates.value,
                                  rounded: "",
                                  loading: loadingAvailableDates.value
                                }, null, 8, ["disable", "loading"])
                              ])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          step.value === 3 ? (openBlock(), createBlock(QCardSection, { key: 2 }, {
                            default: withCtx(() => [
                              _hoisted_28,
                              createBaseVNode("div", _hoisted_29, [
                                loadingAvailableDates.value ? (openBlock(), createElementBlock("div", _hoisted_30, [
                                  createVNode(QSpinner),
                                  createTextVNode(" Finding available dates")
                                ])) : createCommentVNode("", true)
                              ]),
                              createBaseVNode("div", _hoisted_31, [
                                createVNode(QDate, {
                                  modelValue: model.scheduled_pickup_date,
                                  "onUpdate:modelValue": [
                                    _cache[19] || (_cache[19] = ($event) => model.scheduled_pickup_date = $event),
                                    _cache[20] || (_cache[20] = ($event) => [model.scheduled_pickup_time = null, model.contractor_user_id = null])
                                  ],
                                  mask: "DD/MM/YYYY",
                                  options: minDate,
                                  class: "q-mt-md",
                                  onNavigation: handleScheduledPickupDateNav,
                                  disable: loadingAvailableDates.value
                                }, null, 8, ["modelValue", "disable"])
                              ]),
                              createBaseVNode("div", _hoisted_32, [
                                createVNode(QBtn, {
                                  onClick: _cache[21] || (_cache[21] = ($event) => stepMove(2)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[22] || (_cache[22] = ($event) => stepMove(4)),
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
                              _hoisted_33,
                              createVNode(QCard, null, {
                                default: withCtx(() => [
                                  createVNode(QCardSection, null, {
                                    default: withCtx(() => [
                                      model.suburb_postcode_region_id && model.scheduled_pickup_date && model.productcategories.filter((o) => o.active).length ? (openBlock(), createBlock(_sfc_main$5, {
                                        key: 0,
                                        scheduled_pickup_date: model.scheduled_pickup_date,
                                        scheduled_pickup_time: model.scheduled_pickup_time,
                                        modelValue: model.contractor_user_id,
                                        "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => model.contractor_user_id = $event),
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
                              createBaseVNode("div", _hoisted_34, [
                                createVNode(QBtn, {
                                  onClick: _cache[24] || (_cache[24] = ($event) => stepMove(3)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: "",
                                  loading: loadingAvailableDates.value,
                                  disable: loadingAvailableDates.value
                                }, null, 8, ["loading", "disable"]),
                                createVNode(QBtn, {
                                  onClick: _cache[25] || (_cache[25] = ($event) => stepMove(5)),
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
                              _hoisted_35,
                              createVNode(QCard, null, {
                                default: withCtx(() => [
                                  createVNode(QCardSection, null, {
                                    default: withCtx(() => {
                                      var _a2, _b, _c;
                                      return [
                                        _hoisted_36,
                                        createBaseVNode("div", _hoisted_37, [
                                          createBaseVNode("div", _hoisted_38, [
                                            createVNode(QSelect, {
                                              modelValue: model.team.type,
                                              "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => model.team.type = $event),
                                              error: unref($v).team.type.$invalid,
                                              label: _ctx.$t("team.type"),
                                              options: unref(customerTypes),
                                              outlined: ""
                                            }, null, 8, ["modelValue", "error", "label", "options"])
                                          ])
                                        ]),
                                        model.team.type === "NDIS" ? (openBlock(), createElementBlock("div", _hoisted_39, [
                                          createTextVNode(" To claim laundry services under NDIS you MUST have item number 01_021_0120_1_1 - Linen Service listed in your current NDIS plan. If this line item is not listed you will not be eligible to claim under NDIS. Do you wish to proceed? "),
                                          createBaseVNode("div", _hoisted_40, [
                                            createVNode(QToggle, {
                                              modelValue: agreeNdis.value,
                                              "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => agreeNdis.value = $event),
                                              label: "I wish to proceed",
                                              color: "white"
                                            }, null, 8, ["modelValue"])
                                          ])
                                        ])) : createCommentVNode("", true),
                                        model.team.type !== "NDIS" || model.team.type === "NDIS" && agreeNdis.value ? (openBlock(), createElementBlock("div", _hoisted_41, [
                                          ["Business", "Aged Care", "Sporting Group"].indexOf(model.team.type || "") !== -1 ? (openBlock(), createElementBlock("div", _hoisted_42, [
                                            createBaseVNode("div", _hoisted_43, [
                                              createVNode(QInput, {
                                                modelValue: model.team.name,
                                                "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => model.team.name = $event),
                                                label: _ctx.$t("team.teamName"),
                                                error: unref($v).team.name.$invalid,
                                                outlined: ""
                                              }, null, 8, ["modelValue", "label", "error"])
                                            ]),
                                            ["Business", "Aged Care", "Sporting Group"].indexOf(model.team.type || "") !== -1 ? (openBlock(), createElementBlock("div", _hoisted_44, [
                                              createVNode(QInput, {
                                                modelValue: model.team.abn,
                                                "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => model.team.abn = $event),
                                                label: ((_a2 = unref(common)) == null ? void 0 : _a2.operating_country) === "nzd" ? "NZBN" : "ABN",
                                                error: unref($v).team.abn.$invalid,
                                                outlined: ""
                                              }, null, 8, ["modelValue", "label", "error"])
                                            ])) : createCommentVNode("", true)
                                          ])) : createCommentVNode("", true),
                                          createBaseVNode("div", _hoisted_45, [
                                            createBaseVNode("div", _hoisted_46, [
                                              createVNode(QInput, {
                                                modelValue: model.team.first_name,
                                                "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => model.team.first_name = $event),
                                                error: unref($v).team.first_name.$invalid,
                                                label: "Contact first name",
                                                outlined: ""
                                              }, null, 8, ["modelValue", "error"])
                                            ]),
                                            createBaseVNode("div", _hoisted_47, [
                                              createVNode(QInput, {
                                                modelValue: model.team.last_name,
                                                "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => model.team.last_name = $event),
                                                error: unref($v).team.last_name.$invalid,
                                                label: "Contact last name",
                                                outlined: ""
                                              }, null, 8, ["modelValue", "error"])
                                            ])
                                          ]),
                                          createBaseVNode("div", _hoisted_48, [
                                            createBaseVNode("div", _hoisted_49, [
                                              createVNode(QInput, {
                                                modelValue: model.team.email,
                                                "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => model.team.email = $event),
                                                error: unref($v).team.email.$invalid,
                                                label: "Your email address",
                                                outlined: "",
                                                autocapitalize: "off"
                                              }, null, 8, ["modelValue", "error"])
                                            ]),
                                            createBaseVNode("div", _hoisted_50, [
                                              createVNode(QInput, {
                                                modelValue: model.team.mobile,
                                                "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => model.team.mobile = $event),
                                                error: unref($v).team.mobile.$invalid,
                                                label: ((_b = unref(common)) == null ? void 0 : _b.operating_country) === "aud" ? "Your Australian mobile number" : "Your contact mobile",
                                                outlined: "",
                                                mask: ((_c = unref(common)) == null ? void 0 : _c.operating_country) === "aud" ? "#### ### ###" : "",
                                                maxlength: "20",
                                                "error-message": "Use the alternate contact number field if you do not have an Australian mobile number",
                                                hint: "Use the alternate contact number field if you do not have an Australian mobile number"
                                              }, null, 8, ["modelValue", "error", "label", "mask"])
                                            ]),
                                            createBaseVNode("div", _hoisted_51, [
                                              createVNode(QInput, {
                                                modelValue: model.team.other_phone,
                                                "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => model.team.other_phone = $event),
                                                error: unref($v).team.other_phone.$invalid,
                                                label: "Alternate contact number",
                                                outlined: ""
                                              }, null, 8, ["modelValue", "error"])
                                            ])
                                          ]),
                                          model.team.type === "NDIS" ? (openBlock(), createElementBlock("div", _hoisted_52, [
                                            createBaseVNode("div", _hoisted_53, [
                                              createBaseVNode("div", _hoisted_54, [
                                                createVNode(QInput, {
                                                  modelValue: model.team.ndis_number,
                                                  "onUpdate:modelValue": _cache[35] || (_cache[35] = ($event) => model.team.ndis_number = $event),
                                                  label: _ctx.$t("team.ndisNumber"),
                                                  outlined: "",
                                                  error: unref($v).team.ndis_number.$invalid
                                                }, {
                                                  prepend: withCtx(() => [
                                                    _hoisted_55
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "label", "error"])
                                              ]),
                                              createBaseVNode("div", _hoisted_56, [
                                                createVNode(QSelect, {
                                                  modelValue: model.team.ndis_type,
                                                  "onUpdate:modelValue": _cache[36] || (_cache[36] = ($event) => model.team.ndis_type = $event),
                                                  label: _ctx.$t("team.ndisType"),
                                                  error: unref($v).team.ndis_type.$invalid,
                                                  outlined: "",
                                                  options: ["Self managed", "Plan managed", "NDIA registered"]
                                                }, null, 8, ["modelValue", "label", "error"])
                                              ])
                                            ]),
                                            createBaseVNode("div", _hoisted_57, [
                                              createVNode(_sfc_main$6, {
                                                modelValue: model.team.ndis_dob,
                                                "onUpdate:modelValue": _cache[37] || (_cache[37] = ($event) => model.team.ndis_dob = $event),
                                                label: _ctx.$t("team.ndisDob"),
                                                outlined: true,
                                                class: "col-xs-12 col-sm-6",
                                                invalid: unref($v).team.ndis_dob.$invalid
                                              }, null, 8, ["modelValue", "label", "invalid"])
                                            ]),
                                            createBaseVNode("div", _hoisted_58, [
                                              createVNode(QInput, {
                                                modelValue: model.team.ndis_plan_manager_email,
                                                "onUpdate:modelValue": _cache[38] || (_cache[38] = ($event) => model.team.ndis_plan_manager_email = $event),
                                                label: _ctx.$t("team.ndisPlanManagerEmail"),
                                                "bottom-slots": "",
                                                class: "col-xs-12 col-sm-6",
                                                outlined: "",
                                                error: unref($v).team.ndis_plan_manager_email.$invalid
                                              }, null, 8, ["modelValue", "label", "error"]),
                                              createVNode(QInput, {
                                                modelValue: model.team.ndis_support_coordinator_email,
                                                "onUpdate:modelValue": _cache[39] || (_cache[39] = ($event) => model.team.ndis_support_coordinator_email = $event),
                                                label: _ctx.$t("team.ndisSupportCoordinatorEmail"),
                                                class: "col-xs-12 col-sm-6",
                                                "bottom-slots": "",
                                                outlined: "",
                                                error: unref($v).team.ndis_support_coordinator_email.$invalid
                                              }, null, 8, ["modelValue", "label", "error"])
                                            ]),
                                            createBaseVNode("div", _hoisted_59, [
                                              createVNode(_sfc_main$6, {
                                                modelValue: model.team.ndis_plan_start,
                                                "onUpdate:modelValue": _cache[40] || (_cache[40] = ($event) => model.team.ndis_plan_start = $event),
                                                label: _ctx.$t("team.ndisPlanStart"),
                                                outlined: true,
                                                class: "col-xs-12 col-sm-6"
                                              }, null, 8, ["modelValue", "label"]),
                                              createVNode(_sfc_main$6, {
                                                modelValue: model.team.ndis_plan_end,
                                                "onUpdate:modelValue": _cache[41] || (_cache[41] = ($event) => model.team.ndis_plan_end = $event),
                                                label: _ctx.$t("team.ndisPlanEnd"),
                                                outlined: true,
                                                class: "col-xs-12 col-sm-6",
                                                fdc: true
                                              }, null, 8, ["modelValue", "label"])
                                            ]),
                                            createBaseVNode("div", _hoisted_60, [
                                              createVNode(QCheckbox, {
                                                modelValue: model.team.ndis_line_item,
                                                "onUpdate:modelValue": _cache[42] || (_cache[42] = ($event) => model.team.ndis_line_item = $event),
                                                label: "Yes I (the client) have item number 01_021_0120_1_1 \u2013 Linen Service stated in my current NDIS plan"
                                              }, null, 8, ["modelValue"])
                                            ]),
                                            createBaseVNode("div", _hoisted_61, [
                                              createVNode(QCheckbox, {
                                                modelValue: model.team.ndis_funds,
                                                "onUpdate:modelValue": _cache[43] || (_cache[43] = ($event) => model.team.ndis_funds = $event),
                                                label: "Yes I (the client) have sufficient funds available under the Linen code to pay for my services and I agree to inform Laundry Lady if funds run out"
                                              }, null, 8, ["modelValue"])
                                            ]),
                                            createBaseVNode("div", _hoisted_62, [
                                              createVNode(QCheckbox, {
                                                modelValue: model.team.ndis_funds_inform,
                                                "onUpdate:modelValue": _cache[44] || (_cache[44] = ($event) => model.team.ndis_funds_inform = $event),
                                                label: "Yes I (the client) agree to inform Laundry Lady if there are any changes to my plan that will affect claiming under this code"
                                              }, null, 8, ["modelValue"])
                                            ]),
                                            createVNode(QRadio, {
                                              modelValue: model.team.ndis_payment,
                                              "onUpdate:modelValue": _cache[45] || (_cache[45] = ($event) => model.team.ndis_payment = $event),
                                              val: "self",
                                              label: "I (the client) will pay for services myself and will be responsible for claiming under the NDIS (self-managed)"
                                            }, null, 8, ["modelValue"]),
                                            createVNode(QRadio, {
                                              modelValue: model.team.ndis_payment,
                                              "onUpdate:modelValue": _cache[46] || (_cache[46] = ($event) => model.team.ndis_payment = $event),
                                              val: "plan",
                                              label: "The invoice should be sent to my plan manager for payment"
                                            }, null, 8, ["modelValue"])
                                          ])) : createCommentVNode("", true),
                                          _hoisted_63,
                                          _hoisted_64,
                                          createVNode(_sfc_main$7, {
                                            model,
                                            filled: true,
                                            addressfields: { address1: "address1", address2: "address2", suburb_postcode_region_id: "suburb_postcode_region_id", lat: "lat", lng: "lng", country_id: "country_id", postcode: "postcode" },
                                            placeholder: _ctx.$t("address.search")
                                          }, null, 8, ["model", "placeholder"]),
                                          createVNode(QInput, {
                                            modelValue: model.address1,
                                            "onUpdate:modelValue": _cache[47] || (_cache[47] = ($event) => model.address1 = $event),
                                            label: _ctx.$t("address.line1"),
                                            outlined: "",
                                            class: "q-mb-md"
                                          }, null, 8, ["modelValue", "label"]),
                                          createVNode(QInput, {
                                            modelValue: model.address2,
                                            "onUpdate:modelValue": _cache[48] || (_cache[48] = ($event) => model.address2 = $event),
                                            error: unref($v).address2.$invalid,
                                            label: _ctx.$t("address.line2"),
                                            outlined: ""
                                          }, null, 8, ["modelValue", "error", "label"]),
                                          createBaseVNode("div", _hoisted_65, [
                                            createVNode(_sfc_main$4, {
                                              modelValue: model.suburb_postcode_region_id,
                                              "onUpdate:modelValue": _cache[49] || (_cache[49] = ($event) => model.suburb_postcode_region_id = $event),
                                              invalid: unref($v).suburb_postcode_region_id.$invalid,
                                              label: _ctx.$t("address.suburb"),
                                              class: "col-xs-12 col-sm-6",
                                              outlined: true
                                            }, null, 8, ["modelValue", "invalid", "label"]),
                                            createVNode(QInput, {
                                              modelValue: model.postcode,
                                              "onUpdate:modelValue": _cache[50] || (_cache[50] = ($event) => model.postcode = $event),
                                              error: unref($v).postcode.$invalid,
                                              label: _ctx.$t("address.postcode"),
                                              outlined: "",
                                              class: "col-xs-12 col-sm-6"
                                            }, null, 8, ["modelValue", "error", "label"]),
                                            createVNode(_sfc_main$8, {
                                              modelValue: model.country_id,
                                              "onUpdate:modelValue": _cache[51] || (_cache[51] = ($event) => model.country_id = $event),
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
                              createBaseVNode("div", _hoisted_66, [
                                createVNode(QBtn, {
                                  onClick: _cache[52] || (_cache[52] = ($event) => stepMove(4)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[53] || (_cache[53] = ($event) => stepMove(6)),
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
                              !success.value && !error.value && !confirming.value ? (openBlock(), createElementBlock("p", _hoisted_67, "Confirm your booking:")) : createCommentVNode("", true),
                              createVNode(QCard, null, {
                                default: withCtx(() => [
                                  !success.value && !error.value && !confirming.value ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                                    default: withCtx(() => {
                                      var _a2, _b;
                                      return [
                                        _hoisted_68,
                                        createBaseVNode("div", null, toDisplayString(model.team.email), 1),
                                        createBaseVNode("div", _hoisted_69, toDisplayString(model.team.mobile), 1),
                                        categories.value && model.suburb_postcode_region_id ? (openBlock(), createBlock(_sfc_main$1, {
                                          key: 0,
                                          suburb_postcode_region_id: model.suburb_postcode_region_id,
                                          contractor_user_id: model.contractor_user_id,
                                          scheduled_pickup_date: model.scheduled_pickup_date,
                                          scheduled_pickup_time: model.scheduled_pickup_time,
                                          productcategories: model.productcategories,
                                          categories: categories.value
                                        }, null, 8, ["suburb_postcode_region_id", "contractor_user_id", "scheduled_pickup_date", "scheduled_pickup_time", "productcategories", "categories"])) : createCommentVNode("", true),
                                        createBaseVNode("div", _hoisted_70, [
                                          _hoisted_71,
                                          createVNode(QRadio, {
                                            modelValue: model.recurring_order,
                                            "onUpdate:modelValue": _cache[54] || (_cache[54] = ($event) => model.recurring_order = $event),
                                            val: true,
                                            label: "Yes"
                                          }, null, 8, ["modelValue"]),
                                          createVNode(QRadio, {
                                            modelValue: model.recurring_order,
                                            "onUpdate:modelValue": _cache[55] || (_cache[55] = ($event) => model.recurring_order = $event),
                                            val: false,
                                            label: "No",
                                            class: "q-ml-sm"
                                          }, null, 8, ["modelValue"]),
                                          model.recurring_order ? (openBlock(), createElementBlock("div", _hoisted_72, [
                                            createBaseVNode("div", _hoisted_73, [
                                              createBaseVNode("div", _hoisted_74, [
                                                createVNode(QSelect, {
                                                  modelValue: model.recurring,
                                                  "onUpdate:modelValue": [
                                                    _cache[56] || (_cache[56] = ($event) => model.recurring = $event),
                                                    _cache[57] || (_cache[57] = ($event) => model.recurring_end = "")
                                                  ],
                                                  label: "Frequency",
                                                  options: ["Weekly", "Fortnightly", "Other"],
                                                  "bottom-slots": "",
                                                  error: unref($v).recurring.$invalid,
                                                  outlined: ""
                                                }, null, 8, ["modelValue", "error"])
                                              ])
                                            ]),
                                            model.recurring === "Other" ? (openBlock(), createBlock(QInput, {
                                              key: 0,
                                              modelValue: model.recurring_notes,
                                              "onUpdate:modelValue": _cache[58] || (_cache[58] = ($event) => model.recurring_notes = $event),
                                              label: "Please enter any notes about the recurring booking",
                                              error: unref($v).recurring_notes.$invalid,
                                              type: "textarea",
                                              rows: "3",
                                              outlined: ""
                                            }, null, 8, ["modelValue", "error"])) : createCommentVNode("", true)
                                          ])) : createCommentVNode("", true)
                                        ]),
                                        createVNode(QInput, {
                                          modelValue: model.special_instructions,
                                          "onUpdate:modelValue": _cache[59] || (_cache[59] = ($event) => model.special_instructions = $event),
                                          class: "q-mt-lg",
                                          type: "textarea",
                                          label: "Please enter any special instructions for this booking",
                                          outlined: "",
                                          rows: "3"
                                        }, null, 8, ["modelValue"]),
                                        createBaseVNode("div", _hoisted_75, [
                                          createVNode(QToggle, {
                                            modelValue: model.team.marketing_subscribed,
                                            "onUpdate:modelValue": _cache[60] || (_cache[60] = ($event) => model.team.marketing_subscribed = $event),
                                            label: "I want to receive emails with the latest news and updates from The Laundry Lady"
                                          }, null, 8, ["modelValue"])
                                        ]),
                                        createBaseVNode("div", null, [
                                          createBaseVNode("div", _hoisted_76, [
                                            createTextVNode("No cancellations or changes allowed within 3 hours of the appointment. Charges will be applied if clothes are not ready at pickup. By booking this appointment you agree to our Terms and Conditions which can be found online here: "),
                                            ((_a2 = unref(common)) == null ? void 0 : _a2.operating_country) === "nzd" ? (openBlock(), createElementBlock("a", _hoisted_77, "https://thelaundrylady.co.nz/terms-and-conditions/")) : createCommentVNode("", true),
                                            ((_b = unref(common)) == null ? void 0 : _b.operating_country) === "aud" ? (openBlock(), createElementBlock("a", _hoisted_78, "https://thelaundrylady.com.au/terms-and-conditions/")) : createCommentVNode("", true)
                                          ]),
                                          createBaseVNode("div", null, [
                                            createVNode(QToggle, {
                                              modelValue: model.cancellation_terms,
                                              "onUpdate:modelValue": _cache[61] || (_cache[61] = ($event) => model.cancellation_terms = $event),
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
                                      _hoisted_79,
                                      (openBlock(true), createElementBlock(Fragment, null, renderList(errors.value, (e, index) => {
                                        return openBlock(), createElementBlock("div", { key: index }, [
                                          createBaseVNode("div", _hoisted_80, toDisplayString(e.message), 1)
                                        ]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  success.value ? (openBlock(), createBlock(QCardSection, { key: 2 }, {
                                    default: withCtx(() => {
                                      var _a2, _b;
                                      return [
                                        createBaseVNode("div", _hoisted_81, [
                                          createVNode(QIcon, {
                                            name: "o_check_circle",
                                            size: "64px",
                                            color: "green"
                                          })
                                        ]),
                                        _hoisted_82,
                                        _hoisted_83,
                                        createBaseVNode("p", null, [
                                          createTextVNode("An email with all of the details is on its way. While you wait, check out our FAQs page for all the details to get ready for your service. "),
                                          ((_a2 = unref(common)) == null ? void 0 : _a2.operating_country) === "nzd" ? (openBlock(), createElementBlock("a", {
                                            key: 0,
                                            href: preparingForPickupUrl.value || "https://thelaundrylady.co.nz/faqs/",
                                            target: "_blank",
                                            class: "link"
                                          }, toDisplayString(preparingForPickupUrl.value || "https://thelaundrylady.co.nz/faqs/"), 9, _hoisted_84)) : createCommentVNode("", true),
                                          ((_b = unref(common)) == null ? void 0 : _b.operating_country) === "aud" ? (openBlock(), createElementBlock("a", {
                                            key: 1,
                                            href: preparingForPickupUrl.value || "https://thelaundrylady.com.au/faqs/",
                                            target: "_blank",
                                            class: "link"
                                          }, toDisplayString(preparingForPickupUrl.value || "https://thelaundrylady.com.au/faqs/"), 9, _hoisted_85)) : createCommentVNode("", true)
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
                              !success.value && !confirming.value ? (openBlock(), createElementBlock("div", _hoisted_86, [
                                createVNode(QBtn, {
                                  onClick: _cache[62] || (_cache[62] = ($event) => stepMove(5)),
                                  color: "primary",
                                  label: "Previous",
                                  flat: "",
                                  class: "q-mr-sm",
                                  rounded: ""
                                }),
                                createVNode(QBtn, {
                                  onClick: _cache[63] || (_cache[63] = ($event) => save()),
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
              }, 8, ["padding", "class"])) : createCommentVNode("", true),
              !iframed.value && loaded.value ? (openBlock(), createElementBlock("div", _hoisted_87, [
                createVNode(_sfc_main$9, {
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
