import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.cfc75ce8.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.ce2171c7.js";
import "./QBreadcrumbs.3d64d64f.js";
import "./QSelect.79071751.js";
import "./QItemSection.a7d2769c.js";
import "./QItemLabel.1fdb24b8.js";
import "./QMenu.3272b5a7.js";
import "./selection.90670d13.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.79304b54.js";
import "./QList.4a588e1c.js";
import "./QMarkupTable.9618e4f3.js";
import "./QLinearProgress.d0d51163.js";
import "./use-fullscreen.51c6ec4e.js";
import "./axios.e42b26c9.js";
import "./DateField.28f22f61.js";
import "./QDate.c6d5b626.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.623433ec.js";
import "./QPopupProxy.94e07170.js";
import "./use-quasar.b2689969.js";
import "./OrderListFormat.2a8e1f3c.js";
import "./QSpace.c9bb082e.js";
import "./QBadge.6cd744aa.js";
import "./open-url.4bcc894d.js";
import "./debug.b9d7424b.js";
import "./help.955839a9.js";
import "./geolocation.1b7e4da8.js";
import "./StatusTag.276caa26.js";
import "./UserAvatar.13a83b02.js";
import "./use-ratio.c38980f9.js";
import "./security.a8aa1146.js";
import "./vue-i18n.runtime.esm-bundler.2c90414e.js";
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
