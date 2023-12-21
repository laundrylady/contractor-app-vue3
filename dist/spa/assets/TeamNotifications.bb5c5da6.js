import { _ as _sfc_main$1 } from "./GlobalNotifications.0487d147.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f35da196.js";
import "./QToolbarTitle.3bdb6369.js";
import "./QTd.3b44ecb9.js";
import "./QTable.2b96ff93.js";
import "./QList.5f89f18c.js";
import "./QMarkupTable.de74f3ce.js";
import "./QSelect.cc12aec1.js";
import "./QItemSection.80e113b3.js";
import "./QItemLabel.5598ec43.js";
import "./QMenu.972373ea.js";
import "./selection.08e2461f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.38c8c075.js";
import "./use-fullscreen.9bf1a383.js";
import "./ClosePopup.efb835ab.js";
import "./axios.99921404.js";
import "./debug.972d445d.js";
import "./help.71e55574.js";
import "./QBadge.efca824e.js";
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
