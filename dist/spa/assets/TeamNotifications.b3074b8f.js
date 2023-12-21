import { _ as _sfc_main$1 } from "./GlobalNotifications.a57cace9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.065526b9.js";
import "./QToolbarTitle.e76fc48d.js";
import "./QTd.b59cd034.js";
import "./QTable.c410b338.js";
import "./QList.3633b990.js";
import "./QMarkupTable.04d1685d.js";
import "./QSelect.d6112398.js";
import "./QItemSection.70ec888e.js";
import "./QItemLabel.3b01a382.js";
import "./QMenu.b8e60c99.js";
import "./selection.e415c2a1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.642e2f53.js";
import "./use-fullscreen.113b3620.js";
import "./ClosePopup.e970c8c3.js";
import "./axios.42b3c5e0.js";
import "./debug.972d445d.js";
import "./help.6b5e7073.js";
import "./QBadge.9615595f.js";
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
