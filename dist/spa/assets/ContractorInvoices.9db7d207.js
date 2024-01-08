import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.afc091ab.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.94b39a40.js";
import { Q as QRouteTab } from "./QRouteTab.a569fc08.js";
import { Q as QTabs } from "./QTabs.bdd4a243.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.41c8040e.js";
import "./QResizeObserver.081f1f65.js";
import "./rtl.b51694b1.js";
import "./QSelect.1e75ac0e.js";
import "./QItemSection.ea085799.js";
import "./QItemLabel.ba006d03.js";
import "./QMenu.a4d62648.js";
import "./selection.5498db29.js";
import "./format.3e32b8d9.js";
import "./QSpace.eac76a4d.js";
import "./QTd.29f61f26.js";
import "./QTable.ffc47d43.js";
import "./QList.7a1c341d.js";
import "./QMarkupTable.668b7e3d.js";
import "./QLinearProgress.876f79ae.js";
import "./use-fullscreen.c73ad479.js";
import "./open-url.f54ca96b.js";
import "./axios.14a6eea7.js";
import "./StatusTag.5fd1068d.js";
import "./QBadge.ff3c1ab7.js";
import "./UserAvatar.453756b3.js";
import "./use-ratio.f0888c5f.js";
import "./QDate.38641e22.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.6f30bcae.js";
import "./QPopupProxy.9bbcb59d.js";
import "./use-quasar.ca570dc8.js";
import "./debug.b9d7424b.js";
import "./help.17be1bb5.js";
import "./vue-i18n.runtime.esm-bundler.00a5fcdd.js";
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
