import { _ as _sfc_main$1 } from "./GlobalAttachments.789ea35d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.6ae485f0.js";
import "./QToolbarTitle.fb0e66d2.js";
import "./QSelect.90089408.js";
import "./selection.cbab1b8c.js";
import "./QItemLabel.2c595435.js";
import "./QMenu.8110c943.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.e9d4d484.js";
import "./QList.7363286c.js";
import "./QUploader.232fe5db.js";
import "./QCircularProgress.1dcf5031.js";
import "./ClosePopup.a22711c7.js";
import "./index.esm.2897ba16.js";
import "./use-quasar.1ff90353.js";
import "./axios.a8315867.js";
import "./NoRecords.fc7192fd.js";
import "./debug.972d445d.js";
import "./help.627981a1.js";
import "./DateField.73237718.js";
import "./QDate.2f8ab556.js";
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
