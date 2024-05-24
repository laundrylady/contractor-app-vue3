import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.0b09a5a3.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.ae728117.js";
import { Q as QRouteTab } from "./QRouteTab.fde3265f.js";
import { Q as QTabs } from "./QTabs.02ef9723.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.5369badf.js";
import "./QResizeObserver.8b5d086c.js";
import "./rtl.276c3f1b.js";
import "./QSelect.50ff3f19.js";
import "./QItemSection.29c6a139.js";
import "./QItemLabel.46538de8.js";
import "./QMenu.f1d3622d.js";
import "./selection.f8508231.js";
import "./format.de7e9769.js";
import "./QSpace.0f4a9c7e.js";
import "./QTd.9c6c067f.js";
import "./QTable.198d5655.js";
import "./QList.badc74df.js";
import "./QMarkupTable.76f69134.js";
import "./QLinearProgress.7dc2af46.js";
import "./use-fullscreen.ef9eb948.js";
import "./open-url.1b9deb68.js";
import "./axios.37955361.js";
import "./StatusTag.f4803ade.js";
import "./QBadge.638d54c5.js";
import "./UserAvatar.c2a47f25.js";
import "./use-ratio.959802d1.js";
import "./QDate.599e9c43.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.b388713d.js";
import "./QPopupProxy.b118ac11.js";
import "./use-quasar.8d96d2c6.js";
import "./debug.b9d7424b.js";
import "./help.03c96e57.js";
import "./vue-i18n.runtime.esm-bundler.ec2278ee.js";
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
