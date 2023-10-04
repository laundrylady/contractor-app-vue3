import { _ as _sfc_main$1 } from "./GlobalAttachments.07b9610c.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.f86c1423.js";
import "./QToolbarTitle.db449c8a.js";
import "./QSelect.821c56cf.js";
import "./selection.5d4507f5.js";
import "./QItemLabel.609aa7fc.js";
import "./QMenu.5ad66883.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.cea15314.js";
import "./QList.7097a9ef.js";
import "./QUploader.a3b8af65.js";
import "./QCircularProgress.95cc063b.js";
import "./ClosePopup.3f4f2836.js";
import "./index.esm.bdaaad72.js";
import "./use-quasar.5430aa48.js";
import "./axios.fa55e436.js";
import "./NoRecords.7377433d.js";
import "./debug.ffa51329.js";
import "./help.488c6294.js";
import "./DateField.89547718.js";
import "./QDate.a60d68eb.js";
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
