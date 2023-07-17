import { _ as _sfc_main$1 } from "./GlobalAttachments.fcbb3f72.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.ff28a0be.js";
import "./QToolbarTitle.3b6300e1.js";
import "./QSelect.d9c1a7f5.js";
import "./QItemSection.46a22740.js";
import "./format.0f02b137.js";
import "./QBtnGroup.aa699d3a.js";
import "./QList.fea27c01.js";
import "./QUploader.7a6f3bfb.js";
import "./QCircularProgress.c7f39243.js";
import "./ClosePopup.bda7fd1c.js";
import "./index.esm.0d049a57.js";
import "./use-quasar.69508f93.js";
import "./axios.31973f2c.js";
import "./NoRecords.cc53a07c.js";
import "./debug.805a8aef.js";
import "./help.805c841c.js";
import "./DateField.5b79222d.js";
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
