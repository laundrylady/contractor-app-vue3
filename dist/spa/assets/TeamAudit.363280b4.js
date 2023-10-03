import { _ as _sfc_main$1 } from "./AuditTimeline.0a6100cc.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.8de41301.js";
import "./QTd.aad9959a.js";
import "./selection.ac0446c0.js";
import "./QList.c0b37bba.js";
import "./QTable.a8cf06a5.js";
import "./QMarkupTable.3ab3547c.js";
import "./QSelect.ad059350.js";
import "./QItemLabel.aed68b16.js";
import "./QMenu.40e69310.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.722a6ba9.js";
import "./use-fullscreen.48463a2c.js";
import "./axios.fd57f097.js";
import "./debug.ffa51329.js";
import "./help.4240928c.js";
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
