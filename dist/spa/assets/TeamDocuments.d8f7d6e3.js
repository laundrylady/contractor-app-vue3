import { _ as _sfc_main$1 } from "./GlobalAttachments.44b4bb2b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.234361c9.js";
import "./QToolbarTitle.98eb4db1.js";
import "./QSelect.0a839528.js";
import "./QItemSection.3151eb30.js";
import "./QItemLabel.c2241adb.js";
import "./QMenu.19ce0ec2.js";
import "./selection.a7fe04f0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.9ceb4d4d.js";
import "./QList.7f4ec242.js";
import "./QUploader.64de94cb.js";
import "./QCircularProgress.0f0d54cf.js";
import "./ClosePopup.c5d6f226.js";
import "./index.esm.3e1e05c3.js";
import "./use-quasar.dbd08698.js";
import "./axios.3deb6b50.js";
import "./NoRecords.f21733e8.js";
import "./debug.972d445d.js";
import "./help.2eba08cb.js";
import "./DateField.98c2c943.js";
import "./QDate.15bec50e.js";
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
