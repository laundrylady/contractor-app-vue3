import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.9b9c09ca.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.f5839efa.js";
import { Q as QRouteTab } from "./QRouteTab.7b9e923c.js";
import { Q as QTabs } from "./QTabs.e418e226.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.02974715.js";
import "./QResizeObserver.11061b95.js";
import "./rtl.276c3f1b.js";
import "./QSelect.bb67f12f.js";
import "./QItemSection.f89ebc4f.js";
import "./QItemLabel.d6cfbd10.js";
import "./QMenu.ab871309.js";
import "./selection.0fd0fe06.js";
import "./format.de7e9769.js";
import "./QSpace.4adc24e6.js";
import "./QTd.5bf65bb3.js";
import "./QTable.accd0b34.js";
import "./QList.03eba104.js";
import "./QMarkupTable.b6f22ded.js";
import "./QLinearProgress.5f6aeb77.js";
import "./use-fullscreen.acf0662d.js";
import "./open-url.4d38ad6a.js";
import "./axios.46cd0bc0.js";
import "./StatusTag.67cea1d4.js";
import "./QBadge.586550b9.js";
import "./UserAvatar.3addc2b6.js";
import "./use-ratio.139e7d85.js";
import "./QDate.5a4fd222.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.e99931a8.js";
import "./QPopupProxy.4f7cd229.js";
import "./use-quasar.95f610a7.js";
import "./debug.b9d7424b.js";
import "./help.4b12ec44.js";
import "./vue-i18n.runtime.esm-bundler.2621af8b.js";
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
