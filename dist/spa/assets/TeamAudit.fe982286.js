import { _ as _sfc_main$1 } from "./AuditTimeline.87e8fc95.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e85fd7a7.js";
import "./QTd.5237e187.js";
import "./QItemSection.f7907d8c.js";
import "./QList.0b626c37.js";
import "./QTable.61ac0101.js";
import "./QMarkupTable.c7f34321.js";
import "./QSelect.9f91491f.js";
import "./QItemLabel.058c9d10.js";
import "./QMenu.f354d7c7.js";
import "./selection.f3591a7d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.eef8565a.js";
import "./use-fullscreen.59c47be8.js";
import "./axios.505ad15a.js";
import "./debug.b9d7424b.js";
import "./help.8b26e756.js";
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
