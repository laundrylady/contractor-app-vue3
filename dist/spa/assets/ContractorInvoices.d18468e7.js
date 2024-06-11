import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.e9465d3e.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.40257d65.js";
import { Q as QRouteTab } from "./QRouteTab.625856e5.js";
import { Q as QTabs } from "./QTabs.b47df1f9.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.28ef67a2.js";
import "./QResizeObserver.00eb1988.js";
import "./rtl.276c3f1b.js";
import "./QSelect.25517cea.js";
import "./QItemSection.3f560663.js";
import "./QItemLabel.a9a4c4a5.js";
import "./QMenu.7ce6e686.js";
import "./selection.a082d363.js";
import "./format.de7e9769.js";
import "./QSpace.f5b0e487.js";
import "./QTd.c2ede27c.js";
import "./QTable.963f6fb2.js";
import "./QList.1efb6676.js";
import "./QMarkupTable.82321d35.js";
import "./QLinearProgress.a84735e7.js";
import "./use-fullscreen.7f46a1d4.js";
import "./open-url.c1d299af.js";
import "./axios.d924370d.js";
import "./StatusTag.2480c9b8.js";
import "./QBadge.ca014e01.js";
import "./UserAvatar.aa86a726.js";
import "./use-ratio.226a03c7.js";
import "./QDate.b11108fd.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.14869c15.js";
import "./QPopupProxy.2a97395f.js";
import "./use-quasar.07cbb152.js";
import "./debug.b9d7424b.js";
import "./help.c08c7d1f.js";
import "./vue-i18n.runtime.esm-bundler.0bf9ca1d.js";
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
