import { _ as _sfc_main$1 } from "./AuditTimeline.817f4cc8.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.b2f4aca3.js";
import "./QTd.cd60cc37.js";
import "./QItemSection.a93e6b70.js";
import "./QList.31c4473f.js";
import "./QTable.796d4712.js";
import "./QMarkupTable.6cdd41e1.js";
import "./QSelect.522178b7.js";
import "./QItemLabel.0fb67170.js";
import "./QMenu.f441d7a0.js";
import "./selection.54a583a0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.37100551.js";
import "./use-fullscreen.01f17741.js";
import "./axios.32e1d547.js";
import "./debug.972d445d.js";
import "./help.0d31cbdd.js";
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
