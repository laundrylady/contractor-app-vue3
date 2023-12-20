import { _ as _sfc_main$1 } from "./GlobalNotifications.531727f9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.8edaef54.js";
import "./QToolbarTitle.a1034564.js";
import "./QTd.6bb68aa5.js";
import "./QTable.60de87cf.js";
import "./QList.1a9a08e4.js";
import "./QMarkupTable.b1f4bfc2.js";
import "./QSelect.7e195314.js";
import "./QItemSection.132f5471.js";
import "./QItemLabel.9fad2339.js";
import "./QMenu.04573aab.js";
import "./selection.42f680f5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d06e9d57.js";
import "./use-fullscreen.8f4f1306.js";
import "./ClosePopup.d335d49a.js";
import "./axios.5ff0c671.js";
import "./debug.972d445d.js";
import "./help.7e84324c.js";
import "./QBadge.3074785d.js";
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
