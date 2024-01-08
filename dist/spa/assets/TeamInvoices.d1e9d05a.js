import { _ as _sfc_main$1 } from "./InvoiceManagement.b3fe125b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.a20363ca.js";
import "./QSelect.e90ede9e.js";
import "./QItemSection.2a4bb05f.js";
import "./QItemLabel.7a4ee620.js";
import "./QMenu.a509643f.js";
import "./selection.78cf4f0a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.35458495.js";
import "./QTd.87f3ab49.js";
import "./QTable.f5d1834a.js";
import "./QList.469e3432.js";
import "./QMarkupTable.6e0340cb.js";
import "./QLinearProgress.f8cf645c.js";
import "./use-fullscreen.105ab777.js";
import "./open-url.6a68b284.js";
import "./axios.9b3853d0.js";
import "./StatusTag.f57bf4df.js";
import "./QBadge.a3f1ff84.js";
import "./UserAvatar.c91c727c.js";
import "./use-ratio.35e46bb0.js";
import "./QDate.56300664.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.e27cf8aa.js";
import "./QPopupProxy.e4b8ebf7.js";
import "./use-quasar.f09bf3f1.js";
import "./debug.b9d7424b.js";
import "./help.8cba200d.js";
import "./vue-i18n.runtime.esm-bundler.b4f4ce36.js";
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
