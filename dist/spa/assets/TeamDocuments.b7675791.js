import { _ as _sfc_main$1 } from "./GlobalAttachments.ae16a271.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.b933ddc7.js";
import "./QToolbarTitle.536b138d.js";
import "./QSelect.2e393bff.js";
import "./QItemSection.541395cc.js";
import "./QItemLabel.1e5d20ef.js";
import "./QMenu.80fdd35e.js";
import "./selection.a38a2ac7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.0a72fbff.js";
import "./QList.0e92e88d.js";
import "./QUploader.e11d561a.js";
import "./QCircularProgress.13f03eb2.js";
import "./ClosePopup.3d66101d.js";
import "./index.esm.1c6f1032.js";
import "./use-quasar.8469c85c.js";
import "./axios.cc67cde9.js";
import "./NoRecords.866285a9.js";
import "./debug.972d445d.js";
import "./help.cac0f575.js";
import "./DateField.cb4ca210.js";
import "./QDate.d3db3769.js";
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
