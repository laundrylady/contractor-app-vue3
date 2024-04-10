import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.ed5d663e.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.01b26410.js";
import { Q as QRouteTab } from "./QRouteTab.1bbf5780.js";
import { Q as QTabs } from "./QTabs.90787bb0.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.5b532ad6.js";
import "./QResizeObserver.50cae828.js";
import "./rtl.b51694b1.js";
import "./QSelect.96d5c18b.js";
import "./QItemSection.61f5d58a.js";
import "./QItemLabel.b7913740.js";
import "./QMenu.89657e64.js";
import "./selection.299d682c.js";
import "./format.3e32b8d9.js";
import "./QSpace.74b57d29.js";
import "./QTd.9f7dbb70.js";
import "./QTable.dd329327.js";
import "./QList.05992847.js";
import "./QMarkupTable.22931246.js";
import "./QLinearProgress.b9e20d06.js";
import "./use-fullscreen.6a619d0e.js";
import "./open-url.0d900281.js";
import "./axios.871fd6e3.js";
import "./StatusTag.bcda6e16.js";
import "./QBadge.2615fd76.js";
import "./UserAvatar.73723289.js";
import "./use-ratio.75ee339c.js";
import "./QDate.80607733.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.17fd358b.js";
import "./QPopupProxy.420027fb.js";
import "./use-quasar.d45b5563.js";
import "./debug.b9d7424b.js";
import "./help.61d9c350.js";
import "./vue-i18n.runtime.esm-bundler.689367a2.js";
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
