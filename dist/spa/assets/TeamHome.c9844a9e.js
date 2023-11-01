import { B as defineComponent, r as ref, m as openBlock, n as createElementBlock, l as createVNode, L as withCtx, ak as createTextVNode, bw as QSeparator, R as QBtn, aa as useRoute, i as inject, C as reactive, o as onMounted, G as onBeforeUnmount, w as watch, by as resolveComponent, K as createBlock, z as createCommentVNode, q as createBaseVNode, O as QIcon, aj as toDisplayString, S as unref, t as normalizeClass, F as Fragment, be as renderList } from "./index.f6bee7e8.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.4687b2c4.js";
import { Q as QBadge } from "./QBadge.f1d90eca.js";
import { Q as QHeader } from "./QHeader.bcabfe5b.js";
import { a as QItem, Q as QItemSection } from "./selection.17eb1196.js";
import { Q as QList } from "./QList.56bbd19d.js";
import { Q as QItemLabel } from "./QItemLabel.58d25c90.js";
import { _ as _sfc_main$2, Q as QDrawer } from "./MapWithMarker.8690f78f.js";
import { Q as QPage } from "./QPage.fd05722e.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.db42b8ef.js";
import { _ as _imports_0 } from "./ndis_heart.0820b9e2.js";
import { a as api } from "./axios.7f29f827.js";
import { _ as _sfc_main$3 } from "./PostcodeRegionDisplay.efa364a6.js";
import { _ as _sfc_main$4 } from "./UserAvatar.d999c7e4.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { w as fromNowTz } from "./help.1753c5fa.js";
import { Q as QMenu } from "./QMenu.99b4f319.js";
import { Q as QRouteTab } from "./QRouteTab.a5dadcb7.js";
import { Q as QTabs } from "./QTabs.18c72137.js";
import "./QResizeObserver.d6e4c1fb.js";
import "./touch.3df10340.js";
import "./format.3e32b8d9.js";
import "./QImg.faf69c02.js";
import "./use-ratio.97b6b461.js";
import "./rtl.b51694b1.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TeamNav",
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
                      to: { name: "team-edit", params: { id: __props.model.id } }
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
                    createVNode(QItem, {
                      clickable: "",
                      to: { name: "team-users", params: { id: __props.model.id } }
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode("Users")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["to"]),
                    createVNode(QSeparator),
                    createVNode(QItem, {
                      clickable: "",
                      to: { name: "team-documents", params: { id: __props.model.id } }
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
                      to: { name: "team-sms", params: { id: __props.model.id } }
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
                      to: { name: "team-notifications", params: { id: __props.model.id } }
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
                      to: { name: "team-audit", params: { id: __props.model.id } }
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
              to: { name: "team-dashboard", params: { id: __props.model.id } },
              label: "Dashboard",
              icon: "dashboard"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "team-edit", params: { id: __props.model.id } },
              label: "Details",
              icon: "info"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "team-orders", params: { id: __props.model.id } },
              label: _ctx.$t("order.namePlural"),
              icon: "event"
            }, null, 8, ["to", "label"]),
            createVNode(QRouteTab, {
              to: { name: "team-users", params: { id: __props.model.id } },
              label: _ctx.$t("team.userPlural"),
              icon: "account_circle"
            }, null, 8, ["to", "label"]),
            createVNode(QRouteTab, {
              to: { name: "team-documents", params: { id: __props.model.id } },
              label: "Documents",
              icon: "attach_file"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "team-sms", params: { id: __props.model.id } },
              label: "SMS",
              icon: "chat"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "team-notifications", params: { id: __props.model.id } },
              label: "Emails",
              icon: "mail"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "team-audit", params: { id: __props.model.id } },
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
const _hoisted_9 = {
  key: 0,
  class: "col-xs-2 col-sm-3 text-right"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_11 = {
  key: 0,
  class: "text-right q-pa-sm"
};
const _hoisted_12 = ["href"];
const _hoisted_13 = ["href"];
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  style: { "height": "32px" }
}, null, -1);
const _hoisted_15 = { key: 2 };
const _hoisted_16 = { class: "text-grey" };
const _hoisted_17 = { key: 3 };
const _hoisted_18 = { key: 0 };
const _hoisted_19 = { class: "text-grey" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamHome",
  setup(__props) {
    const route = useRoute();
    const bus = inject("bus");
    const drawer = reactive({ left: true, right: true });
    const model = ref();
    const getTeam = async () => {
      api.get(`/team/${route.params.id}?feed=true`).then((response) => {
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
            class: normalizeClass({ "text-black page-title": !_ctx.$q.dark.isActive, "bg-dark": _ctx.$q.dark.isActive }),
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
                        label: _ctx.$t("team.namePlural"),
                        to: { name: "teams" }
                      }, null, 8, ["label"]),
                      createVNode(QBreadcrumbsEl, {
                        label: model.value.name
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
                          createBaseVNode("span", _hoisted_8, "#" + toDisplayString(model.value.id), 1),
                          createTextVNode(" " + toDisplayString(model.value.name) + " ", 1),
                          model.value.status === "blocked" ? (openBlock(), createBlock(QBadge, {
                            key: 1,
                            label: "Blocked",
                            color: "negative"
                          })) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    !_ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_9, [
                      createBaseVNode("div", null, [
                        createTextVNode(" Last data update"),
                        _hoisted_10,
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
              _ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_11, [
                createVNode(QBtn, {
                  onClick: _cache[1] || (_cache[1] = ($event) => drawer.left = false),
                  icon: "close",
                  flat: "",
                  round: "",
                  dense: ""
                })
              ])) : createCommentVNode("", true),
              model.value.lat && model.value.lng ? (openBlock(), createBlock(_sfc_main$2, {
                key: 1,
                "lat-lng": { lat: parseFloat(model.value.lat), lng: parseFloat(model.value.lng) }
              }, null, 8, ["lat-lng"])) : createCommentVNode("", true),
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
                          createVNode(QIcon, { name: "mail" })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("a", {
                            href: `mailto:${model.value.email}`,
                            class: "link"
                          }, toDisplayString(model.value.email), 9, _hoisted_12)
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
                          }, toDisplayString(model.value.mobile), 9, _hoisted_13)
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
                  }),
                  model.value.type === "NDIS" ? (openBlock(), createBlock(QItem, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { side: "" }, {
                        default: withCtx(() => [
                          _hoisted_14
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(model.value.ndis_number), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(QSeparator, { class: "q-mt-sm q-mb-sm" }),
              model.value.contractors && model.value.contractors.length ? (openBlock(), createElementBlock("div", _hoisted_15, [
                createVNode(QList, null, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, { header: "" }, {
                      default: withCtx(() => [
                        createTextVNode("SERVICED BY")
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(model.value.contractors, (c) => {
                      return openBlock(), createBlock(QItem, {
                        key: c.id
                      }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$4, { user: c }, null, 8, ["user"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(_component_router_link, {
                                to: { name: "contractor-dashboard", params: { id: c.id } },
                                target: "_blank",
                                class: "link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(c.fullname), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"]),
                              createBaseVNode("div", _hoisted_16, toDisplayString(c.email), 1)
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
              ])) : createCommentVNode("", true),
              model.value.feed ? (openBlock(), createElementBlock("div", _hoisted_17, [
                model.value.feed.length ? (openBlock(), createElementBlock("div", _hoisted_18, [
                  createVNode(QList, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, { header: "" }, {
                        default: withCtx(() => [
                          createTextVNode(" FEED")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(model.value.feed, (f, index) => {
                        return openBlock(), createBlock(QItem, { key: index }, {
                          default: withCtx(() => [
                            createVNode(QItemSection, { avatar: "" }, {
                              default: withCtx(() => [
                                f.user && !f.sendingUser ? (openBlock(), createBlock(_sfc_main$4, {
                                  key: 0,
                                  user: f.user
                                }, null, 8, ["user"])) : createCommentVNode("", true),
                                f.sendingUser && !f.user ? (openBlock(), createBlock(_sfc_main$4, {
                                  key: 1,
                                  user: f.sendingUser
                                }, null, 8, ["user"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_19, toDisplayString(unref(fromNowTz)(f.created_at)), 1),
                                createTextVNode(" " + toDisplayString(f.activity), 1)
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
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, { padding: "" }, {
                default: withCtx(() => [
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
