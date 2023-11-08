import { _ as _sfc_main$1 } from "./GlobalNotifications.dc1d3027.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.0bb869f5.js";
import "./QToolbarTitle.16cc08df.js";
import "./QTd.76c5e824.js";
import "./QTable.3621633a.js";
import "./QList.2392688b.js";
import "./QMarkupTable.bfbb0b50.js";
import "./QSelect.f6437a33.js";
import "./selection.61c5117f.js";
import "./QItemLabel.486176b7.js";
import "./QMenu.e4b71d9b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.67aace2e.js";
import "./use-fullscreen.75c7e351.js";
import "./ClosePopup.61da60db.js";
import "./axios.202cb7ab.js";
import "./debug.972d445d.js";
import "./help.98b6157c.js";
import "./QBadge.1979efb4.js";
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
