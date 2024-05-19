import { _ as _sfc_main$1 } from "./InvoiceManagement.d684f2c3.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.30054b44.js";
import "./QSelect.4e8099fb.js";
import "./QItemSection.5237c7b8.js";
import "./QItemLabel.38612fc2.js";
import "./QMenu.61881f59.js";
import "./selection.1bd59589.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.aaa83f84.js";
import "./QTd.ccd7f461.js";
import "./QTable.afe5ad12.js";
import "./QList.4049eab8.js";
import "./QMarkupTable.00f056b1.js";
import "./QLinearProgress.5bbc301d.js";
import "./use-fullscreen.89c2ba9f.js";
import "./open-url.6a3b3b93.js";
import "./axios.0c10ef76.js";
import "./StatusTag.0d01a782.js";
import "./QBadge.dc366536.js";
import "./UserAvatar.7c15fcec.js";
import "./use-ratio.1e07a78a.js";
import "./QDate.ba10843c.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.ff9a0f87.js";
import "./QPopupProxy.fd9a3742.js";
import "./use-quasar.b63399bd.js";
import "./debug.b9d7424b.js";
import "./help.9760c9de.js";
import "./vue-i18n.runtime.esm-bundler.a0d7dcab.js";
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
