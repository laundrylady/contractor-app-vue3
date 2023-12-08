import { Q as QHeader } from "./QHeader.7a4d0fd6.js";
import { Q as QPage } from "./QPage.1b056ec1.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout.277b1277.js";
import { a as api } from "./axios.769c3586.js";
import { u as useMixinDebug } from "./debug.972d445d.js";
import { B as defineComponent, aa as useRoute, i as inject, r as ref, o as onMounted, G as onBeforeUnmount, w as watch, by as resolveComponent, m as openBlock, K as createBlock, L as withCtx, l as createVNode, t as normalizeClass, z as createCommentVNode } from "./index.2b7cc3d6.js";
import { _ as _sfc_main$1 } from "./ContractorNav.5d3a8913.js";
import "./QResizeObserver.c9a7b5e0.js";
import "./QRouteTab.6b3dfa4c.js";
import "./QTabs.4d590d39.js";
import "./rtl.b51694b1.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorHome",
  setup(__props) {
    const route = useRoute();
    const bus = inject("bus");
    const model = ref();
    const getContractor = async () => {
      api.get("/public/user/contractor/profile").then((response) => {
        model.value = response.data;
        document.title = model.value.fullname;
      }).catch((response) => {
        useMixinDebug(response);
      });
    };
    onMounted(async () => {
      await getContractor();
      bus.on("getContractor", () => {
        getContractor();
      });
    });
    onBeforeUnmount(() => {
      bus.off("getContractor");
    });
    watch(() => route.params.id, (newVal) => {
      if (route.name === "contractor-dashboard") {
        if (newVal) {
          getContractor();
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(QLayout, {
        view: "lHh Lpr lFf",
        container: "",
        class: "layout-height"
      }, {
        default: withCtx(() => [
          createVNode(QHeader, {
            class: normalizeClass({ "page-title text-black": !_ctx.$q.dark.isActive, "bg-dark": _ctx.$q.dark.isActive }),
            bordered: ""
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1)
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, {
                padding: "",
                class: "q-pt-md layout-container q-pa-md"
              }, {
                default: withCtx(() => [
                  model.value && model.value.id ? (openBlock(), createBlock(_component_router_view, {
                    key: 0,
                    model: model.value
                  }, null, 8, ["model"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
