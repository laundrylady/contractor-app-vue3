import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.4a7ccaf8.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.a37f31ed.js";
import { Q as QRouteTab } from "./QRouteTab.11365eaf.js";
import { Q as QTabs } from "./QTabs.ddbf85fb.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.3b26ca39.js";
import "./QResizeObserver.2a00a0e1.js";
import "./rtl.b51694b1.js";
import "./QSelect.2cfdb3f1.js";
import "./QItemSection.5f64db8e.js";
import "./QItemLabel.d059fb8c.js";
import "./QMenu.029e863a.js";
import "./selection.f84380d5.js";
import "./format.3e32b8d9.js";
import "./QSpace.eb113057.js";
import "./QTd.dae3902a.js";
import "./QTable.6c588cf1.js";
import "./QList.3acdb976.js";
import "./QMarkupTable.3190632b.js";
import "./QLinearProgress.3cd818af.js";
import "./use-fullscreen.5e475baf.js";
import "./open-url.89d35b14.js";
import "./axios.f96e4130.js";
import "./StatusTag.4f9d1be5.js";
import "./QBadge.f84606b0.js";
import "./UserAvatar.dee49d79.js";
import "./use-ratio.46c450f4.js";
import "./QDate.bc427825.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.4281656e.js";
import "./QPopupProxy.d9a1dfaf.js";
import "./use-quasar.39c4e8ba.js";
import "./debug.b9d7424b.js";
import "./help.a72f6e72.js";
import "./vue-i18n.runtime.esm-bundler.0b6b3498.js";
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
