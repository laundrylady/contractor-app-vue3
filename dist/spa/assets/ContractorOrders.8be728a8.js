import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.4a01f382.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.9eb88662.js";
import "./QBreadcrumbs.3771fcbf.js";
import "./QSelect.c74eab78.js";
import "./QItemSection.bd5d9e5f.js";
import "./QItemLabel.c607c146.js";
import "./QMenu.0779b89b.js";
import "./selection.ccc35532.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.0acf2e6a.js";
import "./QList.7060f3df.js";
import "./QMarkupTable.56cc14cf.js";
import "./QLinearProgress.2bc59aba.js";
import "./use-fullscreen.aea3812b.js";
import "./axios.9bbea1e2.js";
import "./DateField.90a0d40a.js";
import "./QDate.dd09d68f.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.79239a32.js";
import "./QPopupProxy.d1e4f070.js";
import "./use-quasar.668a25e3.js";
import "./OrderListFormat.4b34f577.js";
import "./QSpace.b3da232d.js";
import "./QBadge.d343910f.js";
import "./open-url.14c3761a.js";
import "./debug.b9d7424b.js";
import "./help.f70a8b9a.js";
import "./geolocation.4c12eb8a.js";
import "./StatusTag.f115abe0.js";
import "./UserAvatar.e684a4a5.js";
import "./use-ratio.6ddb72a5.js";
import "./security.74355c43.js";
import "./vue-i18n.runtime.esm-bundler.c4469535.js";
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
