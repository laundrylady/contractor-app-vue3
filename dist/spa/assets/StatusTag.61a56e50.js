import { B as defineComponent, g as computed, m as openBlock, n as createElementBlock, a9 as createBlock, K as withCtx, N as QIcon, z as createCommentVNode, ab as createTextVNode, ac as toDisplayString, R as unref, t as normalizeClass, F as Fragment } from "./index.ede44c03.js";
import { Q as QBadge } from "./QBadge.a0b3d92a.js";
const _hoisted_1 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatusTag",
  props: {
    status: null,
    small: { type: Boolean },
    white: { type: Boolean },
    textOnly: { type: Boolean }
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
      if (["DELETED", "cancelled", "VOIDED"].indexOf(props.status) !== -1) {
        return "red";
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
      return openBlock(), createElementBlock(Fragment, null, [
        !__props.textOnly ? (openBlock(), createBlock(QBadge, {
          key: 0,
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
        }, 8, ["color", "class"])) : createCommentVNode("", true),
        __props.textOnly ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(unref(statusText)), 1)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export { _sfc_main as _ };
