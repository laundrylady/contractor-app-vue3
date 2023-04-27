import { _ as _sfc_main$1 } from "./GlobalAttachments.a74f05b3.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aF as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.f0b4ebe6.js";
import "./QToolbarTitle.2c494531.js";
import "./QSelect.4af0b214.js";
import "./QItemSection.9ea19b97.js";
import "./rtl.7f1de635.js";
import "./format.8242738c.js";
import "./QBtnGroup.4f7005d0.js";
import "./QList.4c7ed513.js";
import "./QUploader.3a28d7fb.js";
import "./QCircularProgress.e91ce288.js";
import "./ClosePopup.b9029680.js";
import "./index.esm.40bb50de.js";
import "./use-quasar.8b72d386.js";
import "./axios.d61905ae.js";
import "./NoRecords.e2375e94.js";
import "./debug.805a8aef.js";
import "./help.cd1e743b.js";
import "./DateField.8ada521a.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h6" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "These documents are only visible to staff.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderDocuments",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("order.name")) + " " + toDisplayString(_ctx.$t("document.namePlural")), 1),
        _hoisted_3,
        createVNode(_sfc_main$1, {
          attachable_id: __props.model.id,
          attachable_type: "Order"
        }, null, 8, ["attachable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
