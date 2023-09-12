import { Q as QImg } from "./QImg.90108011.js";
import { A as defineComponent, f as computed, l as openBlock, J as createBlock, K as withCtx, R as unref, y as createCommentVNode, aG as createTextVNode, aH as toDisplayString, bv as QAvatar } from "./index.b04b1049.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserAvatar",
  props: {
    user: null,
    size: null
  },
  setup(__props) {
    const props = __props;
    const userDetails = computed(() => {
      if (!props.user) {
        return {
          initials: "LL",
          avatar: null,
          color: "white",
          title: "System",
          id: 1
        };
      }
      return {
        initials: props.user && props.user.first_name && props.user.last_name ? `${props.user.first_name.slice(0, 1)}${props.user.last_name.slice(0, 1)}` : "LL",
        avatar: props.user.avatar,
        color: !props.user.avatar ? "secondary" : "",
        title: props.user.fullname,
        id: props.user.id
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QAvatar, {
        color: unref(userDetails).color,
        "text-color": "white",
        title: unref(userDetails).title,
        size: __props.size || "32px"
      }, {
        default: withCtx(() => [
          unref(userDetails).avatar ? (openBlock(), createBlock(QImg, {
            key: 0,
            src: `/api/public/user/useravatar?fetch=thumb&userId=${unref(userDetails).id}&cb=${new Date().getTime()}`,
            fit: "contain",
            "no-spinner": "",
            "no-transition": ""
          }, null, 8, ["src"])) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString(unref(userDetails).initials), 1)
        ]),
        _: 1
      }, 8, ["color", "title", "size"]);
    };
  }
});
export { _sfc_main as _ };
