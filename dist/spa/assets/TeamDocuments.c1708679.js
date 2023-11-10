import { _ as _sfc_main$1 } from "./GlobalAttachments.a969e857.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f7c5cca4.js";
import "./QToolbarTitle.c9bee88d.js";
import "./QSelect.be0332f1.js";
import "./selection.b82fadea.js";
import "./QItemLabel.2d661f01.js";
import "./QMenu.4f7772b4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.242d2d5b.js";
import "./QList.e7b5801a.js";
import "./QUploader.807319c9.js";
import "./QCircularProgress.95a83b44.js";
import "./ClosePopup.3c7c27a2.js";
import "./index.esm.920c1903.js";
import "./use-quasar.09f32e1d.js";
import "./axios.6acdee78.js";
import "./NoRecords.fc7fecb4.js";
import "./debug.972d445d.js";
import "./help.4b1c8261.js";
import "./DateField.d5d2571e.js";
import "./QDate.e0f97b93.js";
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
