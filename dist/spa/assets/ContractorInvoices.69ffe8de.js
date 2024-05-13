import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.db72ca64.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.becea437.js";
import { Q as QRouteTab } from "./QRouteTab.4e0d7927.js";
import { Q as QTabs } from "./QTabs.87cfb83a.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.aa87f97c.js";
import "./QResizeObserver.4f4dd6b2.js";
import "./rtl.276c3f1b.js";
import "./QSelect.bc7e34bf.js";
import "./QItemSection.09d223bf.js";
import "./QItemLabel.460983fa.js";
import "./QMenu.3581048a.js";
import "./selection.e28b0495.js";
import "./format.de7e9769.js";
import "./QSpace.c7054b8a.js";
import "./QTd.7cd9d3fe.js";
import "./QTable.e7342190.js";
import "./QList.131ffe4f.js";
import "./QMarkupTable.a7078213.js";
import "./QLinearProgress.09a438a3.js";
import "./use-fullscreen.0d42d8b5.js";
import "./open-url.56b8b219.js";
import "./axios.5f476664.js";
import "./StatusTag.4c3db776.js";
import "./QBadge.ba8a5fcb.js";
import "./UserAvatar.edd92aac.js";
import "./use-ratio.59e1ac5e.js";
import "./QDate.69c7749d.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.7ed62c32.js";
import "./QPopupProxy.2151308f.js";
import "./use-quasar.0f5850a0.js";
import "./debug.b9d7424b.js";
import "./help.0879b50a.js";
import "./vue-i18n.runtime.esm-bundler.777f6245.js";
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
