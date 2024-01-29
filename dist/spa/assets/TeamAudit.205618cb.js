import { _ as _sfc_main$1 } from "./AuditTimeline.075f7610.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.288d251c.js";
import "./QTd.db451a12.js";
import "./QItemSection.d010cada.js";
import "./QList.2c25dc57.js";
import "./QTable.1008c514.js";
import "./QMarkupTable.8db2a827.js";
import "./QSelect.7f1b0f73.js";
import "./QItemLabel.f1754452.js";
import "./QMenu.7ebf623a.js";
import "./selection.71e3adfb.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0b5f9f60.js";
import "./use-fullscreen.bc49e914.js";
import "./axios.60d7f612.js";
import "./debug.b9d7424b.js";
import "./help.c5612f95.js";
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
