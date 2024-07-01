import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.f0bcd142.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.32e81bb6.js";
import { Q as QRouteTab } from "./QRouteTab.f78c4a0b.js";
import { Q as QTabs } from "./QTabs.602a3d7e.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.605b5e47.js";
import "./QResizeObserver.0555639a.js";
import "./rtl.276c3f1b.js";
import "./QSelect.d87a43fc.js";
import "./selection.07b4b8ad.js";
import "./QItemLabel.2a9c8bab.js";
import "./QMenu.7752fb6c.js";
import "./format.de7e9769.js";
import "./QSpace.5e14bc58.js";
import "./QTd.d67efcc3.js";
import "./QTable.4f4476ce.js";
import "./QList.cff4e2be.js";
import "./QMarkupTable.55d38bf8.js";
import "./QLinearProgress.7104b56a.js";
import "./use-fullscreen.39c9d854.js";
import "./open-url.8fb9519c.js";
import "./axios.c33bd943.js";
import "./StatusTag.4e92912d.js";
import "./QBadge.1515a847.js";
import "./UserAvatar.e7cc78c9.js";
import "./use-ratio.034e22fc.js";
import "./QDate.d3c35adc.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.fefc41e2.js";
import "./QPopupProxy.26ee3f80.js";
import "./use-quasar.29d4674e.js";
import "./debug.b9d7424b.js";
import "./help.31050a33.js";
import "./vue-i18n.runtime.esm-bundler.2eef99e9.js";
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
