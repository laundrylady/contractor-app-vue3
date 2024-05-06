import { _ as _sfc_main$1 } from "./InvoiceManagement.0aca6680.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.bd785861.js";
import "./QSelect.be4955f8.js";
import "./QItemSection.f1b59f98.js";
import "./QItemLabel.5834a586.js";
import "./QMenu.8d439091.js";
import "./selection.f4440aa2.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.45cba835.js";
import "./QTd.a2833ca1.js";
import "./QTable.9f162f30.js";
import "./QList.43d4587d.js";
import "./QMarkupTable.476a908b.js";
import "./QLinearProgress.5fa37f8a.js";
import "./use-fullscreen.5f871a48.js";
import "./open-url.7344b42c.js";
import "./axios.01a73637.js";
import "./StatusTag.ad2edbb7.js";
import "./QBadge.3b26cd4a.js";
import "./UserAvatar.ab12c859.js";
import "./use-ratio.7c365362.js";
import "./QDate.90e21c8d.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.e5717f65.js";
import "./QPopupProxy.49a9db7b.js";
import "./use-quasar.01929119.js";
import "./debug.b9d7424b.js";
import "./help.2421d6af.js";
import "./vue-i18n.runtime.esm-bundler.7b657ad2.js";
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
