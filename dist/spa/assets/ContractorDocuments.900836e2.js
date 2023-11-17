import { _ as _sfc_main$1 } from "./GlobalAttachments.e7b9a17d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.63251f47.js";
import "./QToolbarTitle.eacbda0e.js";
import "./QSelect.b1327776.js";
import "./selection.8b22f19f.js";
import "./QItemLabel.5719771f.js";
import "./QMenu.f57f59d0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.f37c22a9.js";
import "./QList.d50b1a6a.js";
import "./QUploader.6071f8ac.js";
import "./QCircularProgress.42ef7520.js";
import "./ClosePopup.0fcd0957.js";
import "./index.esm.b4b249cf.js";
import "./use-quasar.b8b88caf.js";
import "./axios.ea3e5b05.js";
import "./NoRecords.4910040b.js";
import "./debug.972d445d.js";
import "./help.2c124571.js";
import "./DateField.6428c622.js";
import "./QDate.2c6544d9.js";
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
