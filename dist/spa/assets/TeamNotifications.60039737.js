import { _ as _sfc_main$1 } from "./GlobalNotifications.f8d6fc87.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.bcc73ba7.js";
import "./QToolbarTitle.32dd0624.js";
import "./QTd.fac14a83.js";
import "./QTable.bdd4cf0f.js";
import "./QList.6ac42d03.js";
import "./QMarkupTable.72bd8fd7.js";
import "./QSelect.18f2c4a2.js";
import "./selection.9080dacd.js";
import "./QItemLabel.1284f5e7.js";
import "./QMenu.e574c94f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.76c6d608.js";
import "./use-fullscreen.a5c14c9d.js";
import "./ClosePopup.ae0feb94.js";
import "./axios.caba40e4.js";
import "./debug.ffa51329.js";
import "./help.f988fe57.js";
import "./QBadge.ea97cbd5.js";
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
