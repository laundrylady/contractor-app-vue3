import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.f1ef5c18.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.c3e11314.js";
import { Q as QRouteTab } from "./QRouteTab.fcc426ff.js";
import { Q as QTabs } from "./QTabs.81a309db.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.43044bc6.js";
import "./QResizeObserver.be580881.js";
import "./rtl.b51694b1.js";
import "./QSelect.7bdfa10c.js";
import "./format.112b0b04.js";
import "./QItemLabel.cbfe5232.js";
import "./selection.96f195a3.js";
import "./QSpace.a2b69cd3.js";
import "./QTd.8b859673.js";
import "./QTable.dd73dd59.js";
import "./QList.33849463.js";
import "./QMarkupTable.7d79515f.js";
import "./QLinearProgress.57baf78e.js";
import "./use-fullscreen.3f4d6ef5.js";
import "./open-url.7d82f4e6.js";
import "./axios.db6f0581.js";
import "./StatusTag.590212a8.js";
import "./QBadge.f8aadf91.js";
import "./UserAvatar.59b81abe.js";
import "./QImg.b20d2131.js";
import "./use-ratio.3cac2b4b.js";
import "./QDate.9c000570.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.e00384e8.js";
import "./QPopupProxy.4c889e70.js";
import "./use-quasar.9e3f928f.js";
import "./debug.b9d7424b.js";
import "./help.1f3b93f2.js";
import "./vue-i18n.runtime.esm-bundler.e944761d.js";
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
