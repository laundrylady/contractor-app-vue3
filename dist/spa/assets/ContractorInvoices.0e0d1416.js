import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.32bccbce.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.ad506ca0.js";
import { Q as QRouteTab } from "./QRouteTab.af419c36.js";
import { Q as QTabs } from "./QTabs.540a2b37.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.5e4d8004.js";
import "./QResizeObserver.0f08ccfa.js";
import "./rtl.b51694b1.js";
import "./QSelect.6a20dc53.js";
import "./QItemSection.437dc834.js";
import "./QItemLabel.ab56b13a.js";
import "./QMenu.b6832301.js";
import "./selection.75eb489b.js";
import "./format.3e32b8d9.js";
import "./QSpace.f8ca21b4.js";
import "./QTd.38466a2a.js";
import "./QTable.0000a99b.js";
import "./QList.0ffd9025.js";
import "./QMarkupTable.ddca4317.js";
import "./QLinearProgress.9d166cd1.js";
import "./use-fullscreen.616ad35a.js";
import "./open-url.36e5ab65.js";
import "./axios.3f62d8b6.js";
import "./StatusTag.75d68ebf.js";
import "./QBadge.d56355c2.js";
import "./UserAvatar.a8e03e48.js";
import "./use-ratio.dcc8407c.js";
import "./QDate.62388930.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.4806c610.js";
import "./QPopupProxy.87128af9.js";
import "./use-quasar.d7b13b3e.js";
import "./debug.b9d7424b.js";
import "./help.857d118f.js";
import "./vue-i18n.runtime.esm-bundler.b5addb99.js";
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
