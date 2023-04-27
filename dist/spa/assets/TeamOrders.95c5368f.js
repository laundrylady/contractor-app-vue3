import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.01556e1e.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode, q as createBaseVNode } from "./index.f0b4ebe6.js";
import "./QTable.073d2b2c.js";
import "./QList.4c7ed513.js";
import "./QMarkupTable.f837a51b.js";
import "./QSelect.4af0b214.js";
import "./QItemSection.9ea19b97.js";
import "./rtl.7f1de635.js";
import "./format.8242738c.js";
import "./QLinearProgress.a8fe1326.js";
import "./ClosePopup.b9029680.js";
import "./axios.d61905ae.js";
import "./StatusTag.5102fbf8.js";
import "./QBadge.24d439f8.js";
import "./debug.805a8aef.js";
import "./help.cd1e743b.js";
import "./vue-i18n.runtime.esm-bundler.538d42ab.js";
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
