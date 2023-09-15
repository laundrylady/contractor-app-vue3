import { _ as _sfc_main$1 } from "./GlobalNotifications.1eb544d8.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.75c589dc.js";
import "./QToolbarTitle.c1f6a73b.js";
import "./QTable.b5db4e8b.js";
import "./QList.64ccde9f.js";
import "./QMarkupTable.9747b35b.js";
import "./QSelect.279ab0ff.js";
import "./selection.7cbdbbe5.js";
import "./QItemLabel.a15b7d1a.js";
import "./QMenu.faa99aa9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.260f6d4e.js";
import "./use-fullscreen.af37fc26.js";
import "./ClosePopup.486c41e5.js";
import "./axios.a7e15516.js";
import "./debug.ffa51329.js";
import "./help.2d75e567.js";
import "./QBadge.44e41182.js";
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
