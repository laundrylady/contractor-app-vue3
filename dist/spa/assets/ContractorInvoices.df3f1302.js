import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.f668ef97.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.2353704a.js";
import { Q as QRouteTab } from "./QRouteTab.5b1d14a9.js";
import { Q as QTabs } from "./QTabs.ba3085a9.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.4ac2cf06.js";
import "./QResizeObserver.e2f88dea.js";
import "./rtl.276c3f1b.js";
import "./QSelect.0937f97b.js";
import "./QItemSection.d80474bd.js";
import "./QItemLabel.32bc7e20.js";
import "./QMenu.eb68df62.js";
import "./selection.ee9589e2.js";
import "./format.de7e9769.js";
import "./QSpace.884594e5.js";
import "./QTd.96f0d15f.js";
import "./QTable.dc241e65.js";
import "./QList.d9275854.js";
import "./QMarkupTable.0e150959.js";
import "./QLinearProgress.7ee1194e.js";
import "./use-fullscreen.01b6659f.js";
import "./open-url.eae0bcbc.js";
import "./axios.baad754f.js";
import "./StatusTag.3ba75f73.js";
import "./QBadge.f7bba4da.js";
import "./UserAvatar.32389d38.js";
import "./use-ratio.a17731b6.js";
import "./QDate.0c193a95.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.50d641af.js";
import "./QPopupProxy.b071a2c6.js";
import "./use-quasar.2811a6cf.js";
import "./debug.b9d7424b.js";
import "./help.6bbe450b.js";
import "./vue-i18n.runtime.esm-bundler.8dab9d85.js";
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
