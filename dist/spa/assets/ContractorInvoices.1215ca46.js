import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.bb02fd1d.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.f326e102.js";
import { Q as QRouteTab } from "./QRouteTab.b6083e8f.js";
import { Q as QTabs } from "./QTabs.c640da60.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.8e8fd3e7.js";
import "./QResizeObserver.9b52d98c.js";
import "./rtl.b51694b1.js";
import "./QSelect.d95f058c.js";
import "./QItemSection.de19139f.js";
import "./QItemLabel.cc28cd73.js";
import "./QMenu.4b0088a6.js";
import "./selection.eda2ec96.js";
import "./format.3e32b8d9.js";
import "./QSpace.092ec784.js";
import "./QTd.a0fe7a61.js";
import "./QTable.bc678cbc.js";
import "./QList.c9ab0266.js";
import "./QMarkupTable.0f18a815.js";
import "./QLinearProgress.050e2423.js";
import "./use-fullscreen.fc0a4665.js";
import "./open-url.e8ff97a7.js";
import "./axios.c967a096.js";
import "./StatusTag.8b4af867.js";
import "./QBadge.b0325269.js";
import "./UserAvatar.ecda40f9.js";
import "./use-ratio.8eb67f7f.js";
import "./QDate.2d37702c.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.15ae057c.js";
import "./QPopupProxy.8ffed59b.js";
import "./use-quasar.66694a3c.js";
import "./debug.b9d7424b.js";
import "./help.9d09ced6.js";
import "./vue-i18n.runtime.esm-bundler.4841e7f2.js";
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
