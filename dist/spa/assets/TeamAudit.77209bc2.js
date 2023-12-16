import { _ as _sfc_main$1 } from "./AuditTimeline.8eb2fd59.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.c5118e29.js";
import "./QTd.e19a1fea.js";
import "./QItemSection.f83fd0c5.js";
import "./QList.98c06205.js";
import "./QTable.f660c723.js";
import "./QMarkupTable.fc2f95c8.js";
import "./QSelect.a6958ac0.js";
import "./QItemLabel.8416713a.js";
import "./QMenu.9ddada38.js";
import "./selection.7210b64a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a2cff885.js";
import "./use-fullscreen.ac4597f7.js";
import "./axios.4b346699.js";
import "./debug.972d445d.js";
import "./help.3ac2b17c.js";
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
