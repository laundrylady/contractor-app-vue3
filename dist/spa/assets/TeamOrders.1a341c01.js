import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.978a0ab0.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.208ac1b0.js";
import "./QTd.744c2900.js";
import "./QItemSection.cb2021ac.js";
import "./QList.6ca84d7d.js";
import "./QMenu.301576a0.js";
import "./selection.e6b30987.js";
import "./QTable.2e7a4d62.js";
import "./QMarkupTable.92e31526.js";
import "./QSelect.bc6f41c6.js";
import "./QItemLabel.68baf2c5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0a9b3381.js";
import "./use-fullscreen.6944e39f.js";
import "./ClosePopup.731518de.js";
import "./axios.affd6c01.js";
import "./StatusTag.034f2fab.js";
import "./QBadge.f04d9168.js";
import "./debug.972d445d.js";
import "./help.6314cd47.js";
import "./vue-i18n.runtime.esm-bundler.10e97838.js";
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
