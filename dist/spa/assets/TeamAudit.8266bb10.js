import { _ as _sfc_main$1 } from "./AuditTimeline.6bdb60e5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.131c16d8.js";
import "./QTd.835d9876.js";
import "./QItemSection.e52f07bb.js";
import "./QList.c5757187.js";
import "./QTable.369fc18d.js";
import "./QMarkupTable.ebe9d872.js";
import "./QSelect.f2364560.js";
import "./QItemLabel.00b253db.js";
import "./QMenu.52cf11bc.js";
import "./selection.7d1c3bf7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.876d4ed8.js";
import "./use-fullscreen.923f29f5.js";
import "./axios.2ba2bf1b.js";
import "./debug.b9d7424b.js";
import "./help.4b2af640.js";
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
