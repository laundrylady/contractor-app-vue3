import { _ as _sfc_main$1 } from "./GlobalAttachments.48801ef1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.6a5c0810.js";
import "./QToolbarTitle.b7277457.js";
import "./QSelect.fde53a09.js";
import "./QItemSection.cb2915ec.js";
import "./QItemLabel.64d93eb6.js";
import "./QMenu.49b63711.js";
import "./selection.2a9bbdda.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.fd6820d1.js";
import "./QList.969289e2.js";
import "./QUploader.c140213c.js";
import "./QCircularProgress.b6d9111f.js";
import "./ClosePopup.22eaac01.js";
import "./index.esm.411ccfd3.js";
import "./use-quasar.6e6abd74.js";
import "./axios.83cf9320.js";
import "./NoRecords.a8579877.js";
import "./debug.972d445d.js";
import "./help.4330a8b0.js";
import "./DateField.c93fb4cb.js";
import "./QDate.27353972.js";
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
