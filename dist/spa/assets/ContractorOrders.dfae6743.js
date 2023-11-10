import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.769ead65.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.99efffbb.js";
import "./QTd.2a4ecd17.js";
import "./selection.6389d1ab.js";
import "./QList.d6f07fea.js";
import "./QMenu.e68e7f6e.js";
import "./QTable.8faa7926.js";
import "./QMarkupTable.dacee3e2.js";
import "./QSelect.20dace88.js";
import "./QItemLabel.ca507f7a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.750b4d52.js";
import "./use-fullscreen.33c23ba7.js";
import "./ClosePopup.b51b9765.js";
import "./axios.c7749e6f.js";
import "./StatusTag.67677f83.js";
import "./QBadge.68e8a347.js";
import "./debug.972d445d.js";
import "./help.7ec22b05.js";
import "./vue-i18n.runtime.esm-bundler.184c2c5b.js";
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
