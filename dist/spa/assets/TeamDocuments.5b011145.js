import { _ as _sfc_main$1 } from "./GlobalAttachments.77337478.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, b8 as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.e647c85a.js";
import "./QToolbarTitle.1a75cd00.js";
import "./QSelect.853d535e.js";
import "./QItemSection.99659658.js";
import "./rtl.4f5e13e8.js";
import "./format.8e90d58d.js";
import "./QBtnGroup.ea19e2fc.js";
import "./QList.2f0afc60.js";
import "./QUploader.b0316df6.js";
import "./QCircularProgress.85dfe2db.js";
import "./ClosePopup.ef2f7039.js";
import "./index.esm.4557c89b.js";
import "./use-quasar.ae4f72e4.js";
import "./axios.ccd3a804.js";
import "./NoRecords.4fdd5d80.js";
import "./debug.805a8aef.js";
import "./help.c0f85e41.js";
import "./DateField.75075dac.js";
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
