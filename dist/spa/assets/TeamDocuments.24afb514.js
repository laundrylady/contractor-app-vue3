import { _ as _sfc_main$1 } from "./GlobalAttachments.5ca67df5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.2c1bc8d2.js";
import "./QToolbarTitle.070f8714.js";
import "./QSelect.8e4495e5.js";
import "./selection.a97a1f9b.js";
import "./QItemLabel.8c6bc0aa.js";
import "./QMenu.1a847d0c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.926e518f.js";
import "./QList.3fdf49c6.js";
import "./QUploader.a8a9aae6.js";
import "./QCircularProgress.8c130d8e.js";
import "./ClosePopup.2af09889.js";
import "./index.esm.98990db6.js";
import "./use-quasar.3994b757.js";
import "./axios.d4b7da8a.js";
import "./NoRecords.55e336ae.js";
import "./debug.972d445d.js";
import "./help.03a1471a.js";
import "./DateField.f36c8a6e.js";
import "./QDate.251135e2.js";
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
