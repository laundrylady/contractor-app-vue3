import { _ as _sfc_main$1 } from "./GlobalNotifications.94eb01c0.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.46e0a30b.js";
import "./QToolbarTitle.914445aa.js";
import "./QTd.3c9db6b8.js";
import "./QTable.0886a27c.js";
import "./QList.f64079fd.js";
import "./QMarkupTable.24236ea3.js";
import "./QSelect.6b710984.js";
import "./QItemSection.353b1459.js";
import "./QItemLabel.9f7c9c71.js";
import "./QMenu.eccf08db.js";
import "./selection.7ea46a8f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d0b72ad6.js";
import "./use-fullscreen.bd0e41f1.js";
import "./ClosePopup.9a218449.js";
import "./axios.4c2d8dd7.js";
import "./debug.972d445d.js";
import "./help.c20d34e3.js";
import "./QBadge.ccfaba3c.js";
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
