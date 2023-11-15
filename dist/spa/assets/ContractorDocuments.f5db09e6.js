import { _ as _sfc_main$1 } from "./GlobalAttachments.d4ab8ab5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.96a3f834.js";
import "./QToolbarTitle.e1f2cc02.js";
import "./QSelect.02973d19.js";
import "./selection.1e405919.js";
import "./QItemLabel.5d90c580.js";
import "./QMenu.bc1b86fc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.75c8b8c2.js";
import "./QList.b5a66286.js";
import "./QUploader.36096f17.js";
import "./QCircularProgress.0309353b.js";
import "./ClosePopup.a29420e5.js";
import "./index.esm.83dcbc34.js";
import "./use-quasar.23e01791.js";
import "./axios.be3a5f7e.js";
import "./NoRecords.fb54b5a4.js";
import "./debug.972d445d.js";
import "./help.076bc519.js";
import "./DateField.7e2966d6.js";
import "./QDate.7383f059.js";
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
