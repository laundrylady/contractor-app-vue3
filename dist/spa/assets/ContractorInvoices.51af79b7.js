import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.bb082a98.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.3271ccb4.js";
import { Q as QRouteTab } from "./QRouteTab.46e62a2b.js";
import { Q as QTabs } from "./QTabs.3afad499.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.3a9ecda3.js";
import "./QResizeObserver.c7a79699.js";
import "./rtl.b51694b1.js";
import "./QSelect.09b8065a.js";
import "./QItemSection.c390f765.js";
import "./QItemLabel.b2006bcf.js";
import "./QMenu.76fab67d.js";
import "./selection.bfc2e834.js";
import "./format.3e32b8d9.js";
import "./QSpace.05db7357.js";
import "./QTd.8f569512.js";
import "./QTable.5d7800f2.js";
import "./QList.86a8068e.js";
import "./QMarkupTable.52ab0c96.js";
import "./QLinearProgress.8f52c73b.js";
import "./use-fullscreen.e322738a.js";
import "./open-url.094ce02f.js";
import "./axios.847c91ae.js";
import "./StatusTag.00e540c2.js";
import "./QBadge.4551a4f2.js";
import "./UserAvatar.8f55af60.js";
import "./use-ratio.cec9a002.js";
import "./QDate.209a8361.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.0b937a7e.js";
import "./QPopupProxy.ad98adb1.js";
import "./use-quasar.4a2a2740.js";
import "./debug.b9d7424b.js";
import "./help.08f82b20.js";
import "./vue-i18n.runtime.esm-bundler.79c8463e.js";
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
