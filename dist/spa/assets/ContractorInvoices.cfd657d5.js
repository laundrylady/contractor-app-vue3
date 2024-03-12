import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.6ce20806.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.0a7ae1c4.js";
import { Q as QRouteTab } from "./QRouteTab.9cb3b89e.js";
import { Q as QTabs } from "./QTabs.10ede83a.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.d40e43f9.js";
import "./QResizeObserver.5db852ec.js";
import "./rtl.b51694b1.js";
import "./QSelect.fc57cce4.js";
import "./QItemSection.2217d3ce.js";
import "./QItemLabel.e051b453.js";
import "./QMenu.4ac57728.js";
import "./selection.a136cbbe.js";
import "./format.3e32b8d9.js";
import "./QSpace.d1f5cf21.js";
import "./QTd.abc5ef16.js";
import "./QTable.9e31b6c6.js";
import "./QList.1b03d57c.js";
import "./QMarkupTable.96ea31ac.js";
import "./QLinearProgress.0aca601b.js";
import "./use-fullscreen.8d62c6e1.js";
import "./open-url.171e9f4d.js";
import "./axios.dbc23847.js";
import "./StatusTag.68d7aa7d.js";
import "./QBadge.4e1f06a1.js";
import "./UserAvatar.f546921e.js";
import "./use-ratio.809069ac.js";
import "./QDate.b3060d6b.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.e588493d.js";
import "./QPopupProxy.43200ae4.js";
import "./use-quasar.23e2f5cb.js";
import "./debug.b9d7424b.js";
import "./help.97d207ee.js";
import "./vue-i18n.runtime.esm-bundler.116ee471.js";
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
