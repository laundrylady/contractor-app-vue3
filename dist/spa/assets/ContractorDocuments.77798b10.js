import { _ as _sfc_main$1 } from "./GlobalAttachments.ed8af07c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.c5118e29.js";
import "./QToolbarTitle.1755e568.js";
import "./QSelect.a6958ac0.js";
import "./QItemSection.f83fd0c5.js";
import "./QItemLabel.8416713a.js";
import "./QMenu.9ddada38.js";
import "./selection.7210b64a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.5b4efcee.js";
import "./QList.98c06205.js";
import "./QUploader.53e888ff.js";
import "./QCircularProgress.2c11849f.js";
import "./ClosePopup.b1490340.js";
import "./index.esm.8d2addc9.js";
import "./use-quasar.5904fe10.js";
import "./axios.4b346699.js";
import "./NoRecords.a16d8fe0.js";
import "./debug.972d445d.js";
import "./help.3ac2b17c.js";
import "./DateField.d16515a6.js";
import "./QDate.1fe9311e.js";
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
