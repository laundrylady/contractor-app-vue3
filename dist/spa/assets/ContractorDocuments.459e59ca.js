import { _ as _sfc_main$1 } from "./GlobalAttachments.cbf02cd2.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.5c682f3f.js";
import "./QToolbarTitle.716c2de1.js";
import "./QToolbar.64bb1a92.js";
import "./QSelect.eddff6de.js";
import "./QItemSection.5bb72ff5.js";
import "./QItemLabel.0738f754.js";
import "./QMenu.6dc20562.js";
import "./selection.c2557ac0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.3614003c.js";
import "./QList.c01dc454.js";
import "./QUploader.441d0583.js";
import "./QCircularProgress.a48ae6b9.js";
import "./ClosePopup.db6ddd1f.js";
import "./index.esm.1b9a1cf2.js";
import "./use-quasar.5f529d1c.js";
import "./axios.ebe6c73b.js";
import "./NoRecords.07e2a503.js";
import "./debug.d3090ccd.js";
import "./help.b808a93e.js";
import "./DateField.3ab00c6d.js";
import "./QDate.e899a024.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.8a78b5f5.js";
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
