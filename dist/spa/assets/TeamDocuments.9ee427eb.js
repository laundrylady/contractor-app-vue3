import { _ as _sfc_main$1 } from "./GlobalAttachments.99e180e9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.97c2c6d1.js";
import "./QToolbarTitle.ddefd8a2.js";
import "./QSelect.5af92377.js";
import "./QItemSection.f2e348a7.js";
import "./QItemLabel.79ba59e5.js";
import "./QMenu.ea67b5ad.js";
import "./selection.4b973c29.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.cb0c57f1.js";
import "./QList.a38dce86.js";
import "./QUploader.3b30a564.js";
import "./QCircularProgress.dbb088f8.js";
import "./ClosePopup.a2712158.js";
import "./index.esm.2cca3001.js";
import "./use-quasar.ae96cc20.js";
import "./axios.8cf8e3fb.js";
import "./NoRecords.4f14531c.js";
import "./debug.972d445d.js";
import "./help.c787d25e.js";
import "./DateField.0beef5ff.js";
import "./QDate.fbeb3f77.js";
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
