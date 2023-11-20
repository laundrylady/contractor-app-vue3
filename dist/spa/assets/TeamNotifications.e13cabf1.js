import { _ as _sfc_main$1 } from "./GlobalNotifications.a8fc0978.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e689b3a4.js";
import "./QToolbarTitle.424bf52e.js";
import "./QTd.1fcacd53.js";
import "./QTable.ed8f700a.js";
import "./QList.67f13691.js";
import "./QMarkupTable.014a3cb4.js";
import "./QSelect.feaeb567.js";
import "./QItemSection.66a439b4.js";
import "./QItemLabel.bab8af8b.js";
import "./QMenu.f2d7af9d.js";
import "./selection.8bb6db55.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f4c68dee.js";
import "./use-fullscreen.4c691057.js";
import "./ClosePopup.68362c44.js";
import "./axios.0186e3dc.js";
import "./debug.972d445d.js";
import "./help.3662df67.js";
import "./QBadge.d81d74ef.js";
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
