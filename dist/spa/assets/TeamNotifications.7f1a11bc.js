import { _ as _sfc_main$1 } from "./GlobalNotifications.18224e85.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.7fc66124.js";
import "./QToolbarTitle.ccf605dc.js";
import "./QTd.a0397a2e.js";
import "./QTable.b6cd6207.js";
import "./QList.563f6fab.js";
import "./QMarkupTable.e9757e22.js";
import "./QSelect.cde7d355.js";
import "./QItemSection.79f08f79.js";
import "./QItemLabel.101b2284.js";
import "./QMenu.10dcc93b.js";
import "./selection.de0f0585.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1441f90b.js";
import "./use-fullscreen.de1e3c66.js";
import "./ClosePopup.1380d520.js";
import "./axios.a0405d7e.js";
import "./debug.972d445d.js";
import "./help.3bfda089.js";
import "./QBadge.dfdf3b70.js";
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
