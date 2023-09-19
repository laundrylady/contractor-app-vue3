import { _ as _sfc_main$1 } from "./AuditTimeline.44bb5c6d.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.d79e1fe7.js";
import "./QTd.279c749f.js";
import "./selection.ee5e7cec.js";
import "./QList.8ec7e72e.js";
import "./QTable.6bcbd9e6.js";
import "./QMarkupTable.0f70e579.js";
import "./QSelect.4bc6acd3.js";
import "./QItemLabel.fce76322.js";
import "./QMenu.4d6d0b24.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1a03a60d.js";
import "./use-fullscreen.521238a2.js";
import "./axios.45af212b.js";
import "./debug.ffa51329.js";
import "./help.e45c84ac.js";
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
