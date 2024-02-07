import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.e779ed8f.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.1e451095.js";
import { Q as QRouteTab } from "./QRouteTab.959888fc.js";
import { Q as QTabs } from "./QTabs.dd563a68.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.01256a88.js";
import "./QResizeObserver.e175201a.js";
import "./rtl.b51694b1.js";
import "./QSelect.efa5c686.js";
import "./QItemSection.f918b325.js";
import "./QItemLabel.bc19708c.js";
import "./QMenu.cc9f3b0e.js";
import "./selection.c62381cb.js";
import "./format.3e32b8d9.js";
import "./QSpace.f1d34cdd.js";
import "./QTd.79b023a8.js";
import "./QTable.2d37b598.js";
import "./QList.d7a8620b.js";
import "./QMarkupTable.37c91a74.js";
import "./QLinearProgress.8aba57b9.js";
import "./use-fullscreen.146fe1c2.js";
import "./open-url.eeb31964.js";
import "./axios.4751c363.js";
import "./StatusTag.ad61df4f.js";
import "./QBadge.7efcdcea.js";
import "./UserAvatar.4a3ec619.js";
import "./use-ratio.3ade4d9e.js";
import "./QDate.a9b87ce9.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.fb9b1bb2.js";
import "./QPopupProxy.5d494119.js";
import "./use-quasar.c2ee5c41.js";
import "./debug.b9d7424b.js";
import "./help.1405747b.js";
import "./vue-i18n.runtime.esm-bundler.96bf6af0.js";
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
