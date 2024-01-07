import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.f1303de0.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.94ffc4a5.js";
import { Q as QRouteTab } from "./QRouteTab.bc3170db.js";
import { Q as QTabs } from "./QTabs.9450d8de.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.7805b051.js";
import "./QResizeObserver.134e07ea.js";
import "./rtl.b51694b1.js";
import "./QSelect.edacc259.js";
import "./QItemSection.c33c006e.js";
import "./QItemLabel.28fdca70.js";
import "./QMenu.005f69e9.js";
import "./selection.1b85c8af.js";
import "./format.3e32b8d9.js";
import "./QSpace.f07bc139.js";
import "./QTd.9f6666ab.js";
import "./QTable.8cbf4baf.js";
import "./QList.c126ab9e.js";
import "./QMarkupTable.42d4c22d.js";
import "./QLinearProgress.e87c3f3b.js";
import "./use-fullscreen.6119b2fc.js";
import "./open-url.afa26193.js";
import "./axios.35485f2e.js";
import "./StatusTag.b67ca478.js";
import "./QBadge.35492347.js";
import "./UserAvatar.04ebc1d1.js";
import "./use-ratio.f1e5b191.js";
import "./QDate.8f601aa0.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.2ab4a77d.js";
import "./QPopupProxy.1346de05.js";
import "./use-quasar.2a34d7dc.js";
import "./debug.b9d7424b.js";
import "./help.3fa7b058.js";
import "./vue-i18n.runtime.esm-bundler.4628bfe7.js";
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
