import { _ as _sfc_main$1 } from "./AuditTimeline.e323c1a4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.b8400575.js";
import "./QTd.1df9b5c3.js";
import "./format.f5a34675.js";
import "./QList.489649ed.js";
import "./QTable.c6f605ef.js";
import "./QMarkupTable.6921fe2b.js";
import "./QSelect.84fbb6bc.js";
import "./QItemLabel.f3cb8d1c.js";
import "./selection.b2cf3425.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.315ca08c.js";
import "./use-fullscreen.0dca6e56.js";
import "./axios.a7872fdc.js";
import "./debug.b9d7424b.js";
import "./help.464b59aa.js";
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
