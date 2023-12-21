import { _ as _sfc_main$1 } from "./GlobalAttachments.d78d9f51.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.065526b9.js";
import "./QToolbarTitle.e76fc48d.js";
import "./QSelect.d6112398.js";
import "./QItemSection.70ec888e.js";
import "./QItemLabel.3b01a382.js";
import "./QMenu.b8e60c99.js";
import "./selection.e415c2a1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.bdf3158f.js";
import "./QList.3633b990.js";
import "./QUploader.799498a9.js";
import "./QCircularProgress.d9e2b659.js";
import "./ClosePopup.e970c8c3.js";
import "./index.esm.6652a56b.js";
import "./use-quasar.a5fcab3d.js";
import "./axios.42b3c5e0.js";
import "./NoRecords.8a289e32.js";
import "./debug.972d445d.js";
import "./help.6b5e7073.js";
import "./DateField.8da77713.js";
import "./QDate.352862f5.js";
import "./use-cache.b0833c75.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "These documents are only visible to staff.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamDocuments",
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
          attachable_type: "Team"
        }, null, 8, ["attachable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
