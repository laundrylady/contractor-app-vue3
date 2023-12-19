import { _ as _sfc_main$1 } from "./GlobalNotifications.3251a23b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.36ffcf9b.js";
import "./QToolbarTitle.3432061f.js";
import "./QTd.3bdb7a25.js";
import "./QTable.3460cabc.js";
import "./QList.2a640182.js";
import "./QMarkupTable.29ba1a9e.js";
import "./QSelect.c615a3ab.js";
import "./QItemSection.30f99eb3.js";
import "./QItemLabel.06d297de.js";
import "./QMenu.e0177a67.js";
import "./selection.0c7ccc1b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3c0f7f84.js";
import "./use-fullscreen.827afacc.js";
import "./ClosePopup.e6da29e8.js";
import "./axios.ae54ae36.js";
import "./debug.972d445d.js";
import "./help.bf487f3c.js";
import "./QBadge.29bb66b0.js";
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
