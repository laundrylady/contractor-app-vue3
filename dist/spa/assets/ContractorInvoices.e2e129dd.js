import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.61f718f4.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.c1065791.js";
import { Q as QRouteTab } from "./QRouteTab.1ada3e93.js";
import { Q as QTabs } from "./QTabs.d1ad7938.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.60f5d9f9.js";
import "./QResizeObserver.153a3299.js";
import "./rtl.276c3f1b.js";
import "./QSelect.fe62b17e.js";
import "./selection.bb1e1937.js";
import "./QItemLabel.7f4bd5ac.js";
import "./QMenu.01d31f86.js";
import "./format.de7e9769.js";
import "./QSpace.88920a17.js";
import "./QTd.4abfc71b.js";
import "./QTable.ad29a373.js";
import "./QList.65801c1a.js";
import "./QMarkupTable.290badf3.js";
import "./QLinearProgress.8262c887.js";
import "./use-fullscreen.90e7de83.js";
import "./open-url.b3669b50.js";
import "./axios.95ae57e8.js";
import "./StatusTag.0680131f.js";
import "./QBadge.9e977f44.js";
import "./UserAvatar.04b93cb6.js";
import "./use-ratio.18946eca.js";
import "./QDate.9680eddf.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.ca6d4116.js";
import "./QPopupProxy.d9b8b894.js";
import "./use-quasar.a80a8223.js";
import "./debug.b9d7424b.js";
import "./help.76b493a3.js";
import "./vue-i18n.runtime.esm-bundler.8abbed9c.js";
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
