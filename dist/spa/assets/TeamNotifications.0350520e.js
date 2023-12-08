import { _ as _sfc_main$1 } from "./GlobalNotifications.94afeafa.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.63b592af.js";
import "./QToolbarTitle.5fb93d6f.js";
import "./QTd.b9686ba7.js";
import "./QTable.9d07b895.js";
import "./QList.a924fe89.js";
import "./QMarkupTable.235eee66.js";
import "./QSelect.970ac209.js";
import "./QItemSection.03eb98a3.js";
import "./QItemLabel.44ca075e.js";
import "./QMenu.031fddcf.js";
import "./selection.a36acfd9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c661a330.js";
import "./use-fullscreen.4bdc8510.js";
import "./ClosePopup.e3091d70.js";
import "./axios.b31c451b.js";
import "./debug.972d445d.js";
import "./help.f213e400.js";
import "./QBadge.fc8cefa4.js";
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
