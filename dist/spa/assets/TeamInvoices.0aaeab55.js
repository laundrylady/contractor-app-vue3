import { _ as _sfc_main$1 } from "./InvoiceManagement.8a30b307.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.944bfff3.js";
import "./QSelect.3ac0f2e2.js";
import "./QItemSection.48114b1b.js";
import "./QItemLabel.dd8ce5dc.js";
import "./QMenu.68175fbd.js";
import "./selection.4770d8d9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.26a45208.js";
import "./QTd.25595683.js";
import "./QTable.95af2519.js";
import "./QList.92347de5.js";
import "./QMarkupTable.9361c1fd.js";
import "./QLinearProgress.1322c577.js";
import "./use-fullscreen.42bcf791.js";
import "./open-url.284d8ad0.js";
import "./axios.2dc359bb.js";
import "./StatusTag.fef3119c.js";
import "./QBadge.8d9e8629.js";
import "./UserAvatar.c68dfa4a.js";
import "./use-ratio.f6691a74.js";
import "./QDate.517e4f58.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.1e4457cf.js";
import "./QPopupProxy.5d53b4a9.js";
import "./use-quasar.5c24a825.js";
import "./debug.b9d7424b.js";
import "./help.b3e2d521.js";
import "./vue-i18n.runtime.esm-bundler.dabb5557.js";
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
