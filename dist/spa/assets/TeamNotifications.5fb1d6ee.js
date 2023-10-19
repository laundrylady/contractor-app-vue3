import { _ as _sfc_main$1 } from "./GlobalNotifications.faaa4c49.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.87d3d2b7.js";
import "./QToolbarTitle.4ab2b969.js";
import "./QTd.8a1310db.js";
import "./QTable.65964429.js";
import "./QList.d0bf9769.js";
import "./QMarkupTable.973bd70f.js";
import "./QSelect.b483704f.js";
import "./selection.f52844c4.js";
import "./QItemLabel.c54ecb51.js";
import "./QMenu.6b0359c9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.25cfe5ba.js";
import "./use-fullscreen.2f975b38.js";
import "./ClosePopup.e9204c07.js";
import "./axios.ed69c116.js";
import "./debug.972d445d.js";
import "./help.d3cdcc33.js";
import "./QBadge.7ee06245.js";
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
