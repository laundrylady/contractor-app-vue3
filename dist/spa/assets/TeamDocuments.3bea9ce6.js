import { _ as _sfc_main$1 } from "./GlobalAttachments.80ade2b6.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.1d2cc295.js";
import "./QToolbarTitle.4d5be4c5.js";
import "./QSelect.96553d0d.js";
import "./QItemSection.bf749560.js";
import "./format.2692d829.js";
import "./QBtnGroup.dbeff857.js";
import "./QList.7e21fa8d.js";
import "./QUploader.fbefe9db.js";
import "./QCircularProgress.2911dda3.js";
import "./ClosePopup.bd505eea.js";
import "./index.esm.2211563a.js";
import "./use-quasar.f80b811d.js";
import "./axios.91d62303.js";
import "./NoRecords.5c0e8bdd.js";
import "./debug.805a8aef.js";
import "./help.f0ed8230.js";
import "./DateField.a1bafec0.js";
import "./use-cache.b0833c75.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "These documents are only visible to staff.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamDocuments",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("document.namePlural")), 1),
        _hoisted_3,
        createVNode(_sfc_main$1, {
          attachable_id: __props.model.id,
          attachable_type: "Team"
        }, null, 8, ["attachable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
