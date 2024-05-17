import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.7a6165bd.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.d9d8a4ff.js";
import { Q as QRouteTab } from "./QRouteTab.ee5bc728.js";
import { Q as QTabs } from "./QTabs.56c67ff4.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.33cc81e9.js";
import "./QResizeObserver.650c45d9.js";
import "./rtl.276c3f1b.js";
import "./QSelect.c17ea5e8.js";
import "./QItemSection.272e2acd.js";
import "./QItemLabel.aa1431ca.js";
import "./QMenu.3507a2f1.js";
import "./selection.0a13c517.js";
import "./format.de7e9769.js";
import "./QSpace.76f7c209.js";
import "./QTd.b7266111.js";
import "./QTable.859976e4.js";
import "./QList.4f5a733b.js";
import "./QMarkupTable.3928dde1.js";
import "./QLinearProgress.19e05036.js";
import "./use-fullscreen.e71ca2a3.js";
import "./open-url.e1193c47.js";
import "./axios.2fe39f73.js";
import "./StatusTag.1ac8f535.js";
import "./QBadge.beb8040d.js";
import "./UserAvatar.e5b0a914.js";
import "./use-ratio.e5950af4.js";
import "./QDate.4efef1c5.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.faa7f640.js";
import "./QPopupProxy.c9db1c0b.js";
import "./use-quasar.6721189c.js";
import "./debug.b9d7424b.js";
import "./help.9711ed7e.js";
import "./vue-i18n.runtime.esm-bundler.3236f645.js";
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
