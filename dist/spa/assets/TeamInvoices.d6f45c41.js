import { _ as _sfc_main$1 } from "./InvoiceManagement.32e998c6.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.236933ce.js";
import "./QSelect.d1f2e8b7.js";
import "./QItemSection.ba323dad.js";
import "./QItemLabel.c7c3cab8.js";
import "./QMenu.aea6277a.js";
import "./selection.5951edfe.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.39b9f178.js";
import "./QTd.e144541a.js";
import "./QTable.ad89c0be.js";
import "./QList.5139d086.js";
import "./QMarkupTable.ae41a849.js";
import "./QLinearProgress.4d16ca63.js";
import "./use-fullscreen.2ba1ce0c.js";
import "./open-url.bf9a1d21.js";
import "./axios.81902657.js";
import "./StatusTag.983f5073.js";
import "./QBadge.c8262fa3.js";
import "./UserAvatar.2e4acca3.js";
import "./use-ratio.650d4195.js";
import "./QDate.d0e11bda.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.83ee7d0c.js";
import "./QPopupProxy.b72e0efd.js";
import "./use-quasar.a96ef1e4.js";
import "./debug.b9d7424b.js";
import "./help.7d5b75c7.js";
import "./vue-i18n.runtime.esm-bundler.2cc27b4a.js";
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
