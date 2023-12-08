import { _ as _sfc_main$1 } from "./GlobalAttachments.b1c4e15a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.88cb70e0.js";
import "./QToolbarTitle.0b41c4ac.js";
import "./QSelect.e751b313.js";
import "./QItemSection.6791e074.js";
import "./QItemLabel.e1f22c7c.js";
import "./QMenu.8216871e.js";
import "./selection.2115d5cc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.ef0a1694.js";
import "./QList.d5ad5eed.js";
import "./QUploader.7ffb4465.js";
import "./QCircularProgress.8fda156c.js";
import "./ClosePopup.2e78ad33.js";
import "./index.esm.8e56912a.js";
import "./use-quasar.d7594e63.js";
import "./axios.9c2c3a49.js";
import "./NoRecords.eb9c5564.js";
import "./debug.972d445d.js";
import "./help.bd514665.js";
import "./DateField.824ec720.js";
import "./QDate.cbb51386.js";
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
