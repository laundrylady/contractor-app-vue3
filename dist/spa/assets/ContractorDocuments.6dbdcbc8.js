import { _ as _sfc_main$1 } from "./GlobalAttachments.8f928003.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.3f86858d.js";
import "./QToolbarTitle.a1ea82e8.js";
import "./QSelect.154dcb87.js";
import "./QItemSection.a3ff7647.js";
import "./QItemLabel.9b951f4a.js";
import "./QMenu.63bb0d4f.js";
import "./selection.0f570696.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.d37dc0df.js";
import "./QList.59a6b87b.js";
import "./QUploader.52f312c2.js";
import "./QCircularProgress.32bb95db.js";
import "./ClosePopup.483112bc.js";
import "./index.esm.91cbd0b1.js";
import "./use-quasar.4a334413.js";
import "./axios.cff98580.js";
import "./NoRecords.50e85aa3.js";
import "./debug.972d445d.js";
import "./help.5e478062.js";
import "./DateField.013031cd.js";
import "./QDate.9ec56899.js";
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
