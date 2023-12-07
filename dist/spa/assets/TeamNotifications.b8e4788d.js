import { _ as _sfc_main$1 } from "./GlobalNotifications.f27f7bfe.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.706d8900.js";
import "./QToolbarTitle.6bf94d77.js";
import "./QTd.59a9498f.js";
import "./QTable.eca3918d.js";
import "./QList.4764cd18.js";
import "./QMarkupTable.6789e56b.js";
import "./QSelect.e5026263.js";
import "./QItemSection.79ddbbc8.js";
import "./QItemLabel.31304aca.js";
import "./QMenu.90cbb366.js";
import "./selection.5172fb8f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f4f78209.js";
import "./use-fullscreen.61e68cb7.js";
import "./ClosePopup.275d9e02.js";
import "./axios.8acee7c7.js";
import "./debug.972d445d.js";
import "./help.e2addada.js";
import "./QBadge.89672429.js";
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
