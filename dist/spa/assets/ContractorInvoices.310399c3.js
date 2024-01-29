import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.288d251c.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.a23de121.js";
import { Q as QRouteTab } from "./QRouteTab.4e6d85de.js";
import { Q as QTabs } from "./QTabs.609fb3ab.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.d0a687ec.js";
import "./QResizeObserver.b7009120.js";
import "./rtl.b51694b1.js";
import "./QSelect.7f1b0f73.js";
import "./QItemSection.d010cada.js";
import "./QItemLabel.f1754452.js";
import "./QMenu.7ebf623a.js";
import "./selection.71e3adfb.js";
import "./format.3e32b8d9.js";
import "./QSpace.362bfb5b.js";
import "./QTd.db451a12.js";
import "./QTable.1008c514.js";
import "./QList.2c25dc57.js";
import "./QMarkupTable.8db2a827.js";
import "./QLinearProgress.0b5f9f60.js";
import "./use-fullscreen.bc49e914.js";
import "./open-url.aefeea46.js";
import "./axios.60d7f612.js";
import "./StatusTag.fde5c2fe.js";
import "./QBadge.3886bb80.js";
import "./UserAvatar.a5d0f02b.js";
import "./use-ratio.9434ad3d.js";
import "./QDate.fc992a85.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.29b1e7c6.js";
import "./QPopupProxy.cce93947.js";
import "./use-quasar.85fb8861.js";
import "./debug.b9d7424b.js";
import "./help.c5612f95.js";
import "./vue-i18n.runtime.esm-bundler.a1040cbe.js";
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
