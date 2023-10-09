import { _ as _sfc_main$1 } from "./GlobalAttachments.fd1639b6.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.ce4c1a7a.js";
import "./QToolbarTitle.69f46c73.js";
import "./QSelect.34b2bc9a.js";
import "./selection.65eebc9b.js";
import "./QItemLabel.ee47553a.js";
import "./QMenu.9894afac.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.c473be34.js";
import "./QList.05512999.js";
import "./QUploader.63310ad7.js";
import "./QCircularProgress.b3f89be9.js";
import "./ClosePopup.c33d2dae.js";
import "./index.esm.20373706.js";
import "./use-quasar.0e58704c.js";
import "./axios.b7066d7d.js";
import "./NoRecords.518a1160.js";
import "./debug.ffa51329.js";
import "./help.78e61210.js";
import "./DateField.edda588e.js";
import "./QDate.43a36fe2.js";
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
