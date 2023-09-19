import { _ as _sfc_main$1 } from "./GlobalAttachments.4bef10ec.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.909d8447.js";
import "./QToolbarTitle.db58c9fa.js";
import "./QSelect.4ea71d9c.js";
import "./selection.b37ccca0.js";
import "./QItemLabel.415ed021.js";
import "./QMenu.f5054dc0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.388235f5.js";
import "./QList.48b8236b.js";
import "./QUploader.0b6704bd.js";
import "./QCircularProgress.5e8c8a3f.js";
import "./ClosePopup.1b6117b6.js";
import "./index.esm.4243924e.js";
import "./use-quasar.246af113.js";
import "./axios.cc1e1de2.js";
import "./NoRecords.bdcac72f.js";
import "./debug.ffa51329.js";
import "./help.92015474.js";
import "./DateField.27092cf8.js";
import "./QDate.463ea1cf.js";
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
