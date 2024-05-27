import { _ as _sfc_main$1 } from "./InvoiceManagement.bce6dbfa.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.26ecc84c.js";
import "./QSelect.2948296f.js";
import "./QItemSection.d61f97d4.js";
import "./QItemLabel.869e1563.js";
import "./QMenu.96ee2f21.js";
import "./selection.2b49221b.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.933cabad.js";
import "./QTd.ae0b511a.js";
import "./QTable.18953739.js";
import "./QList.ee9af6a8.js";
import "./QMarkupTable.d0bda802.js";
import "./QLinearProgress.4ef1995e.js";
import "./use-fullscreen.727b753d.js";
import "./open-url.0c00574a.js";
import "./axios.942456e6.js";
import "./StatusTag.55c861c6.js";
import "./QBadge.3c20230f.js";
import "./UserAvatar.ad1c4106.js";
import "./use-ratio.a305fccc.js";
import "./QDate.ca78e539.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.a14ea6af.js";
import "./QPopupProxy.f6c3d28d.js";
import "./use-quasar.52795b41.js";
import "./debug.b9d7424b.js";
import "./help.c16653b0.js";
import "./vue-i18n.runtime.esm-bundler.665f9d02.js";
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
