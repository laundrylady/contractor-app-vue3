import { _ as _sfc_main$1 } from "./GlobalAttachments.69c80753.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ae929d54.js";
import "./QToolbarTitle.e5a8aa93.js";
import "./QSelect.05b73f42.js";
import "./selection.44495633.js";
import "./QItemLabel.224041da.js";
import "./QMenu.7ce52867.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.27e4b18a.js";
import "./QList.a05b399d.js";
import "./QUploader.05e39d3c.js";
import "./QCircularProgress.6237877d.js";
import "./ClosePopup.50c4dcf7.js";
import "./index.esm.cf233ced.js";
import "./use-quasar.c230fff0.js";
import "./axios.e451d1c8.js";
import "./NoRecords.1e5f907a.js";
import "./debug.972d445d.js";
import "./help.bd5e4abe.js";
import "./DateField.3aac9990.js";
import "./QDate.5bd2f554.js";
import "./use-cache.b0833c75.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "These documents are only visible to staff.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorDocuments",
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
          attachable_type: "User",
          class: "q-mb-lg"
        }, null, 8, ["attachable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
