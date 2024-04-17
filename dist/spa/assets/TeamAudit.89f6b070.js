import { _ as _sfc_main$1 } from "./AuditTimeline.b1e49861.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.ed79211e.js";
import "./QTd.73cc7355.js";
import "./QItemSection.7b770257.js";
import "./QList.ab61c688.js";
import "./QTable.021b4058.js";
import "./QMarkupTable.3bc32064.js";
import "./QSelect.6911260e.js";
import "./QItemLabel.e5913664.js";
import "./QMenu.da2c12b1.js";
import "./selection.5a991f3e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.77394baf.js";
import "./use-fullscreen.92326348.js";
import "./axios.eac371de.js";
import "./debug.b9d7424b.js";
import "./help.0abe00d6.js";
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
