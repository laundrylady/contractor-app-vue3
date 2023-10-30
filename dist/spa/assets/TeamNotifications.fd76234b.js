import { _ as _sfc_main$1 } from "./GlobalNotifications.1e880a9f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.644e4200.js";
import "./QToolbarTitle.f3f82c1f.js";
import "./QTd.5dbb1c09.js";
import "./QTable.78a280ee.js";
import "./QList.7529ab5e.js";
import "./QMarkupTable.48f8f9e8.js";
import "./QSelect.ab5d7e64.js";
import "./selection.9cd71d51.js";
import "./QItemLabel.bd8cb11b.js";
import "./QMenu.48a0f8bf.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c047bc8d.js";
import "./use-fullscreen.18231a48.js";
import "./ClosePopup.fd63b92d.js";
import "./axios.6442d350.js";
import "./debug.972d445d.js";
import "./help.02d8b462.js";
import "./QBadge.2937004a.js";
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
