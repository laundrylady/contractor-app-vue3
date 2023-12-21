import { _ as _sfc_main$1 } from "./GlobalAttachments.937e4bc4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.181f8828.js";
import "./QToolbarTitle.1f9ff1c9.js";
import "./QSelect.b255285f.js";
import "./QItemSection.fcf3298c.js";
import "./QItemLabel.baa0b052.js";
import "./QMenu.a3cce960.js";
import "./selection.0eb64ddd.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.7d5018f5.js";
import "./QList.e90f9510.js";
import "./QUploader.09d1eedc.js";
import "./QCircularProgress.7d4502f0.js";
import "./ClosePopup.5ca37cd6.js";
import "./index.esm.9570ed6d.js";
import "./use-quasar.24fd19fd.js";
import "./axios.b1a36989.js";
import "./NoRecords.a41d14cf.js";
import "./debug.972d445d.js";
import "./help.e19066e7.js";
import "./DateField.a58045e6.js";
import "./QDate.d4c13879.js";
import "./use-cache.b0833c75.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "These documents are only visible to staff.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamDocuments",
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
          attachable_type: "Team"
        }, null, 8, ["attachable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
