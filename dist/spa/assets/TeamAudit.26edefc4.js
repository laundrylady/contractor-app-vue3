import { _ as _sfc_main$1 } from "./AuditTimeline.5d8566b8.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.38a6cef2.js";
import "./QTd.fcc7edb7.js";
import "./selection.2d4eb0bc.js";
import "./QList.e4894220.js";
import "./QTable.6b021727.js";
import "./QMarkupTable.e40d760d.js";
import "./QSelect.cc8bc4a2.js";
import "./QItemLabel.13b2748a.js";
import "./QMenu.c44b3421.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.4a13a1eb.js";
import "./use-fullscreen.77fc2967.js";
import "./axios.bc451377.js";
import "./debug.b9d7424b.js";
import "./help.e062646e.js";
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
