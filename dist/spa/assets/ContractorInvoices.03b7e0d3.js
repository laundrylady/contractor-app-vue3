import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.c627736b.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.110f121c.js";
import { Q as QRouteTab } from "./QRouteTab.2abe7b9b.js";
import { Q as QTabs } from "./QTabs.a7f44417.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.a46a6f33.js";
import "./QResizeObserver.7f353db4.js";
import "./rtl.b51694b1.js";
import "./QSelect.a3c48af1.js";
import "./QItemSection.0b813e93.js";
import "./QItemLabel.cd608d87.js";
import "./QMenu.d2f8cf94.js";
import "./selection.d064a090.js";
import "./format.3e32b8d9.js";
import "./QSpace.6a1e31bc.js";
import "./QTd.0a38b871.js";
import "./QTable.217a3d96.js";
import "./QList.f1175db3.js";
import "./QMarkupTable.dc8f42ad.js";
import "./QLinearProgress.1874b5d1.js";
import "./use-fullscreen.a4223194.js";
import "./open-url.c8f65827.js";
import "./axios.e461d9d4.js";
import "./StatusTag.97635058.js";
import "./QBadge.805b078d.js";
import "./UserAvatar.122ae47a.js";
import "./use-ratio.215c49a3.js";
import "./QDate.6c836b5b.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.9b8b6e29.js";
import "./QPopupProxy.b4b384be.js";
import "./use-quasar.7dc87dbc.js";
import "./debug.b9d7424b.js";
import "./help.27531953.js";
import "./vue-i18n.runtime.esm-bundler.2fe161fa.js";
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
