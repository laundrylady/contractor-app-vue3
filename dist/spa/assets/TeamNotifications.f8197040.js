import { _ as _sfc_main$1 } from "./GlobalNotifications.eb02b48d.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.1cfe3334.js";
import "./QToolbarTitle.b84eec51.js";
import "./QTd.52b68e2f.js";
import "./QTable.7d0cdd7d.js";
import "./QList.e91943c5.js";
import "./QMarkupTable.ed721e7b.js";
import "./QSelect.2fb93bbd.js";
import "./selection.13315fdc.js";
import "./QItemLabel.f9f3755f.js";
import "./QMenu.a11350f0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.de30b1e2.js";
import "./use-fullscreen.ebb72e6f.js";
import "./ClosePopup.3a842474.js";
import "./axios.0c43222c.js";
import "./debug.ffa51329.js";
import "./help.39141f00.js";
import "./QBadge.26e0159e.js";
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
