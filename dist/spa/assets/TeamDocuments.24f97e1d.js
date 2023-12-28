import { _ as _sfc_main$1 } from "./GlobalAttachments.bc399eb7.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.fcad64dd.js";
import "./QToolbarTitle.287ac257.js";
import "./QToolbar.33fcd926.js";
import "./QSelect.9deb6b4f.js";
import "./QItemSection.4fc65ca0.js";
import "./QItemLabel.16c95bf4.js";
import "./QMenu.31cd8222.js";
import "./selection.5d189058.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.fc13024a.js";
import "./QList.95dd5c86.js";
import "./QUploader.504eadd8.js";
import "./QCircularProgress.04b1c679.js";
import "./ClosePopup.8330bfe5.js";
import "./index.esm.aa897c43.js";
import "./use-quasar.61daffe3.js";
import "./axios.9fa0d74b.js";
import "./NoRecords.3eca460f.js";
import "./debug.b9d7424b.js";
import "./help.d6c13a33.js";
import "./DateField.825d692c.js";
import "./QDate.865c8b40.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.c41c74a1.js";
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
