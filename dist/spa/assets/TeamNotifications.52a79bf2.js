import { _ as _sfc_main$1 } from "./GlobalNotifications.63378c9e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ae929d54.js";
import "./QToolbarTitle.e5a8aa93.js";
import "./QTd.89230022.js";
import "./QTable.05aa0415.js";
import "./QList.a05b399d.js";
import "./QMarkupTable.9b6c085a.js";
import "./QSelect.05b73f42.js";
import "./selection.44495633.js";
import "./QItemLabel.224041da.js";
import "./QMenu.7ce52867.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.841520c7.js";
import "./use-fullscreen.e19f2f57.js";
import "./ClosePopup.50c4dcf7.js";
import "./axios.e451d1c8.js";
import "./debug.972d445d.js";
import "./help.bd5e4abe.js";
import "./QBadge.16d68613.js";
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
