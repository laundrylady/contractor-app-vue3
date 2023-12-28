import { _ as _sfc_main$1 } from "./GlobalAttachments.9d099951.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.64115597.js";
import "./QToolbarTitle.e5e4876f.js";
import "./QToolbar.f7ecfc9a.js";
import "./QSelect.f34191cd.js";
import "./QItemSection.88e76e43.js";
import "./QItemLabel.ce323bb3.js";
import "./QMenu.8a7e34c1.js";
import "./selection.3353006d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.81a4d931.js";
import "./QList.0ce3daef.js";
import "./QUploader.76002a25.js";
import "./QCircularProgress.4ca7fa41.js";
import "./ClosePopup.da75327b.js";
import "./index.esm.654c9efb.js";
import "./use-quasar.9d8155a0.js";
import "./axios.7b9c1ad1.js";
import "./NoRecords.176c76b9.js";
import "./debug.b9d7424b.js";
import "./help.384b7e66.js";
import "./DateField.bbe27041.js";
import "./QDate.76777995.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.bdf55d71.js";
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
