import { _ as _sfc_main$1 } from "./GlobalAttachments.47831184.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.da11e37d.js";
import "./QToolbarTitle.d44ff3de.js";
import "./QSelect.c39b1e78.js";
import "./QItemSection.4c7ec0bf.js";
import "./QItemLabel.453652dd.js";
import "./QMenu.3bf9381f.js";
import "./selection.b27183ff.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.1429c9de.js";
import "./QList.bba9cbb5.js";
import "./QUploader.33abf5b7.js";
import "./QCircularProgress.fd5e3561.js";
import "./ClosePopup.a11cc418.js";
import "./index.esm.266b44ef.js";
import "./use-quasar.71492bce.js";
import "./axios.cc162f2e.js";
import "./NoRecords.5eddab16.js";
import "./debug.972d445d.js";
import "./help.dda3e3ab.js";
import "./DateField.c892207e.js";
import "./QDate.3ac273f6.js";
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
