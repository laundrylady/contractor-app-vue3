import { _ as _sfc_main$1 } from "./GlobalNotifications.5b62f696.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.234361c9.js";
import "./QToolbarTitle.98eb4db1.js";
import "./QTd.63952b17.js";
import "./QTable.e29b0d8a.js";
import "./QList.7f4ec242.js";
import "./QMarkupTable.e3b4d9b9.js";
import "./QSelect.0a839528.js";
import "./QItemSection.3151eb30.js";
import "./QItemLabel.c2241adb.js";
import "./QMenu.19ce0ec2.js";
import "./selection.a7fe04f0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.393c6a95.js";
import "./use-fullscreen.9c841fa7.js";
import "./ClosePopup.c5d6f226.js";
import "./axios.3deb6b50.js";
import "./debug.972d445d.js";
import "./help.2eba08cb.js";
import "./QBadge.48772ffe.js";
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
