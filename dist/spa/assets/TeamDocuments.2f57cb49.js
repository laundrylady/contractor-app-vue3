import { _ as _sfc_main$1 } from "./GlobalAttachments.0b11251a.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.f00b5063.js";
import "./QToolbarTitle.d70355f5.js";
import "./QSelect.728b69b4.js";
import "./selection.4a285e86.js";
import "./QItemLabel.187da5b1.js";
import "./QMenu.92239622.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.fc2b03b1.js";
import "./QList.51c80329.js";
import "./QUploader.a44eb31e.js";
import "./QCircularProgress.2b359bd6.js";
import "./ClosePopup.e337ba20.js";
import "./index.esm.ab731a75.js";
import "./use-quasar.404fc6cd.js";
import "./axios.8666242f.js";
import "./NoRecords.724f2b5d.js";
import "./debug.ffa51329.js";
import "./help.c302d4f4.js";
import "./DateField.6dc93dc8.js";
import "./QDate.f8617977.js";
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
