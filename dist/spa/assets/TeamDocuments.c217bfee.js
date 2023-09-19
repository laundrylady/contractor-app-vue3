import { _ as _sfc_main$1 } from "./GlobalAttachments.c41a01df.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.80e136e1.js";
import "./QToolbarTitle.c1ffa668.js";
import "./QSelect.2c999da5.js";
import "./selection.9ea5ec5d.js";
import "./QItemLabel.1c53f4dc.js";
import "./QMenu.30761d00.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.ccc0dfd4.js";
import "./QList.4042e6d6.js";
import "./QUploader.cdd15b7a.js";
import "./QCircularProgress.b63db192.js";
import "./ClosePopup.35404fc0.js";
import "./index.esm.5b0f043f.js";
import "./use-quasar.c3135e81.js";
import "./axios.b8650811.js";
import "./NoRecords.2611cb3b.js";
import "./debug.ffa51329.js";
import "./help.9e238adb.js";
import "./DateField.30c2675e.js";
import "./QDate.f43536d5.js";
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
