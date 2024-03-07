import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.83437ab4.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.fd438573.js";
import { Q as QRouteTab } from "./QRouteTab.29849dec.js";
import { Q as QTabs } from "./QTabs.0aed30a2.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.55e53ae2.js";
import "./QResizeObserver.65e4cade.js";
import "./rtl.b51694b1.js";
import "./QSelect.7737430d.js";
import "./QItemSection.293df8f2.js";
import "./QItemLabel.f4bffbe6.js";
import "./QMenu.1ce168ce.js";
import "./selection.15c4a6c9.js";
import "./format.3e32b8d9.js";
import "./QSpace.ba583cbe.js";
import "./QTd.7820f616.js";
import "./QTable.7c7714e2.js";
import "./QList.07aafddb.js";
import "./QMarkupTable.10d53d17.js";
import "./QLinearProgress.51f1c00b.js";
import "./use-fullscreen.f3e3a5c0.js";
import "./open-url.96b8a4aa.js";
import "./axios.e2b068bb.js";
import "./StatusTag.be067a35.js";
import "./QBadge.1184966b.js";
import "./UserAvatar.6ee5bc04.js";
import "./use-ratio.a13aa825.js";
import "./QDate.1e686bca.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.6b0ae3e1.js";
import "./QPopupProxy.6c63ea0b.js";
import "./use-quasar.1c5c2b7c.js";
import "./debug.b9d7424b.js";
import "./help.2e094d94.js";
import "./vue-i18n.runtime.esm-bundler.66bbbdbc.js";
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
