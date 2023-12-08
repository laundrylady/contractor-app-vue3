import { _ as _sfc_main$1 } from "./AuditTimeline.7f83cf4f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.439f6236.js";
import "./QTd.c986cb65.js";
import "./QItemSection.17637cbf.js";
import "./QList.aae51351.js";
import "./QTable.8d0da59d.js";
import "./QMarkupTable.1b517b2f.js";
import "./QSelect.fe07d48e.js";
import "./QItemLabel.ac4e31dc.js";
import "./QMenu.537a7799.js";
import "./selection.73cc12e4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.4fb0aedb.js";
import "./use-fullscreen.d688aa89.js";
import "./axios.77c66b00.js";
import "./debug.972d445d.js";
import "./help.7be4cca3.js";
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
