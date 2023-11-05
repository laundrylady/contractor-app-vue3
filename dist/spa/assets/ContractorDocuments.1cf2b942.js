import { _ as _sfc_main$1 } from "./GlobalAttachments.a355fa10.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.478bbc7a.js";
import "./QToolbarTitle.a43afb96.js";
import "./QSelect.0bd0fe6e.js";
import "./selection.22ac538d.js";
import "./QItemLabel.77035536.js";
import "./QMenu.50564840.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.dc18a2cd.js";
import "./QList.d598c41c.js";
import "./QUploader.342fa561.js";
import "./QCircularProgress.7afac779.js";
import "./ClosePopup.938efc3b.js";
import "./index.esm.ed2c90cb.js";
import "./use-quasar.62575e08.js";
import "./axios.5015493e.js";
import "./NoRecords.f1e52dc3.js";
import "./debug.972d445d.js";
import "./help.ffa7deb9.js";
import "./DateField.32e28334.js";
import "./QDate.10f7f734.js";
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
