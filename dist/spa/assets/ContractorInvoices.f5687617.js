import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.42bdc4c5.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.aa2b4bfb.js";
import { Q as QRouteTab } from "./QRouteTab.778bac41.js";
import { Q as QTabs } from "./QTabs.0c2e489b.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.c94527b0.js";
import "./QResizeObserver.e8e7119d.js";
import "./rtl.b51694b1.js";
import "./QSelect.1dcbaa44.js";
import "./QItemSection.502da376.js";
import "./QItemLabel.ee412878.js";
import "./QMenu.ef580008.js";
import "./selection.f1aee430.js";
import "./format.3e32b8d9.js";
import "./QSpace.fb010212.js";
import "./QTd.78f0f19b.js";
import "./QTable.45818293.js";
import "./QList.6dee3287.js";
import "./QMarkupTable.065dac23.js";
import "./QLinearProgress.c9d3c9aa.js";
import "./use-fullscreen.bc9c04b3.js";
import "./open-url.18b22aa0.js";
import "./axios.fa438b1c.js";
import "./StatusTag.f2172c61.js";
import "./QBadge.e2678f2d.js";
import "./UserAvatar.2d8d5885.js";
import "./use-ratio.f1777503.js";
import "./QDate.b4a85914.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.6d399c1f.js";
import "./QPopupProxy.e08212f3.js";
import "./use-quasar.5dfdd90d.js";
import "./debug.b9d7424b.js";
import "./help.a99f9321.js";
import "./vue-i18n.runtime.esm-bundler.468885c9.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorInvoices",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        !_ctx.$q.screen.xs ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(QBreadcrumbs, { class: "q-mb-md" }, {
            separator: withCtx(() => [
              createVNode(QIcon, {
                size: "1.5em",
                name: "chevron_right"
              })
            ]),
            default: withCtx(() => [
              createVNode(QBreadcrumbsEl, {
                label: "Home",
                icon: "home",
                to: { name: "appDashboard" }
              }),
              createVNode(QBreadcrumbsEl, {
                label: "Profile",
                to: { name: "contractor-dashboard" }
              }),
              createVNode(QBreadcrumbsEl, { label: "Commissions" })
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        createVNode(QCard, null, {
          default: withCtx(() => [
            createVNode(QTabs, { align: "left" }, {
              default: withCtx(() => [
                createVNode(QRouteTab, {
                  to: { name: "contractor-commission-paid" },
                  label: "Commissions"
                }),
                createVNode(QRouteTab, {
                  to: { name: "contractor-invoices" },
                  label: "Invoices"
                })
              ]),
              _: 1
            }),
            createVNode(_sfc_main$1)
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
