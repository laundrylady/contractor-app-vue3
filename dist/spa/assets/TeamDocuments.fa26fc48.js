import { _ as _sfc_main$1 } from "./GlobalAttachments.43fdcf49.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.862d01a7.js";
import "./QToolbarTitle.e14e3099.js";
import "./QSelect.398d3ca4.js";
import "./QItemSection.97af8115.js";
import "./QItemLabel.8734c639.js";
import "./QMenu.0916131a.js";
import "./selection.ccca7e5c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.fc4f921d.js";
import "./QList.af4de810.js";
import "./QUploader.c2ed1b29.js";
import "./QCircularProgress.3a7d5544.js";
import "./ClosePopup.2e98f75e.js";
import "./index.esm.e9a80edd.js";
import "./use-quasar.9674509c.js";
import "./axios.982fbd2f.js";
import "./NoRecords.c17ef2b2.js";
import "./debug.972d445d.js";
import "./help.e91a6ad3.js";
import "./DateField.61578728.js";
import "./QDate.2a59607c.js";
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
