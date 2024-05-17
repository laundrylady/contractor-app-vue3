import { _ as _sfc_main$1 } from "./InvoiceManagement.060ddcad.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9a11cf11.js";
import "./QSelect.62377b0b.js";
import "./QItemSection.2309b52b.js";
import "./QItemLabel.cef8510d.js";
import "./QMenu.a1c0df01.js";
import "./selection.d8d985bb.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.9b364c49.js";
import "./QTd.96857910.js";
import "./QTable.b1e4046d.js";
import "./QList.6897626c.js";
import "./QMarkupTable.c390c23d.js";
import "./QLinearProgress.80feccb0.js";
import "./use-fullscreen.e5e4dcf2.js";
import "./open-url.d6ecea13.js";
import "./axios.21220e31.js";
import "./StatusTag.8bc2e429.js";
import "./QBadge.b84db0a4.js";
import "./UserAvatar.72168aef.js";
import "./use-ratio.6c919724.js";
import "./QDate.ee893074.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.792d6b7a.js";
import "./QPopupProxy.d264c97d.js";
import "./use-quasar.419031ab.js";
import "./debug.b9d7424b.js";
import "./help.02aeb00c.js";
import "./vue-i18n.runtime.esm-bundler.097c6e2b.js";
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
