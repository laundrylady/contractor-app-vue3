import { _ as _sfc_main$1 } from "./GlobalAttachments.de7cef67.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.7ec40092.js";
import "./QToolbarTitle.0c100471.js";
import "./QSelect.d358a99f.js";
import "./selection.429c29a9.js";
import "./QItemLabel.27b25cc2.js";
import "./QMenu.6bf17566.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.85f4fea2.js";
import "./QList.e7d813ce.js";
import "./QUploader.e19bebf2.js";
import "./QCircularProgress.c54af80d.js";
import "./ClosePopup.8db8cfae.js";
import "./index.esm.cff634d2.js";
import "./use-quasar.279e4c9f.js";
import "./axios.78c8cc16.js";
import "./NoRecords.225557d1.js";
import "./debug.972d445d.js";
import "./help.c1e38cd4.js";
import "./DateField.6c4fe7ab.js";
import "./QDate.21f56228.js";
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
