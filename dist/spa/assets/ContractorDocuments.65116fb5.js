import { _ as _sfc_main$1 } from "./GlobalAttachments.763288f3.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.9390f7b3.js";
import "./QToolbarTitle.ce3ddf23.js";
import "./QSelect.93bc558d.js";
import "./selection.1e6bc5e4.js";
import "./QItemLabel.95c4e0d1.js";
import "./QMenu.86334f4c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.aa00710c.js";
import "./QList.03085d19.js";
import "./QUploader.3e863f22.js";
import "./QCircularProgress.fb28d692.js";
import "./ClosePopup.b355fd5e.js";
import "./index.esm.0a9d690b.js";
import "./use-quasar.9757c908.js";
import "./axios.2d46391f.js";
import "./NoRecords.8ef1aa6a.js";
import "./debug.972d445d.js";
import "./help.06786d1d.js";
import "./DateField.581202c4.js";
import "./QDate.3ffec4eb.js";
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
