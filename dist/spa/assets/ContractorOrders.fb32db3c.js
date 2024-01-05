import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.dd9a110b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.1d5fa541.js";
import "./QBreadcrumbs.9d5c5d8a.js";
import "./QSelect.81244991.js";
import "./format.5ed25bdf.js";
import "./QItemLabel.69f8a575.js";
import "./selection.b5cfb32d.js";
import "./rtl.b51694b1.js";
import "./QTable.a3bd77b6.js";
import "./QList.3ac703b6.js";
import "./QMarkupTable.efc731bb.js";
import "./QLinearProgress.b60b481f.js";
import "./use-fullscreen.8a09d8a8.js";
import "./axios.7b7a7671.js";
import "./DateField.3d1e79c8.js";
import "./QDate.4879e41e.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.a016ada5.js";
import "./QPopupProxy.9f186051.js";
import "./use-quasar.50175128.js";
import "./OrderListFormat.8c1746f8.js";
import "./QToolbarTitle.12dd6642.js";
import "./QSpace.8ee24c7d.js";
import "./QToolbar.b54d702c.js";
import "./QBadge.088da7c5.js";
import "./index.esm.0c06f1f1.js";
import "./debug.b9d7424b.js";
import "./help.ebebc6ca.js";
import "./security.de5fc3ff.js";
import "./helpers.3c1554ac.js";
import "./vue-i18n.runtime.esm-bundler.c9782f2f.js";
import "./OrderContractorManagement.424af9e0.js";
import "./UserAvatar.6a068dab.js";
import "./QImg.4c076bd5.js";
import "./use-ratio.4c8745fd.js";
import "./open-url.16812c6d.js";
import "./geolocation.5dca4b45.js";
import "./StatusTag.960d4ce5.js";
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
