import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.79597c2e.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.3a5c50c1.js";
import { Q as QRouteTab } from "./QRouteTab.ab809a0c.js";
import { Q as QTabs } from "./QTabs.06d253c6.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.0c61bf39.js";
import "./QResizeObserver.d0171391.js";
import "./rtl.b51694b1.js";
import "./QSelect.d6f8aa01.js";
import "./QItemSection.e7a6db3d.js";
import "./QItemLabel.18ff4fa7.js";
import "./QMenu.d438562b.js";
import "./selection.31a8599a.js";
import "./format.3e32b8d9.js";
import "./QSpace.eb982f4c.js";
import "./QTd.39e2e314.js";
import "./QTable.4691bf46.js";
import "./QList.7eaafeae.js";
import "./QMarkupTable.4a713a4b.js";
import "./QLinearProgress.d2ca0e81.js";
import "./use-fullscreen.14b2f495.js";
import "./open-url.4afa9d34.js";
import "./axios.e833d5f6.js";
import "./StatusTag.731035af.js";
import "./QBadge.2b59719a.js";
import "./UserAvatar.780072a7.js";
import "./use-ratio.054892df.js";
import "./QDate.878a3690.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.94e059c2.js";
import "./QPopupProxy.5c000043.js";
import "./use-quasar.b95807ab.js";
import "./debug.b9d7424b.js";
import "./help.6a218093.js";
import "./vue-i18n.runtime.esm-bundler.efac7c1e.js";
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
