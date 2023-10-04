import { _ as _sfc_main$1 } from "./AuditTimeline.1480936c.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.8169762b.js";
import "./QTd.25661580.js";
import "./selection.5b06526d.js";
import "./QList.44d753a9.js";
import "./QTable.ec671626.js";
import "./QMarkupTable.8c055e77.js";
import "./QSelect.c057f867.js";
import "./QItemLabel.da0d590a.js";
import "./QMenu.e55bc21e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.6fc03437.js";
import "./use-fullscreen.e85d23d0.js";
import "./axios.a26d4bb7.js";
import "./debug.ffa51329.js";
import "./help.c20124ee.js";
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
