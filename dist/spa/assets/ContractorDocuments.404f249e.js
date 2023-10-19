import { _ as _sfc_main$1 } from "./GlobalAttachments.3bdb5c15.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.87d3d2b7.js";
import "./QToolbarTitle.4ab2b969.js";
import "./QSelect.b483704f.js";
import "./selection.f52844c4.js";
import "./QItemLabel.c54ecb51.js";
import "./QMenu.6b0359c9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.e46e4e99.js";
import "./QList.d0bf9769.js";
import "./QUploader.c7524c31.js";
import "./QCircularProgress.33ccb535.js";
import "./ClosePopup.e9204c07.js";
import "./index.esm.5daba112.js";
import "./use-quasar.e0032f92.js";
import "./axios.ed69c116.js";
import "./NoRecords.196a4a91.js";
import "./debug.972d445d.js";
import "./help.d3cdcc33.js";
import "./DateField.39d09401.js";
import "./QDate.523c614e.js";
import "./use-cache.b0833c75.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "These documents are only visible to staff.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorDocuments",
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
          attachable_type: "User",
          class: "q-mb-lg"
        }, null, 8, ["attachable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
