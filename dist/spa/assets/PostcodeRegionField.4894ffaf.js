import { A as defineComponent, r as ref, o as onMounted, w as watch, l as openBlock, J as createBlock, K as withCtx, k as createVNode, N as QIcon, aI as QSpinner, y as createCommentVNode } from "./index.b20dbd4f.js";
import { Q as QSelect } from "./QSelect.7a749a7a.js";
import { a as api } from "./axios.3b176db4.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostcodeRegionField",
  props: {
    modelValue: null,
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
    nowatch: { type: Boolean },
    state: null
  },
  emits: ["update:modelValue", "selectedLocation"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const loading = ref(false);
    const postcodes = ref();
    const handleChange = (val) => {
      emits("update:modelValue", val);
      const found = postcodes.value ? postcodes.value.find((o) => o.value === val) : null;
      emits("selectedLocation", found ? found.label : null);
    };
    const filterPostcodes = (val, update) => {
      if (val.length < 2) {
        return;
      }
      loading.value = true;
      api.get(`/public/postcoderegion/index?keyword=${val}${props.state ? `&state=${props.state}` : ""}`).then((response) => {
        update(() => {
          postcodes.value = response.data.map((o) => {
            return { value: o.id, label: `${o.locality} (${o.state} ${o.postcode})` };
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
        api.get(`/public/postcoderegion/${props.modelValue}`).then((res) => {
          if (Array.isArray(res.data)) {
            postcodes.value = res.data.map((o) => {
              return { value: o.id, label: `${o.locality} (${o.state} ${o.postcode})` };
            });
            loading.value = false;
          } else {
            postcodes.value = [{ value: res.data.id, label: `${res.data.locality} (${res.data.state} ${res.data.postcode})` }];
            loading.value = false;
          }
        });
      }
    });
    watch(() => props.modelValue, (newVal, oldVal) => {
      if (!props.nowatch && newVal && newVal !== oldVal && (Array.isArray(newVal) && newVal.length || !Array.isArray(newVal))) {
        api.get(`/public/postcoderegion/${newVal}`).then((res) => {
          postcodes.value = [{ value: res.data.id, label: `${res.data.locality} (${res.data.state} ${res.data.postcode})` }];
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
        options: postcodes.value,
        onFilter: filterPostcodes,
        "use-input": "",
        "emit-value": "",
        "map-options": "",
        dark: __props.dark,
        color: __props.dark ? "white" : "",
        error: __props.invalid,
        "hide-dropdown-icon": "",
        "input-debounce": "350",
        autocomplete: "postcode-filter",
        outlined: __props.outlined,
        disable: __props.disabled,
        ref: "qSelectPostcodeRegion",
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
            name: "place",
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
export { _sfc_main as _ };
