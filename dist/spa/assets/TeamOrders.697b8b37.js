import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.11adcfda.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.e94f5960.js";
import "./QTable.522ca16a.js";
import "./QList.3e9c77b4.js";
import "./QSelect.11126e51.js";
import "./QItemSection.d938c332.js";
import "./format.6405c3bf.js";
import "./QLinearProgress.c9ec1663.js";
import "./use-fullscreen.6b63f37b.js";
import "./ClosePopup.cddcf942.js";
import "./axios.300ce40b.js";
import "./StatusTag.32017c2e.js";
import "./QBadge.d4934a1a.js";
import "./debug.805a8aef.js";
import "./help.759ffad4.js";
import "./vue-i18n.runtime.esm-bundler.07e59783.js";
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
