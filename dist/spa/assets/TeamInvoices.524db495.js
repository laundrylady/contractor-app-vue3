import { _ as _sfc_main$1 } from "./InvoiceManagement.e34e9067.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.6acd2f95.js";
import "./QSelect.86f54259.js";
import "./QItemSection.49f4722f.js";
import "./QItemLabel.2a427a06.js";
import "./QMenu.4d444796.js";
import "./selection.cf40296c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.dd1b93a4.js";
import "./QTd.1f114f6c.js";
import "./QTable.51223a8a.js";
import "./QList.806c8947.js";
import "./QMarkupTable.9bc27f3c.js";
import "./QLinearProgress.e3cffa17.js";
import "./use-fullscreen.8643a0f8.js";
import "./open-url.28537a96.js";
import "./axios.a11536c6.js";
import "./StatusTag.627bc209.js";
import "./QBadge.4c05b407.js";
import "./UserAvatar.00c43922.js";
import "./use-ratio.0798d5aa.js";
import "./QDate.614b2b82.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.5849692c.js";
import "./QPopupProxy.2a3959e6.js";
import "./use-quasar.b06d3ff6.js";
import "./debug.b9d7424b.js";
import "./help.4555f504.js";
import "./vue-i18n.runtime.esm-bundler.67471051.js";
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
