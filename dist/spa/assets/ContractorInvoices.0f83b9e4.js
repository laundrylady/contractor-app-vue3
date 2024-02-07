import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.ae9373f8.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.1d3c3e0a.js";
import { Q as QRouteTab } from "./QRouteTab.f06f4c59.js";
import { Q as QTabs } from "./QTabs.b36e171f.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.8b88ecbb.js";
import "./QResizeObserver.c114cfe1.js";
import "./rtl.b51694b1.js";
import "./QSelect.c1681cd1.js";
import "./QItemSection.ec329744.js";
import "./QItemLabel.aa53f096.js";
import "./QMenu.79aff003.js";
import "./selection.33a56d83.js";
import "./format.3e32b8d9.js";
import "./QSpace.dbda70ac.js";
import "./QTd.20861bbb.js";
import "./QTable.fa28e3fb.js";
import "./QList.ec9fcd66.js";
import "./QMarkupTable.b851d32f.js";
import "./QLinearProgress.9ccf62d3.js";
import "./use-fullscreen.06347866.js";
import "./open-url.8ee761b6.js";
import "./axios.177cad41.js";
import "./StatusTag.83cc3093.js";
import "./QBadge.71c4c220.js";
import "./UserAvatar.a0c358ca.js";
import "./use-ratio.c042e78f.js";
import "./QDate.4ee6cfbc.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.33af78e1.js";
import "./QPopupProxy.1e6ad5a8.js";
import "./use-quasar.6e4ce33e.js";
import "./debug.b9d7424b.js";
import "./help.f50b0519.js";
import "./vue-i18n.runtime.esm-bundler.1bb65a5b.js";
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
