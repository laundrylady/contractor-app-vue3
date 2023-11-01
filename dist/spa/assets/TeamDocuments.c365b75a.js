import { _ as _sfc_main$1 } from "./GlobalAttachments.30437d9f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.cda05827.js";
import "./QToolbarTitle.24a203e0.js";
import "./QSelect.631ed9c6.js";
import "./selection.46c3c491.js";
import "./QItemLabel.e4fe2727.js";
import "./QMenu.9f6a2852.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.1949966e.js";
import "./QList.c533943e.js";
import "./QUploader.e153cd4e.js";
import "./QCircularProgress.8ee06696.js";
import "./ClosePopup.1f078819.js";
import "./index.esm.be9b8dc2.js";
import "./use-quasar.9831da64.js";
import "./axios.c09d4593.js";
import "./NoRecords.338f189d.js";
import "./debug.972d445d.js";
import "./help.d4dd930e.js";
import "./DateField.ece8412f.js";
import "./QDate.03293027.js";
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
