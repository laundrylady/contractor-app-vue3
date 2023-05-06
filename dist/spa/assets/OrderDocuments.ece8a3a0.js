import { _ as _sfc_main$1 } from "./GlobalAttachments.c6062ecc.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.15e87dfc.js";
import "./QToolbarTitle.bf5b926c.js";
import "./QSelect.4af781f0.js";
import "./QItemSection.a02f1455.js";
import "./rtl.4502dde4.js";
import "./format.5b671469.js";
import "./QBtnGroup.9afd770a.js";
import "./QList.f8adc042.js";
import "./QUploader.145c54dc.js";
import "./QCircularProgress.baf961ef.js";
import "./ClosePopup.c72967ec.js";
import "./index.esm.32910043.js";
import "./use-quasar.6fa26e8b.js";
import "./axios.c48e86d7.js";
import "./NoRecords.a0144e62.js";
import "./debug.805a8aef.js";
import "./help.16f9d5c4.js";
import "./DateField.0f74b395.js";
import "./use-cache.b0833c75.js";
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
