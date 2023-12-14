import { _ as _sfc_main$1 } from "./GlobalAttachments.5a799263.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.3ebb8669.js";
import "./QToolbarTitle.8d45ad4e.js";
import "./QSelect.f9109c79.js";
import "./QItemSection.0f578e2c.js";
import "./QItemLabel.883e39c9.js";
import "./QMenu.fceb93d6.js";
import "./selection.fa7fa18d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.6d66d227.js";
import "./QList.892642cf.js";
import "./QUploader.e7dcef37.js";
import "./QCircularProgress.be0808b5.js";
import "./ClosePopup.1076266e.js";
import "./index.esm.20b67956.js";
import "./use-quasar.7737094c.js";
import "./axios.daed506c.js";
import "./NoRecords.d698e3b6.js";
import "./debug.972d445d.js";
import "./help.e5545d22.js";
import "./DateField.0f255c26.js";
import "./QDate.75df007a.js";
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
