import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, K as withCtx, z as createCommentVNode, Q as QCard, N as QIcon } from "./index.f3419799.js";
import { Q as QBreadcrumbs, a as QBreadcrumbsEl } from "./QBreadcrumbs.2bccf0b9.js";
import { Q as QRouteTab } from "./QRouteTab.2a9200fd.js";
import { Q as QTabs } from "./QTabs.bf3835cb.js";
import { _ as _sfc_main$1 } from "./InvoiceManagement.ea164fbd.js";
import "./QResizeObserver.6f6606a1.js";
import "./rtl.b51694b1.js";
import "./QSelect.947b013a.js";
import "./QItemSection.5c151b04.js";
import "./QItemLabel.3cbcac8d.js";
import "./QMenu.9700f640.js";
import "./selection.43f6f34b.js";
import "./format.3e32b8d9.js";
import "./QSpace.2162ac6c.js";
import "./QTd.c7070b03.js";
import "./QTable.b39b04b4.js";
import "./QList.40b85627.js";
import "./QMarkupTable.7f107c91.js";
import "./QLinearProgress.e7c5e662.js";
import "./use-fullscreen.8b9ac97a.js";
import "./open-url.c6f0eb26.js";
import "./axios.6ba4cb3c.js";
import "./StatusTag.24b9c3a4.js";
import "./QBadge.36de11ab.js";
import "./UserAvatar.4d6f7ae1.js";
import "./use-ratio.359460d7.js";
import "./QDate.c32e1ae0.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.ddf0347e.js";
import "./QPopupProxy.827b60f6.js";
import "./use-quasar.d6ab4cf8.js";
import "./debug.b9d7424b.js";
import "./help.b5f10652.js";
import "./vue-i18n.runtime.esm-bundler.46b33277.js";
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
