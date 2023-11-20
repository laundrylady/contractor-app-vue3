import { _ as _sfc_main$1 } from "./GlobalAttachments.784b7948.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.277d24a1.js";
import "./QToolbarTitle.3ee3ad5a.js";
import "./QSelect.8acef832.js";
import "./QItemSection.16f5ae57.js";
import "./QItemLabel.929aeee0.js";
import "./QMenu.a14ae47e.js";
import "./selection.23d3862c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.b4c540e8.js";
import "./QList.bee620e4.js";
import "./QUploader.c66c5c4e.js";
import "./QCircularProgress.0a5d1d07.js";
import "./ClosePopup.568a27e1.js";
import "./index.esm.5af454df.js";
import "./use-quasar.8bec9507.js";
import "./axios.1a7b9e5d.js";
import "./NoRecords.ea5eb213.js";
import "./debug.972d445d.js";
import "./help.d064b2a0.js";
import "./DateField.6515cb76.js";
import "./QDate.65a6589e.js";
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
