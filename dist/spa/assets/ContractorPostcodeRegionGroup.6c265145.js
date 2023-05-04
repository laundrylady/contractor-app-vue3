import { Q as QSpace } from "./QSpace.f9500acd.js";
import { A as defineComponent, r as ref, g as computed, w as watch, o as onMounted, J as resolveComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, l as createVNode, L as withCtx, O as QIcon, K as createBlock, aJ as QSpinner, y as createCommentVNode, U as unref, R as createTextVNode, F as Fragment, be as renderList, S as QBtn, aI as toDisplayString, B as reactive, i as inject, E as onBeforeUnmount, Q as QCard, G as withDirectives, bt as QSeparator, M as QCardSection, N as QInput, ae as QCardActions, aG as QDialog } from "./index.1b2f6b7e.js";
import { a as QTable, Q as QTd } from "./QTable.b80d5afb.js";
import { Q as QItemSection, a as QItem } from "./QItemSection.bdf28f31.js";
import { Q as QList } from "./QList.aae636d3.js";
import { Q as QMenu } from "./format.4a5cbd2a.js";
import { C as ClosePopup } from "./ClosePopup.66fb29ca.js";
import { a as api } from "./axios.628dc831.js";
import { _ as _sfc_main$5 } from "./PostcodeRegionDisplay.224ecbab.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { B as sortByKey, b as doNotify, x as getRowsPerPage, y as rowsPerPageOptions, z as setRowsPerPage, c as confirmDelete } from "./help.14444ed6.js";
import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.42d1dca5.js";
import { u as useVuelidate, r as required } from "./index.esm.54bf8258.js";
import { a as getCurrentLocation } from "./geolocation.4fc82757.js";
import { Q as QSelect } from "./QSelect.c293cd08.js";
import { Q as QBadge } from "./QBadge.4f0c8ced.js";
import "./QMarkupTable.a087714c.js";
import "./QLinearProgress.7eaf7b19.js";
import "./use-fullscreen.d71cfd11.js";
import "./rtl.fb394738.js";
const _hoisted_1$2 = { key: 0 };
const _hoisted_2$1 = { class: "row q-col-gutter-md" };
const _hoisted_3$1 = { class: "col-xs-12 col-sm-8" };
const _hoisted_4$1 = { class: "row q-col-gutter-md" };
const _hoisted_5 = { class: "col-xs-12 col-sm-6" };
const _hoisted_6 = { class: "col-xs-12 col-sm-6" };
const _hoisted_7 = {
  key: 0,
  class: "q-pt-sm q-pb-sm"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", { class: "text-bold" }, "Suggestions:", -1);
const _hoisted_9 = { key: 2 };
const _hoisted_10 = { class: "q-mt-md" };
const _hoisted_11 = { class: "col-xs-12 col-sm-4" };
const _hoisted_12 = { key: 0 };
const _hoisted_13 = {
  key: 1,
  style: { "max-height": "600px", "overflow-x": "none", "overflow-y": "auto" },
  class: "bg-grey-1 q-pa-sm"
};
const _hoisted_14 = { class: "text-bold" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PostcodeRegionMapField",
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
    state: null,
    latLng: null,
    zoom: null,
    showMap: { type: Boolean },
    suggestionId: null
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const showMap = ref(false);
    const selectedPostcodeRegionGroup = ref();
    const realZoom = ref();
    const mapRefMarker = ref();
    const googleObject = ref();
    const markers = ref([]);
    const center = ref();
    const loading = ref(false);
    const postcodeRegionGroups = ref();
    const suggestions = ref();
    const keyword = ref();
    const postcodes = ref();
    const logMap = (event) => {
      if (googleObject.value && !loading.value) {
        const geoCoder = new googleObject.value.maps.Geocoder();
        loading.value = true;
        geoCoder.geocode({
          latLng: event.latLng
        }, function(results, status) {
          if (status === "OK") {
            if (results[0]) {
              const suburb = results[0].address_components.find((o) => o.types.indexOf("locality") !== -1).long_name;
              const state = results[0].address_components.find((o) => o.types.indexOf("administrative_area_level_1") !== -1).short_name;
              if (suburb && state) {
                api.get(`/public/postcoderegion/index?keyword=${suburb}&state=${state}`).then((response) => {
                  if (response.data.length && (!props.modelValue || !props.modelValue.find((o) => o.id === response.data[0].id))) {
                    markers.value.push({ latLng: { lat: event.latLng.lat(), lng: event.latLng.lng() }, id: response.data[0].id });
                    updateModelValue({
                      id: response.data[0].id,
                      locality: response.data[0].locality,
                      state: response.data[0].state,
                      postcode: response.data[0].postcode,
                      lat: event.latLng.lat(),
                      lng: event.latLng.lng()
                    });
                  }
                  loading.value = false;
                }).catch((error) => {
                  useMixinDebug(error);
                  loading.value = false;
                });
              }
            }
          }
        });
      }
    };
    const updateModelValue = (postcodeRegion) => {
      let currentModelValue = JSON.parse(JSON.stringify(props.modelValue));
      if (currentModelValue) {
        currentModelValue.push({
          id: postcodeRegion.id,
          locality: postcodeRegion.locality,
          state: postcodeRegion.state,
          postcode: postcodeRegion.postcode,
          meta: {
            pivot_lat: postcodeRegion.lat,
            pivot_lng: postcodeRegion.lng
          }
        });
      } else {
        currentModelValue = [{
          id: postcodeRegion.id,
          locality: postcodeRegion.locality,
          state: postcodeRegion.state,
          postcode: postcodeRegion.postcode,
          meta: {
            pivot_lat: postcodeRegion.lat,
            pivot_lng: postcodeRegion.lng
          }
        }];
      }
      emits("update:modelValue", currentModelValue);
    };
    const removePostcodeRegion = (p) => {
      let currentModelValue = JSON.parse(JSON.stringify(props.modelValue));
      currentModelValue = currentModelValue.filter((o) => o.id !== p.id);
      markers.value = markers.value.filter((o) => o.id !== p.id);
      emits("update:modelValue", currentModelValue);
    };
    const loadFromGroup = () => {
      if (!selectedPostcodeRegionGroup.value) {
        return false;
      }
      for (const p of selectedPostcodeRegionGroup.value.postcoderegions) {
        if (!props.modelValue || !props.modelValue.find((o) => o.id === p.id)) {
          setTimeout(() => {
            updateModelValue({
              id: p.id,
              locality: p.locality,
              state: p.state,
              postcode: p.postcode,
              lat: p.meta.pivot_lat,
              lng: p.meta.pivot_lng
            });
            markers.value.push({ latLng: { lat: parseFloat(p.meta.pivot_lat), lng: parseFloat(p.meta.pivot_lng) }, id: p.id });
          }, 1);
        }
      }
      setTimeout(() => {
        if (markers.value) {
          center.value = markers.value[0].latLng;
        }
      }, 1);
      realZoom.value = 12;
    };
    const currentSuggestions = computed(() => {
      if (!suggestions.value || !suggestions.value.length || !props.modelValue) {
        return [];
      }
      const currentModelValue = JSON.parse(JSON.stringify(props.modelValue));
      const cmv = currentModelValue.map((o) => o.id);
      return suggestions.value.filter((o) => cmv.indexOf(o.id) === -1);
    });
    const addFromSuggestion = (p) => {
      if (!props.modelValue || !props.modelValue.find((o) => o.id === p.id)) {
        setTimeout(() => {
          updateModelValue({
            id: p.id,
            locality: p.locality,
            state: p.state,
            postcode: p.postcode,
            lat: p.lat,
            lng: p.long
          });
          markers.value.push({ latLng: { lat: parseFloat(p.lat), lng: parseFloat(p.long) }, id: p.id });
        }, 1);
      }
    };
    const addAllSuggestions = () => {
      for (const p of currentSuggestions.value) {
        if (!props.modelValue || !props.modelValue.find((o) => o.id === p.id)) {
          setTimeout(() => {
            updateModelValue({
              id: p.id,
              locality: p.locality,
              state: p.state,
              postcode: p.postcode,
              lat: p.lat,
              lng: p.long
            });
            markers.value.push({ latLng: { lat: parseFloat(p.lat), lng: parseFloat(p.long) }, id: p.id });
          }, 1);
        }
      }
    };
    watch(mapRefMarker, (googleMap) => {
      if (googleMap) {
        googleMap.$mapPromise.then(() => {
          googleObject.value = window.google;
        });
      }
    });
    watch(() => props.modelValue, (newVal) => {
      if ((!newVal || !newVal.length) && !markers.value) {
        markers.value = [];
      }
    });
    const filterPostcodes = (val, update) => {
      if (val.length < 2) {
        return;
      }
      loading.value = true;
      api.get(`/public/postcoderegion/index?keyword=${val}${props.state ? `&state=${props.state}` : ""}`).then((response) => {
        update(() => {
          postcodes.value = response.data.map((o) => {
            o.label = `${o.locality} (${o.state} ${o.postcode} - ${o.sa4})`;
            return o;
          });
          loading.value = false;
        });
      }).catch((error) => {
        loading.value = false;
        useMixinDebug(error);
      });
    };
    const selectKeywordPostcode = (p) => {
      if (!props.modelValue || !props.modelValue.find((o) => o.id === p.id)) {
        setTimeout(() => {
          updateModelValue({
            id: p.id,
            locality: p.locality,
            state: p.state,
            postcode: p.postcode,
            lat: p.lat,
            lng: p.long
          });
          markers.value.push({ latLng: { lat: parseFloat(p.lat), lng: parseFloat(p.long) }, id: p.id });
          center.value = { lat: parseFloat(p.lat), lng: parseFloat(p.long) };
        }, 1);
      }
      keyword.value = null;
    };
    onMounted(() => {
      showMap.value = props.showMap || false;
      realZoom.value = props.zoom || 11;
      center.value = props.latLng;
      api.get(`/postcoderegiongroup/index?state=${props.state || ""}`).then((response) => {
        postcodeRegionGroups.value = response.data;
      }).catch((error) => {
        useMixinDebug(error);
      });
      if (props.modelValue) {
        for (const p of props.modelValue) {
          markers.value.push({
            latLng: { lat: parseFloat(p.meta.pivot_lat), lng: parseFloat(p.meta.pivot_lng) },
            id: p.id
          });
          if (markers.value && markers.value.length) {
            center.value = markers.value[0].latLng;
            realZoom.value = 11;
          }
        }
      }
      if (props.suggestionId) {
        api.get(`/public/postcoderegion/localitiesbydc/${props.suggestionId}`).then((response) => {
          suggestions.value = response.data;
        }).catch((error) => {
          useMixinDebug(error);
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_GMapMarker = resolveComponent("GMapMarker");
      const _component_GMapMap = resolveComponent("GMapMap");
      return __props.latLng ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(QSelect, {
                  modelValue: selectedPostcodeRegionGroup.value,
                  "onUpdate:modelValue": [
                    _cache[0] || (_cache[0] = ($event) => selectedPostcodeRegionGroup.value = $event),
                    loadFromGroup
                  ],
                  options: postcodeRegionGroups.value,
                  "option-label": "name",
                  label: "Load from group",
                  outlined: "",
                  clearable: ""
                }, {
                  prepend: withCtx(() => [
                    createVNode(QIcon, { name: "place" })
                  ]),
                  _: 1
                }, 8, ["modelValue", "options"])
              ]),
              createBaseVNode("div", _hoisted_6, [
                createVNode(QSelect, {
                  label: "Search for a suburb",
                  modelValue: keyword.value,
                  "onUpdate:modelValue": [
                    _cache[1] || (_cache[1] = ($event) => keyword.value = $event),
                    selectKeywordPostcode
                  ],
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
                  outlined: "",
                  disable: __props.disabled,
                  "use-chips": "",
                  ref: "qSelectPostcodeRegion",
                  borderless: __props.borderless,
                  dense: __props.dense,
                  class: "q-pb-none",
                  filled: __props.filled,
                  loading: loading.value,
                  multiple: __props.multiple,
                  placeholder: __props.placeholder,
                  "option-label": "label"
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
                }, 8, ["modelValue", "options", "dark", "color", "error", "disable", "borderless", "dense", "filled", "loading", "multiple", "placeholder"])
              ])
            ]),
            unref(currentSuggestions).length ? (openBlock(), createElementBlock("div", _hoisted_7, [
              _hoisted_8,
              createTextVNode(),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(currentSuggestions), (c, ci) => {
                return openBlock(), createBlock(QBtn, {
                  outline: "",
                  size: "sm",
                  key: ci,
                  label: `${c.locality} (${c.state})`,
                  onClick: ($event) => addFromSuggestion(c),
                  class: "cursor-pointer q-mr-sm q-mb-sm",
                  color: "grey"
                }, null, 8, ["label", "onClick"]);
              }), 128)),
              createVNode(QBtn, {
                onClick: _cache[2] || (_cache[2] = ($event) => addAllSuggestions()),
                color: "primary",
                label: "Add all",
                icon: "add_circle",
                size: "sm",
                class: "q-mb-sm"
              })
            ])) : createCommentVNode("", true),
            __props.modelValue && __props.modelValue.length ? (openBlock(), createBlock(QBtn, {
              key: 1,
              onClick: _cache[3] || (_cache[3] = ($event) => showMap.value = !showMap.value),
              label: "Show map",
              color: "primary",
              flat: "",
              icon: "public"
            })) : createCommentVNode("", true),
            showMap.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
              createBaseVNode("p", _hoisted_10, [
                createVNode(QIcon, { name: "info" }),
                createTextVNode(" Click a suburb on the map to add it to the selected suburbs.")
              ]),
              createVNode(_component_GMapMap, {
                center: center.value,
                zoom: realZoom.value,
                "map-type-id": "terrain",
                style: { "width": "100%", "height": "450px" },
                ref_key: "mapRefMarker",
                ref: mapRefMarker,
                onClick: logMap
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(markers.value, (m, index) => {
                    return openBlock(), createBlock(_component_GMapMarker, {
                      position: m.latLng,
                      key: index,
                      clickable: true,
                      draggable: false,
                      onClick: _cache[4] || (_cache[4] = ($event) => center.value = __props.latLng)
                    }, null, 8, ["position"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["center", "zoom"])
            ])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_11, [
            !__props.modelValue || !__props.modelValue.length ? (openBlock(), createElementBlock("div", _hoisted_12, "No suburbs selected.")) : createCommentVNode("", true),
            __props.modelValue && __props.modelValue.length ? (openBlock(), createElementBlock("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, "Selected (" + toDisplayString(__props.modelValue.length) + "):", 1),
              createBaseVNode("div", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sortByKey)(__props.modelValue, "locality", "asc"), (p) => {
                  return openBlock(), createBlock(QBadge, {
                    label: `${p.locality} (${p.state} ${p.postcode})`,
                    key: p.id,
                    class: "q-mr-sm q-mb-sm",
                    color: "grey-2",
                    "text-color": "black"
                  }, {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        icon: "close",
                        onClick: ($event) => removePostcodeRegion(p),
                        size: "sm",
                        round: "",
                        dense: "",
                        flat: "",
                        class: "q-ml-xs"
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1032, ["label"]);
                }), 128))
              ])
            ])) : createCommentVNode("", true)
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UserPostcodeRegionGroupCreate",
  setup(__props) {
    const show = ref(false);
    const state = ref();
    const model = reactive({
      name: null,
      postcoderegions: null,
      user_id: null,
      approved: true
    });
    const loading = ref(false);
    const latLng = ref();
    const bus = inject("bus");
    const rules = {
      name: { required },
      postcoderegions: { required }
    };
    const $v = useVuelidate(rules, model);
    const save = () => {
      api.post("/userpostcoderegiongroup", model).then(() => {
        doNotify("positive", "Group created");
        bus.emit("userPostcodeRegionGroupLoadMore");
        Object.assign(model, {
          id: null,
          name: null,
          user_id: null
        });
        show.value = false;
        loading.value = false;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    onMounted(async () => {
      bus.on("newUserPostcodeRegionGroup", async (data) => {
        latLng.value = await getCurrentLocation();
        Object.assign(model, { name: null, postcoderegions: null, user_id: data.user_id });
        state.value = data.state;
        show.value = true;
      });
    });
    onBeforeUnmount(() => {
      bus.off("newUserPostcodeRegionGroup");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          createVNode(QCard, { class: "modal-lg" }, {
            default: withCtx(() => [
              createVNode(QToolbar, null, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("New " + toDisplayString(_ctx.$t("postcodeRegionGroup.name")), 1)
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
                  createVNode(QInput, {
                    modelValue: model.name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.name = $event),
                    label: "Name of the group",
                    error: unref($v).name.$invalid
                  }, null, 8, ["modelValue", "error"]),
                  latLng.value ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 0,
                    "lat-lng": latLng.value,
                    modelValue: model.postcoderegions,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.postcoderegions = $event),
                    "show-map": true,
                    state: state.value
                  }, null, 8, ["lat-lng", "modelValue", "state"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(QCardActions, { align: "right" }, {
                default: withCtx(() => [
                  withDirectives(createVNode(QBtn, {
                    label: "Cancel",
                    flat: "",
                    color: "secondary"
                  }, null, 512), [
                    [ClosePopup]
                  ]),
                  createVNode(QBtn, {
                    disable: loading.value || unref($v).$invalid,
                    label: "Save",
                    color: "primary",
                    onClick: _cache[2] || (_cache[2] = ($event) => save())
                  }, null, 8, ["disable"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UserPostcodeRegionGroupEdit",
  setup(__props) {
    const show = ref(false);
    const state = ref();
    const latLng = ref();
    const model = reactive({
      id: null,
      name: null,
      postcoderegions: null,
      approved: true
    });
    const loading = ref(false);
    const bus = inject("bus");
    const rules = {
      name: { required },
      postcoderegions: { required }
    };
    const $v = useVuelidate(rules, model);
    const save = () => {
      api.put(`/userpostcoderegiongroup/${model.id}`, model).then(() => {
        doNotify("positive", "Group updated");
        bus.emit("userPostcodeRegionGroupLoadMore");
        show.value = false;
        loading.value = false;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    onMounted(() => {
      bus.on("editUserPostcodeRegionGroup", async (data) => {
        state.value = data.state;
        api.get(`/userpostcoderegiongroup/${data.id}`).then((response) => {
          Object.assign(model, response.data);
          if (model.postcoderegions && model.postcoderegions[0]) {
            latLng.value = { lat: parseFloat(model.postcoderegions[0].meta.pivot_lat), lng: parseFloat(model.postcoderegions[0].meta.pivot_lng) };
          }
          show.value = true;
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    });
    onBeforeUnmount(() => {
      bus.off("editUserPostcodeRegionGroup");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          model.name ? (openBlock(), createBlock(QCard, {
            key: 0,
            class: "modal-lg"
          }, {
            default: withCtx(() => [
              createVNode(QToolbar, null, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(model.name), 1)
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
                  createVNode(QInput, {
                    modelValue: model.name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.name = $event),
                    label: "Name of the group",
                    error: unref($v).name.$invalid
                  }, null, 8, ["modelValue", "error"]),
                  latLng.value ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 0,
                    "lat-lng": latLng.value,
                    modelValue: model.postcoderegions,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.postcoderegions = $event),
                    zoom: 12,
                    "show-map": true
                  }, null, 8, ["lat-lng", "modelValue"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(QCardActions, { align: "right" }, {
                default: withCtx(() => [
                  withDirectives(createVNode(QBtn, {
                    label: "Cancel",
                    flat: "",
                    color: "secondary"
                  }, null, 512), [
                    [ClosePopup]
                  ]),
                  createVNode(QBtn, {
                    disable: loading.value || unref($v).$invalid,
                    label: "Update",
                    color: "primary",
                    onClick: _cache[2] || (_cache[2] = ($event) => save())
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
const _hoisted_1$1 = { class: "flex items-center q-mb-sm" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Pickup Locations", -1);
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "q-mt-sm" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserPostcodeRegionGroupManagement",
  props: {
    user: null
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const data = ref();
    const loading = ref(false);
    const search = reactive({ keyword: null });
    const columns = [{
      name: "name",
      label: "Name",
      align: "left",
      field: "name",
      sortable: true
    }, {
      label: "Actions",
      name: "actions",
      sortable: false,
      field: "actions"
    }];
    const serverPagination = ref({
      page: 1,
      rowsNumber: getRowsPerPage(),
      rowsPerPage: getRowsPerPage(),
      sortBy: "name",
      descending: false
    });
    const request = (qtProps = null) => {
      let page;
      let rowsPerPage;
      let sortBy;
      let descending;
      if (qtProps && qtProps.pagination) {
        page = qtProps.pagination.page;
        rowsPerPage = qtProps.pagination.rowsPerPage;
        sortBy = qtProps.pagination.sortBy;
        descending = qtProps.pagination.descending;
      } else {
        page = serverPagination.value.page;
        rowsPerPage = serverPagination.value.rowsPerPage;
        sortBy = serverPagination.value.sortBy;
        descending = serverPagination.value.descending;
      }
      loading.value = true;
      api.post(`/userpostcoderegiongroup/datatable/${page}/${props.user.id}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage,
        keyword: search.keyword
      }).then((response) => {
        data.value = response.data.rows;
        loading.value = false;
        setRowsPerPage(rowsPerPage);
        serverPagination.value.rowsNumber = response.data.total;
        serverPagination.value.page = page;
        serverPagination.value.rowsPerPage = rowsPerPage;
        serverPagination.value.sortBy = sortBy;
        serverPagination.value.descending = descending;
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    const deleteUserPostcodeRegionGroup = (id) => {
      confirmDelete("This will remove the postcode region group").onOk(() => {
        api.delete(`/userpostcoderegiongroup/${id}`).then(() => {
          request();
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    };
    const newUserPostcodeRegionGroup = () => {
      bus.emit("newUserPostcodeRegionGroup", { user_id: props.user.id, state: props.user.postcoderegionsuburb ? props.user.postcoderegionsuburb.state : null });
    };
    const editUserPostcodeRegionGroup = (id) => {
      bus.emit("editUserPostcodeRegionGroup", { id, state: props.user.postcoderegionsuburb ? props.user.postcoderegionsuburb.state : null });
    };
    onMounted(() => {
      bus.on("userPostcodeRegionGroupLoadMore", () => {
        request();
      });
      request();
    });
    onBeforeUnmount(() => {
      bus.off("userPostcodeRegionGroupLoadMore");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$3),
        createVNode(_sfc_main$2),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", null, [
            _hoisted_2,
            createBaseVNode("p", null, "Configure the pickup locations for this " + toDisplayString(_ctx.$t("contractor.name").toLowerCase()) + ".", 1)
          ]),
          createVNode(QSpace),
          createVNode(QBtn, {
            onClick: _cache[0] || (_cache[0] = ($event) => newUserPostcodeRegionGroup()),
            icon: "add",
            color: "primary",
            round: ""
          })
        ]),
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QTable, {
              rows: data.value,
              columns,
              "row-key": "id",
              filter: search.keyword,
              loading: loading.value,
              pagination: serverPagination.value,
              "onUpdate:pagination": _cache[2] || (_cache[2] = ($event) => serverPagination.value = $event),
              onRequest: request,
              flat: "",
              "wrap-cells": "",
              "rows-per-page-options": unref(rowsPerPageOptions)
            }, {
              "top-left": withCtx(() => [
                createVNode(QInput, {
                  modelValue: search.keyword,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => search.keyword = $event),
                  debounce: 500,
                  placeholder: "Keyword"
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, { name: "search" })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              "body-cell-name": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createBaseVNode("a", {
                      onClick: ($event) => editUserPostcodeRegionGroup(props2.row.id),
                      class: "link text-h6"
                    }, toDisplayString(props2.row.name), 9, _hoisted_3),
                    createBaseVNode("div", _hoisted_4, [
                      createVNode(_sfc_main$5, {
                        postcoderegions: props2.row.postcoderegions
                      }, null, 8, ["postcoderegions"])
                    ])
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-actions": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      flat: "",
                      icon: "more_vert"
                    }, {
                      default: withCtx(() => [
                        createVNode(QMenu, null, {
                          default: withCtx(() => [
                            createVNode(QList, null, {
                              default: withCtx(() => [
                                withDirectives((openBlock(), createBlock(QItem, {
                                  clickable: "",
                                  onClick: ($event) => editUserPostcodeRegionGroup(props2.row.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Edit record")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])), [
                                  [ClosePopup]
                                ]),
                                withDirectives((openBlock(), createBlock(QItem, {
                                  clickable: "",
                                  onClick: ($event) => deleteUserPostcodeRegionGroup(props2.row.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Delete")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])), [
                                  [ClosePopup]
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              _: 1
            }, 8, ["rows", "filter", "loading", "pagination", "rows-per-page-options"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorPostcodeRegionGroup",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, { user: __props.model }, null, 8, ["user"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
