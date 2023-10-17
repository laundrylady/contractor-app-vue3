import { _ as _sfc_main$1 } from "./GlobalAttachments.8d0a4891.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.03f0e330.js";
import "./QToolbarTitle.6a74db16.js";
import "./QSelect.beb3a9d4.js";
import "./selection.10f7d824.js";
import "./QItemLabel.164d1a1f.js";
import "./QMenu.cccfb668.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.bcfdf882.js";
import "./QList.b9690ece.js";
import "./QUploader.66fe97a3.js";
import "./QCircularProgress.267a9e34.js";
import "./ClosePopup.82f7a205.js";
import "./index.esm.ed5220f5.js";
import "./use-quasar.977cd8c9.js";
import "./axios.6ba618d7.js";
import "./NoRecords.fe8ee06b.js";
import "./debug.972d445d.js";
import "./help.7fabc921.js";
import "./DateField.5f97c600.js";
import "./QDate.32ae0fbb.js";
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
