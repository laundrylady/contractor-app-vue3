import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.fd2b4f23.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.944bfff3.js";
import "./QBreadcrumbs.10765903.js";
import "./QSelect.3ac0f2e2.js";
import "./QItemSection.48114b1b.js";
import "./QItemLabel.dd8ce5dc.js";
import "./QMenu.68175fbd.js";
import "./selection.4770d8d9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.95af2519.js";
import "./QList.92347de5.js";
import "./QMarkupTable.9361c1fd.js";
import "./QLinearProgress.1322c577.js";
import "./use-fullscreen.42bcf791.js";
import "./axios.2dc359bb.js";
import "./DateField.5eb6bff1.js";
import "./QDate.517e4f58.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.1e4457cf.js";
import "./QPopupProxy.5d53b4a9.js";
import "./use-quasar.5c24a825.js";
import "./OrderListFormat.a49d2763.js";
import "./QSpace.26a45208.js";
import "./QBadge.8d9e8629.js";
import "./open-url.284d8ad0.js";
import "./debug.b9d7424b.js";
import "./help.b3e2d521.js";
import "./geolocation.a4fd6f96.js";
import "./StatusTag.fef3119c.js";
import "./UserAvatar.c68dfa4a.js";
import "./use-ratio.f6691a74.js";
import "./security.caa87ef4.js";
import "./vue-i18n.runtime.esm-bundler.dabb5557.js";
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
