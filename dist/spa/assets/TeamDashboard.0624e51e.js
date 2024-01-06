import { Q as QSelect } from "./QSelect.2cfdb3f1.js";
import { B as defineComponent, m as openBlock, a9 as createBlock, K as withCtx, l as createVNode, L as QCardSection, ab as createTextVNode, n as createElementBlock, F as Fragment, aa as renderList, q as createBaseVNode, ac as toDisplayString, Q as QCard, z as createCommentVNode, g as computed, r as ref, i as inject, R as unref, M as QInput, P as QBtn, ad as QCardActions, t as normalizeClass } from "./index.4a7ccaf8.js";
import { Q as QExpansionItem } from "./QExpansionItem.330a3dc8.js";
import { Q as QList } from "./QList.3acdb976.js";
import { _ as _imports_0 } from "./ndis_heart.0820b9e2.js";
import { _ as _sfc_main$2 } from "./GlobalNotes.4a3e8a2a.js";
import { u as useVuelidate, r as required } from "./index.esm.700e5cd9.js";
import { a as api } from "./axios.f96e4130.js";
import { e as doNotify } from "./help.a72f6e72.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { u as useMixinCommon } from "./common.cc3756d5.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6 } from "./PostcodeRegionField.c387b5e7.js";
import { _ as _sfc_main$3 } from "./DateField.d54a537a.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.5f64db8e.js";
import "./QItemLabel.d059fb8c.js";
import "./QMenu.029e863a.js";
import "./selection.f84380d5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSlideTransition.fd576707.js";
import "./QLinearProgress.3cd818af.js";
import "./QToolbarTitle.ac19d6d6.js";
import "./QToolbar.d87d2052.js";
import "./UserAvatar.dee49d79.js";
import "./use-ratio.46c450f4.js";
import "./security.97e7029f.js";
import "./common.f226b23f.js";
import "./QDate.bc427825.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.4281656e.js";
import "./QPopupProxy.d9a1dfaf.js";
import "./use-quasar.39c4e8ba.js";
const _hoisted_1$1 = { class: "text-bold" };
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
              createVNode(QList, { separator: "" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.errors.$silentErrors, (e, index) => {
                    return openBlock(), createBlock(QItem, {
                      key: index,
                      class: "q-pl-none"
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_1$1, "Field: " + toDisplayString(fieldLabel(e.$property)), 1),
                            createBaseVNode("div", null, toDisplayString(e.$message), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
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
const _hoisted_10 = { class: "col-xs-12" };
const _hoisted_11 = { class: "row q-col-gutter-sm" };
const _hoisted_12 = { class: "col-xs-12 col-sm-6" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  style: { "height": "32px" }
}, null, -1);
const _hoisted_14 = { class: "col-xs-12 col-sm-6" };
const _hoisted_15 = { class: "col-xs-12 col-sm-6" };
const _hoisted_16 = { class: "col-xs-12 col-sm-6" };
const _hoisted_17 = { class: "col-xs-12 col-sm-6" };
const _hoisted_18 = { class: "col-xs-12 col-sm-6" };
const _hoisted_19 = { key: 0 };
const _hoisted_20 = { key: 1 };
const _hoisted_21 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_22 = { class: "col-xs-12 col-sm-6" };
const _hoisted_23 = { class: "col-xs-12 col-sm-6" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamDashboard",
  props: {
    model: null
  },
  setup(__props) {
    const props = __props;
    const localModel = computed(() => props.model);
    const loading = ref(false);
    const isEditLocked = ref(true);
    const bus = inject("bus");
    const common = useMixinCommon();
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
      mobile: { required },
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
    const cancelEdit = () => {
      bus.emit("getTeam");
      isEditLocked.value = true;
    };
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
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
                        var _a;
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
                                label: "Mobile",
                                outlined: "",
                                disable: isEditLocked.value,
                                mask: ((_a = unref(common)) == null ? void 0 : _a.operating_country) === "aud" ? "#### ### ###" : "",
                                "unmasked-value": ""
                              }, null, 8, ["modelValue", "error", "disable", "mask"])
                            ]),
                            createBaseVNode("div", _hoisted_9, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).email,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(localModel).email = $event),
                                label: "Email",
                                outlined: "",
                                disable: "",
                                "bottom-slots": ""
                              }, null, 8, ["modelValue"])
                            ]),
                            createBaseVNode("div", _hoisted_10, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).name,
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(localModel).name = $event),
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
                          onClick: _cache[7] || (_cache[7] = ($event) => cancelEdit()),
                          label: "Cancel",
                          flat: "",
                          color: "secondary",
                          rounded: ""
                        }),
                        createVNode(QBtn, {
                          onClick: _cache[8] || (_cache[8] = ($event) => save()),
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
                        createBaseVNode("div", _hoisted_11, [
                          createBaseVNode("div", _hoisted_12, [
                            createVNode(QInput, {
                              modelValue: unref(localModel).ndis_number,
                              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(localModel).ndis_number = $event),
                              disable: "",
                              label: _ctx.$t("team.ndisNumber"),
                              outlined: "",
                              "bottom-slots": ""
                            }, {
                              prepend: withCtx(() => [
                                _hoisted_13
                              ]),
                              _: 1
                            }, 8, ["modelValue", "label"])
                          ]),
                          createBaseVNode("div", _hoisted_14, [
                            createVNode(QSelect, {
                              modelValue: unref(localModel).ndis_type,
                              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(localModel).ndis_type = $event),
                              label: _ctx.$t("team.ndisType"),
                              outlined: "",
                              "bottom-slots": "",
                              options: ["Self managed", "Plan managed", "NDIA registered"],
                              disable: ""
                            }, null, 8, ["modelValue", "label"])
                          ]),
                          createBaseVNode("div", _hoisted_15, [
                            createVNode(QInput, {
                              modelValue: unref(localModel).ndis_plan_manager_email,
                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(localModel).ndis_plan_manager_email = $event),
                              label: _ctx.$t("team.ndisPlanManagerEmail"),
                              "bottom-slots": "",
                              disable: "",
                              outlined: ""
                            }, null, 8, ["modelValue", "label"])
                          ]),
                          createBaseVNode("div", _hoisted_16, [
                            createVNode(QInput, {
                              modelValue: unref(localModel).ndis_support_coordinator_email,
                              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(localModel).ndis_support_coordinator_email = $event),
                              label: _ctx.$t("team.ndisSupportCoordinatorEmail"),
                              "bottom-slots": "",
                              disable: "",
                              outlined: ""
                            }, null, 8, ["modelValue", "label"])
                          ]),
                          createBaseVNode("div", _hoisted_17, [
                            createVNode(_sfc_main$3, {
                              modelValue: unref(localModel).ndis_plan_start,
                              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(localModel).ndis_plan_start = $event),
                              label: _ctx.$t("team.ndisPlanStart"),
                              outlined: "",
                              disable: true,
                              "bottom-slots": ""
                            }, null, 8, ["modelValue", "label"])
                          ]),
                          createBaseVNode("div", _hoisted_18, [
                            createVNode(_sfc_main$3, {
                              modelValue: unref(localModel).ndis_plan_end,
                              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(localModel).ndis_plan_end = $event),
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
                        isEditLocked.value ? (openBlock(), createElementBlock("p", _hoisted_19, [
                          createBaseVNode("a", {
                            onClick: _cache[15] || (_cache[15] = ($event) => isEditLocked.value = false),
                            class: "link"
                          }, "Click here"),
                          createTextVNode(" to unlock the customer pickup address and make changes. ")
                        ])) : createCommentVNode("", true),
                        !isEditLocked.value ? (openBlock(), createElementBlock("p", _hoisted_20, `Once you've finished updating the customer pickup address, click "UPDATE" to save the changes.`)) : createCommentVNode("", true),
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
                          "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(localModel).address1 = $event),
                          label: _ctx.$t("address.line1"),
                          "bottom-slots": "",
                          outlined: "",
                          disable: isEditLocked.value
                        }, null, 8, ["modelValue", "label", "disable"]),
                        createVNode(QInput, {
                          modelValue: unref(localModel).address2,
                          "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => unref(localModel).address2 = $event),
                          error: unref($v).address2.$invalid,
                          label: _ctx.$t("address.line2"),
                          outlined: "",
                          disable: isEditLocked.value
                        }, null, 8, ["modelValue", "error", "label", "disable"]),
                        createBaseVNode("div", _hoisted_21, [
                          createBaseVNode("div", _hoisted_22, [
                            createVNode(_sfc_main$5, {
                              modelValue: unref(localModel).suburb_postcode_region_id,
                              "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => unref(localModel).suburb_postcode_region_id = $event),
                              outlined: true,
                              invalid: unref($v).suburb_postcode_region_id.$invalid,
                              label: _ctx.$t("address.suburb"),
                              disable: isEditLocked.value,
                              clearable: true
                            }, null, 8, ["modelValue", "invalid", "label", "disable"])
                          ]),
                          createBaseVNode("div", _hoisted_23, [
                            createVNode(QInput, {
                              modelValue: unref(localModel).postcode,
                              "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => unref(localModel).postcode = $event),
                              label: _ctx.$t("address.postcode"),
                              disable: isEditLocked.value,
                              outlined: "",
                              error: unref($v).postcode.$invalid
                            }, null, 8, ["modelValue", "label", "disable", "error"])
                          ])
                        ]),
                        createVNode(_sfc_main$6, {
                          modelValue: unref(localModel).country_id,
                          "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => unref(localModel).country_id = $event),
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
                          onClick: _cache[21] || (_cache[21] = ($event) => cancelEdit()),
                          label: "Cancel",
                          flat: "",
                          color: "secondary",
                          rounded: ""
                        }),
                        createVNode(QBtn, {
                          onClick: _cache[22] || (_cache[22] = ($event) => save()),
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
            }, 8, ["class", "icon"])
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
