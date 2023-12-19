import { B as defineComponent, g as computed, m as openBlock, K as createBlock, L as withCtx, O as QIcon, z as createCommentVNode, ak as createTextVNode, aj as toDisplayString, S as unref, t as normalizeClass } from "./index.b933ddc7.js";
import { Q as QBadge } from "./QBadge.25543fb2.js";
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
      if (["DELETED", "cancelled", "VOID"].indexOf(props.status) !== -1) {
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
      if (props.status.toLowerCase() === "awaiting_payment") {
        label = "Awaiting Payment";
      }
      if (props.status.toLowerCase() === "ready_for_delivery") {
        label = "Ready For Delivery";
      }
      if (props.status.toLowerCase() === "cancelled") {
        label = "Cancelled";
      }
      if (props.status.toLowerCase() === "completed") {
        label = "Completed";
      }
      return label;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QBadge, {
        color: unref(statusColor),
        class: normalizeClass({ "q-pa-xs": __props.small, "q-pa-sm": !__props.small })
      }, {
        default: withCtx(() => [
          __props.status === "PAID" ? (openBlock(), createBlock(QIcon, {
            key: 0,
            name: "check",
            class: "q-mr-xs"
          })) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(unref(statusText)), 1)
        ]),
        _: 1
      }, 8, ["color", "class"]);
    };
  }
});
export { _sfc_main as _ };
