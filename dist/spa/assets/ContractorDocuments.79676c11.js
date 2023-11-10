import { _ as _sfc_main$1 } from "./GlobalAttachments.4f4723f7.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.bb568279.js";
import "./QToolbarTitle.1688f162.js";
import "./QSelect.9d4df987.js";
import "./selection.419fc148.js";
import "./QItemLabel.15ac7203.js";
import "./QMenu.00cf9cb3.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.27624bba.js";
import "./QList.420e6329.js";
import "./QUploader.9585271a.js";
import "./QCircularProgress.160756cc.js";
import "./ClosePopup.94df672d.js";
import "./index.esm.11fac904.js";
import "./use-quasar.0aa8fc64.js";
import "./axios.96e782ce.js";
import "./NoRecords.6f063de4.js";
import "./debug.972d445d.js";
import "./help.2f0ec940.js";
import "./DateField.7643a4c3.js";
import "./QDate.883b62b2.js";
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
