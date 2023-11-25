import { _ as _sfc_main$1 } from "./GlobalAttachments.3ca91039.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.350647ef.js";
import "./QToolbarTitle.a019af48.js";
import "./QSelect.53ebc878.js";
import "./QItemSection.b9dcc858.js";
import "./QItemLabel.a8f6f695.js";
import "./QMenu.7c067e85.js";
import "./selection.06c21360.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.4e7707e6.js";
import "./QList.d5d141cd.js";
import "./QUploader.6b23f6b4.js";
import "./QCircularProgress.5a891ec7.js";
import "./ClosePopup.95dac8cc.js";
import "./index.esm.2f6e616e.js";
import "./use-quasar.9e482762.js";
import "./axios.e286ea64.js";
import "./NoRecords.8c837480.js";
import "./debug.972d445d.js";
import "./help.3d30d2fa.js";
import "./DateField.23b45e2b.js";
import "./QDate.53abf57c.js";
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
