import { _ as _sfc_main$1 } from "./AuditTimeline.a788f694.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.80e136e1.js";
import "./QTd.baa6bd4f.js";
import "./selection.9ea5ec5d.js";
import "./QList.4042e6d6.js";
import "./QTable.15970372.js";
import "./QMarkupTable.3664b66c.js";
import "./QSelect.2c999da5.js";
import "./QItemLabel.1c53f4dc.js";
import "./QMenu.30761d00.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1936cfd0.js";
import "./use-fullscreen.94e04e73.js";
import "./axios.b8650811.js";
import "./debug.ffa51329.js";
import "./help.9e238adb.js";
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
