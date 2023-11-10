import { _ as _sfc_main$1 } from "./GlobalAttachments.b84b1a96.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.463e86f0.js";
import "./QToolbarTitle.c05bfb18.js";
import "./QSelect.bb0d9cdf.js";
import "./selection.3e27cc6f.js";
import "./QItemLabel.010aa2a3.js";
import "./QMenu.f6853d7e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.0be5295c.js";
import "./QList.dc76fc06.js";
import "./QUploader.52818e39.js";
import "./QCircularProgress.b7dd7ac4.js";
import "./ClosePopup.e2ee84f0.js";
import "./index.esm.9df10f7c.js";
import "./use-quasar.24a13c2d.js";
import "./axios.a2a34ccc.js";
import "./NoRecords.ac01523d.js";
import "./debug.972d445d.js";
import "./help.1a6aa2eb.js";
import "./DateField.41917667.js";
import "./QDate.df850243.js";
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
