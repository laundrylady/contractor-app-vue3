import { _ as _sfc_main$1 } from "./GlobalNotifications.c8ef8bf9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.fcad64dd.js";
import "./QToolbarTitle.287ac257.js";
import "./QToolbar.33fcd926.js";
import "./QTd.472d76d2.js";
import "./QTable.6334fe69.js";
import "./QList.95dd5c86.js";
import "./QMarkupTable.4e5db219.js";
import "./QSelect.9deb6b4f.js";
import "./QItemSection.4fc65ca0.js";
import "./QItemLabel.16c95bf4.js";
import "./QMenu.31cd8222.js";
import "./selection.5d189058.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a37048ab.js";
import "./use-fullscreen.be3edc95.js";
import "./ClosePopup.8330bfe5.js";
import "./axios.9fa0d74b.js";
import "./debug.b9d7424b.js";
import "./help.d6c13a33.js";
import "./QBadge.cdd4ae76.js";
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
