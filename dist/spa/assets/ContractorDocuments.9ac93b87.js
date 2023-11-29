import { _ as _sfc_main$1 } from "./GlobalAttachments.59c2d937.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.769a5324.js";
import "./QToolbarTitle.a71d23c3.js";
import "./QSelect.a9d8d476.js";
import "./QItemSection.ecc22d24.js";
import "./QItemLabel.1acb84cc.js";
import "./QMenu.b82f56f8.js";
import "./selection.1719acf0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.2af62501.js";
import "./QList.e1c8acd9.js";
import "./QUploader.e5ef2187.js";
import "./QCircularProgress.5fd14295.js";
import "./ClosePopup.4f03ad0b.js";
import "./index.esm.00406c70.js";
import "./use-quasar.a43d8db7.js";
import "./axios.4891fd4d.js";
import "./NoRecords.4d65c3cf.js";
import "./debug.972d445d.js";
import "./help.bc831a23.js";
import "./DateField.030eb9a4.js";
import "./QDate.c2014765.js";
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
