import { _ as _sfc_main$1 } from "./GlobalNotifications.28cb512d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.287c82d5.js";
import "./QToolbarTitle.11b277e1.js";
import "./QTd.ee2c859d.js";
import "./QTable.8e29dc75.js";
import "./QList.a2ee3970.js";
import "./QMarkupTable.94710117.js";
import "./QSelect.25c90bb7.js";
import "./QItemSection.c886ae50.js";
import "./QItemLabel.46c33ec4.js";
import "./QMenu.b7f847d5.js";
import "./selection.d70b1d4a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b83db418.js";
import "./use-fullscreen.32ffca38.js";
import "./ClosePopup.0b4d9f28.js";
import "./axios.4964e504.js";
import "./debug.972d445d.js";
import "./help.38cc707a.js";
import "./QBadge.c5646b7c.js";
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
