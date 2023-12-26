import { _ as _sfc_main$1 } from "./GlobalAttachments.7e6a3edc.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.15617fb1.js";
import "./QToolbarTitle.6cfd9ff1.js";
import "./QToolbar.a604c11b.js";
import "./QSelect.845f27da.js";
import "./QItemSection.07f2a647.js";
import "./QItemLabel.e42ef0a6.js";
import "./QMenu.da80f610.js";
import "./selection.87a5c733.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.f7c6fa43.js";
import "./QList.88526380.js";
import "./QUploader.9c695181.js";
import "./QCircularProgress.9b2cd6a5.js";
import "./ClosePopup.a09d7ffb.js";
import "./index.esm.7f0258f5.js";
import "./use-quasar.f6c8e747.js";
import "./axios.2945dda0.js";
import "./NoRecords.c921b49a.js";
import "./debug.b9d7424b.js";
import "./help.4d9a3595.js";
import "./DateField.c3a448bd.js";
import "./QDate.e3823407.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.3666d1e0.js";
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
