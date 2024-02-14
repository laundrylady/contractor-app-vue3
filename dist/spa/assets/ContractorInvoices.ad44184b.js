import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.6acd2f95.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.2dac19e5.js";
import { Q as QRouteTab } from "./QRouteTab.2a23ce23.js";
import { Q as QTabs } from "./QTabs.befab45d.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.e34e9067.js";
import "./QResizeObserver.85278b06.js";
import "./rtl.b51694b1.js";
import "./QSelect.86f54259.js";
import "./QItemSection.49f4722f.js";
import "./QItemLabel.2a427a06.js";
import "./QMenu.4d444796.js";
import "./selection.cf40296c.js";
import "./format.3e32b8d9.js";
import "./QSpace.dd1b93a4.js";
import "./QTd.1f114f6c.js";
import "./QTable.51223a8a.js";
import "./QList.806c8947.js";
import "./QMarkupTable.9bc27f3c.js";
import "./QLinearProgress.e3cffa17.js";
import "./use-fullscreen.8643a0f8.js";
import "./open-url.28537a96.js";
import "./axios.a11536c6.js";
import "./StatusTag.627bc209.js";
import "./QBadge.4c05b407.js";
import "./UserAvatar.00c43922.js";
import "./use-ratio.0798d5aa.js";
import "./QDate.614b2b82.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.5849692c.js";
import "./QPopupProxy.2a3959e6.js";
import "./use-quasar.b06d3ff6.js";
import "./debug.b9d7424b.js";
import "./help.4555f504.js";
import "./vue-i18n.runtime.esm-bundler.67471051.js";
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
