import { _ as _sfc_main$1 } from "./GlobalAttachments.01f11744.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.a9a574a4.js";
import "./QToolbarTitle.38467714.js";
import "./QSelect.9067d31a.js";
import "./QItemSection.2b728bb6.js";
import "./QItemLabel.09cf120e.js";
import "./QMenu.9d7ea008.js";
import "./selection.95ad5cb4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.209d2405.js";
import "./QList.0b09280c.js";
import "./QUploader.a56d468a.js";
import "./QCircularProgress.5c8b5001.js";
import "./ClosePopup.9ef9fc4b.js";
import "./index.esm.0e4f4506.js";
import "./use-quasar.39bac4cf.js";
import "./axios.24ab5c7c.js";
import "./NoRecords.8b686ef6.js";
import "./debug.972d445d.js";
import "./help.08e1e70e.js";
import "./DateField.74fcfbc6.js";
import "./QDate.297f1bfc.js";
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
