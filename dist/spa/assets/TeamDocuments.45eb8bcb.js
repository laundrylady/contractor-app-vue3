import { _ as _sfc_main$1 } from "./GlobalAttachments.55520c1d.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.7f551f6a.js";
import "./QToolbarTitle.0a9aa6b4.js";
import "./QSelect.0c3fd45e.js";
import "./selection.62639f9a.js";
import "./QItemLabel.4aa4ec2c.js";
import "./QMenu.c6beb16c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.7906f244.js";
import "./QList.a07706d2.js";
import "./QUploader.d4ea4acb.js";
import "./QCircularProgress.419b6d81.js";
import "./ClosePopup.34ca9f24.js";
import "./index.esm.b8f2daad.js";
import "./use-quasar.5b0ff680.js";
import "./axios.3311feff.js";
import "./NoRecords.bb446edb.js";
import "./debug.ffa51329.js";
import "./help.ceb9b487.js";
import "./DateField.8f25b0c5.js";
import "./QDate.57db434f.js";
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
