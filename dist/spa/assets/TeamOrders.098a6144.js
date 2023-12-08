import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.9086b5d4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.3f86858d.js";
import "./QTd.c476b9be.js";
import "./QItemSection.a3ff7647.js";
import "./QList.59a6b87b.js";
import "./QMenu.63bb0d4f.js";
import "./selection.0f570696.js";
import "./QTable.a5dd68b6.js";
import "./QMarkupTable.2f85fb62.js";
import "./QSelect.154dcb87.js";
import "./QItemLabel.9b951f4a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.aabd49be.js";
import "./use-fullscreen.c3b95283.js";
import "./ClosePopup.483112bc.js";
import "./axios.cff98580.js";
import "./StatusTag.4e3046a3.js";
import "./QBadge.3667f11c.js";
import "./debug.972d445d.js";
import "./help.5e478062.js";
import "./vue-i18n.runtime.esm-bundler.82b9016d.js";
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
