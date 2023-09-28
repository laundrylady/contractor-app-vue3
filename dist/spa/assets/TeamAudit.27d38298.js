import { _ as _sfc_main$1 } from "./AuditTimeline.e3b596fa.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.bcc73ba7.js";
import "./QTd.fac14a83.js";
import "./selection.9080dacd.js";
import "./QList.6ac42d03.js";
import "./QTable.bdd4cf0f.js";
import "./QMarkupTable.72bd8fd7.js";
import "./QSelect.18f2c4a2.js";
import "./QItemLabel.1284f5e7.js";
import "./QMenu.e574c94f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.76c6d608.js";
import "./use-fullscreen.a5c14c9d.js";
import "./axios.caba40e4.js";
import "./debug.ffa51329.js";
import "./help.f988fe57.js";
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
