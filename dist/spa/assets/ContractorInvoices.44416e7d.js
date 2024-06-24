import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.33efd2c0.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.70e43089.js";
import { Q as QRouteTab } from "./QRouteTab.94d07af5.js";
import { Q as QTabs } from "./QTabs.38b033f6.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.b871ac79.js";
import "./QResizeObserver.83e4794e.js";
import "./rtl.276c3f1b.js";
import "./QSelect.827a16bd.js";
import "./selection.0fb4403c.js";
import "./QItemLabel.8bacf85f.js";
import "./QMenu.a4de9523.js";
import "./format.de7e9769.js";
import "./QSpace.1564d7a1.js";
import "./QTd.60d70f31.js";
import "./QTable.afb41da7.js";
import "./QList.e84d88c7.js";
import "./QMarkupTable.a4134f30.js";
import "./QLinearProgress.85fd5626.js";
import "./use-fullscreen.b3ad25cf.js";
import "./open-url.ee4f414b.js";
import "./axios.a29d89a0.js";
import "./StatusTag.a75ad3fc.js";
import "./QBadge.0595bc1c.js";
import "./UserAvatar.58b8970b.js";
import "./use-ratio.780ca051.js";
import "./QDate.6e49f3b0.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.e87bfe33.js";
import "./QPopupProxy.f3ccbcf3.js";
import "./use-quasar.39351ee9.js";
import "./debug.b9d7424b.js";
import "./help.e79d09e0.js";
import "./vue-i18n.runtime.esm-bundler.11bb41db.js";
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
