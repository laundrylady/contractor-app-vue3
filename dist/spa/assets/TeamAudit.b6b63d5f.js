import { _ as _sfc_main$1 } from "./AuditTimeline.8d51036c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.4926aa9a.js";
import "./QTd.ebdff96f.js";
import "./QItemSection.c2e831ff.js";
import "./QList.ea4ef22b.js";
import "./QTable.eeccd8e4.js";
import "./QMarkupTable.3666ae8c.js";
import "./QSelect.4dd48989.js";
import "./QItemLabel.c5588883.js";
import "./QMenu.9baac5c6.js";
import "./selection.3b9b612c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d8841d43.js";
import "./use-fullscreen.b2935117.js";
import "./axios.61cdb935.js";
import "./debug.b9d7424b.js";
import "./help.57a9d112.js";
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
