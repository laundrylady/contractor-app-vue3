import { _ as _sfc_main$1 } from "./InvoiceManagement.1c955142.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.bffa8c3c.js";
import "./QSelect.bbd3cae6.js";
import "./selection.30294983.js";
import "./QItemLabel.afd2234f.js";
import "./QMenu.0f25bc7d.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.6279c2e1.js";
import "./QTd.2d3956cb.js";
import "./QTable.4234d9b0.js";
import "./QList.9280b7fb.js";
import "./QMarkupTable.5b2cb7a8.js";
import "./QLinearProgress.cc2c4a27.js";
import "./use-fullscreen.7191c0c0.js";
import "./open-url.3d21148c.js";
import "./axios.f27ccc14.js";
import "./StatusTag.43e2ea9f.js";
import "./QBadge.0c13b2e9.js";
import "./UserAvatar.e41af71c.js";
import "./use-ratio.9f862873.js";
import "./QDate.308277c6.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.58627e28.js";
import "./QPopupProxy.19a3eb35.js";
import "./use-quasar.6c806c42.js";
import "./debug.b9d7424b.js";
import "./help.237e61c3.js";
import "./vue-i18n.runtime.esm-bundler.f3d928b3.js";
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
