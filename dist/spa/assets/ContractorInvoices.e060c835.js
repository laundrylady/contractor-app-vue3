import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.1b959b05.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.e5151e5c.js";
import { Q as QRouteTab } from "./QRouteTab.508743eb.js";
import { Q as QTabs } from "./QTabs.fa2b6cc3.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.11246e3f.js";
import "./QResizeObserver.ff214694.js";
import "./rtl.276c3f1b.js";
import "./QSelect.31cc5689.js";
import "./selection.2b1a1f43.js";
import "./QItemLabel.ea3a7bf6.js";
import "./QMenu.8b9cd80b.js";
import "./format.de7e9769.js";
import "./QSpace.6405a9be.js";
import "./QTd.17bb0ec2.js";
import "./QTable.d7e1c25d.js";
import "./QList.1496baac.js";
import "./QMarkupTable.77f68cc5.js";
import "./QLinearProgress.e0e216e9.js";
import "./use-fullscreen.cf1d82ea.js";
import "./open-url.db79120d.js";
import "./axios.2a5c0600.js";
import "./StatusTag.5b332e8f.js";
import "./QBadge.71624378.js";
import "./UserAvatar.00c5e75f.js";
import "./use-ratio.42210581.js";
import "./QDate.87d50598.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.9c20dad7.js";
import "./QPopupProxy.4a267102.js";
import "./use-quasar.4ba19de0.js";
import "./debug.b9d7424b.js";
import "./help.e23e635c.js";
import "./vue-i18n.runtime.esm-bundler.4753797d.js";
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
