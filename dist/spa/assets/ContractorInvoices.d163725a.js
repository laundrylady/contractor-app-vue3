import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.ee12a592.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.f9ebedc2.js";
import { Q as QRouteTab } from "./QRouteTab.1a6254e4.js";
import { Q as QTabs } from "./QTabs.07559d68.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.df00d900.js";
import "./QResizeObserver.884af845.js";
import "./rtl.b51694b1.js";
import "./QSelect.fa2299bd.js";
import "./format.d4b40f43.js";
import "./QItemLabel.3e29a216.js";
import "./selection.d631ed63.js";
import "./QSpace.6af64d8e.js";
import "./QTd.e167986d.js";
import "./QTable.61791e9e.js";
import "./QList.1f66b57d.js";
import "./QMarkupTable.f44e541f.js";
import "./QLinearProgress.31ce63c8.js";
import "./use-fullscreen.f32f43cf.js";
import "./open-url.a1797f3b.js";
import "./axios.107ae729.js";
import "./StatusTag.a9bfedb1.js";
import "./QBadge.c782a940.js";
import "./UserAvatar.62d547a1.js";
import "./QImg.c4663a31.js";
import "./use-ratio.0fcce3d0.js";
import "./QDate.571f83b6.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.764c2cd2.js";
import "./QPopupProxy.e82f80eb.js";
import "./use-quasar.1bdab53d.js";
import "./debug.b9d7424b.js";
import "./help.b6aa185d.js";
import "./vue-i18n.runtime.esm-bundler.09c1bebe.js";
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
