import { _ as _sfc_main$1 } from "./GlobalAttachments.56f01c3f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.46e0a30b.js";
import "./QToolbarTitle.914445aa.js";
import "./QSelect.6b710984.js";
import "./QItemSection.353b1459.js";
import "./QItemLabel.9f7c9c71.js";
import "./QMenu.eccf08db.js";
import "./selection.7ea46a8f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.f5fabb28.js";
import "./QList.f64079fd.js";
import "./QUploader.c9b3de77.js";
import "./QCircularProgress.4400a51c.js";
import "./ClosePopup.9a218449.js";
import "./index.esm.7a3942ee.js";
import "./use-quasar.63b1b6fe.js";
import "./axios.4c2d8dd7.js";
import "./NoRecords.72c74875.js";
import "./debug.972d445d.js";
import "./help.c20d34e3.js";
import "./DateField.04ee338f.js";
import "./QDate.df542a60.js";
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
