import { _ as _sfc_main$1 } from "./AuditTimeline.12ee96cb.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.cbfc43e6.js";
import "./QTd.c5a3aab1.js";
import "./format.e163d39a.js";
import "./QList.7ec85666.js";
import "./QTable.1cbca230.js";
import "./QMarkupTable.8cf37871.js";
import "./QSelect.5705cb5d.js";
import "./QItemLabel.19ce3d6f.js";
import "./selection.6760fa44.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.466b4060.js";
import "./use-fullscreen.fd89045b.js";
import "./axios.87c590ec.js";
import "./debug.b9d7424b.js";
import "./help.754a9801.js";
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
