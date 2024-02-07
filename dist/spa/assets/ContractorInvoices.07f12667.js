import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.1eb7e0d4.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.fd3e370d.js";
import { Q as QRouteTab } from "./QRouteTab.bd750ae6.js";
import { Q as QTabs } from "./QTabs.e9f7ff7b.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.66de55c3.js";
import "./QResizeObserver.8143c991.js";
import "./rtl.b51694b1.js";
import "./QSelect.fa861b56.js";
import "./QItemSection.0a3073f2.js";
import "./QItemLabel.6e713f73.js";
import "./QMenu.0b4964dc.js";
import "./selection.5c6b169c.js";
import "./format.3e32b8d9.js";
import "./QSpace.30d988ee.js";
import "./QTd.b6ede73a.js";
import "./QTable.ee41f881.js";
import "./QList.d89d0d51.js";
import "./QMarkupTable.02fca499.js";
import "./QLinearProgress.32da5726.js";
import "./use-fullscreen.3e183592.js";
import "./open-url.2c404c85.js";
import "./axios.40586be7.js";
import "./StatusTag.7491ac45.js";
import "./QBadge.20bb3f69.js";
import "./UserAvatar.7b76b362.js";
import "./use-ratio.0ee415c2.js";
import "./QDate.a8d23c1e.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.da81dda1.js";
import "./QPopupProxy.1bf422fe.js";
import "./use-quasar.2b156f71.js";
import "./debug.b9d7424b.js";
import "./help.21326656.js";
import "./vue-i18n.runtime.esm-bundler.ef3216b5.js";
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
