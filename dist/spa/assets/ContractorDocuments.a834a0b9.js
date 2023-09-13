import { _ as _sfc_main$1 } from "./GlobalAttachments.12dff1b2.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.a868d555.js";
import "./QToolbarTitle.c8ee67a5.js";
import "./QSelect.f4199137.js";
import "./selection.2e6c8ab7.js";
import "./QItemLabel.b4dfa054.js";
import "./QMenu.b68ab337.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.3fc92f0e.js";
import "./QList.c5d665a0.js";
import "./QUploader.b4463a59.js";
import "./QCircularProgress.58c2659b.js";
import "./ClosePopup.bd072460.js";
import "./index.esm.ff88b628.js";
import "./use-quasar.9f085e1c.js";
import "./axios.a7f4982f.js";
import "./NoRecords.0c2c0f6d.js";
import "./debug.ffa51329.js";
import "./help.d1a186e3.js";
import "./DateField.14443e37.js";
import "./QDate.5fd7a831.js";
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
