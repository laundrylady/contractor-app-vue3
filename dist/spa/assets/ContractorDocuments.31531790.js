import { _ as _sfc_main$1 } from "./GlobalAttachments.c3be3bba.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.cdcdcf43.js";
import "./QToolbarTitle.da658888.js";
import "./QSelect.4b4b676c.js";
import "./QItemSection.c0b84010.js";
import "./QItemLabel.ca428035.js";
import "./QMenu.e39b1657.js";
import "./selection.cf93e9cc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.821d88ea.js";
import "./QList.004b4ede.js";
import "./QUploader.9fee4c63.js";
import "./QCircularProgress.1c306bf6.js";
import "./ClosePopup.5ff1d715.js";
import "./index.esm.d6b154d6.js";
import "./use-quasar.b8c9f011.js";
import "./axios.3c5af50a.js";
import "./NoRecords.2253d164.js";
import "./debug.972d445d.js";
import "./help.eec7d1f7.js";
import "./DateField.9fd4945b.js";
import "./QDate.cf9a1301.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.03e126fb.js";
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
