import { _ as _sfc_main$1 } from "./GlobalAttachments.66dab543.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.6498e03d.js";
import "./QToolbarTitle.24119c49.js";
import "./QSelect.11fef49d.js";
import "./QItemSection.1b5f9806.js";
import "./QItemLabel.10e2d0bc.js";
import "./QMenu.04a25c97.js";
import "./selection.11611972.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.7e7d37eb.js";
import "./QList.62defb36.js";
import "./QUploader.fa4ed24e.js";
import "./QCircularProgress.26c412cb.js";
import "./ClosePopup.d235365b.js";
import "./index.esm.814901f1.js";
import "./use-quasar.f64f11aa.js";
import "./axios.4a95d170.js";
import "./NoRecords.5b6609ad.js";
import "./debug.972d445d.js";
import "./help.49a72cd2.js";
import "./DateField.838685f9.js";
import "./QDate.d1f2727d.js";
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
