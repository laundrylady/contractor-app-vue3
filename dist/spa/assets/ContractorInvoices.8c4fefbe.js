import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.84fae5f5.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.4746d786.js";
import { Q as QRouteTab } from "./QRouteTab.7d918991.js";
import { Q as QTabs } from "./QTabs.684b6a01.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.6e47b13d.js";
import "./QResizeObserver.74d2fe3a.js";
import "./rtl.b51694b1.js";
import "./QSelect.475b8e0a.js";
import "./QItemSection.4b58462e.js";
import "./QItemLabel.f3630861.js";
import "./QMenu.f4739337.js";
import "./selection.e385e751.js";
import "./format.3e32b8d9.js";
import "./QSpace.092c4cd3.js";
import "./QTd.b400daad.js";
import "./QTable.47f7e83c.js";
import "./QList.2ea35998.js";
import "./QMarkupTable.01d2b308.js";
import "./QLinearProgress.8b51937f.js";
import "./use-fullscreen.bf4d3b8a.js";
import "./open-url.5417eb87.js";
import "./axios.8eb63b42.js";
import "./StatusTag.4be542e4.js";
import "./QBadge.41652fc1.js";
import "./UserAvatar.9ad8d04f.js";
import "./use-ratio.6caf71a3.js";
import "./QDate.37eb686c.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.ef22a670.js";
import "./QPopupProxy.084b25d2.js";
import "./use-quasar.a6c17b87.js";
import "./debug.b9d7424b.js";
import "./help.41c94128.js";
import "./vue-i18n.runtime.esm-bundler.934c6f51.js";
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
