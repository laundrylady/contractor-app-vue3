import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.3e5b9003.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.c365cb98.js";
import { Q as QRouteTab } from "./QRouteTab.d0a70bd4.js";
import { Q as QTabs } from "./QTabs.c9333300.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.f2e964bc.js";
import "./QResizeObserver.2efe48a7.js";
import "./rtl.b51694b1.js";
import "./QSelect.4f2fc8f4.js";
import "./QItemSection.92fddb70.js";
import "./QItemLabel.5ef2da82.js";
import "./QMenu.2bbb5cbb.js";
import "./selection.d071096f.js";
import "./format.3e32b8d9.js";
import "./QSpace.2282a35a.js";
import "./QTd.ed092572.js";
import "./QTable.c9ee905b.js";
import "./QList.b6b2ce02.js";
import "./QMarkupTable.af1b5a0e.js";
import "./QLinearProgress.e8bc2679.js";
import "./use-fullscreen.9105a6b5.js";
import "./open-url.c17b8244.js";
import "./axios.2cae4f8f.js";
import "./StatusTag.57aaad38.js";
import "./QBadge.a58fafcf.js";
import "./UserAvatar.41874294.js";
import "./use-ratio.6ec9c8c8.js";
import "./QDate.b0785683.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.16b529d7.js";
import "./QPopupProxy.729dbe2d.js";
import "./use-quasar.6bf44bf7.js";
import "./debug.b9d7424b.js";
import "./help.7fb2c0cb.js";
import "./vue-i18n.runtime.esm-bundler.a3efec64.js";
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
