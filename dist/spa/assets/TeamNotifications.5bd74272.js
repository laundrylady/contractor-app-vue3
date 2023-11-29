import { _ as _sfc_main$1 } from "./GlobalNotifications.bb030887.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.769a5324.js";
import "./QToolbarTitle.a71d23c3.js";
import "./QTd.7ef2b966.js";
import "./QTable.19a8aee7.js";
import "./QList.e1c8acd9.js";
import "./QMarkupTable.52a2b907.js";
import "./QSelect.a9d8d476.js";
import "./QItemSection.ecc22d24.js";
import "./QItemLabel.1acb84cc.js";
import "./QMenu.b82f56f8.js";
import "./selection.1719acf0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.5f3c44a2.js";
import "./use-fullscreen.e5ec6897.js";
import "./ClosePopup.4f03ad0b.js";
import "./axios.4891fd4d.js";
import "./debug.972d445d.js";
import "./help.bc831a23.js";
import "./QBadge.b550901a.js";
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
