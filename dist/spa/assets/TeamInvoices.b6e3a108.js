import { _ as _sfc_main$1 } from "./InvoiceManagement.286c7e85.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.0e8eff46.js";
import "./QSelect.bbed4941.js";
import "./QItemSection.2576283a.js";
import "./QItemLabel.9fe3a93e.js";
import "./QMenu.dc565f24.js";
import "./selection.3f803eae.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.e6ea37b2.js";
import "./QTd.03638c1a.js";
import "./QTable.8878ceaf.js";
import "./QList.60da52b1.js";
import "./QMarkupTable.c444eb55.js";
import "./QLinearProgress.0189d586.js";
import "./use-fullscreen.3a8a816d.js";
import "./open-url.87c3f323.js";
import "./axios.8c9aa2c6.js";
import "./StatusTag.d83d2b07.js";
import "./QBadge.cf89db98.js";
import "./UserAvatar.9430e21f.js";
import "./use-ratio.82471290.js";
import "./QDate.6dd0b1d3.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.dd356fc8.js";
import "./QPopupProxy.63d692fe.js";
import "./use-quasar.ac29de23.js";
import "./debug.b9d7424b.js";
import "./help.51652874.js";
import "./vue-i18n.runtime.esm-bundler.93662a26.js";
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
