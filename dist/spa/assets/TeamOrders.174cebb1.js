import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.87bdb91f.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.909d8447.js";
import "./QTd.0ab75159.js";
import "./selection.b37ccca0.js";
import "./QList.48b8236b.js";
import "./QMenu.f5054dc0.js";
import "./QTable.1ce7b8aa.js";
import "./QMarkupTable.38d95f5e.js";
import "./QSelect.4ea71d9c.js";
import "./QItemLabel.415ed021.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.dd6f1363.js";
import "./use-fullscreen.dc294ee1.js";
import "./ClosePopup.1b6117b6.js";
import "./axios.cc1e1de2.js";
import "./StatusTag.a82e7121.js";
import "./QBadge.fbf19264.js";
import "./debug.ffa51329.js";
import "./help.92015474.js";
import "./vue-i18n.runtime.esm-bundler.e98f4e48.js";
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
