import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.5de92a2b.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.416215f8.js";
import { Q as QRouteTab } from "./QRouteTab.ec9017fe.js";
import { Q as QTabs } from "./QTabs.794b8f10.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.75cc736d.js";
import "./QResizeObserver.817916db.js";
import "./rtl.b51694b1.js";
import "./QSelect.3038c863.js";
import "./QItemSection.805a26d0.js";
import "./QItemLabel.bd2fac45.js";
import "./QMenu.7a184e26.js";
import "./selection.a6faf749.js";
import "./format.3e32b8d9.js";
import "./QSpace.0156b387.js";
import "./QTd.2cbe4574.js";
import "./QTable.7c47a1d3.js";
import "./QList.79a00ed0.js";
import "./QMarkupTable.2d69a80e.js";
import "./QLinearProgress.9750c8e7.js";
import "./use-fullscreen.37f6214f.js";
import "./open-url.d8b83b47.js";
import "./axios.af1016c8.js";
import "./StatusTag.7a7fb887.js";
import "./QBadge.26f158cd.js";
import "./UserAvatar.fa6ec989.js";
import "./use-ratio.e90a0df9.js";
import "./QDate.980540f1.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.1330106e.js";
import "./QPopupProxy.eefe00da.js";
import "./use-quasar.1285a0f9.js";
import "./debug.b9d7424b.js";
import "./help.97306336.js";
import "./vue-i18n.runtime.esm-bundler.65cb5c45.js";
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
