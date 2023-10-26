import { _ as _sfc_main$1 } from "./GlobalAttachments.a8189ecb.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.915b3663.js";
import "./QToolbarTitle.1d953818.js";
import "./QSelect.d5393abf.js";
import "./selection.8ca46533.js";
import "./QItemLabel.aa8d2617.js";
import "./QMenu.34b9a770.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.bd6aadaf.js";
import "./QList.05360fe2.js";
import "./QUploader.4b9edde0.js";
import "./QCircularProgress.511c72bb.js";
import "./ClosePopup.269b47c8.js";
import "./index.esm.fb7207b5.js";
import "./use-quasar.7e6ce9d8.js";
import "./axios.c80c70de.js";
import "./NoRecords.0426f27e.js";
import "./debug.972d445d.js";
import "./help.90d28660.js";
import "./DateField.d44461be.js";
import "./QDate.e85585a7.js";
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
