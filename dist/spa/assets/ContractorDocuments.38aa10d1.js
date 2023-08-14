import { _ as _sfc_main$1 } from "./GlobalAttachments.abd0cb39.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.ef1b2cb4.js";
import "./QToolbarTitle.26478d01.js";
import "./QSelect.2ec92ecf.js";
import "./QItemSection.71b58638.js";
import "./selection.bb98bc68.js";
import "./QMenu.9b70bf89.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.cbf8ef44.js";
import "./QList.4bb90025.js";
import "./QUploader.96ecb531.js";
import "./QCircularProgress.d9e04cfa.js";
import "./ClosePopup.0453095b.js";
import "./index.esm.af518789.js";
import "./use-quasar.79f1a1a0.js";
import "./axios.b301f987.js";
import "./NoRecords.06e401c5.js";
import "./debug.ffa51329.js";
import "./help.470b0717.js";
import "./DateField.aae0861f.js";
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
