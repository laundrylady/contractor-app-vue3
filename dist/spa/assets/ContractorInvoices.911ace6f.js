import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.e85fd7a7.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.f0c9dc10.js";
import { Q as QRouteTab } from "./QRouteTab.cad1dea7.js";
import { Q as QTabs } from "./QTabs.12316e43.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.db05d494.js";
import "./QResizeObserver.85926721.js";
import "./rtl.b51694b1.js";
import "./QSelect.9f91491f.js";
import "./QItemSection.f7907d8c.js";
import "./QItemLabel.058c9d10.js";
import "./QMenu.f354d7c7.js";
import "./selection.f3591a7d.js";
import "./format.3e32b8d9.js";
import "./QSpace.6bc9262f.js";
import "./QTd.5237e187.js";
import "./QTable.61ac0101.js";
import "./QList.0b626c37.js";
import "./QMarkupTable.c7f34321.js";
import "./QLinearProgress.eef8565a.js";
import "./use-fullscreen.59c47be8.js";
import "./open-url.83b6e229.js";
import "./axios.505ad15a.js";
import "./StatusTag.3ce4eb9b.js";
import "./QBadge.e97dee2e.js";
import "./UserAvatar.7ef0b6bf.js";
import "./use-ratio.91800170.js";
import "./QDate.4756e799.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.b248be7e.js";
import "./QPopupProxy.463e0d33.js";
import "./use-quasar.5612dc17.js";
import "./debug.b9d7424b.js";
import "./help.8b26e756.js";
import "./vue-i18n.runtime.esm-bundler.fc30001d.js";
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
