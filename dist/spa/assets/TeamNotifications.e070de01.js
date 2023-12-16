import { _ as _sfc_main$1 } from "./GlobalNotifications.739951b6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.3493713e.js";
import "./QToolbarTitle.b803018c.js";
import "./QTd.60652365.js";
import "./QTable.4fcaa69e.js";
import "./QList.210d0b48.js";
import "./QMarkupTable.4d70b6e7.js";
import "./QSelect.9408b07f.js";
import "./QItemSection.8042ade3.js";
import "./QItemLabel.fcab7aaf.js";
import "./QMenu.31c45b16.js";
import "./selection.119f4514.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1a07cbe0.js";
import "./use-fullscreen.aeb2e555.js";
import "./ClosePopup.de5676a5.js";
import "./axios.51cbb93a.js";
import "./debug.972d445d.js";
import "./help.7d15b7b7.js";
import "./QBadge.159e94fd.js";
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
