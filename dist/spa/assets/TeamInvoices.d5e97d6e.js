import { _ as _sfc_main$1 } from "./InvoiceManagement.92f7fefd.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9b8e3a41.js";
import "./QSelect.f02499d2.js";
import "./selection.1e8dc3ac.js";
import "./QItemLabel.06bc1152.js";
import "./QMenu.2f87fb0a.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.c5fd7305.js";
import "./QTd.480b39f6.js";
import "./QTable.6dd9b676.js";
import "./QList.d693d19d.js";
import "./QMarkupTable.fdb584a0.js";
import "./QLinearProgress.555c5d4d.js";
import "./use-fullscreen.1030d459.js";
import "./open-url.0d83f23d.js";
import "./axios.24410139.js";
import "./StatusTag.a7fc5db0.js";
import "./QBadge.d3068998.js";
import "./UserAvatar.8b9ec025.js";
import "./use-ratio.04e71ee8.js";
import "./QDate.f074af53.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.4af4f8bb.js";
import "./QPopupProxy.556fb986.js";
import "./use-quasar.cf0b3beb.js";
import "./debug.b9d7424b.js";
import "./help.74fea236.js";
import "./vue-i18n.runtime.esm-bundler.6202ea28.js";
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
