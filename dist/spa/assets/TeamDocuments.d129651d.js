import { _ as _sfc_main$1 } from "./GlobalAttachments.532dd2a7.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.b04b1049.js";
import "./QToolbarTitle.5cee1261.js";
import "./QSelect.0f362143.js";
import "./selection.347263e5.js";
import "./QItemLabel.21af0eb9.js";
import "./QMenu.53748de8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.d9749c48.js";
import "./QList.02c43971.js";
import "./QUploader.be26997f.js";
import "./QCircularProgress.ffa418c7.js";
import "./ClosePopup.6677deda.js";
import "./index.esm.bae90351.js";
import "./use-quasar.dba2e135.js";
import "./axios.aaf6f9f0.js";
import "./NoRecords.4d053b73.js";
import "./debug.ffa51329.js";
import "./help.3cb757e9.js";
import "./DateField.7d890b21.js";
import "./QDate.15e3664e.js";
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
