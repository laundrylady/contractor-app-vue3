import { _ as _sfc_main$1 } from "./GlobalAttachments.9a41e9b5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.d121ec5d.js";
import "./QToolbarTitle.1b4f081a.js";
import "./QSelect.948a0151.js";
import "./QItemSection.0262b439.js";
import "./QItemLabel.38ead7bb.js";
import "./QMenu.e4b54bdf.js";
import "./selection.111dbff5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.859ba490.js";
import "./QList.bf1f960c.js";
import "./QUploader.0b086b14.js";
import "./QCircularProgress.a8d051f7.js";
import "./ClosePopup.fb2f9dc0.js";
import "./index.esm.3119e6f0.js";
import "./use-quasar.4e63e5fc.js";
import "./axios.25c40239.js";
import "./NoRecords.886dc080.js";
import "./debug.972d445d.js";
import "./help.a8cc6f8b.js";
import "./DateField.8b0e1d77.js";
import "./QDate.5f477f11.js";
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
