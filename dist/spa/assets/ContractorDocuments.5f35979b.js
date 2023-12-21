import { _ as _sfc_main$1 } from "./GlobalAttachments.3bc80a76.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.8df0f4ad.js";
import "./QToolbarTitle.98d364dc.js";
import "./QSelect.28512dd8.js";
import "./QItemSection.3a9dd665.js";
import "./QItemLabel.bae79bf9.js";
import "./QMenu.3de768d1.js";
import "./selection.75c2193f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.5a081af9.js";
import "./QList.dc38f62b.js";
import "./QUploader.785ae747.js";
import "./QCircularProgress.3ec4cb45.js";
import "./ClosePopup.25433e8e.js";
import "./index.esm.6753b1b1.js";
import "./use-quasar.79d9d292.js";
import "./axios.633c6a61.js";
import "./NoRecords.21f6a65f.js";
import "./debug.972d445d.js";
import "./help.794a0228.js";
import "./DateField.c4dff628.js";
import "./QDate.b72042f7.js";
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
