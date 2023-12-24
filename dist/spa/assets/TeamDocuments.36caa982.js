import { _ as _sfc_main$1 } from "./GlobalAttachments.852e1a02.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f3826b35.js";
import "./QToolbarTitle.d3817974.js";
import "./QSelect.9148827d.js";
import "./QItemSection.cc0d0b61.js";
import "./QItemLabel.8ea3d53c.js";
import "./QMenu.7ce22bf8.js";
import "./selection.baeadaa7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.26f6c3e4.js";
import "./QList.8ab39670.js";
import "./QUploader.1ee0d747.js";
import "./QCircularProgress.6c4aa919.js";
import "./ClosePopup.fcbb03a2.js";
import "./index.esm.43195b89.js";
import "./use-quasar.6a7c9750.js";
import "./axios.afd10d98.js";
import "./NoRecords.afd80bce.js";
import "./debug.972d445d.js";
import "./help.bbbdd6ab.js";
import "./DateField.4b5eb688.js";
import "./QDate.0a228092.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.7430c3c4.js";
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
