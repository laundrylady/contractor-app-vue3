import { _ as _sfc_main$1 } from "./GlobalAttachments.ccfffdc2.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.fc5b7253.js";
import "./QToolbarTitle.6482c6d1.js";
import "./QSelect.6ace0b26.js";
import "./selection.5c80716e.js";
import "./QItemLabel.a0d0e7dd.js";
import "./QMenu.e4d44051.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.a33999e1.js";
import "./QList.0970dba8.js";
import "./QUploader.b18160a4.js";
import "./QCircularProgress.9d61b319.js";
import "./ClosePopup.c982e528.js";
import "./index.esm.89640d63.js";
import "./use-quasar.961b645b.js";
import "./axios.1c53bd8d.js";
import "./NoRecords.1b4bfea3.js";
import "./debug.972d445d.js";
import "./help.4fde57f5.js";
import "./DateField.fe073d8c.js";
import "./QDate.b11fa92c.js";
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
