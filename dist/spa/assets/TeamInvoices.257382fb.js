import { _ as _sfc_main$1 } from "./InvoiceManagement.f7f76821.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.71993d48.js";
import "./QSelect.b8d67a6f.js";
import "./QItemSection.9378edd4.js";
import "./QItemLabel.4bbaac4c.js";
import "./QMenu.5c4bfec5.js";
import "./selection.648c4311.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.e6c674c5.js";
import "./QTd.86305763.js";
import "./QTable.ebbebfb8.js";
import "./QList.12464097.js";
import "./QMarkupTable.30cbefb6.js";
import "./QLinearProgress.8291e299.js";
import "./use-fullscreen.21cf4df0.js";
import "./open-url.3c9c52ba.js";
import "./axios.d2172b6e.js";
import "./StatusTag.4c49fa64.js";
import "./QBadge.d3933057.js";
import "./UserAvatar.d6db6450.js";
import "./use-ratio.b7e2a3da.js";
import "./QDate.f6da44e7.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.eedb8bb4.js";
import "./QPopupProxy.a394c825.js";
import "./use-quasar.31ac6fc8.js";
import "./debug.b9d7424b.js";
import "./help.c9950071.js";
import "./vue-i18n.runtime.esm-bundler.93d39d82.js";
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
