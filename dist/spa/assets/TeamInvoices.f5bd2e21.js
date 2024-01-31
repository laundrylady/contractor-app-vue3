import { _ as _sfc_main$1 } from "./InvoiceManagement.9b6f8397.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.cfc8c6ea.js";
import "./QSelect.2d6665f9.js";
import "./QItemSection.380c7e57.js";
import "./QItemLabel.d074345c.js";
import "./QMenu.9e107354.js";
import "./selection.fe20666e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.d7fd511e.js";
import "./QTd.206dc118.js";
import "./QTable.b58c2d64.js";
import "./QList.b4201a4d.js";
import "./QMarkupTable.ecabbd53.js";
import "./QLinearProgress.cb0415af.js";
import "./use-fullscreen.dea557d3.js";
import "./open-url.3fc67fb5.js";
import "./axios.d4c1dfac.js";
import "./StatusTag.b381afc0.js";
import "./QBadge.41982e3e.js";
import "./UserAvatar.8c28640e.js";
import "./use-ratio.da3c8311.js";
import "./QDate.f2bcf4bb.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.f626cb42.js";
import "./QPopupProxy.1c222f5f.js";
import "./use-quasar.7e6078b2.js";
import "./debug.b9d7424b.js";
import "./help.3fb17df8.js";
import "./vue-i18n.runtime.esm-bundler.4f9b12d3.js";
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
