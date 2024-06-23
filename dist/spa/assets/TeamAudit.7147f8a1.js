import { _ as _sfc_main$1 } from "./AuditTimeline.2cfb7d2c.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.646fce27.js";
import "./QTd.ee533677.js";
import "./selection.682a8479.js";
import "./QList.0c009371.js";
import "./QTable.3ae37443.js";
import "./QMarkupTable.7fbe1d90.js";
import "./QSelect.deb42fdb.js";
import "./QItemLabel.81345429.js";
import "./QMenu.d189168f.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.8c88fc59.js";
import "./use-fullscreen.9af2a3e3.js";
import "./axios.16f6de8d.js";
import "./debug.b9d7424b.js";
import "./help.4eea4898.js";
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
