import { _ as _sfc_main$1 } from "./InvoiceManagement.03398e7d.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.59e718a9.js";
import "./QSelect.96d2136a.js";
import "./QItemSection.957c96b8.js";
import "./QItemLabel.c4941b88.js";
import "./QMenu.d95e8205.js";
import "./selection.f3848d99.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.34f151f2.js";
import "./QTd.ec81b31f.js";
import "./QTable.f08d8b6f.js";
import "./QList.7a4c3f18.js";
import "./QMarkupTable.9e558d0c.js";
import "./QLinearProgress.4d3fd829.js";
import "./use-fullscreen.58bbce6d.js";
import "./open-url.2f3c04ef.js";
import "./axios.d55d466d.js";
import "./StatusTag.ee8fe6c2.js";
import "./QBadge.462479b6.js";
import "./UserAvatar.5ebded2e.js";
import "./use-ratio.a1f66614.js";
import "./QDate.5f498fe1.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.aac63ceb.js";
import "./QPopupProxy.07a39e6f.js";
import "./use-quasar.125d8b38.js";
import "./debug.b9d7424b.js";
import "./help.1741f6c1.js";
import "./vue-i18n.runtime.esm-bundler.956cfbf2.js";
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
