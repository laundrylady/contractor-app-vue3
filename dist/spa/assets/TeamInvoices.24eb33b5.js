import { _ as _sfc_main$1 } from "./InvoiceManagement.650ff402.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.22c247c5.js";
import "./QSelect.fcf51174.js";
import "./selection.81f39ecc.js";
import "./QItemLabel.51d7ff89.js";
import "./QMenu.6154f6d6.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.9c2a9dc4.js";
import "./QTd.b1de6d7e.js";
import "./QTable.e9fbc621.js";
import "./QList.790f249c.js";
import "./QMarkupTable.5f34ca22.js";
import "./QLinearProgress.4e62bea7.js";
import "./use-fullscreen.73df10f3.js";
import "./open-url.6f20e603.js";
import "./axios.5879e589.js";
import "./StatusTag.3fb1aa97.js";
import "./QBadge.26a2a594.js";
import "./UserAvatar.348d45ad.js";
import "./use-ratio.6ef62b84.js";
import "./QDate.80c6a129.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.665605d1.js";
import "./QPopupProxy.11f5716c.js";
import "./use-quasar.671d6550.js";
import "./debug.b9d7424b.js";
import "./help.85d7bea2.js";
import "./vue-i18n.runtime.esm-bundler.0dfeda65.js";
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
