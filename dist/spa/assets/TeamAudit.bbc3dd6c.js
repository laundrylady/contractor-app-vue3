import { _ as _sfc_main$1 } from "./AuditTimeline.a3c74ad5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f5d83c29.js";
import "./QTd.0c2c9feb.js";
import "./QItemSection.a30a9111.js";
import "./QList.d82af4ad.js";
import "./QTable.5e052d3a.js";
import "./QMarkupTable.20f0b0d4.js";
import "./QSelect.57ad8c4f.js";
import "./QItemLabel.0d6eac92.js";
import "./QMenu.86b73eac.js";
import "./selection.1d3056a9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0ef407e5.js";
import "./use-fullscreen.5ec512fe.js";
import "./axios.c1accf07.js";
import "./debug.b9d7424b.js";
import "./help.5b689c05.js";
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
