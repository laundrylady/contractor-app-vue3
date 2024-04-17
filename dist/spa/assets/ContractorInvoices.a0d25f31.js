import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.ed79211e.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.b762994d.js";
import { Q as QRouteTab } from "./QRouteTab.c04c3ed1.js";
import { Q as QTabs } from "./QTabs.dce6e881.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.58b87b00.js";
import "./QResizeObserver.4e7ad2be.js";
import "./rtl.b51694b1.js";
import "./QSelect.6911260e.js";
import "./QItemSection.7b770257.js";
import "./QItemLabel.e5913664.js";
import "./QMenu.da2c12b1.js";
import "./selection.5a991f3e.js";
import "./format.3e32b8d9.js";
import "./QSpace.75714606.js";
import "./QTd.73cc7355.js";
import "./QTable.021b4058.js";
import "./QList.ab61c688.js";
import "./QMarkupTable.3bc32064.js";
import "./QLinearProgress.77394baf.js";
import "./use-fullscreen.92326348.js";
import "./open-url.6fd60796.js";
import "./axios.eac371de.js";
import "./StatusTag.5b6046b7.js";
import "./QBadge.909d1dbe.js";
import "./UserAvatar.286bdd0e.js";
import "./use-ratio.644332ce.js";
import "./QDate.b74e4575.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.a79743cb.js";
import "./QPopupProxy.8fe83a8e.js";
import "./use-quasar.ed8ec77c.js";
import "./debug.b9d7424b.js";
import "./help.0abe00d6.js";
import "./vue-i18n.runtime.esm-bundler.e7f40751.js";
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
