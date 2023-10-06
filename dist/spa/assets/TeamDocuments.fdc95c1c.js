import { _ as _sfc_main$1 } from "./GlobalAttachments.dd629fa2.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.13e68509.js";
import "./QToolbarTitle.266d6303.js";
import "./QSelect.916bda6c.js";
import "./selection.eb5b790c.js";
import "./QItemLabel.f6bdc4d3.js";
import "./QMenu.d1a86981.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.79b995d5.js";
import "./QList.87986894.js";
import "./QUploader.b7fa822c.js";
import "./QCircularProgress.4d89c2ef.js";
import "./ClosePopup.faa0347f.js";
import "./index.esm.107eacb4.js";
import "./use-quasar.c3f06103.js";
import "./axios.a727fc80.js";
import "./NoRecords.05f6f998.js";
import "./debug.ffa51329.js";
import "./help.cca23e83.js";
import "./DateField.15987e37.js";
import "./QDate.89710819.js";
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
