import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.a6bd4442.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.859cb660.js";
import "./QTable.d01b5a90.js";
import "./QList.6ec0db61.js";
import "./QSelect.004b04e5.js";
import "./QItemSection.b7e689a7.js";
import "./format.40c4273f.js";
import "./QLinearProgress.330b43d4.js";
import "./use-fullscreen.44e22a52.js";
import "./ClosePopup.4ce26240.js";
import "./axios.c622a4bf.js";
import "./StatusTag.e5421ff2.js";
import "./QBadge.c6a12190.js";
import "./debug.805a8aef.js";
import "./help.d852d987.js";
import "./vue-i18n.runtime.esm-bundler.b8dae2b5.js";
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
