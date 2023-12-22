import { _ as _sfc_main$1 } from "./GlobalNotifications.c12335b0.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.b2f4aca3.js";
import "./QToolbarTitle.318ed155.js";
import "./QTd.cd60cc37.js";
import "./QTable.796d4712.js";
import "./QList.31c4473f.js";
import "./QMarkupTable.6cdd41e1.js";
import "./QSelect.522178b7.js";
import "./QItemSection.a93e6b70.js";
import "./QItemLabel.0fb67170.js";
import "./QMenu.f441d7a0.js";
import "./selection.54a583a0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.37100551.js";
import "./use-fullscreen.01f17741.js";
import "./ClosePopup.af94a7f8.js";
import "./axios.32e1d547.js";
import "./debug.972d445d.js";
import "./help.0d31cbdd.js";
import "./QBadge.ef439336.js";
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
