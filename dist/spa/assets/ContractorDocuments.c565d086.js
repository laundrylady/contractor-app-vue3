import { _ as _sfc_main$1 } from "./GlobalAttachments.dfb9542c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.8edaef54.js";
import "./QToolbarTitle.a1034564.js";
import "./QSelect.7e195314.js";
import "./QItemSection.132f5471.js";
import "./QItemLabel.9fad2339.js";
import "./QMenu.04573aab.js";
import "./selection.42f680f5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.7769bd72.js";
import "./QList.1a9a08e4.js";
import "./QUploader.9092a752.js";
import "./QCircularProgress.472f9514.js";
import "./ClosePopup.d335d49a.js";
import "./index.esm.b7bf736a.js";
import "./use-quasar.d085bfd1.js";
import "./axios.5ff0c671.js";
import "./NoRecords.8dd6eb8e.js";
import "./debug.972d445d.js";
import "./help.7e84324c.js";
import "./DateField.f43db97f.js";
import "./QDate.5541bd0e.js";
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
