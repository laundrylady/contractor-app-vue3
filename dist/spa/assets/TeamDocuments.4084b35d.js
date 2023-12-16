import { _ as _sfc_main$1 } from "./GlobalAttachments.97f86047.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.7f74603c.js";
import "./QToolbarTitle.4e11c0ae.js";
import "./QSelect.f0b82b2c.js";
import "./QItemSection.4404f9eb.js";
import "./QItemLabel.1bb03b44.js";
import "./QMenu.1913c653.js";
import "./selection.65320923.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.dcdc4d66.js";
import "./QList.f8018254.js";
import "./QUploader.8bdd6fd2.js";
import "./QCircularProgress.c13c9ba7.js";
import "./ClosePopup.d510c5b5.js";
import "./index.esm.933aebc4.js";
import "./use-quasar.d7b757ee.js";
import "./axios.974431db.js";
import "./NoRecords.98d75de6.js";
import "./debug.972d445d.js";
import "./help.3b8bb69e.js";
import "./DateField.7d556007.js";
import "./QDate.dafb51d4.js";
import "./use-cache.b0833c75.js";
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
