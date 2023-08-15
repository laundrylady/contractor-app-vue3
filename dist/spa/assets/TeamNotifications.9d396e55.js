import { _ as _sfc_main$1 } from "./GlobalNotifications.0f4ebef0.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.16fb3380.js";
import "./QToolbarTitle.57910d3b.js";
import "./QTable.89d169cc.js";
import "./QList.ddee51a8.js";
import "./QMarkupTable.2cfb33eb.js";
import "./QSelect.7180a201.js";
import "./QItemSection.03ec3358.js";
import "./selection.84b02b1d.js";
import "./QMenu.02576b50.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.425cf05e.js";
import "./use-fullscreen.689dd96f.js";
import "./ClosePopup.b51813b3.js";
import "./axios.fbeb5029.js";
import "./debug.ffa51329.js";
import "./help.b57562bf.js";
import "./QBadge.5dfc17c4.js";
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
