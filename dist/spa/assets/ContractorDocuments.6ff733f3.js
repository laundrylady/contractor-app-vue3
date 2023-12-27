import { _ as _sfc_main$1 } from "./GlobalAttachments.44618357.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ceae6044.js";
import "./QToolbarTitle.120741a3.js";
import "./QToolbar.c6ec12fb.js";
import "./QSelect.247a3875.js";
import "./QItemSection.d03e362e.js";
import "./QItemLabel.783f36f9.js";
import "./QMenu.b7955310.js";
import "./selection.bd6e29b5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.9e2c6264.js";
import "./QList.be12ee7b.js";
import "./QUploader.d5dd6c54.js";
import "./QCircularProgress.a922e2e4.js";
import "./ClosePopup.c99b0a76.js";
import "./index.esm.1c55359f.js";
import "./use-quasar.19f71364.js";
import "./axios.44b80d5e.js";
import "./NoRecords.ec4af154.js";
import "./debug.b9d7424b.js";
import "./help.f2b83c8e.js";
import "./DateField.a86d9235.js";
import "./QDate.af707eb6.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.36662236.js";
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
