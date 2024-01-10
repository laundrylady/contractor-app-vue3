import { _ as _sfc_main$1 } from "./AuditTimeline.e71285c5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9eb88662.js";
import "./QTd.84acd53d.js";
import "./QItemSection.bd5d9e5f.js";
import "./QList.7060f3df.js";
import "./QTable.0acf2e6a.js";
import "./QMarkupTable.56cc14cf.js";
import "./QSelect.c74eab78.js";
import "./QItemLabel.c607c146.js";
import "./QMenu.0779b89b.js";
import "./selection.ccc35532.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.2bc59aba.js";
import "./use-fullscreen.aea3812b.js";
import "./axios.9bbea1e2.js";
import "./debug.b9d7424b.js";
import "./help.f70a8b9a.js";
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
