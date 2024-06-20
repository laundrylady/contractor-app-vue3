import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.4d3d71da.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.370d568b.js";
import "./QBreadcrumbs.a9b3762c.js";
import "./QSelect.4b2b6f1c.js";
import "./selection.86096579.js";
import "./QItemLabel.f007e025.js";
import "./QMenu.f484e851.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.5dba33db.js";
import "./QList.5eb6c5a3.js";
import "./QMarkupTable.b25e35ab.js";
import "./QLinearProgress.28fd3ac1.js";
import "./use-fullscreen.f983417c.js";
import "./axios.d95458b2.js";
import "./DateField.f9c8f28a.js";
import "./QDate.7625de6c.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.87a0c774.js";
import "./QPopupProxy.9473f9cb.js";
import "./use-quasar.66ec93ce.js";
import "./OrderListFormat.8d14c8da.js";
import "./QSpace.044271bc.js";
import "./QBadge.371276a3.js";
import "./open-url.9e038ef3.js";
import "./debug.b9d7424b.js";
import "./help.3de5c98f.js";
import "./geolocation.e299bc6b.js";
import "./StatusTag.6cfa3aba.js";
import "./UserAvatar.b6f95d46.js";
import "./use-ratio.f35899fa.js";
import "./security.48bce847.js";
import "./vue-i18n.runtime.esm-bundler.54b38b06.js";
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
