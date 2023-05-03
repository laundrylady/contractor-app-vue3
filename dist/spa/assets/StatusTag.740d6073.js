import { Q as QBadge } from "./QBadge.4a0fce4e.js";
import { A as defineComponent, g as computed, m as openBlock, K as createBlock, U as unref, t as normalizeClass } from "./index.f596c8b4.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatusTag",
  props: {
    status: null,
    small: { type: Boolean },
    white: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const statusColor = computed(() => {
      if (!props.status) {
        return "positive";
      }
      if (props.white) {
        return "white";
      }
      if (props.status === "in_progress") {
        return "info";
      }
      if (props.status === "active") {
        return "positive";
      }
      if (props.status.toLowerCase() === "draft") {
        return "grey";
      }
      if (props.status === "confirmed") {
        return "info";
      }
      if (props.status === "DELETED") {
        return "negative";
      }
      return "positive";
    });
    const statusText = computed(() => {
      if (!props.status) {
        return "";
      }
      let label = props.status;
      if (props.status === "in_progress") {
        label = "In Progress";
      }
      if (props.status === "processed") {
        label = "Processed";
      }
      if (props.status === "active") {
        label = "Active";
      }
      if (props.status.toLowerCase() === "draft") {
        label = "Draft";
      }
      if (props.status.toLowerCase() === "paid") {
        label = "PAID";
      }
      if (props.status.toLowerCase() === "confirmed") {
        label = "Confirmed";
      }
      return label;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QBadge, {
        color: unref(statusColor),
        label: unref(statusText),
        class: normalizeClass({ "q-pa-xs": __props.small, "q-pa-sm": !__props.small })
      }, null, 8, ["color", "label", "class"]);
    };
  }
});
export { _sfc_main as _ };
