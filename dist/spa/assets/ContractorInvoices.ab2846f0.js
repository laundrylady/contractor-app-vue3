import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.720b4a5c.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.c05001d9.js";
import { Q as QRouteTab } from "./QRouteTab.f8d8668c.js";
import { Q as QTabs } from "./QTabs.7a992730.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.2ac4ae78.js";
import "./QResizeObserver.7413dfc2.js";
import "./rtl.276c3f1b.js";
import "./QSelect.222fe7ca.js";
import "./QItemSection.4511fc78.js";
import "./QItemLabel.e41b433a.js";
import "./QMenu.84897510.js";
import "./selection.7e914794.js";
import "./format.de7e9769.js";
import "./QSpace.a972aa14.js";
import "./QTd.3a96212a.js";
import "./QTable.ecb4d971.js";
import "./QList.a7144db4.js";
import "./QMarkupTable.37755f2a.js";
import "./QLinearProgress.60c05025.js";
import "./use-fullscreen.97ad1f45.js";
import "./open-url.0960afba.js";
import "./axios.6b82ea5b.js";
import "./StatusTag.e9e86155.js";
import "./QBadge.6522b7b3.js";
import "./UserAvatar.0217f637.js";
import "./use-ratio.aeade1e9.js";
import "./QDate.e8551beb.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.706577ec.js";
import "./QPopupProxy.d58a65c0.js";
import "./use-quasar.06182be2.js";
import "./debug.b9d7424b.js";
import "./help.4fff6941.js";
import "./vue-i18n.runtime.esm-bundler.a0c98e59.js";
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
