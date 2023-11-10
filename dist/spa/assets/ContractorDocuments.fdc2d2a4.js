import { _ as _sfc_main$1 } from "./GlobalAttachments.98b9e811.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.22b0b9b4.js";
import "./QToolbarTitle.3bc9c696.js";
import "./QSelect.4b7790ca.js";
import "./selection.b500b957.js";
import "./QItemLabel.0d544038.js";
import "./QMenu.089cf192.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.f79cdebc.js";
import "./QList.6feda3eb.js";
import "./QUploader.cf7afff9.js";
import "./QCircularProgress.1e6d101a.js";
import "./ClosePopup.1035ec7b.js";
import "./index.esm.4b670446.js";
import "./use-quasar.e4659211.js";
import "./axios.00c19c70.js";
import "./NoRecords.d340d1a8.js";
import "./debug.972d445d.js";
import "./help.cd0beb10.js";
import "./DateField.5b80cd3b.js";
import "./QDate.77f48847.js";
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
