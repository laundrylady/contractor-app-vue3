import { Q as QToolbar, a as QToolbarTitle } from "./QToolbarTitle.9c9c22c3.js";
import { S as createComponent, ab as useDarkProps, aS as useTransitionProps, ac as useDark, aW as useTransition, f as computed, h, H as Transition, g as getCurrentInstance, aI as QSpinner, A as defineComponent, r as ref, B as reactive, o as onMounted, l as openBlock, J as createBlock, K as withCtx, k as createVNode, aG as createTextVNode, y as createCommentVNode, L as QCardSection, s as normalizeClass, m as createElementBlock, p as createBaseVNode, P as QBtn, M as QInput, bd as renderList, F as Fragment, Q as QCard, aH as toDisplayString, R as unref, i as inject, N as QIcon, bv as resolveComponent } from "./index.859cb660.js";
import { a as QItem, Q as QItemSection } from "./QItemSection.b7e689a7.js";
import { Q as QList } from "./QList.6ec0db61.js";
import { a as api } from "./axios.c622a4bf.js";
import { u as useMixinDebug } from "./debug.805a8aef.js";
import { b as doNotify, f as fromNowTz, c as confirmDelete, i as displayDateDay, j as hourBookingDisplay, k as hourAgreedDisplay, g as currencyFormat } from "./help.d852d987.js";
import { _ as _sfc_main$3 } from "./UserAvatar.2c08cac4.js";
import { _ as _sfc_main$4 } from "./StatusTag.e5421ff2.js";
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
const _hoisted_1$2 = {
  key: 0,
  class: "q-mb-md"
};
const _hoisted_2$2 = { class: "q-mb-lg" };
const _hoisted_3$2 = { class: "text-grey" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
              !notes.value.length ? (openBlock(), createElementBlock("div", _hoisted_1$2, " No notes found. ")) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_2$2, [
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
                            createVNode(_sfc_main$3, {
                              user: n.user
                            }, null, 8, ["user"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_3$2, toDisplayString(unref(fromNowTz)(n.created_at)), 1),
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
const _hoisted_1$1 = ["onClick"];
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = { key: 1 };
const _hoisted_4$1 = { class: "text-grey-7" };
const _hoisted_5$1 = { key: 0 };
const _hoisted_6 = {
  key: 0,
  class: "q-ml-xs q-mr-xs"
};
const _hoisted_7 = { class: "text-grey-7" };
const _hoisted_8 = {
  key: 0,
  class: "q-mr-sm"
};
const _hoisted_9 = { class: "text-h7 q-mt-xs" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderListFormat",
  props: {
    orders: null,
    noAvatar: { type: Boolean }
  },
  setup(__props) {
    const bus = inject("bus");
    const editOrderModal = (id) => {
      bus.emit("editOrderModal", id);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QList, {
        separator: "",
        class: "bg-white"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.orders, (o) => {
            return openBlock(), createBlock(QItem, {
              key: o.id
            }, {
              default: withCtx(() => [
                !__props.noAvatar && o.contractor ? (openBlock(), createBlock(QItemSection, {
                  key: 0,
                  avatar: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      user: o.contractor
                    }, null, 8, ["user"])
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createBaseVNode("a", {
                        onClick: ($event) => editOrderModal(o.id),
                        class: "link"
                      }, [
                        createTextVNode(toDisplayString(unref(displayDateDay)(o.scheduled_pickup_date)) + " " + toDisplayString(o.scheduled_pickup_date) + " (", 1),
                        !o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(hourBookingDisplay)(o.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                        o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_3$1, toDisplayString(unref(hourAgreedDisplay)(o.agreed_pickup_time)), 1)) : createCommentVNode("", true),
                        createTextVNode(")")
                      ], 8, _hoisted_1$1),
                      createVNode(_sfc_main$4, {
                        status: o.status,
                        small: true,
                        class: "q-ml-xs"
                      }, null, 8, ["status"])
                    ]),
                    createBaseVNode("div", _hoisted_4$1, [
                      createVNode(QIcon, {
                        name: "settings",
                        color: "grey-7"
                      }),
                      createTextVNode(),
                      o.productcategories ? (openBlock(), createElementBlock("span", _hoisted_5$1, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(o.productcategories, (c, index) => {
                          return openBlock(), createElementBlock("span", {
                            key: c.id
                          }, [
                            createTextVNode(toDisplayString(c.name), 1),
                            index + 1 !== o.productcategories.length ? (openBlock(), createElementBlock("span", _hoisted_6, "&")) : createCommentVNode("", true)
                          ]);
                        }), 128)),
                        createTextVNode(" pickup with " + toDisplayString(o.team.name), 1)
                      ])) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_7, [
                      createVNode(QIcon, {
                        name: "place",
                        color: "grey-7"
                      }),
                      createTextVNode(),
                      o.team.suburbpostcoderegion ? (openBlock(), createElementBlock("span", _hoisted_8, toDisplayString(o.team.suburbpostcoderegion.locality) + " " + toDisplayString(o.team.suburbpostcoderegion.state), 1)) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 2
                }, 1024),
                o.grand_total_price > 0 ? (openBlock(), createBlock(QItemSection, {
                  key: 1,
                  side: ""
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_9, toDisplayString(unref(currencyFormat)(o.grand_total_price)), 1)
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "text-grey-7 text-caption" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = {
  key: 0,
  class: "q-ml-xs q-mr-xs"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderRecurringBookingFormat",
  props: {
    orders: null,
    noAvatar: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return __props.orders && __props.orders.length ? (openBlock(), createBlock(QList, {
        key: 0,
        class: "bg-white"
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.orders, (o) => {
            return openBlock(), createBlock(QItem, {
              key: o.id
            }, {
              default: withCtx(() => [
                o.contractor && !__props.noAvatar ? (openBlock(), createBlock(QItemSection, {
                  key: 0,
                  avatar: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      user: o.contractor
                    }, null, 8, ["user"])
                  ]),
                  _: 2
                }, 1024)) : createCommentVNode("", true),
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      createVNode(_component_router_link, {
                        to: { name: "order-edit", params: { id: o.id } },
                        target: "_blank",
                        class: "link"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(displayDateDay)(o.scheduled_pickup_date)) + " (", 1),
                          !o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(hourBookingDisplay)(o.scheduled_pickup_time)), 1)) : createCommentVNode("", true),
                          o.agreed_pickup_time ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(hourAgreedDisplay)(o.agreed_pickup_time)), 1)) : createCommentVNode("", true),
                          createTextVNode(")")
                        ]),
                        _: 2
                      }, 1032, ["to"]),
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(QIcon, {
                          name: "settings",
                          color: "grey-7"
                        }),
                        createTextVNode(),
                        o.productcategories ? (openBlock(), createElementBlock("span", _hoisted_4, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(o.productcategories, (c, index) => {
                            return openBlock(), createElementBlock("span", {
                              key: c.id
                            }, [
                              createTextVNode(toDisplayString(c.name), 1),
                              index + 1 !== o.productcategories.length ? (openBlock(), createElementBlock("span", _hoisted_5, "&")) : createCommentVNode("", true)
                            ]);
                          }), 128)),
                          createTextVNode(" pickup with " + toDisplayString(o.team.name), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main$2 as _, _sfc_main$1 as a, _sfc_main as b };
