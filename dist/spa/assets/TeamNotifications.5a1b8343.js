import { _ as _sfc_main$1 } from "./GlobalNotifications.32717b5f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.cdcdcf43.js";
import "./QToolbarTitle.da658888.js";
import "./QTd.7b631a04.js";
import "./QTable.23a5349c.js";
import "./QList.004b4ede.js";
import "./QMarkupTable.73a499e0.js";
import "./QSelect.4b4b676c.js";
import "./QItemSection.c0b84010.js";
import "./QItemLabel.ca428035.js";
import "./QMenu.e39b1657.js";
import "./selection.cf93e9cc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1d8d959a.js";
import "./use-fullscreen.6289219a.js";
import "./ClosePopup.5ff1d715.js";
import "./axios.3c5af50a.js";
import "./debug.972d445d.js";
import "./help.eec7d1f7.js";
import "./QBadge.938e83c6.js";
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
