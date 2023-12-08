import { _ as _sfc_main$1 } from "./GlobalNotifications.b75ea202.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.439f6236.js";
import "./QToolbarTitle.823a91b5.js";
import "./QTd.c986cb65.js";
import "./QTable.8d0da59d.js";
import "./QList.aae51351.js";
import "./QMarkupTable.1b517b2f.js";
import "./QSelect.fe07d48e.js";
import "./QItemSection.17637cbf.js";
import "./QItemLabel.ac4e31dc.js";
import "./QMenu.537a7799.js";
import "./selection.73cc12e4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.4fb0aedb.js";
import "./use-fullscreen.d688aa89.js";
import "./ClosePopup.51c7b908.js";
import "./axios.77c66b00.js";
import "./debug.972d445d.js";
import "./help.7be4cca3.js";
import "./QBadge.d8f94e4d.js";
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
