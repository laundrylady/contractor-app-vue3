import { _ as _sfc_main$1 } from "./GlobalAttachments.6451cc70.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.215b345e.js";
import "./QToolbarTitle.b3e9b70e.js";
import "./QSelect.c2766a19.js";
import "./selection.e4641002.js";
import "./QItemLabel.3b457a01.js";
import "./QMenu.2976f8ae.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.24672925.js";
import "./QList.b72ce648.js";
import "./QUploader.fda295e1.js";
import "./QCircularProgress.049b5d47.js";
import "./ClosePopup.f63a0e18.js";
import "./index.esm.ed75a191.js";
import "./use-quasar.4295d68e.js";
import "./axios.97d585b0.js";
import "./NoRecords.1d2b6c7e.js";
import "./debug.ffa51329.js";
import "./help.e965e5b7.js";
import "./DateField.f5de2ef5.js";
import "./QDate.6d45b45f.js";
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
