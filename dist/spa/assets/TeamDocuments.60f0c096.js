import { _ as _sfc_main$1 } from "./GlobalAttachments.d9b10f19.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.260f71e2.js";
import "./QToolbarTitle.def6b6d7.js";
import "./QSelect.1b94314a.js";
import "./selection.fe38b50b.js";
import "./QItemLabel.d70e4500.js";
import "./QMenu.70dfa3d6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.a5db11b5.js";
import "./QList.1cf863ed.js";
import "./QUploader.54016d92.js";
import "./QCircularProgress.9b5e4b6b.js";
import "./ClosePopup.d1be6e36.js";
import "./index.esm.3ad1476c.js";
import "./use-quasar.ef44ad3c.js";
import "./axios.15b401cf.js";
import "./NoRecords.3c1f1d37.js";
import "./debug.972d445d.js";
import "./help.aea4a3fa.js";
import "./DateField.340a7126.js";
import "./QDate.90dc7ec6.js";
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
