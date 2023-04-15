import { V as createComponent, E as onBeforeUnmount, h, H as Transition, A as defineComponent, r as ref, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, u as normalizeProps, bg as guardReactiveProps, R as createTextVNode, b8 as toDisplayString, o as onMounted, w as watch } from "./index.e647c85a.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.99659658.js";
import { Q as QItemLabel } from "./rtl.4f5e13e8.js";
import { Q as QSelect } from "./QSelect.853d535e.js";
import { a as api } from "./axios.ccd3a804.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
var QSlideTransition = createComponent({
  name: "QSlideTransition",
  props: {
    appear: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit }) {
    let animating = false, doneFn, element;
    let timer = null, timerFallback = null, animListener, lastEvent;
    function cleanup() {
      doneFn && doneFn();
      doneFn = null;
      animating = false;
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      if (timerFallback !== null) {
        clearTimeout(timerFallback);
        timerFallback = null;
      }
      element !== void 0 && element.removeEventListener("transitionend", animListener);
      animListener = null;
    }
    function begin(el, height, done) {
      if (height !== void 0) {
        el.style.height = `${height}px`;
      }
      el.style.transition = `height ${props.duration}ms cubic-bezier(.25, .8, .50, 1)`;
      animating = true;
      doneFn = done;
    }
    function end(el, event) {
      el.style.overflowY = null;
      el.style.height = null;
      el.style.transition = null;
      cleanup();
      event !== lastEvent && emit(event);
    }
    function onEnter(el, done) {
      let pos = 0;
      element = el;
      if (animating === true) {
        cleanup();
        pos = el.offsetHeight === el.scrollHeight ? 0 : void 0;
      } else {
        lastEvent = "hide";
        el.style.overflowY = "hidden";
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        timer = null;
        el.style.height = `${el.scrollHeight}px`;
        animListener = (evt) => {
          timerFallback = null;
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "show");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    function onLeave(el, done) {
      let pos;
      element = el;
      if (animating === true) {
        cleanup();
      } else {
        lastEvent = "show";
        el.style.overflowY = "hidden";
        pos = el.scrollHeight;
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        timer = null;
        el.style.height = 0;
        animListener = (evt) => {
          timerFallback = null;
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "hide");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    onBeforeUnmount(() => {
      animating === true && cleanup();
    });
    return () => h(Transition, {
      css: false,
      appear: props.appear,
      onEnter,
      onLeave
    }, slots.default);
  }
});
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
  __name: "CountryField",
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
    nowatch: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const loading = ref(false);
    const postcodes = ref();
    const handleChange = (val) => {
      emits("update:modelValue", val);
    };
    const filterCountries = (val, update) => {
      if (val.length < 2) {
        return;
      }
      loading.value = true;
      api.get(`/public/country/index?keyword=${val}`).then((response) => {
        update(() => {
          postcodes.value = response.data.map((o) => {
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
        api.get(`/public/country/${props.modelValue}`).then((res) => {
          if (Array.isArray(res.data)) {
            postcodes.value = res.data.map((o) => {
              return { value: o.id, label: o.name };
            });
            loading.value = false;
          } else {
            postcodes.value = [{ value: res.data.id, label: res.data.name }];
            loading.value = false;
          }
        });
      }
    });
    watch(() => props.modelValue, (newVal, oldVal) => {
      if (!props.nowatch && newVal && newVal !== oldVal && (Array.isArray(newVal) && newVal.length || !Array.isArray(newVal))) {
        api.get(`/public/country/${newVal}`).then((res) => {
          postcodes.value = [{ value: res.data.id, label: res.data.name }];
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
        onFilter: filterCountries,
        "use-input": "",
        "emit-value": "",
        "map-options": "",
        dark: __props.dark,
        color: __props.dark ? "white" : "",
        error: __props.invalid,
        "hide-dropdown-icon": "",
        "input-debounce": "350",
        autocomplete: "country-filter",
        outlined: __props.outlined,
        disable: __props.disabled,
        ref: "qSelectCountry",
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
            name: "language",
            color: "info"
          })
        ]),
        _: 1
      }, 8, ["label", "model-value", "options", "dark", "color", "error", "outlined", "disable", "borderless", "dense", "filled", "loading", "multiple", "placeholder"]);
    };
  }
});
export { QSlideTransition as Q, _sfc_main$1 as _, _sfc_main as a };
