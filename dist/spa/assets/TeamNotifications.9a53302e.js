import { _ as _sfc_main$1 } from "./GlobalNotifications.9c884c11.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.909d8447.js";
import "./QToolbarTitle.db58c9fa.js";
import "./QTd.0ab75159.js";
import "./QTable.1ce7b8aa.js";
import "./QList.48b8236b.js";
import "./QMarkupTable.38d95f5e.js";
import "./QSelect.4ea71d9c.js";
import "./selection.b37ccca0.js";
import "./QItemLabel.415ed021.js";
import "./QMenu.f5054dc0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.dd6f1363.js";
import "./use-fullscreen.dc294ee1.js";
import "./ClosePopup.1b6117b6.js";
import "./axios.cc1e1de2.js";
import "./debug.ffa51329.js";
import "./help.92015474.js";
import "./QBadge.fbf19264.js";
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
