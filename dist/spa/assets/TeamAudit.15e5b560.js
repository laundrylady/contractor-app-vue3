import { _ as _sfc_main$1 } from "./AuditTimeline.6e472be6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.1d5fa541.js";
import "./QTd.8a374e79.js";
import "./format.5ed25bdf.js";
import "./QList.3ac703b6.js";
import "./QTable.a3bd77b6.js";
import "./QMarkupTable.efc731bb.js";
import "./QSelect.81244991.js";
import "./QItemLabel.69f8a575.js";
import "./selection.b5cfb32d.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.b60b481f.js";
import "./use-fullscreen.8a09d8a8.js";
import "./axios.7b7a7671.js";
import "./debug.b9d7424b.js";
import "./help.ebebc6ca.js";
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
