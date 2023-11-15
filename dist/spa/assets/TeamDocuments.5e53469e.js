import { _ as _sfc_main$1 } from "./GlobalAttachments.fe9b5570.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.925d5c0f.js";
import "./QToolbarTitle.852296af.js";
import "./QSelect.5d779f8f.js";
import "./selection.3970f4d4.js";
import "./QItemLabel.d5609942.js";
import "./QMenu.e39a224d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.8a55d124.js";
import "./QList.942a0499.js";
import "./QUploader.97d8ab29.js";
import "./QCircularProgress.46adfdfb.js";
import "./ClosePopup.183ee017.js";
import "./index.esm.59f2ca18.js";
import "./use-quasar.3171237e.js";
import "./axios.a5d1de6e.js";
import "./NoRecords.c13f533a.js";
import "./debug.972d445d.js";
import "./help.17b21ee7.js";
import "./DateField.18f3e6ed.js";
import "./QDate.889c57c5.js";
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
