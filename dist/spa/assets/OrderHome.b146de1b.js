import { B as defineComponent, aa as useRoute, i as inject, C as reactive, r as ref, o as onMounted, G as onBeforeUnmount, w as watch, by as resolveComponent, m as openBlock, K as createBlock, L as withCtx, z as createCommentVNode, l as createVNode, q as createBaseVNode, S as unref, n as createElementBlock, O as QIcon, R as QBtn, aI as toDisplayString, aj as createTextVNode, t as normalizeClass, H as withDirectives } from "./index.915b3663.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.6dc99b51.js";
import { Q as QSpace } from "./QSpace.fa4ba0ff.js";
import { Q as QBadge } from "./QBadge.0d3eb609.js";
import { Q as QHeader } from "./QHeader.340184fd.js";
import { Q as QItemLabel } from "./QItemLabel.aa8d2617.js";
import { a as QItem, Q as QItemSection } from "./selection.8ca46533.js";
import { Q as QList } from "./QList.05360fe2.js";
import { _ as _sfc_main$2, Q as QDrawer } from "./MapWithMarker.a87bf970.js";
import { Q as QPage } from "./QPage.62086428.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.12163425.js";
import { C as ClosePopup } from "./ClosePopup.269b47c8.js";
import { o as openURL } from "./open-url.85cf74c1.js";
import { u as useQuasar } from "./use-quasar.7e6ce9d8.js";
import { a as api } from "./axios.c80c70de.js";
import { _ as _sfc_main$3 } from "./PostcodeRegionDisplay.720de373.js";
import { _ as _sfc_main$1 } from "./StatusTag.6737357f.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { h as hourBookingDisplay, e as displayDateDay, w as fromNowTz } from "./help.90d28660.js";
import "./QResizeObserver.5c030009.js";
import "./touch.3df10340.js";
import "./format.3e32b8d9.js";
const _hoisted_1 = { class: "q-pl-md q-pr-md q-pt-md" };
const _hoisted_2 = {
  key: 0,
  class: "flex"
};
const _hoisted_3 = { class: "q-mb-xs page-title q-pa-md rounded-borders" };
const _hoisted_4 = { class: "row items-center" };
const _hoisted_5 = { class: "col-xs-12 col-sm-8" };
const _hoisted_6 = { class: "flex items-center" };
const _hoisted_7 = { class: "text-h5" };
const _hoisted_8 = { class: "q-mr-sm" };
const _hoisted_9 = { class: "flex items-start" };
const _hoisted_10 = { key: 1 };
const _hoisted_11 = {
  key: 0,
  class: "q-mt-xs"
};
const _hoisted_12 = {
  key: 0,
  class: "col-xs-2 col-sm-4 text-right"
};
const _hoisted_13 = { key: 1 };
const _hoisted_14 = {
  key: 2,
  class: "text-italic"
};
const _hoisted_15 = { class: "bg-white q-ma-sm rounded-borders" };
const _hoisted_16 = {
  key: 0,
  class: "text-right q-pa-sm"
};
const _hoisted_17 = { class: "q-pa-sm" };
const _hoisted_18 = ["href"];
const _hoisted_19 = { key: 0 };
const _hoisted_20 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderHome",
  setup(__props) {
    const route = useRoute();
    const $q = useQuasar();
    const bus = inject("bus");
    const drawer = reactive({ left: $q.screen.gt.md, right: true });
    const futureRecurring = ref();
    const model = ref();
    const teamHasOutstandings = ref(false);
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
          if (model.value) {
            api.get(`/public/team/hasoutstandings/${model.value.team_id}`).then((res) => {
              teamHasOutstandings.value = res.data.has;
            }).catch((error) => {
              useMixinDebug(error);
            });
          }
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
            class: normalizeClass({ "bg-page text-black": !unref($q).dark.isActive, "bg-dark": unref($q).dark.isActive })
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
                            teamHasOutstandings.value ? (openBlock(), createBlock(QIcon, {
                              key: 0,
                              name: "attach_money",
                              title: "Has outstandings",
                              color: "negative"
                            })) : createCommentVNode("", true),
                            createVNode(_component_router_link, {
                              to: { name: "orders", params: { team_id: model.value.team_id } },
                              class: "link"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(model.value.team.name), 1)
                              ]),
                              _: 1
                            }, 8, ["to"]),
                            createTextVNode(),
                            createVNode(QIcon, { name: "event" }),
                            createTextVNode(" " + toDisplayString(model.value.scheduled_pickup_date) + " ", 1),
                            model.value.scheduled_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_10, " (" + toDisplayString(unref(hourBookingDisplay)(model.value.scheduled_pickup_time)) + ") ", 1)) : createCommentVNode("", true)
                          ]),
                          model.value.recurring_order && model.value.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_11, [
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
                      ${model.value.recurring} on ${model.value.scheduled_pickup_date ? unref(displayDateDay)(model.value.scheduled_pickup_date) : ""} ${model.value.agreed_pickup_time ? model.value.agreed_pickup_time : unref(hourBookingDisplay)(model.value.scheduled_pickup_time)}`), 1)
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    !unref($q).screen.xs ? (openBlock(), createElementBlock("div", _hoisted_12, [
                      model.value.status === "confirmed" ? (openBlock(), createBlock(QBtn, {
                        key: 0,
                        onClick: _cache[1] || (_cache[1] = ($event) => unref(openURL)(`/portal/b/${model.value.id}`)),
                        flat: "",
                        icon: "language",
                        round: "",
                        class: "q-mr-xs"
                      })) : createCommentVNode("", true),
                      createVNode(_sfc_main$1, {
                        status: model.value.status
                      }, null, 8, ["status"]),
                      model.value.status === "cancelled" ? (openBlock(), createElementBlock("span", _hoisted_13, " by " + toDisplayString(model.value.cancel_by), 1)) : createCommentVNode("", true),
                      model.value.cancel_reason ? (openBlock(), createElementBlock("div", _hoisted_14, toDisplayString(model.value.cancel_reason), 1)) : createCommentVNode("", true),
                      createBaseVNode("div", null, [
                        createTextVNode(" Updated "),
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
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => drawer.left = $event),
            width: 300,
            side: "left",
            class: normalizeClass({ "bg-page": !unref($q).screen.xs })
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_15, [
                unref($q).screen.lt.lg ? (openBlock(), createElementBlock("div", _hoisted_16, [
                  withDirectives(createVNode(QBtn, {
                    onClick: _cache[2] || (_cache[2] = ($event) => drawer.left = false),
                    icon: "close",
                    flat: "",
                    round: "",
                    dense: ""
                  }, null, 512), [
                    [ClosePopup]
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_17, [
                  model.value.lat && model.value.lng ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    "lat-lng": { lat: parseFloat(model.value.lat), lng: parseFloat(model.value.lng) }
                  }, null, 8, ["lat-lng"])) : createCommentVNode("", true)
                ]),
                createVNode(QList, {
                  dense: "",
                  class: "q-mt-md q-ml-sm q-mr-sm q-pb-md"
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
                            }, toDisplayString(model.value.team.mobile), 9, _hoisted_18)
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
                            createTextVNode(toDisplayString(model.value.scheduled_pickup_date) + " ", 1),
                            model.value.scheduled_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_19, "(" + toDisplayString(unref(hourBookingDisplay)(model.value.scheduled_pickup_time)) + ")", 1)) : createCommentVNode("", true)
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
                            }, toDisplayString(model.value.contractor.mobile), 9, _hoisted_20)
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
