import { _ as _sfc_main$1 } from "./GlobalAttachments.71d844e8.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f35da196.js";
import "./QToolbarTitle.3bdb6369.js";
import "./QSelect.cc12aec1.js";
import "./QItemSection.80e113b3.js";
import "./QItemLabel.5598ec43.js";
import "./QMenu.972373ea.js";
import "./selection.08e2461f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.d6e9e6e0.js";
import "./QList.5f89f18c.js";
import "./QUploader.87515de3.js";
import "./QCircularProgress.17ed0bed.js";
import "./ClosePopup.efb835ab.js";
import "./index.esm.28765c03.js";
import "./use-quasar.6543d649.js";
import "./axios.99921404.js";
import "./NoRecords.07adeb92.js";
import "./debug.972d445d.js";
import "./help.71e55574.js";
import "./DateField.66a47fd1.js";
import "./QDate.ee5a99c5.js";
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
