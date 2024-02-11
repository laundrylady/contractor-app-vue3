import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.ed589837.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.281561e5.js";
import { Q as QRouteTab } from "./QRouteTab.72db242b.js";
import { Q as QTabs } from "./QTabs.68e80946.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.5b2591fa.js";
import "./QResizeObserver.a41e8fd1.js";
import "./rtl.b51694b1.js";
import "./QSelect.82a1fb86.js";
import "./QItemSection.38132acc.js";
import "./QItemLabel.d769c6e6.js";
import "./QMenu.a924692a.js";
import "./selection.6dffb89e.js";
import "./format.3e32b8d9.js";
import "./QSpace.d8e480d6.js";
import "./QTd.d1812828.js";
import "./QTable.050912a2.js";
import "./QList.47d456e7.js";
import "./QMarkupTable.dad016bf.js";
import "./QLinearProgress.588f456b.js";
import "./use-fullscreen.2af2a328.js";
import "./open-url.239ccc0a.js";
import "./axios.69534440.js";
import "./StatusTag.cb501dab.js";
import "./QBadge.2682fbd3.js";
import "./UserAvatar.2301cc1b.js";
import "./use-ratio.28e5c57f.js";
import "./QDate.099bc99e.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.73ee6687.js";
import "./QPopupProxy.fd88c162.js";
import "./use-quasar.5caddef9.js";
import "./debug.b9d7424b.js";
import "./help.06dc735d.js";
import "./vue-i18n.runtime.esm-bundler.fa3d19b1.js";
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
