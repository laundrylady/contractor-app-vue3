import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.4d63580c.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.a1dc4fe8.js";
import { Q as QRouteTab } from "./QRouteTab.12f854ec.js";
import { Q as QTabs } from "./QTabs.addb8d16.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.cc5d845e.js";
import "./QResizeObserver.c4eeb9f7.js";
import "./rtl.b51694b1.js";
import "./QSelect.1e082333.js";
import "./format.eea8744c.js";
import "./QItemLabel.9e02e9cb.js";
import "./selection.61bdbeb8.js";
import "./QSpace.3eb453ef.js";
import "./QTd.d1a72c12.js";
import "./QTable.8c01b04e.js";
import "./QList.b2f00f55.js";
import "./QMarkupTable.365e3f99.js";
import "./QLinearProgress.c141117e.js";
import "./use-fullscreen.b13201d6.js";
import "./open-url.428909ae.js";
import "./axios.80bd9ce9.js";
import "./StatusTag.52caf9f4.js";
import "./QBadge.a53e40a3.js";
import "./UserAvatar.777a261a.js";
import "./QImg.2ad3a31d.js";
import "./use-ratio.c068e323.js";
import "./QDate.60d7a89b.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.bf718225.js";
import "./QPopupProxy.341af208.js";
import "./use-quasar.c0d0135c.js";
import "./debug.b9d7424b.js";
import "./help.b5149410.js";
import "./vue-i18n.runtime.esm-bundler.1b1d6f8b.js";
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
