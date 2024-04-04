import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.cd25fff4.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.4d9aeb36.js";
import { Q as QRouteTab } from "./QRouteTab.c96d568f.js";
import { Q as QTabs } from "./QTabs.7b80fef1.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.91f00ae7.js";
import "./QResizeObserver.70e7ccf1.js";
import "./rtl.b51694b1.js";
import "./QSelect.7f9db2ee.js";
import "./QItemSection.5bb587ab.js";
import "./QItemLabel.0674434e.js";
import "./QMenu.ce7ca789.js";
import "./selection.4eae132e.js";
import "./format.3e32b8d9.js";
import "./QSpace.d66aafd2.js";
import "./QTd.be048e83.js";
import "./QTable.64482e98.js";
import "./QList.3877f15f.js";
import "./QMarkupTable.3184e7dd.js";
import "./QLinearProgress.65be9189.js";
import "./use-fullscreen.779f7c41.js";
import "./open-url.a261dc51.js";
import "./axios.6a31f35c.js";
import "./StatusTag.4e28a309.js";
import "./QBadge.3116bab9.js";
import "./UserAvatar.1b570919.js";
import "./use-ratio.dad22166.js";
import "./QDate.c7684adf.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.e922b1e0.js";
import "./QPopupProxy.0521fdd4.js";
import "./use-quasar.80ca789b.js";
import "./debug.b9d7424b.js";
import "./help.668f771e.js";
import "./vue-i18n.runtime.esm-bundler.927f1f0c.js";
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
