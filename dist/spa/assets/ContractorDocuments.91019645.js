import { _ as _sfc_main$1 } from "./GlobalAttachments.3097d502.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.1cfe3334.js";
import "./QToolbarTitle.b84eec51.js";
import "./QSelect.2fb93bbd.js";
import "./selection.13315fdc.js";
import "./QItemLabel.f9f3755f.js";
import "./QMenu.a11350f0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.9f20ce92.js";
import "./QList.e91943c5.js";
import "./QUploader.6ae687df.js";
import "./QCircularProgress.08b1bda6.js";
import "./ClosePopup.3a842474.js";
import "./index.esm.299f62e8.js";
import "./use-quasar.f98c200c.js";
import "./axios.0c43222c.js";
import "./NoRecords.a355f3da.js";
import "./debug.ffa51329.js";
import "./help.39141f00.js";
import "./DateField.9ace06ff.js";
import "./QDate.470cdd8a.js";
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
