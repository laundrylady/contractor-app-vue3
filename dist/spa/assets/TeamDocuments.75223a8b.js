import { _ as _sfc_main$1 } from "./GlobalAttachments.634b2506.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.df2fd7d3.js";
import "./QToolbarTitle.01de4521.js";
import "./QSelect.d7e689f3.js";
import "./selection.90f9342d.js";
import "./QItemLabel.1f843da5.js";
import "./QMenu.0c126a98.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.01c5b85b.js";
import "./QList.e550f401.js";
import "./QUploader.08b7c06b.js";
import "./QCircularProgress.a2c49e45.js";
import "./ClosePopup.192cce34.js";
import "./index.esm.c07e96a8.js";
import "./use-quasar.3174b62b.js";
import "./axios.70eadaf1.js";
import "./NoRecords.4f42c3db.js";
import "./debug.972d445d.js";
import "./help.5e924469.js";
import "./DateField.432bdce6.js";
import "./QDate.f9c0888e.js";
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
