import { _ as _sfc_main$1 } from "./GlobalAttachments.bd6fdfd1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e2534425.js";
import "./QToolbarTitle.8eeea9f0.js";
import "./QSelect.9df665ea.js";
import "./selection.a9ed569b.js";
import "./QItemLabel.d2881aab.js";
import "./QMenu.37598d9b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.91d387a0.js";
import "./QList.2756e54b.js";
import "./QUploader.5bfef046.js";
import "./QCircularProgress.0d537e9a.js";
import "./ClosePopup.bbe2f05b.js";
import "./index.esm.298d626c.js";
import "./use-quasar.b66f01fc.js";
import "./axios.d820b385.js";
import "./NoRecords.ff299d47.js";
import "./debug.972d445d.js";
import "./help.a87e60ea.js";
import "./DateField.d4db433f.js";
import "./QDate.1d15a72f.js";
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
