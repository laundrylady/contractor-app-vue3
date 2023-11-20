import { _ as _sfc_main$1 } from "./GlobalNotifications.74a16a37.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.d121ec5d.js";
import "./QToolbarTitle.1b4f081a.js";
import "./QTd.f8d840dc.js";
import "./QTable.5f1869b9.js";
import "./QList.bf1f960c.js";
import "./QMarkupTable.a06f2dce.js";
import "./QSelect.948a0151.js";
import "./QItemSection.0262b439.js";
import "./QItemLabel.38ead7bb.js";
import "./QMenu.e4b54bdf.js";
import "./selection.111dbff5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.83df8c72.js";
import "./use-fullscreen.c3a4b878.js";
import "./ClosePopup.fb2f9dc0.js";
import "./axios.25c40239.js";
import "./debug.972d445d.js";
import "./help.a8cc6f8b.js";
import "./QBadge.2ea68c47.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Email Activities", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamNotifications",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("p", null, "Send an Email or view the history for this " + toDisplayString(_ctx.$t("team.name")) + ".", 1),
        createVNode(_sfc_main$1, {
          notifiable_id: __props.model.id,
          notifiable_type: "Team"
        }, null, 8, ["notifiable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
