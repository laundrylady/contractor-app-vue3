import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.63580deb.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.144039c6.js";
import { Q as QRouteTab } from "./QRouteTab.23072ae0.js";
import { Q as QTabs } from "./QTabs.c917ce24.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.ca5c6c38.js";
import "./QResizeObserver.41d2271c.js";
import "./rtl.276c3f1b.js";
import "./QSelect.9037adf0.js";
import "./QItemSection.9958946a.js";
import "./QItemLabel.7691b773.js";
import "./QMenu.6dea5d13.js";
import "./selection.0917889d.js";
import "./format.de7e9769.js";
import "./QSpace.8d70c7b6.js";
import "./QTd.d1dd3e51.js";
import "./QTable.b698277f.js";
import "./QList.2c3b49c0.js";
import "./QMarkupTable.f7139260.js";
import "./QLinearProgress.61f12a2f.js";
import "./use-fullscreen.feaaba10.js";
import "./open-url.04c9e043.js";
import "./axios.92e3014b.js";
import "./StatusTag.5533abed.js";
import "./QBadge.44a2b3ed.js";
import "./UserAvatar.cf63b2ba.js";
import "./use-ratio.a0c83e4a.js";
import "./QDate.bf33e3c2.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.5d6a98d7.js";
import "./QPopupProxy.8e6d738c.js";
import "./use-quasar.3a1e7542.js";
import "./debug.b9d7424b.js";
import "./help.0c132d5f.js";
import "./vue-i18n.runtime.esm-bundler.37fd6df1.js";
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
