import { _ as _sfc_main$1 } from "./GlobalAttachments.c8b90a93.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.bcc73ba7.js";
import "./QToolbarTitle.32dd0624.js";
import "./QSelect.18f2c4a2.js";
import "./selection.9080dacd.js";
import "./QItemLabel.1284f5e7.js";
import "./QMenu.e574c94f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.8f402a50.js";
import "./QList.6ac42d03.js";
import "./QUploader.0b0f8506.js";
import "./QCircularProgress.aaa27f41.js";
import "./ClosePopup.ae0feb94.js";
import "./index.esm.d5cc0789.js";
import "./use-quasar.b89bb198.js";
import "./axios.caba40e4.js";
import "./NoRecords.8eeacfd5.js";
import "./debug.ffa51329.js";
import "./help.f988fe57.js";
import "./DateField.53383042.js";
import "./QDate.0975ea61.js";
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
