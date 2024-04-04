import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.21f017a5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.02752fdf.js";
import "./QBreadcrumbs.8e6bd903.js";
import "./QSelect.6c30b80a.js";
import "./QItemSection.575c0d24.js";
import "./QItemLabel.984ed152.js";
import "./QMenu.fdd763cf.js";
import "./selection.e02dd1ff.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.ef4014e6.js";
import "./QList.00b0b4f6.js";
import "./QMarkupTable.684971af.js";
import "./QLinearProgress.081698fc.js";
import "./use-fullscreen.029473d0.js";
import "./axios.00cbe647.js";
import "./DateField.65a503b3.js";
import "./QDate.d70247cd.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.08e6270c.js";
import "./QPopupProxy.587b65cf.js";
import "./use-quasar.0c9e547b.js";
import "./OrderListFormat.3645bc44.js";
import "./QSpace.d49d127e.js";
import "./QBadge.dbfd5704.js";
import "./open-url.1fec6a5f.js";
import "./debug.b9d7424b.js";
import "./help.b70e499f.js";
import "./geolocation.bc3dbea9.js";
import "./StatusTag.25c97b5c.js";
import "./UserAvatar.02a440ce.js";
import "./use-ratio.5ceebd7f.js";
import "./security.50cb0d3b.js";
import "./vue-i18n.runtime.esm-bundler.c1db4eaa.js";
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
