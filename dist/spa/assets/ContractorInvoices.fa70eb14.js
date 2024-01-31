import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.eaa20375.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.a12b1dfe.js";
import { Q as QRouteTab } from "./QRouteTab.fbfd327e.js";
import { Q as QTabs } from "./QTabs.23843894.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.5e53ae2f.js";
import "./QResizeObserver.907a217a.js";
import "./rtl.b51694b1.js";
import "./QSelect.cfea1f9c.js";
import "./QItemSection.88aaf570.js";
import "./QItemLabel.2a2ce6a2.js";
import "./QMenu.f7a5e5fc.js";
import "./selection.008a7de8.js";
import "./format.3e32b8d9.js";
import "./QSpace.da994c42.js";
import "./QTd.d55814f1.js";
import "./QTable.7bd8a05c.js";
import "./QList.566c2f4d.js";
import "./QMarkupTable.60b87c55.js";
import "./QLinearProgress.f1a4914a.js";
import "./use-fullscreen.cc49ca27.js";
import "./open-url.fd1e9f0d.js";
import "./axios.893b6184.js";
import "./StatusTag.ba044bb3.js";
import "./QBadge.ec797832.js";
import "./UserAvatar.27150dc1.js";
import "./use-ratio.51b66289.js";
import "./QDate.2e0cfe6c.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.3db0f5a2.js";
import "./QPopupProxy.0522f6ef.js";
import "./use-quasar.47dc7e81.js";
import "./debug.b9d7424b.js";
import "./help.62721eac.js";
import "./vue-i18n.runtime.esm-bundler.d26036d5.js";
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
