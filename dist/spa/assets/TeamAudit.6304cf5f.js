import { _ as _sfc_main$1 } from "./AuditTimeline.cca3a639.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.db72ca64.js";
import "./QTd.7cd9d3fe.js";
import "./QItemSection.09d223bf.js";
import "./QList.131ffe4f.js";
import "./QTable.e7342190.js";
import "./QMarkupTable.a7078213.js";
import "./QSelect.bc7e34bf.js";
import "./QItemLabel.460983fa.js";
import "./QMenu.3581048a.js";
import "./selection.e28b0495.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.09a438a3.js";
import "./use-fullscreen.0d42d8b5.js";
import "./axios.5f476664.js";
import "./debug.b9d7424b.js";
import "./help.0879b50a.js";
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
