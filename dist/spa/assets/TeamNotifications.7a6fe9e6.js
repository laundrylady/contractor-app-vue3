import { _ as _sfc_main$1 } from "./GlobalNotifications.c9928022.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.c5118e29.js";
import "./QToolbarTitle.1755e568.js";
import "./QTd.e19a1fea.js";
import "./QTable.f660c723.js";
import "./QList.98c06205.js";
import "./QMarkupTable.fc2f95c8.js";
import "./QSelect.a6958ac0.js";
import "./QItemSection.f83fd0c5.js";
import "./QItemLabel.8416713a.js";
import "./QMenu.9ddada38.js";
import "./selection.7210b64a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a2cff885.js";
import "./use-fullscreen.ac4597f7.js";
import "./ClosePopup.b1490340.js";
import "./axios.4b346699.js";
import "./debug.972d445d.js";
import "./help.3ac2b17c.js";
import "./QBadge.041f0e72.js";
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
