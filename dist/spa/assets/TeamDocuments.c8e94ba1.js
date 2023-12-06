import { _ as _sfc_main$1 } from "./GlobalAttachments.f2fafd78.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.9d591b1c.js";
import "./QToolbarTitle.db8b86c2.js";
import "./QSelect.9c2c8019.js";
import "./QItemSection.8e564bc4.js";
import "./QItemLabel.d08ee18c.js";
import "./QMenu.96d27bd9.js";
import "./selection.2874b1b3.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.9b5d0b1e.js";
import "./QList.b4bd41f3.js";
import "./QUploader.9540c611.js";
import "./QCircularProgress.143011bb.js";
import "./ClosePopup.432271df.js";
import "./index.esm.b83bc449.js";
import "./use-quasar.7e15747c.js";
import "./axios.ffd06d42.js";
import "./NoRecords.d47f9862.js";
import "./debug.972d445d.js";
import "./help.b8d14fc4.js";
import "./DateField.6f5a1188.js";
import "./QDate.a93b57ec.js";
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
