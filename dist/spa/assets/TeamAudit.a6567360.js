import { _ as _sfc_main$1 } from "./AuditTimeline.39c92f7b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.cbceafe4.js";
import "./QTd.e540dd1a.js";
import "./format.2132c131.js";
import "./QList.0e75c36e.js";
import "./QTable.4aeb8dbc.js";
import "./QMarkupTable.2402e974.js";
import "./QSelect.e5dc6c2c.js";
import "./QItemLabel.3781752a.js";
import "./selection.f04d2dc8.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.49727588.js";
import "./use-fullscreen.f99ad7f1.js";
import "./axios.5b47d216.js";
import "./debug.b9d7424b.js";
import "./help.7461b2ea.js";
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
