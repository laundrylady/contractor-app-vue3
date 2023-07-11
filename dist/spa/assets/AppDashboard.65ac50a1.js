import { Q as QPage } from "./QPage.95e86886.js";
import { u as useMixinSecurity } from "./security.ea0b574e.js";
import { A as defineComponent, o as onMounted, E as onBeforeUnmount, R as unref, l as openBlock, J as createBlock, y as createCommentVNode } from "./index.f6249b41.js";
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
