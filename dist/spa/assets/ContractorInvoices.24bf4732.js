import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.bffa8c3c.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.7ca2a6fe.js";
import { Q as QRouteTab } from "./QRouteTab.4432ffe1.js";
import { Q as QTabs } from "./QTabs.27f3fe59.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.1c955142.js";
import "./QResizeObserver.fd4f64d9.js";
import "./rtl.276c3f1b.js";
import "./QSelect.bbd3cae6.js";
import "./selection.30294983.js";
import "./QItemLabel.afd2234f.js";
import "./QMenu.0f25bc7d.js";
import "./format.de7e9769.js";
import "./QSpace.6279c2e1.js";
import "./QTd.2d3956cb.js";
import "./QTable.4234d9b0.js";
import "./QList.9280b7fb.js";
import "./QMarkupTable.5b2cb7a8.js";
import "./QLinearProgress.cc2c4a27.js";
import "./use-fullscreen.7191c0c0.js";
import "./open-url.3d21148c.js";
import "./axios.f27ccc14.js";
import "./StatusTag.43e2ea9f.js";
import "./QBadge.0c13b2e9.js";
import "./UserAvatar.e41af71c.js";
import "./use-ratio.9f862873.js";
import "./QDate.308277c6.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.58627e28.js";
import "./QPopupProxy.19a3eb35.js";
import "./use-quasar.6c806c42.js";
import "./debug.b9d7424b.js";
import "./help.237e61c3.js";
import "./vue-i18n.runtime.esm-bundler.f3d928b3.js";
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
