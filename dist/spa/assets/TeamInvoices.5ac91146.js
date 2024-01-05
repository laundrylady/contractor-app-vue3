import { _ as _sfc_main$1 } from "./InvoiceManagement.bf683088.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9d7abd75.js";
import "./QSelect.d6b13d8d.js";
import "./format.1b4e7882.js";
import "./QItemLabel.22848172.js";
import "./selection.37fa39f1.js";
import "./rtl.b51694b1.js";
import "./QSpace.1ce7dc29.js";
import "./QTd.bfa9a7a6.js";
import "./QTable.ef2cbe51.js";
import "./QList.361490e9.js";
import "./QMarkupTable.a81c5495.js";
import "./QLinearProgress.b38e2c0d.js";
import "./use-fullscreen.e06f7d91.js";
import "./open-url.98f1e9f0.js";
import "./axios.865ad67f.js";
import "./StatusTag.67a0c258.js";
import "./QBadge.03ede4fa.js";
import "./UserAvatar.5c42e6a2.js";
import "./QImg.c0da1e4c.js";
import "./use-ratio.6737656f.js";
import "./QDate.64b38350.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.2b1a751f.js";
import "./QPopupProxy.ae96cf3e.js";
import "./use-quasar.95cbbfe4.js";
import "./debug.b9d7424b.js";
import "./help.e32cbc16.js";
import "./vue-i18n.runtime.esm-bundler.ace925b5.js";
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
