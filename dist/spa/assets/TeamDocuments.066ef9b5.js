import { _ as _sfc_main$1 } from "./GlobalAttachments.af042d22.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.b2f4aca3.js";
import "./QToolbarTitle.318ed155.js";
import "./QSelect.522178b7.js";
import "./QItemSection.a93e6b70.js";
import "./QItemLabel.0fb67170.js";
import "./QMenu.f441d7a0.js";
import "./selection.54a583a0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.e3058bfe.js";
import "./QList.31c4473f.js";
import "./QUploader.258799b3.js";
import "./QCircularProgress.3e00447d.js";
import "./ClosePopup.af94a7f8.js";
import "./index.esm.91607c8d.js";
import "./use-quasar.e394e568.js";
import "./axios.32e1d547.js";
import "./NoRecords.58534232.js";
import "./debug.972d445d.js";
import "./help.0d31cbdd.js";
import "./DateField.56122528.js";
import "./QDate.a5d6541e.js";
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
