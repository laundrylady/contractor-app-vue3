import { _ as _sfc_main$1 } from "./GlobalNotifications.2609d9fc.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.80e136e1.js";
import "./QToolbarTitle.c1ffa668.js";
import "./QTd.baa6bd4f.js";
import "./QTable.15970372.js";
import "./QList.4042e6d6.js";
import "./QMarkupTable.3664b66c.js";
import "./QSelect.2c999da5.js";
import "./selection.9ea5ec5d.js";
import "./QItemLabel.1c53f4dc.js";
import "./QMenu.30761d00.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1936cfd0.js";
import "./use-fullscreen.94e04e73.js";
import "./ClosePopup.35404fc0.js";
import "./axios.b8650811.js";
import "./debug.ffa51329.js";
import "./help.9e238adb.js";
import "./QBadge.e66f1406.js";
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
