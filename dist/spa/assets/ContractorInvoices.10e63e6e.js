import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.cbceafe4.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.b436637c.js";
import { Q as QRouteTab } from "./QRouteTab.151e3d5c.js";
import { Q as QTabs } from "./QTabs.308b22f4.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.777fe032.js";
import "./QResizeObserver.591e9aff.js";
import "./rtl.b51694b1.js";
import "./QSelect.e5dc6c2c.js";
import "./format.2132c131.js";
import "./QItemLabel.3781752a.js";
import "./selection.f04d2dc8.js";
import "./QSpace.026ed126.js";
import "./QTd.e540dd1a.js";
import "./QTable.4aeb8dbc.js";
import "./QList.0e75c36e.js";
import "./QMarkupTable.2402e974.js";
import "./QLinearProgress.49727588.js";
import "./use-fullscreen.f99ad7f1.js";
import "./open-url.ed35081a.js";
import "./axios.5b47d216.js";
import "./StatusTag.1b99ff07.js";
import "./QBadge.cb4bc132.js";
import "./UserAvatar.a5414028.js";
import "./QImg.5759dd3e.js";
import "./use-ratio.46149913.js";
import "./QDate.24ee2e4a.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.ba6b337f.js";
import "./QPopupProxy.d4ad706d.js";
import "./use-quasar.05910a29.js";
import "./debug.b9d7424b.js";
import "./help.7461b2ea.js";
import "./vue-i18n.runtime.esm-bundler.d1fe40d6.js";
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
