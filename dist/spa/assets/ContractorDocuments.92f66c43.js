import { _ as _sfc_main$1 } from "./GlobalAttachments.b0fba29e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.a39d6510.js";
import "./QToolbarTitle.36d342fd.js";
import "./QSelect.c7ca6057.js";
import "./selection.3a148310.js";
import "./QItemLabel.4f07039d.js";
import "./QMenu.ab547715.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.48e72c55.js";
import "./QList.ca805a71.js";
import "./QUploader.73c6eb9f.js";
import "./QCircularProgress.58d4c6fb.js";
import "./ClosePopup.0cbd1328.js";
import "./index.esm.907df211.js";
import "./use-quasar.0ca9ca43.js";
import "./axios.d8634373.js";
import "./NoRecords.95e65ab6.js";
import "./debug.972d445d.js";
import "./help.9a327069.js";
import "./DateField.7d694676.js";
import "./QDate.3e4cbd7d.js";
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
