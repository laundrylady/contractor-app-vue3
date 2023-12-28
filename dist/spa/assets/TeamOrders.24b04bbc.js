import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.2663f968.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.fcad64dd.js";
import "./QTd.472d76d2.js";
import "./QItemSection.4fc65ca0.js";
import "./QList.95dd5c86.js";
import "./QMenu.31cd8222.js";
import "./selection.5d189058.js";
import "./QTable.6334fe69.js";
import "./QMarkupTable.4e5db219.js";
import "./QSelect.9deb6b4f.js";
import "./QItemLabel.16c95bf4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a37048ab.js";
import "./use-fullscreen.be3edc95.js";
import "./ClosePopup.8330bfe5.js";
import "./axios.9fa0d74b.js";
import "./StatusTag.5ea959fb.js";
import "./QBadge.cdd4ae76.js";
import "./debug.b9d7424b.js";
import "./help.d6c13a33.js";
import "./vue-i18n.runtime.esm-bundler.02fec4f9.js";
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
