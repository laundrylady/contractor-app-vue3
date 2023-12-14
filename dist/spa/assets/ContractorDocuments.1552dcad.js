import { _ as _sfc_main$1 } from "./GlobalAttachments.7d0481d3.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.420ace9d.js";
import "./QToolbarTitle.00516800.js";
import "./QSelect.291dd209.js";
import "./QItemSection.7138275a.js";
import "./QItemLabel.4e161513.js";
import "./QMenu.51c92bb2.js";
import "./selection.eff96e95.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.1059bd16.js";
import "./QList.94e247d9.js";
import "./QUploader.d83e6ba2.js";
import "./QCircularProgress.c2324351.js";
import "./ClosePopup.ecc275ae.js";
import "./index.esm.03395a9e.js";
import "./use-quasar.7d058cf4.js";
import "./axios.feaa9f76.js";
import "./NoRecords.445540fa.js";
import "./debug.972d445d.js";
import "./help.f1ea19ef.js";
import "./DateField.c4f3daa2.js";
import "./QDate.4187eab6.js";
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
