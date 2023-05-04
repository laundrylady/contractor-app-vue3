import { _ as _sfc_main$1 } from "./GlobalAttachments.a79c90db.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.743d7681.js";
import "./QToolbarTitle.c67bd27f.js";
import "./QSelect.dbc7f1c3.js";
import "./QItemSection.d4f7e02a.js";
import "./rtl.e9486434.js";
import "./format.99445b5f.js";
import "./QBtnGroup.48eda436.js";
import "./QList.9ba32f52.js";
import "./QUploader.8e44f9f1.js";
import "./QCircularProgress.9d27d590.js";
import "./ClosePopup.74a21213.js";
import "./index.esm.acb925a8.js";
import "./use-quasar.61edf80b.js";
import "./axios.67dbaacc.js";
import "./NoRecords.f08d006a.js";
import "./debug.805a8aef.js";
import "./help.dfac819e.js";
import "./DateField.3d1e0179.js";
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
