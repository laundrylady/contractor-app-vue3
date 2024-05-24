import { _ as _sfc_main$1 } from "./InvoiceManagement.5369badf.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.0b09a5a3.js";
import "./QSelect.50ff3f19.js";
import "./QItemSection.29c6a139.js";
import "./QItemLabel.46538de8.js";
import "./QMenu.f1d3622d.js";
import "./selection.f8508231.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.0f4a9c7e.js";
import "./QTd.9c6c067f.js";
import "./QTable.198d5655.js";
import "./QList.badc74df.js";
import "./QMarkupTable.76f69134.js";
import "./QLinearProgress.7dc2af46.js";
import "./use-fullscreen.ef9eb948.js";
import "./open-url.1b9deb68.js";
import "./axios.37955361.js";
import "./StatusTag.f4803ade.js";
import "./QBadge.638d54c5.js";
import "./UserAvatar.c2a47f25.js";
import "./use-ratio.959802d1.js";
import "./QDate.599e9c43.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.b388713d.js";
import "./QPopupProxy.b118ac11.js";
import "./use-quasar.8d96d2c6.js";
import "./debug.b9d7424b.js";
import "./help.03c96e57.js";
import "./vue-i18n.runtime.esm-bundler.ec2278ee.js";
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
