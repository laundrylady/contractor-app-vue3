import { _ as _sfc_main$1 } from "./GlobalAttachments.2be2cf61.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.b320c8ca.js";
import "./QToolbarTitle.4392daa0.js";
import "./QSelect.a53b0a68.js";
import "./QItemSection.370f32fe.js";
import "./rtl.20f006a8.js";
import "./format.8239da63.js";
import "./QBtnGroup.2ed8c5f4.js";
import "./QList.b5b9109a.js";
import "./QUploader.ff9abe5e.js";
import "./QCircularProgress.9f08a0e0.js";
import "./ClosePopup.97d3c14c.js";
import "./index.esm.51560a50.js";
import "./use-quasar.d5633278.js";
import "./axios.fb60ded3.js";
import "./NoRecords.38079b4d.js";
import "./debug.805a8aef.js";
import "./help.1102714b.js";
import "./DateField.3b27a9d4.js";
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
