import { _ as _sfc_main$1 } from "./GlobalNotifications.c7ab31ba.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.ef1b2cb4.js";
import "./QToolbarTitle.26478d01.js";
import "./QTable.c6c6941a.js";
import "./QList.4bb90025.js";
import "./QMarkupTable.81cafe9e.js";
import "./QSelect.2ec92ecf.js";
import "./QItemSection.71b58638.js";
import "./selection.bb98bc68.js";
import "./QMenu.9b70bf89.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.cd12a860.js";
import "./use-fullscreen.a938620b.js";
import "./ClosePopup.0453095b.js";
import "./axios.b301f987.js";
import "./debug.ffa51329.js";
import "./help.470b0717.js";
import "./QBadge.095bbffc.js";
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
