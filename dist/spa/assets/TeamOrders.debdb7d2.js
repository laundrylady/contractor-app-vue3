import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.b590143c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.36ffcf9b.js";
import "./QTd.3bdb7a25.js";
import "./QItemSection.30f99eb3.js";
import "./QList.2a640182.js";
import "./QMenu.e0177a67.js";
import "./selection.0c7ccc1b.js";
import "./QTable.3460cabc.js";
import "./QMarkupTable.29ba1a9e.js";
import "./QSelect.c615a3ab.js";
import "./QItemLabel.06d297de.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3c0f7f84.js";
import "./use-fullscreen.827afacc.js";
import "./ClosePopup.e6da29e8.js";
import "./axios.ae54ae36.js";
import "./StatusTag.7f4a7815.js";
import "./QBadge.29bb66b0.js";
import "./debug.972d445d.js";
import "./help.bf487f3c.js";
import "./vue-i18n.runtime.esm-bundler.40fa2ae8.js";
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
