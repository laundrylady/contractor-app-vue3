import { _ as _sfc_main$1 } from "./GlobalAttachments.8c695366.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f6bee7e8.js";
import "./QToolbarTitle.3b0ce1ec.js";
import "./QSelect.ae6eabb7.js";
import "./selection.17eb1196.js";
import "./QItemLabel.58d25c90.js";
import "./QMenu.99b4f319.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.65b439d0.js";
import "./QList.56bbd19d.js";
import "./QUploader.a03b5f8f.js";
import "./QCircularProgress.530035cc.js";
import "./ClosePopup.7f950f63.js";
import "./index.esm.8b098f24.js";
import "./use-quasar.4ecd6f8a.js";
import "./axios.7f29f827.js";
import "./NoRecords.1d897e49.js";
import "./debug.972d445d.js";
import "./help.1753c5fa.js";
import "./DateField.a4836236.js";
import "./QDate.286a8c09.js";
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
