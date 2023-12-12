import { B as defineComponent, g as computed, r as ref, i as inject, m as openBlock, n as createElementBlock, l as createVNode, L as withCtx, z as createCommentVNode, Q as QCard, F as Fragment, O as QIcon, K as createBlock, M as QCardSection, q as createBaseVNode, S as unref, R as QBtn, aj as toDisplayString, ak as createTextVNode, N as QInput, ab as QCardActions } from "./index.4ea3bfb0.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.38135d87.js";
import { Q as QUploader } from "./QUploader.39e13952.js";
import { Q as QSelect } from "./QSelect.03ae6953.js";
import { Q as QExpansionItem } from "./QExpansionItem.36f2aaf1.js";
import { Q as QList } from "./QList.1e9d282c.js";
import { u as useVuelidate, r as required, e as email } from "./index.esm.fc80c6e2.js";
import { a as api } from "./axios.01559a60.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./PostcodeRegionField.a0c4953d.js";
import { _ as _sfc_main$5 } from "./DateField.9fdee9f1.js";
import { _ as _sfc_main$1 } from "./UserAvatar.77fd2179.js";
import { u as useMixinCommon } from "./common.2388dfb0.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { u as uploadConfig, v as getTimeZones, e as doNotify } from "./help.08aba6f6.js";
import "./QCircularProgress.6c8f4e10.js";
import "./format.3e32b8d9.js";
import "./QItemSection.e253e9f2.js";
import "./QItemLabel.ae3f0e25.js";
import "./QMenu.77f43e2e.js";
import "./selection.cc8eaae5.js";
import "./rtl.b51694b1.js";
import "./QSlideTransition.eb5af56b.js";
import "./QDate.b7310a2f.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.500dddb7.js";
import "./use-quasar.b1a07a2d.js";
import "./QImg.5871994d.js";
import "./use-ratio.afa2a085.js";
import "./common.ecd9cfdd.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "row q-col-gutter-md" };
const _hoisted_3 = { class: "col-xs-4 col-md-3 col-lg-2 text-center" };
const _hoisted_4 = { class: "q-mt-xs text-center" };
const _hoisted_5 = { class: "col-xs-8 col-md-9 col-lg-10" };
const _hoisted_6 = { class: "text-h5" };
const _hoisted_7 = { class: "text-grey" };
const _hoisted_8 = { class: "text-grey" };
const _hoisted_9 = {
  key: 0,
  class: "q-mt-md"
};
const _hoisted_10 = { class: "row q-col-gutter-md q-mt-md" };
const _hoisted_11 = { class: "col-xs-12 col-sm-6" };
const _hoisted_12 = { class: "col-xs-12 col-sm-6" };
const _hoisted_13 = { class: "row q-col-gutter-md" };
const _hoisted_14 = { class: "row q-col-gutter-md" };
const _hoisted_15 = { class: "col-xs-6" };
const _hoisted_16 = { class: "col-xs-6" };
const _hoisted_17 = { class: "row q-col-gutter-md" };
const _hoisted_18 = { class: "row q-col-gutter-md" };
const _hoisted_19 = { class: "row q-col-gutter-md" };
const _hoisted_20 = { class: "row q-col-gutter-md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorEdit",
  props: {
    model: null
  },
  setup(__props) {
    const props = __props;
    const common = useMixinCommon();
    const localModel = computed(() => props.model);
    const loading = ref(false);
    const showAvatarUpload = ref(false);
    const emailError = ref({ error: false, msg: "" });
    const bus = inject("bus");
    const rules = {
      address2: { required },
      suburb_postcode_region_id: { required },
      postcode: { required },
      country_id: { required },
      email: { required, email },
      mobile: { required },
      timezone: { required },
      contractor_badge_name: { required },
      contractor_bd_name: { required },
      contractor_bd_bank: { required },
      contractor_bd_bsb: { required },
      contractor_bd_number: { required },
      contractor_ec_first_name: { required },
      contractor_ec_last_name: { required },
      contractor_ec_phone: { required },
      contractor_ec_relationship: { required },
      contractor_target: { required }
    };
    const $v = useVuelidate(rules, localModel, { $scope: false });
    const save = () => {
      loading.value = true;
      api.put("/public/user/contractor/profile", localModel.value).then(() => {
        doNotify("positive", "Saved");
        bus.emit("getContractor");
        loading.value = false;
      }).catch((response) => {
        useMixinDebug(response);
        loading.value = false;
      });
    };
    const successUpload = (file) => {
      localModel.value.avatar = file.xhr.response;
      save();
    };
    const checkEmail = () => {
      emailError.value = { error: false, msg: "" };
      if (localModel.value.email) {
        api.post(`/user/checkemail/${localModel.value.id}`, { email: localModel.value.email }).then((response) => {
          if (parseFloat(response.data.found[0].count) > 0) {
            emailError.value.error = true;
            emailError.value.msg = "That email address is already in use";
            localModel.value.email = null;
          }
        }).catch((error) => {
          useMixinDebug(error);
        });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        !_ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(QBreadcrumbs, { class: "q-mb-md" }, {
            separator: withCtx(() => [
              createVNode(QIcon, {
                size: "1.5em",
                name: "chevron_right"
              })
            ]),
            default: withCtx(() => [
              createVNode(QBreadcrumbsEl, {
                label: "Home",
                icon: "home",
                to: { name: "appDashboard" }
              }),
              createVNode(QBreadcrumbsEl, {
                label: "Profile",
                to: { name: "contractor-dashboard" }
              }),
              createVNode(QBreadcrumbsEl, { label: "Details" })
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
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
                          default: withCtx(() => {
                            var _a;
                            return [
                              createBaseVNode("div", _hoisted_2, [
                                createBaseVNode("div", _hoisted_3, [
                                  createVNode(_sfc_main$1, {
                                    user: unref(localModel),
                                    size: "55px"
                                  }, null, 8, ["user"]),
                                  createBaseVNode("div", _hoisted_4, [
                                    createVNode(QBtn, {
                                      flat: "",
                                      onClick: _cache[0] || (_cache[0] = ($event) => showAvatarUpload.value = !showAvatarUpload.value),
                                      label: "Update",
                                      rounded: ""
                                    })
                                  ])
                                ]),
                                createBaseVNode("div", _hoisted_5, [
                                  createBaseVNode("div", _hoisted_6, toDisplayString(unref(localModel).fullname), 1),
                                  createBaseVNode("div", _hoisted_7, [
                                    createVNode(QIcon, { name: "mail" }),
                                    createTextVNode(" " + toDisplayString(unref(localModel).email), 1)
                                  ]),
                                  createBaseVNode("div", _hoisted_8, [
                                    createVNode(QIcon, { name: "phone" }),
                                    createTextVNode(" " + toDisplayString(unref(localModel).mobile), 1)
                                  ])
                                ])
                              ]),
                              showAvatarUpload.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
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
                              ])) : createCommentVNode("", true),
                              createBaseVNode("div", _hoisted_10, [
                                createBaseVNode("div", _hoisted_11, [
                                  createVNode(QInput, {
                                    modelValue: unref(localModel).email,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(localModel).email = $event),
                                    label: "Email",
                                    error: unref($v).email.$invalid || emailError.value.error,
                                    onBlur: _cache[2] || (_cache[2] = ($event) => checkEmail()),
                                    "error-message": emailError.value.msg || "",
                                    hint: emailError.value.msg || "",
                                    outlined: "",
                                    autocapitalize: "off"
                                  }, null, 8, ["modelValue", "error", "error-message", "hint"])
                                ]),
                                createBaseVNode("div", _hoisted_12, [
                                  createVNode(QInput, {
                                    modelValue: unref(localModel).mobile,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(localModel).mobile = $event),
                                    label: "Mobile Phone",
                                    error: unref($v).mobile.$invalid,
                                    mask: ((_a = unref(common)) == null ? void 0 : _a.operating_country) === "aud" ? "#### ### ###" : "",
                                    "unmasked-value": "",
                                    outlined: ""
                                  }, null, 8, ["modelValue", "error", "mask"])
                                ])
                              ]),
                              createVNode(QSelect, {
                                modelValue: unref(localModel).timezone,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(localModel).timezone = $event),
                                label: "Timezone",
                                options: unref(getTimeZones)(),
                                "map-options": "",
                                "emit-value": "",
                                error: unref($v).timezone.$invalid,
                                outlined: ""
                              }, null, 8, ["modelValue", "options", "error"])
                            ];
                          }),
                          _: 1
                        }),
                        createVNode(QCardActions, { align: "right" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              onClick: _cache[5] || (_cache[5] = ($event) => save()),
                              label: _ctx.$t("actions.update"),
                              color: "primary",
                              disabled: unref($v).$invalid,
                              rounded: ""
                            }, null, 8, ["label", "disabled"])
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
                            createVNode(_sfc_main$2, {
                              model: unref(localModel),
                              filled: true,
                              addressfields: { address1: "address1", address2: "address2", suburb_postcode_region_id: "suburb_postcode_region_id", postcode: "postcode", lat: "lat", lng: "lng", country_id: "country_id" },
                              placeholder: _ctx.$t("address.search")
                            }, null, 8, ["model", "placeholder"]),
                            createVNode(QInput, {
                              modelValue: unref(localModel).address1,
                              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(localModel).address1 = $event),
                              label: _ctx.$t("address.line1"),
                              "bottom-slots": "",
                              outlined: ""
                            }, null, 8, ["modelValue", "label"]),
                            createVNode(QInput, {
                              modelValue: unref(localModel).address2,
                              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(localModel).address2 = $event),
                              error: unref($v).address2.$invalid,
                              label: _ctx.$t("address.line2"),
                              outlined: ""
                            }, null, 8, ["modelValue", "error", "label"]),
                            createBaseVNode("div", _hoisted_13, [
                              createVNode(_sfc_main$3, {
                                modelValue: unref(localModel).suburb_postcode_region_id,
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(localModel).suburb_postcode_region_id = $event),
                                invalid: unref($v).suburb_postcode_region_id.$invalid,
                                label: _ctx.$t("address.suburb"),
                                class: "col-xs-12",
                                outlined: true,
                                clearable: true
                              }, null, 8, ["modelValue", "invalid", "label"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).postcode,
                                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(localModel).postcode = $event),
                                error: unref($v).postcode.$invalid,
                                label: _ctx.$t("address.postcode"),
                                outlined: "",
                                class: "col-xs-12 col-sm-6"
                              }, null, 8, ["modelValue", "error", "label"]),
                              createVNode(_sfc_main$4, {
                                modelValue: unref(localModel).country_id,
                                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(localModel).country_id = $event),
                                label: _ctx.$t("address.country"),
                                invalid: unref($v).country_id.$invalid,
                                class: "col-xs-12 col-sm-6",
                                outlined: true
                              }, null, 8, ["modelValue", "label", "invalid"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(QCardActions, { align: "right" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              onClick: _cache[11] || (_cache[11] = ($event) => save()),
                              label: _ctx.$t("actions.update"),
                              color: "primary",
                              disabled: unref($v).$invalid,
                              rounded: ""
                            }, null, 8, ["label", "disabled"])
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
                            createBaseVNode("div", _hoisted_14, [
                              createBaseVNode("div", _hoisted_15, [
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(localModel).contractor_insurance_expiry,
                                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(localModel).contractor_insurance_expiry = $event),
                                  label: _ctx.$t("contractor.insuranceExpiry"),
                                  outlined: true,
                                  disable: true
                                }, null, 8, ["modelValue", "label"])
                              ]),
                              createBaseVNode("div", _hoisted_16, [
                                createVNode(QInput, {
                                  modelValue: unref(localModel).contractor_target,
                                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(localModel).contractor_target = $event),
                                  label: _ctx.$t("contractor.target"),
                                  error: unref($v).contractor_target.$invalid,
                                  class: "col-xs-12",
                                  outlined: true
                                }, null, 8, ["modelValue", "label", "error"])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(QCardActions, { align: "right" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              onClick: _cache[14] || (_cache[14] = ($event) => save()),
                              label: _ctx.$t("actions.update"),
                              color: "primary",
                              disabled: unref($v).$invalid,
                              rounded: ""
                            }, null, 8, ["label", "disabled"])
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
                            createBaseVNode("div", _hoisted_17, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_bd_name,
                                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(localModel).contractor_bd_name = $event),
                                label: _ctx.$t("contractor.bd.name"),
                                class: "col-xs-12 col-sm-6",
                                error: unref($v).contractor_bd_name.$invalid,
                                outlined: true
                              }, null, 8, ["modelValue", "label", "error"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_bd_bank,
                                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(localModel).contractor_bd_bank = $event),
                                label: _ctx.$t("contractor.bd.bank"),
                                class: "col-xs-12 col-sm-6",
                                error: unref($v).contractor_bd_bank.$invalid,
                                outlined: true
                              }, null, 8, ["modelValue", "label", "error"])
                            ]),
                            createBaseVNode("div", _hoisted_18, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_bd_bsb,
                                "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => unref(localModel).contractor_bd_bsb = $event),
                                label: _ctx.$t("contractor.bd.bsb"),
                                class: "col-xs-6",
                                error: unref($v).contractor_bd_bsb.$invalid,
                                outlined: true
                              }, null, 8, ["modelValue", "label", "error"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_bd_number,
                                "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => unref(localModel).contractor_bd_number = $event),
                                label: _ctx.$t("contractor.bd.number"),
                                class: "col-xs-6",
                                error: unref($v).contractor_bd_number.$invalid,
                                outlined: true
                              }, null, 8, ["modelValue", "label", "error"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(QCardActions, { align: "right" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              onClick: _cache[19] || (_cache[19] = ($event) => save()),
                              label: _ctx.$t("actions.update"),
                              color: "primary",
                              disabled: unref($v).$invalid,
                              rounded: ""
                            }, null, 8, ["label", "disabled"])
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
                            createBaseVNode("div", _hoisted_19, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_ec_first_name,
                                "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => unref(localModel).contractor_ec_first_name = $event),
                                label: _ctx.$t("contractor.ec.firstName"),
                                class: "col-xs-6",
                                error: unref($v).contractor_ec_first_name.$invalid,
                                outlined: ""
                              }, null, 8, ["modelValue", "label", "error"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_ec_last_name,
                                "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => unref(localModel).contractor_ec_last_name = $event),
                                label: _ctx.$t("contractor.ec.lastName"),
                                class: "col-xs-6",
                                error: unref($v).contractor_ec_last_name.$invalid,
                                outlined: ""
                              }, null, 8, ["modelValue", "label", "error"])
                            ]),
                            createBaseVNode("div", _hoisted_20, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_ec_phone,
                                "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => unref(localModel).contractor_ec_phone = $event),
                                label: _ctx.$t("contractor.ec.phone"),
                                class: "col-xs-6",
                                error: unref($v).contractor_ec_phone.$invalid,
                                outlined: ""
                              }, null, 8, ["modelValue", "label", "error"]),
                              createVNode(QInput, {
                                modelValue: unref(localModel).contractor_ec_relationship,
                                "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => unref(localModel).contractor_ec_relationship = $event),
                                label: _ctx.$t("contractor.ec.relationship"),
                                class: "col-xs-6",
                                error: unref($v).contractor_ec_relationship.$invalid,
                                outlined: ""
                              }, null, 8, ["modelValue", "label", "error"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(QCardActions, { align: "right" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              onClick: _cache[24] || (_cache[24] = ($event) => save()),
                              label: _ctx.$t("actions.update"),
                              color: "primary",
                              disabled: unref($v).$invalid,
                              rounded: ""
                            }, null, 8, ["label", "disabled"])
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
            })) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
export { _sfc_main as default };
