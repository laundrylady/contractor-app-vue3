import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.102a095b.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.8aaaa11c.js";
import { Q as QRouteTab } from "./QRouteTab.a2cc6286.js";
import { Q as QTabs } from "./QTabs.30ff341a.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.ec117ce1.js";
import "./QResizeObserver.415ea4b9.js";
import "./rtl.b51694b1.js";
import "./QSelect.57e48f88.js";
import "./QItemSection.a5e05406.js";
import "./QItemLabel.649a3c36.js";
import "./QMenu.082303fa.js";
import "./selection.6f530ad9.js";
import "./format.3e32b8d9.js";
import "./QSpace.ccf1e513.js";
import "./QTd.82eb5b21.js";
import "./QTable.ed2bfb69.js";
import "./QList.39a3f84d.js";
import "./QMarkupTable.20c5f4d2.js";
import "./QLinearProgress.96016cd2.js";
import "./use-fullscreen.0d3fdc5d.js";
import "./open-url.2c69081d.js";
import "./axios.5e65f383.js";
import "./StatusTag.304f6b57.js";
import "./QBadge.67f1f13b.js";
import "./UserAvatar.d095100e.js";
import "./use-ratio.9e4b21cc.js";
import "./QDate.337dcf37.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.a04017f0.js";
import "./QPopupProxy.c41857b8.js";
import "./use-quasar.3a3c7003.js";
import "./debug.b9d7424b.js";
import "./help.312020b7.js";
import "./vue-i18n.runtime.esm-bundler.9166c43d.js";
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
