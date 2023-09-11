import { _ as _sfc_main$1 } from "./AuditTimeline.30283d72.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.9049e2bf.js";
import "./QTable.402378a4.js";
import "./QList.f208e8e5.js";
import "./QMarkupTable.f27342c3.js";
import "./QSelect.b1afe4a4.js";
import "./selection.2c513c02.js";
import "./QItemLabel.bdaf797d.js";
import "./QMenu.670043f4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3ff3411e.js";
import "./use-fullscreen.b8f5d173.js";
import "./axios.8996a507.js";
import "./debug.ffa51329.js";
import "./help.344bce22.js";
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
