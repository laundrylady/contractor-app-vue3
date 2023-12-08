import { _ as _sfc_main$1 } from "./GlobalNotifications.485f7367.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.a9a574a4.js";
import "./QToolbarTitle.38467714.js";
import "./QTd.e485e50a.js";
import "./QTable.320994c7.js";
import "./QList.0b09280c.js";
import "./QMarkupTable.53deca36.js";
import "./QSelect.9067d31a.js";
import "./QItemSection.2b728bb6.js";
import "./QItemLabel.09cf120e.js";
import "./QMenu.9d7ea008.js";
import "./selection.95ad5cb4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.ffb84405.js";
import "./use-fullscreen.0075533c.js";
import "./ClosePopup.9ef9fc4b.js";
import "./axios.24ab5c7c.js";
import "./debug.972d445d.js";
import "./help.08e1e70e.js";
import "./QBadge.d04af7c1.js";
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
