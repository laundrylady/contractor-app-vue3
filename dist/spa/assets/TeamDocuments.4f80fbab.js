import { _ as _sfc_main$1 } from "./GlobalAttachments.2ea41c9f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.287c82d5.js";
import "./QToolbarTitle.11b277e1.js";
import "./QSelect.25c90bb7.js";
import "./QItemSection.c886ae50.js";
import "./QItemLabel.46c33ec4.js";
import "./QMenu.b7f847d5.js";
import "./selection.d70b1d4a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.6a00ad56.js";
import "./QList.a2ee3970.js";
import "./QUploader.fe71dc09.js";
import "./QCircularProgress.2899ec31.js";
import "./ClosePopup.0b4d9f28.js";
import "./index.esm.c39481e4.js";
import "./use-quasar.176f59e2.js";
import "./axios.4964e504.js";
import "./NoRecords.9e351bf5.js";
import "./debug.972d445d.js";
import "./help.38cc707a.js";
import "./DateField.fdec0627.js";
import "./QDate.179ddc52.js";
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
