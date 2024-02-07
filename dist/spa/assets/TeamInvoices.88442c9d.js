import { _ as _sfc_main$1 } from "./InvoiceManagement.2f45a72f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.d0f04a73.js";
import "./QSelect.5e8a10a7.js";
import "./QItemSection.0013a550.js";
import "./QItemLabel.f6572a99.js";
import "./QMenu.16247508.js";
import "./selection.c78f3754.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.0b4c9d9e.js";
import "./QTd.1055e2f1.js";
import "./QTable.02c69606.js";
import "./QList.1fec112f.js";
import "./QMarkupTable.9edbe906.js";
import "./QLinearProgress.525cf19d.js";
import "./use-fullscreen.260513ae.js";
import "./open-url.e25300cc.js";
import "./axios.ce036634.js";
import "./StatusTag.341a3ac7.js";
import "./QBadge.294b7046.js";
import "./UserAvatar.952ea7fe.js";
import "./use-ratio.a16da87f.js";
import "./QDate.d916f28f.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.c34b2706.js";
import "./QPopupProxy.12f24536.js";
import "./use-quasar.c3e231b4.js";
import "./debug.b9d7424b.js";
import "./help.c3afdf0b.js";
import "./vue-i18n.runtime.esm-bundler.6824d5d0.js";
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
