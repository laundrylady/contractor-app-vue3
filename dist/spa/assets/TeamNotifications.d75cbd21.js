import { _ as _sfc_main$1 } from "./GlobalNotifications.c8dbbf00.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.15617fb1.js";
import "./QToolbarTitle.6cfd9ff1.js";
import "./QToolbar.a604c11b.js";
import "./QTd.df341b2a.js";
import "./QTable.30cd0312.js";
import "./QList.88526380.js";
import "./QMarkupTable.594dd34e.js";
import "./QSelect.845f27da.js";
import "./QItemSection.07f2a647.js";
import "./QItemLabel.e42ef0a6.js";
import "./QMenu.da80f610.js";
import "./selection.87a5c733.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.38cc5a86.js";
import "./use-fullscreen.6aea0a26.js";
import "./ClosePopup.a09d7ffb.js";
import "./axios.2945dda0.js";
import "./debug.b9d7424b.js";
import "./help.4d9a3595.js";
import "./QBadge.cd02b21c.js";
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
