import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.ede44c03.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.a5ad6082.js";
import { Q as QRouteTab } from "./QRouteTab.54f0b236.js";
import { Q as QTabs } from "./QTabs.c06400df.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.6180d0a6.js";
import "./QResizeObserver.44f25c58.js";
import "./rtl.b51694b1.js";
import "./QSelect.a7cf351c.js";
import "./QItemSection.c6fa25ab.js";
import "./QItemLabel.9a144642.js";
import "./QMenu.63baf54c.js";
import "./selection.9f41e8e1.js";
import "./format.3e32b8d9.js";
import "./QSpace.a28baadc.js";
import "./QTd.3d39bc8a.js";
import "./QTable.597b8059.js";
import "./QList.77b5e4f1.js";
import "./QMarkupTable.13acfe45.js";
import "./QLinearProgress.32b03ca3.js";
import "./use-fullscreen.904cc5dc.js";
import "./open-url.f3661115.js";
import "./axios.e6d93a62.js";
import "./StatusTag.61a56e50.js";
import "./QBadge.a0b3d92a.js";
import "./UserAvatar.c2811f14.js";
import "./use-ratio.b5230ab8.js";
import "./QDate.1af219d3.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.17cb7c85.js";
import "./QPopupProxy.5104d215.js";
import "./use-quasar.dca0d230.js";
import "./debug.b9d7424b.js";
import "./help.7e4090d7.js";
import "./vue-i18n.runtime.esm-bundler.8913d4b0.js";
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
