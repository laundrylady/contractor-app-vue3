import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.370d568b.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.a9b3762c.js";
import { Q as QRouteTab } from "./QRouteTab.3e2bcc32.js";
import { Q as QTabs } from "./QTabs.c5955fac.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.25e59c49.js";
import "./QResizeObserver.37d15186.js";
import "./rtl.276c3f1b.js";
import "./QSelect.4b2b6f1c.js";
import "./selection.86096579.js";
import "./QItemLabel.f007e025.js";
import "./QMenu.f484e851.js";
import "./format.de7e9769.js";
import "./QSpace.044271bc.js";
import "./QTd.ce8cefd1.js";
import "./QTable.5dba33db.js";
import "./QList.5eb6c5a3.js";
import "./QMarkupTable.b25e35ab.js";
import "./QLinearProgress.28fd3ac1.js";
import "./use-fullscreen.f983417c.js";
import "./open-url.9e038ef3.js";
import "./axios.d95458b2.js";
import "./StatusTag.6cfa3aba.js";
import "./QBadge.371276a3.js";
import "./UserAvatar.b6f95d46.js";
import "./use-ratio.f35899fa.js";
import "./QDate.7625de6c.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.87a0c774.js";
import "./QPopupProxy.9473f9cb.js";
import "./use-quasar.66ec93ce.js";
import "./debug.b9d7424b.js";
import "./help.3de5c98f.js";
import "./vue-i18n.runtime.esm-bundler.54b38b06.js";
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
