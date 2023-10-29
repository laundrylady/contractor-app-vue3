import { _ as _sfc_main$1 } from "./GlobalAttachments.c17026a6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.fa2b967f.js";
import "./QToolbarTitle.74b355c8.js";
import "./QSelect.6207932e.js";
import "./selection.3328651a.js";
import "./QItemLabel.589b6673.js";
import "./QMenu.a931a59a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.66ee98ef.js";
import "./QList.468f0009.js";
import "./QUploader.cf5edc15.js";
import "./QCircularProgress.590e4737.js";
import "./ClosePopup.fc0abb68.js";
import "./index.esm.7a448bf8.js";
import "./use-quasar.8b6f305b.js";
import "./axios.814b97a2.js";
import "./NoRecords.a13a179d.js";
import "./debug.972d445d.js";
import "./help.f5e0718f.js";
import "./DateField.6cc0bbd1.js";
import "./QDate.08f685c0.js";
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
