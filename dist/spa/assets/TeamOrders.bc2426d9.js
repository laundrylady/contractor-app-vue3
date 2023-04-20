import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.f199e258.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode, q as createBaseVNode } from "./index.e7424e86.js";
import "./QTable.f1354ab1.js";
import "./QList.4caebc00.js";
import "./QMarkupTable.40cb7b94.js";
import "./QSelect.fc8325f9.js";
import "./QItemSection.56dfbcc4.js";
import "./rtl.c1ddf9d1.js";
import "./format.711dd4cb.js";
import "./QLinearProgress.73bc0d9e.js";
import "./ClosePopup.351cedad.js";
import "./axios.e112af7f.js";
import "./StatusTag.ff22a4cf.js";
import "./QBadge.e7c88050.js";
import "./debug.805a8aef.js";
import "./help.f4bb6a30.js";
import "./vue-i18n.runtime.esm-bundler.bd3fa8fd.js";
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
