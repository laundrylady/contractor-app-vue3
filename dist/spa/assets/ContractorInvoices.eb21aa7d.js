import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.02752fdf.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.8e6bd903.js";
import { Q as QRouteTab } from "./QRouteTab.5ce2aeca.js";
import { Q as QTabs } from "./QTabs.1f4603ee.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.456317fc.js";
import "./QResizeObserver.0434ae9a.js";
import "./rtl.b51694b1.js";
import "./QSelect.6c30b80a.js";
import "./QItemSection.575c0d24.js";
import "./QItemLabel.984ed152.js";
import "./QMenu.fdd763cf.js";
import "./selection.e02dd1ff.js";
import "./format.3e32b8d9.js";
import "./QSpace.d49d127e.js";
import "./QTd.e893e867.js";
import "./QTable.ef4014e6.js";
import "./QList.00b0b4f6.js";
import "./QMarkupTable.684971af.js";
import "./QLinearProgress.081698fc.js";
import "./use-fullscreen.029473d0.js";
import "./open-url.1fec6a5f.js";
import "./axios.00cbe647.js";
import "./StatusTag.25c97b5c.js";
import "./QBadge.dbfd5704.js";
import "./UserAvatar.02a440ce.js";
import "./use-ratio.5ceebd7f.js";
import "./QDate.d70247cd.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.08e6270c.js";
import "./QPopupProxy.587b65cf.js";
import "./use-quasar.0c9e547b.js";
import "./debug.b9d7424b.js";
import "./help.b70e499f.js";
import "./vue-i18n.runtime.esm-bundler.c1db4eaa.js";
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
