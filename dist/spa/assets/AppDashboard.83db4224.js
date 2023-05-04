import { V as createComponent, A as defineComponent, r as ref, B as reactive, o as onMounted, J as resolveComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, l as createVNode, L as withCtx, O as QIcon, S as QBtn, P as withKeys, N as QInput, y as createCommentVNode, K as createBlock, F as Fragment, be as renderList, i as inject, E as onBeforeUnmount, Q as QCard, R as createTextVNode, aI as toDisplayString, U as unref, G as withDirectives, M as QCardSection, ae as QCardActions, aG as QDialog } from "./index.1b2f6b7e.js";
import { Q as QBreadcrumbsEl, a as QBreadcrumbs } from "./QBreadcrumbs.8651d9da.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.bdf28f31.js";
import { Q as QList } from "./QList.aae636d3.js";
import { u as useTabProps, a as useTabEmits, b as useTab, Q as QTabs } from "./QTabs.a82cc133.js";
import { Q as QCircularProgress } from "./QCircularProgress.2cee26d6.js";
import { Q as QPage } from "./QPage.6bef978e.js";
import { a as api, h as hooks } from "./axios.628dc831.js";
import { u as useQuasar } from "./use-quasar.18695e7a.js";
import { Q as QBtnGroup } from "./QBtnGroup.68172a22.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { N as NoRecords } from "./NoRecords.2d434079.js";
import { _ as _sfc_main$4 } from "./PostcodeRegionGroupField.e28f3c64.js";
import { _ as _sfc_main$6 } from "./OrderListFormat.0be1796e.js";
import { _ as _sfc_main$7 } from "./UserAvatar.98c85d66.js";
import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.42d1dca5.js";
import { Q as QSpace } from "./QSpace.f9500acd.js";
import { C as ClosePopup } from "./ClosePopup.66fb29ca.js";
import { _, m as dayDisplay, n as hourDisplay, b as doNotify, l as fromNowTz } from "./help.14444ed6.js";
import { _ as _sfc_main$5 } from "./PostcodeRegionDisplay.224ecbab.js";
import "./QResizeObserver.bd75562a.js";
import "./rtl.fb394738.js";
import "./format.4a5cbd2a.js";
import "./QSelect.c293cd08.js";
import "./geolocation.4fc82757.js";
import "./StatusTag.b5a6adbd.js";
import "./QBadge.4f0c8ced.js";
import "./use-ratio.5ccb11f1.js";
var QTab = createComponent({
  name: "QTab",
  props: useTabProps,
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const { renderTab } = useTab(props, slots, emit);
    return () => renderTab("div");
  }
});
const _hoisted_1$3 = { class: "q-pb-sm" };
const _hoisted_2$3 = {
  key: 0,
  class: "q-pa-md text-center"
};
const _hoisted_3$3 = { style: { "height": "400px" } };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ContractorsMap",
  setup(__props) {
    const loading = ref(false);
    const data = ref();
    const keyword = ref();
    const markers = ref();
    const center = reactive({
      lat: -26.6851157,
      lng: 153.1074659
    });
    const infoWindowPos = ref();
    const currentMidx = ref(null);
    const infoOptions = reactive({
      content: "",
      pixelOffset: {
        width: 0,
        height: 0
      }
    });
    const getMarkers = () => {
      markers.value = [];
      data.value.forEach((obj) => {
        if (obj.lat && obj.lng) {
          markers.value.push({
            position: {
              lat: parseFloat(obj.lat),
              lng: parseFloat(obj.lng)
            },
            model: obj,
            infoText: obj.name
          });
        }
      });
      if (markers.value.length === 1) {
        Object.assign(center, markers.value[0].position);
      }
      loading.value = false;
    };
    const getInfoWindowContent = (marker) => {
      const html = `<div class="text-h5">${marker.model.fullname}</div><p>${marker.model.address2} ${marker.model.postcoderegionsuburb.locality} ${marker.model.postcoderegionsuburb.state} ${marker.model.postcoderegionsuburb.postcode}</p>`;
      return html;
    };
    const toggleInfoWindow = (marker, idx) => {
      infoWindowPos.value = marker.position;
      infoOptions.content = getInfoWindowContent(marker);
      currentMidx.value = idx;
    };
    const getContractors = () => {
      loading.value = true;
      api.post("/user/contractor/map", { keyword: keyword.value }).then((response) => {
        data.value = response.data;
        getMarkers();
      }).catch((error) => {
        useMixinDebug(error);
        loading.value = false;
      });
    };
    onMounted(() => {
      getContractors();
    });
    return (_ctx, _cache) => {
      const _component_GMapInfoWindow = resolveComponent("GMapInfoWindow");
      const _component_GMapMarker = resolveComponent("GMapMarker");
      const _component_GMapCluster = resolveComponent("GMapCluster");
      const _component_GMapMap = resolveComponent("GMapMap");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$3, [
          createVNode(QInput, {
            modelValue: keyword.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => keyword.value = $event),
            placeholder: "Keyword search",
            outlined: "",
            onKeydown: _cache[2] || (_cache[2] = withKeys(($event) => getContractors(), ["enter"])),
            dense: ""
          }, {
            prepend: withCtx(() => [
              createVNode(QIcon, { name: "search" })
            ]),
            append: withCtx(() => [
              createVNode(QBtnGroup, null, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    onClick: _cache[0] || (_cache[0] = ($event) => [keyword.value = null, getContractors()]),
                    label: "Reset",
                    size: "sm"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        (!data.value || !data.value.length) && !loading.value ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
          createVNode(NoRecords)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3$3, [
          markers.value && markers.value.length ? (openBlock(), createBlock(_component_GMapMap, {
            key: 0,
            center,
            zoom: 4,
            "map-type-id": "terrain",
            style: { "width": "100%", "height": "650px" },
            ref: "mapRef"
          }, {
            default: withCtx(() => [
              createVNode(_component_GMapCluster, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(markers.value, (m, index) => {
                    return openBlock(), createBlock(_component_GMapMarker, {
                      position: m.position,
                      clickable: true,
                      draggable: false,
                      onClick: ($event) => toggleInfoWindow(m, index),
                      key: index
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_GMapInfoWindow, {
                          options: infoOptions,
                          position: infoWindowPos.value,
                          opened: currentMidx.value === index
                        }, null, 8, ["options", "position", "opened"])
                      ]),
                      _: 2
                    }, 1032, ["position", "onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["center"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "q-pb-sm row q-col-gutter-md" };
const _hoisted_2$2 = { class: "col-xs-12 col-sm-4" };
const _hoisted_3$2 = { class: "col-xs-12 col-sm-6" };
const _hoisted_4$2 = { class: "col-xs-12 col-sm-2" };
const _hoisted_5$2 = {
  key: 0,
  class: "q-pa-md text-center"
};
const _hoisted_6$2 = { style: { "height": "400px" } };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CustomersMap",
  setup(__props) {
    const loading = ref(false);
    const data = ref();
    const search = reactive({ keyword: null, postcode_region_group_id: null });
    const markers = ref();
    const center = reactive({
      lat: -26.6851157,
      lng: 153.1074659
    });
    const infoWindowPos = ref();
    const currentMidx = ref();
    const infoOptions = reactive({
      content: "",
      pixelOffset: {
        width: 0,
        height: 0
      }
    });
    const getMarkers = () => {
      markers.value = [];
      data.value.forEach((obj) => {
        if (obj.lat && obj.lng) {
          markers.value.push({
            position: {
              lat: parseFloat(obj.lat),
              lng: parseFloat(obj.lng)
            },
            model: obj,
            infoText: obj.name
          });
        }
      });
      if (markers.value.length === 1) {
        Object.assign(center, markers.value[0].position);
      }
      loading.value = false;
    };
    const getInfoWindowContent = (marker) => {
      const html = `<div class="text-h5">${marker.model.name}</div><p>${marker.model.address2} ${marker.model.suburbpostcoderegion.locality} ${marker.model.suburbpostcoderegion.state} ${marker.model.suburbpostcoderegion.postcode}</p>`;
      return html;
    };
    const toggleInfoWindow = (marker, idx) => {
      infoWindowPos.value = marker.position;
      infoOptions.content = getInfoWindowContent(marker);
      currentMidx.value = idx;
    };
    const getCustomers = () => {
      loading.value = true;
      api.post("/team/map", { keyword: search.keyword, postcode_region_group_id: search.postcode_region_group_id }).then((response) => {
        data.value = response.data;
        getMarkers();
      }).catch((error) => {
        useMixinDebug(error);
        loading.value = false;
      });
    };
    return (_ctx, _cache) => {
      const _component_GMapInfoWindow = resolveComponent("GMapInfoWindow");
      const _component_GMapMarker = resolveComponent("GMapMarker");
      const _component_GMapCluster = resolveComponent("GMapCluster");
      const _component_GMapMap = resolveComponent("GMapMap");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2$2, [
            createVNode(QInput, {
              modelValue: search.keyword,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.keyword = $event),
              placeholder: "Keyword search",
              outlined: "",
              dense: "",
              clearable: ""
            }, {
              prepend: withCtx(() => [
                createVNode(QIcon, { name: "search" })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_3$2, [
            createVNode(_sfc_main$4, {
              modelValue: search.postcode_region_group_id,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => search.postcode_region_group_id = $event),
              label: "Choose an area",
              outlined: true,
              dense: true,
              class: "q-mb-md"
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_4$2, [
            createVNode(QBtn, {
              onClick: _cache[2] || (_cache[2] = ($event) => getCustomers()),
              icon: "search",
              color: "primary",
              disable: loading.value || !search.keyword && !search.postcode_region_group_id
            }, null, 8, ["disable"])
          ])
        ]),
        (!data.value || !data.value.length) && !loading.value ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
          createVNode(NoRecords)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_6$2, [
          markers.value && markers.value.length ? (openBlock(), createBlock(_component_GMapMap, {
            key: 0,
            center,
            zoom: 4,
            "map-type-id": "terrain",
            style: { "width": "100%", "height": "650px" },
            ref: "mapRef"
          }, {
            default: withCtx(() => [
              createVNode(_component_GMapCluster, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(markers.value, (m, index) => {
                    return openBlock(), createBlock(_component_GMapMarker, {
                      position: m.position,
                      clickable: true,
                      draggable: false,
                      onClick: ($event) => toggleInfoWindow(m, index),
                      key: index
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_GMapInfoWindow, {
                          options: infoOptions,
                          position: infoWindowPos.value,
                          opened: currentMidx.value === index
                        }, null, 8, ["options", "position", "opened"])
                      ]),
                      _: 2
                    }, 1032, ["position", "onClick"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["center"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "row q-col-gutter-md" };
const _hoisted_2$1 = { class: "col-xs-12 col-sm-6" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold q-mb-xs" }, "Current Suburbs to pickup from:", -1);
const _hoisted_4$1 = { class: "col-xs-12 col-sm-6" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold q-mb-xs" }, "New Suburbs to pickup from:", -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold q-mb-xs q-mt-md" }, "Changes", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UserRosterApprove",
  setup(__props) {
    const show = ref(false);
    const difference = ref();
    const model = reactive({
      id: null,
      day: null,
      start_time: null,
      end_time: null,
      active: true,
      user_id: null,
      user: null,
      postcoderegions: [],
      capacity: { products: [] },
      approved: false
    });
    const loading = ref(false);
    const bus = inject("bus");
    const save = (close) => {
      loading.value = true;
      api.put(`/userroster/approve/${model.id}`, model).then(() => {
        doNotify("positive", "Roster updated");
        bus.emit("getDashboardStats");
        if (close) {
          show.value = false;
        }
        loading.value = false;
      }).catch((error) => {
        loading.value = false;
        useMixinDebug(error);
      });
    };
    onMounted(() => {
      bus.on("approveRoster", async (id) => {
        api.get(`/userroster/${id}`).then((response) => {
          Object.assign(model, response.data);
          if (model.postcoderegions && model.postcoderegions_old) {
            difference.value = _.differenceBy(model.postcoderegions, model.postcoderegions_old, "id");
          }
          show.value = true;
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    });
    onBeforeUnmount(() => {
      bus.off("approveRoster");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          model.day && model.user && model.start_time && model.end_time ? (openBlock(), createBlock(QCard, {
            key: 0,
            class: "modal"
          }, {
            default: withCtx(() => [
              model.user ? (openBlock(), createBlock(QToolbar, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(model.user.fullname) + " - " + toDisplayString(unref(dayDisplay)(model.day)) + "s (" + toDisplayString(unref(hourDisplay)(model.start_time)) + " - " + toDisplayString(unref(hourDisplay)(model.end_time)) + ")", 1)
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
              })) : createCommentVNode("", true),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$1, [
                    createBaseVNode("div", _hoisted_2$1, [
                      _hoisted_3$1,
                      model.postcoderegions_old ? (openBlock(), createBlock(_sfc_main$5, {
                        key: 0,
                        postcoderegions: model.postcoderegions_old
                      }, null, 8, ["postcoderegions"])) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_4$1, [
                      _hoisted_5$1,
                      createVNode(_sfc_main$5, {
                        postcoderegions: model.postcoderegions
                      }, null, 8, ["postcoderegions"])
                    ])
                  ]),
                  _hoisted_6$1,
                  createVNode(_sfc_main$5, { postcoderegions: difference.value }, null, 8, ["postcoderegions"])
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
                    disable: loading.value,
                    label: "Approve",
                    color: "primary",
                    onClick: _cache[0] || (_cache[0] = ($event) => save(true)),
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
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h4 q-mb-xs q-mt-md" }, " Dashboard ", -1);
const _hoisted_2 = { class: "q-mt-lg" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Roster Location Changes", -1);
const _hoisted_4 = { class: "text-h7" };
const _hoisted_5 = {
  key: 1,
  class: "row q-col-gutter-md"
};
const _hoisted_6 = { class: "col-xs-12 col-sm-9" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md text-negative" }, "Unassigned", -1);
const _hoisted_8 = { class: "row q-col-gutter-md" };
const _hoisted_9 = { class: "col-xs-12 col-sm-12" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Recently Joined", -1);
const _hoisted_11 = { key: 0 };
const _hoisted_12 = { class: "col-xs-12 col-sm-12" };
const _hoisted_13 = { class: "text-h6 q-mb-md" };
const _hoisted_14 = { key: 0 };
const _hoisted_15 = { class: "col-xs-12 col-sm-3" };
const _hoisted_16 = {
  class: "text-bold q-mb-sm text-center",
  style: { "font-size": "15px" }
};
const _hoisted_17 = {
  key: 0,
  class: "row q-col-gutter-md q-mb-lg"
};
const _hoisted_18 = {
  key: 0,
  class: "text-center col-xs-12"
};
const _hoisted_19 = { class: "text-h6" };
const _hoisted_20 = { class: "row q-col-gutter-md" };
const _hoisted_21 = { class: "col-xs-12 col-sm-4" };
const _hoisted_22 = { class: "text-center" };
const _hoisted_23 = { class: "text-h5 text-bold" };
const _hoisted_24 = { class: "col-xs-12 col-sm-4" };
const _hoisted_25 = { class: "text-center" };
const _hoisted_26 = { class: "text-h5 text-bold" };
const _hoisted_27 = { class: "col-xs-12 col-sm-4" };
const _hoisted_28 = { class: "text-center" };
const _hoisted_29 = { class: "text-h5 text-bold" };
const _hoisted_30 = { class: "row q-col-gutter-md" };
const _hoisted_31 = { class: "col-xs-12 col-sm-6" };
const _hoisted_32 = { class: "text-center q-pt-md" };
const _hoisted_33 = { class: "q-pa-sm text-caption" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mt-sm" }, "Retained", -1);
const _hoisted_35 = { class: "col-xs-12 col-sm-6" };
const _hoisted_36 = { class: "text-center q-pt-md" };
const _hoisted_37 = { class: "q-pa-sm text-caption" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mt-sm" }, "Rebooked", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppDashboard",
  setup(__props) {
    const bus = inject("bus");
    const $q = useQuasar();
    const dashboard = ref();
    const landingData = ref();
    const loaded = ref(false);
    const currentTab = ref("orders");
    const currentDate = ref();
    const search = ref({ start: null, end: null });
    const getDashboardStats = () => {
      $q.loading.show({ message: "Fetching data..." });
      api.post("/user/dashboardstats?allFeed=true").then((response) => {
        dashboard.value = response.data;
        loaded.value = true;
        getLandingData();
      }).catch((response) => {
        useMixinDebug(response);
        loaded.value = true;
        $q.loading.hide();
      });
    };
    const getLandingData = () => {
      api.post("/user/contractor/landing", search.value).then((response) => {
        landingData.value = response.data;
        $q.loading.hide();
      }).catch((error) => {
        useMixinDebug(error);
        $q.loading.hide();
      });
    };
    const increaseWeek = () => {
      currentDate.value = currentDate.value.add(1, "weeks");
      search.value = { start: currentDate.value.startOf("isoWeek").format("DD/MM/YYYY"), end: currentDate.value.endOf("isoWeek").format("DD/MM/YYYY") };
      getDashboardStats();
    };
    const decreaseWeek = () => {
      currentDate.value = currentDate.value.subtract(1, "weeks");
      search.value = { start: currentDate.value.startOf("isoWeek").format("DD/MM/YYYY"), end: currentDate.value.endOf("isoWeek").format("DD/MM/YYYY") };
      getDashboardStats();
    };
    const approveRoster = (id) => {
      bus.emit("approveRoster", id);
    };
    onMounted(() => {
      currentDate.value = hooks();
      search.value = { start: currentDate.value.startOf("isoWeek").format("DD/MM/YYYY"), end: currentDate.value.endOf("isoWeek").format("DD/MM/YYYY") };
      getDashboardStats();
      bus.on("getDashboardStats", () => {
        getDashboardStats();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getDashboardStats");
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$1),
        dashboard.value ? (openBlock(), createBlock(QPage, {
          key: 0,
          padding: ""
        }, {
          default: withCtx(() => [
            createVNode(QBreadcrumbs, { class: "q-mt-md" }, {
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
                  to: { name: "dashboard" }
                })
              ]),
              _: 1
            }),
            _hoisted_1,
            createBaseVNode("div", _hoisted_2, [
              dashboard.value.rosterApprovals.length ? (openBlock(), createBlock(QCard, {
                key: 0,
                class: "bg-primary text-white q-mb-lg"
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _hoisted_3,
                      createVNode(QList, { separator: "" }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(dashboard.value.rosterApprovals, (r) => {
                            return openBlock(), createBlock(QItem, {
                              key: r.id,
                              clickable: "",
                              onClick: ($event) => approveRoster(r.id)
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_4, toDisplayString(r.user.fullname), 1),
                                    createBaseVNode("div", null, toDisplayString(unref(dayDisplay)(r.day)) + "s (" + toDisplayString(unref(hourDisplay)(r.start_time)) + " - " + toDisplayString(unref(hourDisplay)(r.end_time)) + ")", 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(QTabs, {
                modelValue: currentTab.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentTab.value = $event),
                align: "left",
                class: "q-mb-md"
              }, {
                default: withCtx(() => [
                  createVNode(QTab, {
                    name: "orders",
                    label: "Overview"
                  }),
                  createVNode(QTab, {
                    name: "contractors",
                    label: `${_ctx.$t("contractor.namePlural")} Map`
                  }, null, 8, ["label"]),
                  createVNode(QTab, {
                    name: "customers",
                    label: `${_ctx.$t("team.namePlural")} Map`
                  }, null, 8, ["label"])
                ]),
                _: 1
              }, 8, ["modelValue"]),
              currentTab.value === "orders" ? (openBlock(), createElementBlock("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  dashboard.value.unAssigned.length ? (openBlock(), createBlock(QCard, {
                    key: 0,
                    class: "bg-seamless q-mb-lg"
                  }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          _hoisted_7,
                          createVNode(_sfc_main$6, {
                            orders: dashboard.value.unAssigned
                          }, null, 8, ["orders"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      dashboard.value.newContractors.length ? (openBlock(), createBlock(QCard, {
                        key: 0,
                        class: "bg-seamless q-mb-lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(QCardSection, null, {
                            default: withCtx(() => [
                              _hoisted_10,
                              createVNode(QList, {
                                class: "bg-white",
                                separator: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(dashboard.value.newContractors, (c) => {
                                    return openBlock(), createBlock(QItem, {
                                      key: c.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(QItemSection, { avatar: "" }, {
                                          default: withCtx(() => [
                                            createVNode(_sfc_main$7, { user: c }, null, 8, ["user"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, null, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", null, [
                                              createVNode(_component_router_link, {
                                                to: { name: "contractor-dashboard", params: { id: c.id } },
                                                class: "link text-h6"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(c.fullname), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["to"]),
                                              c.postcoderegionsuburb ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString(c.postcoderegionsuburb.locality) + " " + toDisplayString(c.postcoderegionsuburb.state), 1)) : createCommentVNode("", true)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, { side: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(c.contractor_start_date), 1)
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
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_12, [
                      dashboard.value.newCustomers.length ? (openBlock(), createBlock(QCard, {
                        key: 0,
                        class: "bg-seamless q-mb-lg"
                      }, {
                        default: withCtx(() => [
                          createVNode(QCardSection, null, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_13, "New " + toDisplayString(_ctx.$t("team.namePlural")), 1),
                              createVNode(QList, {
                                class: "bg-white",
                                separator: ""
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(dashboard.value.newCustomers, (c) => {
                                    return openBlock(), createBlock(QItem, {
                                      key: c.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(QItemSection, { avatar: "" }, {
                                          default: withCtx(() => [
                                            createVNode(_sfc_main$7, { user: c }, null, 8, ["user"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, null, {
                                          default: withCtx(() => [
                                            createBaseVNode("div", null, [
                                              createVNode(_component_router_link, {
                                                to: { name: "team-dashboard", params: { id: c.id } },
                                                class: "link text-h6"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(c.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["to"]),
                                              c.suburbpostcoderegion ? (openBlock(), createElementBlock("div", _hoisted_14, toDisplayString(c.suburbpostcoderegion.locality) + " " + toDisplayString(c.suburbpostcoderegion.state), 1)) : createCommentVNode("", true)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemSection, { side: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(fromNowTz)(c.created_at)), 1)
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
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(QBtn, {
                      onClick: _cache[1] || (_cache[1] = ($event) => decreaseWeek()),
                      flat: "",
                      icon: "chevron_left",
                      class: "q-mr-sm",
                      round: ""
                    }),
                    createTextVNode(toDisplayString(search.value.start) + " -> " + toDisplayString(search.value.end), 1),
                    createVNode(QBtn, {
                      onClick: _cache[2] || (_cache[2] = ($event) => increaseWeek()),
                      flat: "",
                      icon: "chevron_right",
                      class: "q-ml-sm",
                      round: ""
                    })
                  ]),
                  landingData.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
                    !landingData.value.length ? (openBlock(), createElementBlock("div", _hoisted_18, "No records found for this date range.")) : createCommentVNode("", true),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(landingData.value, (l) => {
                      return openBlock(), createElementBlock("div", {
                        class: "col-xs-12",
                        key: l.name
                      }, [
                        createVNode(QCard, null, {
                          default: withCtx(() => [
                            createVNode(QList, { class: "bg-white" }, {
                              default: withCtx(() => [
                                createVNode(QItem, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, { side: "" }, {
                                      default: withCtx(() => [
                                        createVNode(QCircularProgress, {
                                          value: l.per,
                                          size: "40px",
                                          color: "primary",
                                          "track-color": "grey-5",
                                          thickness: 0.3
                                        }, null, 8, ["value", "thickness"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createBaseVNode("div", _hoisted_19, toDisplayString(l.name) + " Bookings", 1),
                                        createBaseVNode("div", null, toDisplayString(l.oc) + "/" + toDisplayString(l.cc) + " - " + toDisplayString(l.per) + "% ", 1)
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
                        }, 1024)
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true),
                  createVNode(QCard, { class: "bg-secondary text-white" }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, { class: "text-h6" }, {
                        default: withCtx(() => [
                          createTextVNode("Statistics")
                        ]),
                        _: 1
                      }),
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_20, [
                            createBaseVNode("div", _hoisted_21, [
                              createBaseVNode("div", _hoisted_22, [
                                createBaseVNode("div", _hoisted_23, toDisplayString(dashboard.value.totalOrdersCount[0].count), 1),
                                createTextVNode(" " + toDisplayString(_ctx.$t("order.namePlural")), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_24, [
                              createBaseVNode("div", _hoisted_25, [
                                createBaseVNode("div", _hoisted_26, toDisplayString(dashboard.value.totalContractors[0].count), 1),
                                createTextVNode(" " + toDisplayString(_ctx.$t("contractor.namePlural")), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_27, [
                              createBaseVNode("div", _hoisted_28, [
                                createBaseVNode("div", _hoisted_29, toDisplayString(dashboard.value.totalCustomers[0].count), 1),
                                createTextVNode(" " + toDisplayString(_ctx.$t("team.namePlural")), 1)
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QCard, { class: "bg-seamless q-mb-md q-mt-sm" }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_30, [
                            createBaseVNode("div", _hoisted_31, [
                              createBaseVNode("div", _hoisted_32, [
                                createVNode(QCircularProgress, {
                                  value: parseFloat(dashboard.value.retainedRebooked.retainedPercentage),
                                  color: "secondary",
                                  size: "64px",
                                  "track-color": "grey-4",
                                  "show-value": "",
                                  title: dashboard.value.retainedRebooked.retained
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_33, toDisplayString(dashboard.value.retainedRebooked.retainedPercentage) + "%", 1)
                                  ]),
                                  _: 1
                                }, 8, ["value", "title"]),
                                _hoisted_34
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_35, [
                              createBaseVNode("div", _hoisted_36, [
                                createVNode(QCircularProgress, {
                                  value: parseFloat(dashboard.value.retainedRebooked.rebookedPercentage),
                                  color: "secondary",
                                  size: "64px",
                                  "track-color": "grey-4",
                                  "show-value": "",
                                  title: dashboard.value.retainedRebooked.rebooked
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_37, toDisplayString(dashboard.value.retainedRebooked.rebookedPercentage) + "%", 1)
                                  ]),
                                  _: 1
                                }, 8, ["value", "title"]),
                                _hoisted_38
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true),
              currentTab.value === "contractors" ? (openBlock(), createBlock(_sfc_main$3, { key: 2 })) : createCommentVNode("", true),
              currentTab.value === "customers" ? (openBlock(), createBlock(_sfc_main$2, { key: 3 })) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export { _sfc_main as default };
