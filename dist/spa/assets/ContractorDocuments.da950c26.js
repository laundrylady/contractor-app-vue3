import { _ as _sfc_main$1 } from "./GlobalAttachments.ce6f08bd.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e951243a.js";
import "./QToolbarTitle.255502a3.js";
import "./QSelect.72f2a3a3.js";
import "./QItemSection.95a14dd1.js";
import "./QItemLabel.59353e24.js";
import "./QMenu.09fbdff1.js";
import "./selection.308ec804.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.bf8edc22.js";
import "./QList.299f1528.js";
import "./QUploader.3a0e9a2e.js";
import "./QCircularProgress.08230aa0.js";
import "./ClosePopup.e967b133.js";
import "./index.esm.ceeeccbe.js";
import "./use-quasar.acb1f9f7.js";
import "./axios.fd2a90d8.js";
import "./NoRecords.74240777.js";
import "./debug.972d445d.js";
import "./help.7cd45023.js";
import "./DateField.5f533e73.js";
import "./QDate.b0e54d11.js";
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
