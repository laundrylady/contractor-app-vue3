import { _ as _sfc_main$1 } from "./GlobalNotifications.71608a9d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.109aab81.js";
import "./QToolbarTitle.646933ef.js";
import "./QToolbar.7de40ad8.js";
import "./QTd.b85e2a2f.js";
import "./QTable.7e388159.js";
import "./QList.69f15000.js";
import "./QMarkupTable.b44db94c.js";
import "./QSelect.2ac7a0e8.js";
import "./QItemSection.3d6683d4.js";
import "./QItemLabel.6de4410d.js";
import "./QMenu.48463e4e.js";
import "./selection.678cafa9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.ea084d2b.js";
import "./use-fullscreen.11fc1fcf.js";
import "./ClosePopup.9895b2d3.js";
import "./axios.122a6dc1.js";
import "./debug.b9d7424b.js";
import "./help.083b28ce.js";
import "./QBadge.2d4856a0.js";
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
