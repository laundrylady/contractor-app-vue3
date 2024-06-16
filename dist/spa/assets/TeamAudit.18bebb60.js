import { _ as _sfc_main$1 } from "./AuditTimeline.0d1f76bf.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.97eff735.js";
import "./QTd.ebdf10f4.js";
import "./selection.8acc63c6.js";
import "./QList.43f7d494.js";
import "./QTable.4fd37b87.js";
import "./QMarkupTable.df34e0fd.js";
import "./QSelect.1a4da305.js";
import "./QItemLabel.a56031b0.js";
import "./QMenu.4a5ea2bb.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.2bd986f2.js";
import "./use-fullscreen.a091e2fe.js";
import "./axios.3e4f7477.js";
import "./debug.b9d7424b.js";
import "./help.87883cc2.js";
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
