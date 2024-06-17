import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.38a6cef2.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.14d99dbb.js";
import { Q as QRouteTab } from "./QRouteTab.9b7f5993.js";
import { Q as QTabs } from "./QTabs.50f7235e.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.37b27507.js";
import "./QResizeObserver.6333adb2.js";
import "./rtl.276c3f1b.js";
import "./QSelect.cc8bc4a2.js";
import "./selection.2d4eb0bc.js";
import "./QItemLabel.13b2748a.js";
import "./QMenu.c44b3421.js";
import "./format.de7e9769.js";
import "./QSpace.28f3a53d.js";
import "./QTd.fcc7edb7.js";
import "./QTable.6b021727.js";
import "./QList.e4894220.js";
import "./QMarkupTable.e40d760d.js";
import "./QLinearProgress.4a13a1eb.js";
import "./use-fullscreen.77fc2967.js";
import "./open-url.2cf10fe8.js";
import "./axios.bc451377.js";
import "./StatusTag.da956ecd.js";
import "./QBadge.bfea7392.js";
import "./UserAvatar.6030980f.js";
import "./use-ratio.02689d61.js";
import "./QDate.a2b66255.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.b3aadc4b.js";
import "./QPopupProxy.cb00df6f.js";
import "./use-quasar.980bbc2f.js";
import "./debug.b9d7424b.js";
import "./help.e062646e.js";
import "./vue-i18n.runtime.esm-bundler.d8c14fdf.js";
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
