import { _ as _sfc_main$1 } from "./GlobalAttachments.492370a2.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.859cb660.js";
import "./QToolbarTitle.9c9c22c3.js";
import "./QSelect.004b04e5.js";
import "./QItemSection.b7e689a7.js";
import "./format.40c4273f.js";
import "./QBtnGroup.d235e979.js";
import "./QList.6ec0db61.js";
import "./QUploader.1770866f.js";
import "./QCircularProgress.42d03727.js";
import "./ClosePopup.4ce26240.js";
import "./index.esm.e632539e.js";
import "./use-quasar.72d4e553.js";
import "./axios.c622a4bf.js";
import "./NoRecords.10a52fe1.js";
import "./debug.805a8aef.js";
import "./help.d852d987.js";
import "./DateField.1375e58c.js";
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
