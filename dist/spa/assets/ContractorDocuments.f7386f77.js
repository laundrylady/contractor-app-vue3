import { _ as _sfc_main$1 } from "./GlobalAttachments.7899e05c.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.8b471b4e.js";
import "./QToolbarTitle.c97c78f1.js";
import "./QSelect.23cd4df9.js";
import "./selection.f16ca58c.js";
import "./QItemLabel.9226e67e.js";
import "./QMenu.4d86a9d6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.06a0a2c1.js";
import "./QList.61ca316e.js";
import "./QUploader.a8c1e909.js";
import "./QCircularProgress.397749d5.js";
import "./ClosePopup.cc59a3cd.js";
import "./index.esm.0d097804.js";
import "./use-quasar.205c4480.js";
import "./axios.032818f2.js";
import "./NoRecords.ca39c176.js";
import "./debug.ffa51329.js";
import "./help.71fbc798.js";
import "./DateField.e1ec22cc.js";
import "./QDate.fed6773a.js";
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
