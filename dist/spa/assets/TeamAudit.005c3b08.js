import { _ as _sfc_main$1 } from "./AuditTimeline.81f9e901.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.56d10e03.js";
import "./QTd.1c3d671a.js";
import "./selection.b9219e3c.js";
import "./QList.1c88c78c.js";
import "./QTable.2becd57f.js";
import "./QMarkupTable.7a93b76b.js";
import "./QSelect.44b3cd04.js";
import "./QItemLabel.79ad69aa.js";
import "./QMenu.73c16fc7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d9219a73.js";
import "./use-fullscreen.49a3ca9d.js";
import "./axios.db77a32a.js";
import "./debug.972d445d.js";
import "./help.211327e8.js";
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
