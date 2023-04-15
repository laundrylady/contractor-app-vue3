import { _ as _sfc_main$1 } from "./AuditTimeline.30aef23e.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode } from "./index.e647c85a.js";
import "./QTable.64a81add.js";
import "./QList.2f0afc60.js";
import "./QMarkupTable.981d9979.js";
import "./QSelect.853d535e.js";
import "./QItemSection.99659658.js";
import "./rtl.4f5e13e8.js";
import "./format.8e90d58d.js";
import "./QLinearProgress.c48fac34.js";
import "./axios.ccd3a804.js";
import "./debug.805a8aef.js";
import "./help.c0f85e41.js";
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
