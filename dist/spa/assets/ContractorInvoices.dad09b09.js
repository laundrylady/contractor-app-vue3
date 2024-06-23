import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.646fce27.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.0574ae83.js";
import { Q as QRouteTab } from "./QRouteTab.4c0ff45c.js";
import { Q as QTabs } from "./QTabs.5b13c629.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.b07fd678.js";
import "./QResizeObserver.5bccc54b.js";
import "./rtl.276c3f1b.js";
import "./QSelect.deb42fdb.js";
import "./selection.682a8479.js";
import "./QItemLabel.81345429.js";
import "./QMenu.d189168f.js";
import "./format.de7e9769.js";
import "./QSpace.a9d8ee69.js";
import "./QTd.ee533677.js";
import "./QTable.3ae37443.js";
import "./QList.0c009371.js";
import "./QMarkupTable.7fbe1d90.js";
import "./QLinearProgress.8c88fc59.js";
import "./use-fullscreen.9af2a3e3.js";
import "./open-url.c2511eb6.js";
import "./axios.16f6de8d.js";
import "./StatusTag.94f54519.js";
import "./QBadge.e9e79a56.js";
import "./UserAvatar.a325ffeb.js";
import "./use-ratio.a55e1c0e.js";
import "./QDate.d44250a2.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.573a11f7.js";
import "./QPopupProxy.35b9eceb.js";
import "./use-quasar.e9e4706d.js";
import "./debug.b9d7424b.js";
import "./help.4eea4898.js";
import "./vue-i18n.runtime.esm-bundler.dbf33721.js";
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
