import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.86bf0531.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.46e0a30b.js";
import "./QTd.3c9db6b8.js";
import "./QItemSection.353b1459.js";
import "./QList.f64079fd.js";
import "./QMenu.eccf08db.js";
import "./selection.7ea46a8f.js";
import "./QTable.0886a27c.js";
import "./QMarkupTable.24236ea3.js";
import "./QSelect.6b710984.js";
import "./QItemLabel.9f7c9c71.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d0b72ad6.js";
import "./use-fullscreen.bd0e41f1.js";
import "./ClosePopup.9a218449.js";
import "./axios.4c2d8dd7.js";
import "./StatusTag.0c3a09f0.js";
import "./QBadge.ccfaba3c.js";
import "./debug.972d445d.js";
import "./help.c20d34e3.js";
import "./vue-i18n.runtime.esm-bundler.710936bd.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Booking History", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Below is the complete booking history.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamOrders",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        _hoisted_3,
        createVNode(_sfc_main$1, {
          team_id: __props.model.id
        }, null, 8, ["team_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
