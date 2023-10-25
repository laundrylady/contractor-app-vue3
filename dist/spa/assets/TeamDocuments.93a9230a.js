import { _ as _sfc_main$1 } from "./GlobalAttachments.aeeb3645.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.d24090f9.js";
import "./QToolbarTitle.4901450e.js";
import "./QSelect.f2db8adb.js";
import "./selection.65db3133.js";
import "./QItemLabel.4d6f9b5e.js";
import "./QMenu.58abcd6d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.c3c64a58.js";
import "./QList.d829e119.js";
import "./QUploader.a3699611.js";
import "./QCircularProgress.c19ff5c1.js";
import "./ClosePopup.7dcd8c4a.js";
import "./index.esm.216d25ba.js";
import "./use-quasar.e5650412.js";
import "./axios.19035272.js";
import "./NoRecords.62907bf4.js";
import "./debug.972d445d.js";
import "./help.7cc62a8f.js";
import "./DateField.88ea8cc7.js";
import "./QDate.d9e1c999.js";
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
