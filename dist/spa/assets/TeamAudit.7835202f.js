import { _ as _sfc_main$1 } from "./AuditTimeline.214b39ba.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9d591b1c.js";
import "./QTd.95568e3c.js";
import "./QItemSection.8e564bc4.js";
import "./QList.b4bd41f3.js";
import "./QTable.e5f53493.js";
import "./QMarkupTable.0e23dd9f.js";
import "./QSelect.9c2c8019.js";
import "./QItemLabel.d08ee18c.js";
import "./QMenu.96d27bd9.js";
import "./selection.2874b1b3.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b20e4b9c.js";
import "./use-fullscreen.10b646dc.js";
import "./axios.ffd06d42.js";
import "./debug.972d445d.js";
import "./help.b8d14fc4.js";
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
