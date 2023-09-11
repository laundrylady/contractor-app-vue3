import { _ as _sfc_main$1 } from "./GlobalAttachments.9ab8864e.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.9049e2bf.js";
import "./QToolbarTitle.af608e6f.js";
import "./QSelect.b1afe4a4.js";
import "./selection.2c513c02.js";
import "./QItemLabel.bdaf797d.js";
import "./QMenu.670043f4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.cb549e36.js";
import "./QList.f208e8e5.js";
import "./QUploader.707cd98c.js";
import "./QCircularProgress.7b4a2f01.js";
import "./ClosePopup.9f3be768.js";
import "./index.esm.952cc7db.js";
import "./use-quasar.b7e0c4c8.js";
import "./axios.8996a507.js";
import "./NoRecords.87b14788.js";
import "./debug.ffa51329.js";
import "./help.344bce22.js";
import "./DateField.9ef0b8c6.js";
import "./QDate.2ccb8974.js";
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
