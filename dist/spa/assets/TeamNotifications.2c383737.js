import { _ as _sfc_main$1 } from "./GlobalNotifications.b200525a.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.068b7692.js";
import "./QToolbarTitle.5e6471c4.js";
import "./QTable.1b916b06.js";
import "./QList.2a004978.js";
import "./QMarkupTable.25ed7c77.js";
import "./QSelect.532cd017.js";
import "./selection.58fb95b8.js";
import "./QItemLabel.4e1f7acb.js";
import "./QMenu.1bfae911.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.40a947e9.js";
import "./use-fullscreen.c94ad12e.js";
import "./ClosePopup.e144b2e6.js";
import "./axios.d4b36dc3.js";
import "./debug.ffa51329.js";
import "./help.cbf54abd.js";
import "./QBadge.9fb409d5.js";
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
