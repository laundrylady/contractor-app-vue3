import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.1d5fa541.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.9d5c5d8a.js";
import { Q as QRouteTab } from "./QRouteTab.a499833f.js";
import { Q as QTabs } from "./QTabs.8567377e.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.f708ed40.js";
import "./QResizeObserver.7c68aa16.js";
import "./rtl.b51694b1.js";
import "./QSelect.81244991.js";
import "./format.5ed25bdf.js";
import "./QItemLabel.69f8a575.js";
import "./selection.b5cfb32d.js";
import "./QSpace.8ee24c7d.js";
import "./QTd.8a374e79.js";
import "./QTable.a3bd77b6.js";
import "./QList.3ac703b6.js";
import "./QMarkupTable.efc731bb.js";
import "./QLinearProgress.b60b481f.js";
import "./use-fullscreen.8a09d8a8.js";
import "./open-url.16812c6d.js";
import "./axios.7b7a7671.js";
import "./StatusTag.960d4ce5.js";
import "./QBadge.088da7c5.js";
import "./UserAvatar.6a068dab.js";
import "./QImg.4c076bd5.js";
import "./use-ratio.4c8745fd.js";
import "./QDate.4879e41e.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.a016ada5.js";
import "./QPopupProxy.9f186051.js";
import "./use-quasar.50175128.js";
import "./debug.b9d7424b.js";
import "./help.ebebc6ca.js";
import "./vue-i18n.runtime.esm-bundler.c9782f2f.js";
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
