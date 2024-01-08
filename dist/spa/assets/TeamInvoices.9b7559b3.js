import { _ as _sfc_main$1 } from "./InvoiceManagement.1bc74e8b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.224e20e0.js";
import "./QSelect.ee2d0560.js";
import "./QItemSection.0dd1e131.js";
import "./QItemLabel.a0618c3e.js";
import "./QMenu.f2bed1ae.js";
import "./selection.865df55e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.26b3ba8e.js";
import "./QTd.09ddb31c.js";
import "./QTable.e6b30b30.js";
import "./QList.358d155c.js";
import "./QMarkupTable.f1642325.js";
import "./QLinearProgress.468b0647.js";
import "./use-fullscreen.851cb0a8.js";
import "./open-url.4a5dcbc8.js";
import "./axios.3cd41a70.js";
import "./StatusTag.8e9ed719.js";
import "./QBadge.beeaa554.js";
import "./UserAvatar.295ab91e.js";
import "./use-ratio.b91e5638.js";
import "./QDate.5deefd37.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.fb9e7ffc.js";
import "./QPopupProxy.e13e8117.js";
import "./use-quasar.8972ad33.js";
import "./debug.b9d7424b.js";
import "./help.b31953bc.js";
import "./vue-i18n.runtime.esm-bundler.7267b62a.js";
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
