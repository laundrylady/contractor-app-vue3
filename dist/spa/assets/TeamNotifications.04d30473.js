import { _ as _sfc_main$1 } from "./GlobalNotifications.9ee4f196.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.420ace9d.js";
import "./QToolbarTitle.00516800.js";
import "./QTd.672bd49a.js";
import "./QTable.d0d8ec50.js";
import "./QList.94e247d9.js";
import "./QMarkupTable.c6436ea5.js";
import "./QSelect.291dd209.js";
import "./QItemSection.7138275a.js";
import "./QItemLabel.4e161513.js";
import "./QMenu.51c92bb2.js";
import "./selection.eff96e95.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.4b68ce73.js";
import "./use-fullscreen.625b7c38.js";
import "./ClosePopup.ecc275ae.js";
import "./axios.feaa9f76.js";
import "./debug.972d445d.js";
import "./help.f1ea19ef.js";
import "./QBadge.d51b7fc9.js";
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
