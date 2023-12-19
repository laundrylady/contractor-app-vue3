import { _ as _sfc_main$1 } from "./GlobalAttachments.290fdca1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.3b1f6dca.js";
import "./QToolbarTitle.a404fc38.js";
import "./QSelect.5545e9cd.js";
import "./QItemSection.19624de0.js";
import "./QItemLabel.054a644f.js";
import "./QMenu.1e7752f1.js";
import "./selection.29e02e4f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.fe988bde.js";
import "./QList.d0ffde4f.js";
import "./QUploader.72004f65.js";
import "./QCircularProgress.bd1237c2.js";
import "./ClosePopup.eaa1fb65.js";
import "./index.esm.a5cf8a48.js";
import "./use-quasar.9fc33113.js";
import "./axios.306b0a63.js";
import "./NoRecords.6c2e33d5.js";
import "./debug.972d445d.js";
import "./help.cdbb3d30.js";
import "./DateField.4646b4ba.js";
import "./QDate.6fce039d.js";
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
