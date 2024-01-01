import { _ as _sfc_main$1 } from "./GlobalAttachments.d35fc425.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ee07ae95.js";
import "./QToolbarTitle.41df636b.js";
import "./QToolbar.ff4f2ce5.js";
import "./QSelect.138baceb.js";
import "./QItemSection.8aff2714.js";
import "./QItemLabel.cefa8d89.js";
import "./QMenu.060e04ea.js";
import "./selection.9481dc7d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.0702eec4.js";
import "./QList.89b7e4da.js";
import "./QUploader.85440bce.js";
import "./QCircularProgress.1ffee433.js";
import "./ClosePopup.0e3ad749.js";
import "./index.esm.4b06cdc0.js";
import "./use-quasar.115bbd27.js";
import "./axios.c73281a3.js";
import "./NoRecords.773efa4d.js";
import "./debug.b9d7424b.js";
import "./help.0fd80ca9.js";
import "./DateField.0656ff02.js";
import "./QDate.3ebeb141.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.6846fddb.js";
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
