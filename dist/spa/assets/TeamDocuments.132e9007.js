import { _ as _sfc_main$1 } from "./GlobalAttachments.49a6d395.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.4ea3bfb0.js";
import "./QToolbarTitle.1aed34c2.js";
import "./QSelect.03ae6953.js";
import "./QItemSection.e253e9f2.js";
import "./QItemLabel.ae3f0e25.js";
import "./QMenu.77f43e2e.js";
import "./selection.cc8eaae5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.77ea0c1f.js";
import "./QList.1e9d282c.js";
import "./QUploader.39e13952.js";
import "./QCircularProgress.6c8f4e10.js";
import "./ClosePopup.500dddb7.js";
import "./index.esm.fc80c6e2.js";
import "./use-quasar.b1a07a2d.js";
import "./axios.01559a60.js";
import "./NoRecords.ef33299c.js";
import "./debug.972d445d.js";
import "./help.08aba6f6.js";
import "./DateField.9fdee9f1.js";
import "./QDate.b7310a2f.js";
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
