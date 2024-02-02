import { _ as _sfc_main$1 } from "./InvoiceManagement.969b88c3.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9b8b7269.js";
import "./QSelect.2e86e4ba.js";
import "./QItemSection.53b57c9f.js";
import "./QItemLabel.544f2a72.js";
import "./QMenu.7793a0ce.js";
import "./selection.4a77bd85.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.fd46843b.js";
import "./QTd.4d6e6a15.js";
import "./QTable.4c46723a.js";
import "./QList.bf44c184.js";
import "./QMarkupTable.406897fe.js";
import "./QLinearProgress.673aedc8.js";
import "./use-fullscreen.e3125336.js";
import "./open-url.23e5442a.js";
import "./axios.c3179b68.js";
import "./StatusTag.2e6f8444.js";
import "./QBadge.ce2cba51.js";
import "./UserAvatar.d8d62d36.js";
import "./use-ratio.15bb8803.js";
import "./QDate.30612dbe.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.29e55a34.js";
import "./QPopupProxy.0c3f3894.js";
import "./use-quasar.90865cf2.js";
import "./debug.b9d7424b.js";
import "./help.d206c0e0.js";
import "./vue-i18n.runtime.esm-bundler.e0944ed1.js";
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
