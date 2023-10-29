import { _ as _sfc_main$1 } from "./GlobalNotifications.d1ba02cf.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.fa2b967f.js";
import "./QToolbarTitle.74b355c8.js";
import "./QTd.33ff342e.js";
import "./QTable.98281917.js";
import "./QList.468f0009.js";
import "./QMarkupTable.15808611.js";
import "./QSelect.6207932e.js";
import "./selection.3328651a.js";
import "./QItemLabel.589b6673.js";
import "./QMenu.a931a59a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.e78cbb65.js";
import "./use-fullscreen.a7e72f92.js";
import "./ClosePopup.fc0abb68.js";
import "./axios.814b97a2.js";
import "./debug.972d445d.js";
import "./help.f5e0718f.js";
import "./QBadge.13851b9d.js";
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
