import { _ as _sfc_main$1 } from "./AuditTimeline.1ee3ae23.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.c627736b.js";
import "./QTd.0a38b871.js";
import "./QItemSection.0b813e93.js";
import "./QList.f1175db3.js";
import "./QTable.217a3d96.js";
import "./QMarkupTable.dc8f42ad.js";
import "./QSelect.a3c48af1.js";
import "./QItemLabel.cd608d87.js";
import "./QMenu.d2f8cf94.js";
import "./selection.d064a090.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1874b5d1.js";
import "./use-fullscreen.a4223194.js";
import "./axios.e461d9d4.js";
import "./debug.b9d7424b.js";
import "./help.27531953.js";
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
