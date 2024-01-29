import { _ as _sfc_main$1 } from "./InvoiceManagement.a01f9a00.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e7178dde.js";
import "./QSelect.7f908ff0.js";
import "./QItemSection.b38beb3e.js";
import "./QItemLabel.6e7dc56d.js";
import "./QMenu.e5677d05.js";
import "./selection.07622523.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.70a2347c.js";
import "./QTd.6fd21d77.js";
import "./QTable.4da9d8a4.js";
import "./QList.fa94ef50.js";
import "./QMarkupTable.7d7afe4a.js";
import "./QLinearProgress.9ec06853.js";
import "./use-fullscreen.5af8e47a.js";
import "./open-url.d368f1d0.js";
import "./axios.a7ba8fcf.js";
import "./StatusTag.0628d76c.js";
import "./QBadge.edaeee2e.js";
import "./UserAvatar.cc327c27.js";
import "./use-ratio.c2912bc4.js";
import "./QDate.77bb485e.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.7ed084be.js";
import "./QPopupProxy.eaa0f348.js";
import "./use-quasar.622c5628.js";
import "./debug.b9d7424b.js";
import "./help.8defe9f3.js";
import "./vue-i18n.runtime.esm-bundler.e0f550c4.js";
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
