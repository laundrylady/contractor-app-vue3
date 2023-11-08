import { _ as _sfc_main$1 } from "./GlobalAttachments.b4553359.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.0bb869f5.js";
import "./QToolbarTitle.16cc08df.js";
import "./QSelect.f6437a33.js";
import "./selection.61c5117f.js";
import "./QItemLabel.486176b7.js";
import "./QMenu.e4b71d9b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.ae6f0f50.js";
import "./QList.2392688b.js";
import "./QUploader.2c6f7e8b.js";
import "./QCircularProgress.d9da48c3.js";
import "./ClosePopup.61da60db.js";
import "./index.esm.190c7a01.js";
import "./use-quasar.a5ffc13d.js";
import "./axios.202cb7ab.js";
import "./NoRecords.11c24d9e.js";
import "./debug.972d445d.js";
import "./help.98b6157c.js";
import "./DateField.75c45ad1.js";
import "./QDate.854c2b7b.js";
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
