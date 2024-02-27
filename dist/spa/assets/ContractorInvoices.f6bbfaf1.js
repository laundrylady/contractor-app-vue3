import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.08099017.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.ad9f902a.js";
import { Q as QRouteTab } from "./QRouteTab.c64c2c26.js";
import { Q as QTabs } from "./QTabs.47be3965.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.4cd24faa.js";
import "./QResizeObserver.4528d365.js";
import "./rtl.b51694b1.js";
import "./QSelect.f2190d08.js";
import "./QItemSection.e2b74d1f.js";
import "./QItemLabel.c4904d43.js";
import "./QMenu.50fe9482.js";
import "./selection.6ee25a46.js";
import "./format.3e32b8d9.js";
import "./QSpace.ae68c70d.js";
import "./QTd.1d018964.js";
import "./QTable.dce95a50.js";
import "./QList.456d7f85.js";
import "./QMarkupTable.cb22d8a3.js";
import "./QLinearProgress.1d1a1d81.js";
import "./use-fullscreen.0b914ca5.js";
import "./open-url.b57c8456.js";
import "./axios.61d5b832.js";
import "./StatusTag.c63dd151.js";
import "./QBadge.b755dc86.js";
import "./UserAvatar.bef42f79.js";
import "./use-ratio.3ba82cfd.js";
import "./QDate.148fa726.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.04c7223f.js";
import "./QPopupProxy.57b8824c.js";
import "./use-quasar.f5c24810.js";
import "./debug.b9d7424b.js";
import "./help.c48cb5cb.js";
import "./vue-i18n.runtime.esm-bundler.a8791c93.js";
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
