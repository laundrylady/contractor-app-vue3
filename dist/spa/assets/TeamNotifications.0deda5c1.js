import { _ as _sfc_main$1 } from "./GlobalNotifications.9ca2ffe8.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.335ad1da.js";
import "./QToolbarTitle.95a2d261.js";
import "./QTd.792872b0.js";
import "./QTable.eb6a799d.js";
import "./QList.e466b6b1.js";
import "./QMarkupTable.e2c36203.js";
import "./QSelect.4287be58.js";
import "./selection.da9326cf.js";
import "./QItemLabel.970ab1b9.js";
import "./QMenu.0b86dd3d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.8e4e8aa4.js";
import "./use-fullscreen.c6c293a8.js";
import "./ClosePopup.0ffdfffa.js";
import "./axios.3bfc6a6f.js";
import "./debug.ffa51329.js";
import "./help.c8506d61.js";
import "./QBadge.f7f29cf7.js";
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
