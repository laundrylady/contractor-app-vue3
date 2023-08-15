import { _ as _sfc_main$1 } from "./GlobalAttachments.977b86cf.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.16fb3380.js";
import "./QToolbarTitle.57910d3b.js";
import "./QSelect.7180a201.js";
import "./QItemSection.03ec3358.js";
import "./selection.84b02b1d.js";
import "./QMenu.02576b50.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.2a16000d.js";
import "./QList.ddee51a8.js";
import "./QUploader.24d96ba5.js";
import "./QCircularProgress.011f4e48.js";
import "./ClosePopup.b51813b3.js";
import "./index.esm.70c3c9b1.js";
import "./use-quasar.bd426c63.js";
import "./axios.fbeb5029.js";
import "./NoRecords.ec72df95.js";
import "./debug.ffa51329.js";
import "./help.b57562bf.js";
import "./DateField.f1c4f118.js";
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
