import { _ as _sfc_main$1 } from "./GlobalAttachments.873937fa.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.706d8900.js";
import "./QToolbarTitle.6bf94d77.js";
import "./QSelect.e5026263.js";
import "./QItemSection.79ddbbc8.js";
import "./QItemLabel.31304aca.js";
import "./QMenu.90cbb366.js";
import "./selection.5172fb8f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.feb7bde0.js";
import "./QList.4764cd18.js";
import "./QUploader.ee342e0b.js";
import "./QCircularProgress.1dc043b0.js";
import "./ClosePopup.275d9e02.js";
import "./index.esm.58ee1ada.js";
import "./use-quasar.577f05a7.js";
import "./axios.8acee7c7.js";
import "./NoRecords.28a88529.js";
import "./debug.972d445d.js";
import "./help.e2addada.js";
import "./DateField.ec0e5d2e.js";
import "./QDate.67db1436.js";
import "./use-cache.b0833c75.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "These documents are only visible to staff.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamDocuments",
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
          attachable_type: "Team"
        }, null, 8, ["attachable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
