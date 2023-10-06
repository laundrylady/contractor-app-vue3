import { _ as _sfc_main$1 } from "./GlobalAttachments.a4f7f04e.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.edb37202.js";
import "./QToolbarTitle.64793cfa.js";
import "./QSelect.dc4c6087.js";
import "./selection.15d4f9f5.js";
import "./QItemLabel.6ff64dda.js";
import "./QMenu.ec00369a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.81436485.js";
import "./QList.3d2d3456.js";
import "./QUploader.01ed3a20.js";
import "./QCircularProgress.2088368d.js";
import "./ClosePopup.ff801671.js";
import "./index.esm.1bdbe8cd.js";
import "./use-quasar.071e30c9.js";
import "./axios.aa906023.js";
import "./NoRecords.ee6d2a20.js";
import "./debug.ffa51329.js";
import "./help.d3db5806.js";
import "./DateField.1a8c6f94.js";
import "./QDate.e87c84f7.js";
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
