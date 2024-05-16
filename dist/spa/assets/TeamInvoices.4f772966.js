import { _ as _sfc_main$1 } from "./InvoiceManagement.4fd13c92.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.796300b2.js";
import "./QSelect.437ea744.js";
import "./QItemSection.37b2f889.js";
import "./QItemLabel.f1084971.js";
import "./QMenu.18c21b53.js";
import "./selection.7aaacd8a.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QSpace.99cba1e8.js";
import "./QTd.443ecb96.js";
import "./QTable.4d792419.js";
import "./QList.ca6991bd.js";
import "./QMarkupTable.6d282bed.js";
import "./QLinearProgress.a4c8fc3b.js";
import "./use-fullscreen.6086a2d9.js";
import "./open-url.d67b16a6.js";
import "./axios.e0dd89c3.js";
import "./StatusTag.38962d2f.js";
import "./QBadge.f5e71b95.js";
import "./UserAvatar.444047f3.js";
import "./use-ratio.b533698e.js";
import "./QDate.58d70816.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.eeeaff2d.js";
import "./QPopupProxy.9ebaaf87.js";
import "./use-quasar.66fd6a4a.js";
import "./debug.b9d7424b.js";
import "./help.396f7ad9.js";
import "./vue-i18n.runtime.esm-bundler.50fd38af.js";
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
