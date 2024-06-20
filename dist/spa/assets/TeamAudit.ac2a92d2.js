import { _ as _sfc_main$1 } from "./AuditTimeline.33cf1e18.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.1b959b05.js";
import "./QTd.17bb0ec2.js";
import "./selection.2b1a1f43.js";
import "./QList.1496baac.js";
import "./QTable.d7e1c25d.js";
import "./QMarkupTable.77f68cc5.js";
import "./QSelect.31cc5689.js";
import "./QItemLabel.ea3a7bf6.js";
import "./QMenu.8b9cd80b.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.e0e216e9.js";
import "./use-fullscreen.cf1d82ea.js";
import "./axios.2a5c0600.js";
import "./debug.b9d7424b.js";
import "./help.e23e635c.js";
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
