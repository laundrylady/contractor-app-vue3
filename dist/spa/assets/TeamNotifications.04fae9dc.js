import { _ as _sfc_main$1 } from "./GlobalNotifications.9ce74521.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.7f551f6a.js";
import "./QToolbarTitle.0a9aa6b4.js";
import "./QTable.3117d750.js";
import "./QList.a07706d2.js";
import "./QMarkupTable.6f777f51.js";
import "./QSelect.0c3fd45e.js";
import "./selection.62639f9a.js";
import "./QItemLabel.4aa4ec2c.js";
import "./QMenu.c6beb16c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.9dc7a49f.js";
import "./use-fullscreen.be5526f2.js";
import "./ClosePopup.34ca9f24.js";
import "./axios.3311feff.js";
import "./debug.ffa51329.js";
import "./help.ceb9b487.js";
import "./QBadge.422c4cfa.js";
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
