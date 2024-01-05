import { _ as _sfc_main$1 } from "./InvoiceManagement.bea55ce3.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.b8400575.js";
import "./QSelect.84fbb6bc.js";
import "./format.f5a34675.js";
import "./QItemLabel.f3cb8d1c.js";
import "./selection.b2cf3425.js";
import "./rtl.b51694b1.js";
import "./QSpace.cd4fe059.js";
import "./QTd.1df9b5c3.js";
import "./QTable.c6f605ef.js";
import "./QList.489649ed.js";
import "./QMarkupTable.6921fe2b.js";
import "./QLinearProgress.315ca08c.js";
import "./use-fullscreen.0dca6e56.js";
import "./open-url.b6ec2b7a.js";
import "./axios.a7872fdc.js";
import "./StatusTag.373a50c2.js";
import "./QBadge.39cdc22c.js";
import "./UserAvatar.048cf643.js";
import "./QImg.225b9ecb.js";
import "./use-ratio.ec436ec0.js";
import "./QDate.023ffe55.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.aa292746.js";
import "./QPopupProxy.5222bdf0.js";
import "./use-quasar.9ab36770.js";
import "./debug.b9d7424b.js";
import "./help.464b59aa.js";
import "./vue-i18n.runtime.esm-bundler.e1e345b2.js";
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
