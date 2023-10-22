import { _ as _sfc_main$1 } from "./GlobalAttachments.7cb6ff32.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.92ab7041.js";
import "./QToolbarTitle.1980b9dc.js";
import "./QSelect.6963eaa7.js";
import "./selection.def004c5.js";
import "./QItemLabel.e90e0b6c.js";
import "./QMenu.067c58bc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.a669df6c.js";
import "./QList.5ae951e2.js";
import "./QUploader.f576f840.js";
import "./QCircularProgress.0bbe3994.js";
import "./ClosePopup.cbd6ac2a.js";
import "./index.esm.7bc6fbdd.js";
import "./use-quasar.479fa204.js";
import "./axios.3f5535ab.js";
import "./NoRecords.6a41c04f.js";
import "./debug.972d445d.js";
import "./help.c0f2021d.js";
import "./DateField.17aaf42e.js";
import "./QDate.6a34e361.js";
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
