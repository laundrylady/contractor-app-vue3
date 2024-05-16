import { _ as _sfc_main$1 } from "./InvoiceManagement.80255347.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e66b6337.js";
import "./QSelect.dbf7a13c.js";
import "./QItemSection.834a99e7.js";
import "./QItemLabel.f058a8a6.js";
import "./QMenu.b5d9bdae.js";
import "./selection.6fc9af93.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.5c4a9358.js";
import "./QTd.d7630fad.js";
import "./QTable.16458532.js";
import "./QList.a1a1fcc3.js";
import "./QMarkupTable.f494b476.js";
import "./QLinearProgress.75a1ae8b.js";
import "./use-fullscreen.eae62ac4.js";
import "./open-url.c354b542.js";
import "./axios.99b150d2.js";
import "./StatusTag.96d2c6a9.js";
import "./QBadge.4ed3dc0d.js";
import "./UserAvatar.b9534daf.js";
import "./use-ratio.ca84d065.js";
import "./QDate.9ffd5ec2.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.3fb951b9.js";
import "./QPopupProxy.081128e6.js";
import "./use-quasar.817c891b.js";
import "./debug.b9d7424b.js";
import "./help.4ea95189.js";
import "./vue-i18n.runtime.esm-bundler.3fc56e69.js";
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
