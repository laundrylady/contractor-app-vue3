import { _ as _sfc_main$1 } from "./InvoiceManagement.aa87f97c.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.db72ca64.js";
import "./QSelect.bc7e34bf.js";
import "./QItemSection.09d223bf.js";
import "./QItemLabel.460983fa.js";
import "./QMenu.3581048a.js";
import "./selection.e28b0495.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.c7054b8a.js";
import "./QTd.7cd9d3fe.js";
import "./QTable.e7342190.js";
import "./QList.131ffe4f.js";
import "./QMarkupTable.a7078213.js";
import "./QLinearProgress.09a438a3.js";
import "./use-fullscreen.0d42d8b5.js";
import "./open-url.56b8b219.js";
import "./axios.5f476664.js";
import "./StatusTag.4c3db776.js";
import "./QBadge.ba8a5fcb.js";
import "./UserAvatar.edd92aac.js";
import "./use-ratio.59e1ac5e.js";
import "./QDate.69c7749d.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.7ed62c32.js";
import "./QPopupProxy.2151308f.js";
import "./use-quasar.0f5850a0.js";
import "./debug.b9d7424b.js";
import "./help.0879b50a.js";
import "./vue-i18n.runtime.esm-bundler.777f6245.js";
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
