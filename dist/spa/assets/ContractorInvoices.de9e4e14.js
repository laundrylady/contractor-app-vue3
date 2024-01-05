import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.c225e500.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.9f14d94e.js";
import { Q as QRouteTab } from "./QRouteTab.b3c2a097.js";
import { Q as QTabs } from "./QTabs.d7317154.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.0280dca6.js";
import "./QResizeObserver.60f2de32.js";
import "./rtl.b51694b1.js";
import "./QSelect.35b1ccfa.js";
import "./format.7feb902a.js";
import "./QItemLabel.8bc10967.js";
import "./selection.d979cdd8.js";
import "./QSpace.6c32d67c.js";
import "./QTd.f5ea89aa.js";
import "./QTable.ff79224f.js";
import "./QList.298fc167.js";
import "./QMarkupTable.2bec2c3f.js";
import "./QLinearProgress.34b11314.js";
import "./use-fullscreen.c2b40d2d.js";
import "./open-url.506e58ea.js";
import "./axios.34892c50.js";
import "./StatusTag.b01ea336.js";
import "./QBadge.00a38d7c.js";
import "./UserAvatar.d561d361.js";
import "./QImg.8d533ceb.js";
import "./use-ratio.1559002c.js";
import "./QDate.bd74b878.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.db8e758d.js";
import "./QPopupProxy.c12f5d37.js";
import "./use-quasar.5e4b8f03.js";
import "./debug.b9d7424b.js";
import "./help.f922300f.js";
import "./vue-i18n.runtime.esm-bundler.e3edc540.js";
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
