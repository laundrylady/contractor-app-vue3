import { _ as _sfc_main$1 } from "./GlobalAttachments.60d7a155.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.2706d944.js";
import "./QToolbarTitle.57c47571.js";
import "./QSelect.85750e6d.js";
import "./QItemSection.27d6c59c.js";
import "./rtl.cffc13f7.js";
import "./format.cebc1930.js";
import "./QBtnGroup.33cbe825.js";
import "./QList.5b3facef.js";
import "./QUploader.dc9f8795.js";
import "./QCircularProgress.a95c63fd.js";
import "./ClosePopup.331a5eb4.js";
import "./index.esm.c3ccf534.js";
import "./use-quasar.4f7e3ed2.js";
import "./axios.8e14cdcb.js";
import "./NoRecords.c5bf4f53.js";
import "./debug.805a8aef.js";
import "./help.04414549.js";
import "./DateField.887276a0.js";
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
