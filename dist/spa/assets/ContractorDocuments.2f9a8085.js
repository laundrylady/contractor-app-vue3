import { _ as _sfc_main$1 } from "./GlobalAttachments.5841e593.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.068b7692.js";
import "./QToolbarTitle.5e6471c4.js";
import "./QSelect.532cd017.js";
import "./selection.58fb95b8.js";
import "./QItemLabel.4e1f7acb.js";
import "./QMenu.1bfae911.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.2d13dc3b.js";
import "./QList.2a004978.js";
import "./QUploader.e28b682b.js";
import "./QCircularProgress.13d41753.js";
import "./ClosePopup.e144b2e6.js";
import "./index.esm.77874d07.js";
import "./use-quasar.07eb0223.js";
import "./axios.d4b36dc3.js";
import "./NoRecords.a01f84b3.js";
import "./debug.ffa51329.js";
import "./help.cbf54abd.js";
import "./DateField.75448783.js";
import "./QDate.d26fe9e9.js";
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
