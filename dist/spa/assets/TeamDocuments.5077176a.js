import { _ as _sfc_main$1 } from "./GlobalAttachments.567ef568.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.11e648ff.js";
import "./QToolbarTitle.1ef2def8.js";
import "./QSelect.cc074eb5.js";
import "./QItemSection.ba4339bd.js";
import "./QItemLabel.7e75858c.js";
import "./QMenu.3fa36ddd.js";
import "./selection.bd155836.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.6a07ec84.js";
import "./QList.c6522f05.js";
import "./QUploader.1f9cfe0b.js";
import "./QCircularProgress.09c68e80.js";
import "./ClosePopup.d58a3b2b.js";
import "./index.esm.f2e438c0.js";
import "./use-quasar.e91ed519.js";
import "./axios.efb799cd.js";
import "./NoRecords.ff822cb4.js";
import "./debug.972d445d.js";
import "./help.7f224dfe.js";
import "./DateField.1600fb67.js";
import "./QDate.32519bd7.js";
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
