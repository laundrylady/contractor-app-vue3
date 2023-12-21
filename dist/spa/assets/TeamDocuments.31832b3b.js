import { _ as _sfc_main$1 } from "./GlobalAttachments.f6f9608b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.7fc66124.js";
import "./QToolbarTitle.ccf605dc.js";
import "./QSelect.cde7d355.js";
import "./QItemSection.79f08f79.js";
import "./QItemLabel.101b2284.js";
import "./QMenu.10dcc93b.js";
import "./selection.de0f0585.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.d1aec52d.js";
import "./QList.563f6fab.js";
import "./QUploader.a90b7715.js";
import "./QCircularProgress.06155213.js";
import "./ClosePopup.1380d520.js";
import "./index.esm.dfdab691.js";
import "./use-quasar.b846ecd1.js";
import "./axios.a0405d7e.js";
import "./NoRecords.1945af8c.js";
import "./debug.972d445d.js";
import "./help.3bfda089.js";
import "./DateField.c00d5ff6.js";
import "./QDate.f35a434d.js";
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
