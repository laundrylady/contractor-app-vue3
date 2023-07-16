import { _ as _sfc_main$1 } from "./GlobalAttachments.def70230.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.87bd49b7.js";
import "./QToolbarTitle.9848f8e8.js";
import "./QSelect.90e0e815.js";
import "./QItemSection.0c4c4823.js";
import "./format.c2ffa80c.js";
import "./QBtnGroup.cbc0d38e.js";
import "./QList.f266a7fa.js";
import "./QUploader.c795ecd7.js";
import "./QCircularProgress.f3ccc8db.js";
import "./ClosePopup.62118ff4.js";
import "./index.esm.0bc76624.js";
import "./use-quasar.a8a6e25c.js";
import "./axios.dbd6bbec.js";
import "./NoRecords.f2972983.js";
import "./debug.805a8aef.js";
import "./help.741e177a.js";
import "./DateField.916a1ec9.js";
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
