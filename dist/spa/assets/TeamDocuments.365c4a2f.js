import { _ as _sfc_main$1 } from "./GlobalAttachments.b0e925d5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.5e60e5dd.js";
import "./QToolbarTitle.840b6c60.js";
import "./QSelect.a20fa568.js";
import "./selection.a8b7d02c.js";
import "./QItemLabel.1dd33933.js";
import "./QMenu.66896edd.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.193b6cb7.js";
import "./QList.a558d9b9.js";
import "./QUploader.81484a79.js";
import "./QCircularProgress.7f5e286f.js";
import "./ClosePopup.b310f37c.js";
import "./index.esm.1a62173c.js";
import "./use-quasar.b058c0b7.js";
import "./axios.b8edb2e7.js";
import "./NoRecords.d8e553c2.js";
import "./debug.972d445d.js";
import "./help.1e820813.js";
import "./DateField.fbc2228c.js";
import "./QDate.b56ee7d8.js";
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
