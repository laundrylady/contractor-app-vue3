import { _ as _sfc_main$1 } from "./GlobalNotifications.6476646b.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.0a9ea33a.js";
import "./QToolbarTitle.bad7d3b8.js";
import "./QTable.20c2119e.js";
import "./QList.125653f0.js";
import "./QMarkupTable.12906996.js";
import "./QSelect.60ccb65b.js";
import "./QItemSection.1b23b510.js";
import "./selection.963fd4f5.js";
import "./QMenu.704ea9b1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.21adcba5.js";
import "./use-fullscreen.fdd2ea18.js";
import "./ClosePopup.80d7fe1a.js";
import "./axios.2d1b6d62.js";
import "./debug.ffa51329.js";
import "./help.ce523e76.js";
import "./QBadge.eb8ee236.js";
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
