import { _ as _sfc_main$1 } from "./InvoiceManagement.30cac0b9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.cbfc43e6.js";
import "./QSelect.5705cb5d.js";
import "./format.e163d39a.js";
import "./QItemLabel.19ce3d6f.js";
import "./selection.6760fa44.js";
import "./rtl.b51694b1.js";
import "./QSpace.ad90bb8e.js";
import "./QTd.c5a3aab1.js";
import "./QTable.1cbca230.js";
import "./QList.7ec85666.js";
import "./QMarkupTable.8cf37871.js";
import "./QLinearProgress.466b4060.js";
import "./use-fullscreen.fd89045b.js";
import "./open-url.746cf08b.js";
import "./axios.87c590ec.js";
import "./StatusTag.b96e98c5.js";
import "./QBadge.533b3596.js";
import "./UserAvatar.5deb706e.js";
import "./QImg.6ced13d8.js";
import "./use-ratio.010e2413.js";
import "./QDate.4894c840.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.40df62db.js";
import "./QPopupProxy.04db2e09.js";
import "./use-quasar.ac2434ae.js";
import "./debug.b9d7424b.js";
import "./help.754a9801.js";
import "./vue-i18n.runtime.esm-bundler.6b364403.js";
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
