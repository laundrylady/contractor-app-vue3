import { _ as _sfc_main$1 } from "./GlobalNotifications.36197680.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.56d10e03.js";
import "./QToolbarTitle.ef19fd49.js";
import "./QTd.1c3d671a.js";
import "./QTable.2becd57f.js";
import "./QList.1c88c78c.js";
import "./QMarkupTable.7a93b76b.js";
import "./QSelect.44b3cd04.js";
import "./selection.b9219e3c.js";
import "./QItemLabel.79ad69aa.js";
import "./QMenu.73c16fc7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d9219a73.js";
import "./use-fullscreen.49a3ca9d.js";
import "./ClosePopup.59eacbaa.js";
import "./axios.db77a32a.js";
import "./debug.972d445d.js";
import "./help.211327e8.js";
import "./QBadge.abc606a0.js";
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
