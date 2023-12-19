import { _ as _sfc_main$1 } from "./GlobalAttachments.eb46246d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.36ffcf9b.js";
import "./QToolbarTitle.3432061f.js";
import "./QSelect.c615a3ab.js";
import "./QItemSection.30f99eb3.js";
import "./QItemLabel.06d297de.js";
import "./QMenu.e0177a67.js";
import "./selection.0c7ccc1b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.126f4fa1.js";
import "./QList.2a640182.js";
import "./QUploader.97137857.js";
import "./QCircularProgress.de2c132f.js";
import "./ClosePopup.e6da29e8.js";
import "./index.esm.34154739.js";
import "./use-quasar.06308bba.js";
import "./axios.ae54ae36.js";
import "./NoRecords.4a724e2a.js";
import "./debug.972d445d.js";
import "./help.bf487f3c.js";
import "./DateField.adc0fcbb.js";
import "./QDate.0187ef23.js";
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
