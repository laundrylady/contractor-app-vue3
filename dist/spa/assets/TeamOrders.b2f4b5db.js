import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.4be29f3a.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.7a6165bd.js";
import "./QBreadcrumbs.d9d8a4ff.js";
import "./QSelect.c17ea5e8.js";
import "./QItemSection.272e2acd.js";
import "./QItemLabel.aa1431ca.js";
import "./QMenu.3507a2f1.js";
import "./selection.0a13c517.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.859976e4.js";
import "./QList.4f5a733b.js";
import "./QMarkupTable.3928dde1.js";
import "./QLinearProgress.19e05036.js";
import "./use-fullscreen.e71ca2a3.js";
import "./axios.2fe39f73.js";
import "./DateField.23e25f68.js";
import "./QDate.4efef1c5.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.faa7f640.js";
import "./QPopupProxy.c9db1c0b.js";
import "./use-quasar.6721189c.js";
import "./OrderListFormat.49005f61.js";
import "./QSpace.76f7c209.js";
import "./QBadge.beb8040d.js";
import "./open-url.e1193c47.js";
import "./debug.b9d7424b.js";
import "./help.9711ed7e.js";
import "./geolocation.215a9420.js";
import "./StatusTag.1ac8f535.js";
import "./UserAvatar.e5b0a914.js";
import "./use-ratio.e5950af4.js";
import "./security.218a2559.js";
import "./vue-i18n.runtime.esm-bundler.3236f645.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamOrders",
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
