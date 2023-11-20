import { B as defineComponent, r as ref, g as computed, w as watch, o as onMounted, by as resolveComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, l as createVNode, L as withCtx, O as QIcon, K as createBlock, aJ as QSpinner, z as createCommentVNode, S as unref, ak as createTextVNode, F as Fragment, be as renderList, R as QBtn, aj as toDisplayString, C as reactive, i as inject, G as onBeforeUnmount, Q as QCard, H as withDirectives, bw as QSeparator, M as QCardSection, N as QInput, ab as QCardActions, aH as QDialog, al as QToggle, s as normalizeStyle } from "./index.d121ec5d.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.6d04f500.js";
import { Q as QTab } from "./QTab.b352695a.js";
import { Q as QTabs } from "./QTabs.6a65167b.js";
import { Q as QItemSection, a as QItem } from "./QItemSection.0262b439.js";
import { Q as QList } from "./QList.bf1f960c.js";
import { a as api, m as moment, h as hooks } from "./axios.25c40239.js";
import { _ as _sfc_main$8 } from "./PostcodeRegionDisplay.ca8509fe.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.1b4f081a.js";
import { Q as QSpace } from "./QSpace.584ebae6.js";
import { C as ClosePopup } from "./ClosePopup.fb2f9dc0.js";
import { u as useVuelidate, r as required } from "./index.esm.3119e6f0.js";
import { s as sortByKey, d as doNotify, j as hourOptions, a as categoryDisplay, l as dbDateDisplay, m as hourDisplay, c as confirmDelete } from "./help.a8cc6f8b.js";
import { a as getCurrentLocation } from "./geolocation.1ecb9e8a.js";
import { Q as QSelect } from "./QSelect.948a0151.js";
import { Q as QBadge } from "./QBadge.2ea68c47.js";
import { t as today, Q as QCalendarMonth } from "./index.esm.113dea1e.js";
import { a as productCategoriesVisibleCapacity } from "./helpers.ddf30248.js";
import { _ as _sfc_main$9 } from "./DateField.8b0e1d77.js";
import "./QResizeObserver.9c9cc614.js";
import "./rtl.b51694b1.js";
import "./common.49adcc22.js";
import "./common.6197ed53.js";
import "./QItemLabel.38ead7bb.js";
import "./QMenu.e4b54bdf.js";
import "./selection.111dbff5.js";
import "./format.3e32b8d9.js";
import "./QDate.5f477f11.js";
import "./use-cache.b0833c75.js";
import "./use-quasar.4e63e5fc.js";
const _hoisted_1$5 = { key: 0 };
const _hoisted_2$5 = { class: "row q-col-gutter-md" };
const _hoisted_3$3 = { class: "col-xs-12 col-sm-8" };
const _hoisted_4$3 = { class: "row q-col-gutter-md" };
const _hoisted_5$3 = { class: "col-xs-12 col-sm-6" };
const _hoisted_6$3 = { class: "col-xs-12 col-sm-6" };
const _hoisted_7$3 = {
  key: 0,
  class: "q-pt-sm q-pb-sm"
};
const _hoisted_8$3 = /* @__PURE__ */ createBaseVNode("span", { class: "text-bold" }, "Suggestions:", -1);
const _hoisted_9$3 = { key: 2 };
const _hoisted_10$2 = { class: "q-mt-md" };
const _hoisted_11$2 = { class: "col-xs-12 col-sm-4" };
const _hoisted_12$2 = { key: 0 };
const _hoisted_13$2 = {
  key: 1,
  style: { "max-height": "600px", "overflow-x": "none", "overflow-y": "auto" },
  class: "bg-grey-1 q-pa-sm"
};
const _hoisted_14 = { class: "text-bold" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
      return __props.latLng ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          createBaseVNode("div", _hoisted_3$3, [
            createBaseVNode("div", _hoisted_4$3, [
              createBaseVNode("div", _hoisted_5$3, [
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
              createBaseVNode("div", _hoisted_6$3, [
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
            unref(currentSuggestions).length ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
              _hoisted_8$3,
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
            showMap.value ? (openBlock(), createElementBlock("div", _hoisted_9$3, [
              createBaseVNode("p", _hoisted_10$2, [
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
          createBaseVNode("div", _hoisted_11$2, [
            !__props.modelValue || !__props.modelValue.length ? (openBlock(), createElementBlock("div", _hoisted_12$2, "No suburbs selected.")) : createCommentVNode("", true),
            __props.modelValue && __props.modelValue.length ? (openBlock(), createElementBlock("div", _hoisted_13$2, [
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
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
                  latLng.value ? (openBlock(), createBlock(_sfc_main$7, {
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
                    color: "secondary",
                    rounded: ""
                  }, null, 512), [
                    [ClosePopup]
                  ]),
                  createVNode(QBtn, {
                    disable: loading.value || unref($v).$invalid,
                    label: "Save",
                    color: "primary",
                    onClick: _cache[2] || (_cache[2] = ($event) => save()),
                    rounded: ""
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
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
                  latLng.value ? (openBlock(), createBlock(_sfc_main$7, {
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
                    color: "secondary",
                    rounded: ""
                  }, null, 512), [
                    [ClosePopup]
                  ]),
                  createVNode(QBtn, {
                    disable: loading.value || unref($v).$invalid,
                    label: "Update",
                    color: "primary",
                    onClick: _cache[2] || (_cache[2] = ($event) => save()),
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
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("div", { class: "flex items-center q-mb-sm" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "You pickup from the following locations. ")
], -1);
const _hoisted_2$4 = { class: "text-h6" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "UserPostcodeRegionGroupManagement",
  setup(__props) {
    const data = ref();
    const loading = ref(false);
    const request = () => {
      loading.value = true;
      api.get("/public/userpostcoderegiongroup/index").then((response) => {
        data.value = response.data;
        loading.value = false;
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    onMounted(() => {
      request();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(_sfc_main$6),
        createVNode(_sfc_main$5),
        _hoisted_1$4,
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QList, null, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(data.value, (d) => {
                  return openBlock(), createBlock(QItem, {
                    key: d.id
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", null, [
                            createBaseVNode("div", _hoisted_2$4, toDisplayString(d.name), 1),
                            createBaseVNode("div", null, [
                              createVNode(_sfc_main$8, {
                                postcoderegions: d.postcoderegions
                              }, null, 8, ["postcoderegions"])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "row q-col-gutter-md q-mb-lg" };
const _hoisted_2$3 = { class: "col-xs-12 col-sm-6" };
const _hoisted_3$2 = {
  key: 0,
  class: "text-negative"
};
const _hoisted_4$2 = { key: 1 };
const _hoisted_5$2 = { class: "row q-col-gutter-md" };
const _hoisted_6$2 = { class: "col-xs-12 col-sm-6" };
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Picking up between:", -1);
const _hoisted_8$2 = { class: "row q-col-gutter-md" };
const _hoisted_9$2 = { class: "col-xs-12 col-sm-6" };
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Capacity for this timeslot:", -1);
const _hoisted_11$1 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_12$1 = { key: 0 };
const _hoisted_13$1 = { class: "q-mt-lg text-right" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UserRosterScheduleCreate",
  setup(__props) {
    const bus = inject("bus");
    const show = ref(false);
    const categories = ref();
    const userpostcoderegiongroups = ref();
    const errors = ref();
    const loading = ref(false);
    const maxRoster = ref(false);
    const schema = {
      user_id: null,
      day: null,
      start_time: null,
      end_time: null,
      active: true,
      user_postcoderegion_group_id: null,
      capacity: { products: [] }
    };
    const newSchedule = reactive(JSON.parse(JSON.stringify(schema)));
    const rules = {
      day: { required },
      start_time: { required },
      end_time: { required },
      user_postcoderegion_group_id: { required }
    };
    const $v = useVuelidate(rules, newSchedule, { $scope: false });
    const addSchedule = () => {
      errors.value = false;
      loading.value = true;
      api.post("/public/userrosterschedule", newSchedule).then(() => {
        bus.emit("getSchedule");
        show.value = false;
        loading.value = false;
      }).catch((error) => {
        loading.value = false;
        errors.value = error.response.data;
        useMixinDebug(error);
      });
    };
    const endHourOptions = (hour) => {
      if (!hour) {
        return hourOptions;
      }
      return hourOptions.filter((o) => o.value > hour && o.value <= hour + 3);
    };
    const checkQty = (val) => {
      if (!val.qty) {
        val.qty = 0;
      }
    };
    const checkMaxRoster = () => {
      if (newSchedule.user_postcoderegion_group_id && newSchedule.day) {
        maxRoster.value = false;
        api.post("/public/userrosterschedule/checkday", { day: newSchedule.day, user_postcoderegion_group_id: newSchedule.user_postcoderegion_group_id }).then((response) => {
          if (parseFloat(response.data[0].count) > 1) {
            maxRoster.value = true;
          }
        }).catch((error) => {
          useMixinDebug(error);
        });
      }
    };
    onMounted(async () => {
      bus.on("newUserRosterSchedule", async () => {
        errors.value = null;
        categories.value = await productCategoriesVisibleCapacity();
        api.get("/public/userpostcoderegiongroup/index").then((response) => {
          userpostcoderegiongroups.value = response.data.map((o) => {
            return { value: o.id, label: o.name };
          });
        }).catch((error) => {
          useMixinDebug(error);
        });
        Object.assign(newSchedule, JSON.parse(JSON.stringify(schema)));
        for (const c of categories.value) {
          newSchedule.capacity.products.push({ product_category_id: c.value, qty: 0 });
        }
        newSchedule.day = moment().format("DD/MM/YYYY");
        show.value = true;
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          createVNode(QCard, { class: "modal" }, {
            default: withCtx(() => [
              createVNode(QToolbar, { class: "bg-primary text-white" }, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Add a new " + toDisplayString(_ctx.$t("roster.name")) + " entry", 1)
                    ]),
                    _: 1
                  }),
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
                  createBaseVNode("div", _hoisted_1$3, [
                    createVNode(QSelect, {
                      modelValue: newSchedule.user_postcoderegion_group_id,
                      "onUpdate:modelValue": [
                        _cache[0] || (_cache[0] = ($event) => newSchedule.user_postcoderegion_group_id = $event),
                        _cache[1] || (_cache[1] = ($event) => checkMaxRoster())
                      ],
                      label: "Select the pickup area",
                      options: userpostcoderegiongroups.value,
                      "map-options": "",
                      "emit-value": "",
                      error: unref($v).user_postcoderegion_group_id.$invalid,
                      filled: "",
                      class: "col-xs-12 col-sm-6"
                    }, null, 8, ["modelValue", "options", "error"]),
                    createBaseVNode("div", _hoisted_2$3, [
                      createVNode(_sfc_main$9, {
                        modelValue: newSchedule.day,
                        "onUpdate:modelValue": [
                          _cache[2] || (_cache[2] = ($event) => newSchedule.day = $event),
                          _cache[3] || (_cache[3] = ($event) => checkMaxRoster())
                        ],
                        label: "Date",
                        invalid: unref($v).day.$invalid,
                        outlined: true
                      }, null, 8, ["modelValue", "invalid"])
                    ])
                  ]),
                  maxRoster.value ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
                    createVNode(QIcon, { name: "warning" }),
                    createTextVNode(" You are only permitted 2 pickup slots in each area per day. Please choose a different pickup area or day.")
                  ])) : createCommentVNode("", true),
                  !maxRoster.value ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
                    createBaseVNode("div", _hoisted_5$2, [
                      createBaseVNode("div", _hoisted_6$2, [
                        _hoisted_7$2,
                        createBaseVNode("div", _hoisted_8$2, [
                          createVNode(QSelect, {
                            modelValue: newSchedule.start_time,
                            "onUpdate:modelValue": [
                              _cache[4] || (_cache[4] = ($event) => newSchedule.start_time = $event),
                              _cache[5] || (_cache[5] = ($event) => newSchedule.end_time = null)
                            ],
                            outlined: "",
                            dense: "",
                            options: unref(hourOptions),
                            "map-options": "",
                            "emit-value": "",
                            label: "Start Time",
                            "options-cover": "",
                            class: "col-xs-6",
                            error: unref($v).start_time.$invalid
                          }, null, 8, ["modelValue", "options", "error"]),
                          createVNode(QSelect, {
                            modelValue: newSchedule.end_time,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => newSchedule.end_time = $event),
                            outlined: "",
                            dense: "",
                            options: endHourOptions(newSchedule.start_time),
                            "map-options": "",
                            "emit-value": "",
                            label: "End Time",
                            "options-cover": "",
                            class: "col-xs-6",
                            error: unref($v).end_time.$invalid
                          }, null, 8, ["modelValue", "options", "error"])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_9$2, [
                        _hoisted_10$1,
                        newSchedule.capacity.products ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(newSchedule.capacity.products, (c, cindex) => {
                            return openBlock(), createElementBlock("div", {
                              key: cindex,
                              class: "col-xs-6"
                            }, [
                              createVNode(QInput, {
                                modelValue: c.qty,
                                "onUpdate:modelValue": ($event) => c.qty = $event,
                                outlined: "",
                                dense: "",
                                label: unref(categoryDisplay)(c.product_category_id, categories.value),
                                "options-cover": "",
                                onBlur: ($event) => checkQty(c),
                                class: "q-mb-md",
                                type: "number",
                                max: "10"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "onBlur"])
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    errors.value ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
                      createBaseVNode("ul", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(errors.value.errors, (e, index) => {
                          return openBlock(), createElementBlock("li", {
                            key: index,
                            class: "text-negative"
                          }, toDisplayString(e.message), 1);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_13$1, [
                      withDirectives(createVNode(QBtn, {
                        disable: loading.value,
                        label: "Cancel",
                        color: "secondary",
                        flat: "",
                        rounded: "",
                        class: "q-mr-xs"
                      }, null, 8, ["disable"]), [
                        [ClosePopup]
                      ]),
                      createVNode(QBtn, {
                        onClick: _cache[7] || (_cache[7] = ($event) => addSchedule()),
                        disable: unref($v).$invalid || loading.value,
                        icon: "add_circle",
                        label: "Add",
                        color: "primary",
                        loading: loading.value,
                        rounded: ""
                      }, null, 8, ["disable", "loading"])
                    ])
                  ])) : createCommentVNode("", true)
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
const _hoisted_1$2 = { class: "flex-shrink" };
const _hoisted_2$2 = { class: "row q-col-gutter-md" };
const _hoisted_3$1 = { class: "col-xs-12" };
const _hoisted_4$1 = { class: "q-mb-sm" };
const _hoisted_5$1 = { class: "row q-col-gutter-md" };
const _hoisted_6$1 = { class: "col-xs-12" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-sm" }, "Capacity for this timeslot:", -1);
const _hoisted_8$1 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_9$1 = { key: 0 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UserRosterScheduleEdit",
  setup(__props) {
    const show = ref(false);
    const model = reactive({
      id: null,
      day: null,
      start_time: null,
      end_time: null,
      active: true,
      user_id: null,
      user: null,
      user_postcoderegion_group_id: null,
      capacity: { products: [] }
    });
    const loading = ref(false);
    const categories = ref();
    const bus = inject("bus");
    const errors = ref();
    const rules = {
      user_postcoderegion_group_id: { required },
      day: { required },
      start_time: { required },
      end_time: { required }
    };
    const $v = useVuelidate(rules, model);
    const save = () => {
      errors.value = false;
      loading.value = true;
      api.put(`/public/userrosterschedule/${model.id}`, model).then(() => {
        doNotify("positive", "Schedule updated");
        bus.emit("getSchedule");
        show.value = false;
        loading.value = false;
      }).catch((error) => {
        loading.value = false;
        errors.value = error.response.data;
        useMixinDebug(error);
      });
    };
    const endHourOptions = (hour) => {
      if (!hour) {
        return hourOptions;
      }
      return hourOptions.filter((o) => o.value > hour && o.value <= hour + 3);
    };
    const checkQty = (val) => {
      if (!val.qty) {
        val.qty = 0;
      }
      if (parseFloat(val.qty) > 10) {
        val.qty = 10;
      }
    };
    onMounted(() => {
      bus.on("editUserRosterSchedule", async (id) => {
        categories.value = await productCategoriesVisibleCapacity();
        api.get(`/public/userrosterschedule/${id}`).then((response) => {
          Object.assign(model, response.data);
          show.value = true;
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    });
    onBeforeUnmount(() => {
      bus.off("editUserRosterSchedule");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          model.day && model.user ? (openBlock(), createBlock(QCard, {
            key: 0,
            class: "modal"
          }, {
            default: withCtx(() => [
              createVNode(QToolbar, { class: "bg-primary text-white" }, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(dbDateDisplay)(model.day, "dddd DD/MM/YYYY")), 1)
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_1$2, [
                    withDirectives(createVNode(QBtn, {
                      icon: "close",
                      flat: "",
                      round: "",
                      dense: ""
                    }, null, 512), [
                      [ClosePopup]
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(QSeparator),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$2, [
                    createBaseVNode("div", _hoisted_3$1, [
                      createBaseVNode("div", _hoisted_4$1, [
                        createTextVNode("Picking up from "),
                        model.postcoderegiongroup ? (openBlock(), createBlock(QBadge, {
                          key: 0,
                          label: model.postcoderegiongroup.name || "",
                          color: "grey"
                        }, null, 8, ["label"])) : createCommentVNode("", true),
                        createTextVNode(" between:")
                      ]),
                      createBaseVNode("div", _hoisted_5$1, [
                        createVNode(QSelect, {
                          modelValue: model.start_time,
                          "onUpdate:modelValue": [
                            _cache[0] || (_cache[0] = ($event) => model.start_time = $event),
                            _cache[1] || (_cache[1] = ($event) => model.end_time = null)
                          ],
                          outlined: "",
                          dense: "",
                          options: unref(hourOptions),
                          "map-options": "",
                          "emit-value": "",
                          label: "Start",
                          "options-cover": "",
                          class: "col-xs-6",
                          error: unref($v).start_time.$invalid
                        }, null, 8, ["modelValue", "options", "error"]),
                        createVNode(QSelect, {
                          modelValue: model.end_time,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.end_time = $event),
                          outlined: "",
                          dense: "",
                          options: endHourOptions(model.start_time),
                          "map-options": "",
                          "emit-value": "",
                          label: "End",
                          "options-cover": "",
                          class: "col-xs-6",
                          error: unref($v).end_time.$invalid
                        }, null, 8, ["modelValue", "options", "error"])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_6$1, [
                      _hoisted_7$1,
                      model.capacity.products ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(model.capacity.products, (c, cindex) => {
                          return openBlock(), createElementBlock("div", {
                            key: cindex,
                            class: "col-xs-6"
                          }, [
                            createVNode(QInput, {
                              modelValue: c.qty,
                              "onUpdate:modelValue": ($event) => c.qty = $event,
                              outlined: "",
                              dense: "",
                              label: unref(categoryDisplay)(c.product_category_id, categories.value),
                              "options-cover": "",
                              onBlur: ($event) => checkQty(c),
                              class: "q-mb-md"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "onBlur"])
                          ]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("div", null, [
                    createVNode(QToggle, {
                      modelValue: model.active,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.active = $event),
                      label: "I am available"
                    }, null, 8, ["modelValue"])
                  ]),
                  errors.value ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
                    createBaseVNode("ul", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(errors.value.errors, (e, index) => {
                        return openBlock(), createElementBlock("li", {
                          key: index,
                          class: "text-negative"
                        }, toDisplayString(e.message), 1);
                      }), 128))
                    ])
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
                    disable: loading.value || unref($v).$invalid,
                    label: "Update",
                    color: "primary",
                    onClick: _cache[4] || (_cache[4] = ($event) => save()),
                    rounded: "",
                    loading: loading.value
                  }, null, 8, ["disable", "loading"])
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
const _hoisted_1$1 = { class: "flex items-start no-wrap q-mb-md" };
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createTextVNode("You are scheduled to work on the days with an "),
  /* @__PURE__ */ createBaseVNode("span", { class: "text-positive" }, "active"),
  /* @__PURE__ */ createTextVNode(" timeslot")
], -1);
const _hoisted_3 = { class: "row q-col-gutter-md items-center q-mb-sm" };
const _hoisted_4 = { class: "col-xs-12 col-sm-6 text-h7" };
const _hoisted_5 = { calss: "col-xs-6 col-sm-3" };
const _hoisted_6 = { calss: "col-xs-6 col-sm-3" };
const _hoisted_7 = { style: { "overflow": "auto" } };
const _hoisted_8 = {
  key: 0,
  style: { "min-width": "1000px", "max-width": "100%" }
};
const _hoisted_9 = ["onMouseenter"];
const _hoisted_10 = {
  key: 0,
  style: { "display": "flex", "justify-content": "space-evenly", "flex-wrap": "wrap", "align-items": "center", "font-weight": "400", "font-size": "12px", "height": "auto" }
};
const _hoisted_11 = {
  key: 1,
  style: { "min-width": "1000px", "max-width": "100%" }
};
const _hoisted_12 = ["onMouseenter"];
const _hoisted_13 = { style: { "font-weight": "400", "font-size": "12px", "height": "auto" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserRosterScheduleManagement",
  setup(__props) {
    const bus = inject("bus");
    const schedule = ref();
    const loading = ref(false);
    const currentHover = ref();
    const calendarView = ref("month");
    const getSchedule = () => {
      loading.value = true;
      const start = hooks(selectedDate.value).subtract(1, "month").startOf("month").format("YYYY-MM-DD");
      const end = hooks(selectedDate.value).add(1, "month").endOf("month").format("YYYY-MM-DD");
      api.get(`/public/userrosterschedule/index?start=${start}&end=${end}`).then((response) => {
        schedule.value = response.data;
        loading.value = false;
      }).catch((error) => {
        useMixinDebug(error);
        loading.value = false;
      });
    };
    const selectedDate = ref(today());
    const calendarRef = ref();
    const selectedMonth = computed(() => {
      return hooks(selectedDate.value).format("MMMM YYYY");
    });
    const onToday = () => {
      if (calendarRef.value) {
        calendarRef.value.moveToToday();
        getSchedule();
      }
    };
    const onPrev = () => {
      if (calendarRef.value) {
        calendarRef.value.prev();
        getSchedule();
      }
    };
    const onNext = () => {
      if (calendarRef.value) {
        calendarRef.value.next();
        getSchedule();
      }
    };
    const eventsMap = computed(() => {
      const map = {};
      if (!schedule.value) {
        return map;
      }
      schedule.value.forEach((scheduleItem) => {
        const scheduleDate = hooks(scheduleItem.day).format("YYYY-MM-DD");
        if (!map[scheduleDate]) {
          map[scheduleDate] = [];
        }
        let timeStart = parseFloat(scheduleItem.start_time);
        if (timeStart < 10) {
          timeStart = `0${timeStart}`;
        }
        scheduleItem.time = `${timeStart}:00`;
        scheduleItem.duration = 60;
        map[scheduleDate].push(scheduleItem);
      });
      return map;
    });
    const getEvents = (timestamp) => {
      if (!schedule.value) {
        return [];
      }
      const events = schedule.value.filter((o) => o.day === timestamp.date);
      if (!events)
        return [];
      return events;
    };
    const hasEvents = (timestamp) => {
      if (!schedule.value) {
        return [];
      }
      return schedule.value.filter((o) => o.day === timestamp.date).length > 0;
    };
    const getWeekEvents = (dt) => {
      const events = eventsMap.value[dt.date] || [];
      if (events.length === 1) {
        events[0].side = "full";
      }
      return events;
    };
    const badgeStyles = (event, timeStartPos, timeDurationHeight, index) => {
      const s = {};
      if (timeStartPos) {
        s["margin-top"] = timeStartPos(event.time) + index * 20 + "px";
        s.height = "20px";
      }
      return s;
    };
    const editUserRosterSchedule = (id) => {
      bus.emit("editUserRosterSchedule", id);
    };
    const newUserRosterSchedule = () => {
      confirmDelete("This will create a new roster entry").onOk(() => {
        bus.emit("newUserRosterSchedule");
      });
    };
    onMounted(async () => {
      getSchedule();
      bus.on("getSchedule", () => {
        getSchedule();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getSchedule");
    });
    return (_ctx, _cache) => {
      const _component_q_calendar_day = resolveComponent("q-calendar-day");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_sfc_main$2),
        createVNode(_sfc_main$3),
        createBaseVNode("div", _hoisted_1$1, [
          _hoisted_2$1,
          createVNode(QSpace),
          createVNode(QBtn, {
            onClick: _cache[0] || (_cache[0] = ($event) => newUserRosterSchedule()),
            icon: "add",
            dense: "",
            color: "primary",
            round: ""
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, toDisplayString(unref(selectedMonth)), 1),
          !_ctx.$q.screen.xs ? (openBlock(), createBlock(QSpace, { key: 0 })) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_5, [
            createVNode(QSelect, {
              modelValue: calendarView.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => calendarView.value = $event),
              options: [{ label: "Week", value: "week" }, { label: "Month", value: "month" }],
              "emit-value": "",
              "map-options": "",
              dense: "",
              filled: "",
              label: "View",
              class: "q-mr-sm"
            }, null, 8, ["modelValue"])
          ]),
          _ctx.$q.screen.xs ? (openBlock(), createBlock(QSpace, { key: 1 })) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_6, [
            createVNode(QBtn, {
              onClick: _cache[2] || (_cache[2] = ($event) => onPrev()),
              icon: "chevron_left",
              color: "secondary",
              flat: "",
              dense: "",
              round: ""
            }),
            createVNode(QBtn, {
              onClick: _cache[3] || (_cache[3] = ($event) => onToday()),
              label: "Today",
              color: "secondary",
              flat: "",
              rounded: ""
            }),
            createVNode(QBtn, {
              onClick: _cache[4] || (_cache[4] = ($event) => onNext()),
              icon: "chevron_right",
              color: "secondary",
              flat: "",
              dense: "",
              round: ""
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          calendarView.value === "month" ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createVNode(unref(QCalendarMonth), {
              ref_key: "calendarRef",
              ref: calendarRef,
              modelValue: selectedDate.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => selectedDate.value = $event),
              weekdays: [1, 2, 3, 4, 5, 6, 0],
              hoverable: "",
              bordered: "",
              animated: "",
              "month-label-size": "md",
              "date-align": "right"
            }, {
              day: withCtx(({ scope }) => [
                createBaseVNode("div", {
                  onMouseenter: ($event) => currentHover.value = scope.timestamp.date,
                  style: { "height": "100%" }
                }, [
                  hasEvents(scope.timestamp) ? (openBlock(), createElementBlock("div", _hoisted_10, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(getEvents(scope.timestamp), (event) => {
                      return openBlock(), createBlock(QBadge, {
                        key: event.time,
                        label: `${unref(hourDisplay)(event.start_time)} - ${unref(hourDisplay)(event.end_time)}`,
                        class: "q-mb-xs cursor-pointer",
                        onClick: ($event) => editUserRosterSchedule(event.id),
                        color: event.active ? "positive" : "negative",
                        style: { "font-size": "10px", "min-height": "20px" }
                      }, null, 8, ["label", "onClick", "color"]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ], 40, _hoisted_9)
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])) : createCommentVNode("", true),
          calendarView.value === "week" ? (openBlock(), createElementBlock("div", _hoisted_11, [
            createVNode(_component_q_calendar_day, {
              ref_key: "calendarRef",
              ref: calendarRef,
              modelValue: selectedDate.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => selectedDate.value = $event),
              view: "week",
              animated: "",
              bordered: "",
              "transition-next": "slide-left",
              "transition-prev": "slide-right",
              "no-active-date": "",
              "interval-start": 6,
              "interval-height": "20",
              "interval-count": 18,
              weekdays: [1, 2, 3, 4, 5, 6, 0]
            }, {
              "day-body": withCtx(({ scope: { timestamp, timeStartPos, timeDurationHeight } }) => [
                createBaseVNode("div", {
                  onMouseenter: ($event) => currentHover.value = timestamp.date,
                  class: "order-event full-width"
                }, [
                  createBaseVNode("div", _hoisted_13, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(getWeekEvents(timestamp), (event, index) => {
                      return openBlock(), createBlock(QBadge, {
                        key: event.time,
                        label: `${unref(hourDisplay)(event.start_time)} - ${unref(hourDisplay)(event.end_time)}`,
                        class: "cursor-pointer full-width justify-center",
                        onClick: ($event) => editUserRosterSchedule(event.id),
                        color: event.active ? "positive" : "negative",
                        style: normalizeStyle([{ "font-size": "10px" }, badgeStyles(event, timeStartPos, timeDurationHeight, index)])
                      }, null, 8, ["label", "onClick", "color", "style"]);
                    }), 128))
                  ])
                ], 40, _hoisted_12)
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorSchedule",
  props: {
    model: null
  },
  setup(__props) {
    const currentTab = ref("schedule");
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        !_ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(QBreadcrumbs, { class: "q-mb-md" }, {
            separator: withCtx(() => [
              createVNode(QIcon, {
                size: "1.5em",
                name: "chevron_right"
              })
            ]),
            default: withCtx(() => [
              createVNode(QBreadcrumbsEl, {
                label: "Home",
                icon: "home",
                to: { name: "appDashboard" }
              }),
              createVNode(QBreadcrumbsEl, {
                label: "Profile",
                to: { name: "contractor-dashboard" }
              }),
              createVNode(QBreadcrumbsEl, { label: "Roster" })
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        createVNode(QTabs, {
          modelValue: currentTab.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentTab.value = $event),
          class: "q-mb-md",
          align: !_ctx.$q.screen.xs ? "left" : "center"
        }, {
          default: withCtx(() => [
            createVNode(QTab, {
              name: "schedule",
              label: _ctx.$t("roster.name")
            }, null, 8, ["label"]),
            createVNode(QTab, {
              name: "pickup",
              label: "Pickup Locations"
            })
          ]),
          _: 1
        }, 8, ["modelValue", "align"]),
        currentTab.value === "schedule" ? (openBlock(), createBlock(_sfc_main$1, {
          key: 1,
          user: __props.model
        }, null, 8, ["user"])) : createCommentVNode("", true),
        currentTab.value === "pickup" ? (openBlock(), createBlock(_sfc_main$4, {
          key: 2,
          user: __props.model
        }, null, 8, ["user"])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
