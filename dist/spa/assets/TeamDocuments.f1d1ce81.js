import { _ as _sfc_main$1 } from "./GlobalAttachments.27f2bba1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.56d10e03.js";
import "./QToolbarTitle.ef19fd49.js";
import "./QSelect.44b3cd04.js";
import "./selection.b9219e3c.js";
import "./QItemLabel.79ad69aa.js";
import "./QMenu.73c16fc7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.409c447d.js";
import "./QList.1c88c78c.js";
import "./QUploader.95fccb93.js";
import "./QCircularProgress.99396931.js";
import "./ClosePopup.59eacbaa.js";
import "./index.esm.fd012cfa.js";
import "./use-quasar.c63e55ec.js";
import "./axios.db77a32a.js";
import "./NoRecords.0be5a00c.js";
import "./debug.972d445d.js";
import "./help.211327e8.js";
import "./DateField.45b37368.js";
import "./QDate.3b35e49d.js";
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
