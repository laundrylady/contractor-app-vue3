import { _ as _sfc_main$1 } from "./GlobalNotifications.8a8b5493.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.edb37202.js";
import "./QToolbarTitle.64793cfa.js";
import "./QTd.8759362f.js";
import "./QTable.417d57d4.js";
import "./QList.3d2d3456.js";
import "./QMarkupTable.2b348bf1.js";
import "./QSelect.dc4c6087.js";
import "./selection.15d4f9f5.js";
import "./QItemLabel.6ff64dda.js";
import "./QMenu.ec00369a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f57672b6.js";
import "./use-fullscreen.b65361a6.js";
import "./ClosePopup.ff801671.js";
import "./axios.aa906023.js";
import "./debug.ffa51329.js";
import "./help.d3db5806.js";
import "./QBadge.875f630f.js";
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
