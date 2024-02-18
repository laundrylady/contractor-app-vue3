import { _ as _sfc_main$1 } from "./InvoiceManagement.01278ad8.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.4926aa9a.js";
import "./QSelect.4dd48989.js";
import "./QItemSection.c2e831ff.js";
import "./QItemLabel.c5588883.js";
import "./QMenu.9baac5c6.js";
import "./selection.3b9b612c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.5fcf73ba.js";
import "./QTd.ebdff96f.js";
import "./QTable.eeccd8e4.js";
import "./QList.ea4ef22b.js";
import "./QMarkupTable.3666ae8c.js";
import "./QLinearProgress.d8841d43.js";
import "./use-fullscreen.b2935117.js";
import "./open-url.23c54156.js";
import "./axios.61cdb935.js";
import "./StatusTag.1c496280.js";
import "./QBadge.f6c0dfaa.js";
import "./UserAvatar.496137a0.js";
import "./use-ratio.6a08b08b.js";
import "./QDate.d08848f1.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.9be77b39.js";
import "./QPopupProxy.a96470d2.js";
import "./use-quasar.4a68f4fb.js";
import "./debug.b9d7424b.js";
import "./help.57a9d112.js";
import "./vue-i18n.runtime.esm-bundler.07020053.js";
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
