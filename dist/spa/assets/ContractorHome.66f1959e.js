import { A as defineComponent, r as ref, l as openBlock, m as createElementBlock, k as createVNode, K as withCtx, aG as createTextVNode, bu as QSeparator, P as QBtn, a9 as useRoute, i as inject, B as reactive, o as onMounted, E as onBeforeUnmount, w as watch, bv as resolveComponent, J as createBlock, y as createCommentVNode, p as createBaseVNode, N as QIcon, aH as toDisplayString, R as unref, s as normalizeClass, F as Fragment, bd as renderList } from "./index.df648268.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.604adae3.js";
import { Q as QBadge } from "./QBadge.2155e69c.js";
import { Q as QHeader } from "./QHeader.26e54576.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.69a1ed09.js";
import { Q as QList } from "./QList.5de97230.js";
import { Q as QMenu, a as QItemLabel } from "./format.36ec1428.js";
import { Q as QRouteTab, a as QTabs, _ as _sfc_main$3, b as QDrawer } from "./QTabs.432d06a7.js";
import { Q as QPage } from "./QPage.d930952e.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.78079717.js";
import { a as api, m as moment } from "./axios.954307d5.js";
import { _ as _sfc_main$4 } from "./PostcodeRegionDisplay.f19b8923.js";
import { _ as _sfc_main$2 } from "./UserAvatar.299afcda.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { f as fromNowTz } from "./help.0d5056b8.js";
import "./touch.3df10340.js";
import "./QImg.0707c19f.js";
import "./use-ratio.773b9f7a.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContractorNav",
  props: {
    model: null
  },
  setup(__props) {
    const currentTab = ref("details");
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
              to: { name: "contractor-dashboard", params: { id: __props.model.id } },
              label: "Dashboard",
              icon: "dashboard"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "contractor-postcoderegion-groups", params: { id: __props.model.id } },
              label: "Pickup Locations",
              icon: "place"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "contractor-roster", params: { id: __props.model.id } },
              label: "Roster",
              icon: "schedule"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "contractor-orders", params: { id: __props.model.id } },
              label: _ctx.$t("order.namePlural"),
              icon: "event"
            }, null, 8, ["to", "label"]),
            createVNode(QRouteTab, {
              to: { name: "contractor-edit", params: { id: __props.model.id } },
              label: "Details",
              icon: "info"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "contractor-documents", params: { id: __props.model.id } },
              label: "Documents",
              icon: "attach_file"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "contractor-sms", params: { id: __props.model.id } },
              label: "SMS",
              icon: "chat"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "contractor-notifications", params: { id: __props.model.id } },
              label: "Emails",
              icon: "mail"
            }, null, 8, ["to"]),
            createVNode(QRouteTab, {
              to: { name: "contractor-audit", params: { id: __props.model.id } },
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
const _hoisted_8 = {
  key: 0,
  class: "q-mr-sm"
};
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
const _hoisted_14 = { key: 2 };
const _hoisted_15 = { key: 0 };
const _hoisted_16 = { key: 3 };
const _hoisted_17 = { key: 0 };
const _hoisted_18 = { class: "text-grey" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorHome",
  setup(__props) {
    const route = useRoute();
    const bus = inject("bus");
    const drawer = reactive({ left: true, right: true });
    const model = ref();
    const getContractor = async () => {
      api.get(`/user/${route.params.id}?feed=true`).then((response) => {
        model.value = response.data;
        document.title = model.value.fullname;
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    onMounted(async () => {
      await getContractor();
      bus.on("getContractor", () => {
        getContractor();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getContractor");
    });
    watch(() => route.params.id, (newVal) => {
      if (route.name === "contractor-dashboard") {
        if (newVal) {
          getContractor();
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
                        label: _ctx.$t("contractor.namePlural"),
                        to: { name: "contractors" }
                      }, null, 8, ["label"]),
                      createVNode(QBreadcrumbsEl, {
                        label: model.value.fullname
                      }, null, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, [
                      createBaseVNode("div", _hoisted_6, [
                        createVNode(_sfc_main$2, {
                          user: model.value,
                          class: "q-mr-sm",
                          size: "48px"
                        }, null, 8, ["user"]),
                        createBaseVNode("div", null, [
                          createBaseVNode("div", _hoisted_7, [
                            _ctx.$q.screen.lt.lg ? (openBlock(), createBlock(QBtn, {
                              key: 0,
                              onClick: _cache[0] || (_cache[0] = ($event) => drawer.left = !drawer.left),
                              icon: "menu",
                              color: "primary",
                              outline: "",
                              class: "q-mr-md"
                            })) : createCommentVNode("", true),
                            createTextVNode(" " + toDisplayString(model.value.fullname), 1)
                          ]),
                          createBaseVNode("div", null, [
                            model.value.contractor_start_date ? (openBlock(), createElementBlock("span", _hoisted_8, "Since " + toDisplayString(model.value.contractor_start_date), 1)) : createCommentVNode("", true),
                            createTextVNode(),
                            model.value.contractor_status === "active" ? (openBlock(), createBlock(QBadge, {
                              key: 1,
                              color: "positive",
                              label: "Active",
                              class: "q-mr-sm"
                            })) : createCommentVNode("", true),
                            model.value.contractor_insurance_expiry && unref(moment)(model.value.contractor_insurance_expiry, "DD/MM/YYYY").isBefore(unref(moment)()) ? (openBlock(), createBlock(QBadge, {
                              key: 2,
                              color: "negative"
                            }, {
                              default: withCtx(() => [
                                createVNode(QIcon, {
                                  name: "warning",
                                  class: "q-mr-sm"
                                }),
                                createTextVNode(" Insurance Expired")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ])
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
              model.value.lat && model.value.lng ? (openBlock(), createBlock(_sfc_main$3, {
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
                          createVNode(QIcon, { name: "engineering" })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(model.value.fullname), 1)
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
                          createVNode(QIcon, { name: "attach_money" })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createTextVNode(" Commission rate " + toDisplayString(model.value.contractor_commission_rate) + "% ", 1)
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
                          model.value.postcoderegionsuburb ? (openBlock(), createBlock(_sfc_main$4, {
                            key: 0,
                            postcoderegions: [model.value.postcoderegionsuburb]
                          }, null, 8, ["postcoderegions"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QSeparator, { class: "q-mt-sm q-mb-sm" }),
              model.value.teams && model.value.teams.length ? (openBlock(), createElementBlock("div", _hoisted_14, [
                createVNode(QList, null, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, {
                      header: "",
                      class: "text-uppercase"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("team.namePlural")), 1)
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(model.value.teams, (t) => {
                      return openBlock(), createBlock(QItem, {
                        key: t.id
                      }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(_component_router_link, {
                                to: { name: "team-dashboard", params: { id: t.id } },
                                target: "_blank",
                                class: "link"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(t.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"]),
                              t.suburbpostcoderegion ? (openBlock(), createElementBlock("div", _hoisted_15, [
                                createVNode(_sfc_main$4, {
                                  postcoderegions: [t.suburbpostcoderegion]
                                }, null, 8, ["postcoderegions"])
                              ])) : createCommentVNode("", true)
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
              model.value.feed ? (openBlock(), createElementBlock("div", _hoisted_16, [
                model.value.feed.length ? (openBlock(), createElementBlock("div", _hoisted_17, [
                  createVNode(QList, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, { header: "" }, {
                        default: withCtx(() => [
                          createTextVNode("FEED")
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(model.value.feed, (f, index) => {
                        return openBlock(), createBlock(QItem, { key: index }, {
                          default: withCtx(() => [
                            createVNode(QItemSection, { avatar: "" }, {
                              default: withCtx(() => [
                                !f.sendingUser ? (openBlock(), createBlock(_sfc_main$2, {
                                  key: 0,
                                  user: f.user
                                }, null, 8, ["user"])) : createCommentVNode("", true),
                                f.sendingUser ? (openBlock(), createBlock(_sfc_main$2, {
                                  key: 1,
                                  user: f.sendingUser
                                }, null, 8, ["user"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_18, toDisplayString(unref(fromNowTz)(f.created_at)), 1),
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
