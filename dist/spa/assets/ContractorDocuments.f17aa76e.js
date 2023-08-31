import { _ as _sfc_main$1 } from "./GlobalAttachments.55382646.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.09db86c6.js";
import "./QToolbarTitle.7a90d5c5.js";
import "./QSelect.b914fb42.js";
import "./QItemSection.0ff59c1c.js";
import "./selection.b097d85c.js";
import "./QMenu.f4a75668.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.64edadf1.js";
import "./QList.ea43f186.js";
import "./QUploader.b8ee3b5b.js";
import "./QCircularProgress.c2d1cb10.js";
import "./ClosePopup.a0d8d2e6.js";
import "./index.esm.6d4c12da.js";
import "./use-quasar.27d9d9da.js";
import "./axios.a630860f.js";
import "./NoRecords.66d4518d.js";
import "./debug.ffa51329.js";
import "./help.43e74e3a.js";
import "./DateField.cda1c79b.js";
import "./QDate.089f4805.js";
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
