import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.91814ea0.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.d45abf36.js";
import { Q as QRouteTab } from "./QRouteTab.af1f5767.js";
import { Q as QTabs } from "./QTabs.bc280063.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.6d84d8f2.js";
import "./QResizeObserver.94af5151.js";
import "./rtl.b51694b1.js";
import "./QSelect.b846cd5d.js";
import "./QItemSection.acd059d1.js";
import "./QItemLabel.8a3b2596.js";
import "./QMenu.eab3c346.js";
import "./selection.2903cd79.js";
import "./format.3e32b8d9.js";
import "./QSpace.ed29bcf4.js";
import "./QTd.596c3eb9.js";
import "./QTable.79e2f3b4.js";
import "./QList.a4df92c8.js";
import "./QMarkupTable.cccf3435.js";
import "./QLinearProgress.5bb25880.js";
import "./use-fullscreen.bdee086f.js";
import "./open-url.7768285d.js";
import "./axios.ebe2df20.js";
import "./StatusTag.5871b505.js";
import "./QBadge.92206f00.js";
import "./UserAvatar.67c7c267.js";
import "./use-ratio.2a02d17d.js";
import "./QDate.089cad47.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.bb7b0ce0.js";
import "./QPopupProxy.b4676b60.js";
import "./use-quasar.d5badd13.js";
import "./debug.b9d7424b.js";
import "./help.6f1743ae.js";
import "./vue-i18n.runtime.esm-bundler.2be8dacb.js";
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
