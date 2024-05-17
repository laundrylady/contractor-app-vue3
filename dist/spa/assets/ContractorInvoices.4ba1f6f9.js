import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.9a11cf11.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.876a7b9e.js";
import { Q as QRouteTab } from "./QRouteTab.4e20a4d0.js";
import { Q as QTabs } from "./QTabs.3d51c285.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.060ddcad.js";
import "./QResizeObserver.0ddb4131.js";
import "./rtl.276c3f1b.js";
import "./QSelect.62377b0b.js";
import "./QItemSection.2309b52b.js";
import "./QItemLabel.cef8510d.js";
import "./QMenu.a1c0df01.js";
import "./selection.d8d985bb.js";
import "./format.de7e9769.js";
import "./QSpace.9b364c49.js";
import "./QTd.96857910.js";
import "./QTable.b1e4046d.js";
import "./QList.6897626c.js";
import "./QMarkupTable.c390c23d.js";
import "./QLinearProgress.80feccb0.js";
import "./use-fullscreen.e5e4dcf2.js";
import "./open-url.d6ecea13.js";
import "./axios.21220e31.js";
import "./StatusTag.8bc2e429.js";
import "./QBadge.b84db0a4.js";
import "./UserAvatar.72168aef.js";
import "./use-ratio.6c919724.js";
import "./QDate.ee893074.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.792d6b7a.js";
import "./QPopupProxy.d264c97d.js";
import "./use-quasar.419031ab.js";
import "./debug.b9d7424b.js";
import "./help.02aeb00c.js";
import "./vue-i18n.runtime.esm-bundler.097c6e2b.js";
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
