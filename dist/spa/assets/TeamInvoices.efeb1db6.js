import { _ as _sfc_main$1 } from "./InvoiceManagement.cb41483b.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f4154b53.js";
import "./QSelect.a5ed117f.js";
import "./selection.f8026f5e.js";
import "./QItemLabel.4f1c6239.js";
import "./QMenu.48688247.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.59266848.js";
import "./QTd.2bbaebab.js";
import "./QTable.7368cfb0.js";
import "./QList.2c63e15c.js";
import "./QMarkupTable.89603fb1.js";
import "./QLinearProgress.17a0781c.js";
import "./use-fullscreen.4ce95169.js";
import "./open-url.c1a91eca.js";
import "./axios.8226f3dd.js";
import "./StatusTag.60b3038f.js";
import "./QBadge.b1abf82a.js";
import "./UserAvatar.bf26ff0c.js";
import "./use-ratio.0255a8bc.js";
import "./QDate.144d6785.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.19582121.js";
import "./QPopupProxy.17d33b92.js";
import "./use-quasar.ab78ab05.js";
import "./debug.b9d7424b.js";
import "./help.64b1e895.js";
import "./vue-i18n.runtime.esm-bundler.08c4fecc.js";
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
