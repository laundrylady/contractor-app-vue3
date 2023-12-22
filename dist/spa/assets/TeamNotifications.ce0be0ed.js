import { _ as _sfc_main$1 } from "./GlobalNotifications.72c56f1d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.686b673d.js";
import "./QToolbarTitle.80770597.js";
import "./QTd.249f61a9.js";
import "./QTable.468343b9.js";
import "./QList.caef0d9e.js";
import "./QMarkupTable.11edc78a.js";
import "./QSelect.8e055004.js";
import "./QItemSection.b28f66fd.js";
import "./QItemLabel.0f1a7d32.js";
import "./QMenu.2860289c.js";
import "./selection.4d4b9158.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.035c903b.js";
import "./use-fullscreen.27febd7a.js";
import "./ClosePopup.7423f14c.js";
import "./axios.fca9b24c.js";
import "./debug.972d445d.js";
import "./help.2365647d.js";
import "./QBadge.8ca33444.js";
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
