import { _ as _sfc_main$1 } from "./GlobalNotifications.8cfd00f2.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.03f0e330.js";
import "./QToolbarTitle.6a74db16.js";
import "./QTd.76ff3275.js";
import "./QTable.046eca40.js";
import "./QList.b9690ece.js";
import "./QMarkupTable.c74b1562.js";
import "./QSelect.beb3a9d4.js";
import "./selection.10f7d824.js";
import "./QItemLabel.164d1a1f.js";
import "./QMenu.cccfb668.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.9cd2470d.js";
import "./use-fullscreen.1fba7cce.js";
import "./ClosePopup.82f7a205.js";
import "./axios.6ba618d7.js";
import "./debug.972d445d.js";
import "./help.7fabc921.js";
import "./QBadge.15e54c79.js";
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
