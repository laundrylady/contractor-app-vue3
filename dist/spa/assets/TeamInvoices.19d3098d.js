import { _ as _sfc_main$1 } from "./InvoiceManagement.8b88ecbb.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.ae9373f8.js";
import "./QSelect.c1681cd1.js";
import "./QItemSection.ec329744.js";
import "./QItemLabel.aa53f096.js";
import "./QMenu.79aff003.js";
import "./selection.33a56d83.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.dbda70ac.js";
import "./QTd.20861bbb.js";
import "./QTable.fa28e3fb.js";
import "./QList.ec9fcd66.js";
import "./QMarkupTable.b851d32f.js";
import "./QLinearProgress.9ccf62d3.js";
import "./use-fullscreen.06347866.js";
import "./open-url.8ee761b6.js";
import "./axios.177cad41.js";
import "./StatusTag.83cc3093.js";
import "./QBadge.71c4c220.js";
import "./UserAvatar.a0c358ca.js";
import "./use-ratio.c042e78f.js";
import "./QDate.4ee6cfbc.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.33af78e1.js";
import "./QPopupProxy.1e6ad5a8.js";
import "./use-quasar.6e4ce33e.js";
import "./debug.b9d7424b.js";
import "./help.f50b0519.js";
import "./vue-i18n.runtime.esm-bundler.1bb65a5b.js";
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
