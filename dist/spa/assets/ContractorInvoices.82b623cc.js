import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.59e718a9.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.09b1ecaa.js";
import { Q as QRouteTab } from "./QRouteTab.eedb9ee6.js";
import { Q as QTabs } from "./QTabs.b52f58f3.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.03398e7d.js";
import "./QResizeObserver.3ce49556.js";
import "./rtl.276c3f1b.js";
import "./QSelect.96d2136a.js";
import "./QItemSection.957c96b8.js";
import "./QItemLabel.c4941b88.js";
import "./QMenu.d95e8205.js";
import "./selection.f3848d99.js";
import "./format.de7e9769.js";
import "./QSpace.34f151f2.js";
import "./QTd.ec81b31f.js";
import "./QTable.f08d8b6f.js";
import "./QList.7a4c3f18.js";
import "./QMarkupTable.9e558d0c.js";
import "./QLinearProgress.4d3fd829.js";
import "./use-fullscreen.58bbce6d.js";
import "./open-url.2f3c04ef.js";
import "./axios.d55d466d.js";
import "./StatusTag.ee8fe6c2.js";
import "./QBadge.462479b6.js";
import "./UserAvatar.5ebded2e.js";
import "./use-ratio.a1f66614.js";
import "./QDate.5f498fe1.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.aac63ceb.js";
import "./QPopupProxy.07a39e6f.js";
import "./use-quasar.125d8b38.js";
import "./debug.b9d7424b.js";
import "./help.1741f6c1.js";
import "./vue-i18n.runtime.esm-bundler.956cfbf2.js";
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
