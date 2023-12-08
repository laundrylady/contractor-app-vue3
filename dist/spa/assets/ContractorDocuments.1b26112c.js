import { _ as _sfc_main$1 } from "./GlobalAttachments.0858ed82.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.439f6236.js";
import "./QToolbarTitle.823a91b5.js";
import "./QSelect.fe07d48e.js";
import "./QItemSection.17637cbf.js";
import "./QItemLabel.ac4e31dc.js";
import "./QMenu.537a7799.js";
import "./selection.73cc12e4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.e27326d5.js";
import "./QList.aae51351.js";
import "./QUploader.e8a4c41b.js";
import "./QCircularProgress.e9360bb0.js";
import "./ClosePopup.51c7b908.js";
import "./index.esm.8861c471.js";
import "./use-quasar.f50afcdd.js";
import "./axios.77c66b00.js";
import "./NoRecords.b3b84aab.js";
import "./debug.972d445d.js";
import "./help.7be4cca3.js";
import "./DateField.95337a36.js";
import "./QDate.f30f8f55.js";
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
