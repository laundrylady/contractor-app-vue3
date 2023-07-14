import { _ as _sfc_main$1 } from "./AuditTimeline.137041ce.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.859cb660.js";
import "./QTable.d01b5a90.js";
import "./QList.6ec0db61.js";
import "./QSelect.004b04e5.js";
import "./QItemSection.b7e689a7.js";
import "./format.40c4273f.js";
import "./QLinearProgress.330b43d4.js";
import "./use-fullscreen.44e22a52.js";
import "./axios.c622a4bf.js";
import "./debug.805a8aef.js";
import "./help.d852d987.js";
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
