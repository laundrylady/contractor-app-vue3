import { _ as _sfc_main$1 } from "./GlobalAttachments.9d7bebb4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e4348715.js";
import "./QToolbarTitle.661dd748.js";
import "./QSelect.0457cf29.js";
import "./QItemSection.71de5245.js";
import "./QItemLabel.adad20e3.js";
import "./QMenu.ae36f817.js";
import "./selection.97a9cfee.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.1c7629a7.js";
import "./QList.69ea1d7e.js";
import "./QUploader.8cd20579.js";
import "./QCircularProgress.31d7399f.js";
import "./ClosePopup.a2540220.js";
import "./index.esm.2a7131d3.js";
import "./use-quasar.2dc698a1.js";
import "./axios.5f357301.js";
import "./NoRecords.592071cc.js";
import "./debug.972d445d.js";
import "./help.4ff0f899.js";
import "./DateField.227cc3d2.js";
import "./QDate.642fa1d4.js";
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
