import { _ as _sfc_main$1 } from "./InvoiceManagement.44dc4754.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.538c925c.js";
import "./QSelect.1a7c95e6.js";
import "./QItemSection.ac035b32.js";
import "./QItemLabel.2d915843.js";
import "./QMenu.660a7360.js";
import "./selection.f5514ae2.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.af99e3b5.js";
import "./QTd.ce64a92f.js";
import "./QTable.9919d54d.js";
import "./QList.f0865810.js";
import "./QMarkupTable.05a3914f.js";
import "./QLinearProgress.02572258.js";
import "./use-fullscreen.8220daa4.js";
import "./open-url.131ed5db.js";
import "./axios.39cef10c.js";
import "./StatusTag.29d10979.js";
import "./QBadge.f0685755.js";
import "./UserAvatar.805ee79c.js";
import "./use-ratio.ba353e18.js";
import "./QDate.3ead04ec.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.c02a8b89.js";
import "./QPopupProxy.2ec8e62a.js";
import "./use-quasar.4b40572d.js";
import "./debug.b9d7424b.js";
import "./help.787b8a04.js";
import "./vue-i18n.runtime.esm-bundler.d64826ad.js";
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
