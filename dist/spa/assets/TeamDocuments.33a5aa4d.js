import { _ as _sfc_main$1 } from "./GlobalAttachments.eb1985e8.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.335ad1da.js";
import "./QToolbarTitle.95a2d261.js";
import "./QSelect.4287be58.js";
import "./selection.da9326cf.js";
import "./QItemLabel.970ab1b9.js";
import "./QMenu.0b86dd3d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.9f32638f.js";
import "./QList.e466b6b1.js";
import "./QUploader.a670f61f.js";
import "./QCircularProgress.0ea376ff.js";
import "./ClosePopup.0ffdfffa.js";
import "./index.esm.5851bcfe.js";
import "./use-quasar.b19a4ae7.js";
import "./axios.3bfc6a6f.js";
import "./NoRecords.e6d8e065.js";
import "./debug.ffa51329.js";
import "./help.c8506d61.js";
import "./DateField.81a05ac6.js";
import "./QDate.9d3b5585.js";
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
