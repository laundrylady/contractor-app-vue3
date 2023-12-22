import { _ as _sfc_main$1 } from "./GlobalNotifications.ac467f8e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.010c9441.js";
import "./QToolbarTitle.d23e71dd.js";
import "./QTd.66b78ba3.js";
import "./QTable.9d4338a0.js";
import "./QList.d0b73614.js";
import "./QMarkupTable.ae893cc4.js";
import "./QSelect.23d3f7db.js";
import "./QItemSection.582ba909.js";
import "./QItemLabel.cd519206.js";
import "./QMenu.3531bbe6.js";
import "./selection.67a628ad.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.bfdc9851.js";
import "./use-fullscreen.b7d0e8d4.js";
import "./ClosePopup.fba06acc.js";
import "./axios.12c3b1f3.js";
import "./debug.972d445d.js";
import "./help.20b94c7f.js";
import "./QBadge.a9953b91.js";
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
