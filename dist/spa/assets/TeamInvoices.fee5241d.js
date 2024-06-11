import { _ as _sfc_main$1 } from "./InvoiceManagement.50de47d4.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f4bfaae2.js";
import "./QSelect.0ef09b4b.js";
import "./QItemSection.cd58a5ba.js";
import "./QItemLabel.addde6e1.js";
import "./QMenu.7f21dfc8.js";
import "./selection.81644041.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.e4bbed30.js";
import "./QTd.33ac807a.js";
import "./QTable.bdb4a518.js";
import "./QList.9cb4274d.js";
import "./QMarkupTable.dcdcfd23.js";
import "./QLinearProgress.9297ab86.js";
import "./use-fullscreen.00979cff.js";
import "./open-url.02727322.js";
import "./axios.38a0c625.js";
import "./StatusTag.ec0e6d46.js";
import "./QBadge.e8d9f0cb.js";
import "./UserAvatar.084f254b.js";
import "./use-ratio.5ed63068.js";
import "./QDate.f0435ac1.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.ef7eaac2.js";
import "./QPopupProxy.c8385327.js";
import "./use-quasar.f642b8b2.js";
import "./debug.b9d7424b.js";
import "./help.387f8c36.js";
import "./vue-i18n.runtime.esm-bundler.b72101f9.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamInvoices",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, {
          team_id: __props.model.id
        }, null, 8, ["team_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
