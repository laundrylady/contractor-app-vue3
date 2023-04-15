import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.1a75cd00.js";
import { V as createComponent, ab as useDarkProps, aO as useTransitionProps, ac as useDark, aS as useTransition, g as computed, h, H as Transition, j as getCurrentInstance, aE as QSpinner, A as defineComponent, r as ref, B as reactive, o as onMounted, m as openBlock, K as createBlock, L as withCtx, l as createVNode, R as createTextVNode, y as createCommentVNode, M as QCardSection, t as normalizeClass, n as createElementBlock, q as createBaseVNode, S as QBtn, N as QInput, b7 as renderList, F as Fragment, Q as QCard, b8 as toDisplayString, U as unref } from "./index.e647c85a.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.99659658.js";
import { Q as QList } from "./QList.2f0afc60.js";
import { a as api } from "./axios.ccd3a804.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { b as doNotify, l as fromNowTz, c as confirmDelete } from "./help.c0f85e41.js";
import { _ as _sfc_main$1 } from "./UserAvatar.d3fe9aaa.js";
var QInnerLoading = createComponent({
  name: "QInnerLoading",
  props: {
    ...useDarkProps,
    ...useTransitionProps,
    showing: Boolean,
    color: String,
    size: {
      type: [String, Number],
      default: 42
    },
    label: String,
    labelClass: String,
    labelStyle: [String, Array, Object]
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { transitionProps, transitionStyle } = useTransition(props);
    const classes = computed(
      () => "q-inner-loading absolute-full column flex-center" + (isDark.value === true ? " q-inner-loading--dark" : "")
    );
    const labelClass = computed(
      () => "q-inner-loading__label" + (props.labelClass !== void 0 ? ` ${props.labelClass}` : "")
    );
    function getInner() {
      const child = [
        h(QSpinner, {
          size: props.size,
          color: props.color
        })
      ];
      if (props.label !== void 0) {
        child.push(
          h("div", {
            class: labelClass.value,
            style: props.labelStyle
          }, [props.label])
        );
      }
      return child;
    }
    function getContent() {
      return props.showing === true ? h(
        "div",
        { class: classes.value, style: transitionStyle.value },
        slots.default !== void 0 ? slots.default() : getInner()
      ) : null;
    }
    return () => h(Transition, transitionProps.value, getContent);
  }
});
const _hoisted_1 = {
  key: 0,
  class: "q-mb-md"
};
const _hoisted_2 = { class: "q-mb-lg" };
const _hoisted_3 = { class: "text-grey" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GlobalNotes",
  props: {
    notable_type: null,
    notable_id: null,
    nobox: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const loaded = ref(false);
    const loading = ref(false);
    const notes = ref();
    const newNote = reactive({
      notable_type: props.notable_type,
      notable_id: props.notable_id.toString(),
      note: null
    });
    const getNotes = () => {
      api.get("/note/fetch/" + props.notable_type + "/" + props.notable_id).then((response) => {
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
        api.delete(`/note/${id}`).then(() => {
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
        api.post("/note", newNote).then(() => {
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
      return openBlock(), createBlock(QCard, {
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
          createVNode(QInnerLoading, {
            showing: !loaded.value,
            class: "inner-loading-mh"
          }, {
            default: withCtx(() => [
              createVNode(QSpinner, {
                size: "50px",
                color: "primary"
              })
            ]),
            _: 1
          }, 8, ["showing"]),
          loaded.value ? (openBlock(), createBlock(QCardSection, {
            key: 1,
            class: normalizeClass({ "q-pa-none": __props.nobox })
          }, {
            default: withCtx(() => [
              !notes.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, " No notes found. ")) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_2, [
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
                      disabled: loading.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Add note")
                      ]),
                      _: 1
                    }, 8, ["disabled"])
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
                            createBaseVNode("div", _hoisted_3, toDisplayString(unref(fromNowTz)(n.created_at)), 1),
                            createTextVNode(" " + toDisplayString(n.note), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              onClick: ($event) => deleteNote(n.id),
                              flat: "",
                              color: "grey",
                              icon: "delete"
                            }, null, 8, ["onClick"])
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
      }, 8, ["class"]);
    };
  }
});
export { _sfc_main as _ };
