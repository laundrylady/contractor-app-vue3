import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.1962d2ae.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.b35497a2.js";
import { Q as QRouteTab } from "./QRouteTab.5568694e.js";
import { Q as QTabs } from "./QTabs.9a6538cc.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.96fd43fb.js";
import "./QResizeObserver.4f27331f.js";
import "./rtl.b51694b1.js";
import "./QSelect.588e498c.js";
import "./QItemSection.27e965ab.js";
import "./QItemLabel.6b198e0f.js";
import "./QMenu.f8889ea8.js";
import "./selection.48aa2add.js";
import "./format.3e32b8d9.js";
import "./QSpace.f6338f01.js";
import "./QTd.253e6697.js";
import "./QTable.ef535a03.js";
import "./QList.468eae41.js";
import "./QMarkupTable.ea415df9.js";
import "./QLinearProgress.7695f0df.js";
import "./use-fullscreen.700ae56b.js";
import "./open-url.86942a46.js";
import "./axios.7f94127f.js";
import "./StatusTag.50b578ea.js";
import "./QBadge.8da8b603.js";
import "./UserAvatar.411c493f.js";
import "./use-ratio.484e4c18.js";
import "./QDate.6b01192e.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.13c28df3.js";
import "./QPopupProxy.d634c9a4.js";
import "./use-quasar.fd553804.js";
import "./debug.b9d7424b.js";
import "./help.70a262df.js";
import "./vue-i18n.runtime.esm-bundler.7948a615.js";
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
