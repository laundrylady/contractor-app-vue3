import { _ as _sfc_main$1 } from "./GlobalAttachments.427ca608.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.644e4200.js";
import "./QToolbarTitle.f3f82c1f.js";
import "./QSelect.ab5d7e64.js";
import "./selection.9cd71d51.js";
import "./QItemLabel.bd8cb11b.js";
import "./QMenu.48a0f8bf.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.0200405f.js";
import "./QList.7529ab5e.js";
import "./QUploader.91dda791.js";
import "./QCircularProgress.c31da7e1.js";
import "./ClosePopup.fd63b92d.js";
import "./index.esm.649e23a5.js";
import "./use-quasar.ec545cb4.js";
import "./axios.6442d350.js";
import "./NoRecords.0a06d9bf.js";
import "./debug.972d445d.js";
import "./help.02d8b462.js";
import "./DateField.a138a0df.js";
import "./QDate.1b28e672.js";
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
