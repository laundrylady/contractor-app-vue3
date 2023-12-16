import { _ as _sfc_main$1 } from "./GlobalNotifications.b894e3a6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.94e66b14.js";
import "./QToolbarTitle.a5710d07.js";
import "./QTd.a4169a86.js";
import "./QTable.4f80b1ca.js";
import "./QList.c73a12dd.js";
import "./QMarkupTable.d462bf72.js";
import "./QSelect.66943613.js";
import "./QItemSection.4161e238.js";
import "./QItemLabel.051732c0.js";
import "./QMenu.3336b015.js";
import "./selection.670e2d60.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a7979528.js";
import "./use-fullscreen.74e0466a.js";
import "./ClosePopup.ed4876e8.js";
import "./axios.d02ca954.js";
import "./debug.972d445d.js";
import "./help.47eaabb7.js";
import "./QBadge.8c48a67e.js";
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
