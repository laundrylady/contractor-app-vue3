import { _ as _sfc_main$1 } from "./GlobalAttachments.4d60b80e.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.1b2f6b7e.js";
import "./QToolbarTitle.42d1dca5.js";
import "./QSelect.c293cd08.js";
import "./QItemSection.bdf28f31.js";
import "./rtl.fb394738.js";
import "./format.4a5cbd2a.js";
import "./QBtnGroup.68172a22.js";
import "./QList.aae636d3.js";
import "./QUploader.fe4bab91.js";
import "./QCircularProgress.2cee26d6.js";
import "./ClosePopup.66fb29ca.js";
import "./index.esm.54bf8258.js";
import "./use-quasar.18695e7a.js";
import "./axios.628dc831.js";
import "./NoRecords.2d434079.js";
import "./debug.805a8aef.js";
import "./help.14444ed6.js";
import "./DateField.4eaa563a.js";
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
