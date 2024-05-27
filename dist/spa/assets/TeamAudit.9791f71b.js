import { _ as _sfc_main$1 } from "./AuditTimeline.7670e918.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.26ecc84c.js";
import "./QTd.ae0b511a.js";
import "./QItemSection.d61f97d4.js";
import "./QList.ee9af6a8.js";
import "./QTable.18953739.js";
import "./QMarkupTable.d0bda802.js";
import "./QSelect.2948296f.js";
import "./QItemLabel.869e1563.js";
import "./QMenu.96ee2f21.js";
import "./selection.2b49221b.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.4ef1995e.js";
import "./use-fullscreen.727b753d.js";
import "./axios.942456e6.js";
import "./debug.b9d7424b.js";
import "./help.c16653b0.js";
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
