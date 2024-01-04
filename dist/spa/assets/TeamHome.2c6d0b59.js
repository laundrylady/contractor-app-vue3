import { B as defineComponent, aj as useRoute, g as computed, m as openBlock, n as createElementBlock, l as createVNode, P as QBtn, i as inject, C as reactive, r as ref, o as onMounted, G as onBeforeUnmount, w as watch, by as resolveComponent, a9 as createBlock, K as withCtx, z as createCommentVNode, q as createBaseVNode, R as unref, N as QIcon, ab as createTextVNode, ac as toDisplayString, t as normalizeClass } from "./index.cbfc43e6.js";
import { a as QItem, Q as QItemSection } from "./format.e163d39a.js";
import { Q as QList } from "./QList.7ec85666.js";
import { _ as _sfc_main$2, Q as QDrawer } from "./MapWithMarker.cb3c8f8e.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.eac3a66c.js";
import { Q as QPage } from "./QPage.ea5badfa.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.c77072bf.js";
import { u as useQuasar } from "./use-quasar.ac2434ae.js";
import { a as api } from "./axios.87c590ec.js";
import { _ as _sfc_main$3 } from "./PostcodeRegionDisplay.05bd6d0e.js";
import { _ as _sfc_main$4 } from "./StatusTag.b96e98c5.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { A as dateTimeTz } from "./help.754a9801.js";
import "./touch.3df10340.js";
import "./selection.6760fa44.js";
import "./QResizeObserver.603c4859.js";
import "./QBadge.533b3596.js";
import "./common.9c1d7de3.js";
import "./common.f3fac384.js";
const _hoisted_1$1 = { class: "flex" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TeamNav",
  props: {
    model: null
  },
  setup(__props) {
    const route = useRoute();
    const currentRoute = computed(() => route.name);
    const tabBtnInfo = (val) => {
      if (currentRoute.value === val) {
        return {
          outline: false,
          color: "primary"
        };
      }
      if (val === "team-comms" && currentRoute.value && ["team-sms", "team-notifications"].indexOf(currentRoute.value.toString()) !== -1) {
        return {
          outline: false,
          color: "primary"
        };
      }
      if (val === "team-invoices" && currentRoute.value && ["team-invoices", "team-payments"].indexOf(currentRoute.value.toString()) !== -1) {
        return {
          outline: false,
          color: "primary"
        };
      }
      return {
        outline: true,
        color: ""
      };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(QBtn, {
          to: { name: "team-dashboard", params: { id: __props.model.id } },
          label: "Details",
          outline: tabBtnInfo("team-dashboard").outline,
          rounded: "",
          color: tabBtnInfo("team-dashboard").color,
          class: "q-mr-sm"
        }, null, 8, ["to", "outline", "color"]),
        createVNode(QBtn, {
          to: { name: "team-orders", params: { id: __props.model.id } },
          label: _ctx.$t("order.namePlural"),
          outline: tabBtnInfo("team-orders").outline,
          rounded: "",
          color: tabBtnInfo("team-orders").color,
          class: "q-mr-sm"
        }, null, 8, ["to", "label", "outline", "color"]),
        createVNode(QBtn, {
          to: { name: "team-invoices", params: { id: __props.model.id } },
          label: _ctx.$t("invoice.namePlural"),
          outline: tabBtnInfo("team-invoices").outline,
          rounded: "",
          color: tabBtnInfo("team-invoices").color
        }, null, 8, ["to", "label", "outline", "color"])
      ]);
    };
  }
});
const _hoisted_1 = { class: "bg-white q-ma-sm rounded-borders" };
const _hoisted_2 = {
  key: 0,
  class: "text-right q-pa-sm"
};
const _hoisted_3 = { class: "q-pa-sm" };
const _hoisted_4 = ["href"];
const _hoisted_5 = {
  key: 0,
  class: "flex"
};
const _hoisted_6 = { class: "q-mb-xs bg-white q-pa-md rounded-borders" };
const _hoisted_7 = { class: "row items-center q-mb-sm" };
const _hoisted_8 = { class: "col-xs-12 col-sm-8" };
const _hoisted_9 = { class: "flex items-center" };
const _hoisted_10 = { class: "text-h5 items-center" };
const _hoisted_11 = { key: 0 };
const _hoisted_12 = { key: 1 };
const _hoisted_13 = {
  key: 0,
  class: "col-xs-2 col-sm-4 text-right"
};
const _hoisted_14 = { class: "q-mb-xs" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamHome",
  setup(__props) {
    const route = useRoute();
    const $q = useQuasar();
    const bus = inject("bus");
    const drawer = reactive({ left: !$q.screen.xs, right: true });
    const model = ref();
    const getTeam = async () => {
      api.get(`/public/team/${route.params.id}?feed=true`).then((response) => {
        model.value = response.data;
        document.title = response.data.name;
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    onMounted(async () => {
      await getTeam();
      bus.on("getTeam", () => {
        getTeam();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getTeam");
    });
    watch(() => route.params.id, (newVal) => {
      if (route.name === "team-dashboard") {
        if (newVal) {
          getTeam();
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return model.value && model.value.id ? (openBlock(), createBlock(QLayout, {
        key: 0,
        view: "lHh Lpr lFf",
        container: "",
        class: "layout-height layout-container"
      }, {
        default: withCtx(() => [
          createVNode(QDrawer, {
            modelValue: drawer.left,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => drawer.left = $event),
            width: 300,
            side: "left",
            class: normalizeClass({ "bg-page-background": !unref($q).screen.xs })
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                unref($q).screen.xs ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  createVNode(QBtn, {
                    onClick: _cache[0] || (_cache[0] = ($event) => drawer.left = false),
                    icon: "close",
                    flat: "",
                    round: "",
                    dense: ""
                  })
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_3, [
                  model.value.lat && model.value.lng ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    "lat-lng": { lat: parseFloat(model.value.lat), lng: parseFloat(model.value.lng) }
                  }, null, 8, ["lat-lng"])) : createCommentVNode("", true)
                ]),
                createVNode(QList, {
                  dense: "",
                  class: "q-mt-md"
                }, {
                  default: withCtx(() => [
                    createVNode(QItem, null, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, { name: "account_circle" })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(model.value.name), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, null, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, { name: "phone" })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createBaseVNode("a", {
                              href: `tel:${model.value.mobile}`,
                              class: "link"
                            }, toDisplayString(model.value.mobile), 9, _hoisted_4)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(QItem, null, {
                      default: withCtx(() => [
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, { name: "place" })
                          ]),
                          _: 1
                        }),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            model.value.suburbpostcoderegion ? (openBlock(), createBlock(_sfc_main$3, {
                              key: 0,
                              postcoderegions: [model.value.suburbpostcoderegion]
                            }, null, 8, ["postcoderegions"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "class"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                padding: "",
                class: "q-pa-md"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    !unref($q).screen.xs ? (openBlock(), createElementBlock("div", _hoisted_5, [
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
                            label: model.value.name
                          }, null, 8, ["label"])
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("div", _hoisted_7, [
                      createBaseVNode("div", _hoisted_8, [
                        createBaseVNode("div", _hoisted_9, [
                          createBaseVNode("div", null, [
                            createBaseVNode("div", _hoisted_10, toDisplayString(model.value.name), 1),
                            createBaseVNode("div", null, [
                              `${model.value.first_name} ${model.value.last_name}` !== model.value.name ? (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString(model.value.first_name) + " " + toDisplayString(model.value.last_name) + " - ", 1)) : createCommentVNode("", true),
                              createTextVNode(toDisplayString(model.value.type), 1)
                            ]),
                            createBaseVNode("div", null, [
                              unref($q).screen.xs ? (openBlock(), createBlock(QIcon, {
                                key: 0,
                                name: "place",
                                onClick: _cache[2] || (_cache[2] = ($event) => drawer.left = true)
                              })) : createCommentVNode("", true),
                              model.value.address1 ? (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString(model.value.address1), 1)) : createCommentVNode("", true),
                              createTextVNode(" " + toDisplayString(model.value.address2), 1)
                            ]),
                            createBaseVNode("div", null, [
                              createVNode(QIcon, { name: "phone" }),
                              createTextVNode(" " + toDisplayString(model.value.mobile), 1)
                            ]),
                            createBaseVNode("div", null, [
                              createVNode(QIcon, { name: "payments" }),
                              createTextVNode(" " + toDisplayString(model.value.payment_terms) + " - " + toDisplayString(model.value.payment_terms_days) + " days", 1)
                            ])
                          ])
                        ])
                      ]),
                      !unref($q).screen.xs ? (openBlock(), createElementBlock("div", _hoisted_13, [
                        createBaseVNode("div", _hoisted_14, [
                          createTextVNode(" Updated: "),
                          createBaseVNode("strong", null, toDisplayString(unref(dateTimeTz)(model.value.updated_at)), 1)
                        ]),
                        createVNode(_sfc_main$4, {
                          status: model.value.status
                        }, null, 8, ["status"])
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode(_sfc_main$1, { model: model.value }, null, 8, ["model"])
                  ]),
                  createVNode(_component_router_view, { model: model.value }, null, 8, ["model"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
