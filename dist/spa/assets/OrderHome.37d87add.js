import { A as defineComponent, a9 as useRoute, i as inject, B as reactive, r as ref, o as onMounted, E as onBeforeUnmount, w as watch, bv as resolveComponent, l as openBlock, J as createBlock, K as withCtx, y as createCommentVNode, k as createVNode, p as createBaseVNode, R as unref, m as createElementBlock, N as QIcon, P as QBtn, aH as toDisplayString, aG as createTextVNode, s as normalizeClass, G as withDirectives } from "./index.16fb3380.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.a218984e.js";
import { Q as QSpace } from "./QSpace.37c7d68f.js";
import { Q as QBadge } from "./QBadge.5dfc17c4.js";
import { Q as QHeader } from "./QHeader.59c998f7.js";
import { Q as QItemLabel } from "./selection.84b02b1d.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.03ec3358.js";
import { Q as QList } from "./QList.ddee51a8.js";
import { _ as _sfc_main$2, Q as QDrawer } from "./MapWithMarker.c9b646ec.js";
import { Q as QPage } from "./QPage.70c64609.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.181b22e8.js";
import { C as ClosePopup } from "./ClosePopup.b51813b3.js";
import { u as useQuasar } from "./use-quasar.bd426c63.js";
import { a as api } from "./axios.fbeb5029.js";
import { _ as _sfc_main$3 } from "./PostcodeRegionDisplay.ade8f712.js";
import { _ as _sfc_main$1 } from "./StatusTag.f3c1de79.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { e as hourBookingDisplay, b as displayDateDay, t as fromNowTz } from "./help.b57562bf.js";
import "./QResizeObserver.d4ded545.js";
import "./TouchPan.9e309714.js";
import "./touch.3df10340.js";
import "./format.3e32b8d9.js";
const _hoisted_1 = { class: "q-pl-md q-pr-md q-pt-md" };
const _hoisted_2 = {
  key: 0,
  class: "flex"
};
const _hoisted_3 = { class: "q-mb-xs" };
const _hoisted_4 = { class: "row items-center q-mb-md" };
const _hoisted_5 = { class: "col-xs-12 col-sm-9" };
const _hoisted_6 = { class: "flex items-center" };
const _hoisted_7 = { class: "text-h5" };
const _hoisted_8 = { class: "q-mr-sm" };
const _hoisted_9 = { class: "flex items-start" };
const _hoisted_10 = {
  key: 0,
  class: "q-mt-xs"
};
const _hoisted_11 = {
  key: 0,
  class: "col-xs-2 col-sm-3 text-right"
};
const _hoisted_12 = { class: "q-mt-xs" };
const _hoisted_13 = {
  key: 0,
  class: "text-right q-pa-sm"
};
const _hoisted_14 = { class: "q-pa-sm" };
const _hoisted_15 = ["href"];
const _hoisted_16 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderHome",
  setup(__props) {
    const route = useRoute();
    const $q = useQuasar();
    const bus = inject("bus");
    const drawer = reactive({ left: $q.screen.gt.md, right: true });
    const futureRecurring = ref();
    const model = ref();
    const getOrder = async (data = {}) => {
      api.get(`/public/order/${route.params.id}`).then((response) => {
        var _a;
        if (data.onlyTotals && model.value && model.value.invoice) {
          model.value.invoice.total_price = response.data.invoice.total_price;
          model.value.invoice.total_price_gst = response.data.invoice.total_price_gst;
          model.value.invoice.grand_total_price = response.data.invoice.grand_total_price;
          model.value.invoice.products = response.data.invoice.products;
          model.value.invoice.status = response.data.invoice.status;
          model.value.status = response.data.status;
        } else {
          model.value = response.data;
        }
        document.title = `Booking #${response.data.display_id}`;
        if ((_a = model.value) == null ? void 0 : _a.recurring_order) {
          api.get(`/public/order/futurerecurring/${model.value.id}`).then((res) => {
            futureRecurring.value = res.data;
          }).catch((err) => {
            useMixinDebug(err);
          });
        }
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    onMounted(async () => {
      await getOrder();
      bus.on("getOrder", (data) => {
        if (model.value && model.value.id === data.id) {
          getOrder();
        }
      });
      bus.on("invoice:refresh", (data) => {
        if (model.value && model.value.invoice_id === data.id) {
          getOrder();
        }
      });
    });
    onBeforeUnmount(() => {
      bus.off("getOrder");
      bus.off("invoice:refresh");
    });
    watch(() => route.params.id, (newVal) => {
      if (newVal && route.name === "order-edit") {
        getOrder();
      }
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_router_view = resolveComponent("router-view");
      return model.value && model.value.id ? (openBlock(), createBlock(QLayout, {
        key: 0,
        view: "lHh Lpr lFf",
        container: "",
        class: "layout-height layout-container"
      }, {
        default: withCtx(() => [
          createVNode(QHeader, {
            class: normalizeClass({ "page-title text-black": !unref($q).dark.isActive, "bg-dark": unref($q).dark.isActive }),
            bordered: ""
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                !unref($q).screen.xs ? (openBlock(), createElementBlock("div", _hoisted_2, [
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
                        label: _ctx.$t("order.namePlural"),
                        to: { name: "appDashboard" }
                      }, null, 8, ["label"]),
                      createVNode(QBreadcrumbsEl, {
                        label: `#${model.value.display_id.toString()}`
                      }, null, 8, ["label"])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, [
                      createBaseVNode("div", _hoisted_6, [
                        unref($q).screen.lt.lg ? (openBlock(), createBlock(QBtn, {
                          key: 0,
                          onClick: _cache[0] || (_cache[0] = ($event) => drawer.left = !drawer.left),
                          icon: "menu",
                          outline: "",
                          flat: "",
                          class: "q-pl-sm q-pr-sm"
                        })) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_7, [
                          createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.$t("order.name")) + " #" + toDisplayString(model.value.display_id), 1)
                        ]),
                        createVNode(QSpace),
                        model.value.recurring_parent_id ? (openBlock(), createBlock(_component_router_link, {
                          key: 1,
                          to: { name: "order-edit", params: { id: model.value.recurring_parent_id } },
                          class: "link q-ml-sm"
                        }, {
                          default: withCtx(() => [
                            createVNode(QIcon, { name: "sync" }),
                            createTextVNode(" Recurring")
                          ]),
                          _: 1
                        }, 8, ["to"])) : createCommentVNode("", true),
                        createVNode(QSpace),
                        unref($q).screen.xs ? (openBlock(), createBlock(_sfc_main$1, {
                          key: 2,
                          status: model.value.status,
                          small: true
                        }, null, 8, ["status"])) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("div", _hoisted_9, [
                        createBaseVNode("div", null, [
                          createBaseVNode("div", null, [
                            createTextVNode(toDisplayString(model.value.team.name) + " ", 1),
                            createVNode(QIcon, { name: "event" }),
                            createTextVNode(" " + toDisplayString(model.value.scheduled_pickup_date) + " (" + toDisplayString(unref(hourBookingDisplay)(model.value.scheduled_pickup_time)) + ") ", 1)
                          ]),
                          model.value.recurring_order ? (openBlock(), createElementBlock("div", _hoisted_10, [
                            createVNode(QBadge, {
                              class: "q-pa-sm",
                              color: "secondary"
                            }, {
                              default: withCtx(() => [
                                createVNode(QIcon, {
                                  name: "sync",
                                  class: "q-mr-xs"
                                }),
                                createTextVNode(toDisplayString(`Every
                      ${model.value.recurring} on ${unref(displayDateDay)(model.value.scheduled_pickup_date)} ${model.value.agreed_pickup_time ? model.value.agreed_pickup_time : unref(hourBookingDisplay)(model.value.scheduled_pickup_time)}`), 1)
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    !unref($q).screen.xs ? (openBlock(), createElementBlock("div", _hoisted_11, [
                      createVNode(_sfc_main$1, {
                        status: model.value.status
                      }, null, 8, ["status"]),
                      createBaseVNode("div", _hoisted_12, [
                        createTextVNode(" Last updated "),
                        createBaseVNode("strong", null, toDisplayString(unref(fromNowTz)(model.value.updated_at)), 1)
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(QDrawer, {
            modelValue: drawer.left,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => drawer.left = $event),
            width: 300,
            side: "left",
            class: "page-title"
          }, {
            default: withCtx(() => [
              unref($q).screen.lt.lg ? (openBlock(), createElementBlock("div", _hoisted_13, [
                withDirectives(createVNode(QBtn, {
                  onClick: _cache[1] || (_cache[1] = ($event) => drawer.left = false),
                  icon: "close",
                  flat: "",
                  round: "",
                  dense: ""
                }, null, 512), [
                  [ClosePopup]
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_14, [
                model.value.lat && model.value.lng ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  "lat-lng": { lat: parseFloat(model.value.lat), lng: parseFloat(model.value.lng) }
                }, null, 8, ["lat-lng"])) : createCommentVNode("", true)
              ]),
              createVNode(QList, {
                dense: "",
                class: "q-mt-md q-ml-sm q-mr-sm"
              }, {
                default: withCtx(() => [
                  createVNode(QItemLabel, { header: "" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("team.name")), 1)
                    ]),
                    _: 1
                  }),
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
                          createTextVNode(toDisplayString(model.value.team.name), 1)
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
                            href: `tel:${model.value.team.mobile}`,
                            class: "link"
                          }, toDisplayString(model.value.team.mobile), 9, _hoisted_15)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItemLabel, { header: "" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("team.pickupAddress")), 1)
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
                          createBaseVNode("div", null, toDisplayString(model.value.address1) + " " + toDisplayString(model.value.address2), 1),
                          model.value.suburbpostcoderegion ? (openBlock(), createBlock(_sfc_main$3, {
                            key: 0,
                            postcoderegions: [model.value.suburbpostcoderegion]
                          }, null, 8, ["postcoderegions"])) : createCommentVNode("", true)
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
                          createVNode(QIcon, { name: "event" })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(model.value.scheduled_pickup_date) + " (" + toDisplayString(unref(hourBookingDisplay)(model.value.scheduled_pickup_time)) + ") ", 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItemLabel, { header: "" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("contractor.name")), 1)
                    ]),
                    _: 1
                  }),
                  model.value.contractor ? (openBlock(), createBlock(QItem, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, { name: "engineering" })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(model.value.contractor.contractor_badge_name), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  model.value.contractor ? (openBlock(), createBlock(QItem, { key: 1 }, {
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
                            href: `tel:${model.value.contractor.mobile}`,
                            class: "link"
                          }, toDisplayString(model.value.contractor.mobile), 9, _hoisted_16)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  !model.value.contractor ? (openBlock(), createBlock(QItem, { key: 2 }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, {
                            name: "warning",
                            color: "negative"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, { class: "text-negative" }, {
                        default: withCtx(() => [
                          createTextVNode("NO CONTRACTOR ASSIGNED")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                padding: "",
                class: normalizeClass({ "q-pa-md": unref($q).screen.xs })
              }, {
                default: withCtx(() => [
                  createVNode(_component_router_view, {
                    model: model.value,
                    "onUpdate:order": getOrder,
                    futureRecurring: futureRecurring.value
                  }, null, 8, ["model", "futureRecurring"])
                ]),
                _: 1
              }, 8, ["class"])
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
