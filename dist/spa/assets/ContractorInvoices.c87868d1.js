import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.79cccf83.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.e340ffc1.js";
import { Q as QRouteTab } from "./QRouteTab.55a171f6.js";
import { Q as QTabs } from "./QTabs.0e85eb78.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.36118c95.js";
import "./QResizeObserver.79f1f0a4.js";
import "./rtl.b51694b1.js";
import "./QSelect.e671045b.js";
import "./QItemSection.46f630a9.js";
import "./QItemLabel.82ee9131.js";
import "./QMenu.86fd14c9.js";
import "./selection.9432d2a7.js";
import "./format.3e32b8d9.js";
import "./QSpace.7a1e632e.js";
import "./QTd.0899fca9.js";
import "./QTable.3a2e7df4.js";
import "./QList.7e24a5bf.js";
import "./QMarkupTable.d4ac73c6.js";
import "./QLinearProgress.42d482b0.js";
import "./use-fullscreen.56bd7772.js";
import "./open-url.b68b93b2.js";
import "./axios.6538d42a.js";
import "./StatusTag.d08472ad.js";
import "./QBadge.4df06cd4.js";
import "./UserAvatar.616eedac.js";
import "./use-ratio.7cf2e441.js";
import "./QDate.f6d68218.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.fb19a534.js";
import "./QPopupProxy.5fd0b8e3.js";
import "./use-quasar.a325488c.js";
import "./debug.b9d7424b.js";
import "./help.d1a442e1.js";
import "./vue-i18n.runtime.esm-bundler.69aba121.js";
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
