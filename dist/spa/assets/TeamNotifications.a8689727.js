import { _ as _sfc_main$1 } from "./GlobalNotifications.ab162177.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.92ab7041.js";
import "./QToolbarTitle.1980b9dc.js";
import "./QTd.c012504d.js";
import "./QTable.747a4838.js";
import "./QList.5ae951e2.js";
import "./QMarkupTable.f383e26a.js";
import "./QSelect.6963eaa7.js";
import "./selection.def004c5.js";
import "./QItemLabel.e90e0b6c.js";
import "./QMenu.067c58bc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.375bd2d2.js";
import "./use-fullscreen.d15bd625.js";
import "./ClosePopup.cbd6ac2a.js";
import "./axios.3f5535ab.js";
import "./debug.972d445d.js";
import "./help.c0f2021d.js";
import "./QBadge.c1543ff0.js";
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
