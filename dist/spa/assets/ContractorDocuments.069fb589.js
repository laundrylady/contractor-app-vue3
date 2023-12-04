import { _ as _sfc_main$1 } from "./GlobalAttachments.84ae7ef4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e4f8656c.js";
import "./QToolbarTitle.9b92bbb5.js";
import "./QSelect.0d308ce8.js";
import "./QItemSection.72d2cb0c.js";
import "./QItemLabel.93d26f0e.js";
import "./QMenu.8ba97455.js";
import "./selection.be3f87ce.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.bc8aad32.js";
import "./QList.11ae1195.js";
import "./QUploader.1427b6c7.js";
import "./QCircularProgress.785c525a.js";
import "./ClosePopup.03b1d908.js";
import "./index.esm.22cb6cf3.js";
import "./use-quasar.f5b212de.js";
import "./axios.66f61733.js";
import "./NoRecords.c68d7964.js";
import "./debug.972d445d.js";
import "./help.b38df1d7.js";
import "./DateField.f2680047.js";
import "./QDate.1cc17cda.js";
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
