import { _ as _sfc_main$1 } from "./GlobalAttachments.a516ea4c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.250db7cb.js";
import "./QToolbarTitle.cf0373bc.js";
import "./QSelect.704d2300.js";
import "./selection.e239b0e2.js";
import "./QItemLabel.8ca90bfa.js";
import "./QMenu.af746c65.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.056abb9c.js";
import "./QList.f7c16196.js";
import "./QUploader.6b1e6da1.js";
import "./QCircularProgress.fe674064.js";
import "./ClosePopup.19ed6c5e.js";
import "./index.esm.7a7c07fb.js";
import "./use-quasar.cffe37e8.js";
import "./axios.ffd1dad3.js";
import "./NoRecords.0bd46fd3.js";
import "./debug.972d445d.js";
import "./help.9c7320a1.js";
import "./DateField.c30e7d43.js";
import "./QDate.66bbc5e6.js";
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
