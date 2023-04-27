import { _ as _sfc_main$1 } from "./GlobalAttachments.1a79c483.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aF as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.253fe345.js";
import "./QToolbarTitle.fd38bbbb.js";
import "./QSelect.50985c2c.js";
import "./QItemSection.04ae4ed1.js";
import "./rtl.341eb743.js";
import "./format.8649e8ee.js";
import "./QBtnGroup.4e7fb838.js";
import "./QList.17898fd8.js";
import "./QUploader.d591a366.js";
import "./QCircularProgress.36b9c740.js";
import "./ClosePopup.abe5ec32.js";
import "./index.esm.96cc0511.js";
import "./use-quasar.5b513a2e.js";
import "./axios.2d898732.js";
import "./NoRecords.a2b92225.js";
import "./debug.805a8aef.js";
import "./help.b5179f9e.js";
import "./DateField.aa09c109.js";
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
