import { _ as _sfc_main$1 } from "./GlobalAttachments.77cb9d5a.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.f596c8b4.js";
import "./QToolbarTitle.95dc101e.js";
import "./QSelect.062469f2.js";
import "./QItemSection.428ce3b8.js";
import "./rtl.a33aca76.js";
import "./format.ce8c2b83.js";
import "./QBtnGroup.7bd358ca.js";
import "./QList.0be7fff6.js";
import "./QUploader.da1a7cc3.js";
import "./QCircularProgress.a6377a10.js";
import "./ClosePopup.0f34e25b.js";
import "./index.esm.62e65c44.js";
import "./use-quasar.0a70395b.js";
import "./axios.165a10e8.js";
import "./NoRecords.3f29d14e.js";
import "./debug.805a8aef.js";
import "./help.f405f514.js";
import "./DateField.f6da400c.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "These documents are only visible to staff.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorDocuments",
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
          attachable_type: "User",
          class: "q-mb-lg"
        }, null, 8, ["attachable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
