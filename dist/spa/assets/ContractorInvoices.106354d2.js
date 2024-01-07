import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.93cf3cda.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.4531e815.js";
import { Q as QRouteTab } from "./QRouteTab.c7ee49c0.js";
import { Q as QTabs } from "./QTabs.3909da6a.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.d5d07044.js";
import "./QResizeObserver.7404db20.js";
import "./rtl.b51694b1.js";
import "./QSelect.8252c684.js";
import "./QItemSection.63606c3f.js";
import "./QItemLabel.05a09278.js";
import "./QMenu.cb732040.js";
import "./selection.ab96e859.js";
import "./format.3e32b8d9.js";
import "./QSpace.197773fb.js";
import "./QTd.7ee14b57.js";
import "./QTable.5a6e5df7.js";
import "./QList.e3021f79.js";
import "./QMarkupTable.33a0323d.js";
import "./QLinearProgress.0604660f.js";
import "./use-fullscreen.4c550c6d.js";
import "./open-url.5a71b0b7.js";
import "./axios.e339f967.js";
import "./StatusTag.010f7e80.js";
import "./QBadge.1b176f67.js";
import "./UserAvatar.44857c74.js";
import "./use-ratio.5b0dbc72.js";
import "./QDate.2328330e.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.873837f0.js";
import "./QPopupProxy.91dec670.js";
import "./use-quasar.78049a82.js";
import "./debug.b9d7424b.js";
import "./help.7e800d81.js";
import "./vue-i18n.runtime.esm-bundler.99fa0ac0.js";
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
