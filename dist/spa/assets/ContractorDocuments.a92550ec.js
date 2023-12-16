import { _ as _sfc_main$1 } from "./GlobalAttachments.48368180.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.da51b833.js";
import "./QToolbarTitle.a752a0da.js";
import "./QSelect.0224c504.js";
import "./QItemSection.ed48dd6d.js";
import "./QItemLabel.80562e43.js";
import "./QMenu.7aba1492.js";
import "./selection.75ff086c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.83ff0d64.js";
import "./QList.81931fc6.js";
import "./QUploader.21cb1860.js";
import "./QCircularProgress.524ee7a5.js";
import "./ClosePopup.2d0b4ba7.js";
import "./index.esm.35574f5c.js";
import "./use-quasar.f9ad8d5f.js";
import "./axios.66bc8d22.js";
import "./NoRecords.63cec119.js";
import "./debug.972d445d.js";
import "./help.76d7bb04.js";
import "./DateField.6fc561b2.js";
import "./QDate.a74f35dd.js";
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
