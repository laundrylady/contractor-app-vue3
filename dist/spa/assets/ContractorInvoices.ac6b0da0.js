import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.89d87b9d.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.b7592623.js";
import { Q as QRouteTab } from "./QRouteTab.df20acdc.js";
import { Q as QTabs } from "./QTabs.32c9996c.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.f3588d19.js";
import "./QResizeObserver.aedce5a2.js";
import "./rtl.b51694b1.js";
import "./QSelect.c6231689.js";
import "./QItemSection.90c0765f.js";
import "./QItemLabel.f6f290c5.js";
import "./QMenu.a48b1832.js";
import "./selection.bf427183.js";
import "./format.3e32b8d9.js";
import "./QSpace.59289600.js";
import "./QTd.60631a3d.js";
import "./QTable.ee95b41c.js";
import "./QList.00735a2f.js";
import "./QMarkupTable.2da47f34.js";
import "./QLinearProgress.d9280ded.js";
import "./use-fullscreen.3e8298d1.js";
import "./open-url.9a580863.js";
import "./axios.fda26b8c.js";
import "./StatusTag.0e98c019.js";
import "./QBadge.ad79e667.js";
import "./UserAvatar.2eba50cd.js";
import "./use-ratio.4cd442e3.js";
import "./QDate.b9970035.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.0a14ea18.js";
import "./QPopupProxy.ef8ad7c3.js";
import "./use-quasar.8b531ba6.js";
import "./debug.b9d7424b.js";
import "./help.61c01f78.js";
import "./vue-i18n.runtime.esm-bundler.64cebf7d.js";
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
