import { _ as _sfc_main$1 } from "./GlobalAttachments.08585399.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.8de11d6d.js";
import "./QToolbarTitle.b68398fb.js";
import "./QSelect.4e73c653.js";
import "./selection.75389d92.js";
import "./QItemLabel.9fda1830.js";
import "./QMenu.4d0a913d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.4125de86.js";
import "./QList.a9d4468b.js";
import "./QUploader.85fc5323.js";
import "./QCircularProgress.086ac625.js";
import "./ClosePopup.7febde52.js";
import "./index.esm.50e9b92a.js";
import "./use-quasar.0e41d3c7.js";
import "./axios.c31e8ac7.js";
import "./NoRecords.287c8e59.js";
import "./debug.ffa51329.js";
import "./help.e41a7357.js";
import "./DateField.81349a73.js";
import "./QDate.53081fd8.js";
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
