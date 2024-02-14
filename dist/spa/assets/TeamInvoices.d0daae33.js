import { _ as _sfc_main$1 } from "./InvoiceManagement.50979241.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f5d83c29.js";
import "./QSelect.57ad8c4f.js";
import "./QItemSection.a30a9111.js";
import "./QItemLabel.0d6eac92.js";
import "./QMenu.86b73eac.js";
import "./selection.1d3056a9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.5af0f2a0.js";
import "./QTd.0c2c9feb.js";
import "./QTable.5e052d3a.js";
import "./QList.d82af4ad.js";
import "./QMarkupTable.20f0b0d4.js";
import "./QLinearProgress.0ef407e5.js";
import "./use-fullscreen.5ec512fe.js";
import "./open-url.14f9442d.js";
import "./axios.c1accf07.js";
import "./StatusTag.e40b0381.js";
import "./QBadge.1b6d1b0a.js";
import "./UserAvatar.41aaa471.js";
import "./use-ratio.3af41f78.js";
import "./QDate.5bf53fdc.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.b8362c0b.js";
import "./QPopupProxy.8bc1f367.js";
import "./use-quasar.9d71f1d1.js";
import "./debug.b9d7424b.js";
import "./help.5b689c05.js";
import "./vue-i18n.runtime.esm-bundler.956eaf9c.js";
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
