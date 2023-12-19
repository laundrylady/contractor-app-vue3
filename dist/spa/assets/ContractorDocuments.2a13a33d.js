import { _ as _sfc_main$1 } from "./GlobalAttachments.1c64d5ff.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.9d209411.js";
import "./QToolbarTitle.a135ed65.js";
import "./QSelect.35b85a20.js";
import "./QItemSection.9dfc9174.js";
import "./QItemLabel.9fccdf4f.js";
import "./QMenu.12e99d26.js";
import "./selection.2937e51d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.d711c040.js";
import "./QList.d72596b3.js";
import "./QUploader.2d672d34.js";
import "./QCircularProgress.cc63f85c.js";
import "./ClosePopup.0a4dde7b.js";
import "./index.esm.44a0588c.js";
import "./use-quasar.d2b4cfed.js";
import "./axios.3379d02c.js";
import "./NoRecords.763fd0b8.js";
import "./debug.972d445d.js";
import "./help.f0fd5515.js";
import "./DateField.f9a5f0e4.js";
import "./QDate.a61563bf.js";
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
