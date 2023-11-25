import { _ as _sfc_main$1 } from "./GlobalAttachments.26f78cb4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.3c1ce126.js";
import "./QToolbarTitle.ceb279e2.js";
import "./QSelect.bae8468b.js";
import "./QItemSection.fadb38ff.js";
import "./QItemLabel.d71404be.js";
import "./QMenu.7e2b7e4a.js";
import "./selection.8c3533a6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.27a24072.js";
import "./QList.164bd35d.js";
import "./QUploader.2a8fb47e.js";
import "./QCircularProgress.a73bc8aa.js";
import "./ClosePopup.42d1a14d.js";
import "./index.esm.6878a18f.js";
import "./use-quasar.4837a0de.js";
import "./axios.a063f4ae.js";
import "./NoRecords.54f6e1f5.js";
import "./debug.972d445d.js";
import "./help.5a2f4e9c.js";
import "./DateField.b10a0dd3.js";
import "./QDate.e0e3ab23.js";
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
