import { _ as _sfc_main$1 } from "./GlobalAttachments.432480bc.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.394bfd7c.js";
import "./QToolbarTitle.522c981b.js";
import "./QSelect.2f2ce9ca.js";
import "./QItemSection.e1742e90.js";
import "./QItemLabel.0c87707d.js";
import "./QMenu.acd74320.js";
import "./selection.254d4326.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.c2bfb400.js";
import "./QList.da0c6472.js";
import "./QUploader.bed8eec2.js";
import "./QCircularProgress.592f38ef.js";
import "./ClosePopup.9c646139.js";
import "./index.esm.17b9384a.js";
import "./use-quasar.b1b58206.js";
import "./axios.d6c1f878.js";
import "./NoRecords.08e3596f.js";
import "./debug.972d445d.js";
import "./help.d243c99c.js";
import "./DateField.af7bbc9e.js";
import "./QDate.ae2f0878.js";
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
