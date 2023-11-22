import { _ as _sfc_main$1 } from "./GlobalNotifications.844a79cf.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.54585565.js";
import "./QToolbarTitle.c0d3334f.js";
import "./QTd.300e2b78.js";
import "./QTable.18827576.js";
import "./QList.0477e43a.js";
import "./QMarkupTable.effa9df6.js";
import "./QSelect.bb083088.js";
import "./QItemSection.3d6dd23a.js";
import "./QItemLabel.64fe3631.js";
import "./QMenu.dc22a363.js";
import "./selection.201d97d8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.336a3cc5.js";
import "./use-fullscreen.ef561827.js";
import "./ClosePopup.e6a61557.js";
import "./axios.1853c8fa.js";
import "./debug.972d445d.js";
import "./help.2ef6de69.js";
import "./QBadge.6f0cdf60.js";
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
