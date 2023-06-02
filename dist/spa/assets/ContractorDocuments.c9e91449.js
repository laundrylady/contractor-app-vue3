import { _ as _sfc_main$1 } from "./GlobalAttachments.fc5ec50a.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.e94f5960.js";
import "./QToolbarTitle.05ac42d2.js";
import "./QSelect.11126e51.js";
import "./QItemSection.d938c332.js";
import "./format.6405c3bf.js";
import "./QBtnGroup.7bfc9dd9.js";
import "./QList.3e9c77b4.js";
import "./QUploader.9ffe9422.js";
import "./QCircularProgress.4faea536.js";
import "./ClosePopup.cddcf942.js";
import "./index.esm.d23c42b2.js";
import "./use-quasar.6066cfbc.js";
import "./axios.300ce40b.js";
import "./NoRecords.1bcedb96.js";
import "./debug.805a8aef.js";
import "./help.759ffad4.js";
import "./DateField.f9d9e8d3.js";
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
