import { _ as _sfc_main$1 } from "./GlobalAttachments.9b5dd766.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.a0f14cf2.js";
import "./QToolbarTitle.dd75c1e0.js";
import "./QSelect.5c6dab7a.js";
import "./selection.05584ff3.js";
import "./QItemLabel.8546f47f.js";
import "./QMenu.2624ccd8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.40f2b13a.js";
import "./QList.a3f7dd15.js";
import "./QUploader.461d3297.js";
import "./QCircularProgress.b8888110.js";
import "./ClosePopup.5613aebb.js";
import "./index.esm.93fced37.js";
import "./use-quasar.01ad6789.js";
import "./axios.5b326e61.js";
import "./NoRecords.f537f059.js";
import "./debug.972d445d.js";
import "./help.66c7b725.js";
import "./DateField.b44dd687.js";
import "./QDate.8bbbe0d1.js";
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
