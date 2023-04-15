import { A as defineComponent, r as ref, B as reactive, i as inject, o as onMounted, E as onBeforeUnmount, m as openBlock, K as createBlock, L as withCtx, l as createVNode, R as createTextVNode, b8 as toDisplayString, G as withDirectives, S as QBtn, bp as QSeparator, M as QCardSection, q as createBaseVNode, U as unref, n as createElementBlock, y as createCommentVNode, b9 as QCheckbox, F as Fragment, b7 as renderList, af as QToggle, ae as QCardActions, Q as QCard, aD as QDialog, J as resolveComponent, t as normalizeClass, O as QIcon, N as QInput } from "./index.e647c85a.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.14144362.js";
import { Q as QSpace } from "./QSpace.7d6f905e.js";
import { Q as QHeader } from "./QHeader.001fd0f6.js";
import { a as QTable, Q as QTd } from "./QTable.64a81add.js";
import { Q as QItemSection, a as QItem } from "./QItemSection.99659658.js";
import { Q as QList } from "./QList.2f0afc60.js";
import { Q as QMenu } from "./format.8e90d58d.js";
import { Q as QPage } from "./QPage.660fce82.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.2e2ab899.js";
import { C as ClosePopup } from "./ClosePopup.ef2f7039.js";
import { a as api } from "./axios.ccd3a804.js";
import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.1a75cd00.js";
import { Q as QSelect } from "./QSelect.853d535e.js";
import { u as useVuelidate, r as required } from "./index.esm.4557c89b.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { e as globalStatusList, h as hourBookingOptions, b as doNotify, q as categoryDisplay, x as getRowsPerPage, z as setRowsPerPage, y as rowsPerPageOptions, j as hourBookingDisplay, a as currencyFormat, c as confirmDelete } from "./help.c0f85e41.js";
import { p as productCategoriesVisibleBooking } from "./helpers.2defcd01.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.bec1d6a0.js";
import { _ as _sfc_main$3 } from "./DateField.75075dac.js";
import { _ as _sfc_main$2, a as _sfc_main$4 } from "./OrderContractorManagement.e1decb4c.js";
import { _ as _sfc_main$6 } from "./StatusTag.c8d66888.js";
import { _ as _sfc_main$5 } from "./UserAvatar.d3fe9aaa.js";
import "./QResizeObserver.97b49885.js";
import "./QMarkupTable.981d9979.js";
import "./QLinearProgress.c48fac34.js";
import "./rtl.4f5e13e8.js";
import "./use-quasar.ae4f72e4.js";
import "./QBadge.5efaf9f7.js";
const _hoisted_1$1 = { class: "row q-col-gutter-md q-mb-md" };
const _hoisted_2$1 = {
  key: 0,
  class: "row q-col-gutter-md"
};
const _hoisted_3$1 = {
  key: 1,
  class: "q-mt-md"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Products", -1);
const _hoisted_5 = { class: "q-mr-sm" };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = {
  key: 2,
  class: "q-mt-md"
};
const _hoisted_8 = { class: "q-mt-md" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderCreate",
  setup(__props) {
    const show = ref(false);
    const washingAndIroning = ref(false);
    const categories = ref();
    const schema = {
      team_id: null,
      contractor_user_id: null,
      scheduled_pickup_date: null,
      scheduled_pickup_time: null,
      special_instructions: null,
      status: "confirmed",
      recurring_order: false,
      recurring: null,
      products: [],
      productcategories: []
    };
    const model = reactive(JSON.parse(JSON.stringify(schema)));
    const loading = ref(false);
    const bus = inject("bus");
    const i8n = useI18n();
    const rules = {
      team_id: { required },
      scheduled_pickup_date: { required },
      scheduled_pickup_time: { required },
      status: { required }
    };
    const $v = useVuelidate(rules, model);
    const toggleWashingAndIroning = () => {
      model.productcategories.forEach((o) => {
        o.active = washingAndIroning.value;
      });
    };
    const save = () => {
      api.post("/order", model).then(() => {
        doNotify("positive", `${i8n.t("order.name")} created`);
        bus.emit("orderLoadMore");
        show.value = false;
        loading.value = false;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    onMounted(async () => {
      bus.on("newOrder", async () => {
        Object.assign(model, JSON.parse(JSON.stringify(schema)));
        categories.value = await productCategoriesVisibleBooking();
        for (const c of categories.value) {
          model.productcategories.push({ product_category_id: c.value, active: false });
        }
        show.value = true;
        washingAndIroning.value = false;
      });
    });
    onBeforeUnmount(() => {
      bus.off("newOrder");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          createVNode(QCard, { class: "modal" }, {
            default: withCtx(() => [
              createVNode(QToolbar, null, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("order.create")), 1)
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
                  createBaseVNode("div", _hoisted_1$1, [
                    createVNode(_sfc_main$2, {
                      modelValue: model.team_id,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.team_id = $event),
                      label: _ctx.$t("team.name"),
                      status: "active",
                      class: "col-xs-12 col-sm-9",
                      error: unref($v).team_id.$invalid
                    }, null, 8, ["modelValue", "label", "error"]),
                    createVNode(QSelect, {
                      modelValue: model.status,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.status = $event),
                      label: _ctx.$t("order.status"),
                      error: unref($v).status.$invalid,
                      "map-options": "",
                      options: unref(globalStatusList),
                      "emit-value": "",
                      class: "col-xs-12 col-sm-3"
                    }, null, 8, ["modelValue", "label", "error", "options"])
                  ]),
                  model.team_id ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                    createVNode(_sfc_main$3, {
                      modelValue: model.scheduled_pickup_date,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.scheduled_pickup_date = $event),
                      label: _ctx.$t("order.scheduledPickupDate"),
                      invalid: unref($v).scheduled_pickup_date.$invalid,
                      class: "col-xs-12 col-sm-6"
                    }, null, 8, ["modelValue", "label", "invalid"]),
                    createVNode(QSelect, {
                      modelValue: model.scheduled_pickup_time,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.scheduled_pickup_time = $event),
                      label: _ctx.$t("order.scheduledPickupTime"),
                      invalid: unref($v).scheduled_pickup_time,
                      options: unref(hourBookingOptions),
                      "emit-value": "",
                      "map-options": "",
                      class: "col-xs-12 col-sm-6"
                    }, null, 8, ["modelValue", "label", "invalid", "options"])
                  ])) : createCommentVNode("", true),
                  model.team_id && model.scheduled_pickup_date && model.scheduled_pickup_time ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                    _hoisted_4,
                    createBaseVNode("span", _hoisted_5, [
                      createVNode(QCheckbox, {
                        modelValue: washingAndIroning.value,
                        "onUpdate:modelValue": [
                          _cache[4] || (_cache[4] = ($event) => washingAndIroning.value = $event),
                          _cache[5] || (_cache[5] = ($event) => toggleWashingAndIroning())
                        ],
                        label: "Washing & Ironing"
                      }, null, 8, ["modelValue"])
                    ]),
                    !washingAndIroning.value ? (openBlock(), createElementBlock("span", _hoisted_6, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(model.productcategories, (c) => {
                        return openBlock(), createElementBlock("span", {
                          key: c.product_category_id,
                          class: "q-mr-sm"
                        }, [
                          createVNode(QCheckbox, {
                            modelValue: c.active,
                            "onUpdate:modelValue": ($event) => c.active = $event,
                            label: unref(categoryDisplay)(c.product_category_id, categories.value)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true),
                  model.team_id && model.scheduled_pickup_date && model.scheduled_pickup_time && model.productcategories && model.productcategories.filter((o) => o.active).length ? (openBlock(), createElementBlock("div", _hoisted_7, [
                    createVNode(_sfc_main$4, {
                      team_id: model.team_id,
                      scheduled_pickup_date: model.scheduled_pickup_date,
                      scheduled_pickup_time: model.scheduled_pickup_time,
                      modelValue: model.contractor_user_id,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.contractor_user_id = $event),
                      reassign: true,
                      productcategories: model.productcategories.filter((o) => o.active)
                    }, null, 8, ["team_id", "scheduled_pickup_date", "scheduled_pickup_time", "modelValue", "productcategories"]),
                    createBaseVNode("div", _hoisted_8, [
                      createVNode(QToggle, {
                        modelValue: model.recurring_order,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.recurring_order = $event),
                        label: _ctx.$t("order.recurring")
                      }, null, 8, ["modelValue", "label"]),
                      model.recurring_order ? (openBlock(), createBlock(QSelect, {
                        key: 0,
                        modelValue: model.recurring,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.recurring = $event),
                        label: _ctx.$t("order.recurringFrequency"),
                        options: ["Week", "Fortnite", "Month"]
                      }, null, 8, ["modelValue", "label"])) : createCommentVNode("", true)
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
                    disable: loading.value || unref($v).$invalid || !model.productcategories.filter((o) => o.active).length,
                    label: "Save",
                    color: "primary",
                    onClick: _cache[9] || (_cache[9] = ($event) => save())
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
const _hoisted_1 = {
  class: "q-pl-md q-pt-sm q-pr-md q-pb-sm flex items-center",
  style: { "padding-top": "11px" }
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "q-ml-sm" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderManagement",
  setup(__props) {
    const bus = inject("bus");
    const i8n = useI18n();
    const data = ref();
    const loading = ref(false);
    const topRef = ref(null);
    const search = reactive({ keyword: null });
    const columns = [{
      name: "display_id",
      label: i8n.t("order.id"),
      align: "left",
      field: "display_id",
      sortable: true,
      style: "width:100px"
    }, {
      name: "scheduled_pickup_date",
      sortable: true,
      label: i8n.t("order.scheduledPickupDate"),
      field: "scheduled_pickup_date",
      align: "left",
      style: "width:100px"
    }, {
      name: "team_id",
      label: i8n.t("team.name"),
      align: "left",
      field: "team_id",
      sortable: true
    }, {
      name: "contractor_user_id",
      label: i8n.t("contractor.name"),
      align: "left",
      field: "contractor_user_id",
      sortable: true
    }, {
      name: "total_price",
      label: "Total",
      align: "left",
      field: "total_price",
      sortable: true
    }, {
      name: "status",
      label: "Status",
      align: "left",
      field: "status",
      sortable: true
    }, {
      label: "Actions",
      name: "actions",
      sortable: false,
      field: "actions"
    }];
    const serverPagination = ref({
      page: 1,
      rowsNumber: getRowsPerPage(),
      rowsPerPage: getRowsPerPage(),
      sortBy: "display_id",
      descending: true
    });
    const request = (props = null) => {
      let page;
      let rowsPerPage;
      let sortBy;
      let descending;
      if (props && props.pagination) {
        page = props.pagination.page;
        rowsPerPage = props.pagination.rowsPerPage;
        sortBy = props.pagination.sortBy;
        descending = props.pagination.descending;
      } else {
        page = serverPagination.value.page;
        rowsPerPage = serverPagination.value.rowsPerPage;
        sortBy = serverPagination.value.sortBy;
        descending = serverPagination.value.descending;
      }
      loading.value = true;
      api.post(`/order/datatable/${page}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage,
        keyword: search.keyword
      }).then((response) => {
        var _a;
        data.value = response.data.rows;
        loading.value = false;
        setRowsPerPage(rowsPerPage);
        serverPagination.value.rowsNumber = response.data.total;
        serverPagination.value.page = page;
        serverPagination.value.rowsPerPage = rowsPerPage;
        serverPagination.value.sortBy = sortBy;
        serverPagination.value.descending = descending;
        if (props) {
          (_a = topRef.value) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    const deleteOrder = (id) => {
      confirmDelete("This action is not reversible").onOk(() => {
        api.delete(`/order/${id}`).then(() => {
          request();
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    };
    const newOrder = () => {
      bus.emit("newOrder");
    };
    onMounted(() => {
      bus.on("orderLoadMore", () => {
        request();
      });
      request();
    });
    onBeforeUnmount(() => {
      bus.off("orderLoadMore");
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$1),
        createVNode(QLayout, {
          view: "lHh LpR fFf",
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
                      createVNode(QBreadcrumbsEl, {
                        label: _ctx.$t("order.namePlural")
                      }, null, 8, ["label"])
                    ]),
                    _: 1
                  }),
                  createVNode(QInput, {
                    modelValue: search.keyword,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.keyword = $event),
                    debounce: 500,
                    placeholder: `Search ${_ctx.$t("order.namePlural").toLowerCase()}`,
                    borderless: "",
                    dense: "",
                    class: "q-ml-lg"
                  }, {
                    prepend: withCtx(() => [
                      createVNode(QIcon, { name: "search" })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"]),
                  createVNode(QSpace),
                  createVNode(QBtn, {
                    to: { name: "bookingmanager" },
                    label: "Manager",
                    color: "secondary",
                    class: "q-mr-sm"
                  }),
                  createVNode(QBtn, {
                    onClick: _cache[1] || (_cache[1] = ($event) => newOrder()),
                    round: "",
                    icon: "add",
                    color: "primary"
                  })
                ])
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(QPageContainer, null, {
              default: withCtx(() => [
                createVNode(QPage, { padding: "" }, {
                  default: withCtx(() => [
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createBaseVNode("div", {
                          ref_key: "topRef",
                          ref: topRef
                        }, null, 512),
                        createVNode(QTable, {
                          rows: data.value,
                          columns,
                          "row-key": "id",
                          filter: search.keyword,
                          loading: loading.value,
                          pagination: serverPagination.value,
                          "onUpdate:pagination": _cache[2] || (_cache[2] = ($event) => serverPagination.value = $event),
                          onRequest: request,
                          class: "no-shadow",
                          "rows-per-page-options": unref(rowsPerPageOptions)
                        }, {
                          "body-cell-scheduled_pickup_date": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                createVNode(_component_router_link, {
                                  to: { name: "order-edit", params: { id: props.row.id } },
                                  class: "link"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(props.row.scheduled_pickup_date) + " (" + toDisplayString(unref(hourBookingDisplay)(props.row.scheduled_pickup_time)) + ") ", 1),
                                    props.row.recurring_order ? (openBlock(), createBlock(QIcon, {
                                      key: 0,
                                      name: "sync",
                                      title: "Recurring"
                                    })) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1032, ["props"])
                          ]),
                          "body-cell-display_id": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                createVNode(_component_router_link, {
                                  to: { name: "order-edit", params: { id: props.row.id } },
                                  class: "link"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("#" + toDisplayString(props.row.display_id), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1032, ["props"])
                          ]),
                          "body-cell-team_id": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                createVNode(_component_router_link, {
                                  to: { name: "team-dashboard", params: { id: props.row.team_id } },
                                  class: "link",
                                  target: "_blank"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(props.row.team.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1032, ["props"])
                          ]),
                          "body-cell-contractor_user_id": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                props.row.contractor ? (openBlock(), createElementBlock("div", _hoisted_2, [
                                  createVNode(_component_router_link, {
                                    to: { name: "contractor-dashboard", params: { id: props.row.contractor_user_id } },
                                    class: "link",
                                    target: "_blank"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_sfc_main$5, {
                                        user: props.row.contractor
                                      }, null, 8, ["user"]),
                                      createBaseVNode("span", _hoisted_3, toDisplayString(props.row.contractor.fullname), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1032, ["props"])
                          ]),
                          "body-cell-status": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$6, {
                                  status: props.row.status
                                }, null, 8, ["status"])
                              ]),
                              _: 2
                            }, 1032, ["props"])
                          ]),
                          "body-cell-total_price": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(currencyFormat)(props.row.grand_total_price)), 1)
                              ]),
                              _: 2
                            }, 1032, ["props"])
                          ]),
                          "body-cell-actions": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                createVNode(QBtn, {
                                  flat: "",
                                  icon: "more_vert"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QMenu, null, {
                                      default: withCtx(() => [
                                        createVNode(QList, null, {
                                          default: withCtx(() => [
                                            withDirectives((openBlock(), createBlock(QItem, {
                                              clickable: "",
                                              to: { name: "contractor-edit", params: { id: props.row.id } }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(QItemSection, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Edit record")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["to"])), [
                                              [ClosePopup]
                                            ]),
                                            withDirectives((openBlock(), createBlock(QItem, {
                                              clickable: "",
                                              onClick: ($event) => deleteOrder(props.row.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(QItemSection, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Delete")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])), [
                                              [ClosePopup]
                                            ])
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
                            }, 1032, ["props"])
                          ]),
                          _: 1
                        }, 8, ["rows", "filter", "loading", "pagination", "rows-per-page-options"])
                      ]),
                      _: 1
                    })
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
