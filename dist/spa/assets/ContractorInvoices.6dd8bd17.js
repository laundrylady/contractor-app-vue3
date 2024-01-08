import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.c08a4e10.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.667768ad.js";
import { Q as QRouteTab } from "./QRouteTab.6701e908.js";
import { Q as QTabs } from "./QTabs.4bce6def.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.55309be6.js";
import "./QResizeObserver.47dc34db.js";
import "./rtl.b51694b1.js";
import "./QSelect.6935652b.js";
import "./QItemSection.097b085f.js";
import "./QItemLabel.84bbcc3d.js";
import "./QMenu.98c98c11.js";
import "./selection.c9e6c843.js";
import "./format.3e32b8d9.js";
import "./QSpace.595243dd.js";
import "./QTd.82db19f2.js";
import "./QTable.e09a8c96.js";
import "./QList.4e067f16.js";
import "./QMarkupTable.767357da.js";
import "./QLinearProgress.d91a8eab.js";
import "./use-fullscreen.68775a7a.js";
import "./open-url.e639d9d6.js";
import "./axios.f80a1a62.js";
import "./StatusTag.72b8e153.js";
import "./QBadge.695d2be8.js";
import "./UserAvatar.36f3a873.js";
import "./use-ratio.c780fde5.js";
import "./QDate.dbae5e7b.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.5537a9a8.js";
import "./QPopupProxy.a1c0bcca.js";
import "./use-quasar.b672474e.js";
import "./debug.b9d7424b.js";
import "./help.5a41e2ad.js";
import "./vue-i18n.runtime.esm-bundler.d72bd667.js";
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
