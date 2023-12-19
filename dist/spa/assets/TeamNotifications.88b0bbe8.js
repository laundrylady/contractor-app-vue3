import { _ as _sfc_main$1 } from "./GlobalNotifications.ca05b9a1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.92f7e7d0.js";
import "./QToolbarTitle.ed4a7885.js";
import "./QTd.e1b0dab2.js";
import "./QTable.5758adaa.js";
import "./QList.1a5fa9eb.js";
import "./QMarkupTable.3555bc29.js";
import "./QSelect.40dc1487.js";
import "./QItemSection.8b01430a.js";
import "./QItemLabel.44f2712e.js";
import "./QMenu.644c291b.js";
import "./selection.fe2e2af2.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.807bdfde.js";
import "./use-fullscreen.195c064c.js";
import "./ClosePopup.369888b4.js";
import "./axios.5373cd8f.js";
import "./debug.972d445d.js";
import "./help.b2dd441c.js";
import "./QBadge.fb62d1b2.js";
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
