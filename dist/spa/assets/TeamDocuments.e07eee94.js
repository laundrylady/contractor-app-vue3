import { _ as _sfc_main$1 } from "./GlobalAttachments.fabc1251.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.2182576f.js";
import "./QToolbarTitle.17f51b38.js";
import "./QSelect.136ed1bb.js";
import "./selection.f936c299.js";
import "./QItemLabel.1a6e9b1c.js";
import "./QMenu.6bcc5c7b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QBtnGroup.73e109ab.js";
import "./QList.5b409a1a.js";
import "./QUploader.70d13acb.js";
import "./QCircularProgress.1ce2d138.js";
import "./ClosePopup.20112040.js";
import "./index.esm.c40dbff8.js";
import "./use-quasar.2b179c65.js";
import "./axios.5a455801.js";
import "./NoRecords.baca7fea.js";
import "./debug.ffa51329.js";
import "./help.258f7feb.js";
import "./DateField.7c01d2be.js";
import "./QDate.60c5abed.js";
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
