import { _ as _sfc_main$1 } from "./GlobalAttachments.59e2672f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.2b7cc3d6.js";
import "./QToolbarTitle.d695b459.js";
import "./QSelect.aaf3079d.js";
import "./QItemSection.9c3d7843.js";
import "./QItemLabel.224eafd7.js";
import "./QMenu.0145b6c6.js";
import "./selection.420c9072.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.b0bb37fe.js";
import "./QList.2b69b949.js";
import "./QUploader.f6efdda6.js";
import "./QCircularProgress.34273822.js";
import "./ClosePopup.dfe830e5.js";
import "./index.esm.2c01f26d.js";
import "./use-quasar.226882e6.js";
import "./axios.769c3586.js";
import "./NoRecords.4b609330.js";
import "./debug.972d445d.js";
import "./help.f92fd9b7.js";
import "./DateField.ba09b5ce.js";
import "./QDate.5c27120b.js";
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
