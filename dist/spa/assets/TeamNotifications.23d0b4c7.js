import { _ as _sfc_main$1 } from "./GlobalNotifications.e4ab51af.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.da11e37d.js";
import "./QToolbarTitle.d44ff3de.js";
import "./QTd.7916fa25.js";
import "./QTable.bfd211b4.js";
import "./QList.bba9cbb5.js";
import "./QMarkupTable.1ac67de5.js";
import "./QSelect.c39b1e78.js";
import "./QItemSection.4c7ec0bf.js";
import "./QItemLabel.453652dd.js";
import "./QMenu.3bf9381f.js";
import "./selection.b27183ff.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.4baf75e7.js";
import "./use-fullscreen.26653d26.js";
import "./ClosePopup.a11cc418.js";
import "./axios.cc162f2e.js";
import "./debug.972d445d.js";
import "./help.dda3e3ab.js";
import "./QBadge.6eb1e644.js";
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
