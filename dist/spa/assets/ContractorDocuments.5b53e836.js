import { _ as _sfc_main$1 } from "./GlobalAttachments.644fff0a.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.3359169e.js";
import "./QToolbarTitle.46f1b163.js";
import "./QSelect.10878a08.js";
import "./QItemSection.73389b03.js";
import "./rtl.47c54deb.js";
import "./format.91cb2860.js";
import "./QBtnGroup.49dad4cf.js";
import "./QList.95271f43.js";
import "./QUploader.4b1b5b5e.js";
import "./QCircularProgress.30ae0c17.js";
import "./ClosePopup.678cb922.js";
import "./index.esm.d194a008.js";
import "./use-quasar.a76bcee3.js";
import "./axios.cc17e3e5.js";
import "./NoRecords.0221b6d5.js";
import "./debug.805a8aef.js";
import "./help.5154fe45.js";
import "./DateField.d02947bd.js";
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
