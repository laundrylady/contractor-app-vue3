import { _ as _sfc_main$1 } from "./GlobalAttachments.32a0c614.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.99efffbb.js";
import "./QToolbarTitle.612ec038.js";
import "./QSelect.20dace88.js";
import "./selection.6389d1ab.js";
import "./QItemLabel.ca507f7a.js";
import "./QMenu.e68e7f6e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.07297c30.js";
import "./QList.d6f07fea.js";
import "./QUploader.d52c57ff.js";
import "./QCircularProgress.95fcdea2.js";
import "./ClosePopup.b51b9765.js";
import "./index.esm.f8ec19a1.js";
import "./use-quasar.511dc553.js";
import "./axios.c7749e6f.js";
import "./NoRecords.d5543c2f.js";
import "./debug.972d445d.js";
import "./help.7ec22b05.js";
import "./DateField.f75d1fde.js";
import "./QDate.6e6f6121.js";
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
