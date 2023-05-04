import { _ as _sfc_main$1 } from "./AuditTimeline.46bae014.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode } from "./index.3359169e.js";
import "./QTable.fdcd88ed.js";
import "./QList.95271f43.js";
import "./QMarkupTable.a15737d9.js";
import "./QSelect.10878a08.js";
import "./QItemSection.73389b03.js";
import "./rtl.47c54deb.js";
import "./format.91cb2860.js";
import "./QLinearProgress.166e0705.js";
import "./use-fullscreen.4c886dbc.js";
import "./axios.cc17e3e5.js";
import "./debug.805a8aef.js";
import "./help.5154fe45.js";
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
