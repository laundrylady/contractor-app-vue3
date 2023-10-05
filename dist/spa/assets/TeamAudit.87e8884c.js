import { _ as _sfc_main$1 } from "./AuditTimeline.0be07691.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.c2e1ea50.js";
import "./QTd.543ee664.js";
import "./selection.32cb74d5.js";
import "./QList.515c802e.js";
import "./QTable.3c22dbf7.js";
import "./QMarkupTable.437860c2.js";
import "./QSelect.a72f5098.js";
import "./QItemLabel.45251e79.js";
import "./QMenu.724d425e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f81c3374.js";
import "./use-fullscreen.6409340c.js";
import "./axios.a819d008.js";
import "./debug.ffa51329.js";
import "./help.8a1391c5.js";
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
