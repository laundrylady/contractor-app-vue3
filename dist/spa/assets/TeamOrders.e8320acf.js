import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.8001facd.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.da11e37d.js";
import "./QTd.7916fa25.js";
import "./QItemSection.4c7ec0bf.js";
import "./QList.bba9cbb5.js";
import "./QMenu.3bf9381f.js";
import "./selection.b27183ff.js";
import "./QTable.bfd211b4.js";
import "./QMarkupTable.1ac67de5.js";
import "./QSelect.c39b1e78.js";
import "./QItemLabel.453652dd.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.4baf75e7.js";
import "./use-fullscreen.26653d26.js";
import "./ClosePopup.a11cc418.js";
import "./axios.cc162f2e.js";
import "./StatusTag.69b08f9e.js";
import "./QBadge.6eb1e644.js";
import "./debug.972d445d.js";
import "./help.dda3e3ab.js";
import "./vue-i18n.runtime.esm-bundler.b015fd25.js";
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
