import { _ as _sfc_main$1 } from "./GlobalAttachments.fa6379c5.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.75c589dc.js";
import "./QToolbarTitle.c1f6a73b.js";
import "./QSelect.279ab0ff.js";
import "./selection.7cbdbbe5.js";
import "./QItemLabel.a15b7d1a.js";
import "./QMenu.faa99aa9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.3e0f1ccd.js";
import "./QList.64ccde9f.js";
import "./QUploader.2388ddbd.js";
import "./QCircularProgress.34ef43de.js";
import "./ClosePopup.486c41e5.js";
import "./index.esm.543d1520.js";
import "./use-quasar.e76cf75e.js";
import "./axios.a7e15516.js";
import "./NoRecords.0fb7126d.js";
import "./debug.ffa51329.js";
import "./help.2d75e567.js";
import "./DateField.5f0f8cb6.js";
import "./QDate.0b193be4.js";
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
