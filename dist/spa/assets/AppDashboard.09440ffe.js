import { Q as QPage } from "./QPage.38db1f22.js";
import { u as useMixinSecurity } from "./security.85dba6e8.js";
import { A as defineComponent, o as onMounted, E as onBeforeUnmount, R as unref, l as openBlock, J as createBlock, y as createCommentVNode } from "./index.ff28a0be.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppDashboard",
  setup(__props) {
    const user = useMixinSecurity();
    onMounted(() => {
      console.log("mounted");
    });
    onBeforeUnmount(() => {
      console.log("unmounted");
    });
    return (_ctx, _cache) => {
      return unref(user) ? (openBlock(), createBlock(QPage, {
        key: 0,
        padding: ""
      })) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };