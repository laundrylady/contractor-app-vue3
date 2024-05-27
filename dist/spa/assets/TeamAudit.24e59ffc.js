import { _ as _sfc_main$1 } from "./AuditTimeline.bb8dc7a2.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9b9c09ca.js";
import "./QTd.5bf65bb3.js";
import "./QItemSection.f89ebc4f.js";
import "./QList.03eba104.js";
import "./QTable.accd0b34.js";
import "./QMarkupTable.b6f22ded.js";
import "./QSelect.bb67f12f.js";
import "./QItemLabel.d6cfbd10.js";
import "./QMenu.ab871309.js";
import "./selection.0fd0fe06.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.5f6aeb77.js";
import "./use-fullscreen.acf0662d.js";
import "./axios.46cd0bc0.js";
import "./debug.b9d7424b.js";
import "./help.4b12ec44.js";
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
