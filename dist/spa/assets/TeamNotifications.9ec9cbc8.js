import { _ as _sfc_main$1 } from "./GlobalNotifications.0a98de61.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.181f8828.js";
import "./QToolbarTitle.1f9ff1c9.js";
import "./QTd.194b4153.js";
import "./QTable.72f29fd0.js";
import "./QList.e90f9510.js";
import "./QMarkupTable.dca4c372.js";
import "./QSelect.b255285f.js";
import "./QItemSection.fcf3298c.js";
import "./QItemLabel.baa0b052.js";
import "./QMenu.a3cce960.js";
import "./selection.0eb64ddd.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b0e18df1.js";
import "./use-fullscreen.8d88688b.js";
import "./ClosePopup.5ca37cd6.js";
import "./axios.b1a36989.js";
import "./debug.972d445d.js";
import "./help.e19066e7.js";
import "./QBadge.daa26e83.js";
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
