import { Q as QSpace } from "./QSpace.5c4a9358.js";
import { C as defineComponent, ak as useRoute, r as ref, D as reactive, g as computed, o as onMounted, m as openBlock, aa as createBlock, K as withCtx, z as createCommentVNode, l as createVNode, t as normalizeClass, R as unref, q as createBaseVNode, Q as QCard, L as QCardSection, N as QIcon, M as QInput, bl as QCheckbox, bx as QRadio, ae as QCardActions, P as QBtn } from "./index.e66b6337.js";
import { Q as QSelect } from "./QSelect.dbf7a13c.js";
import { Q as QPage } from "./QPage.da201c94.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.ec68c100.js";
import { _ as _imports_0 } from "./ndis_heart.0820b9e2.js";
import { u as useVuelidate, r as required, e as email, a as requiredIf } from "./index.esm.f3182d87.js";
import { u as useQuasar } from "./use-quasar.817c891b.js";
import { m as moment, a as api } from "./axios.99b150d2.js";
import { _ as _sfc_main$2 } from "./AppLogo.31f34910.js";
import { _ as _sfc_main$1, a as _sfc_main$7 } from "./HeaderComponent.6117af2c.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6 } from "./PostcodeRegionField.fd88766d.js";
import { _ as _sfc_main$3 } from "./DateField.7ae5f69b.js";
import { u as useMixinCommon } from "./common.7e76c472.js";
import { c as confirmDelete } from "./help.4ea95189.js";
import "./QItemSection.834a99e7.js";
import "./QItemLabel.f058a8a6.js";
import "./QMenu.b5d9bdae.js";
import "./selection.6fc9af93.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QResizeObserver.3d5b91cb.js";
import "./QList.a1a1fcc3.js";
import "./debug.b9d7424b.js";
import "./QDate.9ffd5ec2.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.3fb951b9.js";
import "./QPopupProxy.081128e6.js";
import "./common.89a9f610.js";
const _hoisted_1 = { class: "flex justify-center q-mt-xl" };
const _hoisted_2 = { style: { "min-width": "350px", "max-width": "700px" } };
const _hoisted_3 = { class: "flex q-mb-md no-wrap" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  style: { "max-height": "100px" }
}, null, -1);
const _hoisted_5 = { class: "text-center q-mb-md" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5 text-center q-mb-sm" }, "Details Submitted", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", null, "You have submitted your NDIS details to The Laundry Lady.", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, "We'll be in contact with further steps if required.", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("p", null, "You may safely close this window.", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, "Please ensure all details are accurate and up to date:", -1);
const _hoisted_11 = { class: "row q-col-gutter-md" };
const _hoisted_12 = { class: "col-xs-12 col-sm-6" };
const _hoisted_13 = { class: "col-xs-12 col-sm-6" };
const _hoisted_14 = { class: "row q-col-gutter-md" };
const _hoisted_15 = { class: "col-xs-12 col-sm-6" };
const _hoisted_16 = { class: "col-xs-12 col-sm-6" };
const _hoisted_17 = { class: "col-xs-12 col-sm-6" };
const _hoisted_18 = { class: "row q-col-gutter-md" };
const _hoisted_19 = { class: "col-xs-12 col-sm-6" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  style: { "height": "32px" }
}, null, -1);
const _hoisted_21 = { class: "col-xs-12 col-sm-6" };
const _hoisted_22 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_23 = { class: "row q-col-gutter-md" };
const _hoisted_24 = { class: "row q-col-gutter-md" };
const _hoisted_25 = { class: "q-mt-lg q-mb-sm" };
const _hoisted_26 = { class: "q-mb-sm" };
const _hoisted_27 = { class: "q-mb-md" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mt-sm" }, "Pickup Address", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("p", null, "Enter your pickup / delivery address.", -1);
const _hoisted_30 = { class: "row q-col-gutter-md" };
const _hoisted_31 = { class: "q-mt-xl" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamNDISUpdate",
  setup(__props) {
    const route = useRoute();
    const success = ref(false);
    const error = ref(false);
    const loading = ref(false);
    const errors = ref([]);
    const common = useMixinCommon();
    const loaded = ref(false);
    const schema = {
      id: null,
      name: null,
      first_name: null,
      last_name: null,
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
      ndis_dob: null
    };
    const model = reactive(JSON.parse(JSON.stringify(schema)));
    const rules = {
      name: { required },
      first_name: { required },
      last_name: { required },
      email: { required, email },
      address2: { required },
      suburb_postcode_region_id: { required },
      postcode: { required },
      country_id: { required },
      mobile: { requiredIf: requiredIf(() => !model.other_phone) },
      other_phone: { requiredIf: requiredIf(() => !model.mobile) },
      ndis_number: { required },
      ndis_type: { required },
      ndis_dob: { required },
      ndis_plan_start: { required },
      ndis_plan_end: { required },
      ndis_plan_manager_email: { email },
      ndis_support_coordinator_email: { email },
      ndis_line_item: { checked: (value) => value === true },
      ndis_funds: { checked: (value) => value === true },
      ndis_funds_inform: { checked: (value) => value === true }
    };
    const $v = useVuelidate(rules, model);
    const $q = useQuasar();
    const save = () => {
      confirmDelete("This will submit the details to The Laundry Lady").onOk(() => {
        loading.value = true;
        success.value = false;
        error.value = false;
        api.put(`/public/team/ndis/update/${route.params.token}`, model).then(() => {
          success.value = true;
          loading.value = false;
          $q.loading.hide();
        }).catch((responseError) => {
          error.value = true;
          loading.value = false;
          errors.value = responseError.response && responseError.response.data ? responseError.response.data.errors : [{ field: "Unknown Error", message: "Unknown error occured." }];
        });
      });
    };
    const ndisPlanEndDateValid = computed(() => {
      if (!model.ndis_plan_start) {
        return true;
      }
      if (!model.ndis_plan_end) {
        return false;
      }
      const start = moment(model.ndis_plan_start, "DD/MM/YYYY");
      const end = moment(model.ndis_plan_end, "DD/MM/YYYY");
      if (end.isBefore(moment()) || end.isBefore(start)) {
        return false;
      }
      return true;
    });
    onMounted(async () => {
      error.value = false;
      api.get(`/public/team/ndis/update/${route.params.token}`).then((response) => {
        Object.assign(model, response.data);
        loaded.value = true;
      }).catch(() => {
        loaded.value = true;
        error.value = true;
      });
    });
    return (_ctx, _cache) => {
      return loaded.value ? (openBlock(), createBlock(QLayout, {
        key: 0,
        view: "lHh Lpr lFf"
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                padding: "",
                class: normalizeClass({ "q-pa-md": unref($q).screen.xs })
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("div", _hoisted_2, [
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(_sfc_main$2),
                        createVNode(QSpace),
                        _hoisted_4
                      ]),
                      createVNode(QCard, null, {
                        default: withCtx(() => [
                          success.value ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_5, [
                                createVNode(QIcon, {
                                  name: "o_check_circle",
                                  size: "64px",
                                  color: "green"
                                })
                              ]),
                              _hoisted_6,
                              _hoisted_7,
                              _hoisted_8,
                              _hoisted_9
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          !error.value && !success.value ? (openBlock(), createBlock(QCardSection, { key: 1 }, {
                            default: withCtx(() => {
                              var _a, _b;
                              return [
                                _hoisted_10,
                                createVNode(QInput, {
                                  modelValue: model.name,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.name = $event),
                                  error: unref($v).name.$invalid,
                                  label: "Participant name",
                                  outlined: ""
                                }, null, 8, ["modelValue", "error"]),
                                createBaseVNode("div", _hoisted_11, [
                                  createBaseVNode("div", _hoisted_12, [
                                    createVNode(QInput, {
                                      modelValue: model.first_name,
                                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.first_name = $event),
                                      error: unref($v).first_name.$invalid,
                                      label: "Contact first name",
                                      outlined: ""
                                    }, null, 8, ["modelValue", "error"])
                                  ]),
                                  createBaseVNode("div", _hoisted_13, [
                                    createVNode(QInput, {
                                      modelValue: model.last_name,
                                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.last_name = $event),
                                      error: unref($v).last_name.$invalid,
                                      label: "Contact last name",
                                      outlined: ""
                                    }, null, 8, ["modelValue", "error"])
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_14, [
                                  createBaseVNode("div", _hoisted_15, [
                                    createVNode(QInput, {
                                      modelValue: model.email,
                                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.email = $event),
                                      error: unref($v).email.$invalid,
                                      label: "Your email address",
                                      outlined: "",
                                      autocapitalize: "off",
                                      disable: ""
                                    }, null, 8, ["modelValue", "error"])
                                  ]),
                                  createBaseVNode("div", _hoisted_16, [
                                    createVNode(QInput, {
                                      modelValue: model.mobile,
                                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => model.mobile = $event),
                                      error: unref($v).mobile.$invalid,
                                      label: ((_a = unref(common)) == null ? void 0 : _a.operating_country) === "aud" ? "Your Australian mobile number" : "Your contact mobile",
                                      outlined: "",
                                      mask: ((_b = unref(common)) == null ? void 0 : _b.operating_country) === "aud" ? "#### ### ###" : "",
                                      maxlength: "20",
                                      "error-message": "Use the alternate contact number field if you do not have an Australian mobile number",
                                      hint: "Use the alternate contact number field if you do not have an Australian mobile number"
                                    }, null, 8, ["modelValue", "error", "label", "mask"])
                                  ]),
                                  createBaseVNode("div", _hoisted_17, [
                                    createVNode(QInput, {
                                      modelValue: model.other_phone,
                                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.other_phone = $event),
                                      error: unref($v).other_phone.$invalid,
                                      label: "Alternate contact number",
                                      outlined: ""
                                    }, null, 8, ["modelValue", "error"])
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_18, [
                                  createBaseVNode("div", _hoisted_19, [
                                    createVNode(QInput, {
                                      modelValue: model.ndis_number,
                                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.ndis_number = $event),
                                      label: _ctx.$t("team.ndisNumber"),
                                      outlined: "",
                                      error: unref($v).ndis_number.$invalid
                                    }, {
                                      prepend: withCtx(() => [
                                        _hoisted_20
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "label", "error"])
                                  ]),
                                  createBaseVNode("div", _hoisted_21, [
                                    createVNode(QSelect, {
                                      modelValue: model.ndis_type,
                                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.ndis_type = $event),
                                      label: _ctx.$t("team.ndisType"),
                                      error: unref($v).ndis_type.$invalid,
                                      outlined: "",
                                      options: ["Self managed", "Plan managed", "NDIA registered"]
                                    }, null, 8, ["modelValue", "label", "error"])
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_22, [
                                  createVNode(_sfc_main$3, {
                                    modelValue: model.ndis_dob,
                                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.ndis_dob = $event),
                                    label: _ctx.$t("team.ndisDob"),
                                    outlined: true,
                                    class: "col-xs-12 col-sm-6",
                                    invalid: unref($v).ndis_dob.$invalid
                                  }, null, 8, ["modelValue", "label", "invalid"])
                                ]),
                                createBaseVNode("div", _hoisted_23, [
                                  createVNode(QInput, {
                                    modelValue: model.ndis_plan_manager_email,
                                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.ndis_plan_manager_email = $event),
                                    label: _ctx.$t("team.ndisPlanManagerEmail"),
                                    "bottom-slots": "",
                                    class: "col-xs-12 col-sm-6",
                                    outlined: "",
                                    error: unref($v).ndis_plan_manager_email.$invalid
                                  }, null, 8, ["modelValue", "label", "error"]),
                                  createVNode(QInput, {
                                    modelValue: model.ndis_support_coordinator_email,
                                    "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => model.ndis_support_coordinator_email = $event),
                                    label: _ctx.$t("team.ndisSupportCoordinatorEmail"),
                                    class: "col-xs-12 col-sm-6",
                                    "bottom-slots": "",
                                    outlined: "",
                                    error: unref($v).ndis_support_coordinator_email.$invalid
                                  }, null, 8, ["modelValue", "label", "error"])
                                ]),
                                createBaseVNode("div", _hoisted_24, [
                                  createVNode(_sfc_main$3, {
                                    modelValue: model.ndis_plan_start,
                                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => model.ndis_plan_start = $event),
                                    label: _ctx.$t("team.ndisPlanStart"),
                                    outlined: true,
                                    class: "col-xs-12 col-sm-6",
                                    invalid: unref($v).ndis_plan_start.$invalid
                                  }, null, 8, ["modelValue", "label", "invalid"]),
                                  createVNode(_sfc_main$3, {
                                    modelValue: model.ndis_plan_end,
                                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => model.ndis_plan_end = $event),
                                    label: _ctx.$t("team.ndisPlanEnd"),
                                    outlined: true,
                                    class: "col-xs-12 col-sm-6",
                                    invalid: unref($v).ndis_plan_end.$invalid || !unref(ndisPlanEndDateValid),
                                    fdc: true
                                  }, null, 8, ["modelValue", "label", "invalid"])
                                ]),
                                createBaseVNode("div", _hoisted_25, [
                                  createVNode(QCheckbox, {
                                    modelValue: model.ndis_line_item,
                                    "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => model.ndis_line_item = $event),
                                    label: "Yes I (the client) have item number 01_021_0120_1_1 \u2013 Linen Service stated in my current NDIS plan.",
                                    color: unref($v).ndis_line_item.$invalid ? "negative" : "primary",
                                    "keep-color": ""
                                  }, null, 8, ["modelValue", "color"])
                                ]),
                                createBaseVNode("div", _hoisted_26, [
                                  createVNode(QCheckbox, {
                                    modelValue: model.ndis_funds,
                                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => model.ndis_funds = $event),
                                    label: "Yes I (the client) have sufficient funds available under the Linen code to pay for my services and I agree to inform Laundry Lady if funds run out.",
                                    color: unref($v).ndis_funds.$invalid ? "negative" : "primary",
                                    "keep-color": ""
                                  }, null, 8, ["modelValue", "color"])
                                ]),
                                createBaseVNode("div", _hoisted_27, [
                                  createVNode(QCheckbox, {
                                    modelValue: model.ndis_funds_inform,
                                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => model.ndis_funds_inform = $event),
                                    label: "Yes I (the client) agree to inform Laundry Lady if there are any changes to my plan that will affect claiming under this code.",
                                    color: unref($v).ndis_funds_inform.$invalid ? "negative" : "primary",
                                    "keep-color": ""
                                  }, null, 8, ["modelValue", "color"])
                                ]),
                                createVNode(QRadio, {
                                  modelValue: model.ndis_payment,
                                  "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => model.ndis_payment = $event),
                                  val: "self",
                                  label: "I (the client) will pay for services myself and will be responsible for claiming under the NDIS (self-managed)."
                                }, null, 8, ["modelValue"]),
                                createVNode(QRadio, {
                                  modelValue: model.ndis_payment,
                                  "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => model.ndis_payment = $event),
                                  val: "plan",
                                  label: "The invoice should be sent to my plan manager for payment."
                                }, null, 8, ["modelValue"]),
                                _hoisted_28,
                                _hoisted_29,
                                createVNode(_sfc_main$4, {
                                  model,
                                  filled: true,
                                  addressfields: { address1: "address1", address2: "address2", suburb_postcode_region_id: "suburb_postcode_region_id", lat: "lat", lng: "lng", country_id: "country_id", postcode: "postcode" },
                                  placeholder: _ctx.$t("address.search")
                                }, null, 8, ["model", "placeholder"]),
                                createVNode(QInput, {
                                  modelValue: model.address1,
                                  "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => model.address1 = $event),
                                  label: _ctx.$t("address.line1"),
                                  outlined: "",
                                  class: "q-mb-md"
                                }, null, 8, ["modelValue", "label"]),
                                createVNode(QInput, {
                                  modelValue: model.address2,
                                  "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => model.address2 = $event),
                                  error: unref($v).address2.$invalid,
                                  label: _ctx.$t("address.line2"),
                                  outlined: ""
                                }, null, 8, ["modelValue", "error", "label"]),
                                createBaseVNode("div", _hoisted_30, [
                                  createVNode(_sfc_main$5, {
                                    modelValue: model.suburb_postcode_region_id,
                                    "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => model.suburb_postcode_region_id = $event),
                                    invalid: unref($v).suburb_postcode_region_id.$invalid,
                                    label: _ctx.$t("address.suburb"),
                                    class: "col-xs-12 col-sm-6",
                                    outlined: true
                                  }, null, 8, ["modelValue", "invalid", "label"]),
                                  createVNode(QInput, {
                                    modelValue: model.postcode,
                                    "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => model.postcode = $event),
                                    error: unref($v).postcode.$invalid,
                                    label: _ctx.$t("address.postcode"),
                                    outlined: "",
                                    class: "col-xs-12 col-sm-6"
                                  }, null, 8, ["modelValue", "error", "label"]),
                                  createVNode(_sfc_main$6, {
                                    modelValue: model.country_id,
                                    "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => model.country_id = $event),
                                    label: _ctx.$t("address.country"),
                                    class: "col-xs-12 col-sm-6",
                                    outlined: true,
                                    invalid: unref($v).country_id.$invalid
                                  }, null, 8, ["modelValue", "label", "invalid"])
                                ])
                              ];
                            }),
                            _: 1
                          })) : createCommentVNode("", true),
                          !error.value && !success.value ? (openBlock(), createBlock(QCardActions, {
                            key: 2,
                            align: "right"
                          }, {
                            default: withCtx(() => [
                              createVNode(QBtn, {
                                onClick: _cache[23] || (_cache[23] = ($event) => save()),
                                color: "primary",
                                label: "Submit",
                                rounded: "",
                                disable: unref($v).$invalid || loading.value || !unref(ndisPlanEndDateValid),
                                loading: loading.value
                              }, null, 8, ["disable", "loading"])
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
              }, 8, ["class"]),
              createBaseVNode("div", _hoisted_31, [
                createVNode(_sfc_main$7, {
                  booking: true,
                  apply: true
                })
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
