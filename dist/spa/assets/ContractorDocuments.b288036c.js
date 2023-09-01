import { _ as _sfc_main$1 } from "./GlobalAttachments.56724f31.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.c8d47ef5.js";
import "./QToolbarTitle.36ce7bcd.js";
import "./QSelect.99f12939.js";
import "./QItemSection.fc8141cf.js";
import "./selection.f35965d9.js";
import "./QMenu.c134495c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.91eab529.js";
import "./QList.1476326b.js";
import "./QUploader.eb3a3471.js";
import "./QCircularProgress.2ce2d2d2.js";
import "./ClosePopup.e6df9abe.js";
import "./index.esm.5888d050.js";
import "./use-quasar.d4925f06.js";
import "./axios.415142fa.js";
import "./NoRecords.0e86c1bb.js";
import "./debug.ffa51329.js";
import "./help.26cc6078.js";
import "./DateField.49389ec3.js";
import "./QDate.c8969388.js";
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
