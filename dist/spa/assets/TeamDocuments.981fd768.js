import { _ as _sfc_main$1 } from "./GlobalAttachments.54d2deee.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.0095e572.js";
import "./QToolbarTitle.887cb456.js";
import "./QSelect.56e6ee3f.js";
import "./selection.c2acc0d2.js";
import "./QItemLabel.fd9abae6.js";
import "./QMenu.11ae87e4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.2554681d.js";
import "./QList.74ad8538.js";
import "./QUploader.bbb37bbd.js";
import "./QCircularProgress.22a280a5.js";
import "./ClosePopup.f66bea2c.js";
import "./index.esm.3980f54f.js";
import "./use-quasar.bd283f81.js";
import "./axios.fc6bc4c0.js";
import "./NoRecords.20b67561.js";
import "./debug.972d445d.js";
import "./help.667e8e69.js";
import "./DateField.41e33a04.js";
import "./QDate.f1ad4cfd.js";
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
