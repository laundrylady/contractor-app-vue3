import { _ as _sfc_main$1 } from "./GlobalAttachments.65bd2231.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.109aab81.js";
import "./QToolbarTitle.646933ef.js";
import "./QToolbar.7de40ad8.js";
import "./QSelect.2ac7a0e8.js";
import "./QItemSection.3d6683d4.js";
import "./QItemLabel.6de4410d.js";
import "./QMenu.48463e4e.js";
import "./selection.678cafa9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.5e8ca507.js";
import "./QList.69f15000.js";
import "./QUploader.736a3ad0.js";
import "./QCircularProgress.ca11d551.js";
import "./ClosePopup.9895b2d3.js";
import "./index.esm.f9a79807.js";
import "./use-quasar.861d00bf.js";
import "./axios.122a6dc1.js";
import "./NoRecords.970ab07f.js";
import "./debug.b9d7424b.js";
import "./help.083b28ce.js";
import "./DateField.aa9520fa.js";
import "./QDate.0fb6df98.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.300e49f9.js";
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
