import { _ as _sfc_main$1 } from "./InvoiceManagement.1f158551.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.4d9fc4f8.js";
import "./QSelect.34425dc9.js";
import "./QItemSection.f65edf75.js";
import "./QItemLabel.ce2e3392.js";
import "./QMenu.77f0a42a.js";
import "./selection.d6e3c6e6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.215754d9.js";
import "./QTd.b094114d.js";
import "./QTable.f21b9898.js";
import "./QList.64e212d8.js";
import "./QMarkupTable.e793bb5a.js";
import "./QLinearProgress.a1631aa3.js";
import "./use-fullscreen.78b26e6e.js";
import "./open-url.15580405.js";
import "./axios.ed3e2e26.js";
import "./StatusTag.64a7144f.js";
import "./QBadge.65e0e2c4.js";
import "./UserAvatar.afc5dc10.js";
import "./use-ratio.2ca39925.js";
import "./QDate.d0152c77.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.7505125c.js";
import "./QPopupProxy.b6611c17.js";
import "./use-quasar.17b1e20a.js";
import "./debug.b9d7424b.js";
import "./help.a6bf7bbe.js";
import "./vue-i18n.runtime.esm-bundler.4a49f0a1.js";
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
