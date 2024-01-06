import { B as defineComponent, r as ref, o as onMounted, w as watch, m as openBlock, a9 as createBlock, K as withCtx, aN as QSpinner, z as createCommentVNode } from "./index.4a7ccaf8.js";
import { Q as QSelect } from "./QSelect.2cfdb3f1.js";
import { a as api } from "./axios.f96e4130.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
        ref: "qSelectTeam",
        borderless: __props.borderless,
        dense: __props.dense,
        class: "q-pb-none",
        filled: __props.filled,
        loading: loading.value,
        multiple: __props.multiple,
        placeholder: __props.placeholder
      }, {
        loading: withCtx(() => [
          loading.value ? (openBlock(), createBlock(QSpinner, { key: 0 })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["label", "model-value", "options", "dark", "color", "error", "outlined", "disable", "borderless", "dense", "filled", "loading", "multiple", "placeholder"]);
    };
  }
});
export { _sfc_main as _ };
