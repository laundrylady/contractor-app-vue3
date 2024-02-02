import { _ as _sfc_main$1 } from "./AuditTimeline.dacc6eba.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.8e5fd2f9.js";
import "./QTd.0fcc1374.js";
import "./QItemSection.910187a2.js";
import "./QList.5e2c6f45.js";
import "./QTable.5e101451.js";
import "./QMarkupTable.c3e10aaf.js";
import "./QSelect.a1aca694.js";
import "./QItemLabel.458cb545.js";
import "./QMenu.e160cbd1.js";
import "./selection.03438c15.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f768b62e.js";
import "./use-fullscreen.30c8c93a.js";
import "./axios.95284358.js";
import "./debug.b9d7424b.js";
import "./help.e3a4d611.js";
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
