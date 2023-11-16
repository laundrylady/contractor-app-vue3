import { _ as _sfc_main$1 } from "./GlobalAttachments.6c99f436.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.d6d4bbef.js";
import "./QToolbarTitle.eaa31581.js";
import "./QSelect.d0580ce8.js";
import "./selection.db1a4dd6.js";
import "./QItemLabel.45c17f29.js";
import "./QMenu.f8214587.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.ff290b2c.js";
import "./QList.b214f7f0.js";
import "./QUploader.c17bdfab.js";
import "./QCircularProgress.8ca9e3b1.js";
import "./ClosePopup.c66f1348.js";
import "./index.esm.85b7d3eb.js";
import "./use-quasar.885e79c5.js";
import "./axios.d2a2ec81.js";
import "./NoRecords.bef86226.js";
import "./debug.972d445d.js";
import "./help.895f4276.js";
import "./DateField.b97b45b8.js";
import "./QDate.a072b5de.js";
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
