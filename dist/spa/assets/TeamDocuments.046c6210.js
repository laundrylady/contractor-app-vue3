import { _ as _sfc_main$1 } from "./GlobalAttachments.42e5a3ee.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.961c39a4.js";
import "./QToolbarTitle.ef5ed428.js";
import "./QSelect.dcaf1933.js";
import "./QItemSection.064b3d7e.js";
import "./QItemLabel.00cc2551.js";
import "./QMenu.6583c653.js";
import "./selection.85ecf339.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.89c72dc4.js";
import "./QList.8cbd4839.js";
import "./QUploader.d75107cb.js";
import "./QCircularProgress.63df1ca7.js";
import "./ClosePopup.643627f2.js";
import "./index.esm.56914d82.js";
import "./use-quasar.c518afee.js";
import "./axios.e9d6ab71.js";
import "./NoRecords.e8dd4f5f.js";
import "./debug.972d445d.js";
import "./help.202f749e.js";
import "./DateField.8b009ed3.js";
import "./QDate.0be65825.js";
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
