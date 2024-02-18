import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.4926aa9a.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.8a5799b2.js";
import { Q as QRouteTab } from "./QRouteTab.676b655b.js";
import { Q as QTabs } from "./QTabs.0bca1d5f.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.01278ad8.js";
import "./QResizeObserver.32f258c9.js";
import "./rtl.b51694b1.js";
import "./QSelect.4dd48989.js";
import "./QItemSection.c2e831ff.js";
import "./QItemLabel.c5588883.js";
import "./QMenu.9baac5c6.js";
import "./selection.3b9b612c.js";
import "./format.3e32b8d9.js";
import "./QSpace.5fcf73ba.js";
import "./QTd.ebdff96f.js";
import "./QTable.eeccd8e4.js";
import "./QList.ea4ef22b.js";
import "./QMarkupTable.3666ae8c.js";
import "./QLinearProgress.d8841d43.js";
import "./use-fullscreen.b2935117.js";
import "./open-url.23c54156.js";
import "./axios.61cdb935.js";
import "./StatusTag.1c496280.js";
import "./QBadge.f6c0dfaa.js";
import "./UserAvatar.496137a0.js";
import "./use-ratio.6a08b08b.js";
import "./QDate.d08848f1.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.9be77b39.js";
import "./QPopupProxy.a96470d2.js";
import "./use-quasar.4a68f4fb.js";
import "./debug.b9d7424b.js";
import "./help.57a9d112.js";
import "./vue-i18n.runtime.esm-bundler.07020053.js";
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
