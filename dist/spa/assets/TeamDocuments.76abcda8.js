import { _ as _sfc_main$1 } from "./GlobalAttachments.7c2e9d91.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.208ac1b0.js";
import "./QToolbarTitle.5b003f6a.js";
import "./QSelect.bc6f41c6.js";
import "./QItemSection.cb2021ac.js";
import "./QItemLabel.68baf2c5.js";
import "./QMenu.301576a0.js";
import "./selection.e6b30987.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.1bec37ed.js";
import "./QList.6ca84d7d.js";
import "./QUploader.e82c1baf.js";
import "./QCircularProgress.41720107.js";
import "./ClosePopup.731518de.js";
import "./index.esm.5ecef02b.js";
import "./use-quasar.9c5bd5eb.js";
import "./axios.affd6c01.js";
import "./NoRecords.5c8ee698.js";
import "./debug.972d445d.js";
import "./help.6314cd47.js";
import "./DateField.baf17312.js";
import "./QDate.7377d402.js";
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
