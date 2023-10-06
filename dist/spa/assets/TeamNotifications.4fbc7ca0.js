import { _ as _sfc_main$1 } from "./GlobalNotifications.ad7ac2ac.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.13e68509.js";
import "./QToolbarTitle.266d6303.js";
import "./QTd.c07cf09b.js";
import "./QTable.449650b7.js";
import "./QList.87986894.js";
import "./QMarkupTable.fa4c9fe4.js";
import "./QSelect.916bda6c.js";
import "./selection.eb5b790c.js";
import "./QItemLabel.f6bdc4d3.js";
import "./QMenu.d1a86981.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.35cab95f.js";
import "./use-fullscreen.070b00ba.js";
import "./ClosePopup.faa0347f.js";
import "./axios.a727fc80.js";
import "./debug.ffa51329.js";
import "./help.cca23e83.js";
import "./QBadge.618fea26.js";
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
