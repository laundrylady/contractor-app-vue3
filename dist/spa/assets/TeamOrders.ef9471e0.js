import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.92e0ae81.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode, q as createBaseVNode } from "./index.3359169e.js";
import "./QTable.fdcd88ed.js";
import "./QList.95271f43.js";
import "./QMarkupTable.a15737d9.js";
import "./QSelect.10878a08.js";
import "./QItemSection.73389b03.js";
import "./rtl.47c54deb.js";
import "./format.91cb2860.js";
import "./QLinearProgress.166e0705.js";
import "./use-fullscreen.4c886dbc.js";
import "./ClosePopup.678cb922.js";
import "./axios.cc17e3e5.js";
import "./StatusTag.e073f7e8.js";
import "./QBadge.ff1fedb5.js";
import "./debug.805a8aef.js";
import "./help.5154fe45.js";
import "./vue-i18n.runtime.esm-bundler.5f6642b6.js";
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
