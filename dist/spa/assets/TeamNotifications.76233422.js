import { _ as _sfc_main$1 } from "./GlobalNotifications.9700a080.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.0095e572.js";
import "./QToolbarTitle.887cb456.js";
import "./QTd.6bf64332.js";
import "./QTable.44371d61.js";
import "./QList.74ad8538.js";
import "./QMarkupTable.93811146.js";
import "./QSelect.56e6ee3f.js";
import "./selection.c2acc0d2.js";
import "./QItemLabel.fd9abae6.js";
import "./QMenu.11ae87e4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.400d6087.js";
import "./use-fullscreen.28b7f5e4.js";
import "./ClosePopup.f66bea2c.js";
import "./axios.fc6bc4c0.js";
import "./debug.972d445d.js";
import "./help.667e8e69.js";
import "./QBadge.59846f77.js";
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
