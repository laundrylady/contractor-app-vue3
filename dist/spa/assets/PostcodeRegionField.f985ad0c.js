import { A as defineComponent, r as ref, l as openBlock, J as createBlock, K as withCtx, k as createVNode, N as QIcon, t as normalizeProps, aF as guardReactiveProps, aG as createTextVNode, aH as toDisplayString, o as onMounted, w as watch, aI as QSpinner, y as createCommentVNode } from "./index.16fb3380.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.03ec3358.js";
import { Q as QItemLabel } from "./selection.84b02b1d.js";
import { Q as QSelect } from "./QSelect.7180a201.js";
import { a as api } from "./axios.fbeb5029.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
const addressPopulate = (item, model, address1, address2, suburbPostcodeRegionId, lat, lng, countryId) => {
  if (!model) {
    return;
  }
  if (item.flat_number && item.flat_number !== "") {
    if (item.flat_type) {
      model[address1] = item.flat_type;
    }
    model[address1] = model[address1] ? `${model[address1]} ${item.flat_number_prefix || ""}${item.flat_number}${item.flat_number_suffix || ""}` : `${item.flat_number_prefix || ""}${item.flat_number}${item.flat_number_suffix || ""}`;
  } else {
    model[address1] = "";
  }
  if (item.number_first && item.number_first !== "") {
    model[address2] = `${item.number_first_prefix || ""}${item.number_first}${item.number_first_suffix || ""}`;
    if (item.number_last) {
      model[address2] += `-${item.number_last_prefix || ""}${item.number_last}${item.number_last_suffix || ""}`;
    }
  } else {
    model[address2] = "";
  }
  if (item.street_name && item.street_name !== "") {
    model[address2] += " " + item.street_name;
  }
  if (item.street_type_code && item.street_type_code !== "") {
    model[address2] += " " + item.street_type_code;
  }
  if (lat && item.latitude) {
    model[lat] = parseFloat(item.latitude);
  }
  if (lng && item.longitude) {
    model[lng] = parseFloat(item.longitude);
  }
  if (suburbPostcodeRegionId) {
    model[suburbPostcodeRegionId] = item.suburb_postcode_region_id;
  }
  if (countryId) {
    model[countryId] = item.country_id;
  }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddressSearch",
  props: {
    model: null,
    addressfields: null,
    invalid: { type: Boolean },
    dark: { type: Boolean },
    outlined: { type: Boolean },
    disabled: { type: Boolean },
    multiple: { type: Boolean },
    dense: { type: Boolean },
    borderless: { type: Boolean },
    filled: { type: Boolean },
    placeholder: null
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const keyword = ref();
    const loading = ref(false);
    const addresses = ref();
    const handleChange = () => {
      addressPopulate(
        keyword.value,
        props.model,
        props.addressfields.address1,
        props.addressfields.address2,
        props.addressfields.suburb_postcode_region_id,
        props.addressfields.lat,
        props.addressfields.lng,
        props.addressfields.country_id
      );
      keyword.value = null;
      emits("update:modelValue", null);
    };
    const searchAddress = (val, update) => {
      if (val.length > 3) {
        loading.value = true;
        addresses.value = [{ unit_number: "Searching addresses..." }];
        api.post("/address", { address: val }).then((response) => {
          update(() => {
            addresses.value = response.data.data;
            loading.value = false;
          });
        }).catch((response) => {
          useMixinDebug(response);
          loading.value = false;
          return [];
        });
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QSelect, {
        modelValue: keyword.value,
        "onUpdate:modelValue": [
          _cache[0] || (_cache[0] = ($event) => keyword.value = $event),
          handleChange
        ],
        options: addresses.value,
        "use-input": "",
        placeholder: __props.placeholder,
        onFilter: searchAddress,
        "hide-dropdown-icon": "",
        "input-debounce": "200",
        autocomplete: "search-filter",
        class: "q-mb-sm",
        outlined: "",
        filled: __props.filled,
        dense: "",
        loading: loading.value
      }, {
        prepend: withCtx(() => [
          createVNode(QIcon, { name: "search" })
        ]),
        loading: withCtx(() => []),
        option: withCtx((scope) => [
          createVNode(QItem, normalizeProps(guardReactiveProps(scope.itemProps)), {
            default: withCtx(() => [
              createVNode(QItemSection, { avatar: "" }, {
                default: withCtx(() => [
                  createVNode(QIcon, { name: "place" })
                ]),
                _: 1
              }),
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QItemLabel, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(scope.opt.formatted), 1)
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
        _: 1
      }, 8, ["modelValue", "options", "placeholder", "filled", "loading"]);
    };
  }
});
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
export { _sfc_main$1 as _, _sfc_main as a };
