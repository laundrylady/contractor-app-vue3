import { _ as _sfc_main$1 } from "./GlobalAttachments.3329d440.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.686b673d.js";
import "./QToolbarTitle.80770597.js";
import "./QSelect.8e055004.js";
import "./QItemSection.b28f66fd.js";
import "./QItemLabel.0f1a7d32.js";
import "./QMenu.2860289c.js";
import "./selection.4d4b9158.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.e00b7a02.js";
import "./QList.caef0d9e.js";
import "./QUploader.652247f4.js";
import "./QCircularProgress.ded101c0.js";
import "./ClosePopup.7423f14c.js";
import "./index.esm.08716f7f.js";
import "./use-quasar.48bccb22.js";
import "./axios.fca9b24c.js";
import "./NoRecords.cf78ce10.js";
import "./debug.972d445d.js";
import "./help.2365647d.js";
import "./DateField.b83a1770.js";
import "./QDate.d7983d0f.js";
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
