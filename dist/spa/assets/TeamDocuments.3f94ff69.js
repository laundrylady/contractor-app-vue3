import { _ as _sfc_main$1 } from "./GlobalAttachments.69844462.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.0a9ea33a.js";
import "./QToolbarTitle.bad7d3b8.js";
import "./QSelect.60ccb65b.js";
import "./QItemSection.1b23b510.js";
import "./selection.963fd4f5.js";
import "./QMenu.704ea9b1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.4179c050.js";
import "./QList.125653f0.js";
import "./QUploader.461e4d9c.js";
import "./QCircularProgress.d2f1fe7d.js";
import "./ClosePopup.80d7fe1a.js";
import "./index.esm.c00db31c.js";
import "./use-quasar.8cbfbeee.js";
import "./axios.2d1b6d62.js";
import "./NoRecords.7b87f70b.js";
import "./debug.ffa51329.js";
import "./help.ce523e76.js";
import "./DateField.2386e018.js";
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
