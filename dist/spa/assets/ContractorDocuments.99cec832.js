import { _ as _sfc_main$1 } from "./GlobalAttachments.b897b72e.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.b7abd301.js";
import "./QToolbarTitle.556c822d.js";
import "./QSelect.33228d01.js";
import "./selection.a11a3ba2.js";
import "./QItemLabel.73012d76.js";
import "./QMenu.0c8d2be9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.42823e7f.js";
import "./QList.f150e006.js";
import "./QUploader.61a65018.js";
import "./QCircularProgress.b89440a1.js";
import "./ClosePopup.e5f69e1c.js";
import "./index.esm.a3a69065.js";
import "./use-quasar.6d096b4e.js";
import "./axios.ac485b3d.js";
import "./NoRecords.482963be.js";
import "./debug.972d445d.js";
import "./help.ae81b970.js";
import "./DateField.72b79861.js";
import "./QDate.ec0270f6.js";
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