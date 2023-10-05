import { _ as _sfc_main$1 } from "./GlobalNotifications.fe88127a.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.47a08050.js";
import "./QToolbarTitle.51b7492d.js";
import "./QTd.05f05adb.js";
import "./QTable.e578b772.js";
import "./QList.3b68cbed.js";
import "./QMarkupTable.e606e451.js";
import "./QSelect.50ef15dc.js";
import "./selection.427fd34c.js";
import "./QItemLabel.b98dd222.js";
import "./QMenu.97e4312a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.7c737ed4.js";
import "./use-fullscreen.ebc39933.js";
import "./ClosePopup.e681ccb1.js";
import "./axios.4c537ae9.js";
import "./debug.ffa51329.js";
import "./help.8408b1ce.js";
import "./QBadge.4b28d504.js";
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
