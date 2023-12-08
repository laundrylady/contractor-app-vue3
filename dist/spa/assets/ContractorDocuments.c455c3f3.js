import { _ as _sfc_main$1 } from "./GlobalAttachments.08380673.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.d21e33cc.js";
import "./QToolbarTitle.172099d6.js";
import "./QSelect.1bad7801.js";
import "./QItemSection.7dac666d.js";
import "./QItemLabel.3dfa783e.js";
import "./QMenu.1b135721.js";
import "./selection.cc5c466e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.78187e39.js";
import "./QList.a9392fd5.js";
import "./QUploader.ba51a63e.js";
import "./QCircularProgress.b683bf7d.js";
import "./ClosePopup.73889011.js";
import "./index.esm.0ad964e7.js";
import "./use-quasar.e1a168cf.js";
import "./axios.1457e981.js";
import "./NoRecords.d8034ebc.js";
import "./debug.972d445d.js";
import "./help.f60883c6.js";
import "./DateField.978710e5.js";
import "./QDate.704a5cef.js";
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
