import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.d3156251.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.3a5d66f8.js";
import { Q as QRouteTab } from "./QRouteTab.4fff980a.js";
import { Q as QTabs } from "./QTabs.17e3da92.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.33bc1193.js";
import "./QResizeObserver.cb1ccb5d.js";
import "./rtl.b51694b1.js";
import "./QSelect.79c41990.js";
import "./QItemSection.33b73aea.js";
import "./QItemLabel.d2e4be10.js";
import "./QMenu.9a6ce7df.js";
import "./selection.d391c5c4.js";
import "./format.3e32b8d9.js";
import "./QSpace.38d28364.js";
import "./QTd.b1682a2f.js";
import "./QTable.3be79a0b.js";
import "./QList.1af29f82.js";
import "./QMarkupTable.86e06a5f.js";
import "./QLinearProgress.c4fa5c48.js";
import "./use-fullscreen.4a42a3d8.js";
import "./open-url.b22b4aab.js";
import "./axios.1f56604e.js";
import "./StatusTag.bf50c98f.js";
import "./QBadge.064b7fe3.js";
import "./UserAvatar.8a4b3fff.js";
import "./use-ratio.6ca466a6.js";
import "./QDate.44d8fd88.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.0cd1934d.js";
import "./QPopupProxy.3f3702ac.js";
import "./use-quasar.9deb93be.js";
import "./debug.b9d7424b.js";
import "./help.3c3ace11.js";
import "./vue-i18n.runtime.esm-bundler.f58388e7.js";
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
