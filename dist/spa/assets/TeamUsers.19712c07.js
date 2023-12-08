import { B as defineComponent, i as inject, g as computed, C as reactive, r as ref, o as onMounted, m as openBlock, n as createElementBlock, l as createVNode, L as withCtx, M as QCardSection, q as createBaseVNode, aj as toDisplayString, z as createCommentVNode, R as QBtn, K as createBlock, ak as createTextVNode, S as unref, Q as QCard, F as Fragment, be as renderList, N as QInput, H as withDirectives, al as QToggle } from "./index.3f86858d.js";
import { Q as QSelect } from "./QSelect.154dcb87.js";
import { Q as QTd } from "./QTd.c476b9be.js";
import { Q as QItemSection, a as QItem } from "./QItemSection.a3ff7647.js";
import { Q as QList } from "./QList.59a6b87b.js";
import { Q as QMenu } from "./QMenu.63bb0d4f.js";
import { Q as QTable } from "./QTable.a5dd68b6.js";
import { Q as QMarkupTable } from "./QMarkupTable.2f85fb62.js";
import { Q as QSpace } from "./QSpace.82cbdc02.js";
import { C as ClosePopup } from "./ClosePopup.483112bc.js";
import { u as useVuelidate, r as required, e as email } from "./index.esm.91cbd0b1.js";
import { a as api } from "./axios.cff98580.js";
import { N as NoRecords } from "./NoRecords.50e85aa3.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { A as fromNowTz, B as awsSesStatus, e as doNotify, c as confirmDelete } from "./help.5e478062.js";
import "./QItemLabel.9b951f4a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./selection.0f570696.js";
import "./QLinearProgress.aabd49be.js";
import "./use-fullscreen.c3b95283.js";
const _hoisted_1$1 = { class: "text-h6" };
const _hoisted_2$1 = {
  key: 0,
  class: "bg-accent text-white q-pa-sm q-mr-sm"
};
const _hoisted_3$1 = { class: "text-h6" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", { class: "text-left" }, "First name"),
    /* @__PURE__ */ createBaseVNode("th", { class: "text-left" }, "Last name"),
    /* @__PURE__ */ createBaseVNode("th", { class: "text-left" }, "Email"),
    /* @__PURE__ */ createBaseVNode("th", { class: "text-left" }, "Access"),
    /* @__PURE__ */ createBaseVNode("th", { class: "text-left" }, "Sent"),
    /* @__PURE__ */ createBaseVNode("th", { class: "text-left" }, "Status"),
    /* @__PURE__ */ createBaseVNode("th", { class: "text-center" }, "Actions")
  ])
], -1);
const _hoisted_5 = { key: 0 };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_7 = { class: "text-center" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "New Invitation", -1);
const _hoisted_9 = { class: "row q-col-gutter-sm items-center" };
const _hoisted_10 = { class: "col-xs-12 col-md-3" };
const _hoisted_11 = { class: "col-xs-6 col-md-3" };
const _hoisted_12 = { class: "col-xs-6 col-md-3" };
const _hoisted_13 = { class: "col-xs-6 col-md-3" };
const _hoisted_14 = { class: "flex" };
const _hoisted_15 = {
  key: 0,
  class: "text-warning"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TeamUserManagement",
  props: {
    team: null
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const adminCount = computed(() => {
      let count = 0;
      if (props.team.users) {
        props.team.users.forEach((o) => {
          if (["administrator", "owner"].indexOf(o.role) !== -1) {
            count += 1;
          }
        });
      }
      return count;
    });
    const search = reactive({ keyword: null });
    const loading = ref(false);
    const loadingInvite = ref(false);
    const invitations = ref([]);
    const inviteSchema = {
      email: null,
      first_name: null,
      last_name: null,
      role: "user",
      team_id: props.team.id,
      bypass: true
    };
    const invite = reactive(JSON.parse(JSON.stringify(inviteSchema)));
    const rules = {
      email: { required, email },
      first_name: { required },
      last_name: { required },
      role: { required }
    };
    const $v = useVuelidate(rules, invite);
    const inviteError = ref();
    const roles = [{ value: "owner", label: "Owner" }, { value: "administrator", label: "Administrator" }, { value: "user", label: "User" }, { value: "ndis", label: "NDIS Plan Manager" }];
    const columns = [{
      name: "user.first_name",
      sortable: false,
      label: "First name",
      field: "user.first_name",
      format: (val, row) => row.user.first_name,
      align: "left"
    }, {
      name: "user.last_name",
      sortable: false,
      label: "Last name",
      field: "user.last_name",
      format: (val, row) => row.user.last_name,
      align: "left"
    }, {
      name: "user.email",
      sortable: false,
      label: "Email",
      field: "user.email",
      format: (val, row) => row.user.email,
      align: "left"
    }, {
      name: "role",
      sortable: false,
      label: "Access",
      field: "role",
      align: "left"
    }, {
      name: "actions",
      sortable: false,
      label: "Actions",
      field: "actions"
    }];
    const updateUser = (user) => {
      loading.value = true;
      api.put(`/teamuser/update/${user.id}`, user).then(() => {
        doNotify("positive", "Saved");
        loading.value = false;
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const removeUser = (user) => {
      confirmDelete("This will remove the user and all associated access").onOk(() => {
        loading.value = true;
        api.delete(`/teamuser/remove/${user.team_id}/${user.id}`).then(() => {
          doNotify("negative", "User removed");
          bus.emit("getTeam");
          loading.value = false;
        }).catch((error) => {
          loading.value = false;
          useMixinDebug(error);
        });
      });
    };
    const resetMfaUser = (user) => {
      confirmDelete("This will reset the MFA for this user.").onOk(() => {
        loading.value = true;
        api.get(`/teamuser/resetmfa/${user.team_id}/${user.id}`).then(() => {
          doNotify("negative", "User MFA reset");
          bus.emit("getTeam");
          loading.value = false;
        }).catch((error) => {
          loading.value = false;
          useMixinDebug(error);
        });
      });
    };
    const toggleAccessUser = (user, toggle) => {
      let message = "This will disable access";
      if (toggle === 1) {
        message = "This will re-enable access";
      }
      confirmDelete(message).onOk(() => {
        loading.value = true;
        api.put(`/teamuser/toggleaccess/${user.team_id}/${user.id}`, { active: toggle }).then(() => {
          doNotify("positive", "Saved");
          bus.emit("getTeam");
          loading.value = false;
        }).catch((error) => {
          loading.value = false;
          useMixinDebug(error);
        });
      });
    };
    const getInvitations = () => {
      loading.value = true;
      api.get(`/teaminvite/team/${props.team.id}`).then((response) => {
        invitations.value = response.data;
        loading.value = false;
      }).catch((error) => {
        useMixinDebug(error);
        loading.value = false;
      });
    };
    const inviteUser = () => {
      loadingInvite.value = true;
      invite.team_id = props.team.id;
      api.post("/teaminvite/inviteuser", invite).then(() => {
        doNotify("positive", "Invitation sent");
        loadingInvite.value = false;
        getInvitations();
        bus.emit("getTeam");
        Object.assign(invite, JSON.parse(JSON.stringify(inviteSchema)));
      }).catch((error) => {
        loadingInvite.value = false;
        useMixinDebug(error);
      });
    };
    const updateInvite = (model) => {
      api.put(`/teaminvite/${model.id}`, model).then(() => {
        getInvitations();
        doNotify("positive", "Saved");
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const resendInvitation = (id) => {
      api.get(`/teaminvite/resend/${id}`).then(() => {
        doNotify("positive", "Invitation resent");
        getInvitations();
      }).catch((error) => {
        useMixinDebug(error);
      });
    };
    const removeInvitation = (id) => {
      confirmDelete("This will revoke the invitation.").onOk(() => {
        loading.value = true;
        api.delete(`/teaminvite/${id}`).then(() => {
          doNotify("negative", "Invitation revoked");
          getInvitations();
        }).catch((error) => {
          loading.value = false;
          useMixinDebug(error);
        });
      });
    };
    const populateInvite = () => {
      invite.email = props.team.email;
      invite.first_name = props.team.first_name;
      invite.last_name = props.team.last_name;
      invite.role = "owner";
    };
    onMounted(() => {
      getInvitations();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1$1, toDisplayString(_ctx.$t("team.userPlural")) + " (" + toDisplayString(__props.team.users && __props.team.users.length) + ")", 1),
                createBaseVNode("p", null, "To invite new " + toDisplayString(_ctx.$t("team.userPlural").toLowerCase()) + ', use the "New Invitation" section below. ', 1)
              ]),
              _: 1
            }),
            createVNode(QTable, {
              rows: __props.team.users,
              columns,
              "row-key": "id",
              filter: search.keyword,
              loading: loading.value,
              class: "no-shadow"
            }, {
              "body-cell-role": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createVNode(QSelect, {
                      modelValue: props2.row.role,
                      "onUpdate:modelValue": [($event) => props2.row.role = $event, ($event) => updateUser(props2.row)],
                      options: roles,
                      "map-options": "",
                      "emit-value": "",
                      placeholder: "Role",
                      dense: "",
                      outlined: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-actions": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    !props2.row.active ? (openBlock(), createElementBlock("span", _hoisted_2$1, "REVOKED ACCESS")) : createCommentVNode("", true),
                    createVNode(QBtn, {
                      icon: "more_vert",
                      flat: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(QMenu, null, {
                          default: withCtx(() => [
                            createVNode(QList, null, {
                              default: withCtx(() => [
                                props2.row.active ? (openBlock(), createBlock(QItem, {
                                  key: 0,
                                  onClick: ($event) => toggleAccessUser(props2.row, 0),
                                  clickable: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Revoke Access")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : createCommentVNode("", true),
                                !props2.row.active ? (openBlock(), createBlock(QItem, {
                                  key: 1,
                                  onClick: ($event) => toggleAccessUser(props2.row, 1),
                                  clickable: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Enable Access")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : createCommentVNode("", true),
                                createVNode(QItem, {
                                  onClick: ($event) => resetMfaUser(props2.row),
                                  clickable: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Reset MFA")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                __props.team.users && __props.team.users.length > 1 && (props2.row.role !== "administrator" || unref(adminCount) > 1) ? (openBlock(), createBlock(QItem, {
                                  key: 2,
                                  onClick: ($event) => removeUser(props2.row),
                                  clickable: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Remove User")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : createCommentVNode("", true)
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
            }, 8, ["rows", "filter", "loading"])
          ]),
          _: 1
        }),
        createVNode(QCard, { class: "q-mt-md q-mb-md" }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3$1, "Pending Invitations (" + toDisplayString(invitations.value.length) + ")", 1),
                createBaseVNode("p", null, toDisplayString(_ctx.$t("team.userPlural")) + " that have been sent an invitation email but have not responded are listed below. ", 1)
              ]),
              _: 1
            }),
            !invitations.value.length ? (openBlock(), createBlock(QCardSection, {
              key: 0,
              class: "text-center"
            }, {
              default: withCtx(() => [
                createVNode(NoRecords)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            invitations.value.length ? (openBlock(), createBlock(QMarkupTable, { key: 1 }, {
              default: withCtx(() => [
                _hoisted_4,
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(invitations.value, (i) => {
                    return openBlock(), createElementBlock("tr", {
                      key: i.id
                    }, [
                      createBaseVNode("td", null, [
                        createVNode(QInput, {
                          modelValue: i.first_name,
                          "onUpdate:modelValue": ($event) => i.first_name = $event,
                          borderless: "",
                          onInput: ($event) => updateInvite(i),
                          debounce: "500"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                      ]),
                      createBaseVNode("td", null, [
                        createVNode(QInput, {
                          modelValue: i.last_name,
                          "onUpdate:modelValue": ($event) => i.last_name = $event,
                          borderless: "",
                          onInput: ($event) => updateInvite(i),
                          debounce: "500"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                      ]),
                      createBaseVNode("td", null, toDisplayString(i.email), 1),
                      createBaseVNode("td", null, [
                        createVNode(QSelect, {
                          modelValue: i.role,
                          "onUpdate:modelValue": ($event) => i.role = $event,
                          options: roles,
                          "map-options": "",
                          "emit-value": "",
                          borderless: "",
                          onInput: ($event) => updateInvite(i),
                          debounce: "500"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"])
                      ]),
                      createBaseVNode("td", null, [
                        i.latestMail ? (openBlock(), createElementBlock("span", _hoisted_5, [
                          createTextVNode("Sent by " + toDisplayString(i.invitee.fullname) + " " + toDisplayString(unref(fromNowTz)(i.latestMail.created_at)), 1),
                          _hoisted_6,
                          createTextVNode(toDisplayString(unref(awsSesStatus)(i.latestMail.amazon_ses_status)), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("td", null, toDisplayString(i.status), 1),
                      createBaseVNode("td", _hoisted_7, [
                        createVNode(QBtn, {
                          icon: "more_vert",
                          flat: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(QMenu, null, {
                              default: withCtx(() => [
                                createVNode(QList, null, {
                                  default: withCtx(() => [
                                    i.status === "Pending" ? withDirectives((openBlock(), createBlock(QItem, {
                                      key: 0,
                                      onClick: ($event) => resendInvitation(i.id),
                                      clickable: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(QItemSection, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" Resend invitation ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])), [
                                      [ClosePopup]
                                    ]) : createCommentVNode("", true),
                                    withDirectives((openBlock(), createBlock(QItem, {
                                      onClick: ($event) => removeInvitation(i.id),
                                      clickable: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(QItemSection, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" Revoke invitation ")
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
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                _hoisted_8,
                createBaseVNode("p", null, " Invite new " + toDisplayString(_ctx.$t("team.userPlural").toLowerCase()) + " by filling out the form below and clicking SEND INVITE.", 1)
              ]),
              _: 1
            }),
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(QInput, {
                      modelValue: invite.email,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => invite.email = $event),
                      label: "Email address of user",
                      error: unref($v).email.$invalid
                    }, {
                      append: withCtx(() => [
                        createVNode(QBtn, {
                          onClick: _cache[0] || (_cache[0] = ($event) => populateInvite()),
                          label: "Load",
                          flat: "",
                          color: "primary"
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "error"])
                  ]),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(QInput, {
                      modelValue: invite.first_name,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => invite.first_name = $event),
                      label: "First name",
                      error: unref($v).first_name.$invalid,
                      disable: loading.value
                    }, null, 8, ["modelValue", "error", "disable"])
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(QInput, {
                      modelValue: invite.last_name,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => invite.last_name = $event),
                      label: "Last name",
                      error: unref($v).last_name.$invalid,
                      disable: loading.value
                    }, null, 8, ["modelValue", "error", "disable"])
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(QSelect, {
                      modelValue: invite.role,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => invite.role = $event),
                      label: "Customer Access",
                      options: roles,
                      "map-options": "",
                      "emit-value": "",
                      error: unref($v).role.$invalid
                    }, null, 8, ["modelValue", "error"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_14, [
                  createVNode(QToggle, {
                    modelValue: invite.bypass,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => invite.bypass = $event),
                    label: "Add directly and bypass invitation system",
                    disable: ""
                  }, null, 8, ["modelValue"]),
                  createVNode(QSpace),
                  createVNode(QBtn, {
                    onClick: _cache[6] || (_cache[6] = ($event) => inviteUser()),
                    disable: loading.value || unref($v).$invalid,
                    label: "Send invite",
                    color: "primary",
                    loading: loadingInvite.value
                  }, null, 8, ["disable", "loading"])
                ]),
                inviteError.value ? (openBlock(), createElementBlock("div", _hoisted_15, "This user already exists in the account.")) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Users that are involved in this customer.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamUsers",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, "Associated " + toDisplayString(_ctx.$t("team.userPlural")), 1),
        _hoisted_3,
        createVNode(_sfc_main$1, { team: __props.model }, null, 8, ["team"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
