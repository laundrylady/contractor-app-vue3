import { _ as _sfc_main$1 } from "./GlobalAttachments.4aee8df9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.37c212b7.js";
import "./QToolbarTitle.8ca06b52.js";
import "./QSelect.45446517.js";
import "./QItemSection.5e196a9b.js";
import "./QItemLabel.c603d020.js";
import "./QMenu.f3609a1c.js";
import "./selection.327197b1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.d8a97a30.js";
import "./QList.ac4209d2.js";
import "./QUploader.b400914c.js";
import "./QCircularProgress.bcfdad56.js";
import "./ClosePopup.097f38a2.js";
import "./index.esm.4f6ef102.js";
import "./use-quasar.5a7090ba.js";
import "./axios.9d82477c.js";
import "./NoRecords.bbe9cc97.js";
import "./debug.972d445d.js";
import "./help.3174e283.js";
import "./DateField.73e69296.js";
import "./QDate.fc1a4e31.js";
import "./use-cache.b0833c75.js";
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
