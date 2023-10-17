import { _ as _sfc_main$1 } from "./GlobalAttachments.2abd4aae.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.f13a0a63.js";
import "./QToolbarTitle.4409effd.js";
import "./QSelect.af8d3bce.js";
import "./selection.61767fca.js";
import "./QItemLabel.694406e9.js";
import "./QMenu.c2446229.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.1423507c.js";
import "./QList.72ea9ff3.js";
import "./QUploader.29e25444.js";
import "./QCircularProgress.44622672.js";
import "./ClosePopup.89a732ba.js";
import "./index.esm.4cc3abb7.js";
import "./use-quasar.d8feb211.js";
import "./axios.094dfea6.js";
import "./NoRecords.af7e111d.js";
import "./debug.972d445d.js";
import "./help.70c21ff9.js";
import "./DateField.644df636.js";
import "./QDate.7f12e79f.js";
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
