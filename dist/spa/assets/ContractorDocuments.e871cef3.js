import { _ as _sfc_main$1 } from "./GlobalAttachments.7128713f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.010c9441.js";
import "./QToolbarTitle.d23e71dd.js";
import "./QSelect.23d3f7db.js";
import "./QItemSection.582ba909.js";
import "./QItemLabel.cd519206.js";
import "./QMenu.3531bbe6.js";
import "./selection.67a628ad.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.5d631355.js";
import "./QList.d0b73614.js";
import "./QUploader.34131150.js";
import "./QCircularProgress.430fd0d2.js";
import "./ClosePopup.fba06acc.js";
import "./index.esm.d2eac67b.js";
import "./use-quasar.a199274d.js";
import "./axios.12c3b1f3.js";
import "./NoRecords.cad06606.js";
import "./debug.972d445d.js";
import "./help.20b94c7f.js";
import "./DateField.0d701485.js";
import "./QDate.315a2500.js";
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
