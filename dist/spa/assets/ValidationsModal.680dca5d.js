import { Q as QSpace } from "./QSpace.2fdfb7db.js";
import { B as defineComponent, i as inject, r as ref, m as openBlock, a9 as createBlock, K as withCtx, l as createVNode, H as withDirectives, P as QBtn, L as QCardSection, n as createElementBlock, q as createBaseVNode, F as Fragment, aa as renderList, ab as createTextVNode, ac as toDisplayString, z as createCommentVNode, ad as QCardActions, Q as QCard, ae as QDialog } from "./index.5c682f3f.js";
import { Q as QToolbar } from "./QToolbar.64bb1a92.js";
import { C as ClosePopup } from "./ClosePopup.db6ddd1f.js";
const _hoisted_1 = {
  key: 0,
  class: "q-pa-md bg-grey-2 rounded-borders q-mb-md flex items-center"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-medium" }, "Please correct the following issues:", -1);
const _hoisted_3 = { style: { "list-style": "none" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ValidationsModal",
  setup(__props) {
    const bus = inject("bus");
    const showModal = ref(false);
    const validations = ref();
    bus.on("showValidationsModal", (data) => {
      validations.value = data;
      showModal.value = true;
    });
    const reload = () => {
      window.location.reload();
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: showModal.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => showModal.value = $event)
      }, {
        default: withCtx(() => [
          createVNode(QCard, { class: "modal" }, {
            default: withCtx(() => [
              createVNode(QToolbar, null, {
                default: withCtx(() => [
                  createVNode(QSpace),
                  withDirectives(createVNode(QBtn, {
                    rounded: "",
                    dense: "",
                    icon: "close",
                    flat: ""
                  }, null, 512), [
                    [ClosePopup]
                  ])
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  validations.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
                    createBaseVNode("div", null, [
                      _hoisted_2,
                      createBaseVNode("ul", _hoisted_3, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(validations.value, (v, index) => {
                          return openBlock(), createElementBlock("li", { key: index }, [
                            createTextVNode(" Field: " + toDisplayString(v.field) + " ", 1),
                            createBaseVNode("div", null, "Error: " + toDisplayString(v.message), 1)
                          ]);
                        }), 128))
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              validations.value && validations.value.length && validations.value[0].field === "Security Token" ? (openBlock(), createBlock(QCardActions, {
                key: 0,
                align: "center"
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    onClick: _cache[0] || (_cache[0] = ($event) => reload()),
                    label: "Refresh",
                    color: "primary"
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export { _sfc_main as _ };
