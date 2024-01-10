import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.9eb88662.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.3771fcbf.js";
import { Q as QRouteTab } from "./QRouteTab.63903fa1.js";
import { Q as QTabs } from "./QTabs.c01f7bfd.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.b7a2a6db.js";
import "./QResizeObserver.dfb59a3e.js";
import "./rtl.b51694b1.js";
import "./QSelect.c74eab78.js";
import "./QItemSection.bd5d9e5f.js";
import "./QItemLabel.c607c146.js";
import "./QMenu.0779b89b.js";
import "./selection.ccc35532.js";
import "./format.3e32b8d9.js";
import "./QSpace.b3da232d.js";
import "./QTd.84acd53d.js";
import "./QTable.0acf2e6a.js";
import "./QList.7060f3df.js";
import "./QMarkupTable.56cc14cf.js";
import "./QLinearProgress.2bc59aba.js";
import "./use-fullscreen.aea3812b.js";
import "./open-url.14c3761a.js";
import "./axios.9bbea1e2.js";
import "./StatusTag.f115abe0.js";
import "./QBadge.d343910f.js";
import "./UserAvatar.e684a4a5.js";
import "./use-ratio.6ddb72a5.js";
import "./QDate.dd09d68f.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.79239a32.js";
import "./QPopupProxy.d1e4f070.js";
import "./use-quasar.668a25e3.js";
import "./debug.b9d7424b.js";
import "./help.f70a8b9a.js";
import "./vue-i18n.runtime.esm-bundler.c4469535.js";
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
