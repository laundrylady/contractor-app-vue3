import { _ as _sfc_main$1 } from "./InvoiceManagement.938e717e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.131c16d8.js";
import "./QSelect.f2364560.js";
import "./QItemSection.e52f07bb.js";
import "./QItemLabel.00b253db.js";
import "./QMenu.52cf11bc.js";
import "./selection.7d1c3bf7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QSpace.3c5f79c2.js";
import "./QTd.835d9876.js";
import "./QTable.369fc18d.js";
import "./QList.c5757187.js";
import "./QMarkupTable.ebe9d872.js";
import "./QLinearProgress.876d4ed8.js";
import "./use-fullscreen.923f29f5.js";
import "./open-url.46e4fb1b.js";
import "./axios.2ba2bf1b.js";
import "./StatusTag.6fcc3d2c.js";
import "./QBadge.82fcd197.js";
import "./UserAvatar.73783a01.js";
import "./use-ratio.cc72671a.js";
import "./QDate.499625b5.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.b4ebfa7d.js";
import "./QPopupProxy.d96b07d9.js";
import "./use-quasar.b2555732.js";
import "./debug.b9d7424b.js";
import "./help.4b2af640.js";
import "./vue-i18n.runtime.esm-bundler.f58afb05.js";
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