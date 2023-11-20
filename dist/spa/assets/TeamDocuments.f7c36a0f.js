import { _ as _sfc_main$1 } from "./GlobalAttachments.af67175f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e689b3a4.js";
import "./QToolbarTitle.424bf52e.js";
import "./QSelect.feaeb567.js";
import "./QItemSection.66a439b4.js";
import "./QItemLabel.bab8af8b.js";
import "./QMenu.f2d7af9d.js";
import "./selection.8bb6db55.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.1067a3a5.js";
import "./QList.67f13691.js";
import "./QUploader.450fdd43.js";
import "./QCircularProgress.d86b5ad2.js";
import "./ClosePopup.68362c44.js";
import "./index.esm.75372a0b.js";
import "./use-quasar.b758c872.js";
import "./axios.0186e3dc.js";
import "./NoRecords.07e48d54.js";
import "./debug.972d445d.js";
import "./help.3662df67.js";
import "./DateField.b545bf4e.js";
import "./QDate.76dcb2d4.js";
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
