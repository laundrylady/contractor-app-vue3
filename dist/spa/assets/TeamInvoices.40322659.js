import { _ as _sfc_main$1 } from "./InvoiceManagement.25e59c49.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.370d568b.js";
import "./QSelect.4b2b6f1c.js";
import "./selection.86096579.js";
import "./QItemLabel.f007e025.js";
import "./QMenu.f484e851.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.044271bc.js";
import "./QTd.ce8cefd1.js";
import "./QTable.5dba33db.js";
import "./QList.5eb6c5a3.js";
import "./QMarkupTable.b25e35ab.js";
import "./QLinearProgress.28fd3ac1.js";
import "./use-fullscreen.f983417c.js";
import "./open-url.9e038ef3.js";
import "./axios.d95458b2.js";
import "./StatusTag.6cfa3aba.js";
import "./QBadge.371276a3.js";
import "./UserAvatar.b6f95d46.js";
import "./use-ratio.f35899fa.js";
import "./QDate.7625de6c.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.87a0c774.js";
import "./QPopupProxy.9473f9cb.js";
import "./use-quasar.66ec93ce.js";
import "./debug.b9d7424b.js";
import "./help.3de5c98f.js";
import "./vue-i18n.runtime.esm-bundler.54b38b06.js";
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
