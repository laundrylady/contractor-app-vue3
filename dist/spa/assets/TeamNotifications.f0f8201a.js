import { _ as _sfc_main$1 } from "./GlobalNotifications.2dd881f6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.3b1f6dca.js";
import "./QToolbarTitle.a404fc38.js";
import "./QTd.5fe3f540.js";
import "./QTable.bd2f2f50.js";
import "./QList.d0ffde4f.js";
import "./QMarkupTable.33f300da.js";
import "./QSelect.5545e9cd.js";
import "./QItemSection.19624de0.js";
import "./QItemLabel.054a644f.js";
import "./QMenu.1e7752f1.js";
import "./selection.29e02e4f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1409c9e3.js";
import "./use-fullscreen.e535228a.js";
import "./ClosePopup.eaa1fb65.js";
import "./axios.306b0a63.js";
import "./debug.972d445d.js";
import "./help.cdbb3d30.js";
import "./QBadge.cad84f5a.js";
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
