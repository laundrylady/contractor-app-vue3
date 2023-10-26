import { _ as _sfc_main$1 } from "./GlobalNotifications.56e1e2b6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.260f71e2.js";
import "./QToolbarTitle.def6b6d7.js";
import "./QTd.c278f8d1.js";
import "./QTable.e353b19c.js";
import "./QList.1cf863ed.js";
import "./QMarkupTable.4eb01451.js";
import "./QSelect.1b94314a.js";
import "./selection.fe38b50b.js";
import "./QItemLabel.d70e4500.js";
import "./QMenu.70dfa3d6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1972fda1.js";
import "./use-fullscreen.a375aebd.js";
import "./ClosePopup.d1be6e36.js";
import "./axios.15b401cf.js";
import "./debug.972d445d.js";
import "./help.aea4a3fa.js";
import "./QBadge.ee1291e1.js";
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
