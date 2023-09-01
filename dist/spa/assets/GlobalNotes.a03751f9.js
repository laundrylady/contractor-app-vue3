import { A as defineComponent, r as ref, B as reactive, o as onMounted, l as openBlock, m as createElementBlock, k as createVNode, aI as QSpinner, aG as createTextVNode, y as createCommentVNode, K as withCtx, J as createBlock, p as createBaseVNode, M as QInput, s as normalizeClass, P as QBtn, F as Fragment, bc as renderList, L as QCardSection, Q as QCard, aH as toDisplayString, R as unref } from "./index.c8d47ef5.js";
import { a as QToolbarTitle, Q as QToolbar } from "./QToolbarTitle.36ce7bcd.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.fc8141cf.js";
import { Q as QList } from "./QList.1476326b.js";
import { a as api } from "./axios.415142fa.js";
import { u as useMixinDebug } from "./debug.ffa51329.js";
import { d as doNotify, v as fromNowTz, c as confirmDelete } from "./help.26cc6078.js";
import { _ as _sfc_main$1 } from "./UserAvatar.8359fdd6.js";
import { u as useMixinSecurity } from "./security.edddd668.js";
const _hoisted_1 = { style: { "min-height": "100px" } };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = {
  key: 0,
  class: "q-mb-md"
};
const _hoisted_4 = { class: "q-mb-lg" };
const _hoisted_5 = { class: "text-grey" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GlobalNotes",
  props: {
    notable_type: null,
    notable_id: null,
    nobox: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { user } = useMixinSecurity();
    const loaded = ref(false);
    const loading = ref(false);
    const notes = ref();
    const newNote = reactive({
      notable_type: props.notable_type,
      notable_id: props.notable_id.toString(),
      note: null
    });
    const getNotes = () => {
      api.get("/public/note/fetch/" + props.notable_type + "/" + props.notable_id).then((response) => {
        notes.value = response.data;
        loading.value = false;
        loaded.value = true;
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    const deleteNote = (id) => {
      confirmDelete("This will remove the note").onOk(() => {
        loading.value = true;
        api.delete(`/public/note/${id}`).then(() => {
          getNotes();
          doNotify("negative", "Note removed");
        }).catch((response) => {
          useMixinDebug(response);
        });
      });
    };
    const addNote = () => {
      if (newNote.note) {
        loading.value = true;
        api.post("/public/note", newNote).then(() => {
          getNotes();
          doNotify("positive", "Note saved");
          Object.assign(newNote, {
            notable_type: props.notable_type,
            notable_id: props.notable_id,
            note: null
          });
        }).catch((response) => {
          useMixinDebug(response);
          loading.value = false;
        });
      }
    };
    onMounted(() => {
      getNotes();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        !loaded.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(QSpinner),
          createTextVNode(" Loading notes...")
        ])) : createCommentVNode("", true),
        createVNode(QCard, {
          class: normalizeClass({ "no-shadow bg-transparent": __props.nobox })
        }, {
          default: withCtx(() => [
            !__props.nobox ? (openBlock(), createBlock(QToolbar, {
              key: 0,
              class: "bg-primary text-white"
            }, {
              default: withCtx(() => [
                createVNode(QToolbarTitle, null, {
                  default: withCtx(() => [
                    createTextVNode("Notes")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true),
            loaded.value ? (openBlock(), createBlock(QCardSection, {
              key: 1,
              class: normalizeClass({ "q-pa-none": __props.nobox })
            }, {
              default: withCtx(() => [
                !notes.value.length ? (openBlock(), createElementBlock("div", _hoisted_3, " No notes found ")) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_4, [
                  createVNode(QInput, {
                    modelValue: newNote.note,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newNote.note = $event),
                    type: "textarea",
                    placeholder: "Type a new note",
                    class: normalizeClass([{ "m-t-lg": notes.value.length }, "q-mb-sm"]),
                    autogrow: "",
                    outlined: ""
                  }, {
                    append: withCtx(() => [
                      createVNode(QBtn, {
                        color: "primary",
                        onClick: _cache[0] || (_cache[0] = ($event) => addNote()),
                        disabled: loading.value,
                        label: "Add",
                        rounded: ""
                      }, null, 8, ["disabled"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "class"])
                ]),
                createVNode(QList, { class: "q-mt-sm" }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(notes.value, (n, index) => {
                      return openBlock(), createBlock(QItem, { key: index }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$1, {
                                user: n.user
                              }, null, 8, ["user"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_5, toDisplayString(unref(fromNowTz)(n.created_at)), 1),
                              createTextVNode(" " + toDisplayString(n.note), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, { side: "" }, {
                            default: withCtx(() => [
                              unref(user) && n.user_id === unref(user).id ? (openBlock(), createBlock(QBtn, {
                                key: 0,
                                onClick: ($event) => deleteNote(n.id),
                                flat: "",
                                color: "grey",
                                icon: "delete"
                              }, null, 8, ["onClick"])) : createCommentVNode("", true)
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
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["class"])
      ]);
    };
  }
});
export { _sfc_main as _ };
