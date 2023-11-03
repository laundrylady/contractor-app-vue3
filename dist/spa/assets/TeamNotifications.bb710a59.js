import { _ as _sfc_main$1 } from "./GlobalNotifications.ecf6d48a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.dab5106a.js";
import "./QToolbarTitle.4a78d2dd.js";
import "./QTd.df1b842c.js";
import "./QTable.1e9e508e.js";
import "./QList.00b0efce.js";
import "./QMarkupTable.35bca243.js";
import "./QSelect.458f17c3.js";
import "./selection.94631991.js";
import "./QItemLabel.d1e72a45.js";
import "./QMenu.0bf5e7da.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.8e99e26c.js";
import "./use-fullscreen.446b3232.js";
import "./ClosePopup.de216a77.js";
import "./axios.c4336e75.js";
import "./debug.972d445d.js";
import "./help.d32e816a.js";
import "./QBadge.486c5971.js";
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
