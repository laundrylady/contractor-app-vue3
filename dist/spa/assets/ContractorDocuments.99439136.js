import { _ as _sfc_main$1 } from "./GlobalAttachments.eae4fe6a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.2cdb50d9.js";
import "./QToolbarTitle.78e4d89d.js";
import "./QSelect.3e0c9bea.js";
import "./selection.537e3587.js";
import "./QItemLabel.8962bf47.js";
import "./QMenu.d2e9389c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.633c3642.js";
import "./QList.2537dc84.js";
import "./QUploader.7e952e78.js";
import "./QCircularProgress.f0f99b6b.js";
import "./ClosePopup.c8f700c5.js";
import "./index.esm.a5628d80.js";
import "./use-quasar.002de239.js";
import "./axios.44351c56.js";
import "./NoRecords.cd6fd505.js";
import "./debug.972d445d.js";
import "./help.cfcd358f.js";
import "./DateField.97e54323.js";
import "./QDate.a2044467.js";
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
