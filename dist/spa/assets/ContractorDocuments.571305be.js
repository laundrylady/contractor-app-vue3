import { _ as _sfc_main$1 } from "./GlobalAttachments.c7057fbd.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.47a08050.js";
import "./QToolbarTitle.51b7492d.js";
import "./QSelect.50ef15dc.js";
import "./selection.427fd34c.js";
import "./QItemLabel.b98dd222.js";
import "./QMenu.97e4312a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.ce5443a1.js";
import "./QList.3b68cbed.js";
import "./QUploader.f6361797.js";
import "./QCircularProgress.f39bc2a9.js";
import "./ClosePopup.e681ccb1.js";
import "./index.esm.844548f4.js";
import "./use-quasar.ddf6bb44.js";
import "./axios.4c537ae9.js";
import "./NoRecords.59540249.js";
import "./debug.ffa51329.js";
import "./help.8408b1ce.js";
import "./DateField.2bd3c65c.js";
import "./QDate.01a8ea1a.js";
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
