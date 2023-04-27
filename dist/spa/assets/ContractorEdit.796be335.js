import { A as defineComponent, g as computed, r as ref, i as inject, m as openBlock, n as createElementBlock, q as createBaseVNode, aF as toDisplayString, l as createVNode, L as withCtx, Q as QCard, F as Fragment, K as createBlock, M as QCardSection, N as QInput, U as unref, O as QIcon, y as createCommentVNode, S as QBtn, af as QToggle, R as createTextVNode, bp as QSeparator, ae as QCardActions } from "./index.f0b4ebe6.js";
import { Q as QSelect } from "./QSelect.4af0b214.js";
import { Q as QUploader } from "./QUploader.3a28d7fb.js";
import { Q as QExpansionItem } from "./QExpansionItem.c2cd31af.js";
import { Q as QList } from "./QList.4c7ed513.js";
import { u as useVuelidate, r as required, e as email } from "./index.esm.40bb50de.js";
import { u as useQuasar } from "./use-quasar.8b72d386.js";
import { a as api } from "./axios.d61905ae.js";
import { _ as _sfc_main$3 } from "./AddressSearch.d41dab00.js";
import { _ as _sfc_main$5 } from "./CountryField.5f18aaab.js";
import { _ as _sfc_main$1 } from "./DateField.8ada521a.js";
import { _ as _sfc_main$4 } from "./PostcodeRegionField.316140ae.js";
import { _ as _sfc_main$2 } from "./UserAvatar.cff2b3e8.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { v as getTimeZones, u as uploadConfig, w as valOrNs, b as doNotify } from "./help.cd1e743b.js";
import "./QItemSection.9ea19b97.js";
import "./rtl.7f1de635.js";
import "./format.8242738c.js";
import "./QCircularProgress.e91ce288.js";
import "./ClosePopup.b9029680.js";
const _hoisted_1 = { class: "text-h5" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "Certain details can be modified by the contractor in addition to the staff.", -1);
const _hoisted_3 = { class: "row q-col-gutter-md" };
const _hoisted_4 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_5 = { class: "row q-col-gutter-md" };
const _hoisted_6 = { class: "row q-col-gutter-md" };
const _hoisted_7 = { class: "col-xs-12 col-sm-6" };
const _hoisted_8 = {
  key: 0,
  class: "q-mb-md"
};
const _hoisted_9 = {
  key: 0,
  class: "text-negative"
};
const _hoisted_10 = {
  key: 1,
  class: "text-positive"
};
const _hoisted_11 = { class: "q-mr-sm" };
const _hoisted_12 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_13 = { class: "row q-col-gutter-md" };
const _hoisted_14 = { class: "col-xs-12 col-sm-6" };
const _hoisted_15 = { class: "col-xs-12 col-sm-6" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mt-md" }, "Current Avatar", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", null, "This is also visible to the customers.", -1);
const _hoisted_18 = { class: "row q-col-gutter-md" };
const _hoisted_19 = { class: "col-xs-12 col-sm-3 text-center" };
const _hoisted_20 = { class: "col-xs-12 col-sm-9" };
const _hoisted_21 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_22 = { class: "col-xs-12 col-sm-6" };
const _hoisted_23 = { class: "col-xs-12 col-sm-6" };
const _hoisted_24 = { class: "row q-col-gutter-md" };
const _hoisted_25 = { class: "row q-col-gutter-md" };
const _hoisted_26 = { class: "row q-col-gutter-md" };
const _hoisted_27 = { class: "row q-col-gutter-md" };
const _hoisted_28 = { class: "row q-col-gutter-md" };
const _hoisted_29 = { class: "row q-col-gutter-md" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h7" }, "Initial Details", -1);
const _hoisted_31 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_32 = { class: "col-xs-12 col-sm-6" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "Why do you want to join our team?", -1);
const _hoisted_34 = { class: "col-xs-12 col-sm-6" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "Tell us about any relevant experience", -1);
const _hoisted_36 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_37 = { class: "col-xs-12 col-sm-6" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "What is your current work situation?", -1);
const _hoisted_39 = { class: "col-xs-12 col-sm-6" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "How many hours of work per week would you like?", -1);
const _hoisted_41 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_42 = { class: "col-xs-12 col-sm-6" };
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "How did you find out about us?", -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h7" }, "Appliances & Car", -1);
const _hoisted_45 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_46 = { class: "col-xs-12 col-sm-6" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "What type of iron do you have?", -1);
const _hoisted_48 = { class: "col-xs-12 col-sm-6" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "What type and size of Washer / Dryer do you have?", -1);
const _hoisted_50 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_51 = { class: "col-xs-12 col-sm-6" };
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "Ironing steam station", -1);
const _hoisted_53 = { class: "col-xs-12 col-sm-6" };
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "Washing Machine and Dryer", -1);
const _hoisted_55 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_56 = { class: "col-xs-12 col-sm-6" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "What type of car do you have?", -1);
const _hoisted_58 = { class: "col-xs-12 col-sm-6" };
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "Car clothing rack", -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h7" }, "Technology", -1);
const _hoisted_61 = { class: "row q-col-gutter-md" };
const _hoisted_62 = { class: "col-xs-12 col-sm-6" };
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "Smartphone", -1);
const _hoisted_64 = { class: "col-xs-12 col-sm-6" };
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("div", { class: "text-grey text-bold" }, "Computer", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorEdit",
  props: {
    model: null
  },
  setup(__props) {
    const props = __props;
    const localModel = computed(() => props.model);
    const loading = ref(false);
    const abnVerified = ref(false);
    const abnVerifyResult = ref();
    const $q = useQuasar();
    const bus = inject("bus");
    const rules = {
      first_name: { required },
      last_name: { required },
      email: { required, email },
      address2: { required },
      suburb_postcode_region_id: { required },
      country_id: { required },
      dateofbirth: { required },
      mobile: { required },
      timezone: { required },
      contractor_status: { required },
      contractor_vaccinated: { required },
      contractor_car_licence: { required },
      contractor_equipment: { required },
      contractor_badge_name: { required },
      contractor_abn: { required },
      contractor_commission_rate: { required },
      contractor_target: { required }
    };
    const $v = useVuelidate(rules, localModel, { $scope: false });
    const save = () => {
      loading.value = true;
      api.put(`/user/${props.model.id}`, localModel.value).then(() => {
        doNotify("positive", "Saved");
        bus.emit("getContractor");
        loading.value = false;
      }).catch((response) => {
        useMixinDebug(response);
        loading.value = false;
      });
    };
    const checkEmail = () => {
      if (props.model.email) {
        api.post(`/user/checkemail/${props.model.id}`, { email: props.model.email }).then((response) => {
          if (response.data.found[0].count > 0) {
            localModel.value.email = null;
            doNotify("negative", "That email address is already in use!");
          }
        }).catch((response) => {
          useMixinDebug(response);
        });
      }
    };
    const successUpload = (file) => {
      localModel.value.avatar = file.xhr.response;
      save();
    };
    const verifyAbn = () => {
      if (!localModel.value.contractor_abn) {
        abnVerified.value = false;
      }
      $q.loading.show({ message: "Verifying ABN with the ATO..." });
      api.post("/verifynest/verifyabn", { keyword: localModel.value.contractor_abn }).then((response) => {
        abnVerified.value = !response.data.data.Message;
        localModel.value.contractor_abn_verified = !response.data.data.Message;
        localModel.value.contractor_gst_registered = !!response.data.data.Gst;
        if (localModel.value.contractor_abn_verified) {
          save();
        }
        abnVerifyResult.value = response.data.data;
        $q.loading.hide();
      }).catch((error) => {
        $q.loading.hide();
        useMixinDebug(error);
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, toDisplayString(_ctx.$t("contractor.name")) + " " + toDisplayString(_ctx.$t("contractor.details")), 1),
        _hoisted_2,
        createVNode(QCard, null, {
          default: withCtx(() => [
            __props.model.id ? (openBlock(), createBlock(QList, { key: 0 }, {
              default: withCtx(() => [
                createVNode(QExpansionItem, {
                  group: "contractor",
                  label: _ctx.$t("contractor.information"),
                  "default-opened": "",
                  "header-class": "text-h6"
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, { class: "q-mb-md" }, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_3, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).first_name,
                                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(localModel).first_name = $event),
                                error: unref($v).first_name.$invalid,
                                label: "First Name",
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "error"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).last_name,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(localModel).last_name = $event),
                                error: unref($v).last_name.$invalid,
                                label: "Last Name",
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "error"])
                            ]),
                            createBaseVNode("div", _hoisted_4, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).first_name_2,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(localModel).first_name_2 = $event),
                                label: "Second Contact First Name",
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).last_name_2,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(localModel).last_name_2 = $event),
                                label: "Second Contact Last Name",
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue"])
                            ]),
                            createBaseVNode("div", _hoisted_5, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).email,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(localModel).email = $event),
                                modelModifiers: { trim: true },
                                onBlur: _cache[5] || (_cache[5] = ($event) => [checkEmail()]),
                                error: unref($v).email.$invalid,
                                label: "Email",
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "error"]),
                              createVNode(_sfc_main$1, {
                                modelValue: unref(localModel).dateofbirth,
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(localModel).dateofbirth = $event),
                                invalid: unref($v).dateofbirth.$invalid,
                                label: _ctx.$t("contractor.dateofbirth"),
                                class: "col-xs-12 col-sm-6",
                                year: 19
                              }, null, 8, ["modelValue", "invalid", "label"])
                            ]),
                            createBaseVNode("div", _hoisted_6, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_badge_name,
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(localModel).contractor_badge_name = $event),
                                label: _ctx.$t("contractor.badgeName"),
                                error: unref($v).contractor_badge_name.$invalid,
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label", "error"]),
                              createBaseVNode("div", _hoisted_7, [
                                createVNode(QInput, {
                                  modelValue: unref(localModel).contractor_abn,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(localModel).contractor_abn = $event),
                                  label: _ctx.$t("contractor.abn"),
                                  error: unref($v).contractor_abn.$invalid
                                }, {
                                  append: withCtx(() => [
                                    unref(localModel).contractor_abn_verified ? (openBlock(), createBlock(QIcon, {
                                      key: 0,
                                      name: "check",
                                      color: "positive"
                                    })) : createCommentVNode("", true),
                                    unref(localModel).contractor_abn ? (openBlock(), createBlock(QBtn, {
                                      key: 1,
                                      onClick: _cache[8] || (_cache[8] = ($event) => verifyAbn()),
                                      label: "Verify",
                                      color: "primary",
                                      flat: ""
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "label", "error"]),
                                abnVerifyResult.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                  abnVerifyResult.value.Message ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(abnVerifyResult.value.Message), 1)) : createCommentVNode("", true),
                                  !abnVerifyResult.value.Message ? (openBlock(), createElementBlock("div", _hoisted_10, [
                                    createBaseVNode("span", _hoisted_11, "ABN Registered to: " + toDisplayString(abnVerifyResult.value.EntityName), 1)
                                  ])) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_12, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).mobile,
                                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(localModel).mobile = $event),
                                label: "Mobile",
                                mask: "#### ### ###",
                                "fill-mask": "",
                                hint: "eg. 0412 123 343",
                                error: unref($v).mobile.$invalid,
                                class: "col-xs-12 col-sm-3"
                              }, null, 8, ["modelValue", "error"]),
                              createVNode(QSelect, {
                                modelValue: unref(localModel).timezone,
                                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(localModel).timezone = $event),
                                label: "Timezone",
                                options: unref(getTimeZones)(),
                                "map-options": "",
                                "emit-value": "",
                                error: unref($v).timezone.$invalid,
                                class: "col-xs-12 col-sm-3"
                              }, null, 8, ["modelValue", "options", "error"]),
                              createVNode(QSelect, {
                                modelValue: unref(localModel).contractor_status,
                                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(localModel).contractor_status = $event),
                                options: [{ label: "Active", value: "active" }, { label: "Paused", value: "paused" }, { label: "Archived", value: "archived" }],
                                label: _ctx.$t("contractor.status"),
                                class: "col-xs-12 col-sm-3",
                                error: unref($v).contractor_status.$invalid,
                                "emit-value": "",
                                "map-options": ""
                              }, null, 8, ["modelValue", "label", "error"]),
                              createVNode(_sfc_main$1, {
                                modelValue: unref(localModel).contractor_start_date,
                                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(localModel).contractor_start_date = $event),
                                label: _ctx.$t("contractor.startDate"),
                                class: "col-xs-12 col-sm-3",
                                year: 19
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            createVNode(QInput, {
                              modelValue: unref(localModel).contractor_description,
                              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(localModel).contractor_description = $event),
                              label: _ctx.$t("contractor.description"),
                              class: "q-mb-md"
                            }, null, 8, ["modelValue", "label"]),
                            createBaseVNode("div", _hoisted_13, [
                              createBaseVNode("div", _hoisted_14, [
                                createBaseVNode("div", null, [
                                  createVNode(QToggle, {
                                    modelValue: unref(localModel).contractor_vaccinated,
                                    "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(localModel).contractor_vaccinated = $event),
                                    label: _ctx.$t("contractor.vaccinated")
                                  }, null, 8, ["modelValue", "label"])
                                ]),
                                createBaseVNode("div", null, [
                                  createVNode(QToggle, {
                                    modelValue: unref(localModel).contractor_equipment,
                                    "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(localModel).contractor_equipment = $event),
                                    label: _ctx.$t("contractor.equipment")
                                  }, null, 8, ["modelValue", "label"])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_15, [
                                createBaseVNode("div", null, [
                                  createVNode(QToggle, {
                                    modelValue: unref(localModel).contractor_car_licence,
                                    "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => unref(localModel).contractor_car_licence = $event),
                                    label: _ctx.$t("contractor.carLicence")
                                  }, null, 8, ["modelValue", "label"])
                                ]),
                                createBaseVNode("div", null, [
                                  createVNode(QToggle, {
                                    modelValue: unref(localModel).enabled,
                                    "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => unref(localModel).enabled = $event),
                                    label: _ctx.$t("contractor.enabled")
                                  }, null, 8, ["modelValue", "label"])
                                ])
                              ])
                            ]),
                            _hoisted_16,
                            _hoisted_17,
                            createBaseVNode("div", _hoisted_18, [
                              createBaseVNode("div", _hoisted_19, [
                                createVNode(_sfc_main$2, {
                                  user: unref(localModel),
                                  size: "92px"
                                }, null, 8, ["user"])
                              ]),
                              createBaseVNode("div", _hoisted_20, [
                                !loading.value ? (openBlock(), createBlock(QUploader, {
                                  key: 0,
                                  color: "grey-7",
                                  url: unref(uploadConfig).url,
                                  headers: unref(uploadConfig).headers,
                                  onUploaded: successUpload,
                                  label: "Upload image",
                                  "auto-expand": "",
                                  "auto-upload": "",
                                  accept: unref(uploadConfig).images,
                                  "field-name": unref(uploadConfig).fieldName,
                                  ref: "avatarUploader"
                                }, null, 8, ["url", "headers", "accept", "field-name"])) : createCommentVNode("", true)
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(QExpansionItem, {
                  group: "contractor",
                  label: _ctx.$t("contractor.financials"),
                  "header-class": "text-h6"
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_21, [
                              createBaseVNode("div", _hoisted_22, [
                                createVNode(QToggle, {
                                  modelValue: unref(localModel).contractor_gst_registered,
                                  "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => unref(localModel).contractor_gst_registered = $event),
                                  label: "GST Registered?"
                                }, null, 8, ["modelValue"])
                              ]),
                              createBaseVNode("div", _hoisted_23, [
                                createVNode(_sfc_main$1, {
                                  modelValue: unref(localModel).contractor_insurance_expiry,
                                  "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => unref(localModel).contractor_insurance_expiry = $event),
                                  label: _ctx.$t("contractor.insuranceExpiry")
                                }, null, 8, ["modelValue", "label"])
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_24, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_commission_rate,
                                "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => unref(localModel).contractor_commission_rate = $event),
                                error: unref($v).contractor_commission_rate.$invalid,
                                type: "number",
                                label: _ctx.$t("contractor.commissionRate"),
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "error", "label"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_target,
                                "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => unref(localModel).contractor_target = $event),
                                label: _ctx.$t("contractor.target"),
                                error: unref($v).contractor_target.$invalid,
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label", "error"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(QExpansionItem, {
                  group: "contractor",
                  label: _ctx.$t("contractor.addressDetails"),
                  "header-class": "text-h6"
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$3, {
                              model: unref(localModel),
                              filled: true,
                              addressfields: { address1: "address1", address2: "address2", suburb_postcode_region_id: "suburb_postcode_region_id", lat: "lat", lng: "lng", country_id: "country_id" },
                              placeholder: _ctx.$t("address.search")
                            }, null, 8, ["model", "placeholder"]),
                            createVNode(QInput, {
                              modelValue: unref(localModel).address1,
                              "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => unref(localModel).address1 = $event),
                              label: _ctx.$t("address.line1"),
                              "bottom-slots": ""
                            }, null, 8, ["modelValue", "label"]),
                            createVNode(QInput, {
                              modelValue: unref(localModel).address2,
                              "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => unref(localModel).address2 = $event),
                              error: unref($v).address2.$invalid,
                              label: _ctx.$t("address.line2")
                            }, null, 8, ["modelValue", "error", "label"]),
                            createBaseVNode("div", _hoisted_25, [
                              createVNode(_sfc_main$4, {
                                modelValue: unref(localModel).suburb_postcode_region_id,
                                "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => unref(localModel).suburb_postcode_region_id = $event),
                                invalid: unref($v).suburb_postcode_region_id.$invalid,
                                label: _ctx.$t("address.suburb"),
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "invalid", "label"]),
                              createVNode(_sfc_main$5, {
                                modelValue: unref(localModel).country_id,
                                "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => unref(localModel).country_id = $event),
                                label: _ctx.$t("address.country"),
                                invalid: unref($v).country_id.$invalid,
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label", "invalid"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(QExpansionItem, {
                  group: "contractor",
                  label: _ctx.$t("contractor.bd.label"),
                  "header-class": "text-h6"
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_26, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_bd_name,
                                "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => unref(localModel).contractor_bd_name = $event),
                                label: _ctx.$t("contractor.bd.name"),
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_bd_bank,
                                "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => unref(localModel).contractor_bd_bank = $event),
                                label: _ctx.$t("contractor.bd.bank"),
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            createBaseVNode("div", _hoisted_27, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_bd_bsb,
                                "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => unref(localModel).contractor_bd_bsb = $event),
                                label: _ctx.$t("contractor.bd.bsb"),
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_bd_number,
                                "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => unref(localModel).contractor_bd_number = $event),
                                label: _ctx.$t("contractor.bd.number"),
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(QExpansionItem, {
                  group: "contractor",
                  label: _ctx.$t("contractor.ec.label"),
                  "header-class": "text-h6"
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_28, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_ec_first_name,
                                "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => unref(localModel).contractor_ec_first_name = $event),
                                label: _ctx.$t("contractor.ec.firstName"),
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_ec_last_name,
                                "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => unref(localModel).contractor_ec_last_name = $event),
                                label: _ctx.$t("contractor.ec.lastName"),
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            createBaseVNode("div", _hoisted_29, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_ec_phone,
                                "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => unref(localModel).contractor_ec_phone = $event),
                                label: _ctx.$t("contractor.ec.phone"),
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_ec_relationship,
                                "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => unref(localModel).contractor_ec_relationship = $event),
                                label: _ctx.$t("contractor.ec.relationship"),
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "label"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(QExpansionItem, {
                  group: "contractor",
                  label: _ctx.$t("contractor.application.label"),
                  "header-class": "text-h6"
                }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QCardSection, null, {
                          default: withCtx(() => [
                            _hoisted_30,
                            createBaseVNode("div", _hoisted_31, [
                              createBaseVNode("div", _hoisted_32, [
                                _hoisted_33,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_why_join)), 1)
                              ]),
                              createBaseVNode("div", _hoisted_34, [
                                _hoisted_35,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_relevant_experience)), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_36, [
                              createBaseVNode("div", _hoisted_37, [
                                _hoisted_38,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_current_work_situation)), 1)
                              ]),
                              createBaseVNode("div", _hoisted_39, [
                                _hoisted_40,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_hours_per_week)), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_41, [
                              createBaseVNode("div", _hoisted_42, [
                                _hoisted_43,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_referral_type)), 1)
                              ])
                            ]),
                            _hoisted_44,
                            createBaseVNode("div", _hoisted_45, [
                              createBaseVNode("div", _hoisted_46, [
                                _hoisted_47,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_iron_type)), 1)
                              ]),
                              createBaseVNode("div", _hoisted_48, [
                                _hoisted_49,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_washing_machine_type)), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_50, [
                              createBaseVNode("div", _hoisted_51, [
                                _hoisted_52,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_ironing_steam_station)), 1)
                              ]),
                              createBaseVNode("div", _hoisted_53, [
                                _hoisted_54,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_washing_machine_dryer)), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_55, [
                              createBaseVNode("div", _hoisted_56, [
                                _hoisted_57,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_car_type)), 1)
                              ]),
                              createBaseVNode("div", _hoisted_58, [
                                _hoisted_59,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_clothing_rack)), 1)
                              ])
                            ]),
                            _hoisted_60,
                            createBaseVNode("div", _hoisted_61, [
                              createBaseVNode("div", _hoisted_62, [
                                _hoisted_63,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_smartphone_type)), 1)
                              ]),
                              createBaseVNode("div", _hoisted_64, [
                                _hoisted_65,
                                createTextVNode(" " + toDisplayString(unref(valOrNs)(unref(localModel).contractor_computer_type)), 1)
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(QSeparator, { class: "q-mt-md" }),
            createVNode(QCardActions, {
              class: "bg-grey-1",
              align: "right"
            }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  onClick: _cache[35] || (_cache[35] = ($event) => save()),
                  label: _ctx.$t("actions.save"),
                  color: "primary",
                  disabled: unref($v).$invalid
                }, null, 8, ["label", "disabled"])
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
export { _sfc_main as default };
