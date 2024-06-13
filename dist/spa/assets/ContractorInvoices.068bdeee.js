import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.a50f0974.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.d53657e1.js";
import { Q as QRouteTab } from "./QRouteTab.736c6cc5.js";
import { Q as QTabs } from "./QTabs.38d86d3b.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.7702d422.js";
import "./QResizeObserver.72aba7c3.js";
import "./rtl.276c3f1b.js";
import "./QSelect.ac3eca91.js";
import "./QItemSection.7d46b3d2.js";
import "./QItemLabel.88b8edd9.js";
import "./QMenu.089357e7.js";
import "./selection.59b1330f.js";
import "./format.de7e9769.js";
import "./QSpace.2acee95d.js";
import "./QTd.9dd60356.js";
import "./QTable.86572424.js";
import "./QList.bd61b03b.js";
import "./QMarkupTable.56ea2cf6.js";
import "./QLinearProgress.f26df715.js";
import "./use-fullscreen.9d5ffbe5.js";
import "./open-url.06dfb6bf.js";
import "./axios.75f2feb3.js";
import "./StatusTag.cc95f754.js";
import "./QBadge.75adc3d1.js";
import "./UserAvatar.356c0437.js";
import "./use-ratio.a6e11f3b.js";
import "./QDate.c7556a3e.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.f3911c03.js";
import "./QPopupProxy.019a9ef8.js";
import "./use-quasar.fe4c2577.js";
import "./debug.b9d7424b.js";
import "./help.67ed6268.js";
import "./vue-i18n.runtime.esm-bundler.7876e79e.js";
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
