import { _ as _sfc_main$1 } from "./GlobalAttachments.63ebfc3f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.397bbb4f.js";
import "./QToolbarTitle.6d529e08.js";
import "./QSelect.1f2f5325.js";
import "./QItemSection.cad3aa81.js";
import "./QItemLabel.06bf30d0.js";
import "./QMenu.7d3b2215.js";
import "./selection.fcec5241.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.4848d743.js";
import "./QList.b8d58b8d.js";
import "./QUploader.5081dbcd.js";
import "./QCircularProgress.f13a0962.js";
import "./ClosePopup.5b718ea6.js";
import "./index.esm.71ceea82.js";
import "./use-quasar.d857f1d3.js";
import "./axios.e5bf32bb.js";
import "./NoRecords.bf9794b2.js";
import "./debug.972d445d.js";
import "./help.a38f3a12.js";
import "./DateField.d710b431.js";
import "./QDate.6b40f6e9.js";
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
