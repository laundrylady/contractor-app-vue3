import { _ as _sfc_main$1 } from "./GlobalAttachments.a460d902.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.3493713e.js";
import "./QToolbarTitle.b803018c.js";
import "./QSelect.9408b07f.js";
import "./QItemSection.8042ade3.js";
import "./QItemLabel.fcab7aaf.js";
import "./QMenu.31c45b16.js";
import "./selection.119f4514.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.2e430af5.js";
import "./QList.210d0b48.js";
import "./QUploader.46f02052.js";
import "./QCircularProgress.a8b1fa3b.js";
import "./ClosePopup.de5676a5.js";
import "./index.esm.753a5f17.js";
import "./use-quasar.2971c973.js";
import "./axios.51cbb93a.js";
import "./NoRecords.14cd33e7.js";
import "./debug.972d445d.js";
import "./help.7d15b7b7.js";
import "./DateField.35f9a352.js";
import "./QDate.99c28dcc.js";
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
