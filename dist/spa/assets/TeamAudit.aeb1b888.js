import { _ as _sfc_main$1 } from "./AuditTimeline.d25c084d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9d7abd75.js";
import "./QTd.bfa9a7a6.js";
import "./format.1b4e7882.js";
import "./QList.361490e9.js";
import "./QTable.ef2cbe51.js";
import "./QMarkupTable.a81c5495.js";
import "./QSelect.d6b13d8d.js";
import "./QItemLabel.22848172.js";
import "./selection.37fa39f1.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.b38e2c0d.js";
import "./use-fullscreen.e06f7d91.js";
import "./axios.865ad67f.js";
import "./debug.b9d7424b.js";
import "./help.e32cbc16.js";
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
