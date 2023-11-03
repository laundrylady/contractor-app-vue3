import { _ as _sfc_main$1 } from "./GlobalNotifications.31359fc1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.6ae485f0.js";
import "./QToolbarTitle.fb0e66d2.js";
import "./QTd.59b99563.js";
import "./QTable.dc271db7.js";
import "./QList.7363286c.js";
import "./QMarkupTable.2d7c35d3.js";
import "./QSelect.90089408.js";
import "./selection.cbab1b8c.js";
import "./QItemLabel.2c595435.js";
import "./QMenu.8110c943.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.7411ea2a.js";
import "./use-fullscreen.e24a3030.js";
import "./ClosePopup.a22711c7.js";
import "./axios.a8315867.js";
import "./debug.972d445d.js";
import "./help.627981a1.js";
import "./QBadge.c41ecec8.js";
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
