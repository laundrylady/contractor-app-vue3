import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.1a6e03af.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.68eda934.js";
import { Q as QRouteTab } from "./QRouteTab.37f16c83.js";
import { Q as QTabs } from "./QTabs.b1886d4b.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.032aa0c2.js";
import "./QResizeObserver.367db709.js";
import "./rtl.b51694b1.js";
import "./QSelect.e03e6736.js";
import "./QItemSection.0d1d3958.js";
import "./QItemLabel.0d7bf23c.js";
import "./QMenu.49eed60d.js";
import "./selection.40ffa727.js";
import "./format.3e32b8d9.js";
import "./QSpace.f4aab5a2.js";
import "./QTd.cf99ec1c.js";
import "./QTable.e14e4509.js";
import "./QList.333d9fbf.js";
import "./QMarkupTable.f661872f.js";
import "./QLinearProgress.2055dbc8.js";
import "./use-fullscreen.03ae4c57.js";
import "./open-url.4a38ad94.js";
import "./axios.68f25e65.js";
import "./StatusTag.8fa0dc9f.js";
import "./QBadge.3764caa2.js";
import "./UserAvatar.8a6c7698.js";
import "./use-ratio.dc7a5d2a.js";
import "./QDate.701701ec.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.2ad2a833.js";
import "./QPopupProxy.ceac538e.js";
import "./use-quasar.857a0afc.js";
import "./debug.b9d7424b.js";
import "./help.5ba6f726.js";
import "./vue-i18n.runtime.esm-bundler.011fecc2.js";
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
