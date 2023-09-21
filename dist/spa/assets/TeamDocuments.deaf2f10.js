import { _ as _sfc_main$1 } from "./GlobalAttachments.bd1d9dfc.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.b20dbd4f.js";
import "./QToolbarTitle.16bd6abc.js";
import "./QSelect.7a749a7a.js";
import "./selection.f0b84c25.js";
import "./QItemLabel.a8305e21.js";
import "./QMenu.2b227eef.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.eaa489b6.js";
import "./QList.d6e8eb69.js";
import "./QUploader.3be48095.js";
import "./QCircularProgress.1629a44c.js";
import "./ClosePopup.7e6bdcec.js";
import "./index.esm.c261a0b5.js";
import "./use-quasar.c48c0621.js";
import "./axios.3b176db4.js";
import "./NoRecords.d5638521.js";
import "./debug.ffa51329.js";
import "./help.64adccec.js";
import "./DateField.f28844f8.js";
import "./QDate.b22cf262.js";
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
