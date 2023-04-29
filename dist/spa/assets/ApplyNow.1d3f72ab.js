import { A as defineComponent, r as ref, B as reactive, m as openBlock, K as createBlock, L as withCtx, l as createVNode, Q as QCard, M as QCardSection, R as createTextVNode, y as createCommentVNode, q as createBaseVNode, N as QInput, U as unref, af as QToggle, S as QBtn } from "./index.3eea7960.js";
import { Q as QSelect } from "./QSelect.1c9fa3ed.js";
import { Q as QPage } from "./QPage.ade328d2.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.0974a862.js";
import { u as useVuelidate, r as required, e as email } from "./index.esm.3393c8fb.js";
import { a as api } from "./axios.a37557cf.js";
import { _ as _sfc_main$1 } from "./AppLogo.d194a44e.js";
import { _ as _sfc_main$2 } from "./AddressSearch.34052390.js";
import { _ as _sfc_main$4 } from "./DateField.52929768.js";
import { _ as _sfc_main$3 } from "./PostcodeRegionField.7bc5ceee.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import "./QItemSection.621084f7.js";
import "./rtl.583477fb.js";
import "./format.aadc6b26.js";
import "./QResizeObserver.972c3e33.js";
import "./ClosePopup.da21502b.js";
import "./use-quasar.4fc54c30.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Join the team", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Fill out the form below and we'll send you an info pack all about joining the team.", -1);
const _hoisted_4 = { class: "row q-col-gutter-md" };
const _hoisted_5 = { class: "row q-col-gutter-md" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Address Details", -1);
const _hoisted_7 = { class: "row q-col-gutter-md" };
const _hoisted_8 = { class: "bg-grey-1 q-pa-sm q-mt-md" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Confirm your eligibility requirements:", -1);
const _hoisted_10 = { class: "row q-col-gutter-md q-mt-xs q-mb-md" };
const _hoisted_11 = { class: "col-xs-12 col-sm-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ApplyNow",
  setup(__props) {
    const loading = ref(false);
    const success = ref(false);
    const emailError = ref({ error: false, msg: "" });
    const model = reactive({
      first_name: null,
      last_name: null,
      dateofbirth: null,
      email: null,
      mobile: null,
      address1: null,
      address2: null,
      suburb_postcode_region_id: null,
      contractor_abn: null,
      contractor_car_licence: false,
      contractor_equipment: false,
      contractor_why_join: null,
      contractor_referral_type: null
    });
    const rules = {
      first_name: { required },
      last_name: { required },
      dateofbirth: { required },
      email: { required, email },
      mobile: { required },
      address2: { required },
      suburb_postcode_region_id: { required },
      contractor_why_join: { required },
      contractor_referral_type: { required }
    };
    const $v = useVuelidate(rules, model);
    const applyNow = () => {
      loading.value = true;
      success.value = false;
      api.post("/auth/contractor/applynow", model).then(() => {
        success.value = true;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const checkEmail = () => {
      emailError.value = { error: false, msg: "" };
      if (model.email) {
        api.post("/user/checkemail/0", { email: model.email }).then((response) => {
          if (parseFloat(response.data.found[0].count) > 0) {
            emailError.value.error = true;
            emailError.value.msg = "That email address is already in use";
            model.email = null;
          }
        }).catch((error) => {
          useMixinDebug(error);
        });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                class: "row justify-center items-center animated fadeIn",
                padding: ""
              }, {
                default: withCtx(() => [
                  createVNode(QCard, { class: "col-xs-12 col-sm-9 col-md-5 col-lg-4 text-center" }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1)
                        ]),
                        _: 1
                      }),
                      success.value ? (openBlock(), createBlock(QCardSection, {
                        key: 0,
                        class: "text-left"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Thanks for your interest in joining The Laundry Lady."),
                          _hoisted_1,
                          createTextVNode("Please check your email for the next steps. ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      !success.value ? (openBlock(), createBlock(QCardSection, {
                        key: 1,
                        class: "text-left"
                      }, {
                        default: withCtx(() => [
                          _hoisted_2,
                          _hoisted_3,
                          createBaseVNode("div", _hoisted_4, [
                            createVNode(QInput, {
                              modelValue: model.first_name,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.first_name = $event),
                              label: "First Name",
                              error: unref($v).first_name.$invalid,
                              class: "col-xs-12 col-sm-6"
                            }, null, 8, ["modelValue", "error"]),
                            createVNode(QInput, {
                              modelValue: model.last_name,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.last_name = $event),
                              label: "Last Name",
                              error: unref($v).last_name.$invalid,
                              class: "col-xs-12 col-sm-6"
                            }, null, 8, ["modelValue", "error"])
                          ]),
                          createBaseVNode("div", _hoisted_5, [
                            createVNode(QInput, {
                              modelValue: model.email,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.email = $event),
                              label: "Email",
                              error: unref($v).email.$invalid || emailError.value.error,
                              onBlur: _cache[3] || (_cache[3] = ($event) => checkEmail()),
                              "error-message": emailError.value.msg || "",
                              hint: emailError.value.msg || "",
                              class: "col-xs-12 col-sm-6"
                            }, null, 8, ["modelValue", "error", "error-message", "hint"]),
                            createVNode(QInput, {
                              modelValue: model.mobile,
                              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => model.mobile = $event),
                              label: "Mobile Phone",
                              error: unref($v).mobile.$invalid,
                              mask: "#### ### ###",
                              "unmasked-value": "",
                              class: "col-xs-12 col-sm-6"
                            }, null, 8, ["modelValue", "error"])
                          ]),
                          _hoisted_6,
                          createVNode(_sfc_main$2, {
                            model,
                            outlined: true,
                            addressfields: { address1: "address1", address2: "address2", suburb_postcode_region_id: "suburb_postcode_region_id", lat: "lat", lng: "lng", country_id: "country_id" },
                            placeholder: _ctx.$t("address.search")
                          }, null, 8, ["model", "placeholder"]),
                          createBaseVNode("div", _hoisted_7, [
                            createVNode(QInput, {
                              modelValue: model.address1,
                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.address1 = $event),
                              label: _ctx.$t("address.line1"),
                              "bottom-slots": "",
                              class: "col-xs-12 col-sm-6"
                            }, null, 8, ["modelValue", "label"]),
                            createVNode(QInput, {
                              modelValue: model.address2,
                              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.address2 = $event),
                              error: unref($v).address2.$invalid,
                              label: _ctx.$t("address.line2"),
                              class: "col-xs-12 col-sm-6"
                            }, null, 8, ["modelValue", "error", "label"])
                          ]),
                          createVNode(_sfc_main$3, {
                            modelValue: model.suburb_postcode_region_id,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.suburb_postcode_region_id = $event),
                            label: "Suburb",
                            invalid: unref($v).suburb_postcode_region_id.$invalid
                          }, null, 8, ["modelValue", "invalid"]),
                          createBaseVNode("div", _hoisted_8, [
                            _hoisted_9,
                            createVNode(QToggle, {
                              modelValue: model.contractor_car_licence,
                              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.contractor_car_licence = $event),
                              label: "Reliable car and current drivers licence"
                            }, null, 8, ["modelValue"]),
                            createVNode(QToggle, {
                              modelValue: model.contractor_equipment,
                              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.contractor_equipment = $event),
                              label: "Equipment including steam station iron, washing machine, dryer, or willing to purchase these?"
                            }, null, 8, ["modelValue"]),
                            createBaseVNode("div", _hoisted_10, [
                              createBaseVNode("div", _hoisted_11, [
                                createVNode(_sfc_main$4, {
                                  modelValue: model.dateofbirth,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => model.dateofbirth = $event),
                                  label: _ctx.$t("contractor.dateofbirth"),
                                  invalid: unref($v).dateofbirth.$invalid
                                }, null, 8, ["modelValue", "label", "invalid"])
                              ])
                            ])
                          ]),
                          createVNode(QInput, {
                            modelValue: model.contractor_why_join,
                            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => model.contractor_why_join = $event),
                            label: "Why do you want to join our team?",
                            class: "q-mt-lg",
                            error: unref($v).contractor_why_join.$invalid,
                            type: "textarea",
                            rows: "3",
                            outlined: ""
                          }, null, 8, ["modelValue", "error"]),
                          createVNode(QSelect, {
                            modelValue: model.contractor_referral_type,
                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => model.contractor_referral_type = $event),
                            label: "How did you find out about us?",
                            options: ["Instagram", "Facebook", "Google", "Gumtree", "Working Parents Connect", "Seek", "Melbourne Mums", "Word of Mouth", "Radio", "Newspaper/Magazine", "Event", "Other"],
                            error: unref($v).contractor_referral_type.$invalid
                          }, null, 8, ["modelValue", "error"]),
                          createVNode(QBtn, {
                            loading: loading.value,
                            onClick: _cache[13] || (_cache[13] = ($event) => applyNow()),
                            disabled: unref($v).$invalid || !model.contractor_car_licence || !model.contractor_equipment,
                            color: "primary",
                            label: "Apply Now",
                            class: "full-width q-mt-md"
                          }, null, 8, ["loading", "disabled"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
