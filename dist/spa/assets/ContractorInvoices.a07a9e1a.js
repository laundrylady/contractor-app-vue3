import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.8e5fd2f9.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.6c77a9cb.js";
import { Q as QRouteTab } from "./QRouteTab.c687a5aa.js";
import { Q as QTabs } from "./QTabs.16c32a52.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.075899f3.js";
import "./QResizeObserver.281f14f9.js";
import "./rtl.b51694b1.js";
import "./QSelect.a1aca694.js";
import "./QItemSection.910187a2.js";
import "./QItemLabel.458cb545.js";
import "./QMenu.e160cbd1.js";
import "./selection.03438c15.js";
import "./format.3e32b8d9.js";
import "./QSpace.9884ea55.js";
import "./QTd.0fcc1374.js";
import "./QTable.5e101451.js";
import "./QList.5e2c6f45.js";
import "./QMarkupTable.c3e10aaf.js";
import "./QLinearProgress.f768b62e.js";
import "./use-fullscreen.30c8c93a.js";
import "./open-url.4fed5f1a.js";
import "./axios.95284358.js";
import "./StatusTag.caecfd98.js";
import "./QBadge.2eecd6ad.js";
import "./UserAvatar.bed070ba.js";
import "./use-ratio.7f8170de.js";
import "./QDate.48d7592c.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.e795b154.js";
import "./QPopupProxy.a9bf37ac.js";
import "./use-quasar.c111ed53.js";
import "./debug.b9d7424b.js";
import "./help.e3a4d611.js";
import "./vue-i18n.runtime.esm-bundler.fda23bea.js";
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
