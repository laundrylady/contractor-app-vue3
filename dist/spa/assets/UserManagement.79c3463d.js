import { A as defineComponent, m as openBlock, K as createBlock, U as unref, I as useRouter, r as ref, B as reactive, o as onMounted, n as createElementBlock, l as createVNode, L as withCtx, aD as QDialog, F as Fragment, M as QCardSection, q as createBaseVNode, O as QIcon, R as createTextVNode, b8 as toDisplayString, y as createCommentVNode, G as withDirectives, S as QBtn, b7 as renderList, Q as QCard, t as normalizeClass, N as QInput } from "./index.e647c85a.js";
import { Q as QSpace } from "./QSpace.7d6f905e.js";
import { Q as QItemSection, a as QItem } from "./QItemSection.99659658.js";
import { Q as QList } from "./QList.2f0afc60.js";
import { a as QBreadcrumbs, Q as QBreadcrumbsEl } from "./QBreadcrumbs.14144362.js";
import { Q as QSelect } from "./QSelect.853d535e.js";
import { Q as QHeader } from "./QHeader.001fd0f6.js";
import { a as QTable, Q as QTd } from "./QTable.64a81add.js";
import { Q as QMenu } from "./format.8e90d58d.js";
import { Q as QPage } from "./QPage.660fce82.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.2e2ab899.js";
import { C as ClosePopup } from "./ClosePopup.ef2f7039.js";
import { a as api } from "./axios.ccd3a804.js";
import { F as stateOptions, l as fromNowTz, x as getRowsPerPage, z as setRowsPerPage, y as rowsPerPageOptions, c as confirmDelete } from "./help.c0f85e41.js";
import { _ as _sfc_main$2 } from "./PostcodeRegionDisplay.24757491.js";
import { _ as _sfc_main$4 } from "./StatusTag.c8d66888.js";
import { _ as _sfc_main$3 } from "./UserAvatar.d3fe9aaa.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { u as useI18n } from "./vue-i18n.runtime.esm-bundler.bec1d6a0.js";
import "./rtl.4f5e13e8.js";
import "./QResizeObserver.97b49885.js";
import "./QMarkupTable.981d9979.js";
import "./QLinearProgress.c48fac34.js";
import "./QBadge.5efaf9f7.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StateField",
  props: {
    modelValue: null,
    label: null,
    outlined: { type: Boolean },
    dense: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const handleChange = (val) => {
      emits("update:modelValue", val);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QSelect, {
        "model-value": __props.modelValue,
        label: "State",
        style: { "min-width": "120px" },
        options: unref(stateOptions),
        outlined: __props.outlined,
        dense: __props.dense,
        disable: __props.disabled,
        "onUpdate:modelValue": handleChange,
        clearable: ""
      }, null, 8, ["model-value", "options", "outlined", "dense", "disable"]);
    };
  }
});
const _hoisted_1 = { class: "flex items-start" };
const _hoisted_2 = { class: "text-h6" };
const _hoisted_3 = { class: "q-mt-xs" };
const _hoisted_4 = { class: "text-h6 q-mt-lg" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "This user account has access to the following customer records.", -1);
const _hoisted_6 = {
  class: "q-pl-md q-pt-sm q-pr-md q-pb-sm flex items-center",
  style: { "padding-top": "11px" }
};
const _hoisted_7 = { class: "text-h6" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserManagement",
  setup(__props) {
    const i8n = useI18n();
    const router = useRouter();
    const data = ref();
    const topRef = ref(null);
    const loading = ref(false);
    const userTeams = ref();
    const showUserTeams = ref(false);
    const search = reactive({ keyword: null, status: "active", role: null, state: null });
    const columns = [{
      name: "avatar",
      label: "",
      align: "center",
      field: "avatar",
      sortable: false,
      style: "width:65px"
    }, {
      name: "email",
      label: "Email",
      align: "left",
      field: "email",
      sortable: true
    }, {
      name: "first_name",
      label: "Name",
      align: "left",
      field: "first_name",
      sortable: true
    }, {
      name: "postcoderegionsuburb",
      sortable: false,
      label: `Home ${i8n.t("address.suburb")}`,
      field: "postcoderegionsuburb",
      align: "left"
    }, {
      name: "role",
      sortable: true,
      label: "Type",
      field: "role",
      align: "left",
      format: (val) => val ? userMap[val] : ""
    }, {
      name: "current_sign_in_at",
      sortable: true,
      label: "Last Signin",
      field: "current_sign_in_at",
      align: "left",
      format: (val) => val ? fromNowTz(val) : ""
    }, {
      name: "enabled",
      sortable: true,
      label: "Can Sign In",
      field: "enabled",
      align: "left"
    }, {
      label: "Actions",
      name: "actions",
      sortable: false,
      field: "actions"
    }];
    const userMap = {
      user: "Customer",
      contractor: "Contractor",
      admin: "Staff"
    };
    const serverPagination = ref({
      page: 1,
      rowsNumber: getRowsPerPage(),
      rowsPerPage: getRowsPerPage(),
      sortBy: "first_name",
      descending: false
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
      api.post(`/user/datatable/${page}`, {
        sortBy,
        sort_order: descending ? "desc" : "asc",
        skip: page,
        rowsPerPage,
        keyword: search.keyword,
        status: search.status,
        role: search.role,
        state: search.state
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
    const deleteContractor = (id) => {
      confirmDelete("This will remove the user permenantly").onOk(() => {
        api.delete(`/user/${id}`).then(() => {
          request(null);
        }).catch((error) => {
          useMixinDebug(error);
        });
      });
    };
    const toggleAccess = (row) => {
      if (row.enabled) {
        confirmDelete("This will disable access for this user").onOk(() => {
          api.get(`/user/toggleenabled/${row.id}/0`).then(() => {
            request(null);
          }).catch((error) => {
            useMixinDebug(error);
          });
        });
      } else {
        confirmDelete("This will enable access for this user").onOk(() => {
          api.get(`/user/toggleenabled/${row.id}/1`).then(() => {
            request(null);
          }).catch((error) => {
            useMixinDebug(error);
          });
        });
      }
    };
    const dashboardNav = (row) => {
      if (row.role === "user") {
        router.push({ name: "team-dashboard", params: { id: row.current_team_id } });
      }
      if (row.role === "contractor") {
        router.push({ name: "contractor-dashboard", params: { id: row.id } });
      }
      if (row.role === "admin") {
        window.open("https://myaccount.google.com/");
      }
    };
    const getUserTeams = (row) => {
      if (row.role === "contractor") {
        router.push({ name: "contractor-dashboard", params: { id: row.id } });
        return;
      }
      api.get(`/teamuser/teamsbyuserid/${row.id}`).then((response) => {
        userTeams.value = { user: row, teams: response.data };
        showUserTeams.value = true;
      }).catch((error) => useMixinDebug(error));
    };
    onMounted(() => {
      request();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QDialog, {
          modelValue: showUserTeams.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showUserTeams.value = $event)
        }, {
          default: withCtx(() => [
            userTeams.value && userTeams.value.user ? (openBlock(), createBlock(QCard, {
              key: 0,
              class: "modal-sm"
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1, [
                      createBaseVNode("div", null, [
                        createBaseVNode("div", _hoisted_2, [
                          createVNode(QIcon, {
                            name: userTeams.value.role === "contractor" ? "engineering" : "group",
                            class: "q-mr-sm"
                          }, null, 8, ["name"]),
                          createTextVNode(toDisplayString(userTeams.value.user.fullname), 1)
                        ]),
                        createBaseVNode("div", null, toDisplayString(userTeams.value.user.email), 1),
                        createBaseVNode("div", _hoisted_3, [
                          userTeams.value.user.postcoderegionsuburb ? (openBlock(), createBlock(_sfc_main$2, {
                            key: 0,
                            postcoderegions: [userTeams.value.user.postcoderegionsuburb]
                          }, null, 8, ["postcoderegions"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode(QSpace),
                      withDirectives(createVNode(QBtn, {
                        dense: "",
                        round: "",
                        icon: "close",
                        flat: ""
                      }, null, 512), [
                        [ClosePopup]
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_4, [
                      createVNode(QIcon, {
                        name: "security",
                        class: "q-mr-sm"
                      }),
                      createTextVNode(" Record Access")
                    ]),
                    _hoisted_5,
                    createVNode(QList, {
                      separator: "",
                      dense: "",
                      bordered: ""
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(userTeams.value.teams, (t) => {
                          return openBlock(), createBlock(QItem, {
                            key: t.id,
                            to: { name: "team-dashboard", params: { id: t.id } },
                            clickable: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, { class: "link" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(t.name), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["to"]);
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
          _: 1
        }, 8, ["modelValue"]),
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
                createBaseVNode("div", _hoisted_6, [
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
                        label: "Settings",
                        to: { name: "settings" }
                      }),
                      createVNode(QBreadcrumbsEl, { label: "Users" })
                    ]),
                    _: 1
                  }),
                  createVNode(QInput, {
                    modelValue: search.keyword,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => search.keyword = $event),
                    debounce: 500,
                    placeholder: "Search users",
                    dense: "",
                    borderless: "",
                    class: "q-ml-lg",
                    clearable: ""
                  }, {
                    prepend: withCtx(() => [
                      createVNode(QIcon, { name: "search" })
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  createVNode(QSpace),
                  createVNode(QSelect, {
                    modelValue: search.role,
                    "onUpdate:modelValue": [
                      _cache[2] || (_cache[2] = ($event) => search.role = $event),
                      _cache[3] || (_cache[3] = ($event) => request(null))
                    ],
                    label: "Type",
                    options: [{ label: "Contractor", value: "contractor" }, { label: "Customer", value: "user" }, { label: "Staff", value: "admin" }],
                    "map-options": "",
                    "emit-value": "",
                    outlined: "",
                    dense: "",
                    class: "q-mr-sm",
                    style: { "width": "150px" }
                  }, null, 8, ["modelValue"]),
                  createVNode(_sfc_main$1, {
                    modelValue: search.state,
                    "onUpdate:modelValue": [
                      _cache[4] || (_cache[4] = ($event) => search.state = $event),
                      _cache[5] || (_cache[5] = ($event) => request(null))
                    ],
                    label: "State",
                    outlined: true,
                    dense: true
                  }, null, 8, ["modelValue"])
                ])
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(QPageContainer, null, {
              default: withCtx(() => [
                createVNode(QPage, { padding: "" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      ref_key: "topRef",
                      ref: topRef
                    }, null, 512),
                    createVNode(QCard, null, {
                      default: withCtx(() => [
                        createVNode(QTable, {
                          rows: data.value,
                          columns,
                          "row-key": "id",
                          filter: search.keyword,
                          loading: loading.value,
                          pagination: serverPagination.value,
                          "onUpdate:pagination": _cache[6] || (_cache[6] = ($event) => serverPagination.value = $event),
                          onRequest: request,
                          class: "no-shadow",
                          "rows-per-page-options": unref(rowsPerPageOptions)
                        }, {
                          "body-cell-avatar": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$3, {
                                  user: props.row
                                }, null, 8, ["user"])
                              ]),
                              _: 2
                            }, 1032, ["props"])
                          ]),
                          "body-cell-email": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_7, [
                                  createBaseVNode("a", {
                                    class: "link",
                                    onClick: ($event) => getUserTeams(props.row)
                                  }, toDisplayString(props.row.email), 9, _hoisted_8)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["props"])
                          ]),
                          "body-cell-first_name": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                createBaseVNode("a", {
                                  onClick: ($event) => dashboardNav(props.row),
                                  class: "link"
                                }, toDisplayString(props.row.fullname), 9, _hoisted_9)
                              ]),
                              _: 2
                            }, 1032, ["props"])
                          ]),
                          "body-cell-contractor_status": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4, {
                                  status: props.row.contractor_status
                                }, null, 8, ["status"])
                              ]),
                              _: 2
                            }, 1032, ["props"])
                          ]),
                          "body-cell-postcoderegionsuburb": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                props.row.postcoderegionsuburb ? (openBlock(), createBlock(_sfc_main$2, {
                                  key: 0,
                                  postcoderegions: [props.row.postcoderegionsuburb]
                                }, null, 8, ["postcoderegions"])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1032, ["props"])
                          ]),
                          "body-cell-enabled": withCtx((props) => [
                            createVNode(QTd, { props }, {
                              default: withCtx(() => [
                                props.row.enabled ? (openBlock(), createBlock(QIcon, {
                                  key: 0,
                                  name: "check",
                                  size: "24px"
                                })) : createCommentVNode("", true)
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
                                              onClick: ($event) => toggleAccess(props.row)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(QItemSection, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(`${props.row.enabled ? "Disable" : "Enable"}`), 1)
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])), [
                                              [ClosePopup]
                                            ]),
                                            withDirectives((openBlock(), createBlock(QItem, {
                                              clickable: "",
                                              onClick: ($event) => dashboardNav(props.row)
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
                                            }, 1032, ["onClick"])), [
                                              [ClosePopup]
                                            ]),
                                            withDirectives((openBlock(), createBlock(QItem, {
                                              clickable: "",
                                              onClick: ($event) => deleteContractor(props.row.id)
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
