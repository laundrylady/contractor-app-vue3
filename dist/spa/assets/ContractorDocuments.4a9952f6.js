import { _ as _sfc_main$1 } from "./GlobalAttachments.6df178b6.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.d79e1fe7.js";
import "./QToolbarTitle.2bc70bbc.js";
import "./QSelect.4bc6acd3.js";
import "./selection.ee5e7cec.js";
import "./QItemLabel.fce76322.js";
import "./QMenu.4d6d0b24.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.8e8c0b10.js";
import "./QList.8ec7e72e.js";
import "./QUploader.2808049d.js";
import "./QCircularProgress.e2fc8613.js";
import "./ClosePopup.da8f839b.js";
import "./index.esm.ed546e78.js";
import "./use-quasar.27a79101.js";
import "./axios.45af212b.js";
import "./NoRecords.a62bf364.js";
import "./debug.ffa51329.js";
import "./help.e45c84ac.js";
import "./DateField.dd1f7e5c.js";
import "./QDate.2d2701ea.js";
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
