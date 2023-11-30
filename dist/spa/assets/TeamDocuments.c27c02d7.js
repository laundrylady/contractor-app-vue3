import { _ as _sfc_main$1 } from "./GlobalAttachments.c08ba951.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.2ce3582b.js";
import "./QToolbarTitle.e27d5ac7.js";
import "./QSelect.3476d9a2.js";
import "./QItemSection.e4b7a0b7.js";
import "./QItemLabel.77097d46.js";
import "./QMenu.6b6d9bac.js";
import "./selection.a479002b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.391af841.js";
import "./QList.46360cd1.js";
import "./QUploader.1ceb274d.js";
import "./QCircularProgress.a546b17d.js";
import "./ClosePopup.45fa0fb0.js";
import "./index.esm.6cd22be5.js";
import "./use-quasar.a8782b2f.js";
import "./axios.cd81e1d7.js";
import "./NoRecords.a0ed2b1a.js";
import "./debug.972d445d.js";
import "./help.80d39f93.js";
import "./DateField.420ce111.js";
import "./QDate.cdd59ec3.js";
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
