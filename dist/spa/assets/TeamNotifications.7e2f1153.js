import { _ as _sfc_main$1 } from "./GlobalNotifications.bcd5f8f8.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.2c1bc8d2.js";
import "./QToolbarTitle.070f8714.js";
import "./QTd.e766a39d.js";
import "./QTable.c1174dcf.js";
import "./QList.3fdf49c6.js";
import "./QMarkupTable.b9291195.js";
import "./QSelect.8e4495e5.js";
import "./selection.a97a1f9b.js";
import "./QItemLabel.8c6bc0aa.js";
import "./QMenu.1a847d0c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.545f33e7.js";
import "./use-fullscreen.a82cb636.js";
import "./ClosePopup.2af09889.js";
import "./axios.d4b7da8a.js";
import "./debug.972d445d.js";
import "./help.03a1471a.js";
import "./QBadge.488f67fd.js";
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
