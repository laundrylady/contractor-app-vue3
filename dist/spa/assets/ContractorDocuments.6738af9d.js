import { _ as _sfc_main$1 } from "./GlobalAttachments.5ae7d0f4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.d3d6e530.js";
import "./QToolbarTitle.e3ebcf73.js";
import "./QSelect.0adb6ca7.js";
import "./QItemSection.0d9defb0.js";
import "./QItemLabel.6e381017.js";
import "./QMenu.14096171.js";
import "./selection.0cf3ea97.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.0cd157a3.js";
import "./QList.1c15f565.js";
import "./QUploader.21d82018.js";
import "./QCircularProgress.a4b6e7d3.js";
import "./ClosePopup.3139e99b.js";
import "./index.esm.349ef020.js";
import "./use-quasar.f865475e.js";
import "./axios.92d2b7e0.js";
import "./NoRecords.af52686e.js";
import "./debug.972d445d.js";
import "./help.2050d37a.js";
import "./DateField.7234a28c.js";
import "./QDate.4557b518.js";
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
