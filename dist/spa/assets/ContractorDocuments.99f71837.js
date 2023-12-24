import { _ as _sfc_main$1 } from "./GlobalAttachments.c794e09d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.603eb027.js";
import "./QToolbarTitle.749fc8f2.js";
import "./QSelect.9906ea99.js";
import "./QItemSection.99553ed2.js";
import "./QItemLabel.5abed41a.js";
import "./QMenu.15535491.js";
import "./selection.67008780.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.94e58540.js";
import "./QList.efd19b74.js";
import "./QUploader.e9884581.js";
import "./QCircularProgress.78162e40.js";
import "./ClosePopup.6ecc7a6f.js";
import "./index.esm.b0d81f26.js";
import "./use-quasar.29236ad5.js";
import "./axios.fc054a7a.js";
import "./NoRecords.75664adf.js";
import "./debug.972d445d.js";
import "./help.42cbd537.js";
import "./DateField.4d71ecd5.js";
import "./QDate.bd0c2937.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.c6df29f3.js";
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
