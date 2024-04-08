import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.f4eab609.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.70bff7e6.js";
import { Q as QRouteTab } from "./QRouteTab.eab8583a.js";
import { Q as QTabs } from "./QTabs.8fe75707.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.2521f16e.js";
import "./QResizeObserver.e1b631bf.js";
import "./rtl.b51694b1.js";
import "./QSelect.86621c8e.js";
import "./QItemSection.69989551.js";
import "./QItemLabel.9f5eb23d.js";
import "./QMenu.78f77972.js";
import "./selection.8f446b8f.js";
import "./format.3e32b8d9.js";
import "./QSpace.999bc7ed.js";
import "./QTd.cf4c42b6.js";
import "./QTable.0a3e678b.js";
import "./QList.4ac1db95.js";
import "./QMarkupTable.a5c2d271.js";
import "./QLinearProgress.a0b6fc32.js";
import "./use-fullscreen.c84f70be.js";
import "./open-url.016f6683.js";
import "./axios.0f3969fa.js";
import "./StatusTag.22b1ee04.js";
import "./QBadge.499a0b31.js";
import "./UserAvatar.5a384b9f.js";
import "./use-ratio.8fa3284b.js";
import "./QDate.b843374f.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.25bee0fa.js";
import "./QPopupProxy.9846aaaa.js";
import "./use-quasar.fb9bb1d2.js";
import "./debug.b9d7424b.js";
import "./help.2a2c0624.js";
import "./vue-i18n.runtime.esm-bundler.49397fa6.js";
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
