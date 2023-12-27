import { _ as _sfc_main$1 } from "./GlobalAttachments.df35df99.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e10d985a.js";
import "./QToolbarTitle.84b6c21d.js";
import "./QToolbar.24641da0.js";
import "./QSelect.42b6d6ed.js";
import "./QItemSection.79ac2f17.js";
import "./QItemLabel.6b47c22a.js";
import "./QMenu.42feefcc.js";
import "./selection.8ef2ad40.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.5712656b.js";
import "./QList.451f9f00.js";
import "./QUploader.15ce2eff.js";
import "./QCircularProgress.afa41d2b.js";
import "./ClosePopup.b4388342.js";
import "./index.esm.a55ee820.js";
import "./use-quasar.5baefdf5.js";
import "./axios.d600ee85.js";
import "./NoRecords.c375c5d3.js";
import "./debug.b9d7424b.js";
import "./help.d45fbea6.js";
import "./DateField.3a6d3fe2.js";
import "./QDate.e07be787.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.61c1edb6.js";
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
