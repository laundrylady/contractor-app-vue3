import { _ as _sfc_main$1 } from "./InvoiceManagement.482a57ab.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.08ad31cf.js";
import "./QSelect.d75a0a09.js";
import "./QItemSection.cdb1f7d8.js";
import "./QItemLabel.1fa66a8b.js";
import "./QMenu.59d952ae.js";
import "./selection.17df0d0e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.d18a0236.js";
import "./QTd.a6c3c6e5.js";
import "./QTable.fcc7e0d7.js";
import "./QList.44b519f3.js";
import "./QMarkupTable.ede775f0.js";
import "./QLinearProgress.51c3a5f4.js";
import "./use-fullscreen.ff480799.js";
import "./open-url.d7118752.js";
import "./axios.d680332f.js";
import "./StatusTag.5f3ca170.js";
import "./QBadge.88f56628.js";
import "./UserAvatar.7806e003.js";
import "./use-ratio.eebc5358.js";
import "./QDate.d029c9e3.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.37b027b9.js";
import "./QPopupProxy.2356bdbb.js";
import "./use-quasar.ef34676d.js";
import "./debug.b9d7424b.js";
import "./help.02e38e73.js";
import "./vue-i18n.runtime.esm-bundler.9d9db9ac.js";
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
