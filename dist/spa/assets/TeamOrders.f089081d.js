import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.42e7ab3e.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.2182576f.js";
import "./QTable.bbcf1d0a.js";
import "./QList.5b409a1a.js";
import "./QMarkupTable.7c3ace04.js";
import "./QSelect.136ed1bb.js";
import "./selection.f936c299.js";
import "./QItemLabel.1a6e9b1c.js";
import "./QMenu.6bcc5c7b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d95cc4ac.js";
import "./use-fullscreen.e3f1d044.js";
import "./ClosePopup.20112040.js";
import "./axios.5a455801.js";
import "./StatusTag.d2d6ec38.js";
import "./QBadge.6e3345a8.js";
import "./debug.ffa51329.js";
import "./help.258f7feb.js";
import "./vue-i18n.runtime.esm-bundler.6f76a9b4.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Booking History", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Below is the complete booking history.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamOrders",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        _hoisted_3,
        createVNode(_sfc_main$1, {
          team_id: __props.model.id
        }, null, 8, ["team_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
