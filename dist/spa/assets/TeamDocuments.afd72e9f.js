import { _ as _sfc_main$1 } from "./GlobalAttachments.38757dd1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.a490d332.js";
import "./QToolbarTitle.a180f99d.js";
import "./QSelect.e1d50312.js";
import "./QItemSection.86560840.js";
import "./QItemLabel.3989da6b.js";
import "./QMenu.387b43cd.js";
import "./selection.fdb5b4b5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.1a7d0b75.js";
import "./QList.b056649b.js";
import "./QUploader.2485956b.js";
import "./QCircularProgress.87587238.js";
import "./ClosePopup.47e177fe.js";
import "./index.esm.76f69fb1.js";
import "./use-quasar.e2d1e71c.js";
import "./axios.dbbbd0df.js";
import "./NoRecords.1189f4bb.js";
import "./debug.972d445d.js";
import "./help.817e88f7.js";
import "./DateField.eb1da107.js";
import "./QDate.6ef34f13.js";
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
