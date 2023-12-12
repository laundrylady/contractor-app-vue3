import { _ as _sfc_main$1 } from "./GlobalNotifications.1efc7eb7.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.862d01a7.js";
import "./QToolbarTitle.e14e3099.js";
import "./QTd.44dc039e.js";
import "./QTable.52815f09.js";
import "./QList.af4de810.js";
import "./QMarkupTable.b1e529eb.js";
import "./QSelect.398d3ca4.js";
import "./QItemSection.97af8115.js";
import "./QItemLabel.8734c639.js";
import "./QMenu.0916131a.js";
import "./selection.ccca7e5c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3bf81985.js";
import "./use-fullscreen.5b16b915.js";
import "./ClosePopup.2e98f75e.js";
import "./axios.982fbd2f.js";
import "./debug.972d445d.js";
import "./help.e91a6ad3.js";
import "./QBadge.36a2a327.js";
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
