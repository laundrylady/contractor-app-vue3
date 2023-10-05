import { _ as _sfc_main$1 } from "./GlobalAttachments.3efb1f49.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.c2e1ea50.js";
import "./QToolbarTitle.58adf5cb.js";
import "./QSelect.a72f5098.js";
import "./selection.32cb74d5.js";
import "./QItemLabel.45251e79.js";
import "./QMenu.724d425e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.28677dfe.js";
import "./QList.515c802e.js";
import "./QUploader.ad0b49a9.js";
import "./QCircularProgress.aa461894.js";
import "./ClosePopup.ee423a13.js";
import "./index.esm.e5909917.js";
import "./use-quasar.fa5c2271.js";
import "./axios.a819d008.js";
import "./NoRecords.f3fb5973.js";
import "./debug.ffa51329.js";
import "./help.8a1391c5.js";
import "./DateField.807e8070.js";
import "./QDate.f04806f3.js";
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
