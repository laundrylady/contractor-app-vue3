import { _ as _sfc_main$1 } from "./GlobalNotifications.ba22453a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f6bee7e8.js";
import "./QToolbarTitle.3b0ce1ec.js";
import "./QTd.9cb39365.js";
import "./QTable.89931459.js";
import "./QList.56bbd19d.js";
import "./QMarkupTable.fdfc109f.js";
import "./QSelect.ae6eabb7.js";
import "./selection.17eb1196.js";
import "./QItemLabel.58d25c90.js";
import "./QMenu.99b4f319.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.abddd218.js";
import "./use-fullscreen.a4532333.js";
import "./ClosePopup.7f950f63.js";
import "./axios.7f29f827.js";
import "./debug.972d445d.js";
import "./help.1753c5fa.js";
import "./QBadge.f1d90eca.js";
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
