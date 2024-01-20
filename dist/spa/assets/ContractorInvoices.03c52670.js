import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.71993d48.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.d8fa8e86.js";
import { Q as QRouteTab } from "./QRouteTab.0bb65c05.js";
import { Q as QTabs } from "./QTabs.304bac08.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.f7f76821.js";
import "./QResizeObserver.d7f547ad.js";
import "./rtl.b51694b1.js";
import "./QSelect.b8d67a6f.js";
import "./QItemSection.9378edd4.js";
import "./QItemLabel.4bbaac4c.js";
import "./QMenu.5c4bfec5.js";
import "./selection.648c4311.js";
import "./format.3e32b8d9.js";
import "./QSpace.e6c674c5.js";
import "./QTd.86305763.js";
import "./QTable.ebbebfb8.js";
import "./QList.12464097.js";
import "./QMarkupTable.30cbefb6.js";
import "./QLinearProgress.8291e299.js";
import "./use-fullscreen.21cf4df0.js";
import "./open-url.3c9c52ba.js";
import "./axios.d2172b6e.js";
import "./StatusTag.4c49fa64.js";
import "./QBadge.d3933057.js";
import "./UserAvatar.d6db6450.js";
import "./use-ratio.b7e2a3da.js";
import "./QDate.f6da44e7.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.eedb8bb4.js";
import "./QPopupProxy.a394c825.js";
import "./use-quasar.31ac6fc8.js";
import "./debug.b9d7424b.js";
import "./help.c9950071.js";
import "./vue-i18n.runtime.esm-bundler.93d39d82.js";
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
