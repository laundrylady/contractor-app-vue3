import { A as defineComponent, r as ref, m as openBlock, n as createElementBlock, l as createVNode, L as withCtx, R as createTextVNode, bp as QSeparator, S as QBtn, ad as useRoute, i as inject, B as reactive, o as onMounted, E as onBeforeUnmount, w as watch, J as resolveComponent, K as createBlock, y as createCommentVNode, q as createBaseVNode, O as QIcon, b8 as toDisplayString, U as unref, t as normalizeClass } from "./index.e647c85a.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.14144362.js";
import { Q as QBadge } from "./QBadge.5efaf9f7.js";
import { Q as QHeader } from "./QHeader.001fd0f6.js";
import { Q as QItemLabel } from "./rtl.4f5e13e8.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.99659658.js";
import { Q as QList } from "./QList.2f0afc60.js";
import { Q as QDrawer } from "./QDrawer.bdde26ac.js";
import { Q as QPage } from "./QPage.660fce82.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.2e2ab899.js";
import { a as api } from "./axios.ccd3a804.js";
import { Q as QRouteTab, _ as _sfc_main$3 } from "./QRouteTab.037f3cc2.js";
import { _ as _sfc_main$4 } from "./PostcodeRegionDisplay.24757491.js";
import { _ as _sfc_main$2 } from "./StatusTag.c8d66888.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { i as displayDateDay, j as hourBookingDisplay, l as fromNowTz } from "./help.c0f85e41.js";
import { Q as QMenu } from "./format.8e90d58d.js";
import { Q as QTabs } from "./QTabs.4874b266.js";
import "./QResizeObserver.97b49885.js";
import "./TouchPan.9e1ee92a.js";
import "./touch.70a9dd44.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderNav",
  props: {
    model: null
  },
  setup(__props) {
    const currentTab = ref("dashboard");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(QBtn, {
          color: "black",
          outline: "",
          icon: "menu",
          class: "lt-sm"
        }, {
          default: withCtx(() => [
            createVNode(QMenu, { "auto-close": "" }, {
              default: withCtx(() => [
                createVNode(QList, { style: { "min-width": "100px" } }, {
                  default: withCtx(() => [
                    createVNode(QItem, {
                      clickable: "",
                      to: { name: "order-edit", params: { id: __props.model.id } }
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("Details")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(QSeparator),
                    createVNode(QItem, {
                      clickable: "",
                      to: { name: "order-documents", params: { id: __props.model.id } }
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("Documents")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(QSeparator),
                    createVNode(QItem, {
                      clickable: "",
                      to: { name: "order-sms", params: { id: __props.model.id } }
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("SMS Notifications")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(QItem, {
                      clickable: "",
                      to: { name: "order-notifications", params: { id: __props.model.id } }
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("Email Notifications")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(QSeparator),
                    createVNode(QItem, {
                      clickable: "",
                      to: { name: "order-audit", params: { id: __props.model.id } }
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("Audit")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QTabs, {
          modelValue: currentTab.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentTab.value = $event),
          align: "left",
          "active-bg-color": "primary",
          "active-color": "white"
        }, {
          default: withCtx(() => [
            createVNode(QRouteTab, {
              to: { name: "order-edit", params: { id: __props.model.id } },
              label: "Details",
              icon: "info"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "order-documents", params: { id: __props.model.id } },
              label: "Documents",
              icon: "attach_file"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "order-sms", params: { id: __props.model.id } },
              label: "SMS",
              icon: "chat"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "order-notifications", params: { id: __props.model.id } },
              label: "Emails",
              icon: "mail"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "order-audit", params: { id: __props.model.id } },
              label: "Audit",
              icon: "bolt"
            }, null, 8, ["to"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
const _hoisted_1 = { class: "q-pl-md q-pr-md q-pt-md" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = { class: "q-mb-lg" };
const _hoisted_4 = { class: "row items-center q-mb-lg" };
const _hoisted_5 = { class: "col-xs-12 col-sm-9" };
const _hoisted_6 = { class: "flex items-center" };
const _hoisted_7 = { class: "text-h4" };
const _hoisted_8 = { class: "q-mr-sm" };
const _hoisted_9 = { class: "q-mt-xs" };
const _hoisted_10 = {
  key: 0,
  class: "col-xs-2 col-sm-3 text-right"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_12 = {
  key: 0,
  class: "text-right q-pa-sm"
};
const _hoisted_13 = ["href"];
const _hoisted_14 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderHome",
  setup(__props) {
    const route = useRoute();
    const bus = inject("bus");
    const drawer = reactive({ left: true, right: true });
    const futureRecurring = ref();
    const model = ref();
    const getOrder = async (data = {}) => {
      api.get(`/order/${route.params.id}`).then((response) => {
        var _a;
        if (data.onlyTotals && model.value) {
          model.value.total_price = response.data.total_price;
          model.value.total_price_gst = response.data.total_price_gst;
          model.value.grand_total_price = response.data.grand_total_price;
          if (response.data.products.length !== model.value.products.length) {
            model.value.products = response.data.products;
          }
        } else {
          model.value = response.data;
        }
        document.title = `Booking #${response.data.display_id}`;
        if ((_a = model.value) == null ? void 0 : _a.recurring_order) {
          api.get(`/order/futurerecurring/${model.value.id}`).then((res) => {
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
        getOrder(data);
      });
    });
    onBeforeUnmount(() => {
      bus.off("getOrder");
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
        class: "layout-height"
      }, {
        default: withCtx(() => [
          createVNode(QHeader, {
            class: normalizeClass({ "page-title text-black": !_ctx.$q.dark.isActive, "bg-dark": _ctx.$q.dark.isActive }),
            bordered: ""
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
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
                        to: { name: "orders" }
                      }, null, 8, ["label"]),
                      createVNode(QBreadcrumbsEl, {
                        label: `#${model.value.display_id.toString()}`
                      }, null, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, [
                      createBaseVNode("div", _hoisted_6, [
                        createBaseVNode("div", _hoisted_7, [
                          _ctx.$q.screen.lt.lg ? (openBlock(), createBlock(QBtn, {
                            key: 0,
                            onClick: _cache[0] || (_cache[0] = ($event) => drawer.left = !drawer.left),
                            icon: "menu",
                            color: "primary",
                            outline: "",
                            class: "q-mr-md"
                          })) : createCommentVNode("", true),
                          createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.$t("order.name")) + " #" + toDisplayString(model.value.display_id), 1)
                        ]),
                        createVNode(_sfc_main$2, {
                          status: model.value.status
                        }, null, 8, ["status"]),
                        model.value.recurring_parent_id ? (openBlock(), createBlock(_component_router_link, {
                          key: 0,
                          to: { name: "order-edit", params: { id: model.value.recurring_parent_id } },
                          class: "link q-ml-sm",
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Recurring")
                          ]),
                          _: 1
                        }, 8, ["to"])) : createCommentVNode("", true),
                        model.value.recurring_order ? (openBlock(), createBlock(QBadge, {
                          key: 1,
                          class: "q-ml-sm q-pa-sm"
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
                        })) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("div", _hoisted_9, [
                        createTextVNode(toDisplayString(model.value.team.name) + " ", 1),
                        createVNode(QIcon, { name: "event" }),
                        createTextVNode(" " + toDisplayString(model.value.scheduled_pickup_date) + " (" + toDisplayString(unref(hourBookingDisplay)(model.value.scheduled_pickup_time)) + ")", 1)
                      ])
                    ]),
                    !_ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_10, [
                      createBaseVNode("div", null, [
                        createTextVNode(" Last updated"),
                        _hoisted_11,
                        createBaseVNode("strong", null, toDisplayString(unref(fromNowTz)(model.value.updated_at)), 1)
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode(_sfc_main$1, { model: model.value }, null, 8, ["model"])
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
            bordered: ""
          }, {
            default: withCtx(() => [
              _ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_12, [
                createVNode(QBtn, {
                  onClick: _cache[1] || (_cache[1] = ($event) => drawer.left = false),
                  icon: "close",
                  flat: "",
                  round: "",
                  dense: ""
                })
              ])) : createCommentVNode("", true),
              model.value.lat && model.value.lng ? (openBlock(), createBlock(_sfc_main$3, {
                key: 1,
                "lat-lng": { lat: parseFloat(model.value.lat), lng: parseFloat(model.value.lng) }
              }, null, 8, ["lat-lng"])) : createCommentVNode("", true),
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
                          createVNode(_component_router_link, {
                            to: { name: "team-dashboard", params: { id: model.value.team_id } },
                            class: "link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(model.value.team.name), 1)
                            ]),
                            _: 1
                          }, 8, ["to"])
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
                          }, toDisplayString(model.value.team.mobile), 9, _hoisted_13)
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
                          model.value.suburbpostcoderegion ? (openBlock(), createBlock(_sfc_main$4, {
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
                          createVNode(_component_router_link, {
                            to: { name: "contractor-dashboard", params: { id: model.value.contractor.id } },
                            class: "link"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(model.value.contractor.contractor_badge_name), 1)
                            ]),
                            _: 1
                          }, 8, ["to"])
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
                          }, toDisplayString(model.value.contractor.mobile), 9, _hoisted_14)
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
              createVNode(QPage, { padding: "" }, {
                default: withCtx(() => [
                  createVNode(_component_router_view, {
                    model: model.value,
                    "onUpdate:order": getOrder,
                    futureRecurring: futureRecurring.value
                  }, null, 8, ["model", "futureRecurring"])
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
