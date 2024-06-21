import { _ as _sfc_main$1 } from "./AuditTimeline.b49ad44a.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.1e4623ca.js";
import "./QTd.7798e759.js";
import "./selection.20b85f26.js";
import "./QList.fe09f8cf.js";
import "./QTable.316d3a38.js";
import "./QMarkupTable.cb42defd.js";
import "./QSelect.61d1736d.js";
import "./QItemLabel.e4e7078f.js";
import "./QMenu.df7f77cc.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.37b0691e.js";
import "./use-fullscreen.89b148c6.js";
import "./axios.2e25613c.js";
import "./debug.b9d7424b.js";
import "./help.a835c626.js";
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
