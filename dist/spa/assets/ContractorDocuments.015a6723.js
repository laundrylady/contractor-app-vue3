import { _ as _sfc_main$1 } from "./GlobalAttachments.3575eeb5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.6a0e49ef.js";
import "./QToolbarTitle.c0b2720a.js";
import "./QSelect.670b73c2.js";
import "./QItemSection.322b798b.js";
import "./QItemLabel.c30e8810.js";
import "./QMenu.4cdb6815.js";
import "./selection.81608666.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.ecd2d67b.js";
import "./QList.6c3ab040.js";
import "./QUploader.399c7b12.js";
import "./QCircularProgress.f9892a28.js";
import "./ClosePopup.73b430d0.js";
import "./index.esm.89ee3987.js";
import "./use-quasar.da93b46c.js";
import "./axios.fb5a1a1c.js";
import "./NoRecords.407eeaf9.js";
import "./debug.972d445d.js";
import "./help.01f01c96.js";
import "./DateField.5061536f.js";
import "./QDate.48ebc438.js";
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
