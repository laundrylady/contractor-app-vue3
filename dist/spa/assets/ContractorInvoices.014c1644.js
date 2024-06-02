import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.236933ce.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.9a017967.js";
import { Q as QRouteTab } from "./QRouteTab.8ede9aeb.js";
import { Q as QTabs } from "./QTabs.8bc58a7f.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.32e998c6.js";
import "./QResizeObserver.8a90cc94.js";
import "./rtl.276c3f1b.js";
import "./QSelect.d1f2e8b7.js";
import "./QItemSection.ba323dad.js";
import "./QItemLabel.c7c3cab8.js";
import "./QMenu.aea6277a.js";
import "./selection.5951edfe.js";
import "./format.de7e9769.js";
import "./QSpace.39b9f178.js";
import "./QTd.e144541a.js";
import "./QTable.ad89c0be.js";
import "./QList.5139d086.js";
import "./QMarkupTable.ae41a849.js";
import "./QLinearProgress.4d16ca63.js";
import "./use-fullscreen.2ba1ce0c.js";
import "./open-url.bf9a1d21.js";
import "./axios.81902657.js";
import "./StatusTag.983f5073.js";
import "./QBadge.c8262fa3.js";
import "./UserAvatar.2e4acca3.js";
import "./use-ratio.650d4195.js";
import "./QDate.d0e11bda.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.83ee7d0c.js";
import "./QPopupProxy.b72e0efd.js";
import "./use-quasar.a96ef1e4.js";
import "./debug.b9d7424b.js";
import "./help.7d5b75c7.js";
import "./vue-i18n.runtime.esm-bundler.2cc27b4a.js";
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
