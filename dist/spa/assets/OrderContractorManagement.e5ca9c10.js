import { A as defineComponent, r as ref, o as onMounted, w as watch, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, aJ as QSpinner, y as createCommentVNode, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, u as normalizeProps, aH as guardReactiveProps, R as createTextVNode, S as QBtn, F as Fragment } from "./index.743d7681.js";
import { Q as QSelect } from "./QSelect.dbc7f1c3.js";
import { a as api } from "./axios.67dbaacc.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { Q as QLinearProgress } from "./QLinearProgress.b1cba332.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.d4f7e02a.js";
import { Q as QItemLabel } from "./rtl.e9486434.js";
import { _ as _sfc_main$2 } from "./UserAvatar.992447d7.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      api.post(`/team/index?status=${props.status}`, { keyword: val }).then((response) => {
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
        api.get(`/team/${props.modelValue}`).then((res) => {
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
        api.get(`/team/${newVal}`).then((res) => {
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
const _hoisted_1 = {
  key: 0,
  style: { "min-height": "100px" }
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "q-ml-sm q-mt-sm" }, "Finding available contractors...", -1);
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "text-h6 q-mb-xs" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
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
        loadingContractors.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          loadingContractors.value ? (openBlock(), createBlock(QLinearProgress, {
            key: 0,
            indeterminate: ""
          })) : createCommentVNode("", true),
          _hoisted_2
        ])) : createCommentVNode("", true),
        contractors.value && !loadingContractors.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            !__props.modelValue ? (openBlock(), createElementBlock("div", _hoisted_5, "Available " + toDisplayString(_ctx.$t("contractor.namePlural")) + " (" + toDisplayString(contractors.value.length) + ")", 1)) : createCommentVNode("", true),
            __props.modelValue ? (openBlock(), createElementBlock("div", _hoisted_6, "Assigned " + toDisplayString(_ctx.$t("contractor.name")), 1)) : createCommentVNode("", true)
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
                      createVNode(_sfc_main$2, {
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
              createVNode(_sfc_main$2, {
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
          __props.reassign && __props.modelValue ? (openBlock(), createElementBlock("div", _hoisted_7, [
            createVNode(QBtn, {
              flat: "",
              onClick: _cache[2] || (_cache[2] = ($event) => reAssign()),
              label: "Reassign",
              color: "primary",
              icon: "sync"
            })
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export { _sfc_main$1 as _, _sfc_main as a };
