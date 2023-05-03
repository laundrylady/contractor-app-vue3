import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.14c480c9.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.f596c8b4.js";
import "./QTable.d7bb4f34.js";
import "./QList.0be7fff6.js";
import "./QMarkupTable.d01b3e45.js";
import "./QSelect.062469f2.js";
import "./QItemSection.428ce3b8.js";
import "./rtl.a33aca76.js";
import "./format.ce8c2b83.js";
import "./QLinearProgress.bbb2424d.js";
import "./use-fullscreen.ea6ac12a.js";
import "./ClosePopup.0f34e25b.js";
import "./axios.165a10e8.js";
import "./StatusTag.740d6073.js";
import "./QBadge.4a0fce4e.js";
import "./debug.805a8aef.js";
import "./help.f405f514.js";
import "./vue-i18n.runtime.esm-bundler.6aeff9f1.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Booking History", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorOrders",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("p", null, "Below is the complete booking history for this " + toDisplayString(_ctx.$t("contractor.name").toLowerCase()) + ".", 1),
        createVNode(_sfc_main$1, {
          contractor_user_id: __props.model.id
        }, null, 8, ["contractor_user_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
