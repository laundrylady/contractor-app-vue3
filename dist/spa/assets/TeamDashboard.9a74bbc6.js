import { Q as QSelect } from "./QSelect.d87a43fc.js";
import { C as defineComponent, m as openBlock, aa as createBlock, K as withCtx, l as createVNode, L as QCardSection, ac as createTextVNode, q as createBaseVNode, n as createElementBlock, F as Fragment, ab as renderList, ad as toDisplayString, Q as QCard, z as createCommentVNode, g as computed, r as ref, i as inject, J as useRouter, o as onMounted, af as QDialog, R as unref, M as QInput, P as QBtn, ae as QCardActions, t as normalizeClass, H as withDirectives } from "./index.f0bcd142.js";
import { Q as QExpansionItem } from "./QExpansionItem.a6b88623.js";
import { Q as QList } from "./QList.cff4e2be.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.c54e6c41.js";
import { Q as QToolbar } from "./QToolbar.3c15addb.js";
import { C as ClosePopup } from "./ClosePopup.fefc41e2.js";
import { _ as _imports_0 } from "./ndis_heart.0820b9e2.js";
import { _ as _sfc_main$2 } from "./GlobalNotes.1b40dfd1.js";
import { u as useVuelidate, r as required, e as email, a as requiredIf } from "./index.esm.15182dbd.js";
import { a as api } from "./axios.c33bd943.js";
import { b as doNotify } from "./help.31050a33.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { u as useMixinCommon } from "./common.5e8cb1e5.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6 } from "./PostcodeRegionField.e933c4a9.js";
import { _ as _sfc_main$3 } from "./DateField.89eba63d.js";
import "./selection.07b4b8ad.js";
import "./QItemLabel.2a9c8bab.js";
import "./QMenu.7752fb6c.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSlideTransition.3f09071c.js";
import "./QLinearProgress.7104b56a.js";
import "./UserAvatar.e7cc78c9.js";
import "./use-ratio.034e22fc.js";
import "./security.83ab89bc.js";
import "./common.b185f031.js";
import "./QDate.d3c35adc.js";
import "./use-render-cache.3aae9b27.js";
import "./QPopupProxy.26ee3f80.js";
import "./use-quasar.29d4674e.js";
const _hoisted_1$1 = { class: "text-bold q-mr-xs" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormValidationInclude",
  props: {
    errors: null
  },
  setup(__props) {
    const fieldLabel = (val) => {
      if (val.match("region_")) {
        return "SUBURB";
      }
      return val.replaceAll("_", " ").toUpperCase();
    };
    return (_ctx, _cache) => {
      return __props.errors.$silentErrors.length ? (openBlock(), createBlock(QCard, {
        key: 0,
        class: "bg-red-1 q-mb-lg"
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createTextVNode(" The following issues were found with the record: "),
              createBaseVNode("ul", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.errors.$silentErrors, (e, index) => {
                  return openBlock(), createElementBlock("li", {
                    key: index,
                    class: "q-pl-none"
                  }, [
                    createBaseVNode("span", _hoisted_1$1, toDisplayString(fieldLabel(e.$property)) + ":", 1),
                    createBaseVNode("span", null, toDisplayString(e.$message), 1)
                  ]);
                }), 128))
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
const _hoisted_1 = {
  key: 0,
  class: "q-mt-md"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "row q-col-gutter-sm" };
const _hoisted_5 = { class: "col-xs-12" };
const _hoisted_6 = { class: "col-xs-12 col-sm-6" };
const _hoisted_7 = { class: "col-xs-12 col-sm-6" };
const _hoisted_8 = { class: "col-xs-12 col-sm-6" };
const _hoisted_9 = { class: "col-xs-12 col-sm-6" };
const _hoisted_10 = { class: "col-xs-12 col-sm-6" };
const _hoisted_11 = { class: "col-xs-12" };
const _hoisted_12 = { class: "row q-col-gutter-sm" };
const _hoisted_13 = { class: "col-xs-12 col-sm-6" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  style: { "height": "32px" }
}, null, -1);
const _hoisted_15 = { class: "col-xs-12 col-sm-6" };
const _hoisted_16 = { class: "col-xs-12 col-sm-6" };
const _hoisted_17 = { class: "col-xs-12 col-sm-6" };
const _hoisted_18 = { class: "col-xs-12 col-sm-6" };
const _hoisted_19 = { class: "col-xs-12 col-sm-6" };
const _hoisted_20 = { key: 0 };
const _hoisted_21 = { key: 1 };
const _hoisted_22 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_23 = { class: "col-xs-12 col-sm-6" };
const _hoisted_24 = { class: "col-xs-12 col-sm-6" };
const _hoisted_25 = { key: 0 };
const _hoisted_26 = { key: 1 };
const _hoisted_27 = { class: "row q-col-gutter-md" };
const _hoisted_28 = { class: "col-xs-12 col-sm-6" };
const _hoisted_29 = { class: "col-xs-12 col-sm-6" };
const _hoisted_30 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_31 = { class: "col-xs-12 col-sm-6" };
const _hoisted_32 = { class: "col-xs-12 col-sm-6" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamDashboard",
  props: {
    model: null
  },
  setup(__props) {
    const props = __props;
    const localModel = computed(() => props.model);
    const emailError = ref({ show: false, id: null, name: null });
    const loading = ref(false);
    const isEditLocked = ref(true);
    const bus = inject("bus");
    const common = useMixinCommon();
    const originalModel = ref();
    const router = useRouter();
    const customerTypes = computed(() => {
      var _a, _b;
      if (((_a = common == null ? void 0 : common.value) == null ? void 0 : _a.operating_country) === "aud") {
        return ["Residential", "Business", "NDIS", "Home Care", "Aged Care", "Veteran Affairs", "Sporting Group", "Other"];
      }
      if (((_b = common == null ? void 0 : common.value) == null ? void 0 : _b.operating_country) === "nzd") {
        return ["Residential", "Business", "Disability Services", "Home Care", "Aged Care", "Veteran Affairs", "Sporting Group", "Other"];
      }
      return [];
    });
    const rules = {
      name: { required },
      first_name: { required },
      last_name: { required },
      email: { required, email },
      mobile: { requiredIf: requiredIf(() => !localModel.value.other_phone) },
      other_phone: { requiredIf: requiredIf(() => !localModel.value.mobile) },
      address2: { required },
      suburb_postcode_region_id: { required },
      postcode: { required },
      country_id: { required }
    };
    const $v = useVuelidate(rules, localModel, { $scope: false });
    const save = () => {
      loading.value = true;
      api.put(`/public/team/${props.model.id}`, localModel.value).then(() => {
        doNotify("positive", "Saved");
        bus.emit("getTeam");
        loading.value = false;
        isEditLocked.value = true;
      }).catch((response) => {
        useMixinDebug(response);
        loading.value = false;
      });
    };
    const checkEmail = () => {
      emailError.value = { show: false, id: null, name: null };
      if (!localModel.value.email || localModel.value.email === originalModel.value.email) {
        return;
      }
      api.post(`/public/team/checkemail/${localModel.value.id}`, { email: localModel.value.email }).then().catch((error) => {
        emailError.value.id = error.response.data.id;
        emailError.value.name = error.response.data.name;
        emailError.value.show = true;
        localModel.value.email = "";
      });
    };
    const teamEmailNavigate = () => {
      isEditLocked.value = true;
      router.push({ name: "team-dashboard", params: { id: emailError.value.id } });
    };
    const cancelEdit = () => {
      bus.emit("getTeam");
      isEditLocked.value = true;
    };
    onMounted(() => {
      originalModel.value = JSON.parse(JSON.stringify(props.model));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(_sfc_main$2, {
            notable_id: __props.model.id,
            notable_type: "Team",
            nobox: true
          }, null, 8, ["notable_id"]),
          createVNode(QList, { class: "q-mt-lg" }, {
            default: withCtx(() => [
              createVNode(QExpansionItem, {
                label: "Customer Details",
                "header-class": "bg-grey-2 text-h6",
                group: "customerDetails"
              }, {
                default: withCtx(() => [
                  createVNode(QCard, null, {
                    default: withCtx(() => [
                      createVNode(QCardSection, null, {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            isEditLocked.value ? (openBlock(), createElementBlock("p", _hoisted_2, [
                              createBaseVNode("a", {
                                onClick: _cache[0] || (_cache[0] = ($event) => isEditLocked.value = false),
                                class: "link"
                              }, "Click here"),
                              createTextVNode(" to unlock the customer details and make changes. ")
                            ])) : createCommentVNode("", true),
                            !isEditLocked.value ? (openBlock(), createElementBlock("p", _hoisted_3, `Once you've finished updating the customer details, click "UPDATE" to save the changes.`)) : createCommentVNode("", true),
                            !isEditLocked.value ? (openBlock(), createBlock(_sfc_main$1, {
                              key: 2,
                              errors: unref($v)
                            }, null, 8, ["errors"])) : createCommentVNode("", true),
                            createBaseVNode("div", _hoisted_4, [
                              createBaseVNode("div", _hoisted_5, [
                                createVNode(QSelect, {
                                  modelValue: unref(localModel).type,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(localModel).type = $event),
                                  label: _ctx.$t("team.type"),
                                  options: unref(customerTypes),
                                  "map-options": "",
                                  "emit-value": "",
                                  outlined: "",
                                  disable: "",
                                  "bottom-slots": ""
                                }, null, 8, ["modelValue", "label", "options"])
                              ]),
                              createBaseVNode("div", _hoisted_6, [
                                createVNode(QInput, {
                                  modelValue: unref(localModel).first_name,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(localModel).first_name = $event),
                                  error: unref($v).first_name.$invalid,
                                  label: "Contact First Name",
                                  outlined: "",
                                  disable: isEditLocked.value
                                }, null, 8, ["modelValue", "error", "disable"])
                              ]),
                              createBaseVNode("div", _hoisted_7, [
                                createVNode(QInput, {
                                  modelValue: unref(localModel).last_name,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(localModel).last_name = $event),
                                  error: unref($v).last_name.$invalid,
                                  label: "Contact Last Name",
                                  outlined: "",
                                  disable: isEditLocked.value
                                }, null, 8, ["modelValue", "error", "disable"])
                              ]),
                              createBaseVNode("div", _hoisted_8, [
                                createVNode(QInput, {
                                  modelValue: unref(localModel).mobile,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(localModel).mobile = $event),
                                  error: unref($v).mobile.$invalid,
                                  label: ((_a = unref(common)) == null ? void 0 : _a.operating_country) === "aud" ? "Australian mobile number" : "Your contact mobile",
                                  outlined: "",
                                  disable: isEditLocked.value,
                                  mask: ((_b = unref(common)) == null ? void 0 : _b.operating_country) === "aud" ? "#### ### ###" : "",
                                  "unmasked-value": ""
                                }, null, 8, ["modelValue", "error", "label", "disable", "mask"])
                              ]),
                              createBaseVNode("div", _hoisted_9, [
                                createVNode(QInput, {
                                  modelValue: unref(localModel).other_phone,
                                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(localModel).other_phone = $event),
                                  error: unref($v).other_phone.$invalid,
                                  label: "Alternate contact number",
                                  outlined: "",
                                  disable: isEditLocked.value,
                                  "unmasked-value": ""
                                }, null, 8, ["modelValue", "error", "disable"])
                              ]),
                              createBaseVNode("div", _hoisted_10, [
                                createVNode(QInput, {
                                  modelValue: unref(localModel).email,
                                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(localModel).email = $event),
                                  label: "Email",
                                  outlined: "",
                                  "bottom-slots": "",
                                  error: unref($v).email.$invalid,
                                  onBlur: _cache[7] || (_cache[7] = ($event) => checkEmail()),
                                  disable: isEditLocked.value
                                }, null, 8, ["modelValue", "error", "disable"])
                              ]),
                              createBaseVNode("div", _hoisted_11, [
                                createVNode(QInput, {
                                  modelValue: unref(localModel).name,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(localModel).name = $event),
                                  error: unref($v).name.$invalid,
                                  label: "Customer Name",
                                  outlined: "",
                                  disable: isEditLocked.value
                                }, null, 8, ["modelValue", "error", "disable"])
                              ])
                            ])
                          ];
                        }),
                        _: 1
                      }),
                      !isEditLocked.value ? (openBlock(), createBlock(QCardActions, {
                        key: 0,
                        align: "right"
                      }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            onClick: _cache[9] || (_cache[9] = ($event) => cancelEdit()),
                            label: "Cancel",
                            flat: "",
                            color: "secondary",
                            rounded: ""
                          }),
                          createVNode(QBtn, {
                            onClick: _cache[10] || (_cache[10] = ($event) => save()),
                            disable: unref($v).$invalid || loading.value,
                            label: _ctx.$t("actions.update"),
                            color: "primary",
                            rounded: "",
                            loading: loading.value
                          }, null, 8, ["disable", "label", "loading"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              unref(localModel).type === "NDIS" ? (openBlock(), createBlock(QExpansionItem, {
                key: 0,
                label: _ctx.$t("team.ndis"),
                "header-class": "bg-grey-3 text-h6"
              }, {
                default: withCtx(() => [
                  createVNode(QCard, null, {
                    default: withCtx(() => [
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_12, [
                            createBaseVNode("div", _hoisted_13, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).ndis_number,
                                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(localModel).ndis_number = $event),
                                disable: "",
                                label: _ctx.$t("team.ndisNumber"),
                                outlined: "",
                                "bottom-slots": ""
                              }, {
                                prepend: withCtx(() => [
                                  _hoisted_14
                                ]),
                                _: 1
                              }, 8, ["modelValue", "label"])
                            ]),
                            createBaseVNode("div", _hoisted_15, [
                              createVNode(QSelect, {
                                modelValue: unref(localModel).ndis_type,
                                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(localModel).ndis_type = $event),
                                label: _ctx.$t("team.ndisType"),
                                outlined: "",
                                "bottom-slots": "",
                                options: ["Self managed", "Plan managed", "NDIA registered"],
                                disable: ""
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            createBaseVNode("div", _hoisted_16, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).ndis_plan_manager_email,
                                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(localModel).ndis_plan_manager_email = $event),
                                label: _ctx.$t("team.ndisPlanManagerEmail"),
                                "bottom-slots": "",
                                disable: "",
                                outlined: ""
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            createBaseVNode("div", _hoisted_17, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).ndis_support_coordinator_email,
                                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(localModel).ndis_support_coordinator_email = $event),
                                label: _ctx.$t("team.ndisSupportCoordinatorEmail"),
                                "bottom-slots": "",
                                disable: "",
                                outlined: ""
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            createBaseVNode("div", _hoisted_18, [
                              createVNode(_sfc_main$3, {
                                modelValue: unref(localModel).ndis_plan_start,
                                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(localModel).ndis_plan_start = $event),
                                label: _ctx.$t("team.ndisPlanStart"),
                                outlined: "",
                                disable: true,
                                "bottom-slots": ""
                              }, null, 8, ["modelValue", "label"])
                            ]),
                            createBaseVNode("div", _hoisted_19, [
                              createVNode(_sfc_main$3, {
                                modelValue: unref(localModel).ndis_plan_end,
                                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(localModel).ndis_plan_end = $event),
                                label: _ctx.$t("team.ndisPlanEnd"),
                                outlined: "",
                                disable: true,
                                "bottom-slots": ""
                              }, null, 8, ["modelValue", "label"])
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
              }, 8, ["label"])) : createCommentVNode("", true),
              createVNode(QExpansionItem, {
                label: "Pickup Address",
                "header-class": "bg-grey-2 text-h6",
                group: "customerDetails",
                class: normalizeClass({ "text-negative": !__props.model.postcode || !__props.model.address2 || !__props.model.suburb_postcode_region_id }),
                icon: !__props.model.postcode || !__props.model.address2 || !__props.model.suburb_postcode_region_id ? "warning" : ""
              }, {
                default: withCtx(() => [
                  createVNode(QCard, null, {
                    default: withCtx(() => [
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          isEditLocked.value ? (openBlock(), createElementBlock("p", _hoisted_20, [
                            createBaseVNode("a", {
                              onClick: _cache[17] || (_cache[17] = ($event) => isEditLocked.value = false),
                              class: "link"
                            }, "Click here"),
                            createTextVNode(" to unlock the customer pickup address and make changes. ")
                          ])) : createCommentVNode("", true),
                          !isEditLocked.value ? (openBlock(), createElementBlock("p", _hoisted_21, `Once you've finished updating the customer pickup address, click "UPDATE" to save the changes.`)) : createCommentVNode("", true),
                          !isEditLocked.value ? (openBlock(), createBlock(_sfc_main$1, {
                            key: 2,
                            errors: unref($v)
                          }, null, 8, ["errors"])) : createCommentVNode("", true),
                          !isEditLocked.value ? (openBlock(), createBlock(_sfc_main$4, {
                            key: 3,
                            model: unref(localModel),
                            filled: true,
                            addressfields: { address1: "address1", address2: "address2", suburb_postcode_region_id: "suburb_postcode_region_id", lat: "lat", lng: "lng", country_id: "country_id", postcode: "postcode" },
                            placeholder: _ctx.$t("address.search")
                          }, null, 8, ["model", "placeholder"])) : createCommentVNode("", true),
                          createVNode(QInput, {
                            modelValue: unref(localModel).address1,
                            "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => unref(localModel).address1 = $event),
                            label: _ctx.$t("address.line1"),
                            "bottom-slots": "",
                            outlined: "",
                            disable: isEditLocked.value
                          }, null, 8, ["modelValue", "label", "disable"]),
                          createVNode(QInput, {
                            modelValue: unref(localModel).address2,
                            "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => unref(localModel).address2 = $event),
                            error: unref($v).address2.$invalid,
                            label: _ctx.$t("address.line2"),
                            outlined: "",
                            disable: isEditLocked.value
                          }, null, 8, ["modelValue", "error", "label", "disable"]),
                          createBaseVNode("div", _hoisted_22, [
                            createBaseVNode("div", _hoisted_23, [
                              createVNode(_sfc_main$5, {
                                modelValue: unref(localModel).suburb_postcode_region_id,
                                "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => unref(localModel).suburb_postcode_region_id = $event),
                                outlined: true,
                                invalid: unref($v).suburb_postcode_region_id.$invalid,
                                label: _ctx.$t("address.suburb"),
                                disable: isEditLocked.value,
                                clearable: true
                              }, null, 8, ["modelValue", "invalid", "label", "disable"])
                            ]),
                            createBaseVNode("div", _hoisted_24, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).postcode,
                                "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => unref(localModel).postcode = $event),
                                label: _ctx.$t("address.postcode"),
                                disable: isEditLocked.value,
                                outlined: "",
                                error: unref($v).postcode.$invalid
                              }, null, 8, ["modelValue", "label", "disable", "error"])
                            ])
                          ]),
                          createVNode(_sfc_main$6, {
                            modelValue: unref(localModel).country_id,
                            "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => unref(localModel).country_id = $event),
                            label: _ctx.$t("address.country"),
                            outlined: true,
                            invalid: unref($v).country_id.$invalid,
                            disable: true
                          }, null, 8, ["modelValue", "label", "invalid"])
                        ]),
                        _: 1
                      }),
                      !isEditLocked.value ? (openBlock(), createBlock(QCardActions, {
                        key: 0,
                        align: "right"
                      }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            onClick: _cache[23] || (_cache[23] = ($event) => cancelEdit()),
                            label: "Cancel",
                            flat: "",
                            color: "secondary",
                            rounded: ""
                          }),
                          createVNode(QBtn, {
                            onClick: _cache[24] || (_cache[24] = ($event) => save()),
                            disable: unref($v).$invalid || loading.value,
                            label: _ctx.$t("actions.update"),
                            color: "primary",
                            rounded: "",
                            loading: loading.value
                          }, null, 8, ["disable", "label", "loading"])
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["class", "icon"]),
              createVNode(QExpansionItem, {
                label: "Invoice Details",
                "header-class": "bg-grey-2 text-h6",
                group: "customerDetails"
              }, {
                default: withCtx(() => [
                  createVNode(QCard, null, {
                    default: withCtx(() => [
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          isEditLocked.value ? (openBlock(), createElementBlock("p", _hoisted_25, [
                            createBaseVNode("a", {
                              onClick: _cache[25] || (_cache[25] = ($event) => isEditLocked.value = false),
                              class: "link"
                            }, "Click here"),
                            createTextVNode(" to unlock the customer invoice detrails and make changes. ")
                          ])) : createCommentVNode("", true),
                          !isEditLocked.value ? (openBlock(), createElementBlock("p", _hoisted_26, `Once you've finished updating the customer invoice details, click "UPDATE" to save the changes.`)) : createCommentVNode("", true),
                          !isEditLocked.value ? (openBlock(), createBlock(_sfc_main$1, {
                            key: 2,
                            errors: unref($v)
                          }, null, 8, ["errors"])) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_27, [
                            createBaseVNode("div", _hoisted_28, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).invoice_name,
                                "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => unref(localModel).invoice_name = $event),
                                label: "Name on invoice",
                                outlined: "",
                                disable: isEditLocked.value
                              }, null, 8, ["modelValue", "disable"])
                            ]),
                            createBaseVNode("div", _hoisted_29, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).invoice_po,
                                "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => unref(localModel).invoice_po = $event),
                                label: "Purchase order number on invoice",
                                outlined: "",
                                disable: isEditLocked.value,
                                "bottom-slots": ""
                              }, null, 8, ["modelValue", "disable"])
                            ])
                          ]),
                          createVNode(QInput, {
                            modelValue: unref(localModel).finance_email,
                            "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => unref(localModel).finance_email = $event),
                            label: "Finance email - separate with a comma for multiple",
                            class: "q-mb-lg",
                            outlined: "",
                            disable: isEditLocked.value
                          }, null, 8, ["modelValue", "disable"]),
                          !isEditLocked.value ? (openBlock(), createBlock(_sfc_main$4, {
                            key: 3,
                            model: unref(localModel),
                            filled: true,
                            addressfields: { address1: "invoice_address1", address2: "invoice_address2", suburb_postcode_region_id: "invoice_address_suburb_postcode_region_id", lat: "", lng: "", country_id: "invoice_address_country_id", postcode: "invoice_address_postcode" },
                            placeholder: _ctx.$t("address.search")
                          }, null, 8, ["model", "placeholder"])) : createCommentVNode("", true),
                          createVNode(QInput, {
                            modelValue: unref(localModel).invoice_address1,
                            "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => unref(localModel).invoice_address1 = $event),
                            label: _ctx.$t("address.line1"),
                            "bottom-slots": "",
                            outlined: "",
                            disable: isEditLocked.value
                          }, null, 8, ["modelValue", "label", "disable"]),
                          createVNode(QInput, {
                            modelValue: unref(localModel).invoice_address2,
                            "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => unref(localModel).invoice_address2 = $event),
                            label: _ctx.$t("address.line2"),
                            outlined: "",
                            disable: isEditLocked.value,
                            "bottom-slots": ""
                          }, null, 8, ["modelValue", "label", "disable"]),
                          createBaseVNode("div", _hoisted_30, [
                            createBaseVNode("div", _hoisted_31, [
                              createVNode(_sfc_main$5, {
                                modelValue: unref(localModel).invoice_address_suburb_postcode_region_id,
                                "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => unref(localModel).invoice_address_suburb_postcode_region_id = $event),
                                outlined: true,
                                label: _ctx.$t("address.suburb"),
                                disable: isEditLocked.value,
                                clearable: true
                              }, null, 8, ["modelValue", "label", "disable"])
                            ]),
                            createBaseVNode("div", _hoisted_32, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).invoice_address_postcode,
                                "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => unref(localModel).invoice_address_postcode = $event),
                                label: _ctx.$t("address.postcode"),
                                disable: isEditLocked.value,
                                outlined: ""
                              }, null, 8, ["modelValue", "label", "disable"])
                            ])
                          ]),
                          createVNode(_sfc_main$6, {
                            modelValue: unref(localModel).country_id,
                            "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => unref(localModel).country_id = $event),
                            label: _ctx.$t("address.country"),
                            outlined: true,
                            disable: isEditLocked.value
                          }, null, 8, ["modelValue", "label", "disable"])
                        ]),
                        _: 1
                      }),
                      !isEditLocked.value ? (openBlock(), createBlock(QCardActions, {
                        key: 0,
                        align: "right"
                      }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            onClick: _cache[34] || (_cache[34] = ($event) => cancelEdit()),
                            label: "Cancel",
                            flat: "",
                            color: "secondary",
                            rounded: ""
                          }),
                          createVNode(QBtn, {
                            onClick: _cache[35] || (_cache[35] = ($event) => save()),
                            disable: unref($v).$invalid || loading.value,
                            label: _ctx.$t("actions.update"),
                            color: "primary",
                            rounded: "",
                            loading: loading.value
                          }, null, 8, ["disable", "label", "loading"])
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
        ])) : createCommentVNode("", true),
        createVNode(QDialog, {
          modelValue: emailError.value.show,
          "onUpdate:modelValue": _cache[37] || (_cache[37] = ($event) => emailError.value.show = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "modal-sm" }, {
              default: withCtx(() => [
                createVNode(QToolbar, null, {
                  default: withCtx(() => [
                    createVNode(QToolbarTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Email Found")
                      ]),
                      _: 1
                    }),
                    withDirectives(createVNode(QBtn, {
                      icon: "close",
                      flat: "",
                      round: "",
                      dense: ""
                    }, null, 512), [
                      [ClosePopup]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createTextVNode("A customer with that email address already exists."),
                    _hoisted_33,
                    createBaseVNode("a", {
                      onClick: _cache[36] || (_cache[36] = ($event) => teamEmailNavigate()),
                      class: "link"
                    }, "Click here to view customer: " + toDisplayString(emailError.value.name), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
export { _sfc_main as default };
