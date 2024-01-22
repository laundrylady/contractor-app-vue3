import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.42122499.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.ef95a6dc.js";
import { Q as QRouteTab } from "./QRouteTab.e1cb1c90.js";
import { Q as QTabs } from "./QTabs.49793ff3.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.68c5cdd8.js";
import "./QResizeObserver.e4437c8a.js";
import "./rtl.b51694b1.js";
import "./QSelect.57d0fb4b.js";
import "./QItemSection.e283e48f.js";
import "./QItemLabel.cd1b1987.js";
import "./QMenu.3dd4b9ec.js";
import "./selection.d274c8a1.js";
import "./format.3e32b8d9.js";
import "./QSpace.32c1692b.js";
import "./QTd.fe1374ca.js";
import "./QTable.b0f6e048.js";
import "./QList.32fbfd22.js";
import "./QMarkupTable.3501db00.js";
import "./QLinearProgress.14d28cbe.js";
import "./use-fullscreen.84660280.js";
import "./open-url.9fb45710.js";
import "./axios.610c3e32.js";
import "./StatusTag.3fb184c2.js";
import "./QBadge.6db35c7e.js";
import "./UserAvatar.966b5b73.js";
import "./use-ratio.d0f65743.js";
import "./QDate.12c5a4cd.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.3b125499.js";
import "./QPopupProxy.5ff965f3.js";
import "./use-quasar.e494dcca.js";
import "./debug.b9d7424b.js";
import "./help.debef161.js";
import "./vue-i18n.runtime.esm-bundler.6ac08cf9.js";
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
