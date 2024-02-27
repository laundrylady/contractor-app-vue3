import { _ as _sfc_main$1 } from "./AuditTimeline.953cab7a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.08099017.js";
import "./QTd.1d018964.js";
import "./QItemSection.e2b74d1f.js";
import "./QList.456d7f85.js";
import "./QTable.dce95a50.js";
import "./QMarkupTable.cb22d8a3.js";
import "./QSelect.f2190d08.js";
import "./QItemLabel.c4904d43.js";
import "./QMenu.50fe9482.js";
import "./selection.6ee25a46.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1d1a1d81.js";
import "./use-fullscreen.0b914ca5.js";
import "./axios.61d5b832.js";
import "./debug.b9d7424b.js";
import "./help.c48cb5cb.js";
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
