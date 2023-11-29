import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.32a2fb60.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.769a5324.js";
import "./QTd.7ef2b966.js";
import "./QItemSection.ecc22d24.js";
import "./QList.e1c8acd9.js";
import "./QMenu.b82f56f8.js";
import "./selection.1719acf0.js";
import "./QTable.19a8aee7.js";
import "./QMarkupTable.52a2b907.js";
import "./QSelect.a9d8d476.js";
import "./QItemLabel.1acb84cc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.5f3c44a2.js";
import "./use-fullscreen.e5ec6897.js";
import "./ClosePopup.4f03ad0b.js";
import "./axios.4891fd4d.js";
import "./StatusTag.e5e5413c.js";
import "./QBadge.b550901a.js";
import "./debug.972d445d.js";
import "./help.bc831a23.js";
import "./vue-i18n.runtime.esm-bundler.13f14679.js";
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
