import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.ec82fb92.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.6d7491bc.js";
import { Q as QRouteTab } from "./QRouteTab.30cc87a3.js";
import { Q as QTabs } from "./QTabs.3dab5080.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.4c0b1024.js";
import "./QResizeObserver.02e5e367.js";
import "./rtl.b51694b1.js";
import "./QSelect.e1a07e28.js";
import "./QItemSection.c8d52540.js";
import "./QItemLabel.51758fb1.js";
import "./QMenu.7e196ef1.js";
import "./selection.559d132e.js";
import "./format.3e32b8d9.js";
import "./QSpace.d04695a7.js";
import "./QTd.a288f68d.js";
import "./QTable.1052ce3a.js";
import "./QList.3afe16e8.js";
import "./QMarkupTable.6a8b8a7b.js";
import "./QLinearProgress.0304ba2d.js";
import "./use-fullscreen.df83ed55.js";
import "./open-url.42491aac.js";
import "./axios.866358de.js";
import "./StatusTag.dfd26109.js";
import "./QBadge.975cf883.js";
import "./UserAvatar.f0caa563.js";
import "./use-ratio.ce91b1b0.js";
import "./QDate.c2dacd10.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.85a0660d.js";
import "./QPopupProxy.9d3f15cd.js";
import "./use-quasar.2530ae00.js";
import "./debug.b9d7424b.js";
import "./help.78b0a1da.js";
import "./vue-i18n.runtime.esm-bundler.108136a4.js";
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
