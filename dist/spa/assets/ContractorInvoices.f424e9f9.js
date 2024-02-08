import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.e3419985.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.f084b612.js";
import { Q as QRouteTab } from "./QRouteTab.652e1950.js";
import { Q as QTabs } from "./QTabs.96de41c7.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.d485fcb4.js";
import "./QResizeObserver.cbdfac26.js";
import "./rtl.b51694b1.js";
import "./QSelect.b6af758d.js";
import "./QItemSection.1fc0a49d.js";
import "./QItemLabel.7679e2d1.js";
import "./QMenu.be53e892.js";
import "./selection.1d356d17.js";
import "./format.3e32b8d9.js";
import "./QSpace.594e9c98.js";
import "./QTd.c98afbfb.js";
import "./QTable.9cd4a8c1.js";
import "./QList.a723f46d.js";
import "./QMarkupTable.31d1c5d9.js";
import "./QLinearProgress.b992dd73.js";
import "./use-fullscreen.d339612e.js";
import "./open-url.c00ca0dc.js";
import "./axios.17d0f6a3.js";
import "./StatusTag.aeacdef0.js";
import "./QBadge.d8e7a557.js";
import "./UserAvatar.524c426a.js";
import "./use-ratio.5844d996.js";
import "./QDate.006e13ff.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.dfeb6d77.js";
import "./QPopupProxy.2671eaa7.js";
import "./use-quasar.d4f6f22e.js";
import "./debug.b9d7424b.js";
import "./help.7ec1e35e.js";
import "./vue-i18n.runtime.esm-bundler.414155e0.js";
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
