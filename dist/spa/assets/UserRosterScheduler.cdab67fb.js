import { A as defineComponent, r as ref, m as openBlock, K as createBlock, L as withCtx, l as createVNode, O as QIcon, U as unref, q as createBaseVNode, G as withDirectives, S as QBtn, N as QInput, i as inject, g as computed, B as reactive, o as onMounted, E as onBeforeUnmount, J as resolveComponent, n as createElementBlock, F as Fragment, t as normalizeClass, R as createTextVNode, y as createCommentVNode, bv as vShow, Q as QCard, M as QCardSection, bi as renderList, s as normalizeStyle, aF as toDisplayString } from "./index.f0b4ebe6.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.a1f4fd82.js";
import { Q as QSpace } from "./QSpace.59b04cc9.js";
import { Q as QMenu } from "./format.8242738c.js";
import { Q as QHeader } from "./QHeader.19cd82dc.js";
import { Q as QCircularProgress } from "./QCircularProgress.e91ce288.js";
import { Q as QBtnGroup } from "./QBtnGroup.4f7005d0.js";
import { Q as QBadge } from "./QBadge.24d439f8.js";
import { Q as QPage } from "./QPage.4ff7b878.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.453f19b3.js";
import { _ as _imports_0 } from "./code_thinking.ed37dda4.js";
import { t as today } from "./index.esm.835fef05.js";
import { u as useVuelidate, r as required } from "./index.esm.40bb50de.js";
import { m as moment, a as api } from "./axios.d61905ae.js";
import { u as useQuasar } from "./use-quasar.8b72d386.js";
import { Q as QPopupProxy, e as QDate } from "./DateField.8ada521a.js";
import { C as ClosePopup } from "./ClosePopup.b9029680.js";
import { _ as _sfc_main$5 } from "./PostcodeRegionField.316140ae.js";
import { _ as _sfc_main$4 } from "./PostcodeRegionGroupField.0aa30c32.js";
import { _ as _sfc_main$6 } from "./UserAvatar.cff2b3e8.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./UserRosterScheduleCreate.075f493f.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { c as confirmDelete, n as hourDisplay } from "./help.cd1e743b.js";
import { a as getCurrentLocation } from "./geolocation.a0a3874a.js";
import "./QResizeObserver.51af9e18.js";
import "./QSelect.4af0b214.js";
import "./QItemSection.9ea19b97.js";
import "./rtl.7f1de635.js";
import "./QToolbarTitle.2c494531.js";
import "./helpers.66772339.js";
const _hoisted_1$1 = { class: "row items-center justify-end" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DateFieldSlim",
  props: {
    label: null,
    placeholder: null,
    modelValue: null,
    fdc: { type: Boolean },
    disabled: { type: Boolean },
    dark: { type: Boolean },
    previous: null,
    after: null,
    samePrevious: null,
    borderless: { type: Boolean },
    outlined: { type: Boolean },
    hint: null,
    year: null,
    filled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const $q = useQuasar();
    const hintCurrent = ref();
    const qDateProxy = ref();
    const fromCalendar = (val) => {
      if (qDateProxy.value) {
        qDateProxy.value.hide();
      }
      emits("update:modelValue", val);
    };
    const handleChange = (val) => {
      emits("update:modelValue", val);
    };
    const checkDate = () => {
      hintCurrent.value = false;
      if (props.modelValue) {
        let dateStr = props.modelValue;
        dateStr = dateStr.replace("/", "");
        dateStr = dateStr.replace("/", "");
        dateStr = dateStr.replace(/\D/g, "");
        dateStr = dateStr.replace(" ", "");
        if (dateStr.length < 6) {
          emits("update:modelValue", null);
          hintCurrent.value = "Please enter a valid date";
        } else {
          const dFm = dateStr;
          const dFd = dateStr;
          const dFy = dateStr;
          let dSday = dFd.slice(0, 2);
          dSday += "/";
          let dSmonth = dFm.slice(2, 4);
          dSmonth += "/";
          let dSyear = dFy.slice(4, 8);
          if (dSyear.length !== 4) {
            dSyear = dSyear.slice(0, 2);
            if (props.year) {
              dSyear = props.year + dSyear;
            } else {
              dSyear = `20${dSyear}`;
            }
          }
          const newDateStr = dSday + dSmonth + dSyear;
          if (newDateStr && !newDateStr.match("undefined")) {
            const mNewDateStr = moment(newDateStr, "DD/MM/YYYY");
            const today2 = new Date();
            today2.setHours(0, 0, 0, 0);
            if (mNewDateStr.isValid()) {
              let validDate = true;
              let hint = null;
              if (props.fdc) {
                if (!mNewDateStr.isAfter(today2) && !mNewDateStr.isSame(today2)) {
                  validDate = false;
                  $q.dialog({
                    title: "Invalid date",
                    message: `Please enter a date on or after ${props.after}`
                  });
                }
              }
              if (props.after) {
                if (!mNewDateStr.isSameOrAfter(moment(props.after, "DD/MM/YYYY"))) {
                  validDate = false;
                  hint = `Please enter a date on or after ${props.after}`;
                }
              }
              if (props.previous) {
                if (mNewDateStr.isAfter(today2)) {
                  validDate = false;
                  hint = "Please enter a previous date";
                }
              }
              if (props.samePrevious) {
                if (!mNewDateStr.endOf("day").isSameOrBefore(moment(today2).endOf("day"))) {
                  validDate = false;
                  hint = "Please enter a previous date";
                }
              }
              hintCurrent.value = hint;
              if (validDate) {
                emits("update:modelValue", newDateStr);
              } else {
                emits("update:modelValue", null);
              }
            } else {
              emits("update:modelValue", null);
              hintCurrent.value = "Please enter a valid date";
            }
          }
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QInput, {
        filled: __props.filled,
        outlined: __props.outlined,
        "model-value": __props.modelValue,
        mask: "##/##/####",
        label: __props.label,
        style: { "width": "130px" },
        "onUpdate:modelValue": handleChange,
        onBlur: _cache[1] || (_cache[1] = ($event) => checkDate())
      }, {
        append: withCtx(() => [
          createVNode(QIcon, {
            name: "event",
            class: "cursor-pointer",
            onBlur: _cache[0] || (_cache[0] = ($event) => checkDate())
          }, {
            default: withCtx(() => [
              createVNode(unref(QPopupProxy), {
                cover: "",
                "transition-show": "scale",
                "transition-hide": "scale",
                ref_key: "qDateProxy",
                ref: qDateProxy
              }, {
                default: withCtx(() => [
                  createVNode(QDate, {
                    "model-value": __props.modelValue,
                    "onUpdate:modelValue": fromCalendar,
                    mask: "DD/MM/YYYY",
                    color: "secondary"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1$1, [
                        withDirectives(createVNode(QBtn, {
                          label: "Close",
                          color: "primary",
                          flat: ""
                        }, null, 512), [
                          [ClosePopup]
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["model-value"])
                ]),
                _: 1
              }, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["filled", "outlined", "model-value", "label"]);
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
const _hoisted_7 = { class: "flex" };
const _hoisted_8 = {
  key: 0,
  class: "flex"
};
const _hoisted_9 = { class: "flex items-center" };
const _hoisted_10 = { class: "q-ml-sm" };
const _hoisted_11 = {
  class: "text-bold",
  style: { "line-height": "0.9rem" }
};
const _hoisted_12 = { class: "q-mt-sm" };
const _hoisted_13 = { class: "text-center q-pa-xs" };
const _hoisted_14 = { class: "q-mt-xs" };
const _hoisted_15 = ["onMouseenter"];
const _hoisted_16 = {
  key: 0,
  style: { "display": "flex", "justify-content": "space-evenly", "flex-wrap": "wrap", "align-items": "center", "font-weight": "400", "font-size": "12px", "height": "auto" }
};
const _hoisted_17 = {
  key: 1,
  class: "text-center q-mt-sm"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserRosterScheduler",
  setup(__props) {
    const $q = useQuasar();
    const bus = inject("bus");
    const latLng = ref();
    const data = ref();
    const loaded = ref(false);
    const dataResources = ref([]);
    const currentHover = ref();
    const selectedDate = ref(today());
    const calendarRef = ref();
    const postcodeRegionGroups = ref();
    const selectedLocation = ref();
    const landingData = ref();
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
      postcode_region_id: null
    };
    const search = reactive(JSON.parse(JSON.stringify(schema)));
    const rules = {
      start: { required },
      end: { required }
    };
    const $v = useVuelidate(rules, search, { $scope: false });
    const getSchedule = () => {
      $q.loading.show({ message: "Fetching schedule..." });
      api.post("/userrosterschedule/scheduler", search).then((response) => {
        data.value = response.data;
        dataResources.value = response.data.map((o) => o.user);
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
    const setSelectedLocation = (val) => {
      selectedLocation.value = val;
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
        getSchedule();
      }
    };
    const isAfterToday = (resource) => {
      const today2 = moment();
      const compare = moment(resource.timestamp.date);
      if (compare.isSameOrAfter(today2)) {
        return true;
      }
      return false;
    };
    const getEvents = (resource) => {
      if (!data.value) {
        return [];
      }
      const record = data.value.find((o) => o.user.id === resource.resource.id);
      if (record) {
        return record.schedule.filter((o) => o.day === resource.timestamp.date);
      }
      return [];
    };
    const hasEvents = (resource) => {
      if (!data.value) {
        return false;
      }
      const record = data.value.find((o) => o.user.id === resource.resource.id);
      if (record) {
        return record.schedule.filter((o) => o.day === resource.timestamp.date).length > 0;
      }
      return [];
    };
    const editUserRosterSchedule = (id) => {
      bus.emit("editUserRosterSchedule", id);
    };
    const newUserRosterSchedule = (resource) => {
      confirmDelete("This will create a new entry for this day").onOk(() => {
        bus.emit("newUserRosterSchedule", { day: resource.timestamp.date, user: resource.resource });
      });
    };
    onMounted(async () => {
      latLng.value = await getCurrentLocation();
      api.get("/postcoderegiongroup/index").then((response) => {
        postcodeRegionGroups.value = response.data.map((o) => {
          return { value: o.id, label: o.name };
        });
      }).catch((error) => {
        useMixinDebug(error);
      });
      bus.on("getSchedule", () => {
        getSchedule();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getSchedule");
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_q_calendar_scheduler = resolveComponent("q-calendar-scheduler");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$2),
        createVNode(_sfc_main$3),
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
                      createVNode(QBreadcrumbsEl, { label: "Scheduler" })
                    ]),
                    _: 1
                  }),
                  createVNode(QSpace),
                  createVNode(QBtn, {
                    icon: "place",
                    label: `${selectedLocation.value || "Location"}`,
                    flat: "",
                    color: "grey",
                    "no-caps": "",
                    class: "form-field-padding-dense"
                  }, {
                    default: withCtx(() => [
                      createVNode(QMenu, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_2, [
                            _hoisted_3,
                            createVNode(_sfc_main$4, {
                              modelValue: search.postcode_region_group_id,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.postcode_region_group_id = $event),
                              label: "Choose an area",
                              outlined: true,
                              dense: true,
                              class: "q-mb-md",
                              onSelectedLocation: setSelectedLocation
                            }, null, 8, ["modelValue"]),
                            _hoisted_4,
                            createVNode(_sfc_main$5, {
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
                  createVNode(_sfc_main$1, {
                    modelValue: search.start,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => search.start = $event),
                    invalid: unref($v).start.$invalid,
                    label: "Start date",
                    dense: true,
                    outlined: true,
                    "no-hint": true,
                    class: "q-mr-sm q-ml-sm"
                  }, null, 8, ["modelValue", "invalid"]),
                  createVNode(_sfc_main$1, {
                    modelValue: search.end,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => search.end = $event),
                    invalid: unref($v).end.$invalid,
                    label: "End date",
                    dense: true,
                    outlined: true,
                    "no-hint": true,
                    class: "q-mr-sm"
                  }, null, 8, ["modelValue", "invalid"]),
                  createVNode(QBtn, {
                    onClick: _cache[4] || (_cache[4] = ($event) => getSchedule()),
                    disable: unref($v).$invalid || !search.postcode_region_group_id && !search.postcode_region_id,
                    icon: "search",
                    label: "Search",
                    color: "primary"
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
                      createTextVNode(" Select a location above to get started ")
                    ])) : createCommentVNode("", true),
                    withDirectives(createBaseVNode("div", null, [
                      createVNode(QCard, { class: "bg-seamless q-mt-md" }, {
                        default: withCtx(() => [
                          createVNode(QCardSection, null, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_7, [
                                createVNode(QSpace),
                                landingData.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(landingData.value, (l) => {
                                    return openBlock(), createElementBlock("div", {
                                      key: l.name,
                                      class: "q-mr-lg"
                                    }, [
                                      createBaseVNode("div", _hoisted_9, [
                                        createVNode(QCircularProgress, {
                                          value: l.per,
                                          size: "32px",
                                          color: "primary",
                                          "track-color": "grey-5"
                                        }, null, 8, ["value"]),
                                        createBaseVNode("div", _hoisted_10, [
                                          createBaseVNode("div", _hoisted_11, toDisplayString(l.name) + " Bookings", 1),
                                          createBaseVNode("div", null, toDisplayString(l.oc) + "/" + toDisplayString(l.cc) + " - " + toDisplayString(l.per) + "% ", 1)
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ])) : createCommentVNode("", true),
                                createBaseVNode("div", null, [
                                  createVNode(QBtnGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(QBtn, {
                                        onClick: _cache[5] || (_cache[5] = ($event) => onPrev()),
                                        icon: "chevron_left",
                                        color: "secondary"
                                      }),
                                      createVNode(QBtn, {
                                        onClick: _cache[6] || (_cache[6] = ($event) => onToday()),
                                        label: "Today",
                                        color: "secondary"
                                      }),
                                      createVNode(QBtn, {
                                        onClick: _cache[7] || (_cache[7] = ($event) => onNext()),
                                        icon: "chevron_right",
                                        color: "secondary"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_12, [
                                createVNode(_component_q_calendar_scheduler, {
                                  ref_key: "calendarRef",
                                  ref: calendarRef,
                                  modelValue: selectedDate.value,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => selectedDate.value = $event),
                                  "model-resources": dataResources.value,
                                  "onUpdate:modelResources": _cache[9] || (_cache[9] = ($event) => dataResources.value = $event),
                                  view: "week",
                                  "short-weekday-label": "",
                                  animated: "",
                                  bordered: "",
                                  weekdays: [1, 2, 3, 4, 5, 6, 0],
                                  style: normalizeStyle(unref(styles)),
                                  onChange
                                }, {
                                  "resource-label": withCtx(({ scope }) => [
                                    createBaseVNode("div", _hoisted_13, [
                                      createVNode(_sfc_main$6, {
                                        user: scope.resource
                                      }, null, 8, ["user"]),
                                      createBaseVNode("div", _hoisted_14, [
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
                                      hasEvents(scope) ? (openBlock(), createElementBlock("div", _hoisted_16, [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList(getEvents(scope), (event) => {
                                          return openBlock(), createElementBlock("div", {
                                            key: event.time,
                                            class: "q-mt-xs"
                                          }, [
                                            createVNode(QBadge, {
                                              label: `${unref(hourDisplay)(event.start_time)} - ${unref(hourDisplay)(event.end_time)} (${event.orders})`,
                                              class: "q-mb-xs cursor-pointer",
                                              onClick: ($event) => editUserRosterSchedule(event.id),
                                              color: event.active ? "positive" : "negative"
                                            }, null, 8, ["label", "onClick", "color"])
                                          ]);
                                        }), 128))
                                      ])) : createCommentVNode("", true),
                                      isAfterToday(scope) && currentHover.value && currentHover.value.resource === scope.resource.id && currentHover.value.date === scope.timestamp.date ? (openBlock(), createElementBlock("div", _hoisted_17, [
                                        createVNode(QBtn, {
                                          onClick: ($event) => newUserRosterSchedule(scope),
                                          icon: "add_circle",
                                          flat: "",
                                          size: "sm",
                                          dense: "",
                                          label: _ctx.$t("schedule.create"),
                                          color: "grey-6"
                                        }, null, 8, ["onClick", "label"])
                                      ])) : createCommentVNode("", true)
                                    ], 40, _hoisted_15)
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
