import { _ as _sfc_main$1 } from "./GlobalAttachments.4b1b4c84.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.92f7e7d0.js";
import "./QToolbarTitle.ed4a7885.js";
import "./QSelect.40dc1487.js";
import "./QItemSection.8b01430a.js";
import "./QItemLabel.44f2712e.js";
import "./QMenu.644c291b.js";
import "./selection.fe2e2af2.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.bc6883c2.js";
import "./QList.1a5fa9eb.js";
import "./QUploader.0d143461.js";
import "./QCircularProgress.8c652971.js";
import "./ClosePopup.369888b4.js";
import "./index.esm.956bc6db.js";
import "./use-quasar.c73abb48.js";
import "./axios.5373cd8f.js";
import "./NoRecords.3fd2c43c.js";
import "./debug.972d445d.js";
import "./help.b2dd441c.js";
import "./DateField.af629d87.js";
import "./QDate.8a047308.js";
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
