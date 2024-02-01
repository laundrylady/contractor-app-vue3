import { _ as _sfc_main$1 } from "./InvoiceManagement.adf724d6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.a4ada3b6.js";
import "./QSelect.52d57800.js";
import "./QItemSection.75e9d715.js";
import "./QItemLabel.5aa6b1fe.js";
import "./QMenu.ba3bcedb.js";
import "./selection.d7b26d85.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.93304cfc.js";
import "./QTd.ee0fa093.js";
import "./QTable.cd636744.js";
import "./QList.8e181534.js";
import "./QMarkupTable.74185576.js";
import "./QLinearProgress.00c1999f.js";
import "./use-fullscreen.050e6ebb.js";
import "./open-url.4ae8c0f8.js";
import "./axios.f7c0b118.js";
import "./StatusTag.ee7766f1.js";
import "./QBadge.d269af16.js";
import "./UserAvatar.0fff05ce.js";
import "./use-ratio.eee5f2fc.js";
import "./QDate.5fdc283f.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.85b40696.js";
import "./QPopupProxy.96878ea8.js";
import "./use-quasar.18c0220b.js";
import "./debug.b9d7424b.js";
import "./help.901f52d6.js";
import "./vue-i18n.runtime.esm-bundler.c4e1968e.js";
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
