import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.2a8b6235.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.6dbefbb7.js";
import { Q as QRouteTab } from "./QRouteTab.52b8a71f.js";
import { Q as QTabs } from "./QTabs.be4b1fe1.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.16adb65a.js";
import "./QResizeObserver.11c4652f.js";
import "./rtl.b51694b1.js";
import "./QSelect.9a541b30.js";
import "./QItemSection.0eb83c6b.js";
import "./QItemLabel.8647561e.js";
import "./QMenu.daeaa8fa.js";
import "./selection.c8b2b5d8.js";
import "./format.3e32b8d9.js";
import "./QSpace.6d5c9a33.js";
import "./QTd.7b246502.js";
import "./QTable.cf1adce4.js";
import "./QList.90ff5062.js";
import "./QMarkupTable.6f330643.js";
import "./QLinearProgress.fbdc694d.js";
import "./use-fullscreen.8562bd47.js";
import "./open-url.db472b7f.js";
import "./axios.2ca873cc.js";
import "./StatusTag.6193a3a7.js";
import "./QBadge.5e61caed.js";
import "./UserAvatar.59bd3699.js";
import "./use-ratio.1bfc377b.js";
import "./QDate.934e95ad.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.428f7b86.js";
import "./QPopupProxy.aaf5a5e2.js";
import "./use-quasar.295b06c3.js";
import "./debug.b9d7424b.js";
import "./help.f1df2904.js";
import "./vue-i18n.runtime.esm-bundler.3dac5889.js";
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
