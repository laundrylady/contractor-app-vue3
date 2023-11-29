import { _ as _sfc_main$1 } from "./GlobalAttachments.c5d22fea.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.a9e72922.js";
import "./QToolbarTitle.9a813f7f.js";
import "./QSelect.a2c9b544.js";
import "./QItemSection.2292a67b.js";
import "./QItemLabel.ce5bdc9d.js";
import "./QMenu.c5bf345e.js";
import "./selection.ed28452f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.8246c0b0.js";
import "./QList.45d51efb.js";
import "./QUploader.89ae6c9a.js";
import "./QCircularProgress.ea56c8e7.js";
import "./ClosePopup.66841a52.js";
import "./index.esm.ad32e72a.js";
import "./use-quasar.5e357f96.js";
import "./axios.c72b80e9.js";
import "./NoRecords.eaff9cee.js";
import "./debug.972d445d.js";
import "./help.f24c7eca.js";
import "./DateField.aa156c01.js";
import "./QDate.159f4ed8.js";
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
