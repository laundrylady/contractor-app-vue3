import { _ as _sfc_main$1 } from "./GlobalAttachments.4f32010b.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.df648268.js";
import "./QToolbarTitle.795f8e11.js";
import "./QSelect.261f3678.js";
import "./QItemSection.69a1ed09.js";
import "./format.36ec1428.js";
import "./QBtnGroup.02834e98.js";
import "./QList.5de97230.js";
import "./QUploader.c3d769dd.js";
import "./QCircularProgress.c02ed4e1.js";
import "./ClosePopup.407892a4.js";
import "./index.esm.f857107a.js";
import "./use-quasar.4dd9ff4c.js";
import "./axios.954307d5.js";
import "./NoRecords.f5227526.js";
import "./debug.805a8aef.js";
import "./help.0d5056b8.js";
import "./DateField.60d2e266.js";
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
