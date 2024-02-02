import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.32bba1a5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.20697ea6.js";
import "./QBreadcrumbs.1488bc18.js";
import "./QSelect.6f5386a0.js";
import "./QItemSection.dd5de9a0.js";
import "./QItemLabel.7319a52a.js";
import "./QMenu.a77266c1.js";
import "./selection.fe7f8781.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.9743a71b.js";
import "./QList.1018c7aa.js";
import "./QMarkupTable.6010d5b6.js";
import "./QLinearProgress.86fb240a.js";
import "./use-fullscreen.6769b532.js";
import "./axios.819bf786.js";
import "./DateField.3f23ca80.js";
import "./QDate.734de68c.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.6cfd3e5b.js";
import "./QPopupProxy.bec7d758.js";
import "./use-quasar.26b4b9c6.js";
import "./OrderListFormat.7bc49a3e.js";
import "./QSpace.d6489a20.js";
import "./QBadge.6f1f3a17.js";
import "./open-url.c92fd700.js";
import "./debug.b9d7424b.js";
import "./help.afad5e12.js";
import "./geolocation.35f076bb.js";
import "./StatusTag.559cc746.js";
import "./UserAvatar.faada0ed.js";
import "./use-ratio.94974f9f.js";
import "./security.20ed58ef.js";
import "./vue-i18n.runtime.esm-bundler.a93713c0.js";
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
