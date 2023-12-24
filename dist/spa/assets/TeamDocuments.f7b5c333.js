import { _ as _sfc_main$1 } from "./GlobalAttachments.5a7b5913.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.dd540b4f.js";
import "./QToolbarTitle.80eb5f6b.js";
import "./QSelect.2d64b487.js";
import "./QItemSection.1a564290.js";
import "./QItemLabel.748c0180.js";
import "./QMenu.724cc13f.js";
import "./selection.61335d0a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.2e138c50.js";
import "./QList.dc30c21a.js";
import "./QUploader.bb52c2be.js";
import "./QCircularProgress.7b36241c.js";
import "./ClosePopup.0719daa7.js";
import "./index.esm.4b6a2c5c.js";
import "./use-quasar.c5db3f70.js";
import "./axios.a558da08.js";
import "./NoRecords.7aff5f4f.js";
import "./debug.972d445d.js";
import "./help.e4640e31.js";
import "./DateField.347eed41.js";
import "./QDate.22a55481.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.86c74e0c.js";
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
