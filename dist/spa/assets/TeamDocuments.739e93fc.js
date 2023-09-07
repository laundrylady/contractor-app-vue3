import { _ as _sfc_main$1 } from "./GlobalAttachments.9e8f203b.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.0a73f961.js";
import "./QToolbarTitle.511823f7.js";
import "./QSelect.7216960a.js";
import "./selection.0f6039c3.js";
import "./QItemLabel.12f914f9.js";
import "./QMenu.44421817.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.f9493a9b.js";
import "./QList.79d8c960.js";
import "./QUploader.e03d41a3.js";
import "./QCircularProgress.2968a1b2.js";
import "./ClosePopup.229e15b7.js";
import "./index.esm.9f21d7f0.js";
import "./use-quasar.05ea3f12.js";
import "./axios.753e2493.js";
import "./NoRecords.a2f178af.js";
import "./debug.ffa51329.js";
import "./help.4d339a4c.js";
import "./DateField.b8478ca3.js";
import "./QDate.a738a7de.js";
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
