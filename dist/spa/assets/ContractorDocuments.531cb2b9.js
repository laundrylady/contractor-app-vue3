import { _ as _sfc_main$1 } from "./GlobalAttachments.c2a01886.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aF as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.e7424e86.js";
import "./QToolbarTitle.b94b23ea.js";
import "./QSelect.fc8325f9.js";
import "./QItemSection.56dfbcc4.js";
import "./rtl.c1ddf9d1.js";
import "./format.711dd4cb.js";
import "./QBtnGroup.18af08f5.js";
import "./QList.4caebc00.js";
import "./QUploader.5f680c9e.js";
import "./QCircularProgress.ab003298.js";
import "./ClosePopup.351cedad.js";
import "./index.esm.484f53e2.js";
import "./use-quasar.71a833d1.js";
import "./axios.e112af7f.js";
import "./NoRecords.2fb860dc.js";
import "./debug.805a8aef.js";
import "./help.f4bb6a30.js";
import "./DateField.93a8e45b.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-h5" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "These documents are only visible to staff.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorDocuments",
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
          attachable_type: "User",
          class: "q-mb-lg"
        }, null, 8, ["attachable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
