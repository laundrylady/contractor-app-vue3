import { _ as _sfc_main$1 } from "./AuditTimeline.c3e24e13.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.2c1bc8d2.js";
import "./QTd.e766a39d.js";
import "./selection.a97a1f9b.js";
import "./QList.3fdf49c6.js";
import "./QTable.c1174dcf.js";
import "./QMarkupTable.b9291195.js";
import "./QSelect.8e4495e5.js";
import "./QItemLabel.8c6bc0aa.js";
import "./QMenu.1a847d0c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.545f33e7.js";
import "./use-fullscreen.a82cb636.js";
import "./axios.d4b7da8a.js";
import "./debug.972d445d.js";
import "./help.03a1471a.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamAudit",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, {
          auditable_id: __props.model.id,
          auditable_type: "Team"
        }, null, 8, ["auditable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
