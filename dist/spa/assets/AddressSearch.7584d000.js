import { A as defineComponent, r as ref, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, u as normalizeProps, aH as guardReactiveProps, R as createTextVNode, aI as toDisplayString } from "./index.15e87dfc.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.a02f1455.js";
import { Q as QItemLabel } from "./rtl.4502dde4.js";
import { Q as QSelect } from "./QSelect.4af781f0.js";
import { a as api } from "./axios.c48e86d7.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
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
  if (lat) {
    model[lat] = item.latitude;
  }
  if (lat) {
    model[lng] = item.longitude;
  }
  if (suburbPostcodeRegionId) {
    model[suburbPostcodeRegionId] = item.suburb_postcode_region_id;
  }
  if (countryId) {
    model[countryId] = item.country_id;
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
export { _sfc_main as _ };
