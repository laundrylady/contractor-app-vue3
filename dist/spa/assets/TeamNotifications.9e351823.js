import { _ as _sfc_main$1 } from "./GlobalNotifications.4e77f862.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.fbe50061.js";
import "./QToolbarTitle.99b8dafa.js";
import "./QTd.b14cf39d.js";
import "./QTable.648f47ea.js";
import "./QList.bf907c35.js";
import "./QMarkupTable.84318991.js";
import "./QSelect.46e9e734.js";
import "./selection.87801179.js";
import "./QItemLabel.7c9eb75e.js";
import "./QMenu.7187a648.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.31e6377d.js";
import "./use-fullscreen.d808bef0.js";
import "./ClosePopup.af1c7bd1.js";
import "./axios.18ded2a9.js";
import "./debug.972d445d.js";
import "./help.3381b671.js";
import "./QBadge.5df903b6.js";
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
