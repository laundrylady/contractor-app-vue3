import { _ as _sfc_main$1 } from "./AuditTimeline.9419a4c0.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.59e718a9.js";
import "./QTd.ec81b31f.js";
import "./QItemSection.957c96b8.js";
import "./QList.7a4c3f18.js";
import "./QTable.f08d8b6f.js";
import "./QMarkupTable.9e558d0c.js";
import "./QSelect.96d2136a.js";
import "./QItemLabel.c4941b88.js";
import "./QMenu.d95e8205.js";
import "./selection.f3848d99.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.4d3fd829.js";
import "./use-fullscreen.58bbce6d.js";
import "./axios.d55d466d.js";
import "./debug.b9d7424b.js";
import "./help.1741f6c1.js";
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
