import { _ as _sfc_main$1 } from "./GlobalAttachments.be710ff7.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f9822a69.js";
import "./QToolbarTitle.e24b451d.js";
import "./QToolbar.1b19464d.js";
import "./QSelect.0cf8ed7b.js";
import "./QItemSection.77279501.js";
import "./QItemLabel.d3a739f0.js";
import "./QMenu.6945e39a.js";
import "./selection.d4361626.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.fcd15c66.js";
import "./QList.a21a4cf1.js";
import "./QUploader.1cba3c3d.js";
import "./QCircularProgress.25be3101.js";
import "./ClosePopup.11af44b0.js";
import "./index.esm.62e9603d.js";
import "./use-quasar.0b1d0340.js";
import "./axios.426a9acd.js";
import "./NoRecords.9413225d.js";
import "./debug.b9d7424b.js";
import "./help.2b676caf.js";
import "./DateField.b078e0a3.js";
import "./QDate.376dc004.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.16e24d97.js";
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
