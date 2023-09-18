import { _ as _sfc_main$1 } from "./GlobalAttachments.1c20d4b0.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.a37287a9.js";
import "./QToolbarTitle.3614978d.js";
import "./QSelect.9115e8f5.js";
import "./selection.eccd99db.js";
import "./QItemLabel.67ea95ca.js";
import "./QMenu.a68496b1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.d173dcf3.js";
import "./QList.23da097b.js";
import "./QUploader.f52bd9ea.js";
import "./QCircularProgress.fe092287.js";
import "./ClosePopup.765e4e6b.js";
import "./index.esm.71d5b3d9.js";
import "./use-quasar.a665413b.js";
import "./axios.23406bb5.js";
import "./NoRecords.5e24ab83.js";
import "./debug.ffa51329.js";
import "./help.9f462084.js";
import "./DateField.2c6092ca.js";
import "./QDate.f7b112b6.js";
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
