import { _ as _sfc_main$1 } from "./GlobalNotifications.16e39dd7.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.3ebb8669.js";
import "./QToolbarTitle.8d45ad4e.js";
import "./QTd.61538254.js";
import "./QTable.e5c456fe.js";
import "./QList.892642cf.js";
import "./QMarkupTable.1e31a3be.js";
import "./QSelect.f9109c79.js";
import "./QItemSection.0f578e2c.js";
import "./QItemLabel.883e39c9.js";
import "./QMenu.fceb93d6.js";
import "./selection.fa7fa18d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.bb2845c7.js";
import "./use-fullscreen.b854f054.js";
import "./ClosePopup.1076266e.js";
import "./axios.daed506c.js";
import "./debug.972d445d.js";
import "./help.e5545d22.js";
import "./QBadge.e76bf277.js";
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
