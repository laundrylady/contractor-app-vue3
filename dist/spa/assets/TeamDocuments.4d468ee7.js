import { _ as _sfc_main$1 } from "./GlobalAttachments.9ff03eb5.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.6bc9da2c.js";
import "./QToolbarTitle.9b00819b.js";
import "./QSelect.a5c2fbfb.js";
import "./selection.e81ada06.js";
import "./QItemLabel.c0748dc1.js";
import "./QMenu.e11d66d0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.9d8c9c97.js";
import "./QList.717bbc17.js";
import "./QUploader.04fd491c.js";
import "./QCircularProgress.298254f2.js";
import "./ClosePopup.3c12de3d.js";
import "./index.esm.676bc498.js";
import "./use-quasar.13be596a.js";
import "./axios.d0b87e4b.js";
import "./NoRecords.1f1db028.js";
import "./debug.ffa51329.js";
import "./help.d97f77b7.js";
import "./DateField.40e0bd23.js";
import "./QDate.cf6578b1.js";
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
