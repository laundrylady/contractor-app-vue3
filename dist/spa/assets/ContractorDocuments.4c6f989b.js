import { B as defineComponent, i as inject, r as ref, C as reactive, o as onMounted, m as openBlock, a9 as createBlock, K as withCtx, L as QCardSection, q as createBaseVNode, ac as toDisplayString, z as createCommentVNode, l as createVNode, Q as QCard, ab as createTextVNode, n as createElementBlock, H as withDirectives, P as QBtn, M as QInput, ad as QCardActions, ae as QDialog, F as Fragment, aa as renderList, N as QIcon, R as unref, t as normalizeClass } from "./index.b8400575.js";
import { Q as QToolbarTitle } from "./QToolbarTitle.0c20cbaa.js";
import { Q as QToolbar } from "./QToolbar.f05197e3.js";
import { Q as QSelect } from "./QSelect.84fbb6bc.js";
import { a as QItem, Q as QItemSection } from "./format.f5a34675.js";
import { Q as QItemLabel } from "./QItemLabel.f3cb8d1c.js";
import { Q as QBtnGroup } from "./QBtnGroup.3edf222d.js";
import { Q as QList } from "./QList.489649ed.js";
import { Q as QUploader } from "./QUploader.3836e2de.js";
import { C as ClosePopup } from "./ClosePopup.aa292746.js";
import { u as useVuelidate, r as required } from "./index.esm.ca50c19b.js";
import { u as useQuasar } from "./use-quasar.9ab36770.js";
import { a as api } from "./axios.a7872fdc.js";
import { N as NoRecords } from "./NoRecords.54645713.js";
import { u as useMixinDebug } from "./debug.b9d7424b.js";
import { A as dateTimeTz, u as uploadConfig, e as doNotify, c as confirmDelete, t as groupBy } from "./help.464b59aa.js";
import { _ as _sfc_main$2 } from "./DateField.3d342039.js";
import "./selection.b2cf3425.js";
import "./rtl.b51694b1.js";
import "./QCircularProgress.069cd1a1.js";
import "./QDate.023ffe55.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.5222bdf0.js";
const _hoisted_1$1 = { class: "text-h3" };
const _hoisted_2$1 = { class: "overflow-hidden" };
const _hoisted_3$1 = { key: 0 };
const _hoisted_4 = { class: "row q-col-gutter-md" };
const _hoisted_5 = { class: "col-xs-12 col-sm-6" };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { class: "text-h6" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["src"];
const _hoisted_10 = {
  key: 1,
  style: { "width": "64px" },
  class: "text-center"
};
const _hoisted_11 = ["onClick"];
const _hoisted_12 = ["onClick"];
const _hoisted_13 = {
  key: 0,
  class: "text-caption"
};
const _hoisted_14 = {
  key: 0,
  class: "q-mt-sm"
};
const _hoisted_15 = { key: 0 };
const _hoisted_16 = { key: 0 };
const _hoisted_17 = {
  key: 1,
  class: "q-pa-md bg-grey-2 animated fadeIn"
};
const _hoisted_18 = { key: 0 };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 text-grey-7 q-mb-md" }, "Choose a document type to upload: ", -1);
const _hoisted_20 = { class: "row q-col-gutter-md" };
const _hoisted_21 = {
  key: 0,
  class: "col-sm-4"
};
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("strong", { class: "text-grey-7" }, "Identification", -1);
const _hoisted_23 = ["onClick"];
const _hoisted_24 = {
  key: 1,
  class: "col-sm-4"
};
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("strong", { class: "text-grey-7" }, "NDIS", -1);
const _hoisted_26 = ["onClick"];
const _hoisted_27 = {
  key: 2,
  class: "col-sm-4"
};
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("strong", { class: "text-grey-7" }, "Insurance", -1);
const _hoisted_29 = ["onClick"];
const _hoisted_30 = {
  key: 3,
  class: "col-sm-4"
};
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("strong", { class: "text-grey-7" }, "Purchases", -1);
const _hoisted_32 = ["onClick"];
const _hoisted_33 = {
  key: 4,
  class: "col-sm-4"
};
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("strong", { class: "text-grey-7" }, "Other", -1);
const _hoisted_35 = ["onClick"];
const _hoisted_36 = {
  key: 1,
  class: "animated fadeIn"
};
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 text-grey-8 q-mb-xs" }, "Details:", -1);
const _hoisted_38 = { class: "row q-col-gutter-md" };
const _hoisted_39 = { class: "col-xs-12 col-sm-6" };
const _hoisted_40 = { class: "col-xs-12 col-sm-6" };
const _hoisted_41 = { class: "q-mt-md" };
const _hoisted_42 = { class: "q-mt-sm" };
const _hoisted_43 = { class: "q-mt-md" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GlobalAttachments",
  props: {
    attachable_type: null,
    attachable_id: null,
    disabled: { type: Boolean },
    type: null,
    nobox: { type: Boolean },
    label: null,
    fetchTypes: null
  },
  setup(__props) {
    const props = __props;
    const bus = inject("bus");
    const schema = {
      attachable_type: props.attachable_type,
      attachable_id: props.attachable_id.toString(),
      file_file_name: null,
      name: null,
      type: "",
      expiry_date: null,
      video_uri: null
    };
    const $q = useQuasar();
    const attachments = ref();
    const newModel = reactive(schema);
    const rules = {
      type: { required },
      file_file_name: { required }
    };
    const $v = useVuelidate(rules, newModel);
    const saving = ref(false);
    const loadingattachments = ref(false);
    const edit = ref();
    const showEdit = ref(false);
    const showNew = ref(false);
    const types = [
      { category: "Identification", value: "Drivers Licence", label: "Drivers Licence" },
      { category: "Identification", value: "Medicare Card", label: "Medicare Card" },
      { category: "Other", value: "Generic Document", label: "Generic Document" },
      { category: "Insurance", value: "Certificate of Currency for Public Liability Insurance", label: "Certificate of Currency for Public Liability Insurance" },
      { category: "NDIS", value: "NDIS Workers Clearance Certificate", label: "NDIS Workers Clearance Certificate" },
      { category: "Insurance", value: "Insurance Claim", label: "Insurance Claim" }
    ];
    const emitGet = () => {
      if (props.attachable_type === "Team") {
        bus.emit("getTeam", {});
      }
    };
    const isImage = (filename) => {
      const ext = filename.substring(filename.lastIndexOf(".") + 1, filename.length) || filename;
      return ext !== "pdf";
    };
    const addNew = () => {
      saving.value = true;
      $q.loading.show({ message: "Saving attachment..." });
      api.post("/public/attachment", newModel).then(() => {
        doNotify("positive", "Attachment added");
        Object.assign(newModel, schema);
        getAttachments();
        saving.value = false;
        showNew.value = false;
        $q.loading.hide();
        emitGet();
      }).catch((response) => {
        useMixinDebug(response);
        saving.value = false;
        $q.loading.hide();
      });
    };
    const deleteAttachment = (a) => {
      confirmDelete("This will remove the attachment").onOk(() => {
        api.delete(`/public/attachment/${a.id}`).then(() => {
          getAttachments();
          doNotify("positive", "Attachment removed");
          emitGet();
        }).catch((response) => {
          useMixinDebug(response);
        });
      });
    };
    const getAttachments = () => {
      loadingattachments.value = true;
      api.post(`/public/attachment/fetch/${props.attachable_type}/${props.attachable_id}`, { fetchTypes: props.fetchTypes }).then((response) => {
        attachments.value = groupBy(response.data, "type");
        loadingattachments.value = false;
      }).catch((response) => {
        useMixinDebug(response);
        loadingattachments.value = false;
      });
    };
    const editAttachment = (a) => {
      edit.value = JSON.parse(JSON.stringify(a));
      showEdit.value = true;
    };
    const updateAttachment = (a) => {
      api.put(`/public/attachment/${a.id}`, a).then(() => {
        edit.value = false;
        showEdit.value = false;
        getAttachments();
        doNotify("positive", "Saved");
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    const view = (model) => {
      bus.emit("view-file", { model, type: "attachment" });
    };
    const hasCategoryDocuments = (category) => {
      let has = false;
      types.forEach((obj) => {
        if (obj.category === category) {
          has = true;
        }
      });
      return has;
    };
    const successUpload = (file) => {
      newModel.file_file_name = file.xhr.response;
      if (!newModel.name) {
        newModel.name = file.xhr.response;
      }
    };
    onMounted(() => {
      getAttachments();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, {
        class: normalizeClass({ "no-shadow": __props.nobox }),
        style: { "min-height": "110px" }
      }, {
        default: withCtx(() => [
          __props.label ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, toDisplayString(__props.label) + "s", 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass({ "q-pa-none": __props.nobox })
          }, [
            createBaseVNode("div", _hoisted_2$1, [
              createVNode(QDialog, {
                modelValue: showEdit.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => showEdit.value = $event)
              }, {
                default: withCtx(() => [
                  createVNode(QCard, { class: "modal" }, {
                    default: withCtx(() => [
                      createVNode(QToolbar, { class: "bg-primary text-white" }, {
                        default: withCtx(() => [
                          createVNode(QToolbarTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.label || "Document") + "s", 1),
                              edit.value.type ? (openBlock(), createElementBlock("span", _hoisted_3$1, " - " + toDisplayString(edit.value.type), 1)) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          withDirectives(createVNode(QBtn, {
                            flat: "",
                            round: "",
                            dense: "",
                            icon: "close"
                          }, null, 512), [
                            [ClosePopup]
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(QCardSection, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_4, [
                            createVNode(QSelect, {
                              modelValue: edit.value.type,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => edit.value.type = $event),
                              label: `${__props.label || "Document"} type`,
                              options: types,
                              "emit-value": "",
                              "map-options": "",
                              class: "col-xs-12 col-sm-6"
                            }, null, 8, ["modelValue", "label"]),
                            createBaseVNode("div", _hoisted_5, [
                              createVNode(_sfc_main$2, {
                                modelValue: edit.value.expiry_date,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => edit.value.expiry_date = $event),
                                label: "Expiry Date"
                              }, null, 8, ["modelValue"])
                            ])
                          ]),
                          createVNode(QInput, {
                            type: "text",
                            modelValue: edit.value.name,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => edit.value.name = $event),
                            label: "Name"
                          }, null, 8, ["modelValue"]),
                          edit.value.type === "Video" ? (openBlock(), createBlock(QInput, {
                            key: 0,
                            modelValue: edit.value.video_uri,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => edit.value.video_uri = $event),
                            label: "Enter the video URL"
                          }, null, 8, ["modelValue"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(QCardActions, {
                        class: "q-mt-md",
                        align: "right"
                      }, {
                        default: withCtx(() => [
                          withDirectives(createVNode(QBtn, {
                            onClick: _cache[4] || (_cache[4] = ($event) => [edit.value = false, showEdit.value = false]),
                            color: "secondary",
                            flat: "",
                            label: "Cancel",
                            rounded: ""
                          }, null, 512), [
                            [ClosePopup]
                          ]),
                          createVNode(QBtn, {
                            onClick: _cache[5] || (_cache[5] = ($event) => updateAttachment(edit.value)),
                            color: "primary",
                            label: "Update",
                            rounded: ""
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              (!attachments.value || !attachments.value.length) && !showNew.value && !loadingattachments.value ? (openBlock(), createBlock(NoRecords, {
                key: 0,
                class: "q-ml-md q-mt-md"
              })) : createCommentVNode("", true),
              attachments.value && attachments.value.length ? (openBlock(), createElementBlock("div", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(attachments.value, (d, index) => {
                  return openBlock(), createElementBlock("div", { key: index }, [
                    createVNode(QList, { separator: "" }, {
                      default: withCtx(() => [
                        createVNode(QItem, null, {
                          default: withCtx(() => [
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_7, [
                                  createVNode(QIcon, {
                                    name: "folder",
                                    size: "24px"
                                  }),
                                  createTextVNode(" " + toDisplayString(d.key) + "s ", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(d.data, (a, index2) => {
                          return openBlock(), createBlock(QItem, { key: index2 }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, { side: "" }, {
                                default: withCtx(() => [
                                  createBaseVNode("a", {
                                    onClick: ($event) => view(a),
                                    class: "cursor"
                                  }, [
                                    isImage(a.file_file_name) ? (openBlock(), createElementBlock("img", {
                                      key: 0,
                                      src: a.file_file_uri.thumb.uri,
                                      style: { "max-height": "64px", "max-width": "100%" },
                                      class: "shadow-1"
                                    }, null, 8, _hoisted_9)) : createCommentVNode("", true),
                                    !isImage(a.file_file_name) ? (openBlock(), createElementBlock("div", _hoisted_10, [
                                      createVNode(QIcon, {
                                        name: "description",
                                        size: "40px"
                                      })
                                    ])) : createCommentVNode("", true)
                                  ], 8, _hoisted_8)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [
                                  createVNode(QItemLabel, null, {
                                    default: withCtx(() => [
                                      createBaseVNode("a", {
                                        onClick: ($event) => view(a)
                                      }, [
                                        createBaseVNode("a", {
                                          onClick: ($event) => view(a),
                                          class: "link"
                                        }, toDisplayString(a.type), 9, _hoisted_12),
                                        createTextVNode(" - "),
                                        createBaseVNode("small", null, [
                                          createBaseVNode("em", null, toDisplayString(a.name), 1)
                                        ])
                                      ], 8, _hoisted_11),
                                      unref($q).screen.lt.sm && a.expiry_date ? (openBlock(), createElementBlock("div", _hoisted_13, "Expires: " + toDisplayString(a.expiry_date), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(QItemLabel, { caption: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Uploaded by " + toDisplayString(a.user.fullname) + " ", 1),
                                      createBaseVNode("div", null, "Last updated: " + toDisplayString(unref(dateTimeTz)(a.created_at)), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  unref($q).screen.lt.sm ? (openBlock(), createElementBlock("div", _hoisted_14, [
                                    !__props.disabled ? (openBlock(), createBlock(QBtnGroup, {
                                      key: 0,
                                      flat: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(QBtn, {
                                          onClick: ($event) => editAttachment(a),
                                          flat: "",
                                          color: "grey"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(QIcon, { name: "edit" })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(QBtn, {
                                          onClick: ($event) => deleteAttachment(a),
                                          icon: "delete",
                                          title: "Remove attachment?",
                                          flat: "",
                                          color: "grey"
                                        }, null, 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024),
                              unref($q).screen.gt.xs ? (openBlock(), createBlock(QItemSection, {
                                key: 0,
                                side: ""
                              }, {
                                default: withCtx(() => [
                                  a.expiry_date ? (openBlock(), createElementBlock("span", _hoisted_15, "Expires: " + toDisplayString(a.expiry_date), 1)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true),
                              unref($q).screen.gt.xs ? (openBlock(), createBlock(QItemSection, {
                                key: 1,
                                side: ""
                              }, {
                                default: withCtx(() => [
                                  !__props.disabled ? (openBlock(), createBlock(QBtnGroup, {
                                    key: 0,
                                    flat: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QBtn, {
                                        onClick: ($event) => editAttachment(a),
                                        flat: "",
                                        color: "grey"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(QIcon, { name: "edit" })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(QBtn, {
                                        onClick: ($event) => deleteAttachment(a),
                                        icon: "delete",
                                        title: "Remove attachment?",
                                        flat: "",
                                        color: "grey"
                                      }, null, 8, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              !__props.disabled ? (openBlock(), createBlock(QCardSection, { key: 2 }, {
                default: withCtx(() => [
                  !showNew.value && !loadingattachments.value ? (openBlock(), createElementBlock("div", _hoisted_16, [
                    createVNode(QBtn, {
                      onClick: _cache[7] || (_cache[7] = ($event) => [newModel.type = "", showNew.value = !showNew.value]),
                      label: "Upload new",
                      icon: "add_circle",
                      color: "primary",
                      outline: "",
                      rounded: ""
                    })
                  ])) : createCommentVNode("", true),
                  !saving.value && showNew.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
                    !newModel.type ? (openBlock(), createElementBlock("div", _hoisted_18, [
                      _hoisted_19,
                      createBaseVNode("div", _hoisted_20, [
                        hasCategoryDocuments("Identification") ? (openBlock(), createElementBlock("div", _hoisted_21, [
                          _hoisted_22,
                          createBaseVNode("ul", null, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(types.filter((o) => o.category === "Identification"), (t, index) => {
                              return openBlock(), createElementBlock("li", { key: index }, [
                                createBaseVNode("a", {
                                  onClick: ($event) => newModel.type = t.value,
                                  class: "link"
                                }, toDisplayString(t.label), 9, _hoisted_23)
                              ]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true),
                        hasCategoryDocuments("NDIS") ? (openBlock(), createElementBlock("div", _hoisted_24, [
                          _hoisted_25,
                          createBaseVNode("ul", null, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(types.filter((o) => o.category === "NDIS"), (t, index) => {
                              return openBlock(), createElementBlock("li", { key: index }, [
                                createBaseVNode("a", {
                                  onClick: ($event) => newModel.type = t.value,
                                  class: "link"
                                }, toDisplayString(t.label), 9, _hoisted_26)
                              ]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true),
                        hasCategoryDocuments("Insurance") ? (openBlock(), createElementBlock("div", _hoisted_27, [
                          _hoisted_28,
                          createBaseVNode("ul", null, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(types.filter((o) => o.category === "Insurance"), (t, index) => {
                              return openBlock(), createElementBlock("li", { key: index }, [
                                createBaseVNode("a", {
                                  onClick: ($event) => newModel.type = t.value,
                                  class: "link"
                                }, toDisplayString(t.label), 9, _hoisted_29)
                              ]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true),
                        hasCategoryDocuments("Purchases") ? (openBlock(), createElementBlock("div", _hoisted_30, [
                          _hoisted_31,
                          createBaseVNode("ul", null, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(types.filter((o) => o.category === "Purchases"), (t, index) => {
                              return openBlock(), createElementBlock("li", { key: index }, [
                                createBaseVNode("a", {
                                  onClick: ($event) => newModel.type = t.value,
                                  class: "link"
                                }, toDisplayString(t.label), 9, _hoisted_32)
                              ]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true),
                        hasCategoryDocuments("Other") ? (openBlock(), createElementBlock("div", _hoisted_33, [
                          _hoisted_34,
                          createBaseVNode("ul", null, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(types.filter((o) => o.category === "Other"), (t, index) => {
                              return openBlock(), createElementBlock("li", { key: index }, [
                                createBaseVNode("a", {
                                  onClick: ($event) => newModel.type = t.value,
                                  class: "link"
                                }, toDisplayString(t.label), 9, _hoisted_35)
                              ]);
                            }), 128))
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])) : createCommentVNode("", true),
                    newModel.type ? (openBlock(), createElementBlock("div", _hoisted_36, [
                      _hoisted_37,
                      createBaseVNode("div", _hoisted_38, [
                        createBaseVNode("div", _hoisted_39, [
                          createVNode(QSelect, {
                            modelValue: newModel.type,
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => newModel.type = $event),
                            label: "Type",
                            options: types,
                            "emit-value": "",
                            "map-options": "",
                            error: unref($v).type.$invalid,
                            onInput: _cache[9] || (_cache[9] = ($event) => unref($v).type.$touch())
                          }, null, 8, ["modelValue", "error"])
                        ]),
                        createBaseVNode("div", _hoisted_40, [
                          createVNode(_sfc_main$2, {
                            modelValue: newModel.expiry_date,
                            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => newModel.expiry_date = $event),
                            label: "Expiry Date"
                          }, null, 8, ["modelValue"])
                        ])
                      ]),
                      createVNode(QInput, {
                        modelValue: newModel.name,
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => newModel.name = $event),
                        label: `${__props.label} name`,
                        disabled: saving.value,
                        loading: saving.value,
                        class: "hidden"
                      }, null, 8, ["modelValue", "label", "disabled", "loading"]),
                      createBaseVNode("div", _hoisted_41, [
                        createVNode(QUploader, {
                          color: "grey-7",
                          url: unref(uploadConfig).url,
                          headers: unref(uploadConfig).headers,
                          onUploaded: successUpload,
                          label: "Upload document",
                          "auto-expand": "",
                          "auto-upload": "",
                          accept: unref(uploadConfig).documents,
                          "field-name": unref(uploadConfig).fieldName
                        }, null, 8, ["url", "headers", "accept", "field-name"]),
                        createBaseVNode("div", _hoisted_42, "All " + toDisplayString(__props.label) + "s must be in PDF or JPEG format.", 1),
                        createBaseVNode("div", _hoisted_43, [
                          createVNode(QBtn, {
                            onClick: _cache[12] || (_cache[12] = ($event) => [showNew.value = false, Object.assign(newModel, schema)]),
                            label: "Cancel",
                            color: "secondary",
                            rounded: "",
                            class: "q-mr-xs"
                          }),
                          createVNode(QBtn, {
                            onClick: _cache[13] || (_cache[13] = ($event) => addNew()),
                            disable: unref($v).$invalid,
                            label: "Save",
                            color: "primary",
                            rounded: ""
                          }, null, 8, ["disable"])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ])
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "These documents are only visible to staff.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorDocuments",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("document.namePlural")), 1),
        _hoisted_3,
        createVNode(_sfc_main$1, {
          attachable_id: __props.model.id,
          attachable_type: "User",
          class: "q-mb-lg"
        }, null, 8, ["attachable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
