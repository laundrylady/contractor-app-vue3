import { _ as _sfc_main$1 } from "./GlobalAttachments.a76cbddb.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.bb716ce2.js";
import "./QToolbarTitle.2ceb8536.js";
import "./QSelect.2f64cb0f.js";
import "./QItemSection.7a6b4067.js";
import "./QItemLabel.bd0a53c1.js";
import "./QMenu.c9058de9.js";
import "./selection.66302451.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.4bdaa2ad.js";
import "./QList.f59f43fb.js";
import "./QUploader.47a6b67e.js";
import "./QCircularProgress.a4b97561.js";
import "./ClosePopup.e9d1f50c.js";
import "./index.esm.29544383.js";
import "./use-quasar.836b9a39.js";
import "./axios.89c45ee7.js";
import "./NoRecords.611370a2.js";
import "./debug.972d445d.js";
import "./help.8503c7b8.js";
import "./DateField.deea3172.js";
import "./QDate.925cadb1.js";
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
