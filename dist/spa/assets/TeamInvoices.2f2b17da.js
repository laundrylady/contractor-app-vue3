import { _ as _sfc_main$1 } from "./InvoiceManagement.88dc8358.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f2f120a5.js";
import "./QSelect.63a09874.js";
import "./format.f6872143.js";
import "./QItemLabel.3aef1a02.js";
import "./selection.ee8e1f36.js";
import "./rtl.b51694b1.js";
import "./QSpace.899455e8.js";
import "./QTd.b92312ed.js";
import "./QTable.8b86aa74.js";
import "./QList.6336f6ec.js";
import "./QMarkupTable.49685c81.js";
import "./QLinearProgress.69b713bd.js";
import "./use-fullscreen.5affefb7.js";
import "./open-url.222db89d.js";
import "./axios.30336af0.js";
import "./StatusTag.d2769380.js";
import "./QBadge.7706a2f3.js";
import "./UserAvatar.f3559d86.js";
import "./QImg.5bd18398.js";
import "./use-ratio.f3c96b95.js";
import "./QDate.876ca943.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.e2b124bc.js";
import "./QPopupProxy.233757f6.js";
import "./use-quasar.078bd751.js";
import "./debug.b9d7424b.js";
import "./help.78750dfe.js";
import "./vue-i18n.runtime.esm-bundler.07627fd8.js";
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
