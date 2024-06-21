import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.f4154b53.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.275e5649.js";
import { Q as QRouteTab } from "./QRouteTab.782ce2ae.js";
import { Q as QTabs } from "./QTabs.c436b57a.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.cb41483b.js";
import "./QResizeObserver.d4578012.js";
import "./rtl.276c3f1b.js";
import "./QSelect.a5ed117f.js";
import "./selection.f8026f5e.js";
import "./QItemLabel.4f1c6239.js";
import "./QMenu.48688247.js";
import "./format.de7e9769.js";
import "./QSpace.59266848.js";
import "./QTd.2bbaebab.js";
import "./QTable.7368cfb0.js";
import "./QList.2c63e15c.js";
import "./QMarkupTable.89603fb1.js";
import "./QLinearProgress.17a0781c.js";
import "./use-fullscreen.4ce95169.js";
import "./open-url.c1a91eca.js";
import "./axios.8226f3dd.js";
import "./StatusTag.60b3038f.js";
import "./QBadge.b1abf82a.js";
import "./UserAvatar.bf26ff0c.js";
import "./use-ratio.0255a8bc.js";
import "./QDate.144d6785.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.19582121.js";
import "./QPopupProxy.17d33b92.js";
import "./use-quasar.ab78ab05.js";
import "./debug.b9d7424b.js";
import "./help.64b1e895.js";
import "./vue-i18n.runtime.esm-bundler.08c4fecc.js";
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
