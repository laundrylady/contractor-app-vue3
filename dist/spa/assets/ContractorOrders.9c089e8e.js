import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.b7305359.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.56d10e03.js";
import "./QTd.1c3d671a.js";
import "./selection.b9219e3c.js";
import "./QList.1c88c78c.js";
import "./QMenu.73c16fc7.js";
import "./QTable.2becd57f.js";
import "./QMarkupTable.7a93b76b.js";
import "./QSelect.44b3cd04.js";
import "./QItemLabel.79ad69aa.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d9219a73.js";
import "./use-fullscreen.49a3ca9d.js";
import "./ClosePopup.59eacbaa.js";
import "./axios.db77a32a.js";
import "./StatusTag.f10b0940.js";
import "./QBadge.abc606a0.js";
import "./debug.972d445d.js";
import "./help.211327e8.js";
import "./vue-i18n.runtime.esm-bundler.e5f33288.js";
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
