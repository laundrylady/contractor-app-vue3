import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.20697ea6.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.1488bc18.js";
import { Q as QRouteTab } from "./QRouteTab.aa882102.js";
import { Q as QTabs } from "./QTabs.3062318e.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.8c0d090c.js";
import "./QResizeObserver.5ae2d1be.js";
import "./rtl.b51694b1.js";
import "./QSelect.6f5386a0.js";
import "./QItemSection.dd5de9a0.js";
import "./QItemLabel.7319a52a.js";
import "./QMenu.a77266c1.js";
import "./selection.fe7f8781.js";
import "./format.3e32b8d9.js";
import "./QSpace.d6489a20.js";
import "./QTd.0541fff8.js";
import "./QTable.9743a71b.js";
import "./QList.1018c7aa.js";
import "./QMarkupTable.6010d5b6.js";
import "./QLinearProgress.86fb240a.js";
import "./use-fullscreen.6769b532.js";
import "./open-url.c92fd700.js";
import "./axios.819bf786.js";
import "./StatusTag.559cc746.js";
import "./QBadge.6f1f3a17.js";
import "./UserAvatar.faada0ed.js";
import "./use-ratio.94974f9f.js";
import "./QDate.734de68c.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.6cfd3e5b.js";
import "./QPopupProxy.bec7d758.js";
import "./use-quasar.26b4b9c6.js";
import "./debug.b9d7424b.js";
import "./help.afad5e12.js";
import "./vue-i18n.runtime.esm-bundler.a93713c0.js";
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
