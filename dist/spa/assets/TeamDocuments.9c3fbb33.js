import { _ as _sfc_main$1 } from "./GlobalAttachments.87ea3084.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.94e66b14.js";
import "./QToolbarTitle.a5710d07.js";
import "./QSelect.66943613.js";
import "./QItemSection.4161e238.js";
import "./QItemLabel.051732c0.js";
import "./QMenu.3336b015.js";
import "./selection.670e2d60.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.8bef9866.js";
import "./QList.c73a12dd.js";
import "./QUploader.55dc8eb0.js";
import "./QCircularProgress.9ced49fc.js";
import "./ClosePopup.ed4876e8.js";
import "./index.esm.c2b510a3.js";
import "./use-quasar.9e8485d4.js";
import "./axios.d02ca954.js";
import "./NoRecords.0988d97a.js";
import "./debug.972d445d.js";
import "./help.47eaabb7.js";
import "./DateField.b150997d.js";
import "./QDate.35625fcf.js";
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
