import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.51036bc7.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.7f74603c.js";
import "./QTd.fbefc905.js";
import "./QItemSection.4404f9eb.js";
import "./QList.f8018254.js";
import "./QMenu.1913c653.js";
import "./selection.65320923.js";
import "./QTable.9f1e59a9.js";
import "./QMarkupTable.98878d0b.js";
import "./QSelect.f0b82b2c.js";
import "./QItemLabel.1bb03b44.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b125a2c7.js";
import "./use-fullscreen.d195e904.js";
import "./ClosePopup.d510c5b5.js";
import "./axios.974431db.js";
import "./StatusTag.b57766e7.js";
import "./QBadge.fa9ecaab.js";
import "./debug.972d445d.js";
import "./help.3b8bb69e.js";
import "./vue-i18n.runtime.esm-bundler.b9b308c6.js";
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
