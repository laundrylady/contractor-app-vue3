import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.d881d216.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.c99f45d0.js";
import { Q as QRouteTab } from "./QRouteTab.01501fb2.js";
import { Q as QTabs } from "./QTabs.850855e2.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.8c542978.js";
import "./QResizeObserver.0b8d3586.js";
import "./rtl.b51694b1.js";
import "./QSelect.e82ba68e.js";
import "./QItemSection.b380d0c4.js";
import "./QItemLabel.050cf4b9.js";
import "./QMenu.79272061.js";
import "./selection.e7968301.js";
import "./format.3e32b8d9.js";
import "./QSpace.846c4acf.js";
import "./QTd.c971f657.js";
import "./QTable.935542e8.js";
import "./QList.0e1cfd0b.js";
import "./QMarkupTable.ca3d301a.js";
import "./QLinearProgress.75fa506f.js";
import "./use-fullscreen.8f18f9f8.js";
import "./open-url.c9411457.js";
import "./axios.d5f35dd5.js";
import "./StatusTag.3c30a3da.js";
import "./QBadge.5d0408a3.js";
import "./UserAvatar.774ce353.js";
import "./use-ratio.59088ed6.js";
import "./QDate.907e993d.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.fcfa3697.js";
import "./QPopupProxy.5567f5ea.js";
import "./use-quasar.c929c652.js";
import "./debug.b9d7424b.js";
import "./help.601a2494.js";
import "./vue-i18n.runtime.esm-bundler.84382566.js";
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
