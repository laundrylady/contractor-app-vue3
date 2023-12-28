import { _ as _sfc_main$1 } from "./GlobalNotifications.09e84412.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f9822a69.js";
import "./QToolbarTitle.e24b451d.js";
import "./QToolbar.1b19464d.js";
import "./QTd.7c8cad85.js";
import "./QTable.de17af0a.js";
import "./QList.a21a4cf1.js";
import "./QMarkupTable.f069b402.js";
import "./QSelect.0cf8ed7b.js";
import "./QItemSection.77279501.js";
import "./QItemLabel.d3a739f0.js";
import "./QMenu.6945e39a.js";
import "./selection.d4361626.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f7451b7f.js";
import "./use-fullscreen.2da1d569.js";
import "./ClosePopup.11af44b0.js";
import "./axios.426a9acd.js";
import "./debug.b9d7424b.js";
import "./help.2b676caf.js";
import "./QBadge.9181b29b.js";
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
