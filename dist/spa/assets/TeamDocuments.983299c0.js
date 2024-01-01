import { _ as _sfc_main$1 } from "./GlobalAttachments.244c2faa.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.7dc3575e.js";
import "./QToolbarTitle.6c330886.js";
import "./QToolbar.bc73d183.js";
import "./QSelect.1ac73f3f.js";
import "./QItemSection.9fd3d4de.js";
import "./QItemLabel.62281547.js";
import "./QMenu.8461399f.js";
import "./selection.efa8343e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.7f7bd9d9.js";
import "./QList.1b05cca7.js";
import "./QUploader.24d258ee.js";
import "./QCircularProgress.c5a1ce46.js";
import "./ClosePopup.bd216dea.js";
import "./index.esm.6d8a369d.js";
import "./use-quasar.562b7961.js";
import "./axios.f968c8b5.js";
import "./NoRecords.01024eda.js";
import "./debug.b9d7424b.js";
import "./help.bc4499e5.js";
import "./DateField.7ab88340.js";
import "./QDate.d73be1cb.js";
import "./use-cache.b0833c75.js";
import "./QPopupProxy.54bf5945.js";
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
