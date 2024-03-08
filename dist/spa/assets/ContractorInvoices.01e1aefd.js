import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.9898674e.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.18878952.js";
import { Q as QRouteTab } from "./QRouteTab.b71a3c62.js";
import { Q as QTabs } from "./QTabs.7f0ab3ef.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.5b1bdbcc.js";
import "./QResizeObserver.a50f786d.js";
import "./rtl.b51694b1.js";
import "./QSelect.6019e1d1.js";
import "./QItemSection.97e566b5.js";
import "./QItemLabel.219778a9.js";
import "./QMenu.a30ff06a.js";
import "./selection.26965865.js";
import "./format.3e32b8d9.js";
import "./QSpace.3b49d72f.js";
import "./QTd.a7d47007.js";
import "./QTable.1500a187.js";
import "./QList.d7109d2b.js";
import "./QMarkupTable.76de88b3.js";
import "./QLinearProgress.d89607be.js";
import "./use-fullscreen.85ddcd6d.js";
import "./open-url.3923269a.js";
import "./axios.35ec121e.js";
import "./StatusTag.fe283ca6.js";
import "./QBadge.df47afa1.js";
import "./UserAvatar.bd07e199.js";
import "./use-ratio.1374d27a.js";
import "./QDate.d3f3ba8b.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.3138ecea.js";
import "./QPopupProxy.a4ccf400.js";
import "./use-quasar.370508ad.js";
import "./debug.b9d7424b.js";
import "./help.94fed76f.js";
import "./vue-i18n.runtime.esm-bundler.457c3d2f.js";
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
