import { _ as _sfc_main$1 } from "./GlobalAttachments.7e843db1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.63b592af.js";
import "./QToolbarTitle.5fb93d6f.js";
import "./QSelect.970ac209.js";
import "./QItemSection.03eb98a3.js";
import "./QItemLabel.44ca075e.js";
import "./QMenu.031fddcf.js";
import "./selection.a36acfd9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.5d216a19.js";
import "./QList.a924fe89.js";
import "./QUploader.4caaa12b.js";
import "./QCircularProgress.3f8b5af3.js";
import "./ClosePopup.e3091d70.js";
import "./index.esm.c7f8e4e5.js";
import "./use-quasar.a0481a4c.js";
import "./axios.b31c451b.js";
import "./NoRecords.24d3b4ef.js";
import "./debug.972d445d.js";
import "./help.f213e400.js";
import "./DateField.10be65d3.js";
import "./QDate.ee343d53.js";
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
