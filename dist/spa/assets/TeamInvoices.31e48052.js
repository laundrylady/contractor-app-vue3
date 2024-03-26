import { _ as _sfc_main$1 } from "./InvoiceManagement.13b2ad82.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.68787ef2.js";
import "./QSelect.985750bb.js";
import "./QItemSection.830c8906.js";
import "./QItemLabel.0416fad3.js";
import "./QMenu.30a416b8.js";
import "./selection.a7aa919b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.4d3d65f3.js";
import "./QTd.2091a7ad.js";
import "./QTable.a130360d.js";
import "./QList.92c4c2c2.js";
import "./QMarkupTable.8dfac713.js";
import "./QLinearProgress.f44f9a54.js";
import "./use-fullscreen.dd11c2f3.js";
import "./open-url.db93377c.js";
import "./axios.43fd41e6.js";
import "./StatusTag.b51fb5ae.js";
import "./QBadge.230722fa.js";
import "./UserAvatar.c7d6b7b8.js";
import "./use-ratio.8c6f9c58.js";
import "./QDate.70e84422.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.5e01ee7f.js";
import "./QPopupProxy.b7789ca1.js";
import "./use-quasar.7700fe14.js";
import "./debug.b9d7424b.js";
import "./help.9f23d43e.js";
import "./vue-i18n.runtime.esm-bundler.6a78c908.js";
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
