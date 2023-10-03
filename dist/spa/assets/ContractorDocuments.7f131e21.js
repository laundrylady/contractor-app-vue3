import { _ as _sfc_main$1 } from "./GlobalAttachments.f284cef1.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.8de41301.js";
import "./QToolbarTitle.a136aa59.js";
import "./QSelect.ad059350.js";
import "./selection.ac0446c0.js";
import "./QItemLabel.aed68b16.js";
import "./QMenu.40e69310.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.8316a140.js";
import "./QList.c0b37bba.js";
import "./QUploader.b64defc3.js";
import "./QCircularProgress.a1c01503.js";
import "./ClosePopup.dc1cce1a.js";
import "./index.esm.cba08e2f.js";
import "./use-quasar.a6f1520c.js";
import "./axios.fd57f097.js";
import "./NoRecords.cb55c561.js";
import "./debug.ffa51329.js";
import "./help.4240928c.js";
import "./DateField.eb1b4b7c.js";
import "./QDate.2504b0ef.js";
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
