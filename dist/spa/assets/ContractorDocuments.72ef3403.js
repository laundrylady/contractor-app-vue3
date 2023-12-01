import { _ as _sfc_main$1 } from "./GlobalAttachments.79f069ea.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.66cb46b4.js";
import "./QToolbarTitle.644ad63d.js";
import "./QSelect.bd3b2072.js";
import "./QItemSection.4666e141.js";
import "./QItemLabel.659b4eae.js";
import "./QMenu.f6771bea.js";
import "./selection.b5ba250c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.24bae78e.js";
import "./QList.dfe2e5d5.js";
import "./QUploader.80efa172.js";
import "./QCircularProgress.6e473ac0.js";
import "./ClosePopup.e9e16ef5.js";
import "./index.esm.e7818a8c.js";
import "./use-quasar.de3b1d40.js";
import "./axios.c63cbaf5.js";
import "./NoRecords.cfc6e7e2.js";
import "./debug.972d445d.js";
import "./help.84b14189.js";
import "./DateField.4319d83a.js";
import "./QDate.e64f1d36.js";
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
