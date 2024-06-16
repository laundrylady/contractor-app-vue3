import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.97eff735.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.9f432861.js";
import { Q as QRouteTab } from "./QRouteTab.c71d2028.js";
import { Q as QTabs } from "./QTabs.8f0f6e0a.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.8a671bab.js";
import "./QResizeObserver.71b138b9.js";
import "./rtl.276c3f1b.js";
import "./QSelect.1a4da305.js";
import "./selection.8acc63c6.js";
import "./QItemLabel.a56031b0.js";
import "./QMenu.4a5ea2bb.js";
import "./format.de7e9769.js";
import "./QSpace.a648619f.js";
import "./QTd.ebdf10f4.js";
import "./QTable.4fd37b87.js";
import "./QList.43f7d494.js";
import "./QMarkupTable.df34e0fd.js";
import "./QLinearProgress.2bd986f2.js";
import "./use-fullscreen.a091e2fe.js";
import "./open-url.8146bc70.js";
import "./axios.3e4f7477.js";
import "./StatusTag.d2d12972.js";
import "./QBadge.f2c2afbf.js";
import "./UserAvatar.5aa87e87.js";
import "./use-ratio.c4b8b857.js";
import "./QDate.6a9b8fe2.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.2629e718.js";
import "./QPopupProxy.503bb3ea.js";
import "./use-quasar.7fca8b9f.js";
import "./debug.b9d7424b.js";
import "./help.87883cc2.js";
import "./vue-i18n.runtime.esm-bundler.1265983d.js";
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
