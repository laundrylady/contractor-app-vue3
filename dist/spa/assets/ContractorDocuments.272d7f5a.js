import { _ as _sfc_main$1 } from "./GlobalAttachments.d907b98e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.1c3f43c8.js";
import "./QToolbarTitle.f130f080.js";
import "./QSelect.9179fadf.js";
import "./selection.86d747e5.js";
import "./QItemLabel.832f641e.js";
import "./QMenu.9c9cfd8c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.1bbcafcd.js";
import "./QList.b8b2bfb8.js";
import "./QUploader.85f4cf70.js";
import "./QCircularProgress.b4451997.js";
import "./ClosePopup.071b0067.js";
import "./index.esm.e3512247.js";
import "./use-quasar.7062e9a3.js";
import "./axios.bd02ada1.js";
import "./NoRecords.4fc65e13.js";
import "./debug.972d445d.js";
import "./help.842e93c9.js";
import "./DateField.b860e77a.js";
import "./QDate.ee619556.js";
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
