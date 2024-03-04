import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.c9cb2a43.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.18e21851.js";
import { Q as QRouteTab } from "./QRouteTab.5ac9c703.js";
import { Q as QTabs } from "./QTabs.10020365.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.de74cce4.js";
import "./QResizeObserver.e9f170e2.js";
import "./rtl.b51694b1.js";
import "./QSelect.37eea7df.js";
import "./QItemSection.d838d8a6.js";
import "./QItemLabel.84260068.js";
import "./QMenu.085ebe20.js";
import "./selection.f00fc480.js";
import "./format.3e32b8d9.js";
import "./QSpace.f1730d99.js";
import "./QTd.177b44f7.js";
import "./QTable.768ac9dc.js";
import "./QList.601a66e1.js";
import "./QMarkupTable.cee96589.js";
import "./QLinearProgress.f0f26f5f.js";
import "./use-fullscreen.c1b962a7.js";
import "./open-url.885fadc6.js";
import "./axios.65c4d83c.js";
import "./StatusTag.9f2ec7a1.js";
import "./QBadge.1c6541ba.js";
import "./UserAvatar.cd0841b6.js";
import "./use-ratio.5fd402f4.js";
import "./QDate.93b189a8.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.dc0960b6.js";
import "./QPopupProxy.b06bdccc.js";
import "./use-quasar.5e39d7a5.js";
import "./debug.b9d7424b.js";
import "./help.1e481d26.js";
import "./vue-i18n.runtime.esm-bundler.1284b97a.js";
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
