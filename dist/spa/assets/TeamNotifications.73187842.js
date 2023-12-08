import { _ as _sfc_main$1 } from "./GlobalNotifications.811d8b9b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.88cb70e0.js";
import "./QToolbarTitle.0b41c4ac.js";
import "./QTd.523a7c04.js";
import "./QTable.d46f4b08.js";
import "./QList.d5ad5eed.js";
import "./QMarkupTable.59c2e6e6.js";
import "./QSelect.e751b313.js";
import "./QItemSection.6791e074.js";
import "./QItemLabel.e1f22c7c.js";
import "./QMenu.8216871e.js";
import "./selection.2115d5cc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b4dd1c0a.js";
import "./use-fullscreen.19be4211.js";
import "./ClosePopup.2e78ad33.js";
import "./axios.9c2c3a49.js";
import "./debug.972d445d.js";
import "./help.bd514665.js";
import "./QBadge.accf51ac.js";
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
