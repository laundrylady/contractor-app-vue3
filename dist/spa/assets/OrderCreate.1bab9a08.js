import { a as QToolbarTitle, Q as QToolbar } from "./QToolbarTitle.6d0cd576.js";
import { Q as QSpace } from "./QSpace.b77f9c3c.js";
import { A as defineComponent, r as ref, o as onMounted, w as watch, l as openBlock, J as createBlock, K as withCtx, k as createVNode, N as QIcon, aI as QSpinner, y as createCommentVNode, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, t as normalizeProps, aF as guardReactiveProps, aG as createTextVNode, P as QBtn, F as Fragment, B as reactive, i as inject, E as onBeforeUnmount, R as unref, Q as QCard, G as withDirectives, bu as QSeparator, be as QCheckbox, bd as renderList, ai as QToggle, M as QInput, L as QCardSection, aa as QCardActions, aE as QDialog } from "./index.b831cb22.js";
import { Q as QSelect } from "./QSelect.9dc7a6c7.js";
import { C as ClosePopup } from "./ClosePopup.46405e5b.js";
import { u as useVuelidate, r as required } from "./index.esm.0b01738e.js";
import { a as api } from "./axios.68b9268b.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { h as hourBookingOptions, d as doNotify, a as categoryDisplay } from "./help.e6021a60.js";
import { u as useMixinSecurity } from "./security.a860f675.js";
import { p as productCategoriesVisibleBooking } from "./helpers.0e10a392.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.aa2b85bf.js";
import { _ as _sfc_main$4 } from "./DateField.347f0da2.js";
import { Q as QLinearProgress } from "./QLinearProgress.d46b9629.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.4ac56135.js";
import { Q as QItemLabel } from "./selection.4cb35218.js";
import { _ as _sfc_main$3 } from "./UserAvatar.2770df2a.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TeamField",
  props: {
    modelValue: null,
    status: null,
    invalid: { type: Boolean },
    label: null,
    dark: { type: Boolean },
    outlined: { type: Boolean },
    disabled: { type: Boolean },
    multiple: { type: Boolean },
    dense: { type: Boolean },
    borderless: { type: Boolean },
    filled: { type: Boolean },
    placeholder: null,
    nowatch: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const loading = ref(false);
    const teams = ref();
    const handleChange = (val) => {
      emits("update:modelValue", val);
    };
    const filterTeams = (val, update) => {
      if (val.length < 2) {
        return;
      }
      loading.value = true;
      api.post(`/public/team/index?status=${props.status}`, { keyword: val }).then((response) => {
        update(() => {
          teams.value = response.data.map((o) => {
            return { value: o.id, label: o.name };
          });
          loading.value = false;
        });
      }).catch((error) => {
        loading.value = false;
        useMixinDebug(error);
      });
    };
    onMounted(() => {
      if (props.modelValue && (Array.isArray(props.modelValue) && props.modelValue.length || !Array.isArray(props.modelValue))) {
        api.get(`/public/team/${props.modelValue}`).then((res) => {
          if (Array.isArray(res.data)) {
            teams.value = res.data.map((o) => {
              return { value: o.id, label: o.name };
            });
            loading.value = false;
          } else {
            teams.value = [{ value: res.data.id, label: res.data.name }];
            loading.value = false;
          }
        });
      }
    });
    watch(() => props.modelValue, (newVal, oldVal) => {
      if (!props.nowatch && newVal && newVal !== oldVal && (Array.isArray(newVal) && newVal.length || !Array.isArray(newVal))) {
        api.get(`/public/team/${newVal}`).then((res) => {
          teams.value = [{ value: res.data.id, label: res.data.name }];
        }).catch((error) => {
          useMixinDebug(error);
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QSelect, {
        label: __props.label,
        "model-value": __props.modelValue,
        "onUpdate:modelValue": handleChange,
        options: teams.value,
        onFilter: filterTeams,
        "use-input": "",
        "emit-value": "",
        "map-options": "",
        dark: __props.dark,
        color: __props.dark ? "white" : "",
        error: __props.invalid,
        "hide-dropdown-icon": "",
        "input-debounce": "350",
        autocomplete: "team-filter",
        outlined: __props.outlined,
        disable: __props.disabled,
        "use-chips": "",
        ref: "qSelectTeam",
        borderless: __props.borderless,
        dense: __props.dense,
        class: "q-pb-none",
        filled: __props.filled,
        loading: loading.value,
        multiple: __props.multiple,
        placeholder: __props.placeholder
      }, {
        prepend: withCtx(() => [
          createVNode(QIcon, {
            name: "group",
            color: "info"
          })
        ]),
        loading: withCtx(() => [
          loading.value ? (openBlock(), createBlock(QSpinner, { key: 0 })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["label", "model-value", "options", "dark", "color", "error", "outlined", "disable", "borderless", "dense", "filled", "loading", "multiple", "placeholder"]);
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  style: { "min-height": "100px" }
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "q-ml-sm q-mt-sm" }, "Finding available contractors...", -1);
const _hoisted_3$1 = { key: 1 };
const _hoisted_4$1 = { class: "text-h6 q-mb-xs" };
const _hoisted_5$1 = { key: 0 };
const _hoisted_6$1 = { key: 1 };
const _hoisted_7$1 = { key: 0 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderContractorManagement",
  props: {
    modelValue: null,
    team_id: null,
    scheduled_pickup_date: null,
    scheduled_pickup_time: null,
    productcategories: null,
    disabled: { type: Boolean },
    reassign: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const loadingContractors = ref(false);
    const tmpContractorUserId = ref();
    const contractors = ref();
    const findAvailableContractors = () => {
      loadingContractors.value = true;
      api.post("/team/availablecontractors", {
        team_id: props.team_id,
        scheduled_pickup_date: props.scheduled_pickup_date,
        scheduled_pickup_time: props.scheduled_pickup_time,
        productcategories: props.productcategories
      }).then((response) => {
        contractors.value = response.data;
        loadingContractors.value = false;
        if (tmpContractorUserId.value) {
          if (!response.data.find((o) => o.id === tmpContractorUserId.value)) {
            emits("update:modelValue", null);
            tmpContractorUserId.value = null;
          }
        }
      });
    };
    const emitUpdate = () => {
      emits("update:modelValue", tmpContractorUserId);
    };
    const reAssign = () => {
      tmpContractorUserId.value = null;
      emits("update:modelValue", null);
      findAvailableContractors();
    };
    onMounted(() => {
      tmpContractorUserId.value = null;
      if (props.modelValue) {
        api.get(`/user/${props.modelValue}`).then((response) => {
          contractors.value = [response.data];
          tmpContractorUserId.value = response.data.id;
        }).catch((error) => {
          useMixinDebug(error);
        });
      } else {
        findAvailableContractors();
      }
    });
    watch(() => props.scheduled_pickup_date, (newVal) => {
      if (newVal && props.scheduled_pickup_time) {
        findAvailableContractors();
      }
    });
    watch(() => props.scheduled_pickup_time, (newVal) => {
      if (newVal && props.scheduled_pickup_date) {
        findAvailableContractors();
      }
    });
    watch(() => props.productcategories, (newVal, oldVal) => {
      if (newVal && oldVal && JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
        findAvailableContractors();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        loadingContractors.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          loadingContractors.value ? (openBlock(), createBlock(QLinearProgress, {
            key: 0,
            indeterminate: ""
          })) : createCommentVNode("", true),
          _hoisted_2$1
        ])) : createCommentVNode("", true),
        contractors.value && !loadingContractors.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          createBaseVNode("div", _hoisted_4$1, [
            !__props.modelValue ? (openBlock(), createElementBlock("div", _hoisted_5$1, "Available " + toDisplayString(_ctx.$t("contractor.namePlural")) + " (" + toDisplayString(contractors.value.length) + ")", 1)) : createCommentVNode("", true),
            __props.modelValue ? (openBlock(), createElementBlock("div", _hoisted_6$1, "Assigned " + toDisplayString(_ctx.$t("contractor.name")), 1)) : createCommentVNode("", true)
          ]),
          createVNode(QSelect, {
            modelValue: tmpContractorUserId.value,
            "onUpdate:modelValue": [
              _cache[0] || (_cache[0] = ($event) => tmpContractorUserId.value = $event),
              _cache[1] || (_cache[1] = ($event) => emitUpdate())
            ],
            label: _ctx.$t("order.contractorUserId"),
            options: contractors.value.map((o) => {
              return { value: o.id, label: o.fullname, avatar: o.avatar, first_name: o.first_name, last_name: o.last_name, fullname: o.fullname };
            }),
            "map-options": "",
            "emit-value": "",
            outlined: "",
            disable: __props.disabled,
            outline: ""
          }, {
            option: withCtx((scope) => [
              createVNode(QItem, normalizeProps(guardReactiveProps(scope.itemProps)), {
                default: withCtx(() => [
                  createVNode(QItemSection, { side: "" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$3, {
                        user: {
                          id: scope.opt.value,
                          first_name: scope.opt.first_name,
                          last_name: scope.opt.last_name,
                          fullname: scope.opt.fullname,
                          avatar: scope.opt.avatar
                        }
                      }, null, 8, ["user"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(scope.opt.label), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1040)
            ]),
            "selected-item": withCtx((scope) => [
              createVNode(_sfc_main$3, {
                user: {
                  id: scope.opt.value,
                  first_name: scope.opt.first_name,
                  last_name: scope.opt.last_name,
                  fullname: scope.opt.fullname,
                  avatar: scope.opt.avatar
                },
                class: "q-mr-sm"
              }, null, 8, ["user"]),
              createTextVNode(" " + toDisplayString(scope.opt.label), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "label", "options", "disable"]),
          __props.reassign && __props.modelValue ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
            createVNode(QBtn, {
              flat: "",
              onClick: _cache[2] || (_cache[2] = ($event) => reAssign()),
              label: "Reassign",
              color: "primary",
              icon: "sync",
              rounded: ""
            })
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_2 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_3 = {
  key: 1,
  class: "q-mt-md"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Products", -1);
const _hoisted_5 = { class: "q-mr-sm" };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { key: 2 };
const _hoisted_8 = { class: "q-mt-md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderCreate",
  setup(__props) {
    const show = ref(false);
    const washingAndIroning = ref(false);
    const { user } = useMixinSecurity();
    const categories = ref();
    const schema = {
      team_id: null,
      contractor_user_id: null,
      scheduled_pickup_date: null,
      scheduled_pickup_time: null,
      special_instructions: null,
      status: "confirmed",
      recurring_order: false,
      recurring: null,
      products: [],
      productcategories: []
    };
    const model = reactive(JSON.parse(JSON.stringify(schema)));
    const loading = ref(false);
    const bus = inject("bus");
    const i8n = useI18n();
    const rules = {
      team_id: { required },
      scheduled_pickup_date: { required },
      scheduled_pickup_time: { required },
      status: { required }
    };
    const $v = useVuelidate(rules, model);
    const toggleWashingAndIroning = () => {
      model.productcategories.forEach((o) => {
        o.active = washingAndIroning.value;
      });
    };
    const save = () => {
      api.post("/public/order", model).then(() => {
        doNotify("positive", `${i8n.t("order.name")} created`);
        bus.emit("orderLoadMore");
        show.value = false;
        loading.value = false;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    onMounted(async () => {
      bus.on("newOrder", async () => {
        Object.assign(model, JSON.parse(JSON.stringify(schema)));
        categories.value = await productCategoriesVisibleBooking();
        for (const c of categories.value) {
          model.productcategories.push({ product_category_id: c.value, active: false });
        }
        show.value = true;
        washingAndIroning.value = false;
      });
    });
    onBeforeUnmount(() => {
      bus.off("newOrder");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          unref(user) ? (openBlock(), createBlock(QCard, {
            key: 0,
            class: "modal"
          }, {
            default: withCtx(() => [
              createVNode(QToolbar, { class: "bg-primary text-white" }, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("order.create")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QSpace),
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
              createVNode(QSeparator),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(_sfc_main$2, {
                      modelValue: model.team_id,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.team_id = $event),
                      label: _ctx.$t("team.name"),
                      status: "active",
                      class: "col-xs-12",
                      error: unref($v).team_id.$invalid
                    }, null, 8, ["modelValue", "label", "error"])
                  ]),
                  model.team_id ? (openBlock(), createElementBlock("div", _hoisted_2, [
                    createVNode(_sfc_main$4, {
                      modelValue: model.scheduled_pickup_date,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.scheduled_pickup_date = $event),
                      label: _ctx.$t("order.scheduledPickupDate"),
                      invalid: unref($v).scheduled_pickup_date.$invalid,
                      class: "col-xs-12 col-sm-6"
                    }, null, 8, ["modelValue", "label", "invalid"]),
                    createVNode(QSelect, {
                      modelValue: model.scheduled_pickup_time,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.scheduled_pickup_time = $event),
                      label: _ctx.$t("order.scheduledPickupTime"),
                      invalid: unref($v).scheduled_pickup_time,
                      options: unref(hourBookingOptions),
                      "emit-value": "",
                      "map-options": "",
                      class: "col-xs-12 col-sm-6"
                    }, null, 8, ["modelValue", "label", "invalid", "options"])
                  ])) : createCommentVNode("", true),
                  model.team_id && model.scheduled_pickup_date && model.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_3, [
                    _hoisted_4,
                    createBaseVNode("span", _hoisted_5, [
                      createVNode(QCheckbox, {
                        modelValue: washingAndIroning.value,
                        "onUpdate:modelValue": [
                          _cache[3] || (_cache[3] = ($event) => washingAndIroning.value = $event),
                          _cache[4] || (_cache[4] = ($event) => toggleWashingAndIroning())
                        ],
                        label: "Washing & Ironing"
                      }, null, 8, ["modelValue"])
                    ]),
                    !washingAndIroning.value ? (openBlock(), createElementBlock("span", _hoisted_6, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(model.productcategories, (c) => {
                        return openBlock(), createElementBlock("span", {
                          key: c.product_category_id,
                          class: "q-mr-sm"
                        }, [
                          createVNode(QCheckbox, {
                            modelValue: c.active,
                            "onUpdate:modelValue": ($event) => c.active = $event,
                            label: unref(categoryDisplay)(c.product_category_id, categories.value)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  model.team_id && model.scheduled_pickup_date && model.scheduled_pickup_time && model.productcategories && model.productcategories.filter((o) => o.active).length ? (openBlock(), createElementBlock("div", _hoisted_7, [
                    unref(user).role === "customer" ? (openBlock(), createBlock(_sfc_main$1, {
                      key: 0,
                      team_id: model.team_id,
                      scheduled_pickup_date: model.scheduled_pickup_date,
                      scheduled_pickup_time: model.scheduled_pickup_time,
                      modelValue: model.contractor_user_id,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.contractor_user_id = $event),
                      reassign: true,
                      productcategories: model.productcategories.filter((o) => o.active)
                    }, null, 8, ["team_id", "scheduled_pickup_date", "scheduled_pickup_time", "modelValue", "productcategories"])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_8, [
                      createVNode(QToggle, {
                        modelValue: model.recurring_order,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.recurring_order = $event),
                        label: _ctx.$t("order.recurring")
                      }, null, 8, ["modelValue", "label"]),
                      model.recurring_order ? (openBlock(), createBlock(QSelect, {
                        key: 0,
                        modelValue: model.recurring,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.recurring = $event),
                        label: _ctx.$t("order.recurringFrequency"),
                        options: ["Week", "Fortnite", "Month"]
                      }, null, 8, ["modelValue", "label"])) : createCommentVNode("", true)
                    ]),
                    createVNode(QInput, {
                      modelValue: model.special_instructions,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.special_instructions = $event),
                      label: "Special Instructions",
                      autogrow: "",
                      outlined: "",
                      class: "q-mt-md"
                    }, null, 8, ["modelValue"])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(QCardActions, { align: "right" }, {
                default: withCtx(() => [
                  withDirectives(createVNode(QBtn, {
                    label: "Cancel",
                    flat: "",
                    color: "secondary",
                    rounded: ""
                  }, null, 512), [
                    [ClosePopup]
                  ]),
                  createVNode(QBtn, {
                    disable: loading.value || unref($v).$invalid || !model.productcategories.filter((o) => o.active).length,
                    label: "Save",
                    color: "primary",
                    onClick: _cache[9] || (_cache[9] = ($event) => save()),
                    rounded: ""
                  }, null, 8, ["disable"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export { _sfc_main as _, _sfc_main$2 as a };
