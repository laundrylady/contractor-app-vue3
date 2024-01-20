import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.bc725a9e.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.d20a7400.js";
import { Q as QRouteTab } from "./QRouteTab.41dc6a1b.js";
import { Q as QTabs } from "./QTabs.3717d2f6.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.12860ab9.js";
import "./QResizeObserver.b28aff80.js";
import "./rtl.b51694b1.js";
import "./QSelect.004c915d.js";
import "./QItemSection.603e7659.js";
import "./QItemLabel.c321e11e.js";
import "./QMenu.bb8dbd35.js";
import "./selection.77eb3195.js";
import "./format.3e32b8d9.js";
import "./QSpace.dc9324a9.js";
import "./QTd.bec3857f.js";
import "./QTable.89cd271f.js";
import "./QList.c751a8cb.js";
import "./QMarkupTable.490bae5f.js";
import "./QLinearProgress.e9aba0b9.js";
import "./use-fullscreen.5c78359b.js";
import "./open-url.9032efe1.js";
import "./axios.472e17a9.js";
import "./StatusTag.4163a5da.js";
import "./QBadge.f4ffc83a.js";
import "./UserAvatar.d1e08569.js";
import "./use-ratio.f1bbf761.js";
import "./QDate.70766c7e.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.7ccf7c28.js";
import "./QPopupProxy.c0109d22.js";
import "./use-quasar.e94f3dc5.js";
import "./debug.b9d7424b.js";
import "./help.e514973d.js";
import "./vue-i18n.runtime.esm-bundler.36ae8443.js";
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
