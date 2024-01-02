import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.278ed024.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.68c9493b.js";
import { Q as QRouteTab } from "./QRouteTab.9812e734.js";
import { Q as QTabs } from "./QTabs.593ad6da.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.06d08bf1.js";
import "./QResizeObserver.b738eca9.js";
import "./rtl.b51694b1.js";
import "./QSelect.762d0ed4.js";
import "./format.bf501cd6.js";
import "./QItemLabel.f29b5802.js";
import "./selection.95f565e9.js";
import "./QSpace.a7423a0f.js";
import "./QTd.44e80cea.js";
import "./QTable.5800a56b.js";
import "./QList.14c9f71a.js";
import "./QMarkupTable.4166edf9.js";
import "./QLinearProgress.d15546c9.js";
import "./use-fullscreen.801a2d79.js";
import "./open-url.537536f3.js";
import "./axios.a0bcf26d.js";
import "./StatusTag.fe76b3b9.js";
import "./QBadge.0b7d2c4c.js";
import "./UserAvatar.7865229c.js";
import "./QImg.d3d62751.js";
import "./use-ratio.cefb16c7.js";
import "./QDate.0b067860.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.0cb07281.js";
import "./QPopupProxy.9267e3c3.js";
import "./use-quasar.de60bf70.js";
import "./debug.b9d7424b.js";
import "./help.0385a21b.js";
import "./vue-i18n.runtime.esm-bundler.98435eb6.js";
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
