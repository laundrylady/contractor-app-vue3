import { _ as _sfc_main$1 } from "./GlobalAttachments.fd8bb1a5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ea83ac5e.js";
import "./QToolbarTitle.da6e613c.js";
import "./QSelect.2f76507d.js";
import "./QItemSection.182732df.js";
import "./QItemLabel.d7b60bb5.js";
import "./QMenu.942b2136.js";
import "./selection.b6f1b316.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.3db55f50.js";
import "./QList.9aa1ea21.js";
import "./QUploader.87e4af82.js";
import "./QCircularProgress.33200c67.js";
import "./ClosePopup.6b6daff8.js";
import "./index.esm.5ad92a45.js";
import "./use-quasar.4eca66f2.js";
import "./axios.07c2a277.js";
import "./NoRecords.b87d1f47.js";
import "./debug.972d445d.js";
import "./help.81f29bfa.js";
import "./DateField.05d26b6e.js";
import "./QDate.4ab9bb11.js";
import "./use-cache.b0833c75.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "These documents are only visible to staff.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamDocuments",
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
          attachable_type: "Team"
        }, null, 8, ["attachable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
