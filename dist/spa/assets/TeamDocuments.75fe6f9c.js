import { _ as _sfc_main$1 } from "./GlobalAttachments.797144d7.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f6cde04a.js";
import "./QToolbarTitle.1b078807.js";
import "./QSelect.d58e450e.js";
import "./QItemSection.05fdd866.js";
import "./QItemLabel.3e84cad0.js";
import "./QMenu.795675ce.js";
import "./selection.4af54f96.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.b31eebf2.js";
import "./QList.02b87db7.js";
import "./QUploader.e77d908a.js";
import "./QCircularProgress.472ef66e.js";
import "./ClosePopup.2e88bc7e.js";
import "./index.esm.3c0505bb.js";
import "./use-quasar.be55761c.js";
import "./axios.1aa63f19.js";
import "./NoRecords.8a04c4ae.js";
import "./debug.972d445d.js";
import "./help.21bcf6c2.js";
import "./DateField.48c3c267.js";
import "./QDate.5e2d0a96.js";
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
