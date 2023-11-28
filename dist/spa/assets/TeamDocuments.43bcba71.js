import { _ as _sfc_main$1 } from "./GlobalAttachments.a746680b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.2c4e0f9e.js";
import "./QToolbarTitle.b26fd849.js";
import "./QSelect.5ff94a5e.js";
import "./QItemSection.9511d199.js";
import "./QItemLabel.d1fe833d.js";
import "./QMenu.95505b86.js";
import "./selection.1073a799.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.b9de4af0.js";
import "./QList.8698b3dc.js";
import "./QUploader.cc7bd0cc.js";
import "./QCircularProgress.13256100.js";
import "./ClosePopup.df894245.js";
import "./index.esm.9dc3768b.js";
import "./use-quasar.768c0337.js";
import "./axios.cd986332.js";
import "./NoRecords.cf1c16e7.js";
import "./debug.972d445d.js";
import "./help.36b5fb1a.js";
import "./DateField.06f4ad2f.js";
import "./QDate.b4f54fef.js";
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
