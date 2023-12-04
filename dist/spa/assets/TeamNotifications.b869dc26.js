import { _ as _sfc_main$1 } from "./GlobalNotifications.42963ec9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e4f8656c.js";
import "./QToolbarTitle.9b92bbb5.js";
import "./QTd.17fddcd2.js";
import "./QTable.dd51e14f.js";
import "./QList.11ae1195.js";
import "./QMarkupTable.e5e9c85e.js";
import "./QSelect.0d308ce8.js";
import "./QItemSection.72d2cb0c.js";
import "./QItemLabel.93d26f0e.js";
import "./QMenu.8ba97455.js";
import "./selection.be3f87ce.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.565337dd.js";
import "./use-fullscreen.8fb385a9.js";
import "./ClosePopup.03b1d908.js";
import "./axios.66f61733.js";
import "./debug.972d445d.js";
import "./help.b38df1d7.js";
import "./QBadge.d9f6bd9a.js";
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
