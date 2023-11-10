import { _ as _sfc_main$1 } from "./GlobalNotifications.1ced8be3.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e2534425.js";
import "./QToolbarTitle.8eeea9f0.js";
import "./QTd.72b519bc.js";
import "./QTable.5e9c8a1c.js";
import "./QList.2756e54b.js";
import "./QMarkupTable.987707f3.js";
import "./QSelect.9df665ea.js";
import "./selection.a9ed569b.js";
import "./QItemLabel.d2881aab.js";
import "./QMenu.37598d9b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.26ed8d58.js";
import "./use-fullscreen.2a20bee8.js";
import "./ClosePopup.bbe2f05b.js";
import "./axios.d820b385.js";
import "./debug.972d445d.js";
import "./help.a87e60ea.js";
import "./QBadge.080eff39.js";
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
