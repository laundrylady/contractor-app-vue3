import { _ as _sfc_main$1 } from "./GlobalAttachments.eeae7707.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.54585565.js";
import "./QToolbarTitle.c0d3334f.js";
import "./QSelect.bb083088.js";
import "./QItemSection.3d6dd23a.js";
import "./QItemLabel.64fe3631.js";
import "./QMenu.dc22a363.js";
import "./selection.201d97d8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.c610d4b1.js";
import "./QList.0477e43a.js";
import "./QUploader.3dea557a.js";
import "./QCircularProgress.72ac1248.js";
import "./ClosePopup.e6a61557.js";
import "./index.esm.689b55c6.js";
import "./use-quasar.32019d40.js";
import "./axios.1853c8fa.js";
import "./NoRecords.26bc3454.js";
import "./debug.972d445d.js";
import "./help.2ef6de69.js";
import "./DateField.c22af085.js";
import "./QDate.4d78eeb2.js";
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
