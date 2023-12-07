import { _ as _sfc_main$1 } from "./GlobalNotifications.cc2a691f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.11e648ff.js";
import "./QToolbarTitle.1ef2def8.js";
import "./QTd.1a6f3758.js";
import "./QTable.0209b06b.js";
import "./QList.c6522f05.js";
import "./QMarkupTable.523b76dd.js";
import "./QSelect.cc074eb5.js";
import "./QItemSection.ba4339bd.js";
import "./QItemLabel.7e75858c.js";
import "./QMenu.3fa36ddd.js";
import "./selection.bd155836.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d28cfda0.js";
import "./use-fullscreen.e94de5ad.js";
import "./ClosePopup.d58a3b2b.js";
import "./axios.efb799cd.js";
import "./debug.972d445d.js";
import "./help.7f224dfe.js";
import "./QBadge.046e2072.js";
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
