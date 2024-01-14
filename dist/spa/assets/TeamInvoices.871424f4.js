import { _ as _sfc_main$1 } from "./InvoiceManagement.6e47b13d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.84fae5f5.js";
import "./QSelect.475b8e0a.js";
import "./QItemSection.4b58462e.js";
import "./QItemLabel.f3630861.js";
import "./QMenu.f4739337.js";
import "./selection.e385e751.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.092c4cd3.js";
import "./QTd.b400daad.js";
import "./QTable.47f7e83c.js";
import "./QList.2ea35998.js";
import "./QMarkupTable.01d2b308.js";
import "./QLinearProgress.8b51937f.js";
import "./use-fullscreen.bf4d3b8a.js";
import "./open-url.5417eb87.js";
import "./axios.8eb63b42.js";
import "./StatusTag.4be542e4.js";
import "./QBadge.41652fc1.js";
import "./UserAvatar.9ad8d04f.js";
import "./use-ratio.6caf71a3.js";
import "./QDate.37eb686c.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.ef22a670.js";
import "./QPopupProxy.084b25d2.js";
import "./use-quasar.a6c17b87.js";
import "./debug.b9d7424b.js";
import "./help.41c94128.js";
import "./vue-i18n.runtime.esm-bundler.934c6f51.js";
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
