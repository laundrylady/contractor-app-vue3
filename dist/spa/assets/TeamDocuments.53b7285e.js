import { _ as _sfc_main$1 } from "./GlobalAttachments.74ab6d43.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aF as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.3eea7960.js";
import "./QToolbarTitle.c5728a0a.js";
import "./QSelect.1c9fa3ed.js";
import "./QItemSection.621084f7.js";
import "./rtl.583477fb.js";
import "./format.aadc6b26.js";
import "./QBtnGroup.cef273d2.js";
import "./QList.acfa1549.js";
import "./QUploader.1c1a21c9.js";
import "./QCircularProgress.09563eb5.js";
import "./ClosePopup.da21502b.js";
import "./index.esm.3393c8fb.js";
import "./use-quasar.4fc54c30.js";
import "./axios.a37557cf.js";
import "./NoRecords.37fc84a4.js";
import "./debug.805a8aef.js";
import "./help.79cd30dc.js";
import "./DateField.52929768.js";
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
