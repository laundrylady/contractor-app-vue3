import { _ as _sfc_main$1 } from "./GlobalNotifications.0426dcb1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.b933ddc7.js";
import "./QToolbarTitle.536b138d.js";
import "./QTd.118c335d.js";
import "./QTable.b9016f2e.js";
import "./QList.0e92e88d.js";
import "./QMarkupTable.857d6778.js";
import "./QSelect.2e393bff.js";
import "./QItemSection.541395cc.js";
import "./QItemLabel.1e5d20ef.js";
import "./QMenu.80fdd35e.js";
import "./selection.a38a2ac7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.235efbed.js";
import "./use-fullscreen.f6213573.js";
import "./ClosePopup.3d66101d.js";
import "./axios.cc67cde9.js";
import "./debug.972d445d.js";
import "./help.cac0f575.js";
import "./QBadge.25543fb2.js";
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
