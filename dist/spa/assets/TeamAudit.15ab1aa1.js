import { _ as _sfc_main$1 } from "./AuditTimeline.8b935841.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.6ce20806.js";
import "./QTd.abc5ef16.js";
import "./QItemSection.2217d3ce.js";
import "./QList.1b03d57c.js";
import "./QTable.9e31b6c6.js";
import "./QMarkupTable.96ea31ac.js";
import "./QSelect.fc57cce4.js";
import "./QItemLabel.e051b453.js";
import "./QMenu.4ac57728.js";
import "./selection.a136cbbe.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0aca601b.js";
import "./use-fullscreen.8d62c6e1.js";
import "./axios.dbc23847.js";
import "./debug.b9d7424b.js";
import "./help.97d207ee.js";
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
