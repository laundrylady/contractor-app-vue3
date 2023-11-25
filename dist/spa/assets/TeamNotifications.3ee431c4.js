import { _ as _sfc_main$1 } from "./GlobalNotifications.303b2cbd.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.3c1ce126.js";
import "./QToolbarTitle.ceb279e2.js";
import "./QTd.4967872d.js";
import "./QTable.07d42032.js";
import "./QList.164bd35d.js";
import "./QMarkupTable.2c8ed551.js";
import "./QSelect.bae8468b.js";
import "./QItemSection.fadb38ff.js";
import "./QItemLabel.d71404be.js";
import "./QMenu.7e2b7e4a.js";
import "./selection.8c3533a6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.2406bd7e.js";
import "./use-fullscreen.d97c3efd.js";
import "./ClosePopup.42d1a14d.js";
import "./axios.a063f4ae.js";
import "./debug.972d445d.js";
import "./help.5a2f4e9c.js";
import "./QBadge.8904a3bd.js";
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
