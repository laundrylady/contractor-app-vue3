import { _ as _sfc_main$1 } from "./GlobalAttachments.35a04e42.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.dab5106a.js";
import "./QToolbarTitle.4a78d2dd.js";
import "./QSelect.458f17c3.js";
import "./selection.94631991.js";
import "./QItemLabel.d1e72a45.js";
import "./QMenu.0bf5e7da.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.6a409ca4.js";
import "./QList.00b0efce.js";
import "./QUploader.21cd8066.js";
import "./QCircularProgress.f39bb05e.js";
import "./ClosePopup.de216a77.js";
import "./index.esm.86428ed4.js";
import "./use-quasar.5cc4490b.js";
import "./axios.c4336e75.js";
import "./NoRecords.f7575259.js";
import "./debug.972d445d.js";
import "./help.d32e816a.js";
import "./DateField.b91ad56d.js";
import "./QDate.5ecbcd5a.js";
import "./use-cache.b0833c75.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "These documents are only visible to staff.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamDocuments",
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
          attachable_type: "Team"
        }, null, 8, ["attachable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
