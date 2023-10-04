import { _ as _sfc_main$1 } from "./GlobalAttachments.015b6341.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.8169762b.js";
import "./QToolbarTitle.772781db.js";
import "./QSelect.c057f867.js";
import "./selection.5b06526d.js";
import "./QItemLabel.da0d590a.js";
import "./QMenu.e55bc21e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.8b9fce97.js";
import "./QList.44d753a9.js";
import "./QUploader.ff0d0a13.js";
import "./QCircularProgress.eb4d7021.js";
import "./ClosePopup.c7194c55.js";
import "./index.esm.a48aae69.js";
import "./use-quasar.c28428ba.js";
import "./axios.a26d4bb7.js";
import "./NoRecords.ec69e47f.js";
import "./debug.ffa51329.js";
import "./help.c20124ee.js";
import "./DateField.94855174.js";
import "./QDate.48c51853.js";
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
