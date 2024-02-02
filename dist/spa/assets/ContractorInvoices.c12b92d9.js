import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.84f10f3f.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.e3dc489f.js";
import { Q as QRouteTab } from "./QRouteTab.294f2829.js";
import { Q as QTabs } from "./QTabs.0a289df7.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.c1442851.js";
import "./QResizeObserver.9363291d.js";
import "./rtl.b51694b1.js";
import "./QSelect.429e8d47.js";
import "./QItemSection.bb85dabb.js";
import "./QItemLabel.44c04347.js";
import "./QMenu.bd1c4216.js";
import "./selection.1ac97dc8.js";
import "./format.3e32b8d9.js";
import "./QSpace.0cf80666.js";
import "./QTd.82a057fe.js";
import "./QTable.97a37a05.js";
import "./QList.6cde1eb1.js";
import "./QMarkupTable.ec0874b5.js";
import "./QLinearProgress.d97fea42.js";
import "./use-fullscreen.e17cec5e.js";
import "./open-url.2bb66722.js";
import "./axios.0eb76a38.js";
import "./StatusTag.ae91c8de.js";
import "./QBadge.536afb88.js";
import "./UserAvatar.33902adc.js";
import "./use-ratio.0762bda9.js";
import "./QDate.02cfacfd.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.4cd372bf.js";
import "./QPopupProxy.454f7c4e.js";
import "./use-quasar.b00ec90c.js";
import "./debug.b9d7424b.js";
import "./help.6ab24264.js";
import "./vue-i18n.runtime.esm-bundler.425df82b.js";
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
