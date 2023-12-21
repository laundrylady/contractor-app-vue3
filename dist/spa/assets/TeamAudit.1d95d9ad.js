import { _ as _sfc_main$1 } from "./AuditTimeline.edfde950.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.a8c2088f.js";
import "./QTd.d50cc249.js";
import "./QItemSection.e7fc41e3.js";
import "./QList.6dac2cc1.js";
import "./QTable.757a8e60.js";
import "./QMarkupTable.51386de5.js";
import "./QSelect.a486286b.js";
import "./QItemLabel.71296e9c.js";
import "./QMenu.d17a803f.js";
import "./selection.2269a595.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b89a7092.js";
import "./use-fullscreen.55a28642.js";
import "./axios.6170ef9f.js";
import "./debug.972d445d.js";
import "./help.565e8b52.js";
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
