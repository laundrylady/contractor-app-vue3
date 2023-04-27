import { A as defineComponent, r as ref, o as onMounted, w as watch, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, aM as QSpinner, y as createCommentVNode, i as inject, f as onUnmounted, Q as QCard, R as createTextVNode, aF as toDisplayString, G as withDirectives, S as QBtn, bp as QSeparator, q as createBaseVNode, n as createElementBlock, U as unref, F as Fragment, bi as renderList, M as QCardSection, ae as QCardActions, aD as QDialog, bj as QCheckbox, g as computed, B as reactive, E as onBeforeUnmount, J as resolveComponent, t as normalizeClass, af as QToggle, bv as vShow, k as isRef, s as normalizeStyle } from "./index.253fe345.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.36205882.js";
import { Q as QSpace } from "./QSpace.66c3f114.js";
import { Q as QMenu } from "./format.8649e8ee.js";
import { Q as QHeader } from "./QHeader.a0e42623.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.04ae4ed1.js";
import { Q as QList } from "./QList.17898fd8.js";
import { Q as QCircularProgress } from "./QCircularProgress.36b9c740.js";
import { Q as QBtnGroup } from "./QBtnGroup.4e7fb838.js";
import { Q as QBadge } from "./QBadge.7e8baaf6.js";
import { Q as QLinearProgress } from "./QLinearProgress.46fe0bb7.js";
import { Q as QPage } from "./QPage.e201e638.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.1155cb2c.js";
import { C as ClosePopup } from "./ClosePopup.abe5ec32.js";
import { _ as _imports_0 } from "./code_thinking.ed37dda4.js";
import { t as today } from "./index.esm.e39f9b2d.js";
import { u as useVuelidate, r as required } from "./index.esm.96cc0511.js";
import { a as api, m as moment } from "./axios.2d898732.js";
import { u as useQuasar } from "./use-quasar.5b513a2e.js";
import { _ as _sfc_main$7 } from "./PostcodeRegionField.f06a190d.js";
import { _ as _sfc_main$6 } from "./PostcodeRegionGroupField.0fe593e8.js";
import { a as _sfc_main$5, _ as _sfc_main$8 } from "./OrderContractorManagement.c07e9aef.js";
import { Q as QSelect } from "./QSelect.50985c2c.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { a as QToolbarTitle, Q as QToolbar } from "./QToolbarTitle.fd38bbbb.js";
import { Q as QTime } from "./QTime.7a9b3e1b.js";
import { h as hourBookingOptions, D as dbDate, k as hourAgreedDisplay, j as hourBookingDisplay, n as hourDisplay, E as dbDateDisplayDay, o as dbDateDisplay } from "./help.b5179f9e.js";
import { _ as _sfc_main$4 } from "./DateField.aa09c109.js";
import { _ as _sfc_main$a } from "./PostcodeRegionDisplay.2a4b5f5b.js";
import { _ as _sfc_main$9 } from "./UserAvatar.a094ddc0.js";
import { a as getCurrentLocation, g as getPostcodeRegionGroups } from "./geolocation.165308fa.js";
import { o as orderColor } from "./helpers.319a98b4.js";
import "./QResizeObserver.f1103cb2.js";
import "./rtl.341eb743.js";
import "./TouchPan.c43ed403.js";
import "./touch.70a9dd44.js";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UserField",
  props: {
    modelValue: null,
    role: null,
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
    const users = ref();
    const handleChange = (val) => {
      emits("update:modelValue", val);
    };
    const filterUsers = (val, update) => {
      if (val.length < 2) {
        return;
      }
      loading.value = true;
      api.post(`/user/index?role=${props.role}`, { keyword: val }).then((response) => {
        update(() => {
          users.value = response.data.map((o) => {
            return { value: o.id, label: o.fullname };
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
        api.get(`/user/${props.modelValue}`).then((res) => {
          if (Array.isArray(res.data)) {
            users.value = res.data.map((o) => {
              return { value: o.id, label: o.fullname };
            });
            loading.value = false;
          } else {
            users.value = [{ value: res.data.id, label: res.data.fullname }];
            loading.value = false;
          }
        });
      }
    });
    watch(() => props.modelValue, (newVal, oldVal) => {
      if (!props.nowatch && newVal && newVal !== oldVal && (Array.isArray(newVal) && newVal.length || !Array.isArray(newVal))) {
        api.get(`/user/${newVal}`).then((res) => {
          users.value = [{ value: res.data.id, label: res.data.fullname }];
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
        options: users.value,
        onFilter: filterUsers,
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
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h7 q-mb-md" }, "Please confirm the following details are correct:", -1);
const _hoisted_2$1 = { class: "text-h6" };
const _hoisted_3$1 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_4$1 = { class: "col-xs-12 col-sm-8" };
const _hoisted_5$1 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mt-md" }, "Products", -1);
const _hoisted_7$1 = {
  key: 0,
  class: "q-mt-lg q-mb-md"
};
const _hoisted_8$1 = {
  class: "q-mb-md",
  style: { "min-height": "100px" }
};
const _hoisted_9$1 = {
  key: 0,
  class: "q-mt-sm"
};
const _hoisted_10$1 = {
  key: 1,
  class: "text-negative q-mt-sm"
};
const _hoisted_11$1 = {
  key: 2,
  class: "text-negative q-mt-sm"
};
const _hoisted_12$1 = { class: "col-xs-12 col-sm-4" };
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-bold text-grey q-mb-xs" }, "Agreed Pickup Time", -1);
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("p", null, "The time below has been agreed upon by the customer and contractor.", -1);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OrderMove",
  setup(__props) {
    const $q = useQuasar();
    const model = ref();
    const bus = inject("bus");
    const show = ref(false);
    const contractorViability = ref();
    const save = () => {
      if (model.value) {
        $q.loading.show({ message: "Updating booking..." });
        api.put(`/order/${model.value.id}`, model.value).then(() => {
          bus.emit("orderMoved");
          model.value = null;
          show.value = false;
        }).catch((error) => {
          useMixinDebug(error);
        });
      }
    };
    const clearPickupTime = () => {
      if (model.value) {
        model.value.agreed_pickup_time = null;
      }
    };
    const checkContractorViability = () => {
      if (model.value) {
        api.post("/order/contractorviability", { order_id: model.value.id, contractor_user_id: model.value.contractor_user_id, day: model.value.scheduled_pickup_date, time: model.value.agreed_pickup_time || model.value.scheduled_pickup_time }).then((response) => {
          contractorViability.value = response.data;
        }).catch((error) => {
          useMixinDebug(error);
        });
      }
    };
    onMounted(() => {
      bus.on("orderMove", (data) => {
        model.value = data;
        model.value.scheduled_pickup_date = moment(data.scheduled_pickup_date).format("DD/MM/YYYY");
        contractorViability.value = null;
        checkContractorViability();
        show.value = true;
      });
    });
    onUnmounted(() => {
      bus.off("orderMove");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          model.value ? (openBlock(), createBlock(QCard, {
            key: 0,
            class: "modal"
          }, {
            default: withCtx(() => [
              createVNode(QToolbar, null, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("order.name")) + " #" + toDisplayString(model.value.display_id), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QSpace),
                  withDirectives(createVNode(QBtn, {
                    round: "",
                    dense: "",
                    flat: "",
                    icon: "close"
                  }, null, 512), [
                    [ClosePopup]
                  ])
                ]),
                _: 1
              }),
              createVNode(QSeparator),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_1$2,
                  createBaseVNode("div", _hoisted_2$1, [
                    createVNode(QIcon, { name: "group" }),
                    createTextVNode(" " + toDisplayString(model.value.team.name), 1)
                  ]),
                  createBaseVNode("div", null, toDisplayString(model.value.team.suburbpostcoderegion.locality) + " " + toDisplayString(model.value.team.suburbpostcoderegion.state), 1),
                  createVNode(QSeparator, { class: "q-mt-sm q-mb-sm" }),
                  model.value.team_id ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                    createBaseVNode("div", _hoisted_4$1, [
                      createBaseVNode("div", _hoisted_5$1, [
                        createVNode(_sfc_main$4, {
                          modelValue: model.value.scheduled_pickup_date,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value.scheduled_pickup_date = $event),
                          label: _ctx.$t("order.scheduledPickupDate"),
                          class: "col-xs-12 col-sm-6"
                        }, null, 8, ["modelValue", "label"]),
                        createVNode(QSelect, {
                          modelValue: model.value.scheduled_pickup_time,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value.scheduled_pickup_time = $event),
                          label: _ctx.$t("order.scheduledPickupTime"),
                          options: unref(hourBookingOptions),
                          "emit-value": "",
                          "map-options": "",
                          class: "col-xs-12 col-sm-6"
                        }, null, 8, ["modelValue", "label", "options"])
                      ]),
                      _hoisted_6$1,
                      (openBlock(true), createElementBlock(Fragment, null, renderList(model.value.productcategories, (c) => {
                        return openBlock(), createElementBlock("div", {
                          key: c.id
                        }, [
                          c.meta ? (openBlock(), createBlock(QCheckbox, {
                            key: 0,
                            modelValue: c.meta.pivot_active,
                            "onUpdate:modelValue": ($event) => c.meta.pivot_active = $event,
                            label: c.name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])) : createCommentVNode("", true)
                        ]);
                      }), 128)),
                      model.value.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                        createBaseVNode("div", _hoisted_8$1, [
                          createVNode(_sfc_main$5, {
                            modelValue: model.value.contractor_user_id,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value.contractor_user_id = $event),
                            team_id: model.value.team_id,
                            scheduled_pickup_date: model.value.scheduled_pickup_date,
                            scheduled_pickup_time: model.value.scheduled_pickup_time,
                            reassign: true,
                            productcategories: model.value.productcategories
                          }, null, 8, ["modelValue", "team_id", "scheduled_pickup_date", "scheduled_pickup_time", "productcategories"])
                        ]),
                        contractorViability.value && contractorViability.value.roster ? (openBlock(), createElementBlock("div", _hoisted_9$1, [
                          createVNode(QIcon, { name: "warning" }),
                          createTextVNode(" " + toDisplayString(contractorViability.value.roster), 1)
                        ])) : createCommentVNode("", true),
                        contractorViability.value && contractorViability.value.schedule ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                          createVNode(QIcon, { name: "warning" }),
                          createTextVNode(" " + toDisplayString(contractorViability.value.schedule), 1)
                        ])) : createCommentVNode("", true),
                        contractorViability.value && contractorViability.value.capacity ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
                          createVNode(QIcon, { name: "warning" }),
                          createTextVNode(" " + toDisplayString(contractorViability.value.capacity), 1)
                        ])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_12$1, [
                      _hoisted_13$1,
                      _hoisted_14$1,
                      createVNode(QTime, {
                        modelValue: model.value.agreed_pickup_time,
                        "onUpdate:modelValue": [
                          _cache[3] || (_cache[3] = ($event) => model.value.agreed_pickup_time = $event),
                          _cache[4] || (_cache[4] = ($event) => checkContractorViability())
                        ],
                        color: "secondary"
                      }, null, 8, ["modelValue"]),
                      model.value.agreed_pickup_time ? (openBlock(), createBlock(QBtn, {
                        key: 0,
                        class: "q-mt-sm",
                        onClick: _cache[5] || (_cache[5] = ($event) => clearPickupTime()),
                        label: "Clear pickup time",
                        flat: "",
                        size: "sm",
                        color: "secondary"
                      })) : createCommentVNode("", true)
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
                    color: "secondary"
                  }, null, 512), [
                    [ClosePopup]
                  ]),
                  createVNode(QBtn, {
                    onClick: _cache[6] || (_cache[6] = ($event) => save()),
                    color: "primary",
                    label: "Confirm changes"
                  })
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
const _hoisted_1$1 = { class: "q-mb-sm" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderViewModal",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createBlock(QCard, {
        key: 0,
        class: "bg-transparent",
        flat: "",
        style: { "margin-top": "1px" }
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", null, toDisplayString(__props.model.team.name), 1),
              createBaseVNode("div", null, toDisplayString(__props.model.address2), 1),
              createBaseVNode("div", null, toDisplayString(__props.model.team.suburbpostcoderegion.locality), 1),
              createBaseVNode("div", _hoisted_1$1, toDisplayString(__props.model.team.suburbpostcoderegion.state) + " " + toDisplayString(__props.model.team.suburbpostcoderegion.postcode), 1),
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.model.productcategories, (p) => {
                var _a;
                return openBlock(), createElementBlock("span", {
                  key: p.id
                }, [
                  ((_a = p.meta) == null ? void 0 : _a.pivot_active) ? (openBlock(), createBlock(QIcon, {
                    key: 0,
                    name: p.icon,
                    size: "20px",
                    class: "q-mr-sm"
                  }, null, 8, ["name"])) : createCommentVNode("", true)
                ]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1 = {
  class: "q-pl-md q-pt-sm q-pr-md q-pb-sm flex items-center",
  style: { "padding-top": "11px" }
};
const _hoisted_2 = {
  class: "q-pa-lg",
  style: { "width": "500px" }
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Suburb Group", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Individual Suburb", -1);
const _hoisted_5 = {
  key: 0,
  class: "text-center text-grey",
  style: { "margin-top": "200px" }
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mb-lg" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    style: { "max-height": "150px" }
  })
], -1);
const _hoisted_7 = { class: "flex items-center" };
const _hoisted_8 = { class: "q-mr-lg text-h6" };
const _hoisted_9 = {
  key: 1,
  class: "flex"
};
const _hoisted_10 = { class: "flex items-center" };
const _hoisted_11 = { class: "q-ml-sm" };
const _hoisted_12 = {
  class: "text-bold",
  style: { "line-height": "0.9rem" }
};
const _hoisted_13 = { class: "q-mt-sm" };
const _hoisted_14 = { class: "text-center q-pa-xs" };
const _hoisted_15 = { class: "text-center" };
const _hoisted_16 = ["onMouseenter"];
const _hoisted_17 = { style: { "display": "flex", "justify-content": "space-evenly", "flex-wrap": "wrap", "align-items": "center", "font-weight": "400", "font-size": "12px", "height": "auto" } };
const _hoisted_18 = { style: { "display": "flex", "justify-content": "space-evenly", "flex-wrap": "wrap", "align-items": "center", "font-weight": "400", "font-size": "12px", "height": "auto" } };
const _hoisted_19 = { class: "absolute-full flex flex-center" };
const _hoisted_20 = { style: { "max-width": "400px" } };
const _hoisted_21 = { class: "flex q-mb-sm items-start" };
const _hoisted_22 = { class: "text-h6" };
const _hoisted_23 = { class: "flex" };
const _hoisted_24 = { class: "q-pa-md" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", null, "Pickup Locations:", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderBookingManager",
  setup(__props) {
    const $q = useQuasar();
    const bus = inject("bus");
    const latLng = ref();
    const data = ref();
    const loaded = ref(false);
    const dataResources = ref([]);
    const dataOrders = ref([]);
    const currentHover = ref();
    const selectedDate = ref(today());
    const calendarRef = ref();
    const postcodeRegionGroups = ref();
    const selectedLocation = ref();
    const landingData = ref();
    const dragging = ref(false);
    const orderViewId = ref();
    const draggedEvent = ref();
    const styles = computed(() => {
      return {
        "--calendar-resources-width": 150 + "px"
      };
    });
    const schema = {
      keyword: null,
      start: moment().startOf("isoWeek").format("DD/MM/YYYY"),
      end: moment().endOf("isoWeek").format("DD/MM/YYYY"),
      postcode_region_group_id: null,
      postcode_region_id: null,
      scheduled_only: true,
      contactor_user_id: null,
      team_id: null
    };
    const search = reactive(JSON.parse(JSON.stringify(schema)));
    const rules = {
      start: { required },
      end: { required }
    };
    const $v = useVuelidate(rules, search, { $scope: false });
    const dataResourcesComputed = computed(() => {
      return dataResources.value.filter((o) => o.selected);
    });
    const setSelectedLocation = (val) => {
      selectedLocation.value = val;
    };
    const selectContractor = () => {
      if (search.contractor_user_id) {
        search.postcode_region_group_id = null;
      }
    };
    const selectTeam = () => {
      if (search.team_id) {
        search.postcode_region_group_id = null;
        search.contactor_user_id = null;
      }
    };
    const getOrders = () => {
      $q.loading.show({ message: "Fetching bookings..." });
      api.post("/order/bookingmanager", search).then((response) => {
        data.value = response.data.data;
        dataOrders.value = response.data.orders;
        dataResources.value = response.data.data.map((o) => {
          return {
            id: o.user.id,
            fullname: o.user.fullname,
            first_name: o.user.first_name,
            last_name: o.user.last_name,
            avatar: o.user.avatar,
            email: o.user.email,
            selected: true,
            totalCapacity: o.totalCapacity
          };
        });
        loaded.value = true;
        getLandingData();
      }).catch((error) => {
        $q.loading.hide();
        useMixinDebug(error);
      });
    };
    const getLandingData = () => {
      api.post("/user/contractor/landing", { start: search.start, end: search.end, postcode_region_group_id: search.postcode_region_group_id, postcode_region_id: search.postcode_region_id }).then((response) => {
        landingData.value = response.data;
        $q.loading.hide();
      }).catch((error) => {
        useMixinDebug(error);
        $q.loading.hide();
      });
    };
    const onToday = () => {
      if (calendarRef.value) {
        calendarRef.value.moveToToday();
      }
    };
    const onPrev = () => {
      if (calendarRef.value) {
        calendarRef.value.prev();
      }
    };
    const onNext = () => {
      if (calendarRef.value) {
        calendarRef.value.next();
      }
    };
    const onChange = (event) => {
      const startFormatted = moment(event.start).format("DD/MM/YYYY");
      const endFormatted = moment(event.end).format("DD/MM/YYYY");
      if (search.start !== startFormatted && search.end !== endFormatted) {
        search.start = startFormatted;
        search.end = endFormatted;
        getOrders();
      }
    };
    const onDragStart = (e, order) => {
      dragging.value = true;
      draggedEvent.value = JSON.parse(JSON.stringify(order));
    };
    const onDragEnd = (e, scope) => {
      if (scope && scope.resource) {
        if (draggedEvent.value.scheduled_pickup_date !== scope.timestamp.date || draggedEvent.value.contractor_user_id !== scope.resource.id) {
          bus.emit("orderMove", draggedEvent.value);
        }
        dragging.value = false;
      }
    };
    const onDragOver = (e, type, scope) => {
      if (scope && scope.resource) {
        draggedEvent.value.scheduled_pickup_date = scope.timestamp.date;
        draggedEvent.value.contractor_user_id = scope.resource.id;
      }
    };
    const getEvents = (scope) => {
      if (!data.value) {
        return [];
      }
      const record = data.value.find((o) => o.user.id === scope.resource.id);
      if (record) {
        return record.schedule.filter((o) => o.day === scope.timestamp.date);
      }
      return [];
    };
    const getOrderEvents = (scope) => {
      if (!dataOrders.value) {
        return [];
      }
      return dataOrders.value.filter((o) => dbDate(o.scheduled_pickup_date) === scope.timestamp.date && o.contractor_user_id === scope.resource.id);
    };
    const viewOrder = (id) => {
      if (orderViewId.value && orderViewId.value === id) {
        orderViewId.value = null;
      } else {
        orderViewId.value = id;
      }
    };
    const currentMonth = () => {
      return moment(search.start, "DD/MM/YYYY").format("MMMM YYYY");
    };
    const getCategoryCapacity = (capacity) => {
      const capacityData = [];
      Object.entries(capacity).forEach(([key, value]) => {
        capacityData.push(`${key}: ${value.percentage}%`);
      });
      return capacityData.join(", ");
    };
    onMounted(async () => {
      latLng.value = await getCurrentLocation();
      postcodeRegionGroups.value = (await getPostcodeRegionGroups()).map((o) => {
        return { value: o.id, label: o.name };
      });
      bus.on("getOrders", () => {
        getOrders();
      });
      bus.on("orderMoved", () => {
        getOrders();
        draggedEvent.value = null;
      });
    });
    onBeforeUnmount(() => {
      bus.off("getOrders");
      bus.off("orderMoved");
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_q_calendar_scheduler = resolveComponent("q-calendar-scheduler");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$2),
        createVNode(QLayout, {
          view: "lHh LpR fFf",
          container: "",
          class: "layout-height"
        }, {
          default: withCtx(() => [
            createVNode(QHeader, {
              class: normalizeClass({ "page-title text-black": !unref($q).dark.isActive, "bg-dark": unref($q).dark.isActive }),
              bordered: ""
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1, [
                  createVNode(QBreadcrumbs, null, {
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
                      createVNode(QBreadcrumbsEl, { label: "Booking Manager" })
                    ]),
                    _: 1
                  }),
                  createVNode(QSpace),
                  createVNode(QBtn, {
                    icon: "place",
                    label: `${selectedLocation.value || "Location"}`,
                    color: "grey",
                    "no-caps": "",
                    flat: "",
                    class: "form-field-padding-dense q-mr-sm"
                  }, {
                    default: withCtx(() => [
                      createVNode(QMenu, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_2, [
                            _hoisted_3,
                            createVNode(_sfc_main$6, {
                              modelValue: search.postcode_region_group_id,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.postcode_region_group_id = $event),
                              label: "Choose an area",
                              outlined: true,
                              dense: true,
                              class: "q-mb-md",
                              onSelectedLocation: setSelectedLocation
                            }, null, 8, ["modelValue"]),
                            _hoisted_4,
                            createVNode(_sfc_main$7, {
                              modelValue: search.postcode_region_id,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => search.postcode_region_id = $event),
                              label: "Specific Suburb",
                              dense: true,
                              outlined: true,
                              onSelectedLocation: setSelectedLocation
                            }, null, 8, ["modelValue"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  createVNode(_sfc_main$3, {
                    modelValue: search.contractor_user_id,
                    "onUpdate:modelValue": [
                      _cache[2] || (_cache[2] = ($event) => search.contractor_user_id = $event),
                      selectContractor
                    ],
                    outlined: true,
                    dense: true,
                    label: "Choose a contractor",
                    role: "contractor",
                    class: "q-mr-sm"
                  }, null, 8, ["modelValue"]),
                  createVNode(_sfc_main$8, {
                    modelValue: search.team_id,
                    "onUpdate:modelValue": [
                      _cache[3] || (_cache[3] = ($event) => search.team_id = $event),
                      selectTeam
                    ],
                    outlined: true,
                    dense: true,
                    label: "Choose a customer",
                    class: "q-mr-sm",
                    status: "active"
                  }, null, 8, ["modelValue"]),
                  createVNode(QToggle, {
                    modelValue: search.scheduled_only,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => search.scheduled_only = $event),
                    label: "Scheduled only"
                  }, null, 8, ["modelValue"]),
                  createVNode(QBtn, {
                    onClick: _cache[5] || (_cache[5] = ($event) => getOrders()),
                    disable: unref($v).$invalid || !search.postcode_region_group_id && !search.postcode_region_id && !search.contractor_user_id && !search.team_id,
                    icon: "search",
                    label: "Search",
                    color: "primary",
                    class: "q-ml-sm"
                  }, null, 8, ["disable"])
                ])
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(QPageContainer, null, {
              default: withCtx(() => [
                createVNode(QPage, { padding: "" }, {
                  default: withCtx(() => [
                    !loaded.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                      _hoisted_6,
                      createVNode(QIcon, { name: "place" }),
                      createTextVNode(" Select a location or contractor above to get started ")
                    ])) : createCommentVNode("", true),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(QCard, { class: "bg-seamless q-mt-md" }, {
                        default: withCtx(() => [
                          createVNode(QCardSection, null, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_7, [
                                dataResources.value && dataResources.value.length ? (openBlock(), createBlock(QBtn, {
                                  key: 0,
                                  color: "primary",
                                  flat: "",
                                  icon: "filter_alt",
                                  label: _ctx.$t("contractor.namePlural")
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QMenu, null, {
                                      default: withCtx(() => [
                                        createVNode(QList, { style: { "min-width": "100px" } }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createElementBlock(Fragment, null, renderList(dataResources.value, (u) => {
                                              return openBlock(), createBlock(QItem, {
                                                key: u.id
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(QItemSection, null, {
                                                    default: withCtx(() => [
                                                      createVNode(QCheckbox, {
                                                        modelValue: u.selected,
                                                        "onUpdate:modelValue": ($event) => u.selected = $event,
                                                        label: u.fullname
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
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
                                }, 8, ["label"])) : createCommentVNode("", true),
                                createVNode(QSpace),
                                createBaseVNode("div", _hoisted_8, toDisplayString(currentMonth()), 1),
                                createVNode(QSpace),
                                landingData.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(landingData.value, (l) => {
                                    return openBlock(), createElementBlock("div", {
                                      key: l.name,
                                      class: "q-mr-lg"
                                    }, [
                                      createBaseVNode("div", _hoisted_10, [
                                        createVNode(QCircularProgress, {
                                          value: l.per,
                                          size: "32px",
                                          color: "primary",
                                          "track-color": "grey-5"
                                        }, null, 8, ["value"]),
                                        createBaseVNode("div", _hoisted_11, [
                                          createBaseVNode("div", _hoisted_12, toDisplayString(l.name) + " Bookings", 1),
                                          createBaseVNode("div", null, toDisplayString(l.oc) + "/" + toDisplayString(l.cc) + " - " + toDisplayString(l.per) + "% ", 1)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ])) : createCommentVNode("", true),
                                createVNode(QBtnGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(QBtn, {
                                      onClick: _cache[6] || (_cache[6] = ($event) => onPrev()),
                                      icon: "chevron_left",
                                      color: "secondary"
                                    }),
                                    createVNode(QBtn, {
                                      onClick: _cache[7] || (_cache[7] = ($event) => onToday()),
                                      label: "Today",
                                      color: "secondary"
                                    }),
                                    createVNode(QBtn, {
                                      onClick: _cache[8] || (_cache[8] = ($event) => onNext()),
                                      icon: "chevron_right",
                                      color: "secondary"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createBaseVNode("div", _hoisted_13, [
                                createVNode(_component_q_calendar_scheduler, {
                                  ref_key: "calendarRef",
                                  ref: calendarRef,
                                  modelValue: selectedDate.value,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => selectedDate.value = $event),
                                  "model-resources": unref(dataResourcesComputed),
                                  "onUpdate:modelResources": _cache[10] || (_cache[10] = ($event) => isRef(dataResourcesComputed) ? dataResourcesComputed.value = $event : null),
                                  view: "week",
                                  "short-weekday-label": "",
                                  animated: "",
                                  bordered: "",
                                  weekdays: [1, 2, 3, 4, 5, 6, 0],
                                  style: normalizeStyle(unref(styles)),
                                  onChange,
                                  "drag-over-func": onDragOver
                                }, {
                                  "resource-label": withCtx(({ scope }) => [
                                    createBaseVNode("div", _hoisted_14, [
                                      createVNode(QCircularProgress, {
                                        "show-value": "",
                                        "font-size": "10px",
                                        class: "q-ma-sm",
                                        title: getCategoryCapacity(scope.resource.totalCapacity.categoryCounts),
                                        value: scope.resource.totalCapacity.percentage,
                                        size: "80px",
                                        thickness: 0.25,
                                        color: "secondary",
                                        "track-color": "grey-3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_sfc_main$9, {
                                            user: scope.resource
                                          }, null, 8, ["user"])
                                        ]),
                                        _: 2
                                      }, 1032, ["title", "value", "thickness"]),
                                      createBaseVNode("div", _hoisted_15, [
                                        createVNode(_component_router_link, {
                                          to: { name: "contractor-dashboard", params: { id: scope.resource.id } },
                                          target: "_blank",
                                          class: "link"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(scope.resource.fullname), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["to"])
                                      ])
                                    ])
                                  ]),
                                  day: withCtx(({ scope }) => [
                                    createBaseVNode("div", {
                                      onMouseenter: ($event) => currentHover.value = { resource: scope.resource.id, date: scope.timestamp.date },
                                      style: { "height": "100%" }
                                    }, [
                                      createBaseVNode("div", _hoisted_17, [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList(getOrderEvents(scope), (o) => {
                                          return openBlock(), createElementBlock("div", {
                                            key: o.id
                                          }, [
                                            createVNode(QBadge, {
                                              label: `#${o.display_id}: ${o.team.name.slice(0, 17)} - ${o.agreed_pickup_time ? unref(hourAgreedDisplay)(o.agreed_pickup_time) : unref(hourBookingDisplay)(o.scheduled_pickup_time)}`,
                                              class: "cursor-pointer q-pa-sm q-mt-xs",
                                              onClick: ($event) => viewOrder(o.id),
                                              color: unref(orderColor)(o.productcategories),
                                              draggable: true,
                                              outline: o.status === "draft",
                                              onDragstart: (e) => onDragStart(e, o),
                                              onDragend: (e) => onDragEnd(e, scope)
                                            }, null, 8, ["label", "onClick", "color", "outline", "onDragstart", "onDragend"]),
                                            orderViewId.value === o.id ? (openBlock(), createElementBlock("div", {
                                              key: 0,
                                              class: normalizeClass(`bg-${unref(orderColor)(o.productcategories)} text-white`)
                                            }, [
                                              createVNode(_sfc_main$1, { model: o }, null, 8, ["model"])
                                            ], 2)) : createCommentVNode("", true)
                                          ]);
                                        }), 128))
                                      ]),
                                      createBaseVNode("div", _hoisted_18, [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList(getEvents(scope), (event) => {
                                          return openBlock(), createElementBlock("div", {
                                            key: event.time,
                                            class: "q-mt-sm"
                                          }, [
                                            createVNode(QBtn, {
                                              "no-caps": "",
                                              flat: "",
                                              size: "sm",
                                              class: "q-mb-xs",
                                              dense: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(QLinearProgress, {
                                                  size: "25px",
                                                  value: event.capacity.percentage,
                                                  color: "grey-4",
                                                  "track-color": "grey-2",
                                                  style: { "width": "100px" }
                                                }, {
                                                  default: withCtx(() => [
                                                    createBaseVNode("div", _hoisted_19, [
                                                      createVNode(QBadge, {
                                                        color: "transparent",
                                                        "text-color": "black",
                                                        label: `${unref(hourDisplay)(event.start_time)} - ${unref(hourDisplay)(event.end_time)}`
                                                      }, null, 8, ["label"])
                                                    ])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]),
                                                createVNode(QMenu, {
                                                  anchor: "center middle",
                                                  self: "center middle"
                                                }, {
                                                  default: withCtx(() => [
                                                    createBaseVNode("div", _hoisted_20, [
                                                      createBaseVNode("div", {
                                                        class: normalizeClass([{ "bg-positive": event.active, "bg-negative": !event.active }, "q-pa-sm text-white"])
                                                      }, [
                                                        createBaseVNode("div", _hoisted_21, [
                                                          createBaseVNode("div", null, [
                                                            createTextVNode(toDisplayString(scope.resource.fullname) + " ", 1),
                                                            createBaseVNode("div", _hoisted_22, toDisplayString(unref(dbDateDisplayDay)(event.day)) + " - " + toDisplayString(unref(dbDateDisplay)(event.day)), 1),
                                                            createBaseVNode("div", _hoisted_23, toDisplayString(unref(hourDisplay)(event.start_time)) + " - " + toDisplayString(unref(hourDisplay)(event.end_time)) + " | " + toDisplayString(event.orders.length) + " booked ", 1)
                                                          ]),
                                                          createVNode(QSpace),
                                                          withDirectives(createVNode(QBtn, {
                                                            round: "",
                                                            dense: "",
                                                            icon: "close",
                                                            flat: ""
                                                          }, null, 512), [
                                                            [ClosePopup]
                                                          ])
                                                        ])
                                                      ], 2),
                                                      createBaseVNode("div", _hoisted_24, [
                                                        _hoisted_25,
                                                        createVNode(_sfc_main$a, {
                                                          postcoderegions: event.postcoderegiongroup.postcoderegions
                                                        }, null, 8, ["postcoderegions"])
                                                      ])
                                                    ]),
                                                    createVNode(QLinearProgress, {
                                                      size: "10px",
                                                      value: event.capacity.percentage,
                                                      color: "secondary"
                                                    }, null, 8, ["value"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]);
                                        }), 128))
                                      ])
                                    ], 40, _hoisted_16)
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "model-resources", "style"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ], 512), [
                      [vShow, loaded.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
export { _sfc_main as default };
