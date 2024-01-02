import { _ as _sfc_main$1 } from "./InvoiceManagement.a9df5ebb.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.2bb9246b.js";
import "./QSelect.cabafb83.js";
import "./format.709f7a1b.js";
import "./QItemLabel.ac9f8f0e.js";
import "./selection.9401b84a.js";
import "./rtl.b51694b1.js";
import "./QSpace.aacda48f.js";
import "./QTd.7ebce014.js";
import "./QTable.f4793fe6.js";
import "./QList.b5ce7ee6.js";
import "./QMarkupTable.d088da80.js";
import "./QLinearProgress.d0b9495d.js";
import "./use-fullscreen.a97c0a09.js";
import "./open-url.329b2613.js";
import "./axios.3b0e4c6b.js";
import "./StatusTag.3d80cbe7.js";
import "./QBadge.e8781ddf.js";
import "./UserAvatar.9587f2c6.js";
import "./QImg.3d8f0991.js";
import "./use-ratio.a9cc92aa.js";
import "./QDate.f0c77be7.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.d7e5f4fc.js";
import "./QPopupProxy.e8589fa7.js";
import "./use-quasar.16a51ea0.js";
import "./debug.b9d7424b.js";
import "./help.251a7a52.js";
import "./vue-i18n.runtime.esm-bundler.8a5afee8.js";
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
