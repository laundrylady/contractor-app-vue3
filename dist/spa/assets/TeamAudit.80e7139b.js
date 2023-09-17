import { _ as _sfc_main$1 } from "./AuditTimeline.9e6c71c6.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.f00b5063.js";
import "./QTable.a69612ff.js";
import "./QList.51c80329.js";
import "./QMarkupTable.769ff38d.js";
import "./QSelect.728b69b4.js";
import "./selection.4a285e86.js";
import "./QItemLabel.187da5b1.js";
import "./QMenu.92239622.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f6a2aa50.js";
import "./use-fullscreen.6569d1c9.js";
import "./axios.8666242f.js";
import "./debug.ffa51329.js";
import "./help.c302d4f4.js";
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
