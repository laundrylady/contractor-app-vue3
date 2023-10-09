import { _ as _sfc_main$1 } from "./GlobalAttachments.af79aa12.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.a08621ab.js";
import "./QToolbarTitle.7345551b.js";
import "./QSelect.baaef81d.js";
import "./selection.daac3325.js";
import "./QItemLabel.2024ad05.js";
import "./QMenu.e594d261.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.fba61a5d.js";
import "./QList.b1103ddc.js";
import "./QUploader.69df3d8c.js";
import "./QCircularProgress.ac2905c3.js";
import "./ClosePopup.d171f163.js";
import "./index.esm.18d76fe2.js";
import "./use-quasar.c184257d.js";
import "./axios.da5b98be.js";
import "./NoRecords.6b620ef7.js";
import "./debug.ffa51329.js";
import "./help.51de6063.js";
import "./DateField.95744ef6.js";
import "./QDate.f22e370e.js";
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
