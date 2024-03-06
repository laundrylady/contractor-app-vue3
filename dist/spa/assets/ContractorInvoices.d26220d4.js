import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.17833339.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.50584de1.js";
import { Q as QRouteTab } from "./QRouteTab.cedcb778.js";
import { Q as QTabs } from "./QTabs.f2f9317b.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.0e72937c.js";
import "./QResizeObserver.b0762022.js";
import "./rtl.b51694b1.js";
import "./QSelect.6163ca24.js";
import "./QItemSection.2e00f0a9.js";
import "./QItemLabel.7df690d2.js";
import "./QMenu.6ccbcb91.js";
import "./selection.093ede3f.js";
import "./format.3e32b8d9.js";
import "./QSpace.c4b4cf62.js";
import "./QTd.ed9bd2ba.js";
import "./QTable.9ea800fb.js";
import "./QList.46fbaee9.js";
import "./QMarkupTable.9e8924fb.js";
import "./QLinearProgress.daf0fc30.js";
import "./use-fullscreen.2b8d871e.js";
import "./open-url.b2d73fc9.js";
import "./axios.09203366.js";
import "./StatusTag.b7f48fd5.js";
import "./QBadge.1cd3f386.js";
import "./UserAvatar.431ca453.js";
import "./use-ratio.092656cd.js";
import "./QDate.2c0e4b92.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.ff6c1328.js";
import "./QPopupProxy.5724d055.js";
import "./use-quasar.ac540f78.js";
import "./debug.b9d7424b.js";
import "./help.6ffb50b6.js";
import "./vue-i18n.runtime.esm-bundler.0f8d52f3.js";
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
