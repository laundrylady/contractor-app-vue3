import { Q as QSelect } from "./QSelect.7bdfa10c.js";
import { B as defineComponent, g as computed, r as ref, i as inject, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, L as QCardSection, q as createBaseVNode, ab as createTextVNode, R as unref, M as QInput, a9 as createBlock, P as QBtn, ad as QCardActions } from "./index.f1ef5c18.js";
import { Q as QExpansionItem } from "./QExpansionItem.812479e7.js";
import { Q as QList } from "./QList.33849463.js";
import { _ as _sfc_main$1 } from "./GlobalNotes.5107d13e.js";
import { u as useVuelidate, r as required } from "./index.esm.9e960064.js";
import { a as api } from "./axios.db6f0581.js";
import { e as doNotify } from "./help.1f3b93f2.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { u as useMixinCommon } from "./common.9533ce8d.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4 } from "./PostcodeRegionField.80d4bc7f.js";
import "./format.112b0b04.js";
import "./QItemLabel.cbfe5232.js";
import "./selection.96f195a3.js";
import "./rtl.b51694b1.js";
import "./QSlideTransition.c258a491.js";
import "./QLinearProgress.57baf78e.js";
import "./QToolbarTitle.db03bb45.js";
import "./QToolbar.44d65d37.js";
import "./UserAvatar.59b81abe.js";
import "./QImg.b20d2131.js";
import "./use-ratio.3cac2b4b.js";
import "./security.5527b994.js";
import "./common.828ff682.js";
const _hoisted_1 = {
  key: 0,
  class: "q-mt-md"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "row q-col-gutter-md" };
const _hoisted_5 = { class: "col-xs-12 col-sm-6" };
const _hoisted_6 = { class: "row q-col-gutter-md" };
const _hoisted_7 = { class: "col-xs-6" };
const _hoisted_8 = { class: "col-xs-6" };
const _hoisted_9 = { class: "row q-col-gutter-md" };
const _hoisted_10 = { class: "col-xs-12 col-sm-6" };
const _hoisted_11 = { class: "row q-col-gutter-md" };
const _hoisted_12 = { class: "col-xs-12" };
const _hoisted_13 = { key: 0 };
const _hoisted_14 = { key: 1 };
const _hoisted_15 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_16 = { class: "col-xs-12 col-sm-6" };
const _hoisted_17 = { class: "col-xs-12 col-sm-6" };
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
        createVNode(_sfc_main$1, {
          notable_id: __props.model.id,
          notable_type: "Team",
          nobox: true
        }, null, 8, ["notable_id"]),
        createVNode(QList, { class: "q-mt-lg" }, {
          default: withCtx(() => [
            createVNode(QExpansionItem, {
              label: "Customer Details",
              "header-class": "bg-grey-1 text-h6",
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
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_6, [
                            createBaseVNode("div", _hoisted_7, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).first_name,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(localModel).first_name = $event),
                                error: unref($v).first_name.$invalid,
                                label: "Contact First Name",
                                outlined: "",
                                disable: isEditLocked.value
                              }, null, 8, ["modelValue", "error", "disable"])
                            ]),
                            createBaseVNode("div", _hoisted_8, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).last_name,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(localModel).last_name = $event),
                                error: unref($v).last_name.$invalid,
                                label: "Contact Last Name",
                                outlined: "",
                                disable: isEditLocked.value
                              }, null, 8, ["modelValue", "error", "disable"])
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_9, [
                            createBaseVNode("div", _hoisted_10, [
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
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_11, [
                            createBaseVNode("div", _hoisted_12, [
                              createVNode(QInput, {
                                modelValue: unref(localModel).name,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(localModel).name = $event),
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
                          onClick: _cache[6] || (_cache[6] = ($event) => cancelEdit()),
                          label: "Cancel",
                          flat: "",
                          color: "secondary",
                          rounded: ""
                        }),
                        createVNode(QBtn, {
                          onClick: _cache[7] || (_cache[7] = ($event) => save()),
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
            createVNode(QExpansionItem, {
              label: "Pickup Address",
              "header-class": "bg-grey-1 text-h6",
              group: "customerDetails"
            }, {
              default: withCtx(() => [
                createVNode(QCard, null, {
                  default: withCtx(() => [
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        isEditLocked.value ? (openBlock(), createElementBlock("p", _hoisted_13, [
                          createBaseVNode("a", {
                            onClick: _cache[8] || (_cache[8] = ($event) => isEditLocked.value = false),
                            class: "link"
                          }, "Click here"),
                          createTextVNode(" to unlock the customer pickup address and make changes. ")
                        ])) : createCommentVNode("", true),
                        !isEditLocked.value ? (openBlock(), createElementBlock("p", _hoisted_14, `Once you've finished updating the customer pickup address, click "UPDATE" to save the changes.`)) : createCommentVNode("", true),
                        !isEditLocked.value ? (openBlock(), createBlock(_sfc_main$2, {
                          key: 2,
                          model: unref(localModel),
                          filled: true,
                          addressfields: { address1: "address1", address2: "address2", suburb_postcode_region_id: "suburb_postcode_region_id", lat: "lat", lng: "lng", country_id: "country_id", postcode: "postcode" },
                          placeholder: _ctx.$t("address.search")
                        }, null, 8, ["model", "placeholder"])) : createCommentVNode("", true),
                        createVNode(QInput, {
                          modelValue: unref(localModel).address1,
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(localModel).address1 = $event),
                          label: _ctx.$t("address.line1"),
                          "bottom-slots": "",
                          outlined: "",
                          disable: isEditLocked.value
                        }, null, 8, ["modelValue", "label", "disable"]),
                        createVNode(QInput, {
                          modelValue: unref(localModel).address2,
                          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(localModel).address2 = $event),
                          error: unref($v).address2.$invalid,
                          label: _ctx.$t("address.line2"),
                          outlined: "",
                          disable: isEditLocked.value
                        }, null, 8, ["modelValue", "error", "label", "disable"]),
                        createBaseVNode("div", _hoisted_15, [
                          createBaseVNode("div", _hoisted_16, [
                            createVNode(_sfc_main$3, {
                              modelValue: unref(localModel).suburb_postcode_region_id,
                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(localModel).suburb_postcode_region_id = $event),
                              outlined: true,
                              invalid: unref($v).suburb_postcode_region_id.$invalid,
                              label: _ctx.$t("address.suburb"),
                              disable: isEditLocked.value,
                              clearable: true
                            }, null, 8, ["modelValue", "invalid", "label", "disable"])
                          ]),
                          createBaseVNode("div", _hoisted_17, [
                            createVNode(QInput, {
                              modelValue: unref(localModel).postcode,
                              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(localModel).postcode = $event),
                              label: _ctx.$t("address.postcode"),
                              disable: isEditLocked.value,
                              outlined: ""
                            }, null, 8, ["modelValue", "label", "disable"])
                          ])
                        ]),
                        createVNode(_sfc_main$4, {
                          modelValue: unref(localModel).country_id,
                          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(localModel).country_id = $event),
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
                          onClick: _cache[14] || (_cache[14] = ($event) => cancelEdit()),
                          label: "Cancel",
                          flat: "",
                          color: "secondary",
                          rounded: ""
                        }),
                        createVNode(QBtn, {
                          onClick: _cache[15] || (_cache[15] = ($event) => save()),
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
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
