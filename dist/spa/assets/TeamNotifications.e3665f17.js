import { _ as _sfc_main$1 } from "./GlobalNotifications.3173d1ac.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ee07ae95.js";
import "./QToolbarTitle.41df636b.js";
import "./QToolbar.ff4f2ce5.js";
import "./QTd.ad75f024.js";
import "./QTable.ce04e01c.js";
import "./QList.89b7e4da.js";
import "./QMarkupTable.9204fae0.js";
import "./QSelect.138baceb.js";
import "./QItemSection.8aff2714.js";
import "./QItemLabel.cefa8d89.js";
import "./QMenu.060e04ea.js";
import "./selection.9481dc7d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.61638046.js";
import "./use-fullscreen.fb2d04ce.js";
import "./ClosePopup.0e3ad749.js";
import "./axios.c73281a3.js";
import "./debug.b9d7424b.js";
import "./help.0fd80ca9.js";
import "./QBadge.4b4bc469.js";
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
