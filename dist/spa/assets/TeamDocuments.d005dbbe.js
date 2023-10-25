import { _ as _sfc_main$1 } from "./GlobalAttachments.8697382b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.fbe50061.js";
import "./QToolbarTitle.99b8dafa.js";
import "./QSelect.46e9e734.js";
import "./selection.87801179.js";
import "./QItemLabel.7c9eb75e.js";
import "./QMenu.7187a648.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.9bea4262.js";
import "./QList.bf907c35.js";
import "./QUploader.94faae9c.js";
import "./QCircularProgress.99c72273.js";
import "./ClosePopup.af1c7bd1.js";
import "./index.esm.69c617cf.js";
import "./use-quasar.393b4d82.js";
import "./axios.18ded2a9.js";
import "./NoRecords.ca3f2cb3.js";
import "./debug.972d445d.js";
import "./help.3381b671.js";
import "./DateField.8a5b7512.js";
import "./QDate.8c429555.js";
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
