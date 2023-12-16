import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.2239e318.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.3493713e.js";
import "./QTd.60652365.js";
import "./QItemSection.8042ade3.js";
import "./QList.210d0b48.js";
import "./QMenu.31c45b16.js";
import "./selection.119f4514.js";
import "./QTable.4fcaa69e.js";
import "./QMarkupTable.4d70b6e7.js";
import "./QSelect.9408b07f.js";
import "./QItemLabel.fcab7aaf.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1a07cbe0.js";
import "./use-fullscreen.aeb2e555.js";
import "./ClosePopup.de5676a5.js";
import "./axios.51cbb93a.js";
import "./StatusTag.1ddcdf0e.js";
import "./QBadge.159e94fd.js";
import "./debug.972d445d.js";
import "./help.7d15b7b7.js";
import "./vue-i18n.runtime.esm-bundler.5c05a76f.js";
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
