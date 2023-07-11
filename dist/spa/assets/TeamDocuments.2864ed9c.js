import { _ as _sfc_main$1 } from "./GlobalAttachments.cf7ba9c2.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.f6249b41.js";
import "./QToolbarTitle.909f6d42.js";
import "./QSelect.fa7be61a.js";
import "./QItemSection.176f25cc.js";
import "./format.95a2af90.js";
import "./QBtnGroup.d40e689a.js";
import "./QList.2b57c8a0.js";
import "./QUploader.68e4ecd6.js";
import "./QCircularProgress.4e2693ea.js";
import "./ClosePopup.56839016.js";
import "./index.esm.2cc95c45.js";
import "./use-quasar.45117e51.js";
import "./axios.ac6cd416.js";
import "./NoRecords.2c9c7ecd.js";
import "./debug.805a8aef.js";
import "./help.a715fe42.js";
import "./DateField.721f9522.js";
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
