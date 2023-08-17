import { _ as _sfc_main$1 } from "./GlobalAttachments.bff10d9e.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.b831cb22.js";
import "./QToolbarTitle.6d0cd576.js";
import "./QSelect.9dc7a6c7.js";
import "./QItemSection.4ac56135.js";
import "./selection.4cb35218.js";
import "./QMenu.af8e1e92.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.147f6604.js";
import "./QList.6332f811.js";
import "./QUploader.d52429dd.js";
import "./QCircularProgress.b8ab1cf3.js";
import "./ClosePopup.46405e5b.js";
import "./index.esm.0b01738e.js";
import "./use-quasar.ce827dac.js";
import "./axios.68b9268b.js";
import "./NoRecords.caa50272.js";
import "./debug.ffa51329.js";
import "./help.e6021a60.js";
import "./DateField.347f0da2.js";
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
