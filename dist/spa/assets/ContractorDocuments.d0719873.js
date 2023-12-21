import { _ as _sfc_main$1 } from "./GlobalAttachments.114cca5a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.290e3c5e.js";
import "./QToolbarTitle.4d608538.js";
import "./QSelect.579d628c.js";
import "./QItemSection.4ce98ef3.js";
import "./QItemLabel.1207aab3.js";
import "./QMenu.393db709.js";
import "./selection.9e01fae7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.71d12937.js";
import "./QList.cd9d8591.js";
import "./QUploader.68c0bd65.js";
import "./QCircularProgress.a0b45774.js";
import "./ClosePopup.309cc0b9.js";
import "./index.esm.d7b65dda.js";
import "./use-quasar.835853ff.js";
import "./axios.d208aa5d.js";
import "./NoRecords.8a772248.js";
import "./debug.972d445d.js";
import "./help.7b0dfe1f.js";
import "./DateField.9b78a316.js";
import "./QDate.d186cf76.js";
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
