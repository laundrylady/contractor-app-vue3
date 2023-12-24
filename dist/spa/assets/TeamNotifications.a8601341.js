import { _ as _sfc_main$1 } from "./GlobalNotifications.f9ff694b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.dd540b4f.js";
import "./QToolbarTitle.80eb5f6b.js";
import "./QTd.23275125.js";
import "./QTable.b4d6f9af.js";
import "./QList.dc30c21a.js";
import "./QMarkupTable.acf76c7c.js";
import "./QSelect.2d64b487.js";
import "./QItemSection.1a564290.js";
import "./QItemLabel.748c0180.js";
import "./QMenu.724cc13f.js";
import "./selection.61335d0a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.61f39338.js";
import "./use-fullscreen.d6577286.js";
import "./ClosePopup.0719daa7.js";
import "./axios.a558da08.js";
import "./debug.972d445d.js";
import "./help.e4640e31.js";
import "./QBadge.0a0904e6.js";
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
