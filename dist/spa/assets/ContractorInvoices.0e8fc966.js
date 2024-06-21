import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.1e4623ca.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.a03f1536.js";
import { Q as QRouteTab } from "./QRouteTab.25535839.js";
import { Q as QTabs } from "./QTabs.0eb00479.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.98aad3b9.js";
import "./QResizeObserver.fc14b804.js";
import "./rtl.276c3f1b.js";
import "./QSelect.61d1736d.js";
import "./selection.20b85f26.js";
import "./QItemLabel.e4e7078f.js";
import "./QMenu.df7f77cc.js";
import "./format.de7e9769.js";
import "./QSpace.5fd68663.js";
import "./QTd.7798e759.js";
import "./QTable.316d3a38.js";
import "./QList.fe09f8cf.js";
import "./QMarkupTable.cb42defd.js";
import "./QLinearProgress.37b0691e.js";
import "./use-fullscreen.89b148c6.js";
import "./open-url.14910681.js";
import "./axios.2e25613c.js";
import "./StatusTag.3ba01c59.js";
import "./QBadge.471ae29c.js";
import "./UserAvatar.d248aba3.js";
import "./use-ratio.5e7b578f.js";
import "./QDate.1f021c48.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.68e3003a.js";
import "./QPopupProxy.cb005419.js";
import "./use-quasar.182979dc.js";
import "./debug.b9d7424b.js";
import "./help.a835c626.js";
import "./vue-i18n.runtime.esm-bundler.4464aed2.js";
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
