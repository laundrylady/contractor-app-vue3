import { A as defineComponent, r as ref, o as onMounted, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon } from "./index.3eea7960.js";
import { Q as QSelect } from "./QSelect.1c9fa3ed.js";
import { g as getPostcodeRegionGroups } from "./geolocation.834d469e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostcodeRegionGroupField",
  props: {
    modelValue: null,
    label: null,
    outlined: { type: Boolean },
    dense: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "selectedLocation"],
  setup(__props, { emit: emits }) {
    const postcodeRegionGroups = ref();
    const filteredPostcodeRegionGroups = ref();
    const handleChange = (val) => {
      emits("update:modelValue", val);
      const found = filteredPostcodeRegionGroups.value ? filteredPostcodeRegionGroups.value.find((o) => o.value === val) : null;
      emits("selectedLocation", found ? found.label : null);
    };
    const filterPostcodeRegions = (val, update) => {
      if (val.length < 2) {
        return;
      }
      update(() => {
        var _a;
        filteredPostcodeRegionGroups.value = (_a = postcodeRegionGroups.value) == null ? void 0 : _a.filter((o) => o.label.toLowerCase().match(val.toLowerCase()));
      });
    };
    onMounted(async () => {
      postcodeRegionGroups.value = (await getPostcodeRegionGroups()).map((o) => {
        return { value: o.id, label: o.name };
      });
      filteredPostcodeRegionGroups.value = postcodeRegionGroups.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QSelect, {
        "model-value": __props.modelValue,
        label: __props.label,
        options: filteredPostcodeRegionGroups.value,
        outlined: __props.outlined,
        dense: __props.dense,
        disable: __props.disabled,
        "onUpdate:modelValue": handleChange,
        clearable: "",
        "use-input": "",
        "map-options": "",
        "emit-value": "",
        onFilter: filterPostcodeRegions
      }, {
        prepend: withCtx(() => [
          createVNode(QIcon, {
            name: "place",
            color: "info"
          })
        ]),
        loading: withCtx(() => []),
        _: 1
      }, 8, ["model-value", "label", "options", "outlined", "dense", "disable"]);
    };
  }
});
export { _sfc_main as _ };
