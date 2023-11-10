import { _ as _sfc_main$1 } from "./AuditTimeline.3555d0b2.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.99efffbb.js";
import "./QTd.2a4ecd17.js";
import "./selection.6389d1ab.js";
import "./QList.d6f07fea.js";
import "./QTable.8faa7926.js";
import "./QMarkupTable.dacee3e2.js";
import "./QSelect.20dace88.js";
import "./QItemLabel.ca507f7a.js";
import "./QMenu.e68e7f6e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.750b4d52.js";
import "./use-fullscreen.33c23ba7.js";
import "./axios.c7749e6f.js";
import "./debug.972d445d.js";
import "./help.7ec22b05.js";
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
