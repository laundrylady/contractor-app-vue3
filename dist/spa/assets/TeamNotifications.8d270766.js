import { _ as _sfc_main$1 } from "./GlobalNotifications.cf8a5e6d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.63251f47.js";
import "./QToolbarTitle.eacbda0e.js";
import "./QTd.3185f260.js";
import "./QTable.e27c35fa.js";
import "./QList.d50b1a6a.js";
import "./QMarkupTable.f549cfc3.js";
import "./QSelect.b1327776.js";
import "./selection.8b22f19f.js";
import "./QItemLabel.5719771f.js";
import "./QMenu.f57f59d0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.4e6c23eb.js";
import "./use-fullscreen.77851ff3.js";
import "./ClosePopup.0fcd0957.js";
import "./axios.ea3e5b05.js";
import "./debug.972d445d.js";
import "./help.2c124571.js";
import "./QBadge.2d98f4da.js";
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
