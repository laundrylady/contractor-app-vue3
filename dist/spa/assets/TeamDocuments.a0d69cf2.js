import { _ as _sfc_main$1 } from "./GlobalAttachments.7b003617.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.a8c2088f.js";
import "./QToolbarTitle.18413c1f.js";
import "./QSelect.a486286b.js";
import "./QItemSection.e7fc41e3.js";
import "./QItemLabel.71296e9c.js";
import "./QMenu.d17a803f.js";
import "./selection.2269a595.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.d221779a.js";
import "./QList.6dac2cc1.js";
import "./QUploader.f4346bfe.js";
import "./QCircularProgress.75b27983.js";
import "./ClosePopup.2b5e4b81.js";
import "./index.esm.5c9ce508.js";
import "./use-quasar.263f5bc3.js";
import "./axios.6170ef9f.js";
import "./NoRecords.42bff8d6.js";
import "./debug.972d445d.js";
import "./help.565e8b52.js";
import "./DateField.c09861f5.js";
import "./QDate.a1a6119b.js";
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
